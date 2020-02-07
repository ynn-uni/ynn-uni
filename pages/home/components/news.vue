<template>
	<view class="news">
		<view class="title">
			<view class="left">
				<view class="line"></view>
				<view class="text">新闻资讯</view>
			</view>
			<view class="more">
				查看更多<text class="cuIcon-right"></text>
			</view>
			
		</view>
		<view class="list">
			<view class="item" v-for="(item,index) in newsList" :key="index">
				<image src="../../../static/images/home_new.png" mode=""></image>
				<view class="text">
					<view class="title">
						{{item.title}}
					</view>
					<view class="dis">
						{{item.dis}}
					</view>
					<view class="info">
						<view class="look_num">
							{{item.look_num}}人看过
						</view>
						<view class="data">
							{{item.data}}
						</view>
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
				newsList:[
					{
						title:"重庆市肿瘤医院1期临床试验研重庆市肿瘤医院1期临床试验研",
						dis:"新药临床试验的最终目的是在于寻求有效且安全新药临床试验的最终目的是在于寻求有效且安全",
						look_num:"785",
						data:'2019-09-11'
					},
					{
						title:"重庆市肿瘤医院1期临床试验研重庆市肿瘤医院1期临床试验研",
						dis:"新药临床试验的最终目的是在于寻求有效且安全新药临床试验的最终目的是在于寻求有效且安全",
						look_num:"785",
						data:'2019-09-11'
					},
					{
						title:"重庆市肿瘤医院1期临床试验研重庆市肿瘤医院1期临床试验研",
						dis:"新药临床试验的最终目的是在于寻求有效且安全新药临床试验的最终目的是在于寻求有效且安全",
						look_num:"785",
						data:'2019-09-11'
					},
					{
						title:"重庆市肿瘤医院1期临床试验研重庆市肿瘤医院1期临床试验研",
						dis:"新药临床试验的最终目的是在于寻求有效且安全新药临床试验的最终目的是在于寻求有效且安全",
						look_num:"785",
						data:'2019-09-11'
					},
				]
			};
		},
		
		methods: {
			
			
	
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
					height: 178rpx;
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
						display: flex;
						width: 100%;
						justify-content: space-between;
						font-size:24rpx;
						color:rgba(155,155,155,1);
						line-height:24px;
					}
				}
			}
		}
	}
</style>
