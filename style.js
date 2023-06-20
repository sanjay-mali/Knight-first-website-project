const slides = document.querySelectorAll('.slider img');
        const dots = document.querySelectorAll('.dot');
        const slideDelay = 5000;
        
        let currentSlide = 0;
        
        function showSlide(slideIndex) {
          slides.forEach(slide => slide.classList.remove('active'));
          dots.forEach(dot => dot.classList.remove('active'));
          slides[slideIndex].classList.add('active');
          dots[slideIndex].classList.add('active');
        }
        
        function nextSlide() {
          currentSlide = (currentSlide + 1) % slides.length;
          showSlide(currentSlide);
        }
        
        dots.forEach((dot, index) => {
          dot.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
          });
        });
        
        showSlide(currentSlide);
        setInterval(nextSlide, slideDelay);