// POST /auth/register → Register (student/alumni/admin)
// POST /auth/login → Login, returns JWT
// GET /auth/me → Current user details
// POST /auth/profile/update → Update profile
// POST /auth/logout → Logout, invalidates JWT
// POST /auth/forgot-password → Request password reset
// POST /auth/reset-password → Reset password with token
// POST /auth/verify-email → Verify email address
// POST /auth/resend-verification → Resend verification email
import express from "express";
import { register, login, profile, getStudentById, forgotPassword, resetPassword } from "../controllers/authController";
import { authMiddleware } from "../middleware/authMiddleware";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/profile", authMiddleware, profile);
router.get("/:id", getStudentById);
router.post("/forgot-password",forgotPassword);
router.post("/reset-password",resetPassword)
router




export default router;
