//Script de productos.html

var selectedProducts = [];

document.getElementById("productForm").addEventListener("change", function(event) {
  const selectedProduct = event.target.value;

if (event.target.checked) {
  selectedProducts.push(selectedProduct);
} else {
  const index = selectedProducts.indexOf(selectedProduct);
  if (index !== -1) {
    selectedProducts.splice(index, 1);
  }
}

document.getElementById("productImages").innerHTML = "";

selectedProducts.forEach(function(product) {
  if (product === "guantes") {
    displayGlovesImages();
  } else if (product === "camisetas") {
    displayShirtsImages();
  } else if (product === "shorts") {
    displayShortsImages();
  }
});
    //Agregar más condicionales para otros productos (de la misma forma)
});

function displayGlovesImages() {
  const productImages = document.getElementById("productImages");

  const glovesImages = [
      "guantes_puma.webp",
      "guantes.webp",
      "guantes_nike.webp"
  ];

  glovesImages.forEach(function(imageUrl) {
      const img = document.createElement("img");
      img.src = "Imagenes/Productos/Guantes/" + imageUrl;
      img.classList.add("product-image");
      productImages.appendChild(img);
  });
  }

function displayShirtsImages() {
  const productImages = document.getElementById("productImages");

  const shirtsImages = [
      "camiseta_nike.webp",
      "camiseta.webp",
      "camiseta_puma.jpeg"
  ];

  shirtsImages.forEach(function(imageUrl) {
      const img = document.createElement("img");
      img.src = "Imagenes/Productos/Camisetas/" + imageUrl;
      img.classList.add("product-image");
      productImages.appendChild(img);
  });
  }

function displayShortsImages() {
  const productImages = document.getElementById("productImages");

  const shortsImages = [
      "short.webp",
      "shorts_puma.jpg"
  ];

  shortsImages.forEach(function(imageUrl) {
      const img = document.createElement("img");
      img.src = "Imagenes/Productos/Shorts/" + imageUrl;
      img.classList.add("product-image");
      productImages.appendChild(img);
  });
  }

// Hacer más funciones si se necesitan