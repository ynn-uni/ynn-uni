<template>
	<view class="schedule bg-white">
    <cu-custom :isBack="true" bgColor="bg-white">
      <block slot="backText">返回</block>
      <block slot="content">日程管理</block>
    </cu-custom>
		<uni-calendar 
		    :insert="true"
			:showMonth="false"
			:selected="selectedList"
		    @change="handleChange"
		/>
		<view>
			<view class="schedule-date padding bg-gray">{{ formatSelectedDate }}</view>
			<view class="schedule-list padding-lr bg-white">
				<view
					class="schedule-item flex justify-between align-center solid-bottom padding-tb-sm"
					v-for="(item, index) in scheduleList" :key="index"
				>
					<view class="lg text-yellow cuIcon-favorfill padding-right-sm"></view>
					<view class="flex-sub">{{ item.content }}</view>		
					<view class="schedule-time">{{ item.time }}</view>
				</view>
			</view>
		</view>
		<view class="schedule-add bg-white">
			<button class="cu-btn block margin-tb-sm round lg">点击添加</button>
		</view>
	</view>
</template>

<script>
	import uniCalendar from '@/components/uni-calendar/uni-calendar.vue'
	export default {
		components: {
			uniCalendar
		},
		data() {
			return {
				selectedList: [{
					date: '2020-03-10',
					info: '已上传',
				}],
				selectedDay: (new Date()).toISOString().split('T')[0],
				scheduleList: []
			}
		},
		computed: {
			formatSelectedDate() {
				const [year, month, day] = this.selectedDay.split('-')
				return `${year}年${month}月${day}日`
			}
		},
		mounted() {
			this.scheduleList=this.getSchedule()
		},
		methods: {
			handleChange(evt) {
				this.selectedDay = evt.fulldate
			},
			getSchedule(date) {
				return [{
					id: 1,
					content: '您该吃药了（请参照医生建议合理吃药）',
					time: '8:20'
				}, {
					id: 2,
					content: '您该吃药了（请参照医生建议合理吃药）',
					time: '8:20'
				}, {
					id: 2,
					content: '您该吃药了（请参照医生建议合理吃药）',
					time: '8:20'
				}, {
					id: 2,
					content: '您该吃药了（请参照医生建议合理吃药）',
					time: '8:20'
				}, {
					id: 2,
					content: '您该吃药了（请参照医生建议合理吃药）',
					time: '8:20'
				}, {
					id: 4,
					content: '您该上传今日症状',
					time: '8:20'
				}]
			}
		}
	}
</script>

<style lang="scss" scoped>
	.schedule {
		min-height: 100vh;
		.schedule-list {
			padding-bottom: 90rpx;
			.schedule-time {
				font-size: 40rpx;
				color: $uni-color-primary;
			}	
		}

		.schedule-add {
			position: fixed;
			left: 0;
			bottom: 0;
			padding: 30rpx 50rpx;
			width: 100%;
			
			.cu-btn {
				background: $uni-color-primary;
				color: #fff;
			}
		}
	}
</style>
