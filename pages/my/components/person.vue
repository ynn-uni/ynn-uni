<template>
	<view class="person pannel-shadow">
		<view class="radius shadow">
			<view class="person-avatar round bg-white">
				<open-data class="bg-white" type="userAvatarUrl" />
			</view>
			<view class="person-name text-df text-center">
				<open-data type="userNickName" />
			</view>
		</view>
		<view class="person-action flex justify-around margin-top-lg">
			<navigator
				class="action-button text-center"
				:url="token?item.path:loginPath"
				hover-class="none"
				v-for="(item,index) in btnList"
				:key="index"
			>
				<view class="action-button text-center">
					<button class="cu-btn cuIcon lg">
						<image :src="'../../../static/icons/'+item.icon+'.png'" />
					</button>
					<view class="action-label text-sm">{{item.label}}</view>
				</view>
			</navigator>
		</view>
	</view>
</template>

<script>
	import { mapGetters } from 'vuex'
	export default {
		name: 'PersonPannel',
		data() {
			return {
				personRole: 'visitor',
				btnList: [
					{
						path: '/pages/archives/archives',
						icon: 'my-info',
						label: '健康档案'
					},
					{
						path: '/pages/message/list',
						icon: 'my-message',
						label: '我的消息'
					},
					{
						path: '/pages/schedule/calendar',
						icon: 'my-todo',
						label: '日程管理'
					}
				],
				loginPath: '/pages/login/login'
			}
		},
		computed: {
			...mapGetters(['token'])
		}
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
			transform: translateX(-50%) translateY(-50%);
			border: 15rpx solid rgba(2, 143, 103, 0.21);
			overflow: hidden;
			z-index: 10000;
		}
		.person-name {
			padding-top: 100rpx;
			font-weight: 500;
		}
		.project-title {
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
			border: 1px solid rgba(151, 151, 151, 1);
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
