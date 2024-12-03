const swiperWorks = new Swiper('.swiper.is-perks', {
 		slidesPerView: 1.2,
    loop: false,
    spaceBetween: 16,
    freeMode: true,
    grabCursor: true,
    
    /* navigation: {
      nextEl: '.button--slider_next',
      prevEl: '.button--slider_prev',
    }, */
    
     breakpoints: {
    	768: {
      	slidesPerView: 3,
        spaceBetween: 16,
    	}
  	},
    
});
