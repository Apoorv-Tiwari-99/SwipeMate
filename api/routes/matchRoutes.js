import express from "express";
import { protectedRoute } from "../middleware/auth.js";
import { getMatches, getUserProfiles, swipeLeft, swipeRight } from "../controllers/matchController.js";

const router = express.Router();

router.post("/swipe-right/:likedUserId", protectedRoute, swipeRight);
router.post("/swipe-left/:dislikedUserId", protectedRoute, swipeLeft);

router.get("/", protectedRoute, getMatches);
router.get("/user-profile", protectedRoute, getUserProfiles);

export default router;

