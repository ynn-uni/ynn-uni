<template>
	<view class="item" @click="handelNewsDetail(data.id)">
		<view class="title">
			{{data.title}}
		</view>
		<view class="bref">
			{{data.abstract}}
		</view>
		<view class="img">
			<image src="../../../static/images/home_new.png" mode=""></image>
			<image src="../../../static/images/home_new.png" mode=""></image>
		</view>
		<view class="info">
			<view class="num">
				{{data.clicks}}人看过
			</view>
			<view class="data">
				{{data.created_at}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
    props:{
      data:{
        type:Object,
        default:()=>{}
      }
    },
    onShow() {
      console.log(this.data)
    },
		methods: {
			handelNewsDetail(id){
				uni.navigateTo({
					url:"/pages/news/newsdetail?id="+id
				})
			}
		}
	}
</script>

<style scoped lang="scss">
.item{
	background-color: #fff;
	padding: 20rpx 40rpx;
	border-bottom: 4rpx solid rgba(242,242,242,1);;
	.title{
		overflow : hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		font-size:32rpx;
		color:rgba(74,74,74,1);
	}
	.bref{
		margin-top: 10rpx;
		font-size:28rpx;
		color:rgba(155,155,155,1);
		line-height:40rpx;
		text-align: justify;
		overflow : hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}
	.img{
		margin-top: 20rpx;
		display: flex;
		justify-content: space-between;
		image{
			width: 320rpx;
			height: 180rpx;
		}
	}
	.info{
		margin-top: 20rpx;
		font-size:24rpx;
		color:rgba(155,155,155,1);
		line-height:34rpx;
		display: flex;
		justify-content: space-between;
	}
}
</style>
