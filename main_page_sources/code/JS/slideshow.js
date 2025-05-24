document.addEventListener('DOMContentLoaded', () => {
    const slideshowContainers = [
        document.querySelector('.slides'),
        document.querySelector('.blur-left'),
        document.querySelector('.blur-right')
    ];
    
    let currentSlide = 1;
    const totalSlides = 5;
    let inactivityTimer;
    let isManualNavigation = false;

    // Function to check which slide is currently active
    function updateCurrentSlide() {
        
        console.log('Current slide:', currentSlide);
        if (!isManualNavigation) {
            const slides = slideshowContainers[0].querySelectorAll('.slide');
            slides.forEach(slide => {
                const opacity = window.getComputedStyle(slide).opacity;
                if (opacity > 0) { // If slide is visible
                    const slideNumber = parseInt(slide.className.match(/slide-(\d+)/)[1]);
                    currentSlide = slideNumber;
                }
            });
        }
    }

    // Set up animation monitoring
    const observer = new MutationObserver(() => {
        updateCurrentSlide();
    });

    // Observe each slide for changes
    slideshowContainers[0].querySelectorAll('.slide').forEach(slide => {
        observer.observe(slide, {
            attributes: true,
            attributeFilter: ['style']
        });
    });

    // Also check periodically for the current slide
    setInterval(updateCurrentSlide, 1000);

    function updateSlides(direction) {
        clearTimeout(inactivityTimer);
        isManualNavigation = true;
        
        if (direction === 'next') {
            currentSlide = currentSlide >= totalSlides ? 1 : currentSlide + 1;
        } else {
            currentSlide = currentSlide <= 1 ? totalSlides : currentSlide - 1;
        }

        slideshowContainers.forEach(container => {
            const slides = container.querySelectorAll('.slide');
            slides.forEach(slide => {
                slide.classList.add('paused', 'manual-transition');
                slide.classList.remove('active-slide');
            });

            const currentSlideElement = container.querySelector(`.slide-${currentSlide}`);
            currentSlideElement.classList.add('active-slide');
        });

        inactivityTimer = setTimeout(resumeAutoSlideshow, 10);
    }

    function resumeAutoSlideshow() {
        if (!isManualNavigation) return;
        
        isManualNavigation = false;
        
        slideshowContainers.forEach(container => {
            const slides = container.querySelectorAll('.slide');
            slides.forEach((slide) => {
                slide.classList.remove('paused', 'manual-transition', 'active-slide');
                
                // Calculate new animation delay based on current slide
                const slideNumber = parseInt(slide.className.match(/slide-(\d+)/)[1]);
                let newDelay = ((slideNumber - currentSlide + totalSlides) % totalSlides) * 5;
                
                // Reset animation by removing and reapplying it
                slide.style.animation = 'none';
                slide.offsetHeight; // Trigger reflow
                slide.style.animation = `slide-show 25s infinite ${newDelay}s`;
            });
        });
    }

    // Add click handlers to navigation buttons
    document.querySelector('.prev-button').addEventListener('click', () => {
        updateSlides('prev');
    });

    document.querySelector('.next-button').addEventListener('click', () => {
        updateSlides('next');
    });

    // Optional: Add keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            updateSlides('prev');
        } else if (e.key === 'ArrowRight') {
            updateSlides('next');
        }
    });

    // Initial update of current slide
    updateCurrentSlide();
});