var swiper = new Swiper(".swiper",
    {
        effect:"coverflow",
        grabCursor: true,
        centeredSlides: true,
        initialSlide: 2,
        speed: 600,
        preventClick: true,
        slidesPerView: "auto",
        coverflowEffect:
            {
                rotate:0,
                stretch:80,
                depth:300,
                modifier:1,
                slideShadows:true,
            },

        pagination:
            {
                el:".swiper-pagination",
            }
    }
    );