import express from "express";
import {
  addIncome,
  getAllIncome,
  deleteIncome,
  downloadIncomeExcel,
} from "../controllers/income.controller.js";
import { protect } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.route("/add").post(protect, addIncome);
router.route("/get").get(protect, getAllIncome);
router.route("/downloadexcel").get(protect, downloadIncomeExcel);
router.route("/:id").delete(protect, deleteIncome);

export default router;
