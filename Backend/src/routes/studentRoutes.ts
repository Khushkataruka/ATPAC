// GET /students → Get all students (filters: branch, batch, status)
// GET /students/:id → Get single student details
// POST /students → Add new student (admin only)
// PATCH /students/:id → Update student details
// DELETE /students/:id → Delete student (admin only)
// // GET /students/:id/offers → Get all offers for a student
// GET /students/:id/offers/:offerId → Get single offer details for a student
// POST /students/:id/offers → Add new offer for a student
// PATCH /students/:id/offers/:offerId → Update offer details for a student
// DELETE /students/:id/offers/:offerId → Delete offer for a student
// routes/studentRoutes.ts
import express from "express";
import * as studentController from "../controllers/studentController";
import * as offerController from "../controllers/offerController";

const router = express.Router();

// Student routes
router.get("/", studentController.getAllStudents);
router.get("/:id", studentController.getStudentById);
router.post("/", studentController.addStudent);
router.patch("/:id", studentController.updateStudent);
router.delete("/:id", studentController.deleteStudent);

// Offer routes (nested)
router.get("/:id/offers", offerController.getOffers);
router.get("/:id/offers/:offerId", offerController.getOfferById);
router.post("/:id/offers", offerController.addOffer);
router.patch("/:id/offers/:offerId", offerController.updateOffer);
router.delete("/:id/offers/:offerId", offerController.deleteOffer);

export default router;
