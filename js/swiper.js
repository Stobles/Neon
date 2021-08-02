new Swiper ('.products__slider--container', {
    slidesPerView: 3,
    spaceBetween: 50,
    initialSlide: 2,
    centeredSlides: true,
    loop: true,

    breakpoints:{

        1200:{
            slidesPerView: 3
        },

        767:{
            slidesPerView: 2
        },

        0: {
            slidesPerView: 1
        }
    }
});