<template>
	<view class="my-swiper">
		
		
		<swiper class="card-swiper"  :circular="true"
		 :autoplay="true" interval="5000" duration="500" @change="cardSwiper" indicator-color="#8799a3"
		 indicator-active-color="#0081ff">
			<swiper-item v-for="(item,index) in 5" :key="index" :class="cardCur==index?'cur':''">
				<view class="swiper-item">
					<image src="../../../static/images/home_swiper.png" mode="aspectFill"></image>
					<!-- <video :src="item.url" autoplay loop muted :show-play-btn="false" :controls="false" objectFit="cover" v-if="item.type=='video'"></video> -->
				</view>
			</swiper-item>
		</swiper>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cardCur: 0,
				
				dotStyle: false,
				towerStart: 0,
				direction: ''
			};
		},
		
		methods: {
			
			cardSwiper(e) {
				this.cardCur = e.detail.current
			},
			// towerSwiper
			// 初始化towerSwiper
			

			

			
			
		}
	}
</script>

<style lang="scss" scoped>
	.tower-swiper .tower-item {
		transform: scale(calc(0.5 + var(--index) / 10));
		margin-left: calc(var(--left) * 100rpx - 150rpx);
		z-index: var(--index);
	}
	.my-swiper{
		/deep/.card-swiper{
			.swiper-item{
				border: 1px solid #fff;
				image{
					border-radius: 10rpx;
					width: 100%;
				}
			}
		}
	}
</style>
