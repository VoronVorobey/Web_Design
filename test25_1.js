console.log("Работа Ворончихина Дениса!")
let stations = document.getElementsByName("radiostation")
let resultId = document.getElementById("result")
let radioImg = document.getElementsByClassName("RadioImg")
console.log("Stations: "+stations)
console.dir(stations)
console.dir(radioImg)
console.log("Length: "+stations.length)
let indexSelect = 0;

// for (let i=0; i<3; i++) {
//     console.log("["+i+"]: "+stations[i].value);
//     console.log("Checked:"+stations[i].checked)
//     if (stations[i].checked) {
//     indexSelect = i;
//     }
// }
// resultId.textContent = "Выбрана радиостанция: "+stations[indexSelect].value;

function handleChange(radio) {
  resultId.textContent = "Выбрана радиостанция: "+radio.value;
  for (let i = 0; i < radioImg.length; i++) {
    // console.log(radioImg[i].getAttribute('value'));
    if (radioImg[i].getAttribute('value') === radio.value) {
      radioImg[i].style.display = "block";
    }
    else {
      radioImg[i].style.display = "none";
    }
  }
}