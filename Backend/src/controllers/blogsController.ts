import { Request, Response } from "express";
import Blog from "../models/blogsModel";
import Student from "../models/studentModel";

/**
 * @desc    Create a new interview experience
 * @route   POST /api/interviews
 * @access  Private (admin/moderator)
 */
export const createInterviewExperience = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      studentName,
      rollNo,
      branch,
      role,
      jobType,
      campusType,
      workMode,
      location,
      offerStatus,
      companyName,
      compensation,
      hiringPeriod,
      difficultyLevel,
      selectionProcess,
      interviewRounds,
      experienceSummary,
      tips,
      tags,
      author,
    } = req.body;

    // ✅ Normalize roll number
    const normalizedRollNo = rollNo.toLowerCase();

    // ✅ Validate student by rollNo (case-insensitive)
    const studentExists = await Student.findOne({
      rollNo: { $regex: new RegExp(`^${normalizedRollNo}$`, "i") },
    });

    if (!studentExists) {
      res.status(404).json({ success: false, message: "Student not found" });
      return;
    }

    const newExperience = new Blog({
      studentName,
      rollNo: normalizedRollNo,
      branch,
      role,
      jobType,
      campusType,
      workMode,
      location,
      offerStatus,
      companyName,
      compensation,
      hiringPeriod,
      difficultyLevel,
      selectionProcess,
      interviewRounds,
      experienceSummary,
      tips,
      tags,
      author,
    });

    const savedExperience = await newExperience.save();
    res.status(201).json({ success: true, data: savedExperience });
  } catch (error) {
    console.error("Error creating interview experience:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

/**
 * @desc    Get all interview experiences
 * @route   GET /api/interviews
 * @access  Public
 */
export const getAllInterviewExperiences = async (req: Request, res: Response): Promise<void> => {
  try {
    const interviews = await Blog.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, count: interviews.length, data: interviews });
  } catch (error) {
    console.error("Error fetching interviews:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

/**
 * @desc    Get single interview experience by roll number
 * @route   GET /api/interviews/:rollNo
 * @access  Public
 */
export const getInterviewById = async (req: Request, res: Response): Promise<void> => {
  try {
    const rollNo = req.params.rollNo.toLowerCase();

    const interview = await Blog.findOne({
      rollNo: { $regex: new RegExp(`^${rollNo}$`, "i") },
    });

    if (!interview) {
      res.status(404).json({ success: false, message: "Interview not found" });
      return;
    }

    res.status(200).json({ success: true, data: interview });
  } catch (error) {
    console.error("Error fetching interview:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

/**
 * @desc    Update interview experience
 * @route   PUT /api/interviews/:rollNo
 * @access  Private (admin/moderator)
 */
export const updateInterviewExperience = async (req: Request, res: Response): Promise<void> => {
  try {
    const rollNo = req.params.rollNo.toLowerCase();

    const updatedInterview = await Blog.findOneAndUpdate(
      { rollNo: { $regex: new RegExp(`^${rollNo}$`, "i") } },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedInterview) {
      res.status(404).json({ success: false, message: "Interview not found" });
      return;
    }

    res.status(200).json({ success: true, data: updatedInterview });
  } catch (error) {
    console.error("Error updating interview:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

/**
 * @desc    Delete interview experience
 * @route   DELETE /api/interviews/:rollNo
 * @access  Private (admin/moderator)
 */
export const deleteInterviewExperience = async (req: Request, res: Response): Promise<void> => {
  try {
    const rollNo = req.params.rollNo.toLowerCase();

    const deletedInterview = await Blog.findOneAndDelete({
      rollNo: { $regex: new RegExp(`^${rollNo}$`, "i") },
    });

    if (!deletedInterview) {
      res.status(404).json({ success: false, message: "Interview not found" });
      return;
    }

    res.status(200).json({ success: true, message: "Interview deleted successfully" });
  } catch (error) {
    console.error("Error deleting interview:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
