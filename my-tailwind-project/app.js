
document.addEventListener('DOMContentLoaded', () => {
    
    /**
     * تغییر اسلاید
     * @param {number} direction - 1 برای بعدی، -1 برای قبلی
     */
    function changeSlide(direction) {
        // گرفتن اسلایدهای فعلی
        const currentSlide = document.querySelector('.slide[data-current]');
        const currentBg = document.querySelector('.slide__bg[data-current]');
        const currentInfo = document.querySelector('[id^="info"][data-current]');
        
        const nextSlide = document.querySelector('.slide[data-next]');
        const nextBg = document.querySelector('.slide__bg[data-next]');
        const nextInfo = document.querySelector('[id^="info"][data-next]');
        
        const prevSlide = document.querySelector('.slide[data-previous]');
        const prevBg = document.querySelector('.slide__bg[data-previous]');
        const prevInfo = document.querySelector('[id^="info"][data-previous]');
        
        // حذف attributeهای فعلی
        if (currentSlide) currentSlide.removeAttribute('data-current');
        if (currentBg) currentBg.removeAttribute('data-current');
        if (currentInfo) currentInfo.removeAttribute('data-current');
        
        if (nextSlide) nextSlide.removeAttribute('data-next');
        if (nextBg) nextBg.removeAttribute('data-next');
        if (nextInfo) nextInfo.removeAttribute('data-next');
        
        if (prevSlide) prevSlide.removeAttribute('data-previous');
        if (prevBg) prevBg.removeAttribute('data-previous');
        if (prevInfo) prevInfo.removeAttribute('data-previous');
        
        if (direction === 1) { // اسلاید بعدی
            if (nextSlide) {
                nextSlide.setAttribute('data-current', '');
                nextBg.setAttribute('data-current', '');
                nextInfo.setAttribute('data-current', '');
                nextInfo.classList.remove('hidden');
            }
            if (currentSlide) {
                currentSlide.setAttribute('data-previous', '');
                currentBg.setAttribute('data-previous', '');
                currentInfo.setAttribute('data-previous', '');
                currentInfo.classList.add('hidden');
            }
            if (prevSlide) {
                prevSlide.setAttribute('data-next', '');
                prevBg.setAttribute('data-next', '');
                prevInfo.setAttribute('data-next', '');
                prevInfo.classList.remove('hidden');
            }
        } else if (direction === -1) { // اسلاید قبلی
            if (prevSlide) {
                prevSlide.setAttribute('data-current', '');
                prevBg.setAttribute('data-current', '');
                prevInfo.setAttribute('data-current', '');
                prevInfo.classList.remove('hidden');
            }
            if (currentSlide) {
                currentSlide.setAttribute('data-next', '');
                currentBg.setAttribute('data-next', '');
                currentInfo.setAttribute('data-next', '');
                currentInfo.classList.remove('hidden');
            }
            if (nextSlide) {
                nextSlide.setAttribute('data-previous', '');
                nextBg.setAttribute('data-previous', '');
                nextInfo.setAttribute('data-previous', '');
                nextInfo.classList.add('hidden');
            }
        }
    }
    
    // -------------------- رویدادهای دکمه‌ها --------------------
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    if (prevBtn) {
        prevBtn.addEventListener('click', () => changeSlide(-1));
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', () => changeSlide(1));
    }
    
    // -------------------- پشتیبانی از کیبورد --------------------
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            // فلش چپ - اسلاید قبلی
            changeSlide(-1);
        } else if (e.key === 'ArrowRight') {
            // فلش راست - اسلاید بعدی
            changeSlide(1);
        }
    });
   
    let touchStartX = 0;
    let touchEndX = 0;
    
    const sliderContainer = document.querySelector('.relative.w-full.h-\\[calc\\(100vh-80px\\)\\]');
    
    if (sliderContainer) {
        sliderContainer.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });
        
        sliderContainer.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            const diff = touchEndX - touchStartX;
            
            if (Math.abs(diff) > 50) { // حداقل حرکت 50 پیکسل
                if (diff > 0) {
                    // اسلاید قبلی (حرکت به راست)
                    changeSlide(-1);
                } else {
                    // اسلاید بعدی (حرکت به چپ)
                    changeSlide(1);
                }
            }
        });
    }
    
    console.log('اسلایدر با موفقیت راه‌اندازی شد ✅');
});

        // کد برای منوی موبایل
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        if (mobileMenuBtn) {
            mobileMenuBtn.addEventListener('click', () => {
                alert('منوی موبایل به زودی اضافه می‌شود');
            });
        }
  

