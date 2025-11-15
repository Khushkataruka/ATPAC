import { Request, Response } from "express";
import Company from "../models/companyModel";

// @desc    Get all companies
// @route   GET /api/companies
// @access  Public
export const getCompanies = async (req: Request, res: Response) => {
  try {
    const companies = await Company.find().sort({ createdAt: -1 });
    res.status(200).json(companies);
  } catch (error) {
    console.error("❌ Error fetching companies:", error);
    res.status(500).json({ message: "Server error" });
  }
};
