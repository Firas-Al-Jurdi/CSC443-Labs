let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}


function center(){
let lt = parseFloat(document.getElementById("lt").value);
let lg = parseFloat(document.getElementById("lg").value);
map.setCenter({ lat: lt, lng: lg });
// map = new google.maps.Map(document.getElementById("map"), {
//     center: { lat: lt, lng: lg },
//     zoom: 8,
//   });


    let marker = new google.maps.Marker({
        position: { lat: lt, lng: lg },
        map: map,
    });


}