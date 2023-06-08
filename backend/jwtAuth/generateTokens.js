import jwt from 'jsonwebtoken'
import dotenv from "dotenv";

dotenv.config();

// Access token generation

const generateAccessToken = (user) => {
  const payload = {
    userId: user.uid,
    username: user.username,
    role: user.role,
  };

  const options = {
    expiresIn: "15m", // Set the access token expiration time
  };

  return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, options);
};

// Refresh token generation

const generateRefreshToken = (user) => {
  const payload = {
    email: user.email,
  };

  const options = {
    expiresIn: "2d", // Set the refresh token expiration time
  };

  return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, options);
};


const verifyAccessToken = (token) => {
  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    return decoded;
  } catch (error) {
    // Token is invalid or expired
    return null;
  }
};

const verifyRefreshToken = (token) => {
  try {
    const decoded = jwt.verify(token, process.env.REFRESH_TOKEN_SECRET);
    return decoded;
  } catch (error) {
    // Token is invalid or expired
    return null;
  }
};

export {
  generateAccessToken,
  generateRefreshToken,
  verifyAccessToken,
  verifyRefreshToken,
};