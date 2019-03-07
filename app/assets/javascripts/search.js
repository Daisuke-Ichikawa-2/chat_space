$(function() {

var search_list = $("#user-search-result");

  // html動的追加用メソッド（検索結果用）
  function appendUser(user) {
     var html = `
                    <div class="chat-group-user clearfix">
                      <p class="chat-group-user__name">${ user.name }</p>
                      <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id = "8" data-user-name="test">追加</a>
                    </div>
                 `
      search_list.append(html);
   }

  // html動的追加用メソッド（エラー結果用）
  function appendErrMsgToHTML(msg) {
    var html = `<div class='listview__element--right-icon'>${ msg }</div>
                `
    search_list.append(html);
  }


  $("#user-search-field.chat-group-form__input").on("keyup", function() {
    var input = $("#user-search-field.chat-group-form__input").val();

    $.ajax({
      type: 'GET',
      url: '/users/search',
      data: { keyword: input },
      dataType: 'json'
    })

    // サーバレスポンス後のファンクション組み立て
    .done(function(data){
      // console.log(data)
      $("#user-search-result").empty();
        if (data.length !== 0) {
          data.forEach(function(user){
            appendUser(user);
          });
        }
        else {
           appendErrMsgToHTML("一致するユーザはいません。");
              }


     })


  })

})
