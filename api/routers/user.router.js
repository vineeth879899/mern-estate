import express from 'express';
import { test ,updateUser} from '../controllers/user.controller.js';
import { veriftToken } from '../utils/veriftUser.js';

const router=express.Router();

router.get('/test',test)
router.post('/update/:id',veriftToken, updateUser)

export default router;