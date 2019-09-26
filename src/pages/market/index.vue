<template>
  <div>
    <!--遮罩-->
    <van-toast id="van-toast" />
    <van-row>
      <!--轮播图-->
      <swiper :indicator-dots="indicatorDots" indicator-color="rgba(255, 255, 255, 0.5)"
              indicator-active-color="rgba(115, 115, 115, 0.5)"
              :autoplay="autoplay" :interval="interval" :duration="duration">
        <block v-for="(item,index) in imgUrls" :key="index">
          <swiper-item>
            <image :src="item.url" class="slide-image" width="355" height="150" mode="aspectFill"/>
          </swiper-item>
        </block>
      </swiper>
    </van-row>
    <van-row>
      <van-tabs type="card" color="#ffbc1a" @change="onTabsChange">
        <van-tab title="优选车源">
          <div class="otherBrand" >
            <!--全部-->
            <div>
              <img style="max-width: 70rpx;max-height: 80rpx" src="../../../static/button/all.png" @click="showAllBrands"/>
              <p>全部</p>
            </div>
            <!--品牌-->
            <div style="min-width:400rpx; display: flex">
              <view v-for="button in buttonArrays" :key="button.id">
                <div style="text-align: center;">
                  <img style="padding:10rpx;max-width: 60rpx;max-height: 60rpx" :src="button.imageAppUrl"/>
                  <p>{{button.cname}}</p>
                </div>
              </view>
            </div>
            <div>
              <button color="#ffbc1a" style="max-height: 68rpx" @click="showPopupPage">其他品牌</button>
            </div>
          </div>
          <div class="contentPanel">
            <view v-for="item in contents" :key="item.id">
              <div class="content">
                <div class="topContent">
                  <div style="width: 70%; float:left;display: inline-block;overflow: hidden;">
                    <p>{{item.brandName}}-{{item.guageName}}</p>
                    <span>车规:{{item.audiName}}</span>
                    <span style="margin-left: 15px">{{item.color}}</span>
                    <p>车辆状态：美国西海岸 预计8月24日到港</p>
                  </div>
                  <div style="width: 30%; float:left;display: inline-block;text-align: center;padding:4% 0">
                    <p style="font-size: 24px">40.5万</p>
                    <label>库存：</label><span>1</span><label>辆</label>
                  </div>
                </div>
                <div class="bottomContent">
                  <label>最终定价：</label><input value="40.5" disabled placeholder="连续的两个1会变成2"/>
                </div>
              </div>
            </view>
          </div>
        </van-tab>
        <van-tab title="本店车源">
          <div class="otherBrand" >
            <!--全部-->
            <div>
              <img style="max-width: 70rpx;max-height: 80rpx" src="../../../static/button/all.png"/>
              <p>全部</p>
            </div>
            <!--品牌-->
            <div style="min-width:400rpx; display: flex">
              <view v-for="button in buttonArrays" :key="button.id">
                <div style="text-align: center;">
                  <img style="padding:10rpx;max-width: 60rpx;max-height: 60rpx" :src="button.imageAppUrl"/>
                  <p>{{button.cname}}</p>
                </div>
              </view>
            </div>
            <div>
              <button color="#ffbc1a" style="max-height: 68rpx" @click="showPopupPage">其他品牌</button>
            </div>
          </div>
          <div class="contentPanel">
            <view v-for="item in contents" :key="item.id">
              <div class="content">
                <div class="topContent" style="border-bottom: none">
                  <div style="width: 70%; float:left;display: inline-block;overflow: hidden;">
                    <p>丰田2019款霸道2700TX</p>
                    <span>车规:美规</span>
                    <span style="margin-left: 15px">外观:黑色 内饰:棕色</span>
                    <p>车辆状态：美国西海岸 预计8月24日到港</p>
                  </div>
                  <div style="width: 30%; float:left;display: inline-block;text-align: center;padding:4% 0">
                    <p style="font-size: 24px">40.5万</p>
                    <label>库存：</label><span>1</span><label>辆</label>
                  </div>
                </div>
                <div class="bottomContentCar">
                  <div style="display: flex;flex-direction: row;justify-content:flex-end;align-items: center;">
                    <button>有图</button>
                    <button>国内行情</button>
                  </div>
                  <div style="display: flex;flex-direction: row;justify-content:flex-end;align-items: center; ">
                    <button @click="pushShopPage">本店</button>
                    <button>优选</button>
                    <button>行情</button>
                  </div>
                </div>
              </div>
            </view>
          </div>
        </van-tab>
        <van-tab title="车城展示">
          <div class="otherBrand" >
            <!--全部-->
            <div>
              <img style="max-width: 70rpx;max-height: 80rpx" src="../../../static/button/all.png"/>
              <p>全部</p>
            </div>
            <!--品牌-->
            <div style="min-width:400rpx; display: flex">
              <view v-for="button in buttonArraysCarShow" :key="button.id">
                <div style="text-align: center;">
                  <img style="padding:10rpx;max-width: 60rpx;max-height: 60rpx" :src="button.imageAppUrl"/>
                  <p>{{button.cname}}</p>
                </div>
              </view>
            </div>
            <div>
              <button color="#ffbc1a" style="max-height: 68rpx" @click="showPopupPage">其他品牌</button>
            </div>
          </div>
          <div class="contentPanel">
            <view v-for="item in contents" :key="item.id">
              <div class="content">
                <div class="topContent" style="border-bottom: none">
                  <div style="width: 70%; float:left;display: inline-block;overflow: hidden;">
                    <p>丰田2019款霸道2700TX</p>
                    <span>车规:美规</span>
                    <span style="margin-left: 15px">外观:黑色 内饰:棕色</span>
                    <p>车辆状态：美国西海岸 预计8月24日到港</p>
                  </div>
                  <div style="width: 30%; float:left;display: inline-block;text-align: center;padding:4% 0">
                    <p style="font-size: 24px">40.5万</p>
                    <label>库存：</label><span>1</span><label>辆</label>
                  </div>
                </div>
                <div class="bottomContentCar" style="justify-content: flex-end;padding-top:12rpx">
                  <p>天津大茂车行有限公司</p>
                </div>
              </div>
            </view>
          </div>
        </van-tab>
      </van-tabs>
    </van-row>
    <van-row>
      <van-popup
        z-index = '1002'
        :show="show"
        position="left"
        overlay="false"
        @close="onClose">
        <div style="text-align: center;margin: 10px auto"><span>品牌</span></div>
        <view v-for="(cell,cellIndex) in brandsArray" :key="cellIndex">
          <van-cell-group :title=cell.num>
            <view v-for="(item,itemIndex) in cell.arrays" :key="itemIndex">
              <van-cell :title=item.name border="true" is-link/>
            </view>
          </van-cell-group>
        </view>
      </van-popup>
    </van-row>
    <van-row :span="24" style="padding: 5rpx" v-if="isShowDiv">
      <div style="text-align: center">
        <van-loading type="spinner" color="#FFE10C" size="40rpx" v-if="isHasMore"/>
        <span style="margin-left: 12rpx">{{message}}</span>
      </div>
    </van-row>
  </div>
