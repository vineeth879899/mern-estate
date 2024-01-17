import express from 'express';
import { createListing } from '../controllers/listing.controller.js';
import { veriftToken } from '../utils/veriftUser.js';

const router = express.Router();

router.post('/create' ,veriftToken, createListing);

export default router;