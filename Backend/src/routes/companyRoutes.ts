import express from "express";
import {
  createInterviewExperience,
  getAllInterviewExperiences,
  getInterviewById,
  updateInterviewExperience,
  deleteInterviewExperience,
} from "../controllers/blogsController";

const router = express.Router();

router.post("/", createInterviewExperience);
router.get("/", getAllInterviewExperiences);
router.get("/:id", getInterviewById);
router.put("/:id", updateInterviewExperience);
router.delete("/:id", deleteInterviewExperience);

export default router;
