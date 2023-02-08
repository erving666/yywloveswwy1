
$(function() {
    
    //开启弹框
     function opendiv(){
         layui.use('layer', function(){
           var layer = layui.layer;
           layer.open({
               type: 1,
               title: "2020倒计时",
               anim: 2,
               area: ['600px', '500px'],
               content: $(".newYear"),
               success: function(layero, index) {},
               yes: function() {}
           });
          })
     }
     
     var isOpen=1;
     var setInterval2=setInterval(function() {
         if(new Date().getTime()-new Date("2020/1/2 00:00:00").getTime()>0){
             isOpen=-1;
         }
         if(isOpen==1){
            isOpen=0;
             opendiv();
         }else if(isOpen==-1){
             return;
         }
         console.log((new Date("2020/1/1 00:00:00").getTime()-new Date().getTime())/1000)
         $(".endSeconds").html(Math.ceil((new Date("2020/1/1 00:00:00").getTime()-new Date().getTime())/1000)+" 秒")
         if(new Date("2020/1/1 00:00:00").getTime()-new Date().getTime()<=0){
            $(".endTitle1").html("2020 年");
             $(".endSeconds").html("祝你事事如意");
            $(".endTitle2").show();
            $(".newYear").css("background-image","url(img/gif011.gif)")
            $(".newYear").append("<img src=\"img/love1.jpg\" alt=\"loveImg\" style=\"height: 280px;border: 10px solid rgba(255,255,205,0.7);\" />")
            clearInterval(setInterval2);
         }
     })
     
    var setInterval1=setInterval(function() {
        let nTime = new Date();
        dateDiff(nTime, "2022/09/25 0:0:0");
        // console.log(formartDate(nTime));
        // console.log("时间差：" + dTime);
    }, 1000)

    function dateDiff(nTime, sTime) {
        if (sTime == null || sTime == "") {
            sTime = "2022/09/25 0:0:0";
        }
        let day1 = new Date(sTime).getTime();
        elapsed_time = nTime.getTime()-day1
        let iDays = (elapsed_time) / (1000 * 60 * 60 * 24); //天数
        let iHours = (elapsed_time) / (1000 * 60 * 60); //小时数
        let iMinutes = (elapsed_time) / (1000 * 60); //分钟数
        let iSecondes = (elapsed_time) / (1000)
        $("#sTime").html("故事开始于 " + "2022-09-25 21:00:00");
        $("#nTime").html("当前时间: " + formartDate(nTime));

        $("#stop").html("时间在流逝，我们仍在继续")

        // $("#dDays").html("相爱 " +"暂时停止在第"+ "24天");
        $("#dDays").html("相爱 " +"第"+ iDays.toFixed() + "天");

        // $("#dHour").html("相爱 " + "暂时停止在第" + "574小时");
        $("#dHour").html("相爱 " + iHours.toFixed() + "小时");

        // $("#dMinutes").html("相爱 " + "暂时停止在第" + "34421分钟");
        $("#dMinutes").html("相爱 " + iMinutes.toFixed() + "分钟");

        // $("#dSeconds").html("相爱 " + iMinutes.toFixed() + "分钟");
        // return iHours
    };

    /*格式化时间  */
    function formartDate(mTime) {
        var mYear = mTime.getFullYear();
        var mMonth = mTime.getMonth() + 1;
        var mDate = mTime.getDate();
        var mHours = mTime.getHours();
        var mMinutes = mTime.getMinutes();
        var mSeconds = mTime.getSeconds();
        if (mMinutes < 10) {
            mMinutes = "0" + mMinutes
        }
        if (mSeconds < 10) {
            mSeconds = "0" + mSeconds
        }
        return mYear + "-" + mMonth + "-" + mDate + "  " + mHours + ":" + mMinutes + ":" + mSeconds;
    }

    /* 音乐点击 */
    $(".musicBtn").on("click", function() {
        if ($(".audio1").get(0).paused) {
            $(".audio1").get(0).play();
            $(".musicBtn i").addClass("layui-anim-loop")
        } else {
            $(".audio1").get(0).pause();
            $(".musicBtn i").removeClass("layui-anim-loop")
        }

    })
})

    window.onload = function(){
             setInterval("toggleSound()",1);
        }

    function toggleSound() {
                var music = document.getElementById("music");//获取ID  
                if (music.paused) { //判读是否播放  
                    music.paused=false;
                    music.play(); //没有就播放 
                }    
        }

