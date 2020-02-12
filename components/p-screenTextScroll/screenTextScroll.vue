<!-- 
展示屏幕文字滚动效果
 
使用方法：

 -->
<!-- 
展示屏幕文字滚动效果

usage:
 list:数组数据
 @getCurrentIndex  获取当前swiper的下标
 <textscroll :list="list" @getCurrentIndex="getIndex"/>

 -->

<template>
	<view class="_notice">
		<swiper class="_swiper tc" @change="slideChange" indicator-dots="false" autoplay="true" :interval="interval" circular="true"
		 display-multiple-items="1" :duration="duration" disable-touch="true">
			
			
			<!-- <swiper-item>
				<view class="swiper-item uni-bg-red">2</view>
			</swiper-item> -->
			
			
			<swiper-item>
				<view class="swiper-item uni-bg-red"></view>
			</swiper-item>
			<swiper-item v-for="(item,index) in list" :key="index">
				<view class="swiper-item uni-bg-red">
					<!-- <image src="../../static/icons/meassage.png" mode=""></image> -->
					{{item}}
				</view>
			</swiper-item>
			
			<swiper-item>
				<view class="swiper-item uni-bg-red"></view>
			</swiper-item>
			
		</swiper>
	</view>
</template>

<script>
	export default {
		props: {
			//显示数据
			list: {
				type: Array,
				defual:function(){
					return [];
				}
			},
		},
		data() {
			return {
				interval:3000,
				duration:12000,
			};
		},
		methods:{
			slideChange(e){
				this.$emit('getCurrentIndex',e.detail.current); 
				
			}
		}

	};
</script>

<style lang="scss">
	._notice {
		// position: fixed;
		// left: 0;
		// top: 0;
		// /* #ifdef H5 */
		// top: 88upx;
		/* #endif */
		z-index: 9;
		width: 100%;
		background: rgba(255, 255, 255, 1);
		font-size: 28upx;
		height: 44upx;
		// color: #ffffff;
		border-radius: 6upx;
		overflow: hidden;
		box-sizing: border-box;
		color:rgba(74,74,74,1);
		image{
			width: 30rpx;
			height: 28rpx;
			margin-top: 10rpx;
			margin-right: 4rpx;
			vertical-align: center;
		}
		swiper-item{
			overflow: visible;
			white-space: nowrap;
		}
	}
	
	._swiper {
		line-height: 44upx;
	}
</style>
