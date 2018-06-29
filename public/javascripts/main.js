$('.button').on('click', function(){
  console.log('holi')
  $.ajax({
    method: 'POST',
    url: 'http://localhost:3000/authenticate',
    data: {
      user:$('.user').val() ,
      password: $('.pass').val(),
    },
    statusCode: {
      '302': function() {
        window.location.href='/add';
      }
    }
  })
})

$('.butt').on('click', function(){
  $.ajax({
    method: 'POST',
    url: 'http://localhost:3000/producto',
    data: {
      title:$('.titulo').val() ,
      img: $('.imagen').val(),
      precio: $('.precio').val(),
    },
  })
})

$('.button-out').on('click', function(){
  $.ajax ({
    method: 'PUT',
    url: 'http://localhost:3000/logout',
  }).done (function(){
    console.log('deeededede')
    window.location.href='/auth';
  })
})
