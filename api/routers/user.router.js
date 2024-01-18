import express from 'express';
import { deleteUser, getUserListings, test ,updateUser} from '../controllers/user.controller.js';
import { veriftToken } from '../utils/veriftUser.js';

const router=express.Router();

router.get('/test',test)
router.post('/update/:id',veriftToken, updateUser)
router.delete('/delete/:id',veriftToken, deleteUser)
router.get('/listings/:id', veriftToken, getUserListings)
export default router;