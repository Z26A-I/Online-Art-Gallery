const items = document.querySelectorAll('.carousel-item');
let currentItem = 0;
const autoRotateInterval = 2000; // Auto rotate every 5 seconds

function updateCarousel() {
    const offset = -currentItem * 100;
    items.forEach(item => {
        item.style.transform = `translateX(${offset}%)`;
    });
}

document.getElementById('nextBtn').addEventListener('click', () => {
    currentItem = (currentItem + 1) % items.length;
    updateCarousel();
});

document.getElementById('prevBtn').addEventListener('click', () => {
    currentItem = (currentItem - 1 + items.length) % items.length;
    updateCarousel();
});

setInterval(() => {
    currentItem = (currentItem + 1) % items.length;
    updateCarousel();
}, autoRotateInterval);
document. querySelector('.logo').addEventListener('click',()=>{
LOGO.style.color=yellow;
});
