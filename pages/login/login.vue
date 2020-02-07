<template>
	<view class="login" v-if="!isregist">
		<view class="content">
			<image src="../../static/images/login_logo.gif" mode=""></image>
			<text>重庆市肿瘤医院I期临床试验中心</text>
			<button @click="login" v-if="a" open-type="getUserInfo"
			bindgetuserinfo="bindGetUserInfo">微信授权</button>
			<button v-if="!a" class="animation-slide-right" data-class="slide-right" open-type="getPhoneNumber" @getphonenumber="getPhoneNumber">电话号授权</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				a:true,
				isregist:true,
			}
		},
		onLoad() {
			var that=this;
			uni.login({
			     success(res){
				 console.log(res.code);
				 //此处添加向后台请求验证用户是否注册同时获取sessionkey
				 if(that.isregist){
				 	uni.switchTab({
				 		url:'/pages/home/home'
				 	})
				 }
				 
			 }
		   })
		},
		methods: {
			login(){
				var that=this;
				uni.getSetting({
					 success(res) {
						 console.log(res)
					   if (res.authSetting['scope.userInfo']) {
						console.log("scope.userInfo",res)
						that.a=false
						 // 已经授权，可以直接调用 getUserInfo 获取头像昵称
						
						 
					   }else{
						   
						   console.log('没授权')
						   // resolve('DialogModal1')
						  
						   // that.showModal()
					   }
					 }
				   })
				
			},
			getPhoneNumber(e){
				console.log(e)
				//此处向后台发送sessionKey、iv、encryptedData让后台获取用户手机号的代码
				uni.switchTab({
					url:'/pages/home/home'
				})
				// this.iv=e.detail.iv;
				// this.encryptedData=e.detail.encryptedData;
				// let detail={};
				// detail.msg="确认手机授权";
				// detail.iv=this.iv;
				// detail.encryptedData=this.encryptedData
				// console.log(detail)
				// this.$emit("ListenChild",detail)
			},
		}
	}
</script>

<style scoped lang="scss">
.login{
	background-color: #fff;
	display: flex;
	justify-content: center;
	align-items: center;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	.content{
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		image{
			width: 400rpx;
			height: 400rpx;
		}
		text{
			font-size:36rpx;
			font-family:PingFangSC-Regular,PingFang SC;
			font-weight:400;
			color:rgba(0,0,0,1);
			line-height:50rpx;
		}
		button{
			margin-top: 50rpx;
			background-color: #3ACF71;
			color: #333333;
		}
	}
}
</style>
