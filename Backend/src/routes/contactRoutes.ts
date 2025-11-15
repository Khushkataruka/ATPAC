import express from "express";
import {
  createContactMessage,
  getAllContactMessages,
  getContactMessageById,
  deleteContactMessage,
} from "../controllers/contactController";
// import { protect, admin } from "../middleware/authMiddleware"; // Note: You need to create this middleware

const router = express.Router();

/*
 * @route   POST /api/contact
 * @desc    Submit a new contact message
 * @access  Public
 */
router.post("/", createContactMessage);


/*
 * @route   GET /api/contact
 * @desc    Get all contact messages
 * @access  Private/Admin
 */
// router.get("/", protect, admin, getAllContactMessages);

// /*
//  * @route   GET /api/contact/:id
//  * @desc    Get a single contact message by ID
//  * @access  Private/Admin
//  */
// router.get("/:id", protect, admin, getContactMessageById);

// /*
//  * @route   DELETE /api/contact/:id
//  * @desc    Delete a contact message
//  * @access  Private/Admin
//  */
// router.delete("/:id", protect, admin, deleteContactMessage);


export default router;