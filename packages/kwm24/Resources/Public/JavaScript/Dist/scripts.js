/*!
 * kwm24 v1.0.0 (https://fh-ooe.at/)
 * Copyright 2017-2025 Kelly Tran
 * Licensed under the GPL-2.0-or-later license
 */
console.log("WE LOVE TYPO3");

const swiper = new Swiper('.swiper', {
    slidesPerView: 1, // <<< ÄNDERN auf 1!
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});

