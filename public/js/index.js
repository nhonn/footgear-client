/* eslint-disable no-unused-vars */
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

// lazy loading images
$('.lazy').Lazy()

// hide change password form
$(function() {
  $('#checkbox').change(function() {
    if ($(this).is(':checked')) {
      $('#changePassword').prop('hidden', false)
    } else {
      $('#changePassword').prop('hidden', true)
    }
  })
})

function editProfile() {
  const data = $('form').serialize()
  $.post('/api/update?' + data, function(data, status) {
    if (status === 200) location.reload()
    else if (status === 304) alert('Không thể thay đổi thông tin')
  })
}
