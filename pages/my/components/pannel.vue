<template>
	<view class="pannel pannel-shadow">
		<view class="cu-list menu">
			<view class="cu-item arrow" v-for="(item, index) in btnList" :key="index">
				<navigator class="content" hover-class="none" :url="item.path" open-type="redirect">
					<image class="pannel-icon" :src="'../../../static/icons/' + item.icon + '.png'" />
					<text>{{ item.label }}</text>
				</navigator>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'PersonBtnPannel',
		data() {
			return {
				btnList: [
					{
						path: '/pages/trial/apply',
						icon: 'my-apply',
						label: '试验申请'
					},
					{
						path: '/pages/my/about',
						icon: 'my-about',
						label: '关于我们'
					},
					{
						path: '/pages/my/contact',
						icon: 'my-contact',
						label: '联系我们'
					}
				]
			}
		}
	}
</script>

<style lang="scss" scoped>
	.pannel {
		margin-top: 20rpx;
		padding-top: 20rpx;
		overflow: hidden;
		.cu-item .content .pannel-icon {
			width: 40rpx;
			height: 40rpx;
			margin-right: 40rpx;
			vertical-align: -8rpx;
		}
	}
</style>
