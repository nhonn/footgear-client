/* eslint-disable no-undef */
$('#banner').owlCarousel({
  loop: true,
  margin: 10,
  center: true,
  responsive: {
    0: {
      items: 1
    }
  }
})

$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  center: true,
  responsive: {
    0: {
      items: 1
    },
    640: {
      items: 3
    },
    1007: {
      items: 5
    }
  }
})

$('.lazy').Lazy()
