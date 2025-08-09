// Product Media Swiper with Vertical Thumbnails
document.addEventListener('DOMContentLoaded', function() {
  // Kiểm tra breakpoint cho responsive
  const isDesktop = window.innerWidth > 768;
  
  // Khởi tạo thumbnail swiper
  const thumbSwiper = new Swiper('.thumb-product-swiper.vertical', {
    direction: isDesktop ? 'vertical' : 'horizontal',
    spaceBetween: 10,
    slidesPerView: 'auto',
    freeMode: true,
    watchSlidesProgress: true,
    centeredSlides: false,
    mousewheel: isDesktop,
    breakpoints: {
      320: {
        direction: 'horizontal',
        slidesPerView: 4,
        spaceBetween: 8
      },
      480: {
        direction: 'horizontal',
        slidesPerView: 5,
        spaceBetween: 8
      },
      768: {
        direction: 'horizontal',
        slidesPerView: 6,
        spaceBetween: 8
      },
      769: {
        direction: 'vertical',
        slidesPerView: 'auto',
        spaceBetween: 10
      }
    }
  });

  // Khởi tạo main swiper
  const mainSwiper = new Swiper('.main-product-swiper', {
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    thumbs: {
      swiper: thumbSwiper,
    },
    loop: false,
    speed: 400,
    grabCursor: true,
    keyboard: {
      enabled: true,
    },
    observer: true,
    observeParents: true,
    watchOverflow: true
  });

  // Handle window resize
  window.addEventListener('resize', function() {
    const newIsDesktop = window.innerWidth > 768;
    if (newIsDesktop !== isDesktop) {
      location.reload(); // Reload to reinitialize swipers with correct direction
    }
  });
});
