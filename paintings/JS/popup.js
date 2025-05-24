document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const closeBtn = document.querySelector('.close');
    const zoomableImage = document.querySelector('.zoomable-image');
    const tooltip = document.querySelector('.tooltip-text');

    
    zoomableImage.addEventListener('click', () => {
        modal.style.display = 'flex';
        modalImage.src = zoomableImage.src;
    });

    
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    
    modal.addEventListener('mousemove', (e) => {
        const rect = modalImage.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const xPercent = (x / rect.width) * 100;
        const yPercent = (y / rect.height) * 100;

        modalImage.style.transformOrigin = `${xPercent}% ${yPercent}%`;
        modalImage.style.transform = 'scale(2.5)'; 
    });

  
    modal.addEventListener('mouseleave', () => {
        modalImage.style.transform = 'scale(1)';
    });


    const imageContainer = document.querySelector('.image-container');
    imageContainer.addEventListener('mousemove', (e) => {
        const tooltipOffsetX = 15; 
        const tooltipOffsetY = 20;

 
        const rect = imageContainer.getBoundingClientRect();
        
   
        tooltip.style.left = `${e.clientX - rect.left + tooltipOffsetX}px`;
        tooltip.style.top = `${e.clientY - rect.top + tooltipOffsetY}px`;
    });

  
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'flex') {
            modal.style.display = 'none';
        }
    });
});