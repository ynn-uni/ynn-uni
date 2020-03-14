<template>
	<view class="person pannel-shadow">
		<view class="radius shadow">
			<view class="person-avatar round">
				<open-data type="userAvatarUrl" />
			</view>
			<view class="person-name text-df text-center">
				<open-data type="userNickName" />
			</view>
		</view>
		<view class="person-action flex justify-around margin-top-lg">
			<view class="action-button text-center">
				<button class="cu-btn cuIcon lg">
					<image src="../../../static/icons/my-info.png"></image>
				</button>
				<view class="action-label text-sm">健康档案</view>
			</view>
			<navigator class="action-button text-center" url="/pages/message/list">
				<button class="cu-btn cuIcon lg">
					<image src="../../../static/icons/my-message.png"></image>
				</button>
				<view class="action-label text-sm">我的消息</view>
			</navigator>
			<view class="action-button text-center">
				<button class="cu-btn cuIcon lg">
					<image src="../../../static/icons/my-todo.png"></image>
				</button>
				<view class="action-label text-sm">日程管理</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'PersonPannel',
		data() {
			return {
				personRole: 'visitor'
			}
		},
	}
</script>

<style lang="scss" scoped>
	.person {
		position: relative;
		.person-avatar {
			position: absolute;
			top: 0;
			left: 50%;
			width: 150rpx;
			height: 150rpx;
			transform: translateX(-50%) translateY(-50%);;
			border: 15rpx solid rgba(2,143,103,.21);
			overflow: hidden;
		}
		.person-name {
			padding-top: 100rpx;
			font-weight: 500;
		}
		.project-title  {
			line-height: 80rpx;
		}
		.project-role {
			color: #9b9b9b;
			margin-bottom: 30rpx;
			line-height: 40rpx;
		}
		.person-notice {
			line-height: 80rpx;
			margin-left: 40rpx;
			margin-right: 40rpx;
			border-radius: 40rpx;
			border: 1px solid rgba(151,151,151,1);
			.person-notice-time {
				display: inline-block;
				width: 82rpx;
				height: 82rpx;
				margin-left: -2rpx;
				margin-right: 20rpx;
				line-height: 80rpx;
				border-radius: 50%;
				background-color: #3bd0ae;
				box-shadow: 1px 0px 5px 0px #3bd0ae;
			}
		}
		.person-action {
			& .cu-btn {
				margin: auto;
				background-color: #c6ffee;
			}
			image {
				height: 40rpx;
				width: 40rpx;
			}
			.action-label {
				color: #9b9b9b;
				line-height: 2.5em;
			}
		}
	}
</style>
