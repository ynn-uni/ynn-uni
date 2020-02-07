<template>
	<view class="recruit">
		<view class="title">
			<view class="left">
				<view class="line"></view>
				<view class="text">征募报名</view>
			</view>
			<view class="more">
				查看更多<text class="cuIcon-right"></text>
			</view>
			
		</view>
		<image class="rec_img" src="../../../static/images/home_rec.png" mode=""></image>
		<view class="list">
			<view class="item" v-for="(item,index) in list" :key="index">
				<image class="my-bg" src="../../../static/images/home_li.png" mode=""></image>
				<image class="my-ri" src="../../../static/images/home_ri.png" mode=""></image>
				<view class="content">
					<view class="text">
						琥珀酸曲格叻玎片叻玎片琥珀酸曲格叻玎片叻玎片琥珀酸曲格叻玎片叻玎片
					</view>
					<view class="re">
						临床招募
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:['1','2']
			};
		},
		
		methods: {
			
			

		}
	}
</script>

<style lang="scss" scoped>
	.recruit{
		padding: 0rpx 30rpx;
		padding-top: 110rpx;
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
		.rec_img{
			width: 710rpx;
			height: 190rpx;
			margin-top: 10rpx;
		}
		.list{
			display: flex;
			margin-top: 6rpx;
			justify-content: space-between;
			.item{
				position: relative;
				.my-bg{
					width: 332rpx;
					height: 164rpx;
				}
				.my-ri{
					width: 124rpx;
					height: 74rpx;
					position: absolute;
					right: 4rpx;
					bottom: 10rpx;
				}
				.content{
					position: absolute;
					top: 0;
					left: 0;
					right: 0;
					bottom: 0;
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
					.text{
						width:308rpx;
						font-size:28rpx;
						color:rgba(74,74,74,1);
						line-height:40rpx;
						text-align: justify;
						overflow : hidden;
						text-overflow: ellipsis;
						display: -webkit-box;
						-webkit-line-clamp: 2;
						-webkit-box-orient: vertical;
					}
					.re{
						margin-top: rpx;
						align-self: flex-start;
						margin-left: 10rpx;
						margin-top: 10rpx;
						width:140rpx;
						line-height:46rpx;
						background:rgba(255,218,156,1);
						box-shadow:0px 4rpx 18rpx 0px rgba(65,117,5,0.25);
						border-radius:23rpx;
						text-align: center;
						font-size:24rpx;
						color:rgba(74,74,74,1);
					}
				}
			}
		}
	}
</style>
