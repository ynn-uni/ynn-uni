<template>
	<view class="rec-review">
		<image v-if="status==1" src="../../static/icons/review.png" mode=""></image>
		<image v-if="status==2" src="../../static/icons/check-circle.png" mode=""></image>
		<image v-if="status==3" src="../../static/icons/close.png" mode=""></image>
		<view class="text" v-if="status==1">
			资料提交成功（正在审核）
		</view>
		<view class="text" v-if="status==2||status==3">
			资料提交成功
		</view>
		<view class="text" v-if="status==3">
			您的条件不符合
		</view>
		<view class="text" v-if="status==1||status==2">
			工作人员会在2个工作日内电话联系您！
		</view>
		<view class="thank">
			感谢您对临床科研的支持与贡献！
		</view>
		<button @click="back">返回</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
					status:1
				
			}
		},
		onLoad(option) {
			console.log(option)
			this.status=option.status;
		},
		methods: {
			back(){
				uni.navigateBack({
					delta:1
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.rec-review{
		display: flex;
		flex-direction: column;
		align-items: center;
		position: fixed;
		top: 0;
		bottom: 0;
		right: 0;
		left: 0;
		font-size:32rpx;
		color:rgba(74,74,74,1);
		background-color: #fff;
		image{
			width: 172rpx;
			height: 172rpx;
			margin-top: 116rpx;
			margin-bottom: 74rpx;
		}
		.text{
			line-height: 48rpx;
		}
		.thank{
			margin-top: 70rpx;
		}
		button{
			color: #fff;
			width:280rpx;
			line-height:100rpx;
			background:rgba(59,205,174,1);
			border-radius:50rpx;
			margin-top: 166rpx;
			font-size: 28rpx;
		}
	}
</style>
