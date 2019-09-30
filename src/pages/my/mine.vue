<template>
  <!--个人中心-->
  <div>
    <van-row>
      <div class="userMessagePanel">
        <div style="padding: 30px;min-height:150rpx;overflow: hidden">
          <div class="imgClass">
            <img style="max-width: 130rpx;max-height: 130rpx" :src="logoImage"/>
          </div>
          <div style="float: left;margin-left: 50rpx;padding-top: 15rpx">
            <span>{{username}}</span><span>（{{role}}账号）</span>
            <p style="margin-top: 35rpx">{{account}}</p>
          </div>
        </div>
        <div style="text-align: right;padding-right: 40rpx;padding-bottom: 50rpx">
          <p>天津平行车商业贸易公司</p>
        </div>
      </div>
    </van-row>
    <!--循环图片-->
    <div class="tablePanel">
      <view v-for="(log,index) in imageLogos" :key="index">
        <div style="min-height: 130rpx;min-width: 130rpx;text-align: center">
          <img style="max-height: 120rpx;max-width: 120rpx" src="../../../static/images/image.png"/>
          <p>{{log.carName}}</p>
        </div>
      </view>
    </div>
    <!--关于我们-->
    <van-row>
      <div class="tablePanelContent">
          <van-cell-group border="false">
              <van-cell is-link >
                <view slot="title" style="overflow: hidden;vertical-align: center">
                  <img style="max-width: 60rpx;max-height: 60rpx;padding: 10rpx;float: left" src="../../../static/images/about.png"/>
                  <view style="margin-left:20rpx;float: left;max-height: 80rpx;line-height: 80rpx">关于我们</view>
                </view>
              </van-cell>
              <van-cell is-link>
                <view slot="title" style="overflow: hidden;vertical-align: center">
                  <img style="max-width: 60rpx;max-height: 60rpx;padding: 10rpx;float: left" src="../../../static/images/edition.png"/>
                  <view style="margin-left:20rpx;float: left;max-height: 80rpx;line-height: 80rpx">版本号</view>
                </view>
              </van-cell>
          </van-cell-group>
      </div>
    </van-row>
  </div>
</template>

<script>
  import mine from '../my/mine.css'
    export default {
      name: "mine",
      data(){
        return{
          logoImage:'',
          imageLogos:[
            {id:'1',carName:'价格显示',img:''},
            {id:'1',carName:'订单管理',img:''},
            {id:'1',carName:'车源管理',img:''},
            {id:'1',carName:'资料管理',img:''},
            {id:'1',carName:'账号管理',img:''},
            {id:'1',carName:'价格修改',img:''},
            {id:'1',carName:'交车图片',img:''},
            {id:'1',carName:'图片水印',img:''},
            {id:'1',carName:'核算工具',img:''},
            {id:'1',carName:'车型对比',img:''},
            {id:'1',carName:'新闻资讯',img:''},
            {id:'1',carName:'分享统计',img:''},
            {id:'1',carName:'分享设置',img:''},
            {id:'1',carName:'企业文化',img:''},
            {id:'1',carName:'宣传图片',img:''}
          ],
          username:'',
          role:'',
          account:''
        }
      },
      mounted(){
        this.username = wx.getStorageSync("user").username;
        this.role = wx.getStorageSync("user").role == 1 ? '业务员' : '经销商';
        this.account = wx.getStorageSync("user").account;
        this.logoImage = wx.getStorageSync("userDetail").userInfo.avatarUrl;
      }
    }
</script>

<style>
/*.van-cell__title,.van-cell__value {*/
  /*margin-left:20rpx !important;*/
/*}*/
.van-cell__left-icon-wrap,.van-cell__right-icon-wrap {
  height: auto !important;
}
.van-cell-group__title{
  padding-top: 25rpx !important;
  padding-bottom: 25rpx !important;
}
/*.van-icon{*/
  /*font-size: 50rpx !important;*/
/*}*/
  .imgClass{
    width: 130rpx;
    height: 130rpx;
    float: left;
    text-align: center;
  }
  .imgClass img{
    border-radius: 75rpx;
    -moz-border-radius: 75px;
    -webkit-border-radius: 75px;
  }
</style>
