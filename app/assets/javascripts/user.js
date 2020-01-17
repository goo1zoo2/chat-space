$(function(){

// var search_list = $("#user-search-field");
  var search_list = $("#user-search-result");
  var member_list = $("#member_search_result");
 
    function appendUser(users){
      var html = `<div class="chat-group-user clearfix">
                   <p class="chat-group-user__name">${user.name}</p>
                   <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}" data-user-name="${user.name}">追加</a>
                  </div>`
      search_list.append(html);
    return html;   
    }
    

    // function appendMembers(name, user_id) {
    //     var html =`<div class='chat-group-user clearfix js-chat-member' id='chat-group-user-8'>
    //                 <input name='group[user_ids][]' type='hidden' value=${ user_id }>
    //                 <p class='c hat-group-user__name'>${ name }</p>
    //                 <a class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</a>
    //               </div>`
    
    //     member_list.append(html);
    // }

    // function appendNoUsers(info) {
    //     var html =`<div class="chat-group-user clearfix">
    //                 <p class="chat-group-user__name">${ info }</p>
    //               </div>`
    
        // search_list.append(html);
    //   }    




//     function appendErrMsgToHTML(msg){
//         var html = 
//                     `<div class="chat-group-user clearfix">
//                         <p class="chat-group-user__name">${msg}</p>
//                     </div>`       
//         search_list.append(html);
// return html;
//     }

// 0.最初に読まれる
 $(function(){
// ①リロードしなくてもjsが動けるようにする役割がある
$(document).on('turbolinks:load', function(){
// ②#user-search-fieldというidで、キーボードが押され指が離れた瞬間.on('keyup'...))、eという引数をとって以下のことをする(function(e))
  $('#user-search-field').on('keyup', function(e){
    e.preventDefault(); //③キャンセル可能なイベントをキャンセル
// ④この要素に入力された語句を取得し($(this).val())、前後の不要な空白を取り除いた($.trim(...);)上でinputという変数に(var input =)代入
    var input = $trim($(this).val());
        var input = $("#user-search-field").val();
        $.ajax({  ajax通信で以下のことを行う
            type: 'GET',                // HTTPメソッドはGET
            url:  '/users/search',             // URLを指定=>urlは/usersに、メソッドGETを指定。ルーティングとコントローラーを設定。
            data: { keyword: input},    // ⑤コントローラーに渡すデータをkeyword=input(入力した文字)にするように指定
            processData: false,  //おまじない
            contentTyoe: false  //おまじない
            dataType: 'json'            // サーバから値を返す際はjsonである
        })
// 
        .done(function(users){ 
          $('#user-search-result').empty();
          if (users.length !== 0) { 
            users.forEach(function(users){
              appendProduct(users);               
            });
          }
          else {
            appendErrMsgHTML("一致するユーザーが見つかりません");
          }
        })

        .fail(function() {
            alert('ユーザー検索に失敗しました');
        });

    })
// ①リロードしなくてもjsが動けるようにする役割がある
    $(document).on('turbolinks:load', function(){

        var search_list = $("#user-search-result");
        var member_list = $("#member-append");
    })
 })
})
