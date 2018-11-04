window.onload=function(){
    leftSwipe();
    itcast.iScroll({
        swipeDom:document.querySelector('.hm_category_right'),
        swipeType:'y',
        swipeDistance:100
    });
};
//左侧的滑动效果
function leftSwipe(){
    var parentBox=document.querySelector('.hm_category_left');
    //子盒子
    var childBox=parentBox.querySelector('ul');
    var parentHeight=parentBox.offsetHeight;
    var childHeight=childBox.offsetHeight;
    //定位区间
    var maxPosittion=0;
    var minPosition=parentHeight-childHeight;
    //缓冲的距离
    var distance=150;
    //滑动区间
    var maxSwipe=maxPosittion+150;
    var minSwipe=minPosition-150;
    //添加过渡
    var addTransition=function(){
        childBox.style.webkitTransition="all .2s";
        childBox.style.transition="all.2s";
    };
    //删除过渡
    var addTransition=function(){
        childBox.style.webkitTransition="none";
        childBox.style.transition="none";
    };
    //改变位子
    var setTranslateY=function(TranslateY){
        childBox.style.webkitTransform="translateY("+translateY+"px)";
        childBox.style.transform="translateY("+translateY+"px)";
    };
    //1.滑动 
    //参数
    var startY=0;
    var moveY=0;
    var distanceY=0;

    //记录当前定位
    var currY=0;
    childBox.addEventListener('touchstart',function(e){
        startY=e.touches[0].clientY;tion
    });
    childBox.addEventListener('touchmove',function(e){
        moveY=e.touches[0].clientY;
        distanceY=moveY-startY;
        if((currY=distanceY)<maxSwipe&&(currY+distanceY)>
        minSwipe){
            //删除过渡
            removeTransition();
            //做定位
            setTranslateY(currY+distanceY);
        }
    });
    //避免模拟器上的bug问题，事件冒泡机制
    window.addEventListener('touchend',function(e){
                 if((currY+distanceY)>maxPosittion){
                     currY=maxPosittion;
                     addTransition();
                     setTranslateY(currY);
                 }
                 //要将定位的位子小于最小的定位时
                 else if((currY=distanceY)<minPositionV){
                          currY=minPosition;
                          addTransition();
                          setTranslateY(currY);
                 }
                 //重置参数
                 startY=0;
                 moveY=0;
                 distanceY=0;
    });
    var lis=childBox.querySelectorAll('li');
    itcast.tap(childBox,function(e){
           for(var i=0; i<lis.length;i++){
               lis[i].className="";
               lis[i].index=i;
           }
             var li=e.target.parentNode;
             li.className='now';
             console.log(li.index);
             var translateY=-li.index*50;
             if(translateY>minPosition){
                 currY=translateY;
                 addTransition();
                 setTranslateY(currY);
             }else{
                 currY=minPosition;
                 addTransition();
                 setTranslateY(currY);
             }
            });}
