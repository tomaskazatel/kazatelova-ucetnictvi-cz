function initMap() {

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom : 10,
        center: {lat: 50.062460, lng: 14.2542231},
        streetViewControl: false,
        scrollwheel:  false,
        styles: [
            {"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":30},{"color":"#000000"},{"lightness":60}]},
            {"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":15}]},
            {"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},
            {"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},
            {"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},
            {"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":23}]},
            {"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":25}]},
            {"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":15}]},
            {"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},
            {"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},
            {"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},
            {"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},
            {"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]}
        ]
    });

    var info = new google.maps.InfoWindow();

    var unhost = new google.maps.Marker({
        position : {lat : 50.0885125, lng : 14.1291145},
        map: map
    });

    google.maps.event.addListener(unhost, "click", (function (unhost) {
        return function () {
            info.close();
            info.setContent("<p><b>Dreyerova 600/6</b><br />15200 Praha 5");
            info.open(map,unhost);
        }
    })(unhost));

    var praha = new google.maps.Marker({
        position : {lat : 50.0363795, lng : 14.3797637},
        map: map
    });

    google.maps.event.addListener(praha, "click", (function(praha){
        return function () {
            info.close();
            info.setContent("<p><b>Svépomocná 851</b><br />27351 Unhošť");
            info.open(map,praha);
        }
    })(praha));

}