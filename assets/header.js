document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.promobar-link');
    const headerDivider = document.querySelector('.header-divider');
    const dropdownSearch = document.querySelector('.site-header__search-bar');
    const headerSearch = document.querySelector('.header-search');
    const searchIconOpen = headerSearch?.querySelector('.search-icon-open');
    const searchIconClose = headerSearch?.querySelector('.search-icon-close');

    let currentIndex = 0;

    function showNextLink() {
        if (links.length > 0) {
            links[currentIndex]?.classList?.remove('opacity-100');
            links[currentIndex]?.classList?.add('opacity-0');

            currentIndex = (currentIndex + 1) % links.length;

            setTimeout(() => {
                links[currentIndex]?.classList?.remove('opacity-0');
                links[currentIndex]?.classList?.add('opacity-100');
            }, 300);
        }
    }

    if (links.length > 0) {
        links[currentIndex]?.classList?.remove('opacity-0');
        links[currentIndex]?.classList?.add('opacity-100');

        setInterval(showNextLink, 3500);
    }

    const logoHeader = document.querySelector('.logo-header');
    const logoHeaderSecond = document.querySelector('.logo-header-second');
    if (logoHeader && logoHeaderSecond) {
        const toggleLogo = () => {
            if (window.scrollY > 80) {
                logoHeaderSecond?.classList?.add('block');
                logoHeaderSecond?.classList?.remove('hidden');

                logoHeader?.classList?.add('hidden');
                logoHeader?.classList?.remove('block');
            } else {
                logoHeaderSecond?.classList?.add('hidden');
                logoHeaderSecond?.classList?.remove('block');

                logoHeader?.classList?.add('block');
                logoHeader?.classList?.remove('hidden');
            }
        }
        toggleLogo();
        window.addEventListener("scroll", toggleLogo);
    }

    document.querySelectorAll('.nav-item').forEach(item => {
        item?.addEventListener('mouseenter', () => {
            if (headerDivider) headerDivider.style.display = 'block';
            if (dropdownSearch) dropdownSearch.style.display = 'none';
            if (searchIconOpen?.style) searchIconOpen.style.display = 'block';
            if (searchIconClose?.style) searchIconClose.style.display = 'none';
        });

        item?.addEventListener('mouseleave', () => {
            if (headerDivider) headerDivider.style.display = 'none';
        });
    });

    if (headerSearch) {
        const buttonSearchIcon = headerSearch.querySelector('button');
        const inputSearch = dropdownSearch?.querySelector('input');

        if (searchIconOpen?.style) searchIconOpen.style.display = 'none';
        if (searchIconClose?.style) searchIconClose.style.display = 'block';

        let isOpen = false;
        buttonSearchIcon?.addEventListener("click", () => {
            if (isOpen) {
                if (dropdownSearch) dropdownSearch.style.display = 'none';
                if (searchIconClose?.style) searchIconClose.style.display = 'block';
                if (searchIconOpen?.style) searchIconOpen.style.display = 'none';
                if (headerDivider) headerDivider.style.display = 'none';
                isOpen = false;
            } else {
                if (searchIconClose?.style) searchIconClose.style.display = 'none';
                if (searchIconOpen?.style) searchIconOpen.style.display = 'block';
                if (dropdownSearch) dropdownSearch.style.display = 'block';
                if (headerDivider) headerDivider.style.display = 'block';
                inputSearch?.focus();
                isOpen = true;
            }
        });
    }
});