(function () {
  'use strict';

  var mapElement = document.getElementById('clubMap');
  if (!mapElement || typeof L === 'undefined') return;

  var map = L.map('clubMap').setView([-26.2041, 28.0473], 6);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: 'Map data from OpenStreetMap'
  }).addTo(map);

  var clubs = [
    { name: 'Fourways', address: 'Fourways Crossing, Johannesburg', lat: -26.0128, lng: 28.0119 },
    { name: 'Sandton', address: 'Katherine Street, Sandton CBD', lat: -26.1076, lng: 28.0567 },
    { name: 'Rosebank', address: 'Bath Avenue, Rosebank', lat: -26.1447, lng: 28.0406 },
    { name: 'Pretoria East', address: 'Atterbury Road, Pretoria', lat: -25.7857, lng: 28.3186 },
    { name: 'Centurion', address: 'Centurion Mall precinct', lat: -25.8603, lng: 28.1894 },
    { name: 'Umhlanga', address: 'Umhlanga Ridge, Durban', lat: -29.7276, lng: 31.0794 },
    { name: 'Durban North', address: 'Broadway, Durban North', lat: -29.8034, lng: 31.0330 },
    { name: 'Cape Town CBD', address: 'Long Street, Cape Town', lat: -33.9249, lng: 18.4241 },
    { name: 'Bellville', address: 'Voortrekker Road, Bellville', lat: -33.9000, lng: 18.6300 }
  ];

  clubs.forEach(function (club) {
    L.marker([club.lat, club.lng])
      .addTo(map)
      .bindPopup('<strong>' + club.name + '</strong><br>' + club.address);
  });
})();