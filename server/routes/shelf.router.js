const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const userStrategy = require('../strategies/user.strategy');

/**
 * Get all of the items on the shelf
 */
router.get('/', (req, res) => {
  console.log( 'api/shelf GET');
  let queryString = 
  `SELECT * 
  FROM "item"
  JOIN "user" ON "item".user_id = "user".id;`;
  pool.query (queryString).then((results)=>{
    res.send(results.rows);
  }).catch((err)=>{
    console.log( 'error with GET' );
    res.sendStatus(500);
  })
});

/**
 * Add an item for the logged in user to the shelf
 */
router.post('/', rejectUnauthenticated, (req, res) => {
console.log (req.body);
let itemQuery = `INSERT INTO "item" ("description", "image_url", "user_id"
) VALUES($1, $2, $3 )`
pool.query( itemQuery, [req.body.description, req.body.image_url, req.body.user_id]).then(result=>{

}).catch((err)=>{
  console.log( 'error');
  res.sendStatus(500);
})

});

/**
 * Delete an item if it's something the logged in user added
 */
router.delete('/:itemId', rejectUnauthenticated, (req, res) => {
  // endpoint functionality
  console.log( 'in DELETE route, params:', req.params, req.user, req.query.user_id )
  let itemId = req.params["itemId"]
  let queryText = `DELETE FROM "item" WHERE id=$1;`;
  if ( req.user.username === 'sarah' || req.user.username === 'pat' ){
    pool.query( queryText, [ itemId ] ).then( ( results )=>{ 
      //confirm DELETE w/OK
      res.sendStatus( 200 );
    }).catch( ( error )=>{
      console.log( 'error:', error )
    })
  }
  else{
    res.sendStatus( 503 );
  }
});

/**
 * Update an item if it's something the logged in user added
 */
router.put('/:id', (req, res) => {
  // endpoint functionality
});

/**
 * Return all users along with the total number of items
 * they have added to the shelf
 */
router.get('/count', (req, res) => {
  // endpoint functionality
});

/**
 * Return a specific item by id
 */
router.get('/:id', (req, res) => {
  // endpoint functionality
});

module.exports = router;
