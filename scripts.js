//contenido de la nav-menu, burguesita
document.addEventListener("DOMContentLoaded", function() {
    console.log("Website loaded successfully!");
});

document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    menuToggle.addEventListener('click', function () {
        navMenu.classList.toggle('active');
    });
});

//Contenedor para la imagen en el option

document.getElementById('burger-choice').addEventListener('change', function() {
    var burgerImage = document.getElementById('burger-image');
    var selectedBurger = this.value;

    if (selectedBurger === 'clasica') {
        burgerImage.src = 'imagenes/hamburguesa_clasica.jpg'; 
        burgerImage.alt = 'Hamburguesa Clásica';
        burgerImage.style.display = 'block';
    } else if (selectedBurger === 'bbq') {
        burgerImage.src = 'imagenes/hamburguesa_bbq.jpg'; 
        burgerImage.alt = 'Hamburguesa BBQ';
        burgerImage.style.display = 'block';
    } else if (selectedBurger === 'pollo') {
        burgerImage.src = 'imagenes/hamburguesa_de_pollo.jpg';
        burgerImage.alt = 'Hamburguesa de Pollo';
        burgerImage.style.display = 'block';
    }else if(selectedBurger === 'vegana') {
        burgerImage.src = 'imagenes/hamburguesa_vegana.jpg';
        burgerImage.alt = 'Hamburguesa vegana';
        burgerImage.style.display = 'block';
    }else if(selectedBurger === 'pavo') {
        burgerImage.src = 'imagenes/hamburguesa_de_pavo.jpg';
        burgerImage.alt = 'Hamburguesa de Pavo';
        burgerImage.style.display = 'block';
    } else {
        burgerImage.style.display = 'none'; 
    }
});