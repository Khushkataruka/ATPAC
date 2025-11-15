import { Request, Response } from "express";
import Placement from "../models/placementModel";

// @desc    Create a new placement record
// @route   POST /api/placements
// @access  Private
export const createPlacement = async (req: Request, res: Response) => {
  try {
    const {
      companyName,
      departmentName,
      degree,
      batchYear,
      studentCount,
      type,
    } = req.body;

    if (!companyName || !departmentName || !degree || !batchYear || !type) {
      return res
        .status(400)
        .json({ message: "Please provide all required fields" });
    }

    const batch = Number(batchYear); // 🔥 Always convert

    const placement = new Placement({
      companyName,
      departmentName,
      degree,
      batchYear: batch,
      studentCount,
      type,
    });

    const savedPlacement = await placement.save();
    res.status(201).json(savedPlacement);
  } catch (error) {
    console.error("❌ Error creating Placement record:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// @desc    Get all placement records with filtering
// @route   GET /api/placements
// @access  Public
export const getAllPlacements = async (req: Request, res: Response) => {
  try {
    const query: any = {};

    if (req.query.companyName) query.companyName = req.query.companyName;
    if (req.query.departmentName) query.departmentName = req.query.departmentName;
    if (req.query.degree) query.degree = req.query.degree;
    if (req.query.batchYear)
      query.batchYear = Number(req.query.batchYear); // 🔥 convert here
    if (req.query.type) query.type = req.query.type;

    const placements = await Placement.find(query).sort({ createdAt: -1 });

    res.status(200).json(placements);
  } catch (error) {
    console.error("❌ Error fetching Placement records:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// @desc    Get a single placement record by ID
// @route   GET /api/placements/:id
// @access  Public
export const getPlacementById = async (req: Request, res: Response) => {
  try {
    const placement = await Placement.findById(req.params.id);

    if (!placement) {
      return res.status(404).json({ message: "Placement record not found" });
    }

    res.status(200).json(placement);
  } catch (error) {
    console.error("❌ Error fetching single Placement record:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// @desc    Update a placement record by ID
// @route   PUT /api/placements/:id
// @access  Private
export const updatePlacement = async (req: Request, res: Response) => {
  try {
    const updateData = { ...req.body };

    // 🔥 Convert batchYear if provided in update body
    if (updateData.batchYear) {
      updateData.batchYear = Number(updateData.batchYear);
    }

    const updatedPlacement = await Placement.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true, runValidators: true }
    );

    if (!updatedPlacement) {
      return res.status(404).json({ message: "Placement record not found" });
    }

    res.status(200).json(updatedPlacement);
  } catch (error) {
    console.error("❌ Error updating Placement record:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// @desc    Delete a placement record by ID
// @route   DELETE /api/placements/:id
// @access  Private
export const deletePlacement = async (req: Request, res: Response) => {
  try {
    const placement = await Placement.findByIdAndDelete(req.params.id);

    if (!placement) {
      return res.status(404).json({ message: "Placement record not found" });
    }

    res.status(200).json({ message: "Placement record deleted successfully" });
  } catch (error) {
    console.error("❌ Error deleting Placement record:", error);
    res.status(500).json({ message: "Server error" });
  }
};
