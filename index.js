$('#shortcut').load('./shortcut/index.html');
$('#header').load('./header/index.html')
$('#fs1').load('./fs/fs1.html')
$('#fs3').load('./fs/fs3.html')
$('.slider-list').swiper({
    list: $('.slide-list-item'),
    width: 190,
    height: 470,
    isAuto: true,
    autoTime: 6000,
    showChangeBtn: false,
    showSpotBtn: false,
})
$('.slider-wrapper').swiper({
    list:$('.slider-wrapper> .slider-banner-img'),
    width:590,
    height:470,
    isAuto:true,
    autoTime:5000,
    showChangeBtn:true,
    showSpotBtn:true
})
$('.seckill-wrapper').swiper({
    list: $('.seckill-wrapper-item'),
    width: 800,
    height: 260,
    isAuto: true,
    type: 'animate',
    showChangeBtn: true,
    showSpotBtn: false,
})
$('.seckill-brand').swiper({
    list: $('.seckill-brand-item'),
    width: 180,
    height: 240,
    showChangeBtn: false,
    type: 'animate',
    autoTime: 3000,
})

var seckillTime = new Date('2020-02-28 16:00:00').getTime();
var seckillTimer = setInterval(function(){
    var newTime = new Date().getTime();
    if(seckillTime - newTime>0){
        var hour = Math.floor(( seckillTime - newTime ) / 1000 / 60 / 60);
        var minute = Math.floor((seckillTime - newTime) / 1000 / 60 - hour * 60);
        var second = Math.floor((seckillTime - newTime) / 1000 - hour * 60 * 60 - minute * 60 ) 
        if (hour < 10) {
            hour = '0' + hour;
        }
        if (minute < 10) {
            minute = '0' + minute;
        }
        if (second < 10) {
            second = '0' + second;
        }
        $('.timmer__unit--hour').text(hour)
        $('.timmer__unit--minute').text(minute)
        $('.timmer__unit--second').text(second)
    } else {
        $('.timmer__unit--hour').text('00')
        $('.timmer__unit--minute').text('00')
        $('.timmer__unit--second').text('00')
        clearInterval(seckillTimer)
    }
}, 500)
