import express from "express";
import { searchcheater } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/search",searchcheater);
export default router;

