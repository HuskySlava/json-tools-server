import express from "express";
const router = express.Router();

router.get("*", async (req, res) => {
    res.sendStatus(404);
});

export default router;