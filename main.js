document.addEventListener("DOMContentLoaded", function () {

    const reviewForm = document.getElementById("review-form");

    reviewForm.addEventListener("submit", function (e) {
        e.preventDefault(); // Evita la recarga de la página

        const name = document.getElementById("names").value;
        const review = document.getElementById("review").value;

        if (name && review) {
            const newReview = document.createElement("div");
            newReview.classList.add("review");
            newReview.innerHTML = `<p>⭐️⭐️⭐️⭐️⭐️ "${review}"</p><span>- ${name}</span>`;

            // Agrega la nueva reseña al final de la lista de reseñas
            const reviewsList = document.querySelector(".footer-reviews");
            reviewsList.appendChild(newReview);

            // Limpia el formulario después de enviar la reseña
            reviewForm.reset();
        } else {
            alert("Por favor, ingresa tu nombre y una reseña.");
        }
    });
});
