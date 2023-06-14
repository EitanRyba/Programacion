var selectedBrands = [];
var adidas_clickeado = 0;
var nike_clickeado = 0;
var puma_clickeado = 0;

  //Script de marcas.html

  document.getElementById("brandForm").addEventListener("change", function(event) {
    const selectedBrand = event.target.value;
  
  if (event.target.checked) {
    selectedBrands.push(selectedBrand);
  } else {
    const index = selectedBrands.indexOf(selectedBrand);
    if (index !== -1) {
      selectedBrands.splice(index, 1);
    }
  }

  document.getElementById("brandImages").innerHTML = "";

  selectedBrands.forEach(function(brand) {
    if (brand === "adidas") {
      adidas_clickeado++;
      displayAdidasImages();
    } else if (brand === "nike") {
      nike_clickeado++;
      displayNikeImages();
    } else if (brand === "puma") {
      puma_clickeado++;
      displayPumaImages();
    }
  });
      //Agregar más condicionales para otras marcas (de la misma forma)
  });
  
  function displayAdidasImages() {
    const brandImages = document.getElementById("brandImages");

    const adidasImages = [
        "camiseta.webp",
        "guantes.webp",
        "short.webp"
    ];

    adidasImages.forEach(function(imageUrl) {
        const img = document.createElement("img");
        img.src = "Imagenes/Marcas/Adidas/" + imageUrl;
        img.classList.add("brand-image");
        brandImages.appendChild(img);
    });
    }
  
  function displayNikeImages() {
    const brandImages = document.getElementById("brandImages");

    const nikeImages = [
        "camiseta_nike.webp",
        "guantes_nike.webp",
        "buzo_nike.jpg"
    ];

    nikeImages.forEach(function(imageUrl) {
        const img = document.createElement("img");
        img.src = "Imagenes/Marcas/Nike/" + imageUrl;
        img.classList.add("brand-image");
        brandImages.appendChild(img);
    });
    }
  
  function displayPumaImages() {
    const brandImages = document.getElementById("brandImages");

    const pumaImages = [
        "camiseta_puma.jpeg",
        "guantes_puma.webp",
        "shorts_puma.jpg"
    ];

    pumaImages.forEach(function(imageUrl) {
        const img = document.createElement("img");
        img.src = "Imagenes/Marcas/Puma/" + imageUrl;
        img.classList.add("brand-image");
        brandImages.appendChild(img);
    });
    }
  
  // Hacer más funciones si se necesitan