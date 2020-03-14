<template>
	<view class="message-detail cu-chat">
		<view class="cu-item">
			<image
				class="cu-avatar round"
				src="https://ossweb-img.qq.com/images/lol/web201310/skin/big143004.jpg"
			/>
			<view class="main">
				<view class="date">{{ messageDetail.time }}</view>
				<view class="content shadow">
					<view>
						<view class="text-blod margin-bottom">{{ messageDetail.title}}</view>
						<text class="text-grey text-sm">{{ messageDetail.content }}</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id: null,
				messageDetail: {}
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
				this.messageDetail = {
					id: 1,
					title: '琥珀酸曲格叻玎片（空腹）志愿者',
					avatar: '',
					content:
						'请你于2019年10月14日到肿瘤医院回院进行体检, 到肿瘤医院回院进体检',
					time: '2018-3-23 13:23'
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.message-detail {
		min-height: 100vh;

		.cu-item > .main {
			max-width: calc(100% - 200rpx);
		}
	}
</style>
