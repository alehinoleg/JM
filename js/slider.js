const slider = document.querySelector('.slider-container');


let mySwiper;

function mobileSlider () {
    if (window.innerWidth <= 320 && slider.dataset.mobile == 'false') {
        mySwiper = new Swiper(slider, {
            slidesPerView: 1,
            spaceBetween: 10,
            loop: true,
            slideClass: 'card',
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
              },
        });

        slider.dataset.mobile = 'true';
    }

    if (window.innerWidth > 320) {
        slider.dataset.mobile = 'false';

        if (slider.classList.contains('swiper-container-initialized')) {
            mySwiper.destroy();
        }
    }
}

mobileSlider()

window.addEventListener('resize', ()=>{
    mobileSlider();
})