</template>
<script>
    import market from '../market/market.css';
    import axios from 'axios';
    import store from '../../vuex/store';
    import Toast from '../../../static/vant/toast/toast';
    export default {
      name: "market",
      data(){
        return {
          message:'',
          imgUrls:[
            {url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568191567206&di=f214f6280f813b215fdf418ed3120908&imgtype=0&src=http%3A%2F%2Fwww0.autoimg.cn%2F2012%2F6%2F7%2F7-22-43-22-371624422.JPG'},
            {url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568191567204&di=e93b0c92a73dfc92d529ab64e963a62b&imgtype=0&src=http%3A%2F%2Fwww1.m.autoimg.cn%2Fnewspic%2F2014%2F2%2F28%2F640x0_0_q30_2014022816005438929.jpg'},
            {url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568191567200&di=aeaac99e90b85fd0838dde0f5c1cbc61&imgtype=0&src=http%3A%2F%2Fdealer2.autoimg.cn%2Fdealerdfs%2Fg30%2FM04%2FAE%2FBE%2F620x0_1_q87_autohomedealer__ChcCSVs9b6-AQ4DtAAIwV4FTaWM242.jpg'}
          ],
          indicatorDots: true,//是否面板指示点
          autoplay: true, //是否自动轮播
          interval: 5000,
          duration: 1000,
          show:false,
          overShow:true,
          isHasMore:false,
          isShowDiv:true,
          contents:[],//循环内容
          buttonArrays:[],//循环按钮（优选车源）
          buttonArraysCar:[],//循环按钮(本店车源)
          buttonArraysCarShow:[{id:'1',name:'丰田'},{id:'2',name:'奔驰'},{id:'3',name:'宝马'},{},{}],//循环按钮（车城展示）
          brandsArray:[],//弹出层数组
          page:1, //当前页
          pageCount:1, //总页数
          size:3, //当前展示行数
          sizeCount:0, //总行数
          index:0,//tab索引
          otherBrandUrl:'/brand',
          tradeShowUrl:'',
          shopShowUrl:'/shop/three',
          allShowIsGreatUrl:'/isgreat',
          allBrandsUrl:'/all/brands',
        }
      },
      computed:{
        url(){
          return store.state.baseUrl
        }
      },
      mounted(){
        Toast.loading({
          mask: true,
          message: '加载中...',
          duration: 0
        });
        //初始化
        this.initGetTableData();
        this.getOtherBrandData();
        this.getTradeShowData();
      },
      methods:{
        initGetTableData(){
          let that = this;
          console.log(store.state.baseUrl)
          setTimeout(()=>{
            axios.get(
              that.url+that.allShowIsGreatUrl,
              {params:{
                  token:'6',
                  page:that.page,
                  size:that.size
                }}
            ).then(response =>{
              let arrays = response.data.data.data;
              Toast.clear();
              that.isHasMore = false;
              that.overShow = false;
              if(arrays.length > 0){
                that.page = response.data.data.page;
                that.pageCount = response.data.data.pageCount;
                that.size = response.data.data.size;
                that.sizeCount = response.data.sizeCount;
                arrays.forEach(function (i) {
                  that.contents.push(i);
                })
              } else {
                //没有更多数据
                that.isHasMore = false;
                that.message = "数据已加载完毕";
                setTimeout(()=>{
                  that.isShowDiv = false;
                },1000);
                return false;
              }
            })
          },1000);

        },
        getOtherBrandData(){
          axios.get(
            this.url+this.otherBrandUrl,
            {params:{token:'1'}}
          ).then(response =>{
            console.log(response.data.data);
            this.buttonArrays = response.data.data;
          })
        },
        getTradeShowData(){
          axios.get(
            this.url+this.shopShowUrl,
            {params:{token:6}}
          ).then(response =>{
            console.log(response.data.data);
            this.buttonArraysCarShow = response.data.data;
          })
        },
        showAllBrands(){
          this.show = true;
          axios.get(
            this.url+this.allBrandsUrl
          ).then(response=>{
            this.brandsArray = response.data;
          })
        },
        //弹出其他品牌页面
        showPopupPage(){
          this.show = true
        },
        //关闭弹窗
        onClose(){
          this.show = false;
        },
        //输入框
        onChange(val){
          console.log(val);
        },
        //本店页面
        pushShopPage(){
          wx.navigateTo({
            url: '../shop/main'
          })
        },
        //切换tabs
        onTabsChange(event){
          this.index = event.mp.detail.index;
        }
      },
      onPullDownRefresh() {
      },
      onReachBottom() {
        // 上拉加载更多
        this.isShowDiv = true;
        this.message = '正在加载中.......';
        this.isHasMore = true;
        this.page += 1;
        if(this.index == 0){
          //优选车
          this.initGetTableData();
        }
        if(this.index == 1){
          //本店车源
        }
        if(this.index == 2){
          //车城展示
        }
      },
    }
</script>

<style>
 swiper{
  height: 180px;
}
.van-popup{
  width: 70% !important;
  height: 100% !important;
}
.van-tab__pane{
   background-color: #f1f1f1;
 }
.topContent{
 border-bottom: 1px solid grey;
}
.contentPanel{
  margin: 3%;
  height: auto;
  width: 94%;
  /*border: 1px solid #f1f1f1;*/
  /*border-radius: 10px;*/
  /*background-color: #ffffff;*/
}
input{
  /*position: relative;*/
  border: 1px solid grey;
  border-radius: 5px;
  display: inline-block;
  width: 20%;
  text-align: center;
  /*right: -20px;*/

}
.van-tabs--card{
  margin:0 !important;
  padding-top: 40px !important;
}
.van-tabs__nav--card{
  height: 40px !important;
}
.van-tabs--card .van-tabs__wrap{
  height: 40px !important;
}
.van-tabs__nav--card .van-tab {
  line-height: 40px !important;
  border-right: 0px !important;
  color: #050500 !important;
}
.van-tabs__nav--card .van-tab.van-tab--active{
  color: #050500 !important;
}
.van-tabs__scroll--card{
  border-top: 1px solid grey !important;
  border-bottom: 1px solid grey !important;
  border-left: 0px !important;
  border-right: 0px !important;
}
button{
  font-size: 14px !important;
}
 /*.van-button{*/

   /*position: absolute;*/
   /*width: 100px;*/
   /*height: 40px !important;*/
   /*color: #0A0507 !important;*/
   /*right: -235px;*/
 /*}*/
 /*.van-button--normal{*/
   /*padding: 0px 0px !important;*/
 /*}*/
</style>
