var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 44.55322186, lng: 38.12847436},
    zoom: 15,
     zoomControl: true,
    zoomControlOptions: {
        position: google.maps.ControlPosition.LEFT_CENTER
    },
    mapTypeId: google.maps.MapTypeId.ROADMAP, 
    styles: [{"featureType":"road",
            "stylers":[  {"hue":"#FFBB00"},
                        {"saturation":43},
                        {"lightness":37  },
                        {"gamma":1   }
                        ]},
            {"featureType":"water", 
            "stylers":[ {"hue":"#0078FF"},
                        {"saturation":-13},
                        {"lightness":2.4},
                        {"gamma":1}
                        ]}
        ]
  });
  var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(44.55322186, 38.12347436),
                    map: map                    
    });  
}