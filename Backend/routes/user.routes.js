import express from "express";
import { searchcheater } from "../controllers/user.controller.js";

const router = express.Router();

/**
 * @openapi
 * /search:
 *   get:
 *     summary: Search for a cheater by email
 *     parameters:
 *       - in: query
 *         name: email
 *         required: true
 *         schema:
 *           type: string
 *           format: email
 *     responses:
 *       200:
 *         description: User found
 *       400:
 *         description: Invalid email
 *       404:
 *         description: User not found
 *       500:
 *         description: Internal server error
 */
router.get("/search", searchcheater);

export default router;
