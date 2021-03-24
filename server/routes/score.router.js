import express from 'express';
import rejectUnauthenticated from '../modules/authentication-middleware.js';
import {
  getScore,
  createScore,
  updateScore,
  deleteScore,
} from '../controllers/score.controller.js';

const router = express.Router();

router.get('/', rejectUnauthenticated, getScore);
router.post('/', rejectUnauthenticated, createScore);
router.put('/', rejectUnauthenticated, updateScore);
router.delete('/:id', rejectUnauthenticated, deleteScore);

export default router;
