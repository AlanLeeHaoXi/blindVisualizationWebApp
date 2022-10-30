function initAutocomplete() {
    var infowindow = new google.maps.InfoWindow();

    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 6,
        center: {
            lat: 4.5, 
            lng: 107.177518,
        }
    });

    // NOTE: This uses cross-domain XHR, and may not work on older browsers.
    map.data.loadGeoJson('assets/data/map/map.geojson');

    //Info Window
    map.data.addListener('click', function(event) {
        var feat = event.feature;
        //Info to display at info window
        var html = "<b>" + feat.getProperty('type') + "</b><br>" + feat.getProperty('Name');

        infowindow.setContent(html);
        infowindow.setPosition(event.latLng);
        infowindow.setOptions({
            pixelOffset: new google.maps.Size(0, -34)
        });
        infowindow.open(map);
    });

}

function gm_authFailure() {
    console.log("Authentication failed");
    document.getElementById('map').innerHTML = "Authentication failed";
}