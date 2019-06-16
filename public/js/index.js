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
$(function () {
  $('#checkbox').change(function () {
    if ($(this).is(':checked')) {
      $('#changePassword').prop('hidden', false)
    } else {
      $('#changePassword').prop('hidden', true)
    }
  })
})

function addReview() {
  $('#addReview').prop('hidden', false)
}

function cancelReview() {
  $('#addReview').prop('hidden', true)
}

function onDescription() {
  const primary = {
    color: 'white',
    background: 'linear-gradient(to right, #243b55, #141e30)'
  }
  const secondary = {
    color: 'black',
    background: 'white'
  }
  $('#desButton').css(primary)
  $('#reviewButton').css(secondary)
  $('#Description').prop('hidden', false)
  $('#Review').prop('hidden', true)
}

function onReview() {
  const primary = {
    color: 'white',
    background: 'linear-gradient(to right, #243b55, #141e30)'
  }
  const secondary = {
    color: 'black',
    background: 'white'
  }
  $('#desButton').css(secondary)
  $('#reviewButton').css(primary)
  $('#Description').prop('hidden', true)
  $('#Review').prop('hidden', false)
}

function editProfile() {
  const data = $('form').serialize()
  $.post('/api/update?' + data, function (data, status) {
    if (status === 200) location.reload()
    else if (status === 304) alert('Không thể thay đổi thông tin')
  })
}

function forgetPassword() {
  let data = $('#forgetPasswordForm').serialize()
  $.post('/api/reset?' + data, function (data, status) {
    if (status === 200) location.reload()
    else if (status === 304) alert('Không thể thay đổi thông tin')
  })
}
