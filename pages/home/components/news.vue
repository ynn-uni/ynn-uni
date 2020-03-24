<template>
	<view class="news">
		<view class="title">
			<view class="left">
				<view class="line"></view>
				<view class="text">新闻资讯</view>
			</view>
			<view class="more" @click="handelNewsList">
				查看更多<text class="cuIcon-right"></text>
			</view>
			
		</view>
		<view class="list">
			<view class="item" v-for="(item,index) in newsList" :key="index" @click="handelNewsDetail(item.id)">
				<image src="../../../static/images/home_new.png" mode=""></image>
				<view class="text">
					<view class="title">
						{{item.title}}
					</view>
					<view class="dis">
						{{item.abstract}}
					</view>
					<view class="info flex justify-between align-center">
						<view class="look_num">
							{{item.clicks}}人看过
						</view>
						<view class="data">
							{{item.created_at}}
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
  import {getNewsList} from '@/apis/index.js'
	export default {
		data() {
			return {
				newsList:[]
			};
		},
		mounted() {
		  this.getnewslist()
		},
		methods: {
			getnewslist(){
        getNewsList().then((res)=>{
          let data=res.data.data
          data.forEach((val)=>{
            // if(val.hot){
              val.created_at=this.initDate(val.created_at)
              this.newsList.push(val)
            // }
          })
        })
      },
      initDate(data){
        if(!data) return
        return data.split(' ')[0]
      },
			handelNewsList(){
				uni.switchTab({
					url:'/pages/news/news'
				})
			},
			handelNewsDetail(id){
				uni.navigateTo({
					url:'/pages/news/newsdetail?id='+id
				})
			},
	
		}
	}
</script>

<style lang="scss" scoped>
	.news{
		padding: 0 30rpx;
		margin-top: 20rpx;
		.title{
			width: 100%;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.left{
				display: flex;
				align-items: center;
				height: 50rpx;
				.line{
					width:12rpx;
					height:30rpx;
					background:rgba(54,174,173,1);
					margin-right: 10rpx;
				}
				.text{
					font-size:36rpx;
					color:rgba(74,74,74,1);
					
				}
			}
			.more{
				font-size:28rpx;
				color:rgba(155,155,155,1);
				height:40rpx;
			}
		}
		.list{
			.item{
				display: flex;
				justify-content: space-between;
				padding: 20rpx 0;
				border-bottom: 1px solid #ECECEC;
				image{
					width: 256rpx;
					height: 178rpx;
				}
				.text{
					width: 404rpx;
					height: 100%;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					.title{
						font-size:28rpx;
						color:rgba(74,74,74,1);
						line-height:40rpx;
						overflow : hidden;
						text-overflow: ellipsis;
						display: -webkit-box;
						-webkit-line-clamp: 1;
						-webkit-box-orient: vertical;
					}
					.dis{
						font-size:28rpx;
						color:rgba(155,155,155,1);
						line-height:40rpx;
						overflow : hidden;
						text-overflow: ellipsis;
						display: -webkit-box;
						-webkit-line-clamp: 2;
						-webkit-box-orient: vertical;
					}
					.info{
						width: 100%;
						font-size:24rpx;
						color:rgba(155,155,155,1);
            margin-top: 20upx;
					}
				}
			}
		}
	}
</style>
