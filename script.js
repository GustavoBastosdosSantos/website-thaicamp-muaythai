document.addEventListener("DOMContentLoaded", function () {
    const imagem = document.querySelector(".gui-bastos img");
  
    imagem.addEventListener("mouseover", function () {
      imagem.style.transform = "scale(1.2)";
    });
  
    imagem.addEventListener("mouseout", function () {
      imagem.style.transform = "scale(1)"; 
    });
  });
  