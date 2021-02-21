const express = require('express');
const router = express.Router();
// const galleryItems = require('../modules/gallery.data');
const pool = require('../modules/pool.js');


// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    // console.log('req.params is', req.params);
    const galleryId = req.params.id;
    let sqlText = `UPDATE gallery SET likes = likes +1 WHERE id=$1`;

    pool.query(sqlText, [galleryId])
    .then((resDB) => {
      console.log('updated likes')
      res.sendStatus(200)
    })
    .catch((error) => {
      console.log('unable to update likes', error);
      res.sendStatus(500);
    })

}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
  const sqlText = `SELECT * FROM gallery ORDER BY id ASC`;
  pool.query(sqlText)
  .then((results) => {
    // console.log('rows', results.rows);
    res.send(results.rows);
  })
  .catch((error) => {
    console.log('error in GET', error);
    res.sendStatus(500);
  })

}); // END GET Route


module.exports = router;