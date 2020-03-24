<template>
	<view class="container">
		<cu-custom :isBack="true" bgColor="bg-white">
		  <block slot="backText">返回</block>
		  <block slot="content">药牛牛</block>
		</cu-custom>
		<view class="treaty">
			条约内容
		</view>
	</view>
	
</template>

<script>
	
</script>

<style scoped lang="scss">
	.container{
		min-height: 100vh;
		background-color: white;
	}
</style>
