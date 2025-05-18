import express from "express";
import { protect } from "../middlewares/auth.middleware.js";
import {
  registerUser,
  loginUser,
  getUserInfo,
} from "../controllers/auth.controller.js";
import upload from "../middlewares/upload.middleware.js";

const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/getUser").get(protect, getUserInfo);

router.route("/upload-image").post(upload.single("image"), (req, res) => {
  if (req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }
  const imageUrl = `${req.protocol}://${req.get("host")}/uploads/${
    req.file.filename
  }`;
  res.status(200).json({ imageUrl });
});

export default router;
