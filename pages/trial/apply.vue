<template>
	<view class="apply bg-white">
    <cu-custom :isBack="true">
    	<block slot="backText">返回</block>
    	<block slot="content">试验申请</block>
    </cu-custom>
		<status-pannel :status-map="statusMap" @change="handleStatusChange" :activestatus="activeStatus"/>
		<view class="apply-list cu-list menu">
			<navigator
				class="cu-item"
				v-for="(item, index) in filterList"
				:key="index"
				:url="`/pages/trial/detail?id=${item.id}`"
			>
				<view class="content padding-tb-sm">
					<view>
						<text>{{ item.project_info.title }}</text>
					</view>
					<view>
						<text class="text-sm text-gray">申请时间：{{item.created_at}}</text>
					</view>
				</view>
				<view class="action">
					<status-tag v-if="item.status === 0" type="warning" label="待审核" />
					<status-tag v-if="item.status === 1" type="success" label="已通过" />
					<status-tag v-if="item.status === 2" type="danger" label="未通过" />
				</view>
			</navigator>
		</view>
	</view>
</template>

<script>
  import {getEnrollList} from '../../apis/index.js'
	import StatusPannel from './components/status-pannel'
	import StatusTag from './components/status-tag'
	export default {
		name: 'ApplyPage',
		components: { StatusPannel, StatusTag },
		data() {
			return {
				activeStatus: -1,
        size:50,
				statusMap: [
					{
						icon: 'project-all',
						label: '全部',
						status: -1
					},
          {
          	icon: 'apply-pending',
          	label: '待审核',
          	status: 0
          },
					{
						icon: 'apply-refuse',
						label: '已通过',
						status: 1
					},
					{
						icon: 'apply-pass',
						label: '未通过',
						status: 2
					}
				],
				list: []
			}
		},
		computed: {
			filterList() {
				const status = this.activeStatus
				if (status != -1) {
					return this.list.filter(item => item.status === status)
				}
				return this.list
			}
		},
		mounted() {
			// this.getApplyList()
		},
		methods: {
			getApplyList() {
        let size=this.size
        let status=this.activeStatus
        getEnrollList({size,status}).then((res)=>{
          let data=res.data.data
          this.list=[]
          data.forEach((val)=>{
            val.created_at=val.created_at.split(' ')[0]
            this.list.push(val)
          })
        })
			},
			handleStatusChange(evt) {
				const curStatus = this.activeStatus
				// if (curStatus === evt) {
				// 	this.activeStatus = -1
				// } else {
					this.activeStatus = evt
				// }
        this.getApplyList()
			}
		}
	}
</script>

<style lang="scss" scoped>
	.apply {
		min-height: 100vh;
		.apply-list .action {
			padding-right: 30rpx;
		}
	}
</style>
