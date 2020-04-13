var timer=null;
$("#search-btn").click(function() {
  console.log(5555);
});
function getSearchData(val) {
    $.ajax({
        url: 'https://suggest.taobao.com/sug',
        type: 'get',
        data: {
            area: 'c2c',
            code: 'utf-8',
            q: val,
            callback: "renderDom"
        },
        // 使用者希望拿到的数据类型  
        dataType: 'jsonp'
    })
}
$('#search-inp').on('input',function(){
    $("#search-btn").click();
    var val = $(this).val();
    if (val) {
        clearTimeout(timer);
        timer = setTimeout(function () {
            getSearchData(val);
        }, 500)
    }
})
function renderDom(res) {
  console.log(res);
  var data = res.result;
  str = "";
  data.forEach(function(item, index) {
    str += `<li><a href="#">${item[0]}</a></li>`;
  });
  $('#search-list').html(str).show()
}
var hideTimer = null;
$('#search-list').mouseleave(function(){
    hideTimer = setTimeout(function () {
        $('#search-list').hide()
       }, 500) 
})
