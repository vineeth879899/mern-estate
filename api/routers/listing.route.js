import express from 'express';
import { createListing, deleteListing } from '../controllers/listing.controller.js';
import { veriftToken } from '../utils/veriftUser.js';

const router = express.Router();

router.post('/create' ,veriftToken, createListing);
router.delete('/delete/:id', veriftToken, deleteListing);

export default router;