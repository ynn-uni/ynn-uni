<template>
	<view class="my-page">
		<Person />
		<Record />
		<Pannel />
	</view>
</template>

<script>
	import Person from './component/person.vue'
	import Record from './component/record.vue'
	import Pannel from './component/pannel.vue'
	
	export default {
		components: {
			Person,
			Record,
			Pannel
		},
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
.my-page {
	min-height: 100vh;
	padding-left: 40rpx;
	padding-right: 40rpx;
	padding-top: 100rpx;
	padding-bottom: 100rpx;
	background: linear-gradient(150deg,rgba(61,223,174,1) 0%,rgba(54,174,173,1) 100%);
}
.pannel-shadow {
	border-radius:8px;
	background: #fff;
	box-shadow: 0px 2px 8px 0px #008c77;
}
</style>