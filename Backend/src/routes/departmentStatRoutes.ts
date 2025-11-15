import express from "express";
import {
    getDepartmentStats,
    createDepartmentStat,
    getDepartmentStat,       // <-- Use this new name
    updateDepartmentStat,    // <-- Use this new name
    deleteDepartmentStat,    // <-- Use this new name
} from "../controllers/departmentStatController"; // Ensure correct path

const router = express.Router();

// Routes for the base path: fetching all stats or creating a new one
router.route("/")
    .get(getDepartmentStats)
    .post(createDepartmentStat);

// Routes for a specific stat, identified by its unique keys
router.route("/:departmentName/:degree/:batchYear")
    .get(getDepartmentStat)
    .put(updateDepartmentStat)
    .delete(deleteDepartmentStat);

export default router;