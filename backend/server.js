import express from "express";
import cors from "cors";
import fileUpload from "express-fileupload";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import session from "express-session";
import cookieParser from "cookie-parser";
import User from "./model.js";
import dotenv from "dotenv";
import helmet from "helmet";

dotenv.config();
const app = express();
const port = 4300;
const router = express.Router();

app.use(
  fileUpload({
    limits: { fileSize: 3 * 1024 * 1024 }, // 3MB
  })
);

app.use(
  session({
    secret: process.env.SESSION_KEY,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(cookieParser());
app.use(cors());
app.use(express.json());
app.use(express.static("assets"));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use("/", router);

function generateCSRFToken() {
  const tokenLength = 16;
  const saltRounds = 10;

  return new Promise((resolve, reject) => {
    bcrypt.genSalt(saltRounds, (err, salt) => {
      if (err) {
        reject(err);
      } else {
        bcrypt.hash("csrf-token", salt, (err, hash) => {
          if (err) {
            reject(err);
          } else {
            const shortenedToken = hash.slice(0, tokenLength * 2);
            resolve(shortenedToken);
          }
        });
      }
    });
  });
}

app.use(async (req, res, next) => {
  if (!req.session.csrfToken) {
    try {
      const csrfToken = await generateCSRFToken();
      req.session.csrfToken = csrfToken;
    } catch (err) {
      console.error("Failed to generate CSRF token:", err);
    }
  }
  next();
});

router.get("/form", (req, res) => {
  const csrfToken = req.session.csrfToken;
  console.log("CSRF Token:", csrfToken);
  res.status(201).json({ csrfToken });
});

/* Register route */
router.post("/register", async (req, res) => {
  try {
    if (token !== req.session.csrfToken)
      return res.status(403).send({ message: "invalid token" });

    const { fullname, username, email, phonenumber, address, password, token } =
      req.body;

    if (
      !fullname ||
      !username ||
      !email ||
      !phonenumber ||
      !address ||
      !password
    )
      return res.status(400).send({ message: "Fields cannot be empty!" });

    const user = await User.findOne({
      where: {
        username,
        email,
        phonenumber,
      },
    });

    if (user)
      return res
        .status(402)
        .send({ message: "user with this data already exists" });

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    User.create({
      fullname,
      username,
      email,
      phonenumber,
      address,
      password: hashedPassword,
    });

    res.status(201).send({ message: "Registration successful!" });
  } catch (err) {
    res.status(500).send({ message: "An error occured" });
    console.log(err);
  }
});

/* Login route */

router.post("/login", async (req, res) => {
  try {
    if (token !== req.session.csrfToken)
      return res.status(403).send({ message: "invalid token" });

    const { username, password } = req.body;

    if (!username || !password)
      return res.status(400).send({ message: "Fields cannot be empty" });


    const user = User.findOne({
      where:{
        username,
        password
      }
    })

    if(!user) res.status(400).send({ message: "user does not exist" });

    const verified = await bcrypt.compare(password, user.password)

    if(!verified) return res.status(402).send({ message: "invalid credential" })

    delete req.session.csrfToken
    res.status(201).send({ message: "Registration successful!" });
  } catch (error) {
    res.status(500).send({ message: "An error occured" });
    console.log(err);
  }
});

const generateAccessToken = (user)=> {
  // Generate an access token with the user information
  const payload = { password: user.password, email: user.email };
  const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_PRIVATE_KEY, {
    expiresIn: "14m",
  });
  
  const refreshToken = jwt.sign(
    payload,
    process.env.REFRESH_TOKEN_PRIVATE_KEY,
    { expiresIn: "30d" }
  );

  return { accessToken, refreshToken };
}

// router.post("/refresh-token", (req, res) => {
//   // Extract the refresh token from the request body
//   const { refreshToken } = req.body;

//   // Verify the refresh token and generate a new access token
//   // (You can use a library like jsonwebtoken to handle token operations)
//   try {
//     const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
//     const user = getUserById(decoded.userId);
//     const newAccessToken = generateAccessToken(user);

//     // Send the new access token as the response
//     res.json({ token: newAccessToken });
//   } catch (error) {
//     // Handle token verification or generation errors
//     res.status(500).json({ error: "Token refresh failed" });
//   }
// });

// app.get("/protected-api", authenticateToken, (req, res) => {
//   // The request has a valid access token, so perform the protected operation
//   res.json({ message: "Protected API response" });
// });

// Middleware function to authenticate the access token
// function authenticateToken(req, res, next) {
//   const authHeader = req.headers.authorization;
//   const token = authHeader && authHeader.split(" ")[1];

//   // Check if the access token is provided in the request header
//   if (!token) {
//     return res.status(401).json({ error: "Access token not provided" });
//   }

//   // Verify the access token and handle verification errors
//   jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
//     if (err) {
//       return res.status(403).json({ error: "Invalid access token" });
//     }

//     // Access token is valid, attach the user object to the request for further processing
//     req.user = user;
//     next();
//   });
// }

app.listen(port, () => {
  console.log(`server started at port http://localhost:${port}`);
});
