document.addEventListener('DOMContentLoaded', function() {
    const radioButtons = document.querySelectorAll('input[name="position"]');
    const items = document.querySelectorAll('div.item');
    let currentIndex = Array.from(radioButtons).findIndex(radio => radio.checked);

    function updateRadio(index) {
        if (index >= 0 && index < radioButtons.length) {
            radioButtons[index].checked = true;
            currentIndex = index;
            updateItems();
        }
    }

    function updateItems() {
        items.forEach((item, index) => {
            if (index === currentIndex) {
                item.classList.remove('disabled'); // Enable the selected item
                item.querySelector('.carousel-text').style.opacity = '1';
            } else {
                item.classList.add('disabled'); // Disable non-selected items
                item.querySelector('.carousel-text').style.opacity = '0'; 
            }
        });
    }

    // Initial update to set the correct state
    updateItems();

    items.forEach((item, index) => {
        item.addEventListener('click', function() {
            updateRadio(index); // Select the clicked item
        });
    });

    document.addEventListener('keydown', function(event) {
        if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
            event.preventDefault(); // Prevent default scrolling behavior

            if (event.key === 'ArrowRight') {
                currentIndex = (currentIndex + 1) % radioButtons.length;
            } else if (event.key === 'ArrowLeft') {
                currentIndex = (currentIndex - 1 + radioButtons.length) % radioButtons.length;
            }

            updateRadio(currentIndex);
        }
    });
});