const petWrapper = document.getElementById("petWrapper");
const textBox = document.getElementById("textBox");
const subtitle = document.getElementById("subtitle");
const cta = document.getElementById("cta");
const hero = document.getElementById("hero");

/* ENTRY ANIMATION SEQUENCE */

window.addEventListener("load", () => {

  // 1. Pet rises
  setTimeout(() => {
    petWrapper.classList.add("active");
  }, 300);

  // 2. Title + container appears AFTER pet arrives
  setTimeout(() => {
    textBox.classList.add("show");
  }, 2400);

  // 3. subtitle
  setTimeout(() => {
    subtitle.classList.add("show");
  }, 3100);

  // 4. CTA
  setTimeout(() => {
    cta.classList.add("show");
  }, 3800);
});

/* MOUSE PARALLAX */

hero.addEventListener("mousemove", (e) => {

  const x = (window.innerWidth / 2 - e.clientX) / 40;
  const y = (window.innerHeight / 2 - e.clientY) / 40;

  petWrapper.style.transform = `
    translateX(-50%)
    rotateY(${x}deg)
    rotateX(${-y}deg)
  `;

  textBox.style.transform = `
    translateY(0)
    rotateY(${x / 2}deg)
  `;
});

/* RESET */

hero.addEventListener("mouseleave", () => {

  petWrapper.style.transform = `translateX(-50%)`;
  textBox.style.transform = `translateY(0)`;
});

  (function() {
    // ---------- DOM elements ----------
    const dogWrapper = document.getElementById('dogWrapper');
    const circularDogImg = document.getElementById('circularDog');
    const persianTitle = document.getElementById('persianTitle');
    const subtitle = document.getElementById('subtitle');
    const ctaBtn = document.getElementById('ctaButton');
    const heroSection = document.getElementById('heroSection');
    const bgImg = document.getElementById('bgImg');
    const parallaxContainer = document.getElementById('parallaxBg');

    // ---------- animation state machine ----------
    let animationPhase = 'moving'; // moving -> finished
    let dogArrived = false;
    let floatInterval = null;
    let resizeObserver = null;

    // Starting position: bottom outside viewport (y: 100% relative)
    // we set inline style: bottom = -20% (initial) but we want to animate from bottom edge -> center.
    // center position relative to viewport: top 50% - half dog height. We'll animate transform Y?
    // Better: Use JS to compute final position based on viewport height.
    // For smoothness: let's set initial bottom: -20% (outside). Final bottom will be calculated so dog center is at 40% of viewport height.
    // We also apply dynamic final position (responsive)
    let startBottom = '-20%';
    let finalBottom = '40%'; // will be refined per window resize;
    let finalLeft = '50%';
    let isAnimating = true;

    // Set initial filter blur + opacity (blur to focus)
    dogWrapper.style.filter = 'blur(20px)';
    dogWrapper.style.opacity = '0';

    // function to compute final position of circular dog (center vertical: 40% from top)
    function computeFinalPosition() {
      const dogHeight = circularDogImg.offsetHeight;
      if (!dogHeight) return '42%'; // fallback
      // we want the vertical center of dog to be at 40% of viewport height from top.
      // bottom = (viewportHeight * 0.4) - (dogHeight/2) => relative to parent (hero) height in %.
      const heroHeight = heroSection.offsetHeight;
      const desiredCenterY = heroHeight * 0.42; // slightly artistic center (cinematic)
      const dogHalf = dogHeight / 2;
      let bottomPosPx = heroHeight - (desiredCenterY + dogHalf);
      let bottomPercent = (bottomPosPx / heroHeight) * 100;
      bottomPercent = Math.min(Math.max(bottomPercent, 5), 65);
      return `${bottomPercent}%`;
    }

    // Apply final position (and left 50% always)
    function updateDogFinalPosition() {
      if (!dogArrived) {
        const newBottom = computeFinalPosition();
        dogWrapper.style.transition = 'none';
        dogWrapper.style.bottom = newBottom;
        dogWrapper.style.left = '50%';
        // Force reflow, then restore transition.
        void dogWrapper.offsetHeight;
        dogWrapper.style.transition = '';
      } else {
        // after arrival, just adjust for resize without breaking floating effect
        const newBottom = computeFinalPosition();
        dogWrapper.style.bottom = newBottom;
      }
    }

    // Initial animation: move from bottom to final position + blur -> focus + shadow glow
    function startDogEntrance() {
      // set start position (outside)
      dogWrapper.style.bottom = '-22%';
      dogWrapper.style.left = '50%';
      dogWrapper.style.opacity = '0';
      dogWrapper.style.filter = 'blur(22px)';
      dogWrapper.style.transition = 'bottom 1.2s cubic-bezier(0.25, 0.95, 0.45, 1.1), filter 1.6s ease-out, opacity 1.2s ease, box-shadow 0.2s';
      // force reflow
      void dogWrapper.offsetHeight;
      // final computed position:
      const targetBottom = computeFinalPosition();
      // apply target styles for transition
      dogWrapper.style.bottom = targetBottom;
      dogWrapper.style.opacity = '1';
      dogWrapper.style.filter = 'blur(0px)';
      
      // after transition, mark arrived, add glow and floating effect, then trigger text fade-in
      const onTransitionEnd = (e) => {
        if (e.target === dogWrapper && e.propertyName === 'bottom') {
          dogArrived = true;
          isAnimating = false;
          dogWrapper.removeEventListener('transitionend', onTransitionEnd);
          // add soft shadow & glow with class
          circularDogImg.classList.add('glow-active');
          // add floating animation to dog circle img
          circularDogImg.classList.add('floating-dog');
          // trigger text appearance sequence (fade in)
          triggerTextAnimations();
          // optional: background slow zoom already running, but keep
          // start the slight floating after stopping (already class)
          // also small mouse move parallax (already active)
        }
        if (e.propertyName === 'filter') {
          // just sync, nothing else
        }
      };
      dogWrapper.addEventListener('transitionend', onTransitionEnd);
      // safety fallback
      setTimeout(() => {
        if (!dogArrived) {
          dogArrived = true;
          circularDogImg.classList.add('glow-active');
          circularDogImg.classList.add('floating-dog');
          triggerTextAnimations();
          dogWrapper.style.filter = 'blur(0px)';
        }
      }, 2100);
    }

    // text sequence
    function triggerTextAnimations() {
      persianTitle.classList.add('show');
      setTimeout(() => {
        subtitle.classList.add('show');
      }, 220);
      setTimeout(() => {
        ctaBtn.classList.add('show');
      }, 480);
    }

    // ---------- Mouse Move 3D Parallax Effect (premium) ----------
    function initParallax() {
      const hero = heroSection;
      const bg = bgImg;
      const dogImgWrap = dogWrapper;
      let mouseX = 0, mouseY = 0;
      let targetX = 0, targetY = 0;
      
      hero.addEventListener('mousemove', (e) => {
        const rect = hero.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;  // -0.5 to 0.5
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        mouseX = x * 30;
        mouseY = y * 20;
        // apply parallax to background image (slow shift)
        if (bg) {
          bg.style.transform = `translate(${mouseX * -0.08}px, ${mouseY * -0.05}px) scale(1.12)`;
          // because slow zoom animation already transforms, combine requires reset origin but keep smooth
        }
        // parallax on dog wrapper (subtle 3D)
        if (dogArrived && dogWrapper) {
          const dogShiftX = mouseX * 12;
          const dogShiftY = mouseY * 8;
          dogWrapper.style.transform = `translateX(calc(-50% + ${dogShiftX}px)) translateY(${dogShiftY}px)`;
        } else if (dogWrapper && !dogArrived) {
          // while moving, no additional
          dogWrapper.style.transform = `translateX(-50%)`;
        }
      });
      
      hero.addEventListener('mouseleave', () => {
        if (bg) bg.style.transform = `translate(0px, 0px) scale(1.12)`;
        if (dogWrapper && dogArrived) dogWrapper.style.transform = `translateX(-50%) translateY(0px)`;
      });
    }

    // ---------- floating particles canvas ----------
    let particles = [];
    let canvas = document.getElementById('particles-canvas');
    let ctx = canvas.getContext('2d');
    let animationId;
    
    function resizeCanvas() {
      canvas.width = heroSection.offsetWidth;
      canvas.height = heroSection.offsetHeight;
    }
    
    function initParticles() {
      const particleCount = 70;
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 5 + 1.5,
          alpha: Math.random() * 0.3 + 0.1,
          speedX: (Math.random() - 0.5) * 0.3,
          speedY: (Math.random() - 0.5) * 0.2 + 0.1,
          color: `rgba(235, 195, 135, ${Math.random() * 0.4 + 0.1})`
        });
      }
    }
    
    function drawParticles() {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
        // update position
        p.x += p.speedX;
        p.y += p.speedY;
        // wrap around or reset
        if (p.x < -20) p.x = canvas.width + 20;
        if (p.x > canvas.width + 20) p.x = -20;
        if (p.y < -20) p.y = canvas.height + 20;
        if (p.y > canvas.height + 20) p.y = -20;
      }
      animationId = requestAnimationFrame(drawParticles);
    }
    
    function startParticles() {
      resizeCanvas();
      initParticles();
      drawParticles();
    }
    
    // adjust particles on resize
    window.addEventListener('resize', () => {
      resizeCanvas();
      // reposition particles softly
      for (let p of particles) {
        p.x = Math.min(canvas.width, Math.max(0, p.x));
        p.y = Math.min(canvas.height, Math.max(0, p.y));
      }
      // update dog final position if arrived else recompute transition targets?
      if (dogArrived) {
        updateDogFinalPosition();
      } else {
        // if not yet arrived but currently moving transition, maybe recalc final bottom during transition? transition continues
        const newTarget = computeFinalPosition();
        if (!dogArrived && isAnimating) {
          // avoid abrupt stop: only if the element is still moving, we recompute but not override transition? gentle.
          dogWrapper.style.transition = 'bottom 1.9s cubic-bezier(0.25, 0.95, 0.45, 1.1), filter 1.6s ease-out, opacity 1.2s ease';
          dogWrapper.style.bottom = newTarget;
        } else if (!dogArrived) {
          dogWrapper.style.bottom = newTarget;
        }
      }
    });
    
    // ensure proper dog size on load and compute correct final bottom before starting
    function prepareAndStart() {
      // ensure image loaded
      if (circularDogImg.complete) {
        updateDogFinalPosition();
        startDogEntrance();
      } else {
        circularDogImg.onload = () => {
          updateDogFinalPosition();
          startDogEntrance();
        };
      }
      // also background preload
      if (!bgImg.complete) {
        bgImg.onload = () => {
          bgImg.style.opacity = '1';
        };
      }
    }
    
    // add 3d parallax + initial setup
    initParallax();
    
    // button action with smooth alert / could be shop simulation
    ctaBtn.addEventListener('click', (e) => {
      e.preventDefault();
      // simulated product navigation: you could replace with actual link or demo
      alert('✨ به فروشگاه پت شاپ خوش آمدید!\nمحصولات ویژه در راه است.');
      // premium visual feedback
      ctaBtn.style.transform = 'scale(0.97)';
      setTimeout(() => {
        if(ctaBtn.classList.contains('show')) ctaBtn.style.transform = 'scale(1)';
      }, 150);
    });
    
    // extra: background slow zoom is already in CSS, we combine with parallax
    // add subtle random particles micro movement
    
    // start particles system
    startParticles();
    prepareAndStart();
    
    // also window load: re-check floating positions
    window.addEventListener('load', () => {
      resizeCanvas();
      if (!dogArrived) {
        const finalPos = computeFinalPosition();
        if (dogWrapper.style.bottom !== finalPos && !dogArrived) {
          dogWrapper.style.bottom = finalPos;
        }
      }
      // ensure background zoom doesn't conflict parallax transform
      bgImg.style.transformOrigin = 'center center';
    });
    
    // ensure that on window resize, floating dog stays consistent
    let resizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        if (dogArrived) {
          updateDogFinalPosition();
          // re-adjust parallax displacement reset
          if (dogWrapper) dogWrapper.style.transform = `translateX(-50%)`;
        } else {
          updateDogFinalPosition();
        }
      }, 100);
    });
    
    // initial cleanup: we also add slight delay for first blur removal synergy
    // add extra touch for cinematic shadow
    circularDogImg.style.transition = 'box-shadow 0.5s ease';
    
    // small micro floating effect: combine floating-dog class
    // For initial arrival, ensure circle has smooth filter pop
    dogWrapper.addEventListener('transitionend', (e) => {
      if (e.propertyName === 'filter' && !dogArrived) {
        circularDogImg.style.boxShadow = '0 25px 45px rgba(0,0,0,0.3), 0 0 0 8px rgba(245, 222, 179, 0.4)';
      }
    });
    
    // preload shadow glossy
    setTimeout(() => {
      if (!dogArrived) {
        // fallback for slow connections
        if (document.readyState === 'complete') {
          if (!dogArrived) {
            dogArrived = true;
            circularDogImg.classList.add('glow-active');
            circularDogImg.classList.add('floating-dog');
            triggerTextAnimations();
          }
        }
      }
    }, 3000);
  })();
 











  

  