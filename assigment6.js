var locations = [
    [
        "David Turpin Building",
        48.464961,
        -123.314546
    ],
    [
    		"ECS",
        48.461188,
        -123.311802
    ],
    [
    		"BEC",
        48.465388,
        -123.313044
    ],
    [
    		"Fraser Building",
        48.465317,
        -123.316477
    ],
    [
    		"David Strong Building",
        48.464990,
        -123.313215
    ]
]

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: new google.maps.LatLng(48.463649,  -123.311951),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < locations.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map
      });

  
var cnt = 0;

function counting() {
cnt++;
alert(cnt);

}

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]+" / "+locations[i][1]+" / "+locations[i][2]+" / "+cnt++);
          infowindow.open(map, marker);
        }
      })(marker, i));
    }



