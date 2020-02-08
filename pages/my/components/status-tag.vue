<template>
	<text :class="['status-tag', type]">{{ label }}</text>
</template>

<script>
	export default {
		name: 'StatusTag',
		props: {
			type: {
				type: String,
				validator(value) {
					return ['success', 'warning', 'danger'].indexOf(value) !== -1
				},
				default: 'success'
			},
			label: {
				type: String,
				default: '完成'
			}
		}
	}
</script>

<style lang="scss" scoped>
	.status-tag {
		position: relative;
		display: inline-block;
		color: #fff;
		width: 1em;
		padding: 6rpx 15rpx;
		margin-top: -14rpx;
		font-size: 20rpx;
		line-height: 1.2em;
		&::after {
			content: ' ';
			position: absolute;
			bottom: -10rpx;
			left: 0;
			display: block;
			width: 0;
			height: 0;
			border-width: 10rpx calc(1em + 5rpx);
			border-style: solid;
			z-index: -1;
		}
	}
	.status-tag.success {
		background-color: #39b54a;
		&::after {
			border-color: #39b54a #39b54a transparent;
		}
	}
	.status-tag.warning {
		background-color: #f5a623;
		&::after {
			border-color: #f5a623 #f5a623 transparent;
		}
	}
	.status-tag.danger {
		background-color: #da011c;
		&::after {
			border-color: #da011c #da011c transparent;
		}
	}
</style>
