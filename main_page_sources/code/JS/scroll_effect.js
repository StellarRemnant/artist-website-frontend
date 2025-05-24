
        document.addEventListener('DOMContentLoaded', function() {
            const elements = document.querySelectorAll('.scroll-element');

            function checkInView() {
                elements.forEach(element => {
                    const rect = element.getBoundingClientRect();
                    if (rect.top < window.innerHeight && rect.bottom >= 0) {
                        element.classList.add('in-view');
                    } else {
                        element.classList.remove('in-view');
                    }
                });
            }

            window.addEventListener('scroll', checkInView);
            window.addEventListener('resize', checkInView);

            checkInView();
        });
