var express = require('express');
var weatherRouter = express.Router();
var getWeather = require('../controllers/weather');
/**
 * @swagger
 * /api/weather:
 *   get:
 *     tags:
 *       - Weather
 *     description: Returns Weather Information of city
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Object containing weather information of City
 *         schema:
 *           $ref: '#/definitions/Weather'
 * */
weatherRouter.get('/', getWeather);

module.exports = weatherRouter;