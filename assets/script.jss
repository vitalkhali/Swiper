// Form Handling and Smooth Scroll
const visitorForm = document.getElementById('visitorForm');
const productContainer = document.querySelector('.blog-slider');  // Updated to target the slider container
const thankYouContainer = document.querySelector('.thank-you-container');
const header = document.querySelector('header'); // Assuming the header element is a <header> tag

visitorForm.addEventListener('submit', (event) => {
    event.preventDefault();

    // Collect form data
    const formData = new FormData(visitorForm);
    const userInfo = {
        name: formData.get('name'),
        type: formData.get('type'),
        companyName: formData.get('companyName'),
        email: formData.get('email'),
        whatsapp: formData.get('whatsapp'),
        interest: formData.get('interest'),
    };

    console.log('User Info:', userInfo); // Replace with actual saving logic

    // Show the Thank You section and product section (which is now the Swiper slider)
    thankYouContainer.style.display = 'block';
    productContainer.style.display = 'block';

    // Scroll to the "Thank You container" while keeping the header visible
    const headerHeight = header.offsetHeight; // Get the height of the header
    const thankYouOffsetTop = thankYouContainer.offsetTop; // Get the position of the "Thank you container"

    // Scroll to the "Thank You container" with an offset for the header height
    window.scrollTo({
        top: thankYouOffsetTop - headerHeight - 20, // Adjust the offset for a small margin (e.g., 20px)
        behavior: 'smooth', // Smooth scroll
    });

    // Initialize Swiper after the form submission (when the product section is revealed)
    var swiper = new Swiper('.blog-slider', {
        spaceBetween: 30,
        effect: 'fade',
        loop: true,
        mousewheel: {
            invert: false,
        },
        pagination: {
            el: '.blog-slider__pagination',
            clickable: true,
        }
    });
});



