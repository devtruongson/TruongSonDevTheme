document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.promobar-link');
    let currentIndex = 0;

    function showNextLink() {
        links[currentIndex].classList.remove('opacity-100');
        links[currentIndex].classList.add('opacity-0');

        currentIndex = (currentIndex + 1) % links.length;

        setTimeout(() => {
            links[currentIndex].classList.remove('opacity-0');
            links[currentIndex].classList.add('opacity-100');
        }, 300);
    }

    links[currentIndex].classList.remove('opacity-0');
    links[currentIndex].classList.add('opacity-100');

    setInterval(showNextLink, 3500);

    const logoHeader = document.querySelector('.logo-header');
    const logoHeaderSecond = document.querySelector('.logo-header-second');
    if (logoHeader && logoHeaderSecond) {
        const toggleLogo = () => {
            if (window.scrollY > 80) {
                logoHeaderSecond.classList.add('block');
                logoHeaderSecond.classList.remove('hidden');

                logoHeader.classList.add('hidden');
                logoHeader.classList.remove('block');
            } else {
                logoHeaderSecond.classList.add('hidden');
                logoHeaderSecond.classList.remove('block');

                logoHeader.classList.add('block');
                logoHeader.classList.remove('hidden');
            }
        }
        toggleLogo();
        window.addEventListener("scroll", toggleLogo);
    }
});