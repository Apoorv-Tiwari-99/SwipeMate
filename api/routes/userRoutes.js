import express from "express";
import { protectedRoute } from "../middleware/auth.js";
import { updateProfile } from "../controllers/userController.js";

const router=express.Router();

router.put("/update",protectedRoute,updateProfile);

export default router;