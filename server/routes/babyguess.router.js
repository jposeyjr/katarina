import express from 'express';
import rejectUnauthenticated from '../modules/authentication-middleware.js';
import {
  createList,
  getGuessList,
} from '../controllers/babyguess.controller.js';

const router = express.Router();

router.get('/', rejectUnauthenticated, getGuessList);
router.post('/', rejectUnauthenticated, createList);

export default router;
