
    document.addEventListener("scroll", function() {
        const image = document.getElementById("img");
        const imagePosition = image.getBoundingClientRect().top; // Obtiene la posición de la imagen en relación a la ventana

        // Si la imagen está en la vista, agrega la clase 'visible'
        if (imagePosition < window.innerHeight) {
            image.classList.add("visible");
        }
    });
