import express from 'express';
import { deleteUser, test ,updateUser} from '../controllers/user.controller.js';
import { veriftToken } from '../utils/veriftUser.js';

const router=express.Router();

router.get('/test',test)
router.post('/update/:id',veriftToken, updateUser)
router.delete('/delete/:id',veriftToken, deleteUser)

export default router;