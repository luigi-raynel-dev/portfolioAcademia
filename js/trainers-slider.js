$('.trainers-slider').slick({
  centerMode: true,
  centerPadding: '60px',
  arrows: false,
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 905,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 580,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});