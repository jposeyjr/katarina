import express from 'express';
import rejectUnauthenticated from '../modules/authentication-middleware.js';
import {
  deleteList,
  updateList,
  createList,
  getPriceRightList,
  addScore,
} from '../controllers/priceright.controller.js';

const router = express.Router();

router.get('/', rejectUnauthenticated, getPriceRightList);
router.post('/', rejectUnauthenticated, createList);
router.post('/score', rejectUnauthenticated, addScore);
router.put('/', rejectUnauthenticated, updateList);
router.delete('/:id', rejectUnauthenticated, deleteList);

export default router;
