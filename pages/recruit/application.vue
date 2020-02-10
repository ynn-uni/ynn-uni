<template>
	<view class="application">
		<form >
			<view class="form">
				<view class="title">
					请认真填写下列内容
					<text>（信息内容我们会为你保密）</text>
				</view>
				<view class="formgroup">
					<view class="">
						1.患者的姓名：
					</view>
					<input placeholder="请输入患者的姓名" name="input"></input>
				</view>
				<view class="formgroup">
					<view class="">
						2.患者的电话：
					</view>
					<input placeholder="请输入患者的电话" name="input"></input>
				</view>
				<view class="formgroup">
					<view class="">
						3.患者的出生日期：
					</view>
					<input placeholder="请输入患者的出生日期" name="input"></input>
				</view>
				<view class="formgroup">
					<view class="">
						4.患者的性别：
					</view>
					<radio-group class="block" @change="RadioChange">
						<radio class=' radio ra' :class="radio=='C'?'checked':''" :checked="radio=='C'?true:false" value="C"></radio>男
						<radio class=' radio ra' :class="radio=='D'?'checked':''" :checked="radio=='D'?true:false" value="D"></radio>女
					</radio-group>
				</view>
				<view class="formgroup">
					<view class="">
						5.患者的疾病史：
					</view>
					<textarea value="" placeholder="请输入患者的疾病史" />
					<!-- <input placeholder="请输入患者的疾病史" name="input"></input> -->
				</view>
				
			</view>
			<view class="note text-center margin-top-xs">
				注：请携带相关资料，比如病例、检测报告等资料
			</view>
			<view class="treaty">
				<radio-group class="block" @change="RadioChange1">
					<radio class=' radio black tr-re' :class="radio1=='C'?'checked':''" :checked="radio1=='C'?true:false" value="C"></radio>
					<text @click="treaty">我已阅读，并同意接受相关条约</text>
				</radio-group>
				
			</view>
			<view class="btn">
				<button > 报名</button>
			</view>
			<view class="cancel text-center" @tab="cancal">
				取消
			</view>
		</form>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				radio:null,
				radio1:null
				
			}
		},
		
		methods: {
			RadioChange(e) {
				this.radio = e.detail.value
			},
			RadioChange1(e) {
				this.radio1 = e.detail.value
			},
			treaty(){
				uni.navigateTo({
					url:"/pages/recruit/treaty"
				})
			},
			cancal(){
				// uni.navigateBack()
			}
		}
	}
</script>

<style scoped lang="scss">
	.application{
		padding: 30rpx;
		background:linear-gradient(150deg,rgba(61,223,174,1) 0%,rgba(54,174,173,1) 100%);
		.form{
			width: 690rpx;
			// height: 200rpx;
			border-radius: 10rpx;
			background-color: #fff;
			padding: 20rpx 30rpx;
			
			.title{
				font-size:28rpx;
				color:rgba(74,74,74,1);
				text{
					color: #b8b8b8;
				}
			}
			.formgroup{
				margin-top: 10rpx;
				input,textarea{
					margin-top: 10rpx;
					border: 2rpx solid rgba(151,151,151,1);
					height: 72rpx;
					font-size:28rpx;
					color:rgba(155,155,155,1);
					padding-left: 20rpx;
				}
				textarea{
					width: 100%;
					height: 200rpx;
				}
				.ra{
					margin:10rpx 10rpx;
					
				}
			}
			
		}
		.note{
			font-size:28rpx;
			color:rgba(255,255,255,1);
			margin-top: 10rpx;
		}
		.treaty{
			display: flex;
			margin-left: 30rpx;
			margin-top: 52rpx;
			.tr-re{
				margin: 10rpx;
			}
			text{
				text-decoration: underline;
			}
		}
		.btn{
			margin-top: 50rpx;
			button{
				width: 200rpx;
				line-height: 90rpx;
				color: #1f9996;
				font-size: 28rpx;
			}
		}
		.cancel{
			margin-top: 10rpx;
			color: #fff;
			font-size: 28rpx;
		}
		
	}
</style>
