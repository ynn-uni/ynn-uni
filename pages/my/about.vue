<template>
	<view class="about">
		<view
			class="info text-lg"
		>重庆市肿瘤医院/重庆大学附属肿瘤医院药物临床试验机构于2008年通过CFDA资格认定，2014年、2017年先后两次通过机构资格复核认定，发展至今已有10年历史。机构于2017年开始筹建I期临床试验中心，以临床药代动力学、药物制剂生物利用度及生物等效性评价研究、药物的体内外代谢研究等为主要方向，力求成为一个集医疗教学科研于一体的综合性研究中心。</view>
	</view>
</template>

<style lang="scss" scoped>
	.about {
		// TODO 更换背景图片
		min-height: 100vh;
		background: linear-gradient(
			150deg,
			rgba(61, 223, 174, 1) 0%,
			rgba(54, 174, 173, 1) 100%
		);
		background-size: cover;
		padding: 30rpx 80rpx 0;
		.info {
			padding: 30rpx 60rpx;
			line-height: 1.8em;
			background: #fff;
			border-radius: 60rpx;
		}
	}
</style>
