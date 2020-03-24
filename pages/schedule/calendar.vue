<template>
	<view class="schedule bg-white">
		<cu-custom :isBack="true" bgcolor="bg-white">
			<block slot="backText">返回</block>
			<block slot="content">日程管理</block>
		</cu-custom>
		<uni-calendar :insert="true" :showMonth="false" :selected="selectedList" @change="handleChange" />
		<view>
			<view class="schedule-tip bg-gray">
				<view>
					<text class="text-yellow cuIcon-favorfill padding-right-sm" />日程
				</view>
			</view>
			<scheduleList :date="selectedDay" />
		</view>
		<view class="schedule-add">
			<button class="cu-btn margin-tb-sm cuIcon lg" @click="handleAdd">
				<text class="cuIcon-add" />
			</button>
		</view>
		<SchedulePopup ref="schedulePopup" />
	</view>
</template>

<script>
	import uniCalendar from '@/components/uni-calendar/uni-calendar.vue'
	import ScheduleList from './components/ScheduleList'
	import SchedulePopup from './components/SchedulePopup'
	export default {
		components: {
			uniCalendar,
			ScheduleList,
			SchedulePopup
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
			this.handleAdd()
		},
		computed: {
			formatSelectedDate() {
				const [year, month, day] = this.selectedDay.split('-')
				return `${year}年${month}月${day}日`
			}
		},
		mounted() {
			this.scheduleList = this.getSchedule()
		},
		methods: {
			init() {
				const date = new Date()
				this.selectedDay = date.toISOString().split('T')[0]
			},
			handleChange(evt) {
				this.selectedDay = evt.fulldate
			},
			handleAdd() {
				this.$refs.schedulePopup.open()
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
