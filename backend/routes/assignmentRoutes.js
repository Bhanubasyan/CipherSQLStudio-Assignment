const express = require("express");

const router = express.Router();
const { getAssignments, getAssignmentById } =
require("../controllers/assignmentController");

router.get("/assignments/:id", getAssignmentById);
router.get("/assignments",getAssignments);

module.exports = router;