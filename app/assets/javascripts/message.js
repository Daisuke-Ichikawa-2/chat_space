$(function() {

  var leastMessage = window.leastMessage;

  function buildMessageHTML(mes){
    var html = `
                  <div class = "contents__main-contents__body__text" data-message-id = "${mes.id}">
                  <div class = "contents__main-contents__body__text__user" > ${mes.user_name} </div>
                  <div class = "contents__main-contents__body__text__time"> ${mes.date} </div>
                  <div class = "contents__main-contents__body__text__message"> ${mes.content} </div>
                  </div>
                `
    return html;
  }

  var interval = setInterval(function() {
    if (window.location.href.match(/\/groups\/\d+\/messages/)) {
      $.ajax({
        type: 'GET',
        url: window.location.pathname,
        data: { leastMessage: leastMessage },
        dataType: 'json'
      })
      .done(function(jsonRcvData) {
        var insertHTML = '';
        jsonRcvData.forEach(function(message) {
          insertHTML += buildMessageHTML(message);
          leastMessage = message;
        });
        $('.contents__main-contents__body').append(insertHTML);
        $('.contents__main-contents__body').animate({scrollTop: $('.contents__main-contents__body')[0].scrollHeight}, 'fast')
      })
      .fail(function(json) {
        alert('自動更新に失敗しました');
      });
    } else {
      clearInterval(interval);
    }} , 3000000000 );


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

    .done(function(jsonRcvData){
      var html = buildMessageHTML(jsonRcvData);
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



