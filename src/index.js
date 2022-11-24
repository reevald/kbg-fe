"use strict";

const elemImage = document.getElementById("elemImage");
// const elemPrediksi = document.getElementById("elemPrediksi");
// const elemDetail = document.getElementById("elemDetail");
const elemInputImage = document.getElementById("elemInputImage");

elemInputImage.addEventListener("change", () => {
  console.log("walawal")
  elemImage.src = window.URL.createObjectURL(elemInputImage.files[0]);
});

// const renderImage = (input) => {
//   // Menampilkan gambar yang diinputkan
//   elemImage.src = window.URL.createObjectURL(input.files[0]);
// }