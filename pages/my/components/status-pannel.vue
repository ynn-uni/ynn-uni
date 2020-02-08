<template>
	<view class="status-pannel flex justify-between">
		<view
			v-for="(item, index) in statusMap" :key="index"
			class="status-pannel-item flex flex-direction text-center"
			@click="handleClick(item.status)"
		>
			<image :src="`../../../static/icons/${ item.icon }.png`"></image>
			<text class="text-white">{{ item.label }}</text>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'StatusPannel',
		props: {
			statusMap: {
				type: Array,
				required: true,
				default: () => []
			}
		},
		methods: {
			handleClick(status) {
				this.$emit('change', status)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.status-pannel {
		background: #3bcdae;
		margin-left: 30rpx;
		margin-right: 30rpx;
		margin-bottom: 20rpx;
		padding: 24rpx 60rpx;
		box-shadow: 0px 4px 6px 0px #d8fff7;
		border-radius: 10px;
		.status-pannel-item {
			image {
				width: 130rpx;
				height: 130rpx;
			}
			text {
				font-weight: 500;
			}
		}
		.status-pannel-item:hover {
			cursor: pointer;
		}
	}
</style>
