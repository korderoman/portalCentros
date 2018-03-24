$(document).ready(function () {
    mapa();
    ventanasModales();
    eventosMenuPrincipal();


});

function mapa(){
    mapboxgl.accessToken="pk.eyJ1Ijoia29yZGVybyIsImEiOiJjamMzcGZjMWMwd3E4MzRyNWgydnBkeXcwIn0.iLV9rTPsMQUWJa2EPDydSw";   
        var map = new mapboxgl.Map({
            container: 'mapa', // container id
            style: 'mapbox://styles/kordero/cjf5smjce1c5z2squmu1xikci', // stylesheet location
            center:[-77.0499223,-12.020672], // starting position [lng, lat]
            zoom: 16.76, // starting zoom
            pitch:60,
            bearing:57.60
        });
}


function ventanasModales(){
    $("#logeoModal2").load("./html/ventanaModal2.html");
    $("#logeoModal1").load("./html/ventanaModal1.html");
}

function eventosMenuPrincipal(){
 //agregar elementos de los trozos de html
}