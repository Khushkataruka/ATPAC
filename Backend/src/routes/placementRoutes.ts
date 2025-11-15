import express from "express";
import {
  createPlacement,
  getAllPlacements,
  getPlacementById,
  updatePlacement,
  deletePlacement,
} from "../controllers/placementController"; // Ensure this path is correct

const router = express.Router();

// Routes for getting all placements and creating a new one
router.route("/")
  .get(getAllPlacements)
  .post(createPlacement);

// Routes for getting, updating, and deleting a single placement by its ID
router.route("/:id")
  .get(getPlacementById)
  .put(updatePlacement)
  .delete(deletePlacement);

export default router;