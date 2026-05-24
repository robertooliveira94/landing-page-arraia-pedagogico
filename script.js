document.addEventListener('DOMContentLoaded', () => {
  // 1. FAQ Accordion Behavior
  const faqItems = document.querySelectorAll(".faq-list details");
  faqItems.forEach((item) => {
    item.addEventListener("toggle", () => {
      if (!item.open) return;
      faqItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.open = false;
        }
      });
    });
  });

  // 2. Persistent 8-Minute Countdown Timer
  const DURATION = 8 * 60; // 8 minutes in seconds
  const STORAGE_KEY = 'arraia_pedagogico_timer_end';
  let endTime = localStorage.getItem(STORAGE_KEY);
  
  function startNewTimer() {
    endTime = Date.now() + DURATION * 1000;
    localStorage.setItem(STORAGE_KEY, endTime);
  }

  if (!endTime || Date.now() > parseInt(endTime, 10)) {
    startNewTimer();
  } else {
    endTime = parseInt(endTime, 10);
  }

  const countdownEl = document.getElementById('countdown');

  if (countdownEl) {
    function updateCountdown() {
      let remaining = Math.max(0, Math.floor((endTime - Date.now()) / 1000));
      
      if (remaining <= 0) {
        startNewTimer();
        remaining = DURATION;
      }

      const min = String(Math.floor(remaining / 60)).padStart(2, '0');
      const sec = String(remaining % 60).padStart(2, '0');
      countdownEl.textContent = `${min}:${sec}`;

      // Accelerate pulse speed as timer goes down (from 2s to 0.4s)
      const speed = 0.4 + (remaining / DURATION) * 1.6;
      countdownEl.style.setProperty('--pulse-speed', `${speed.toFixed(2)}s`);
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
  }

  // 3. PDF Preview Gallery Lightbox
  const galleryItems = document.querySelectorAll('.gallery-item');
  
  // Create Lightbox Elements Dynamically
  const lightbox = document.createElement('div');
  lightbox.className = 'gallery-modal';
  lightbox.setAttribute('aria-hidden', 'true');
  
  const lightboxImg = document.createElement('img');
  lightboxImg.alt = 'Visualização ampliada do material pedagógico';
  
  const closeBtn = document.createElement('div');
  closeBtn.className = 'gallery-modal-close';
  closeBtn.innerHTML = '&times;';
  closeBtn.setAttribute('aria-label', 'Fechar visualização');
  
  lightbox.appendChild(lightboxImg);
  lightbox.appendChild(closeBtn);
  document.body.appendChild(lightbox);
  
  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      if (img) {
        lightboxImg.src = img.src.replace('_thumb', ''); // Support high-res swap if needed
        lightbox.classList.add('open');
        lightbox.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden'; // Lock background scroll
      }
    });
  });
  
  const closeLightbox = () => {
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = ''; // Unlock background scroll
  };
  
  lightbox.addEventListener('click', (e) => {
    if (e.target !== lightboxImg) {
      closeLightbox();
    }
  });
  
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('open')) {
      closeLightbox();
    }
  });

  // 4. Carousel Slider Logic
  const track = document.querySelector('.carousel-track');
  const prevBtn = document.querySelector('.carousel-control.prev');
  const nextBtn = document.querySelector('.carousel-control.next');
  const dots = document.querySelectorAll('.carousel-dot');
  
  if (track && prevBtn && nextBtn) {
    const slides = Array.from(track.children);
    let currentIndex = 0;
    
    function getVisibleSlidesCount() {
      if (window.innerWidth <= 500) return 1;
      if (window.innerWidth <= 900) return 2;
      return 4;
    }
    
    function updateSlider() {
      const visibleCount = getVisibleSlidesCount();
      const maxIndex = Math.max(0, slides.length - visibleCount);
      
      if (currentIndex > maxIndex) {
        currentIndex = maxIndex;
      }
      
      const slideStyle = window.getComputedStyle(slides[0]);
      const gap = parseFloat(window.getComputedStyle(track).gap) || 0;
      const slideWidth = slides[0].getBoundingClientRect().width;
      
      const offset = currentIndex * (slideWidth + gap);
      track.style.transform = `translateX(-${offset}px)`;
      
      // Update Buttons
      prevBtn.style.opacity = currentIndex === 0 ? '0.5' : '1';
      prevBtn.style.pointerEvents = currentIndex === 0 ? 'none' : 'auto';
      
      nextBtn.style.opacity = currentIndex === maxIndex ? '0.5' : '1';
      nextBtn.style.pointerEvents = currentIndex === maxIndex ? 'none' : 'auto';
      
      // Update Dots
      dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
        // Hide dots that are beyond maxIndex to avoid confusion
        dot.style.display = index > maxIndex ? 'none' : 'block';
      });
    }
    
    prevBtn.addEventListener('click', () => {
      if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
      }
    });
    
    nextBtn.addEventListener('click', () => {
      const visibleCount = getVisibleSlidesCount();
      const maxIndex = slides.length - visibleCount;
      if (currentIndex < maxIndex) {
        currentIndex++;
        updateSlider();
      }
    });
    
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        currentIndex = index;
        updateSlider();
      });
    });
    
    window.addEventListener('resize', updateSlider);
    // Initial run
    updateSlider();
  }
});
