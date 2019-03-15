$(function() {

var search_list = $("#user-search-result");
var add_list = $("#user-member-list");

  // html動的追加用メソッド（検索結果用）
  function appendUser(user) {
     var html = `
                    <div class="chat-group-user clearfix">
                      <p class="chat-group-user__name">${ user.name }</p>
                      <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id = "${user.id}" data-user-name="${user.name}" id= "direct_link_test" >追加</a>
                    </div>
                 `
      search_list.append(html);
      // console.log( $(user))
   }

  // html動的追加用メソッド（ユーザ追加用）
  function appendMember(user_id,user_name) {
     var html = `
                    <div class="chat-group-user clearfix">
                      <p class="chat-group-user__name">${ user_name }</p>
                      <input name='chat_group[user_ids][]' type='hidden' value='${ user_id }'>
                      <a class="user-list-add chat-group-user__btn chat-group-user__btn--add" data-user-id = "8" data-user-name="test" id= "direct_link_del" >削除</a>
                    </div>
                 `
      add_list.append(html);
   }

  // html動的追加用メソッド（エラー結果用）
  function appendErrMsgToHTML(msg) {
    var html = `<div class='listview__element--right-icon'>${ msg }</div>
                `
    search_list.append(html);
  }

  // // 動的オブジェクト用アクション
  $("#user-search-result").on("click", '.user-search-add', function () {
      var user_id = ($(this).attr('data-user-id'));
      var user_name = ($(this).attr('data-user-name'));
      appendMember(user_id,user_name);
      $(this).parent().remove();
  });

    $("#user-member-list").on("click", '.user-list-add', function () {
      $(this).parent().remove();
  });

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
