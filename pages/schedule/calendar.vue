<template>
	<view class="schedule bg-white">
		<uni-calendar :insert="true" :showMonth="false" :selected="selectedList" @change="handleChange" />
		<!-- :range="true"
			startDate="2020-03-10"
		endDate="2020-03-22"-->
		<view>
			<view class="schedule-tip bg-gray">
				<view>
					<text class="text-yellow cuIcon-favorfill padding-right-sm" />日程
				</view>
			</view>
			<scheduleList :date="selectedDay" />
		</view>
		<view class="schedule-add">
			<button class="cu-btn margin-tb-sm cuIcon lg">
				<text class="cuIcon-add"></text>
			</button>
		</view>
	</view>
</template>

<script>
	import uniCalendar from '@/components/uni-calendar/uni-calendar.vue'
	import scheduleList from './components/scheduleList'
	export default {
		components: {
			uniCalendar,
			scheduleList
		},
		data() {
			return {
				selectedList: [
					{
						date: '2020-03-10',
						info: '日程',
						data: [
							// 自定义数据
						]
					},
					{
						date: '2020-03-18',
						info: '日程',
						data: [
							// 自定义数据
						]
					}
				],
				selectedDay: null
			}
		},
		mounted() {
			this.init()
		},
		methods: {
			init() {
				const date = new Date()
				this.selectedDay = date.toISOString().split('T')[0]
			},
			handleChange(evt) {
				console.log(evt)
				this.selectedDay = evt.fullDate
			}
		}
	}
</script>

<style lang="scss" scoped>
	.schedule {
		min-height: 100vh;

		.schedule-tip {
			padding: 10rpx 0;
			padding-left: 10rpx;
			color: $uni-text-color-grey;
		}
	}
	.schedule-add {
		position: fixed;
		right: 0;
		bottom: 40rpx;
		padding: 30rpx 50rpx;

		.cu-btn {
			background: $uni-color-primary;
			color: #fff;
			font-size: 24px;
		}
	}
	.schedule::v-deep {
		.uni-calendar-item__weeks-box-circle {
			width: 0;
			height: 0;
			bottom: 17px;
			left: 2px;
			top: unset;
			right: unset;
			color: #f0ad4e;

			& {
				font-family: 'cuIcon';
				font-size: 20rpx;
				font-style: normal;
			}
			&::before {
				content: '\E64B';
			}
		}
		.uni-calendar-item--extra {
			margin-left: 1em;
		}
	}
</style>
