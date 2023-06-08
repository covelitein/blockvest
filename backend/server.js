import express from "express";
import cors from "cors";
import fileUpload from "express-fileupload";
import session from "express-session";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import routes from "./routes.js";
import { fetchUserSession } from "./middleware/fetchUserSession.js";

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
    secret: process.env.JWT_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);
router.use(cookieParser());
app.use(cookieParser());
app.use(cors());
app.use(express.json());
app.use(express.static("assets"));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(fetchUserSession);
app.use("/", router);

routes(router)


app.listen(port, () => {
  console.log(`server started at port http://localhost:${port}`);
});
