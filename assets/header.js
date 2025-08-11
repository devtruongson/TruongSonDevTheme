document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.promobar-link');
    const headerDivider = document.querySelector('.header-divider');
    const dropdownSearch = document.querySelector('.site-header__search-bar');
    const headerSearch = document.querySelector('.header-search');
    const searchIconOpen = headerSearch?.querySelector('.search-icon-open');
    const searchIconClose = headerSearch?.querySelector('.search-icon-close');
    const headerMobile = document.querySelector(".header-search-mobile")

    let currentIndex = 0;

    function showNextLink() {
        if (links && links.length > 0) {
            links[currentIndex]?.classList?.remove('opacity-100');
            links[currentIndex]?.classList?.add('opacity-0');

            currentIndex = (currentIndex + 1) % links.length;

            setTimeout(() => {
                links[currentIndex]?.classList?.remove('opacity-0');
                links[currentIndex]?.classList?.add('opacity-100');
            }, 300);
        }
    }

    if (links && links.length > 0) {
        links[currentIndex]?.classList?.remove('opacity-0');
        links[currentIndex]?.classList?.add('opacity-100');

        setInterval(showNextLink, 3500);
    }

    const logoHeader = document.querySelector('.logo-header');
    const logoHeaderSecond = document.querySelector('.logo-header-second');
    if (logoHeader && logoHeaderSecond) {
        const toggleLogo = () => {
            if (window.scrollY > 80) {
                logoHeaderSecond.classList?.add('block');
                logoHeaderSecond.classList?.remove('hidden');

                logoHeader.classList?.add('hidden');
                logoHeader.classList?.remove('block');
            } else {
                logoHeaderSecond.classList?.add('hidden');
                logoHeaderSecond.classList?.remove('block');

                logoHeader.classList?.add('block');
                logoHeader.classList?.remove('hidden');
            }
        }
        toggleLogo();
        window.addEventListener("scroll", toggleLogo);
    }

    document.querySelectorAll('.nav-item').forEach(item => {
        if (!item) return;

        item.addEventListener('mouseenter', () => {
            if (headerDivider) headerDivider.style.display = 'block';
            if (dropdownSearch) dropdownSearch.style.display = 'none';
            if (searchIconClose) searchIconClose.style.display = 'block';
            if (searchIconOpen) searchIconOpen.style.display = 'none';
        });

        item.addEventListener('mouseleave', () => {
            if (headerDivider) headerDivider.style.display = 'none';
        });
    });

    if (headerSearch) {
        const buttonSearchIcon = headerSearch.querySelector('button');
        const inputSearch = dropdownSearch?.querySelector('input');

        if (searchIconOpen) searchIconOpen.style.display = 'none';
        if (searchIconClose) searchIconClose.style.display = 'block';

        let isOpen = false;
        buttonSearchIcon?.addEventListener("click", () => {
            if (isOpen) {
                if (dropdownSearch) dropdownSearch.style.display = 'none';
                if (searchIconClose) searchIconClose.style.display = 'block';
                if (searchIconOpen) searchIconOpen.style.display = 'none';
                if (headerDivider) headerDivider.style.display = 'none';
                isOpen = false;
            } else {
                if (searchIconClose) searchIconClose.style.display = 'none';
                if (searchIconOpen) searchIconOpen.style.display = 'block';
                if (dropdownSearch) dropdownSearch.style.display = 'block';
                if (headerDivider) headerDivider.style.display = 'block';
                if (inputSearch) inputSearch.focus();
                isOpen = true;
            }
        });
    }

    // Mobile menu handling
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.querySelector('.menu-icon');
    const closeIcon = document.querySelector('.close-icon');

    if (mobileMenuToggle && mobileMenu) {
        mobileMenuToggle.addEventListener('click', function () {
            mobileMenu.classList.toggle('hidden');
            if (menuIcon) menuIcon.classList.toggle('hidden');
            if (closeIcon) closeIcon.classList.toggle('hidden');

            if (!mobileMenu.classList.contains('hidden')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });
    }

    document.querySelectorAll('.mobile-dropdown-toggle').forEach(toggle => {
        if (!toggle) return;
        toggle.addEventListener('click', function () {
            const content = this.nextElementSibling;
            const icon = this.querySelector('.mobile-dropdown-icon');
            if (content && icon) {
                content.classList.toggle('hidden');
                icon.textContent = content.classList.contains('hidden') ? '+' : '−';
            }
        });
    });

    // Xử lý dropdown menu cho mobile
    const mobileToggles = document.querySelectorAll('.mobile-dropdown-toggle');

    mobileToggles.forEach(toggle => {
        toggle.addEventListener('click', function (e) {
            e.stopPropagation(); // Ngăn sự kiện lan ra ngoài
        });
    });

    if (headerMobile) {
        const menu = headerMobile.querySelector('.menu-mb');
        if (menu) {
            headerMobile.addEventListener('click', function () {
                menu.classList.toggle('open');
            });
        }
    }
});