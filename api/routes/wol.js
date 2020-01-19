const express = require('express');
const router = express.Router();

const devices = [{name:'RusTy-PC', status: 'Offline'}, {name:'RusTy-TV', status: 'Offline'}, {name:'RusTy-Laptop', status: 'Offline'}];

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: "fetching all added WOL devices",
        devices: devices
    });
});

router.post('/', (req, res, next) => {
    const wakeReq = {
        device: req.body.device
    }
    const exists = devices.includes(wakeReq.device);
    if(exists) {
        //Wake the device:
        //TODO: run shell script
        // const execSync = require('child_process').execSync;
        // const output = execSync('YOUR COMMAND HERE', { encoding: 'utf-8' });  // the default is 'buffer'
        // console.log('Output was:\n', output);
        res.status(201).json({
            message: 'Device: ' + wakeReq.device + ' was woken'
        });
    } else {
        res.status(404).json({
            message: 'Error: could not find device: ' + wakeReq.device
        });
    }
});

module.exports = router;