// controllers/studentController.ts
import { Request, Response } from "express";
import Student from "../models/studentModel";
import Offer from "../models/offerRole";

// Get all students (with optional filters)
export const getAllStudents = async (req: Request, res: Response) => {
  try {
    const { branch, batch, currentStatus } = req.query;
    const filter: any = {};
    if (branch) filter.branch = branch;
    if (batch) filter.batch = Number(batch);
    if (currentStatus) filter.currentStatus = currentStatus;

    const students = await Student.find(filter).populate("offers");
    res.json(students);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
};

// Get single student by ID
export const getStudentById = async (req: Request, res: Response) => {
  try {
    const student = await Student.findById(req.params.id).populate("offers");
    if (!student) return res.status(404).json({ message: "Student not found" });
    res.json(student);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
};

// Add new student
export const addStudent = async (req: Request, res: Response) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.status(201).json(student);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
};

// Update student
export const updateStudent = async (req: Request, res: Response) => {
  try {
    const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!student) return res.status(404).json({ message: "Student not found" });
    res.json(student);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
};

// Delete student
export const deleteStudent = async (req: Request, res: Response) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);
    if (!student) return res.status(404).json({ message: "Student not found" });
    res.json({ message: "Student deleted" });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
};
