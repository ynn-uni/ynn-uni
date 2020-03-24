<template>
	<uni-popup ref="popup" type="center">
		<view class="popup-content bg-white">
			<view class="popup-picker">
				<picker mode="date" :value="date" @change="bindDateChange">
					<view class="popup-date">
						{{ displayDate.year }}
						<text>年</text>
						{{ displayDate.month }}
						<text>月</text>
						{{ displayDate.day }}
						<text>日</text>
					</view>
				</picker>
				<picker mode="time" :value="time" @change="bindDateChange">
					<view class="popup-time">
						{{ displayTime.hour }}
						<text>时</text>
						{{ displayTime.minute }}
						<text>分</text>
					</view>
				</picker>
			</view>
		</view>
		<view class="popup-input">
			<textarea placeholder="这是一个可以自动聚焦的textarea" auto-focus />
		</view>
	</uni-popup>
</template>

<script>
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	export default {
		name: 'SchedulePopup',
		components: {
			uniPopup
		},
		data() {
			return {
				date: null,
				time: null
			}
		},
		computed: {
			now() {
				const date = new Date()
				let year = date.getFullYear()
				let month = date.getMonth() + 1
				let day = date.getDate()
				let hour = date.getHours()
				let minute = date.getMinutes()
				return {
					year,
					month: month > 9 ? month : `0${month}`,
					day: day > 9 ? day : `0${day}`,
					hour: hour > 9 ? hour : `0${hour}`,
					minute: minute > 9 ? minute : `0${minute}`
				}
			},
			curDate() {
				const { year, month, day } = this.now
				return `${year}-${month}-${day}`
			},
			curTime() {
				const { hour, minute } = this.now
				return `${hour}:${minute}`
			},
			displayDate() {
				if (this.date) return
				const [year, month, day] = this.date.split('-')
				return { year, month, day }
			},
			displayTime() {
				if (this.time) return
				const [hour, minute] = this.time.split(':')
				return { hour, minute }
			}
		},
		created() {
			this.date = this.curDate
			this.time = this.curTime
		},
		methods: {
			open() {
				this.$refs.popup.open()
			},
			bindDateChange() {}
		}
	}
</script>

<style lang="scss" scoped>
	.popup-content {
		width: 80vw;
		border-radius: 20rpx;
		height: 250px;
		.popup-picker {
			display: flex;
			justify-content: space-between;
			padding: 50rpx;
			font-size: 32rpx;
			color: $uni-color-primary;

			.popup-date text,
			.popup-time text {
				font-size: 24rpx;
				color: $uni-text-color;
				padding: 0 10rpx;
			}
		}
	}
</style>
