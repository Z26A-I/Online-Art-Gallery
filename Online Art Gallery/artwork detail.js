document.addEventListener('DOMContentLoaded', function() {
    const purchaseButtons = document.querySelectorAll('.purchase-button');
    const cartLink = document.getElementById('cart-link');
    let cart = [];

    purchaseButtons.forEach(button => {
        button.addEventListener('click', function() {
            const artworkSection = this.closest('.artwork-detail');
            const artworkTitle = artworkSection.querySelector('h1').textContent;
            const artworkPrice = artworkSection.querySelector('p[id^="artwork-price"]').textContent;

            const item = {
                title: artworkTitle,
                price: artworkPrice
            };

            cart.push(item);
            updateCartCount();
            alert('Item added to cart!');
        });
    });

    function updateCartCount() {
        cartLink.textContent = `Cart (${cart.length})`;
    }
});


document.addEventListener('DOMContentLoaded', function () {
    const carouselItems = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;
    const totalItems = carouselItems.length;

    function showNextSlide() {
        // Remove the 'active' class from all items
        carouselItems.forEach((item) => item.classList.remove('active'));

        // Increment the index, and loop back to 0 if we reach the end
        currentIndex = (currentIndex + 1) % totalItems;

        // Add the 'active' class to the new current item
        carouselItems[currentIndex].classList.add('active');
    }

    // Automatically switch slides every 2 seconds
    setInterval(showNextSlide, 2000);
});
