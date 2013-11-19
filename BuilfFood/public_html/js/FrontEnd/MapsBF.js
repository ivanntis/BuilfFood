/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
google.maps.visualRefresh = true;
var map;
function initialize() {
    //https://developers.google.com/maps/documentation/javascript/styling#stylers
    //https://developers.google.com/maps/documentation/javascript/reference#MapTypeControlStyle
    var styles = [
   {
      featureType: 'road.highway',
      elementType: 'geometry',
      stylers: [
        { hue: '#7D57A6' },
        { saturation: -50 },
        { lightness: 0 }
      ]
    },
    {
      featureType: 'administrative',
      elementType: 'all',
      stylers: [
        { hue: '#7D57A6' },
        { saturation: 0 },
        { lightness: 0 },
        { gamma: 0.90 }
      ]
    }
    ,{
      featureType: 'transit.line',
      elementType: 'geometry',
      stylers: [
        { hue: '#7D57A6' },
        { visibility: 'on' },
        { lightness: -70 }
      ]
    }
    ,{
      featureType: 'poi',
      elementType: 'all',
      stylers: [
        { visibility: 'off' },        
      ]
    }

  ];
    
var styledMap = new google.maps.StyledMapType(styles,
    {name: "Styled Map"});

    
  var mapOptions = {
    zoom: 13,
    //center: new google.maps.LatLng(-34.397, 150.644),
    
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);
 map.setOptions({styles: styles});
      
   // Try HTML5 geolocation
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = new google.maps.LatLng(position.coords.latitude,
                                       position.coords.longitude);
      map.setCenter(pos);
    }, function() {
      handleNoGeolocation(true);
    });
  } else {
    // Browser doesn't support Geolocation
    handleNoGeolocation(false);
  }
}

function handleNoGeolocation(errorFlag) {
  if (errorFlag) {
    var content = 'No autorizo la deteccion de ubicacion del Navegador';
  } else {
    var content = 'Error: Your browser doesn\'t support geolocation.';
  }

  var options = {
    map: map,
    zoom: 5,
    position: new google.maps.LatLng(4.60971,-74.08175),
    content: content
  };

  var infowindow = new google.maps.InfoWindow(options);
  map.setCenter(options.position);
  map.setZoom(options.zoom);
}


google.maps.event.addDomListener(window, 'load', initialize);
