<template>
	<view class="apply bg-white">
		<status-pannel :status-map="statusMap" @change="handleStatusChange" />
		<view class="apply-list cu-list menu">
			<view class="cu-item" v-for="(item, index) in filterList" :key="index">
				<view class="content padding-tb-sm">
					<view>
						<text>{{ item.title }}</text>
					</view>
					<view>
						<text class="text-sm text-gray">{{ item.type }}</text>
					</view>
				</view>
				<view class="action">
					<status-tag v-if="item.status === 0" type="warning" label="待审核"/>
					<status-tag v-if="item.status === 1" type="success" label="已通过"/>
					<status-tag v-if="item.status === 2" type="danger" label="未通过"/>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import StatusPannel from './components/status-pannel'
	import StatusTag from './components/status-tag'
	export default {
		name: 'ApplyPage',
		components: { StatusPannel, StatusTag },
		data() {
			return {
				activeStatus: null,
				statusMap: [
					{
						icon: 'apply-pending',
						label: '待审核',
						status: 0
					}, {
						icon: 'apply-refuse',
						label: '已通过',
						status: 1
					}, {
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
				if (status != null) {
					return this.list.filter(item => item.status === status)
				}
				return this.list
			}
		},
		mounted() {
			this.getApplyList()
		},
		methods: {
			getApplyList() {
				this.list = [
					{
						title: '琥珀酸曲格叻玎片（空腹）志愿者',
						type: '「临床试验」',
						status: 1
					}, {
						title: '琥珀酸曲格叻玎片（空腹）志愿者',
						type: '「临床试验」',
						status: 0
					}, {
						title: '琥珀酸曲格叻玎片（空腹）志愿者',
						type: '「临床试验」',
						status: 2
					}, {
						title: '琥珀酸曲格叻玎片（空腹）志愿者',
						type: '「临床试验」',
						status: 1
					}, {
						title: '琥珀酸曲格叻玎片（空腹）志愿者',
						type: '「临床试验」',
						status: 1
					}, {
						title: '琥珀酸曲格叻玎片（空腹）志愿者',
						type: '「临床试验」',
						status: 1
					}, {
						title: '琥珀酸曲格叻玎片（空腹）志愿者',
						type: '「临床试验」',
						status: 1
					}
				]
			},
			handleStatusChange(evt) {
				const curStatus = this.activeStatus
				if (curStatus === evt) {
					this.activeStatus = null
				} else {
					this.activeStatus = evt
				}
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
