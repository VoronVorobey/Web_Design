function initPano() {
    console.log("Работа Ворончихина Дениса!")
  // Координаты: г. Глазов, ул. Первомайская, 25 (корпус ГИПУ)
  const glazovLocation = { lat: 58.138155, lng: 52.674522 };
  const streetViewService = new google.maps.StreetViewService();

  // Ищем ближайшую панораму в радиусе 500 метров
  streetViewService.getPanorama(
    {
      location: glazovLocation,
      radius: 500
    },
    (data, status) => {
      if (status === "OK") {
        new google.maps.StreetViewPanorama(
          document.getElementById("pano"),
          {
            pano: data.location.pano,
            pov: {
              heading: 0,
              pitch: 0,
            },
            zoom: 1
          }
        );
      } else {
        document.getElementById("pano").innerHTML = 
          "<h3 style='padding:20px;font-family:sans-serif;'>В Google Street View нет отснятых панорам для этого адреса.</h3>";
      }
    }
  );
}

initPano()
