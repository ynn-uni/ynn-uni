<template>
	<view class="pannel pannel-shadow grid col-3">
		<view v-for="(item, index) in btnList" :key="index">
			<navigator class="pannel-button flex flex-direction text-center">
				<image :src="'../../../static/icons/' + item.icon + '.png'"></image>
				<text class="text-xs">{{ item.label }}</text>
			</navigator>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'PersonBtnPannel',
		data() {
			return {
				btnList:[
					{
						path: '',
						icon: 'my-list',
						label: '项目管理'
					}, {
						path: '',
						icon: 'my-apply',
						label: '试验申请'
					}, {
						path: '',
						icon: 'my-link',
						label: '家属绑定'
					}, {
						path: '',
						icon: 'my-about',
						label: '关于我们'
					}, {
						path: '',
						icon: 'my-contact',
						label: '关于我们'
					}, {
						path: '',
						icon: 'my-setting',
						label: '设置'
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
	}
	.pannel-button {
		width: 100rpx;
		height: 100rpx;
		margin: auto;
		margin-bottom: 30rpx;
		& image {
			width: 44rpx;
			height: 44rpx;
			margin: auto;
		}
	}
</style>
