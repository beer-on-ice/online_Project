$(function() {
        var mian_cpxq = $('.mian_cpxq');
        var pic_list = $('#pic_list');
        var pic_listli = $('#pic_list li');
        var text_list = $('#text_list');
        var text_listli = $('#text_list li h2');
        var text_list = $('#text_list');
        var ico_list = $('#ico_list ul');
        var ico_listli = $('#ico_list li');

        var icoleft = 0;
        var num = 0;
        var timer = null;
        ico_listli.click(function() {
            num = $(this).index();
            tab();
        })

        function tab() {
            ico_listli.eq(num).addClass('active').siblings().removeClass('active');
            pic_listli.eq(num).stop().animate({
                'opacity': 1
            }).siblings().stop().animate({
                'opacity': 0
            })
            text_listli.eq(num).addClass('show').parent().siblings().find('h2').removeClass('show');
        }

        function leftmove() {          
            ico_list.stop().animate({
                'left': -75 * icoleft
            }, 500);
        }
        function autoplay() {
            num++;
            if (num >= ico_listli.length) {
                num = 0;
            }

            if (num <= icoleft) {
                icoleft = num;
            } else if (num >= icoleft + 7) {
                icoleft = num - 6;
            }
            leftmove();
            tab();
        }
        timer = setInterval(autoplay, 2000);
        mian_cpxq.hover(function() {
            clearInterval(timer);
        }, function() {
            timer = setInterval(autoplay, 2000);
        })
    })