// controllers/offerController.ts
import { Request, Response } from "express";
import Offer from "../models/offerRole";
import Student from "../models/studentModel";

// Get all offers for a student
export const getOffers = async (req: Request, res: Response) => {
  try {
    const offers = await Offer.find({ studentId: req.params.id }).populate("companyId");
    res.json(offers);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
};

// Get single offer for a student
export const getOfferById = async (req: Request, res: Response) => {
  try {
    const offer = await Offer.findById(req.params.offerId).populate("companyId");
    if (!offer) return res.status(404).json({ message: "Offer not found" });
    res.json(offer);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
};

// Add new offer for a student
export const addOffer = async (req: Request, res: Response) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) return res.status(404).json({ message: "Student not found" });

    const offer = new Offer({ ...req.body, studentId: student._id });
    await offer.save();

    student.offers.push(offer._id);
    await student.save();

    res.status(201).json(offer);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
};

// Update offer
export const updateOffer = async (req: Request, res: Response) => {
  try {
    const offer = await Offer.findByIdAndUpdate(req.params.offerId, req.body, { new: true });
    if (!offer) return res.status(404).json({ message: "Offer not found" });
    res.json(offer);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
};

// Delete offer
export const deleteOffer = async (req: Request, res: Response) => {
  try {
    const offer = await Offer.findByIdAndDelete(req.params.offerId);
    if (!offer) return res.status(404).json({ message: "Offer not found" });

    await Student.findByIdAndUpdate(req.params.id, { $pull: { offers: offer._id } });

    res.json({ message: "Offer deleted" });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
};
