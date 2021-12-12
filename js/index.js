$('.slider').slick({
    dots: true,
    infinite: false,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
  {
    breakpoint: 1050,
    settings: {
    slidesToShow: 2,
    slidesToScroll: 3,
    infinite: true,
    dots: true
  }
},
{
    breakpoint: 600,
    settings: {
    slidesToShow: 1,
    slidesToScroll: 1
  }
},
{
    breakpoint: 480,
    settings: {
    slidesToShow: 1,
    slidesToScroll: 1
  }
}
]
});