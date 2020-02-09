<template>
	<view class="message-detail cu-chat">
		<view class="cu-item"
			v-for="(item, index) in messageList" :key="index"
		>
			<view class="cu-avatar round" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big143004.jpg);"></view>
			<view class="main">
				<view class="content shadow">
					<text>{{ item.content }}</text>
				</view>
			</view>
			<view class="date ">{{ item.time }}</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id: null,
				messageList: []
			}
		},
		onLoad(option) {
			this.id = option.id
			this.getMessage()
		},
		methods: {
			getMessage() {
				if (!this.id) {
					return
				}
				this.messageList = Array(4).fill(1).map((i, idx) => {
					return {
						id: 1,
						title: '琥珀酸曲格叻玎片（空腹）志愿者',
						avatar: '',
						content: '请你于2019年10月14日到肿瘤医院回院进行体检, 到肿瘤医院回院进体检',
						time: '2018-3-23 13:23'
					}
				})
			}
		}
	}
</script>

<style>
	.message-detail {
		min-height: 100vh;
	}
</style>
