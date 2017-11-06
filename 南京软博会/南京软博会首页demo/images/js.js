/**
 * Created by ck on 2017/7/6.
 */
$(function () {
    bigChange(0);
    ButtonClick(0);
    mainChange("main-info-1","bottom-1",0);
    mainChange("main-info-2","bottom-2",0);
    mainChange("main-info-3","bottom-3",0);
    var box2_img = $('.bottom-box2 img');
    var box_img = $('.bottom-box img');
    box2_img.eq(1).css('left','57px').parent().find('.pl1').css('background-position-x','20px');
    box2_img.eq(2).css('left','54px').parent().find('.pl1').css('background-position-x','14px');
    box2_img.eq(3).css('left','54px').parent().find('.pl1').css('background-position-x','16px');
    box2_img.eq(4).css('left','90px').parent().find('.pl1').css({'background-position-x':'5px','letter-spacing':'1px'});
//  box_img.eq(1).css('left','52px');
})
/*大内容切换*/
function bigChange(show_num) {
    var changeMain=$(".main-info-box")
    var changeObj=$(".main-info-box>li");
    var buttonPre=$("#bt-pre");
    var buttonNext=$("#bt-next");
    var btMainBg=$("#bottom-main");
    var imgNum=show_num;
    changeMain.animate({left:imgNum*-834+"px"},500);
    btMainBg.animate({left:imgNum*-804+"px"},500);
    buttonPre.css({background:"url(images/njblh-pre-"+imgNum+".png)"});
    buttonNext.css({background:"url(images/njblh-next-"+imgNum+".png)"});
}
function ButtonClick(show_num) {
    var changeMain=$(".main-info-box")
    var buttonPre=$("#bt-pre");
    var buttonNext=$("#bt-next");
    var btMainBg=$("#bottom-main");
    var mainNum=show_num;
    buttonPre.click(function () {
        mainNum=mainNum-1;
        if(mainNum<0){
            changeMain.animate({left:"-1668px"},500);
            btMainBg.animate({left:"-1608px"},500);
            buttonPre.css({background:"url(images/njblh-pre-"+2+".png)"});
            buttonNext.css({background:"url(images/njblh-next-"+2+".png)"});
            mainNum=2;
            return mainNum;
        }else {
            btMainBg.animate({left:mainNum*-804+"px"},500);
            changeMain.animate({left:mainNum*-834+"px"},500);
            buttonPre.css({background:"url(images/njblh-pre-"+mainNum+".png)"});
            buttonNext.css({background:"url(images/njblh-next-"+mainNum+".png)"});
            return mainNum;
        }
    })
    buttonNext.click(function () {
        mainNum=mainNum+1;
        if(mainNum>2){
            changeMain.animate({left:"0px"},500);
            btMainBg.animate({left:"0px"},500);
            buttonPre.css({background:"url(images/njblh-pre-"+0+".png)"});
            buttonNext.css({background:"url(images/njblh-next-"+0+".png)"});
            mainNum=0;
            return mainNum;
        }else {
            btMainBg.animate({left:mainNum*-804+"px"},500);
            changeMain.animate({left:mainNum*-834+"px"},500);
            buttonPre.css({background:"url(images/njblh-pre-"+mainNum+".png)"});
            buttonNext.css({background:"url(images/njblh-next-"+mainNum+".png)"});
            return mainNum;
        }
    })
}
/*内部内容切换*/
function mainChange(ChangeObjId,ClickObjId,FirstNum) {
    var ChangeObj=$("#"+ChangeObjId+">li");
    var ClickObj=$("#"+ClickObjId+">li");
    var ClickImg=$("#"+ClickObjId+">li>img");
    var ClickA=$("#"+ClickObjId+">li>a");
    var ClickTlt=$("#"+ChangeObjId+">.tlt");
    var ClickBg=$("#"+ChangeObjId+">.tlt_bg");
    ChangeObj.eq(FirstNum).show();
    ClickImg.eq(FirstNum).show();
    var num=function (i) {
        ClickA.eq(i).hover(function () {
            for(var z=0;z<ClickObj.length;z++){
                if(z===i){   
                    ChangeObj.eq(z).show(300)
                    ClickImg.eq(z).show(300);
                }else {
                    ChangeObj.eq(z).hide(300);
                    ClickImg.eq(z).hide(300);
                }
            }          
        })
    }
    for(var i=0;i<ClickObj.length;i++){
        num(i);
    }
}

