import express from 'express';
import { createListing, deleteListing, updateListing, getListing } from '../controllers/listing.controller.js';
import { veriftToken } from '../utils/veriftUser.js';

const router = express.Router();

router.post('/create' ,veriftToken, createListing);
router.delete('/delete/:id', veriftToken, deleteListing);
router.post('/update/:id', veriftToken, updateListing);
router.get('/get/:id', getListing);

export default router;