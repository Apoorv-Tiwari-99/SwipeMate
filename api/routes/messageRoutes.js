import express from "express";
import { protectedRoute } from "../middleware/auth.js";
import { getConversation, sendMessage } from "../controllers/messageController.js";

const router=express.Router();

router.use(protectedRoute);

router.post("/send",sendMessage);
router.get("/conversation/:userId",getConversation);




export default router;