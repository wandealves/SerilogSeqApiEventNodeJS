const express = require("express");
const router = express.Router();
const eventController = require("./event");

router.get("/events", eventController.list);
router.post("/events", eventController.create);
router.put("/events/:id", eventController.update);
router.delete("/events/:id", eventController.remove);
module.exports = router;
