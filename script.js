// script.js
document.addEventListener('scroll', () => {
    const box = document.querySelector('.box');
    const boxPosition = box.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.5; // Ganti angka untuk mengatur kapan animasi muncul

    if (boxPosition < screenPosition) {
        box.classList.add('visible');
    }
});
// script.js
document.addEventListener('scroll', () => {
    const boxes = document.querySelectorAll('.box, .about-section, .shop-section, .contact-section');
    
    boxes.forEach(box => {
        const boxPosition = box.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.5;

        if (boxPosition < screenPosition) {
            box.classList.add('visible');
        }
    });
});

// Memicu animasi saat pertama kali halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
    const boxes = document.querySelectorAll('.box, .about-section, .shop-section, .contact-section');
    boxes.forEach(box => {
        box.classList.add('visible');
    });
});
