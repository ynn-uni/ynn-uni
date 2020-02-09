<template>
	<view class="link bg-white">
		<view class="text-center">
			<image class="link-bg" src="../../static/images/link_bg.png"></image>
		</view>
		<view class="link-action">
			<text>与患者关系：</text>
			<view class="margin-top-lg">
				<radio-group @change="radioChange" class="flex justify-between">
					<label v-for="(item, index) in relations" :key="item.value">
						<radio :value="item.value" :checked="index === current" color="#3bcdae" />
						<text class="margin-left-xs">{{ item.label }}</text>
					</label>
				</radio-group>
			</view>
			<view class="text-center">
				<button class="cu-btn round lg">点击绑定</button>
				<navigator url="pages/my/my" open-type="switchTab">返回</navigator>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'LinkIdentification',
		data() {
			return {
				relations: [
					{
						value: 1,
						label: '父母'
					}, {
						value: 2,
						label: '配偶'
					}, {
						value: 3,
						label: '子女'
					}, {
						value: 4,
						label: '其他'
					}
				]
			}
		},
		methods: {
			radioChange() {
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	.link {
		min-height: 100vh;
		.link-bg {
			width: 600rpx; // 476rpx;
			height: 493rpx; // 392rpx;
			margin-top: 100rpx;
		}
		.link-action {
			padding: 60rpx 80rpx;
			color: #9b9b9b;
			radio {
				transform: scale(0.7);
			}
			.cu-btn {
				color: #fff;
				background-color: #3bcdae;
				margin-top: 100rpx;
				margin-bottom: 100rpx;
			}
		}
	}
</style>
