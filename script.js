// Contraseña
function checkPassword(event) {
    event.preventDefault();
    const password = document.getElementById('password').value;
    const passwordError = document.getElementById('password-error');
    const music = document.getElementById('background-music');

    if (password === '1807') {
        document.body.classList.add('body-logged-in');
        document.getElementById('container').classList.add('hidden');
        document.getElementById('dinosaur').classList.add('hidden');
        document.getElementById('main-content').classList.remove('hidden');
        document.getElementById('final-content').classList.remove('hidden');
        startCounter();
        music.play();
        passwordError.classList.add('hidden');
        initializeSlider();
    } else {
        passwordError.classList.remove('hidden');
    }

    return false;
}

//Borrar mensaje de contraseña incorrecta
function clearErrorMessage() {
    const passwordError = document.getElementById('password-error');
    passwordError.classList.add('hidden'); // Oculta el mensaje de error
}

// Contador
function startCounter() {
    const targetDate = new Date('2022-07-18T19:55:00');
    setInterval(() => {
        const now = new Date();
        const timeDifference = now - targetDate;

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        document.getElementById('counter').textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }, 1000);
}

// Slider
const slides = document.querySelectorAll(".slider video");
let slideIndex = 0;

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider() {
    if (slides.length > 0) {
        slides[slideIndex].classList.add("displaySlide");
    }
}

function showSlide(index) {
    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    }

    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
        slide.pause();
        slide.currentTime = 0;
    });
    slides[slideIndex].classList.add("displaySlide");
}

function prevSlide() {
    slideIndex--;
    showSlide(slideIndex);
}

function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}

// Mensaje de imagenes
const collageImages = document.querySelectorAll('#collage img');

collageImages.forEach(img => {
  img.addEventListener('click', () => {
    const message = img.getAttribute('data-message');

    const messageContainer = document.getElementById('message-container');
    const imageMessage = document.getElementById('image-message');
    imageMessage.textContent = message;
    messageContainer.classList.remove('hidden');

    setTimeout(() => {
      messageContainer.classList.add('hidden');
    }, 10000);
  });
});

// Corazones

// Detección del final del documento
window.addEventListener('scroll', function() {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        showHearts();
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const dino = document.getElementById('dino');
    const chillido = document.getElementById('chillido');

    if (dino && chillido) {
        dino.addEventListener('click', function() {
            chillido.currentTime = 0; // Reinicia la reproducción si ya está sonando
            chillido.play(); // Intenta iniciar la reproducción
            dino.classList.add('shake');
            // Después de un tiempo, revertir los cambios
            setTimeout(() => {
                dino.classList.remove('shake');
                dino.style.transform = 'scale(1)';
            }, 300);
        });
    }
});
