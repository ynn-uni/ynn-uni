<template>
	<view class="message-list bg-white">
		<view class="cu-list menu">
			<view
				v-for="(item, index) in messageList" :key="index"
				class="cu-item" @click="handleClick(item.id)"
			>
				<view class="content padding-tb-sm">
					<view>{{ item.title }}</view>
					<view class="text-gray text-sm flex">
						<view class="text-cut">
							{{ item.content }}
						</view>
					</view>
				</view>
				<view class="action  text-right">
					<view class="text-grey text-sm">{{ item.time.split(' ')[1] }}</view>
					<view class="text-grey text-sm margin-top-xs"> {{ item.time.split(' ')[0] }}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'MyMessage',
		data() {
			return {
				messageList: Array(20).fill(1).map((i, idx) => {
					return {
						id: idx + 1,
						title: '琥珀酸曲格叻玎片（空腹）志愿者',
						content: '琥珀酸曲格叻玎片（空腹）志愿者',
						time: `2019-10-14 10:${idx > 9 ? idx : '0' + idx}`
					}
				})
			}
		},
		methods: {
			handleClick(id) {
				uni.navigateTo({
					url: `/pages/message/detail?id=${id}`,
				})
			}
		}
	}
</script>

<style lang="scss">
	.message-list {
		min-height: 100vh;
	}
</style>
