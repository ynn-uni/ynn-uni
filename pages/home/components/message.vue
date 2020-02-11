<template>
	<view class="message">
		<!-- <view class="info"> -->
			
			
						<!-- <image src="../../../static/icons/meassage.png" mode=""></image> -->
						<!-- <screenTextScroll :list="list"></screenTextScroll> -->
						<!-- 您已通过了xxxxx项目的审批，请在健康记录里面进行每日健康管理上传 -->
					
			<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
				<swiper-item>
					<view class="swiper-item uni-bg-red">A</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item uni-bg-green">B</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item uni-bg-blue">C</view>
				</swiper-item>
			</swiper>
		<!-- </view> -->
		
	</view>
</template>

<script>
	import screenTextScroll from '@/components/p-screenTextScroll/screenTextScroll.vue'
	export default {
		data() {
			return {
				list:['您已通过了xxxxx项目的审批，请在健康记录里面进行每日健康管理上传']
			};
		},
		components:{
			screenTextScroll
		},
		methods: {
			
		}
	}
</script>

<style scoped lang="scss">
	swiper{
		background-color: red;
	}
	.message{
		// position: fixed;
		// top: 0;
		// z-index: 100;
		// width: 750rpx;
		// // height: 48rpx;
		// display: flex;
		// align-items: center;
		// background:rgba(255,255,255,1);
		// box-shadow:0px 4rpx 8rpx 0px rgba(0,0,0,0.5);
		// padding: 0 40rpx;
		// overflow: hidden;
		
		.info{
			width: 100%;
			overflow: hidden;
			line-height: 48rpx;
			font-size:24rpx;
			color:rgba(74,74,74,1);
			white-space: nowrap;
			image{
				width: 30rpx;
				height: 28rpx;
				margin-top: 16rpx;
				margin-right: 4rpx;
				vertical-align: center;
			}
		}
	}
</style>
