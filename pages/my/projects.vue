<template>
	<view class="project bg-white">
		<status-pannel :status-map="statusMap" @change="handleStatusChange" />
		<view class="project-list cu-list menu">
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
					<status-tag v-if="item.status === 0" type="warning" label="进行" />
					<status-tag v-if="item.status === 1" type="success" label="完成" />
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
						icon: 'project-all',
						label: '全部项目',
						status: null
					},
					{
						icon: 'project-processing',
						label: '进行项目',
						status: 0
					},
					{
						icon: 'project-finish',
						label: '已完成',
						status: 1
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
			this.getProjectList()
		},
		methods: {
			getProjectList() {
				this.list = [
					{
						title: '琥珀酸曲格叻玎片（空腹）志愿者',
						type: '「临床试验」',
						status: 1
					},
					{
						title: '琥珀酸曲格叻玎片（空腹）志愿者',
						type: '「临床试验」',
						status: 0
					},
					{
						title: '琥珀酸曲格叻玎片（空腹）志愿者',
						type: '「临床试验」',
						status: 0
					},
					{
						title: '琥珀酸曲格叻玎片（空腹）志愿者',
						type: '「临床试验」',
						status: 1
					},
					{
						title: '琥珀酸曲格叻玎片（空腹）志愿者',
						type: '「临床试验」',
						status: 1
					},
					{
						title: '琥珀酸曲格叻玎片（空腹）志愿者',
						type: '「临床试验」',
						status: 1
					},
					{
						title: '琥珀酸曲格叻玎片（空腹）志愿者',
						type: '「临床试验」',
						status: 1
					}
				]
			},
			handleStatusChange(evt) {
				const curStatus = this.activeStatus
				this.activeStatus = evt
			}
		}
	}
</script>

<style lang="scss" scoped>
	.project {
		min-height: 100vh;
		.project-list .action {
			padding-right: 30rpx;
		}
	}
</style>
