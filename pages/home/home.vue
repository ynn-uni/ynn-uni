<template>
	<view class="home">
		<Swiper></Swiper>
		<Recruit></Recruit>
		<News></News>
	</view>
</template>

<script>
	import Swiper from "./components/swiper"
	import Recruit from "./components/recruit"
	import News from "./components/news"
	export default {
		data() {
			return {
				
			}
		},
		components:{
			Swiper,
			Recruit,
			News
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.home{
		background-color: #fff;
	}
</style>
