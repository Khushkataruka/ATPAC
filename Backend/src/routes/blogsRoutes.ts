// routes/blogRoutes.ts
import { Router } from "express";
import {
  createInterviewExperience,
  getAllInterviewExperiences,
  getInterviewById,
  updateInterviewExperience,
  deleteInterviewExperience,

} from "../controllers/blogsController";

const router = Router();

// Create a new blog
router.post("/", createInterviewExperience);

// Get all blogs
router.get("/", getAllInterviewExperiences);

// Get a single blog by ID
router.get("/:rollNo", getInterviewById);

// Update a blog by ID
router.patch("/:rollNo", updateInterviewExperience);

// Delete a blog by ID
router.delete("/:rollNo", deleteInterviewExperience);

export default router;
