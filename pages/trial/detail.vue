<template>
  <view class="container bg-white">
    <cu-custom :isBack="true">
    	<block slot="backText">返回</block>
    	<block slot="content">申请详情</block>
    </cu-custom>
    <view class="trail-detail">
      <view class="detail-info flex">
        <image class="detail-cover" src="../../static/images/home_new.png" />
        <view>
          <view class="detail-title">{{ trialDetail.project_info.title }}</view>
          <view class="detail-time text-grey">申请时间：{{ trialDetail.created_at }}</view>
          <view class="detail-status">{{trialDetail.status==0?'待院内查看':'已通过'}}</view>
        </view>
      </view>
      <view class="detail-timeline">
        <view class="cu-timeline">
          <view class="cu-item" v-for="(item, index) in trialDetail.examine" :key="index">
           <view >
             <view class="timeline-title text-color">{{ item.title }}</view>
             <view class="timeline-info text-grey">{{ item.describe }}</view>
             <view class="timeline-status" :class="classNameList[item.status]" v-if="index>0&&trialDetail.examine[index-1].status==1">
             「{{ item.status | statusFilter}}」
             </view>
             <view class="timeline-status" :class="classNameList[item.status]" v-else-if="index==0">
             「{{ item.status | statusFilter}}」
             </view>
           </view>
           
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  import {getEnrollDetails} from '../../apis/index.js'
	export default {
		name: 'TrailDetail',
		data() {
			return {
				trialId: null,
				trialDetail: {},
				trialTimeline: [],
				classNameList: ['default', 'success', 'error']
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
				this.trialId = option.id
			},
			getTrialDetail() {
        let id=this.trialId
        getEnrollDetails({id}).then((res)=>{
          this.trialDetail=res.data
          this.trialDetail.created_at=this.trialDetail.created_at.split(' ')[0]
        })
			}
		}
	}
</script>

<style lang="scss" scoped>
  .container{
    min-height: 100vh;
  }
	.trail-detail {
		
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
