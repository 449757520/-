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
        <div style="margin: 120rpx 35rpx;text-align: center">
          <van-button round color="#FFBC1A" @click="loginInfo">登录</van-button>
        </div>
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
    created(){
      //判断用户是否授权
      // wx.getSetting({
      //   success(res) {
      //     if (!res.authSetting['scope.record']) {
      //       wx.authorize({
      //         scope: 'scope.userInfo',
      //         success () {
      //           console.log("已授权");
      //           const url = '../market/main';//车源页面
      //           wx.switchTab({url});
      //         },
      //         fail (){
      //           console.log("授权失败");
      //         }
      //       })
      //     }
      //   }
      // })
    },
    computed:{
      url(){
        return store.state.baseUrl
      }
    },
    methods:{
      bindGetUserInfo(e){
        if (e.mp.detail.userInfo){
          const url = '../market/main';//车源页面
          wx.switchTab({url});
          // let { encryptedData,userInfo,iv } = e.mp.detail;
          // axios.post(this.api,{
          //   // 这里的code就是通过wx.login()获取的
          //   //code:self.code,
          //   //encryptedData,
          //   //iv,
          // }).then(res => {
          //   console.log(`后台交互拿回数据:`,res);
          //   // 获取到后台重写的session数据，可以通过vuex做本地保存
          // }).catch(err => {
          //   console.log(`api请求出错:`,err);
          // })
        } else {
          //用户按了拒绝按钮
          console.log('用户按了拒绝按钮');
        }
      },
      //登录
      loginInfo(){
        let that = this;
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
            //用户信息存储到本地缓存
            wx.setStorageSync("user",response.data.data);//用户
            //跳转页面
            const url = '../market/main';
            wx.switchTab({url: url})
          } else if(response.data.code == 206) {
            Toast.fail('用户名或密码错误');
            return false;
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
    padding-top: 450rpx;
    background-image: url("http://hbimg.huabanimg.com/8d210c31f9a0c7ed0c15e3a1c92e83425314b52119b7bf-HjpZds_fw658");
    /*background-position-x: center;*/
    background-size: cover;
  }
  .van-cell:after{
    border-bottom: 0rpx !important;
  }
  .van-button--normal{
    padding: 0rpx 300rpx !important;
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
