<template>
	<view class="home">
     <button open-type="openSetting" bindopensetting="callback">打开设置页</button>
		<Meaasge></Meaasge>
		<Swiper></Swiper>
		
		<Recruit></Recruit>
		
		<News></News>
		
	</view>
</template>

<script>
	import Meaasge from "./components/message"
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
			News,
			Meaasge
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
    min-height: 100vh;
	}
</style>
