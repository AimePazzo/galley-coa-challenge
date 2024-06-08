document.addEventListener("DOMContentLoaded", function() {
    const galleryItems = document.querySelectorAll('.gallery-item');

    galleryItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.querySelector('.overlay').style.opacity = '1';
            item.querySelector('img').style.filter = 'blur(5px)';
            item.querySelector('img').style.transform = 'scale(1.1)';
        });

        item.addEventListener('mouseleave', () => {
            item.querySelector('.overlay').style.opacity = '0';
            item.querySelector('img').style.filter = 'none';
            item.querySelector('img').style.transform = 'scale(1)';
        });
    });
});
