<template>
	<view class="trail-detail bg-white">
		<view class="detail-info flex">
			<image class="detail-cover" src="../../static/images/home_new.png" />
			<view>
				<view class="detail-title">{{ trialDetail.title }}</view>
				<view class="detail-time text-grey">申请时间：{{ trialDetail.date }}</view>
				<view class="detail-status">待院内查看</view>
			</view>
		</view>
		<view class="detail-timeline">
			<view class="cu-timeline">
				<view class="cu-item" v-for="(item, index) in trialTimeline" :key="index">
					<view class="timeline-title text-color">{{ item.title }}</view>
					<view class="timeline-info text-grey">{{ item.info }}</view>
					<view
						class="timeline-status"
						:class="classNameList[item.status]"
					>「{{ item.status | statusFilter}}」</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'TrailDetail',
		data() {
			return {
				trialId: null,
				trialDetail: {},
				trialTimeline: [],
				classNameList: ['error', 'success', 'default']
			}
		},
		filters: {
			statusFilter(val) {
				switch (val) {
					case 0:
						return '审核未通过'
					case 1:
						return '审核通过'
					default:
						return '待审核'
				}
			}
		},
		onLoad(option) {
			this.handleQuery(option)
		},
		mounted() {
			this.getTrialDetail()
		},
		methods: {
			handleQuery(option) {
				console.log(option)
				this.trialId = option.id
			},
			getTrialDetail() {
				const res = {
					detail: {
						title: '「临床招募」琥珀酸曲格叻玎片 （空腹）志愿者' + this.trialId,
						date: '2020/10/07'
					},
					timeline: [
						{
							status: 0,
							title: '电话审核',
							info:
								'主要审核申请人的真实信息/既往病史/病历信息等 申请人电话审查初步满足条件',
							time: '2020/10/07'
						},
						{
							status: 1,
							title: '院内审查',
							info: '主要根据临床试验需求，对志愿者进行体检',
							time: '2020/10/07'
						},
						{
							status: 2,
							title: '确认',
							info: '确认参加临床试验',
							time: '2020/10/07'
						}
					]
				}
				this.trialDetail = res.detail
				this.trialTimeline = res.timeline
			}
		}
	}
</script>

<style lang="scss" scoped>
	.trail-detail {
		min-height: 100vh;
		padding: 30rpx;

		.detail-cover {
			width: 320rpx;
			height: 180rpx;
			margin-right: 30rpx;
		}
		.detail-title {
			font-weight: 500;
		}
		.detail-time {
			margin: 10rpx 0;
		}
		.detail-status {
			display: inline-block;
			padding: 5rpx 20rpx;
			color: #fff;
			font-size: 24rpx;
			background: $uni-color-primary;
		}

		.detail-timeline {
			position: relative;
			margin-top: 60rpx;

			.timeline-title {
				margin-right: 8em;
			}
			.timeline-info {
				margin-top: 20rpx;
				font-size: 24rpx;
			}
			.timeline-status {
				position: absolute;
				top: 32rpx;
				right: 30rpx;
				&.default {
					color: $uni-text-color-grey;
				}
				&.success {
					color: $uni-color-primary;
				}
				&.error {
					color: $uni-color-error;
				}
			}
		}
	}

	.trail-detail::v-deep {
		.cu-timeline > .cu-item::before {
			top: 28rpx;
			color: $uni-color-primary;
		}
	}
</style>
