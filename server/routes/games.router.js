const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

/**
 * GET ROUTE for all games the current logged in shower.
 */

router.get('/', rejectUnauthenticated, (req, res) => {
  let sqlText = ``;
  pool
    .query(sqlText, [req.user.id])
    .then((result) => res.send(result.rows))
    .catch((err) => {
      console.log('Error getting game info from DB: ', err);
      res.sendStatus(500);
    });
});

router.get('/winner/:id', rejectUnauthenticated, (req, res) => {
  const id = req.params.id;
  let sqlText = ``;
  pool
    .query(sqlText, [id])
    .then((result) => res.send(result.rows))
    .catch((err) => {
      console.log('Error getting winner info from DB: ', err);
      res.sendStatus(500);
    });
});

/**
 * POST ROUTE to add a new winner to the current showers DB
 */

router.post('/', rejectUnauthenticated, (req, res) => {
  let data = req.body;
  const sqlText = `
  INSERT INTO games 
VALUES ($1, $2, $3, $4, $5)
RETURNING id;`;
  pool
    .query(sqlText, [])
    .then((result) => {
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log('Error posting to the DB for games on server:', error);
      res.sendStatus(500);
    });
});

/**
 * PUT ROUTE
 * Handles the route to update the game info with the sent ID
 * */
router.put('/id', rejectUnauthenticated, (req, res) => {
  const data = req.body;
  const id = req.body.id;
  const sqlText = `UPDATE game SET`;
  pool
    .query(sqlText, [])
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log('Error on server updating game info: ', error);
      res.sendStatus(500);
    });
});

/**
 * DELETE ROUTE
 * Handles Ajax request to delete the game with the matching ID from the DB
 * */

router.delete('/:id', rejectUnauthenticated, (req, res) => {
  const id = req.params.id;
  let sqlText = `DELETE FROM game WHERE id=$1`;
  pool
    .query(sqlText, [id])
    .then((result) => res.sendStatus(204))
    .catch((error) => {
      console.log('Error on server deleting game info: ', error);
      res.sendStatus(500);
    });
});

module.exports = router;
