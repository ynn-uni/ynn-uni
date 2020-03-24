<template>
  <view class="container">
    <cu-custom >
      <block slot="content">
    	  <view class="text text-white">
    	  	我的
    	  </view>
    	</block>
    </cu-custom>
    <view class="my-page">
      <Person />
      <Record />
      <Pannel />
    </view>
  </view>
</template>

<script>
	import Person from './components/person.vue'
	import Record from './components/record.vue'
	import Pannel from './components/pannel.vue'

	export default {
		components: {
			Person,
			Record,
			Pannel
		},
		data() {
			return {}
		},
		methods: {}
	}
</script>

<style lang="scss">
  .container{
    min-height: 100vh;
    background: linear-gradient(
    	150deg,
    	rgba(61, 223, 174, 1) 0%,
    	rgba(54, 174, 173, 1) 100%
    );
  }
	.my-page {
    box-sizing: border-box;
		padding-left: 40rpx;
		padding-right: 40rpx;
		padding-top: 100rpx;
		padding-bottom: 100rpx;
    // 
    // height:calc(100vh - 100rpx);
	}
	.pannel-shadow {
		border-radius: 8px;
		background: #fff;
		box-shadow: 0px 2px 8px 0px #008c77;
	}
</style>
