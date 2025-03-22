function toggleBW() {
    document.body.classList.toggle('bw');
  }
  
  const btnToggle = document.getElementById('btn-toggle');
  if (btnToggle) {
    btnToggle.addEventListener('click', toggleBW);
  }
  
  

  let sliderImages = document.querySelectorAll('.slider img');
  let currentSlide = 0;
  
  function showSlide(index) {
    sliderImages.forEach((img, i) => {
      img.style.display = (i === index) ? 'block' : 'none';
    });
  }
  
  const btnNext = document.getElementById('btn-next');
  if (btnNext) {
    btnNext.addEventListener('click', function(){
      currentSlide = (currentSlide + 1) % sliderImages.length;
      showSlide(currentSlide);
    });
  }
  
  const btnPrev = document.getElementById('btn-prev');
  if (btnPrev) {
    btnPrev.addEventListener('click', function(){
      currentSlide = (currentSlide - 1 + sliderImages.length) % sliderImages.length;
      showSlide(currentSlide);
    });
  }
  

  if (sliderImages.length > 0) {
    showSlide(currentSlide);
  }
  
  

  document.querySelectorAll('.timeline-item').forEach(item => {
    item.addEventListener('click', function(){
      document.querySelectorAll('.timeline-content').forEach(content => {
        content.style.display = 'none';
      });
      const contentId = item.getAttribute('data-content');
      const contentToShow = document.getElementById(contentId);
      if (contentToShow) {
        contentToShow.style.display = 'block';
      }
    });
  });
  
  

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e){
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
  
  

  document.addEventListener("DOMContentLoaded", function(){
    const lazyImages = document.querySelectorAll('img.lazy');
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src; // подменяем src на настоящий URL
          img.classList.remove('lazy');
          observer.unobserve(img);
        }
      });
    });
  
    lazyImages.forEach(img => {
      imageObserver.observe(img);
    });
  });
  