/*!
 * kwm24 v1.0.0 (https://fh-ooe.at/)
 * Copyright 2017-2025 Kelly Tran
 * Licensed under the GPL-2.0-or-later license
 */
console.log("WE LOVE TYPO3");

const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    loop: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // Deaktivieren:
    pagination: false,
    scrollbar: false,
});


