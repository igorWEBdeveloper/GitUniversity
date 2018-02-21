function myMap() {
    var mapOptions = {
        center: new google.maps.LatLng(55.755826, 37.6172999),
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.HYBRID
    }
var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}