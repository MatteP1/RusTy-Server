$.get('/api/wol', function(data, status) {
    var devices = data.devices;
    $.each(devices, function(i, device) {
        var toAppend = makeCard(device.deviceName, device.status);
        $('#wol-cards').append(toAppend);
        setupButton(device.deviceName);
    });
});

function makeCard(deviceName, deviceStatus) {
    return  '<li>' +
                '<h3>' + deviceName + '</h3>' +
                    '<div class="status">' +
                        '<span class="circle-status"></span> ' + deviceStatus +
                    '</div>' +
                '<button id=' + deviceName + 'Button>Send WOL Package</button>' +
            '</li>'
}

function setupButton(deviceName) {
    $("#" + deviceName + "Button").click(function(e) {
        e.preventDefault();
        var wolRequest = $.post('/api/wol', {"deviceName": deviceName});
        wolRequest.done(function(data) {
            alert(data.message); //TODO: remove alert and make another request to get status, then update status.
        });
    });
}

