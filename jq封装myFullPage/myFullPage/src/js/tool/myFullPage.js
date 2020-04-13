$.fn.extend({
  myFullPage: function(config) {
    var colorsArray = config.colorsArray;
    var $W = $(this);
    var $Section = $W.find(".section");
    var commonStyle = {
      width: "100%",
      height: "100%"
    };
    var clientWidth = $(window).outerWidth();
    var clientHeight = $(window).outerHeight();

    var curIndex = 0;
    var lock = true;

    $("html")
      .add("body")
      .css({
        position: "relative",
        margin: 0,
        overflow: "hidden"
      })
      .add($W)
      .add($Section)
      .css(commonStyle);

    $W.css({
      position: "absolute",
      left: 0,
      top: 0
    })
      .find(".section")
      .each(function(index, ele) {
        $(ele)
          .css({
            position: "relative",
            backgroundColor: colorsArray[index]
          })
          .find(".slide")
          .css({
            float: "left",
            width: clientWidth,
            height: clientHeight
          })
          .wrapAll('<div class="sliderWrapper"></div>');
      });

    $Section.find(".sliderWrapper").each(function(index, ele) {
      $(ele).css({
        width:
          $(ele)
            .find(".slide")
            .size() * clientWidth,
        height: clientHeight
      });
    });

    $(document).on("keydown", function(e) {
      //top bottom
      if (e.which == 38 || e.which == 40) {
          if(lock){
            lock=false;
            var newTop = $W.offset().top;
            var direction = '';
            if (e.which == 38 && curIndex != 0) {
                curIndex--;
                newTop += clientHeight;
                direction='top';
                config.onLeave(curIndex, direction);
            } else if (e.which == 40 && curIndex != $Section.size() - 1) {
                direction='bottom';
                curIndex++;
                newTop -= clientHeight;
                config.onLeave(curIndex, direction);
            }
            $W.animate({
                top:newTop
            },350,'swing',function(){
                lock=true;
                $Section.eq(curIndex).remove('active')
            })
          }
       
      }
      if (e.which == 37 || e.which == 39) {
          if(lock){
              lock=false;
            var $SW = $('.active').find('.sliderWrapper');
            var curShowDom = $SW.find('.innerActive');
            var newLeft=$SW.offset().left;
            if(e.which == 37||curShowDom.index() != 0){
                newLeft += clientWidth;
            }else if(e.which == 39 && curShowDom.index() != $SW.find('.slide').size() - 1){
                newLeft -= clientWidth;
            }
          }
          $SW.animate({
            left: newLeft
        }, 200, 'swing', function () {
            lock = true;
            direction != null ? curShowDom.removeClass('innerActive') : '';
            if (direction == 'left') {
                curShowDom.prev().addClass('innerActive');
            }else {
                curShowDom.next().addClass('innerActive');
            }
        })
      }
    });
  }
});
