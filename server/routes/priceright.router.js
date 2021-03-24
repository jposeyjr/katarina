import express from 'express';
import rejectUnauthenticated from '../modules/authentication-middleware.js';
import {
  deleteList,
  updateList,
  createList,
  getPriceRightList,
} from '../controllers/priceright.controller.js';

const router = express.Router();

router.get('/', rejectUnauthenticated, getPriceRightList);
router.post('/', rejectUnauthenticated, createList);
router.put('/', rejectUnauthenticated, updateList);
router.delete('/:id', rejectUnauthenticated, deleteList);

export default router;
