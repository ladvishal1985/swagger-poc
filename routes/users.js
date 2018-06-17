var express = require('express');

var userRouter = express.Router();

/**
 * @swagger
 * /api/users:
 *   get:
 *     tags:
 *       - Users
 *     description: Returns List of Users
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Array containing list of Users
 *         schema:
 *           $ref: '#/definitions/Users'
 * */
userRouter.get('/', function(req, res, next) {
  res.send('respond without a resource');
});

module.exports = userRouter;
