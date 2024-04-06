document.addEventListener("DOMContentLoaded", function() {
    const carouselInner = document.querySelector('.carousel-inner');
    const images = carouselInner.querySelectorAll('img');
    let position = 0;
    let currentIndex = 0;

    setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        position = -currentIndex * 100;
        carouselInner.style.transform = `translateX(${position}%)`;

        // Atualiza as classes das imagens para aplicar o efeito blur
        images.forEach((img, index) => {
            if (index === currentIndex) {
                img.classList.add('active');
            } else {
                img.classList.remove('active');
            }
        });
    }, 3500);
});