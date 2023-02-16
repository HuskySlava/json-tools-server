import express from "express";
const router = express.Router();

import {JsonModel} from "../models/json.model";

router.post("/json", async (req, res) => {
    // const test = new JsonModel({a: 1, b: 2});
    // const testB = new JsonModel("{a: 1, \"b\": 2}");

    console.log(req.body);

    // res.sendStatus(200);
});

export default router;