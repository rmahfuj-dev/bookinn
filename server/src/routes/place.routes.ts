import express, { Router } from "express";
import { getPlaces } from "../controllers/place.controller.js";

const router: Router = express.Router();

router.get("/", getPlaces);

export default router;