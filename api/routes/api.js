const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const wolRoutes = require('./wol');
const gamesRoutes = require('./games');
const logRoutes = require('./log');
router.use(bodyParser.urlencoded({extended: false}));
router.use(bodyParser.json());

router.use('/wol', wolRoutes);
router.use('/games', gamesRoutes);
router.use('/log', logRoutes);
router.get('/', (req, res, next) => {
    res.status(200).json({
        message: "Welcome to RusTy-Server API"
    });
});

module.exports = router;