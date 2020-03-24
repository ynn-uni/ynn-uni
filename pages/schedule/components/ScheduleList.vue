<template>
	<view class="schedule-list bg-white">
		<view class="schedule-title padding-lr">{{ formatSelectedDate }}</view>

		<uni-swipe-action>
			<uni-swipe-action-item
				v-for="(item, index) in list"
				:key="index"
				:options="options"
				@click="handleAction($event, index)"
			>
				<view class="schedule-item solid-bottom">
					<view class="lg text-yellow cuIcon-favorfill padding-right-sm"></view>
					<view class="flex-sub">{{ item.content }}</view>
					<view class="schedule-time">{{ item.time }}</view>
				</view>
			</uni-swipe-action-item>
		</uni-swipe-action>
	</view>
</template>

<script>
	export default {
		name: 'SchedueList',
		props: {
			date: {
				type: String,
				default: ''
			}
		},
		data() {
			return {
				list: [],
				options: [
					{
						text: '编辑',
						style: {
							backgroundColor: '#3bcdae'
						}
					},
					{
						text: '删除',
						style: {
							backgroundColor: '#ffb3bc'
						}
					}
				]
			}
		},
		computed: {
			formatSelectedDate() {
				const [year, month, day] = this.date.split('-')
				return `${year}年${month}月${day}日`
			}
		},
		mounted() {
			this.getSchedule()
		},
		methods: {
			handleAction(e, index) {
				const actionIndex = e.index
				if (actionIndex === 0) {
					this.handleEdit(index)
				} else {
					this.handleDel(index)
				}
			},
			handleEdit(index) {
				uni.showModal({
					title: '提示',
					content: '是否编辑'
				})
			},
			handleDel(index) {
				uni.showModal({
					title: '提示',
					content: '是否删除',
					success: res => {
						if (res.confirm) {
							// TODO 调用删除接口
							this.list.splice(index, 1)
						}
					}
				})
			},
			getSchedule(date) {
				this.list = Array(9)
					.fill(1)
					.map((i, idx) => {
						return {
							id: idx + 1,
							content: '您该吃药了（请参照医生建议合理吃药）',
							time: `8:2${idx}`
						}
					})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.schedule-list {
		padding-bottom: 90rpx;

		.schedule-title {
			line-height: 3em;
			font-weight: 500;
		}
		.schedule-item {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 20rpx 30rpx;
			width: 100%;
		}
		.schedule-time {
			font-size: 40rpx;
			color: $uni-color-primary;
		}
	}
</style>
