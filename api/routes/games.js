const express = require('express');
const router = express.Router();

const games = ['Tetris']

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: "fetching all games",
        games: games
    });
});

router.get('/tetris', (req, res, next) => {
    res.status(200).json({
        hiscores: [200,195,150,132,126],
        links: {
            github: "https://github.com/MatRusTy/Tetris2"
        }
    });
});

router.post('/tetris', (req, res, next) => {
    res.status(501).json({
        message: "Not implemented yet"
    });
});

router.put('/tetris', (req, res, next) => {
    res.status(501).json({
        message: "Not implemented yet"
    });
});

router.delete('/:game', (req, res, next) => {
    const game = req.params.game;

    res.status(404).json({
        message: "Error, couldn't find the game: " + game
    });
});

module.exports = router;