/*Documentação para realizar a navegação do Carrosel*/
document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.carousel');
    const carouselItems = document.querySelectorAll('.carousel-item');
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');
    let currentIndex = 0;
  
    function showItem(index) {
      carousel.style.transform = `translateX(-${index * 100}%)`;
      currentIndex = index;
    }
  
    prevBtn.addEventListener('click', function () {
      if (currentIndex > 0) {
        showItem(currentIndex - 1);
      } else {
        showItem(carouselItems.length - 1);
      }
    });
  
    nextBtn.addEventListener('click', function () {
      if (currentIndex < carouselItems.length - 1) {
        showItem(currentIndex + 1);
      } else {
        showItem(0);
      }
    });
  });

  