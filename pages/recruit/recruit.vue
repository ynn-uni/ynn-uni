<template>
	<view class="recruit">
		<view class="list">
			<view class="item" v-for="(item,index) in list" :key="index" @click="handelRec(item.id)">
				<image class="my-bg" src="../../static/images/home_li.png" mode=""></image>
				<image class="my-ri" src="../../static/images/home_ri.png" mode=""></image>
				<view class="content">
					<view class="title">
					{{item.title}}
						<view class="date">
							<image src="../../static/icons/recruit_time.png" mode=""></image>
							{{item.startdate}}～{{item.enddate}}
						</view>
					</view>
					<view class="info">
						<view class="info_item">
							<view class="ta">
								年龄
							</view>
							<view class="td">
								{{item.age}}岁
							</view>
						</view>
						<view class="info_item">
							<view class="ta">
								性别
							</view>
							<view class="td">
								{{item.gender}}
							</view>
						</view>
						<view class="info_item">
							<view class="ta">
								其他
							</view>
							<view class="td">
								{{item.other}}
							</view>
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
					list:[]
				
			}
		},
		onLoad() {
			
			for(var i=0;i<10;i++){
				this.list.push(
				{
					id:i,
					title:'「临床招募」琥珀酸曲格叻玎片（空腹）志愿者',
					startdate:'2019.9.11',
					enddate:'2019.9.22',
					age:'18-40',
					gender:'男性',
					other:'无',
				})
			}
			console.log(this.list)
		},
		methods: {
			handelRec(id){
				uni.navigateTo({
					url:"/pages/recruit/rec_detail?id="+id
				})
			}
		}
	}
</script>

<style scoped lang="scss">
.recruit{
	// background-color: #fff;
	padding: 0 30rpx;
	.list{
		// display: flex;
		padding-top: 6rpx;
		// justify-content: space-between;
		.item{
			position: relative;
			.my-bg{
				width: 690rpx;
				height: 320rpx;
			}
			.my-ri{
				width: 186rpx;
				height: 186rpx;
				position: absolute;
				right: 40rpx;
				bottom: 26rpx;
			}
			.content{
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
				.title{
					width:626rpx;
					font-size:30rpx;
					line-height:40rpx;
					
					.date{
						margin-top: 10rpx;
						display: flex;
						align-items: center;
						font-size: 26rpx;
						line-height: 26rpx;
						image{
							width: 22rpx;
							height: 22rpx;
							margin-left: 16rpx;
							margin-right: 10rpx;
						}
					}
				}
				.info{
					display: flex;
					margin-left: 4rpx;
					font-size: 22rpx;
					line-height: 28rpx;
					margin-bottom: 10px;
					.info_item{
						margin-right: 60rpx;
						text-align: center;
						.ta{
							margin-bottom: 6rpx;
						}
					}
				}
			}
		}
	}
}
</style>
