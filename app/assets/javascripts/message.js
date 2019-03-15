$(function() {
  function buildHTML(mes){
    var html = `
                  <div class = "contents__main-contents__body__text" >
                  <div class = "contents__main-contents__body__text__user" > ${mes.user_name} </div>
                  <div class = "contents__main-contents__body__text__time"> ${mes.date} </div>
                  <div class = "contents__main-contents__body__text__message"> ${mes.content} </div>
                  </div>
                `
    return html;
  }

  $('.new_message').on('submit', function(e){
    e.preventDefault();

    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })

    .done(function(data){
      var html = buildHTML(data);
      $('.contents__main-contents__body').append(html)
      $('.contents__main-contents__body').animate({scrollTop: $('.contents__main-contents__body')[0].scrollHeight}, 'fast')
      $('.contents__main-contents__footter__form__button').prop("disabled", false)

    })

    .fail(function(){
      alert('error');
    })
      return false;

    });



    })



