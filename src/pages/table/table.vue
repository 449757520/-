<template>
    <!--行情表-->
    <div>
      <van-row>
        <!--热门品牌-->
        <div class="tablePanel">
          <view v-for="(log,index) in imageLogos" :key="index">
            <div style="min-height: 130rpx;min-width: 130rpx;text-align: center;margin-top: 20rpx">
              <img style="max-height: 120rpx;max-width: 120rpx" src="../../../static/images/image.png"/>
              <p>{{log.carName}}</p>
            </div>
          </view>
        </div>
      </van-row>
      <van-row>
        <div class="tablePanelContent">
          <view v-for="(image,imageItem) in imageButtonArrays" :key="imageItem">
            <van-cell-group :title="image.num">
              <view v-for="(imageItem,index) in image.arrays" :key="index">
                <van-cell is-link>
                  <view slot="title" style="overflow: hidden;vertical-align: center">
                    <img style="max-width: 80rpx;max-height: 80rpx;float: left" :src="imageItem.imageUrlApp"/>
                    <view style="margin-left:20rpx;float: left;max-height: 80rpx;line-height: 80rpx">{{imageItem.name}}</view>
                  </view>
                </van-cell>
              </view>
            </van-cell-group>
          </view>
        </div>
      </van-row>
    </div>
</template>

<script>
  import table from '../table/table.css';
  import axios from 'axios'
  import store from "../../vuex/store";
  export default {
    name: "table",
    data(){
      return {
        //图片按钮数据（行情表）
        imageButtonArrays:[],
        imageLogos:[
          {id:'1',carName:'丰田',img:''},
          {id:'1',carName:'丰田',img:''},
          {id:'1',carName:'丰田',img:''},
          {id:'1',carName:'丰田',img:''},
          {id:'1',carName:'保时捷',img:''},
          {id:'1',carName:'丰田',img:''},
          {id:'1',carName:'丰田',img:''},
          {id:'1',carName:'雷克萨斯',img:''},
          {id:'1',carName:'丰田',img:''},
          {id:'1',carName:'丰田',img:''}
          ],
        allBrandsUrl:'/all/brands',
      }
    },
    computed:{
      url(){
        return store.state.baseUrl
      }
    },
    mounted(){
      if(this.imageButtonArrays.length > 0){
        return false;
      }
      this.showAllBrands();
    },
    methods:{
      showAllBrands(){
        this.show = true;
        axios.get(
          this.url+this.allBrandsUrl
        ).then(response=>{
          this.imageButtonArrays = response.data;
        })
      },
    }
  }
</script>

<style>
.van-cell {
  /*padding: 18rpx 10rpx !important;*/
  border-bottom: 1rpx solid #b4b4b4;
}
.van-cell__left-icon-wrap,.van-cell__right-icon-wrap {
  height: auto !important;
}
.van-cell-group__title{
  padding-top: 25rpx !important;
  padding-bottom: 25rpx !important;
}
</style>
