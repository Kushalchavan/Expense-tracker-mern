import express from "express";
import {
  addExpense,
  getAllExpense,
  deleteExpense,
  downloadExpenseExcel,
} from "../controllers/expense.controller.js";
import { protect } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.route("/add").post(protect, addExpense);
router.route("/get").get(protect, getAllExpense);
router.route("/downloadexcel").get(protect, downloadExpenseExcel);
router.route("/:id").delete(protect, deleteExpense);

export default router;
