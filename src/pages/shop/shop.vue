<template>
    <!--本店-->
   <div>
     <div style="padding: 35rpx 20rpx;border-bottom: 2rpx solid #D4D4D4">
       <span style="font-size: 45rpx">{{title}}</span>
       <span style="font-size: 24rpx;margin-left: 60rpx">上传时间:{{createTime}}</span>
     </div>
     <div style="width: 50%;border-right: 2rpx solid #D4D4D4;float: left">
       <div class="leftPanel"><p>价格:</p><label></label></div>
       <div class="leftPanel"><p>颜色:</p><label></label></div>
       <div class="leftPanel"><p>配置:</p><label></label></div>
       <div class="leftPanel"><p>车辆状态:</p><label></label></div>
       <div class="leftPanel"><p>手续:</p><label></label></div>
       <div class="leftPanel"><p>库存来源:</p><label></label></div>
     </div>
     <div style="width: 49%;float: left;">
       <div class="leftPanel"><p>车规:</p><label></label></div>
       <div class="leftPanel"><p>售卖状态:</p><label></label></div>
       <div class="leftPanel"><p>环保公开:</p><label></label></div>
       <div class="leftPanel"><p>生产日期:</p><label></label></div>
       <div class="leftPanel"><p>排放标准:</p><label></label></div>
     </div>
     <div style="width: 100%;clear: both;">
       <div class="videoPanel"><p>视频上传:</p>
         <div style="width: 320rpx;height: 250rpx;">
           <video style="width: 100%;height: 100%" :src="videoImage"></video>
           <p>视频.mp4</p>
         </div>
       </div>
     </div>
     <div>
       <!--图片列表-->
       <div class="leftPanel"><p>实拍图片（20）:</p><label></label></div>
       <div class="tablePanel">
         <view v-for="(log,index) in imageLogos" :key="index">
           <div style="min-height: 220rpx;min-width: 220rpx;text-align: center">
             <img style="max-height: 200rpx;max-width: 200rpx" src="../../../static/images/image.png"/>
             <p>{{log.carName}}</p>
           </div>
         </view>
       </div>
     </div>
   </div>
</template>

<script>
  import shop from '../shop/shop.css'
  export default {
      name: "shop",
    data(){
        return{
          title:'丰田2019款霸道2700TX两汽囊无床底挂改版',
          createTime:'2019-08-23 15:00:00',
          videoImage:'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400',
          imageLogos:[
            {id:'1',carName:'丰田',img:''},
            {id:'1',carName:'丰田',img:''},
            {id:'1',carName:'雪弗兰',img:''},
            {id:'1',carName:'丰田',img:''},
            {id:'1',carName:'保时捷',img:''},
            {id:'1',carName:'丰田',img:''}
          ],
        }
    }
  }
</script>

<style scoped>
</style>
