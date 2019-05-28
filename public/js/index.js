/* eslint-disable no-undef */
$('#banner').owlCarousel({
  loop: true,
  margin: 10,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 1
    }
  }
})

$('.owl-carousel').owlCarousel({
  loop: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 3
    },
    1000: {
      items: 5
    }
  }
})

$('.lazy').Lazy()
