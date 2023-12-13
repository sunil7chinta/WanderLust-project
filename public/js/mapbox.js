mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
  container: "map", // container ID
  center: listing.geometry.coordinates, // starting position [lng, lat]
  zoom: 10, // starting zoom
});

// Create a default Marker and add it to the map.
const marker1 = new mapboxgl.Marker({ color: "red" })
  .setLngLat(listing.geometry.coordinates) //listings coordinates
  .setPopup(
    new mapboxgl.Popup({ offset: 25,})
      .setHTML(`<h4>${listing.title}</h4><p>Exact location will be provided after booking</p>`)
      .setMaxWidth("300px")
  )
  .addTo(map);
