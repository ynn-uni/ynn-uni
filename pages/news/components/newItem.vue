<template>
	<view class="item" @click="handelNewsDetail('1')">
		<view class="title">
			{{data.title}}
		</view>
		<view class="bref">
			{{data.bref}}
		</view>
		<view class="img">
			<image src="../../../static/images/home_new.png" mode=""></image>
			<image src="../../../static/images/home_new.png" mode=""></image>
		</view>
		<view class="info">
			<view class="num">
				{{data.redNum}}人看过
			</view>
			<view class="data">
				{{data.data}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				data:{
					title:'重庆市肿瘤医院1期临床试验研一期顺利开展期顺利开展',
					bref:'新药临床试验的最终目的是在于寻求有效且安全新药临床试验的最终目的是在于寻求有效且安全新药临床试验的最终目的是在于寻求有效且安全新药临床试验的最终目的是',
					redNum:'550',
					data:'2019-09-11'
				}
			}
		},
		methods: {
			handelNewsDetail(id){
				uni.navigateTo({
					url:"/pages/news/newsdetail"
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
