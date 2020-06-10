const endpoint = "http://localhost:3000/api/endpoint";
const zadanieDiv = document.querySelector(".zadanie");
const idDiv = document.querySelector(".id");
const adresDiv = document.querySelector(".adres");
const opisDiv = document.querySelector(".opis");
const autorDiv = document.querySelector(".autor");
const dataBtn = document.querySelector(".onClick");

getData = () => {
  fetch(endpoint)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      zadanieDiv.innerHTML = `<div>Zadanie: ${data.zadanie}</div>`;
      idDiv.innerHTML = `<div>Identyfikator: ${data.identyfikator}</div>`;
      adresDiv.innerHTML = `<div>Adres: ${data.adres}</div>`;
      opisDiv.innerHTML = `<div>Opis: ${data.opis}</div>`;
      autorDiv.innerHTML = `<div>Autor: ${data.autor}</div>`;
    });
};

dataBtn.addEventListener("click", getData);
