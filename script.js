const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');
let currentIndex = 0;

function updateSlidePosition() {
    const width = slides[0].getBoundingClientRect().width;
    track.style.transform = `translateX(-${width * currentIndex}px)`;
}

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlidePosition();
});

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlidePosition();
});

document.addEventListener("DOMContentLoaded", function () {
    const dropdowns = document.querySelectorAll(".dropdown");

    dropdowns.forEach(dropdown => {
        const button = dropdown.querySelector(".dropdown-button");

        button.addEventListener("click", () => {
            dropdown.classList.toggle("active");
            dropdowns.forEach(d => {
                if (d !== dropdown) {
                    d.classList.remove("active");
                }
            });
        });
    });
    document.addEventListener("click", (event) => {
        dropdowns.forEach(dropdown => {
            if (!dropdown.contains(event.target)) {
                dropdown.classList.remove("active");
            }
        });
    });
});
