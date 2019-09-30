<template>
  <div>
    <!--登录-->
    <van-row :span="24">
      <view class="banner">
        <div style="margin: 20rpx 35rpx;">
          <van-field
            placeholder="请输入手机号"
            label="手机号"
            left-icon="phone"
            type="number"
            clearable
            border="true"
            :error="telephoneError"
            @blur="inputInfoTelephone"
            @focus="focusInfoTelephone"
          />
        </div>
        <div style="margin: 20rpx 35rpx;">
          <van-field
            placeholder="请输入密码"
            label="密码"
            left-icon="friends"
            clearable
            border="true"
            :error="passwordError"
            password="true"
            @blur="inputInfoPassword"
            @focus="focusInfoPassword"
          />
        </div>
        <div style="margin: 120rpx 0rpx 130rpx 0;text-align: center">
          <van-button round color="#FFBC1A" @click="loginInfo">登录</van-button>
        </div>
        <view class='imageHeader'>
          <button class="imageButton" open-type="getUserInfo" lang="zh_CN" @getuserinfo="bindGetUserInfo">
          <image src='../../static/images/wx.png'></image>
          </button>
        </view>
      </view>
    </van-row>
    <van-toast id="van-toast" />
  </div>
</template>
<script>
  // 引入css样式
  import login from '../../pages/login/login.css'
  import axios from 'axios'
  import Toast from '../../../static/vant/toast/toast';
  import store from '../../vuex/store'
  export default {
    name: "login",
    data(){
        return{
          canIUse:true,
          telephoneError:false,
          passwordError:false,
          telephone:'',
          password:'',
          //请求接口
          loginInfoUrl:'',
        }
    },
    computed:{
      url(){
        return store.state.baseUrl
      }
    },
    onLoad(){
      this.getSessionKeyExpire();
    },
    methods:{
      //查看session_key失效性
      getSessionKeyExpire(){
        console.log("onLoad");
        wx.checkSession({
          success(){},
          fail(){
            //已过期
            console.log("已过期");
            //重新登录
            wx.login({
              success(response){
                if(response.code){
                  //请求第三方接口
                  wx.request({
                    url:'http://192.168.195.1:8080/car/server/api/app' + '/code',
                    data:{code:response.code}
                  })
                } else {
                  console.log('登录失败'+response.errMsg);
                }
              }
            });
          }
        })
      },
      //授权按钮
      bindGetUserInfo(e){
        if (e.mp.detail.userInfo){
          let userDetail = {
             encryptedData:e.mp.detail.encryptedData,
             userInfo:e.mp.detail.userInfo,
             iv:e.mp.detail.iv
          };
          wx.setStorageSync("userDetail",userDetail);//用户详细信息
          wx.login({
            success(response){
              if(response.code){
                //请求第三方接口
                wx.request({
                  url:'http://192.168.195.1:8080/car/server/api/app' + '/code',
                  data:{code:response.code}
                })
              } else {
                console.log('登录失败'+response.errMsg);
              }
            }
          });
        } else {
          //用户按了拒绝按钮
          console.log('用户按了拒绝按钮');
        }
      },
      //登录
      loginInfo(){
        let that = this;
        wx.getSetting({
           success(res) {
            if (!res.authSetting['scope.record']) {
                wx.authorize({
                scope: 'scope.userInfo',
                success () {
                  if(that.telephone == ''){
                    that.telephoneError = true;
                    return false;
                  }
                  if(that.password == ''){
                    that.passwordError = true;
                    return false;
                  }
                  var user = {
                    username:'admin',
                    account:that.telephone
                  };
                  axios.post(
                    that.url + that.loginInfoUrl,
                    user
                  ).then(response=>{
                    if(response.data.code == 200) {
                      Toast.clear();
                      //用户信息存储到本地缓存
                      wx.setStorageSync("user",response.data.data);//用户
                      //跳转页面
                      const url = '../market/main';
                      wx.switchTab({url: url})
                    } else if(response.data.code == 206) {
                      Toast.fail('用户名或密码错误');
                    }
                  })
                },
                fail (){
                  console.log("未授权");
                  Toast.fail('请先授权小程序');
                }
              })
            }
          }
        })
      },
      //监听手机号输入框内容发生变化
      inputInfoTelephone(val){
        this.telephone = val.mp.detail.value
      },
      //监听密码输入框内容发生变化
      inputInfoPassword(val){
        this.password = val.mp.detail.value
      },
      //手机号输入框聚焦
      focusInfoTelephone(){
        this.telephoneError = false;
      },
      //密码输入框聚焦
      focusInfoPassword(){
        this.passwordError = false;
      }
    },
  }
</script>

<style>
  .van-cell{
    /*border: 1rpx solid #eaeaea;*/
    border-radius: 50rpx !important;
    border-bottom: 0rpx !important;
  }
  .banner{
    position: absolute;
    top:0px;
    bottom: 0px;
    width: 100%;
    padding-top: 420rpx;
    background-image: url("http://hbimg.huabanimg.com/8d210c31f9a0c7ed0c15e3a1c92e83425314b52119b7bf-HjpZds_fw658");
    /*background-position-x: center;*/
    background-size: cover;
  }
  .van-cell:after{
    border-bottom: 0rpx !important;
  }
  .van-button--normal{
    padding: 0rpx 302rpx !important;
  }
  .van-icon{
    margin-right: 10rpx !important;
  }
  .van-cell__title{
    min-width: 60rpx !important;
    max-width: 100rpx !important;
  }
  .van-toast--icon{
   width: 205rpx !important;
  }
</style>
