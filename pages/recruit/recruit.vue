<template>
  <view class="container">
    <view class="recruit">
      <view class="list">
        <view class="item" v-for="(item,index) in list" :key="index" @click="handelRec(item.id)">
          <image class="my-bg" src="../../static/images/home_li.png" mode />
          <image class="my-ri" src="../../static/images/home_ri.png" mode />
          <view class="content">
            <view class="title">
              <view class="text">{{item.title}}</view>

              <view class="date">
                <image src="../../static/icons/recruit_time.png" mode />
                {{item.start}}～{{item.end}}
                <view class="status0" v-if="item.status==1">报名中</view>
                <view class="status0 status1" v-if="item.status==0">报名结束</view>
              </view>
            </view>
            <view class="info">
              <view class="info_item">
                <view class="ta">年龄</view>
                <view class="td">{{item.age}}岁</view>
              </view>
              <view class="info_item">
                <view class="ta">性别</view>
                <view class="td">{{item.sex}}</view>
              </view>
              <view class="info_item">
                <view class="ta">其他</view>
                <view class="td">{{item.type}}</view>
              </view>
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  import { getRecruitList } from '../../apis/index.js'
  export default {
    data() {
      return {
        list: [],
        page: 1,
        size: 10
      }
    },
    onReachBottom() {
      var that = this
      uni.showLoading({
        icon: 'none'
      })
      setTimeout(function() {
        this.page++
        this.initData()
      }, 1000)
    },
    mounted() {
      this.initData()
    },
    methods: {
      initData() {
        let page = this.page
        let size = this.size
        getRecruitList({ page, size }).then(res => {
          console.log(res)
          let data = res.data.data
          if (page > 1) {
            data.forEach(val => {
              this.list.push(val)
            })
          } else {
            this.list = data
          }
          uni.hideLoading()
        })
      },
      handelRec(id) {
        uni.navigateTo({
          url: '/pages/recruit/rec_detail?id=' + id
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  .recruit {
    padding: 0 30rpx;
    .list {
      padding-top: 6rpx;
      .item {
        position: relative;
        .my-bg {
          width: 690rpx;
          height: 320rpx;
        }
        .my-ri {
          width: 186rpx;
          height: 186rpx;
          position: absolute;
          right: 40rpx;
          bottom: 26rpx;
        }
        .content {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          display: flex;
          flex-direction: column;
          // align-items: center;
          justify-content: space-between;
          padding: 46rpx 0 30rpx 0;
          color: #fff;
          padding-left: 32rpx;
          .title {
            width: 626rpx;

            .text {
              font-size: 30rpx;
              line-height: 40rpx;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 1;
              -webkit-box-orient: vertical;
            }
            .date {
              margin-top: 10rpx;
              display: flex;
              align-items: center;
              font-size: 26rpx;
              line-height: 26rpx;
              image {
                width: 22rpx;
                height: 22rpx;
                margin-left: 16rpx;
                margin-right: 10rpx;
              }
            }
            .status0 {
              font-size: 24rpx;
              line-height: 46rpx;
              text-align: center;
              padding: 0 10rpx;
              background-color: #2bceeb;
              color: #fff;
              border-radius: 6rpx;
              margin-left: 8rpx;
            }
            .status1 {
              background-color: #fe8b67;
            }
          }
          .info {
            display: flex;
            margin-left: 4rpx;
            font-size: 22rpx;
            line-height: 28rpx;
            margin-bottom: 10px;
            .info_item {
              margin-right: 60rpx;
              text-align: center;
              .ta {
                margin-bottom: 6rpx;
              }
            }
          }
        }
      }
    }
  }
</style>
