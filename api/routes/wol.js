const express = require('express');
const router = express.Router();
const execSync = require('child_process').execSync;
const fs = require('fs');
const devicesText = fs.readFileSync('./config/devices.json');
const devices = JSON.parse(devicesText).devices; //Array with all devices
const devicesStatus = initDevices();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: "fetching all added WOL devices",
        devices: devicesStatus
    });
});

router.post('/', (req, res, next) => {
    const deviceName = req.body.deviceName;
    const exists = deviceExists(deviceName);
    if(exists) {
        //Wake the device:
        const device = devices.find(device => {
            return (device.deviceName === deviceName);
        })
        console.log(device);
        const macAddress = device.deviceMacAddress;
        const output = execSync('dir', { encoding: 'utf-8' }); // replace "dir" with etherwake command + macAddress
        console.log('Output was:\n', output); // TODO: Add to log instead of printing in console\
        res.status(201).json({
            message: 'Device: ' + deviceName + ' was woken'
        });
    } else {
        res.status(404).json({
            message: 'Error: could not find device: ' + deviceName
        });
    }
});

function deviceExists(deviceName) {
    const deviceNames = [];
    devices.forEach(device => {
        deviceNames.push(device.deviceName);
    });
    return deviceNames.includes(deviceName);
}

function initDevices() {
    return [{deviceName:'RusTy-PC', status: 'Offline'}, {deviceName:'RusTy-TV', status: 'Offline'}, {deviceName:'RusTy-Laptop', status: 'Offline'}];
}


module.exports = router;