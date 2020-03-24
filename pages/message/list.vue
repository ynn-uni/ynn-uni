<template>
	<view class="message-list bg-white">
    <cu-custom :isBack="true" bgColor="bg-white">
      <block slot="backText">返回</block>
      <block slot="content">我的消息</block>
    </cu-custom>
		<uni-swipe-action>
			<uni-swipe-action-item
				v-for="(item, index) in messageList"
				:key="index"
				:options="options"
				@click="handleDel($event, index)"
			>
				<view class="cu-list menu-avatar">
					<view class="cu-item" @click="handleClick(item.id)">
						<image v-if="item.status" class="cu-avatar round" src="../../static/icons/close.png" />
						<image v-else class="cu-avatar round" src="../../static/icons/check-circle.png" />

						<view class="content padding-tb-sm">
							<view class="text-cut">{{ item.title }}</view>
							<view class="text-gray text-sm flex">
								<view class="text-cut">{{ item.content }}</view>
							</view>
						</view>

						<view class="action text-right">
							<view class="text-grey text-sm">{{ item.time.split(' ')[1] }}</view>
							<view class="text-grey text-sm margin-top-xs">{{ item.time.split(' ')[0] }}</view>
						</view>
					</view>
				</view>
			</uni-swipe-action-item>
		</uni-swipe-action>
	</view>
</template>

<script>
	import uniSwipeAction from '@/components/uni-swipe-action/uni-swipe-action.vue'
	import uniSwipeActionItem from '@/components/uni-swipe-action-item/uni-swipe-action-item.vue'
	export default {
		name: 'MyMessage',
		components: {
			uniSwipeAction,
			uniSwipeActionItem
		},
		data() {
			return {
				options: [
					{
						text: '删除',
						style: {
							backgroundColor: '#ffb3bc'
						}
					}
				],
				messageList: Array(10)
					.fill(1)
					.map((i, idx) => {
						return {
							id: idx + 1,
							title: '琥珀酸曲格叻玎片（空腹）志愿者',
							content: '琥珀酸曲格叻玎片（空腹）志愿者',
							time: `2019-10-14 10:${idx > 9 ? idx : '0' + idx}`,
							status: idx % 2
						}
					})
			}
		},
		methods: {
			handleClick(e) {
				uni.navigateTo({
					url: `/pages/message/detail?id=${e.id}`
				})
			},
			handleDel(e, index) {
				uni.showModal({
					title: '提示',
					content: '是否删除',
					success: res => {
						if (res.confirm) {
							// TODO 调用删除接口
							this.messageList.splice(index, 1)
						}
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	.message-list {
		min-height: 100vh;
		.cu-list.menu-avatar {
			width: 100%;
			.cu-item .cu-avatar {
				background: #fff;
			}
			.cu-item .content {
				left: 120rpx;
			}
			.cu-item .action {
				width: 140rpx;
			}
		}
	}
</style>
