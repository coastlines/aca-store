'use strict';

window.onload = function() {
  getProducts()
  console.log('hi')
}

const getProducts = () => {
      fetch('https://my-json-server.typicode.com/jubs16/Products/Products')
    .then(response => { 
      return response.json()
    })
    .then(data => {
      data.forEach(productDiv);
    })
}

let productDiv= function(data) {
  let section = document.getElementById("product-container");

  let div = document.createElement("div");
  let img = document.createElement("img");
  let p = document.createElement("p");
  let button = document.createElement("button");
  let name = data.name.toLowerCase();

  section.classList.add("flex");
  div.classList.add("product");
  div.classList.add("flex-column");
  p.classList.add("flex-space-between");

  img.src = data.imgUrl;
  p.innerHTML = `<strong>${name}</strong> $${data.price}`;
  button.innerHTML = "Details";
  
  div.appendChild(img);
  div.appendChild(p);
  div.appendChild(button);
  section.appendChild(div);
}