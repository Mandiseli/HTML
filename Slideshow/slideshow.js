const slider = document.querySelector('.slider');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let slideIndex = 0;

function showSlide(index) {
    slider.style.transform = `translateX(-${index * 100}%)`;
}

function prevSlide() {
    if (slideIndex > 0) {
        slideIndex--;
        showSlide(slideIndex);
    }
}

function nextSlide() {
    if (slideIndex < 2) { // Change this number to match the number of slides
        slideIndex++;
        showSlide(slideIndex);
    }
}
prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);