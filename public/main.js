$.get('/api/wol', function(data, status) {
    var devices = data.devices;
    var deviceHTMLList = [];
    $.each(devices, function(i, device) {
        var toAppend = makeCard(device.name, device.status);
        deviceHTMLList[i] = toAppend;
    });
    var toAdd = deviceHTMLList.join('<hr>');
    $('#wol-cards').append(toAdd);
});


function makeCard(deviceName, deviceStatus) {
    return  '<li>' +
                '<h3>' + deviceName + '</h3>' +
                    '<div class="status">' +
                        '<span class="circle-status"></span>' + deviceStatus +
                    '</div>' +
                '<button>Send WOL Package</button>' +
            '</li>'
}