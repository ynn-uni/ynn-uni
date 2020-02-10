<template>
	<view class="rec_detail">
		<view class="title text-center">
			{{data.title}}
		</view>
		<image class="cover" src="../../static/images/home_new.png" mode=""></image>
		<view class="time">
			报名时间：{{data.startDate}}~{{data.enddata}}
		</view>
		<view class="info">
			<view class="info_item">
				年龄：{{data.age}}
			</view>
			<view class="info_item">
				性别：{{data.gender}}
			</view>
			<view class="info_item">
				其他：{{data.other}}
			</view>
		</view>
		<view class="bref">
			<rich-text :nodes="data.bref"></rich-text>
		</view>
		
		<view class="btn_group">
			
			<button v-if="!isend" class="cu-btn" @tap="showModal">
				<view class="phone">
					<image src="../../static/icons/rec_phone.png" mode=""></image>
					资讯
				</view>
				
			</button>
			<button v-if="!isend" class="cu-btn" @click="handelApplication">
				<view class="phone rec">
					免费用药
				</view>
				
			</button>
			<button v-if="isend" class="cu-btn" >
				<view class="phone end_phone">
					<image src="../../static/icons/end_phone.png" mode=""></image>
					资讯
				</view>
				
			</button>
			<button v-if="isend" class="cu-btn">
				<view class="phone end_rec" >
					免费用药
				</view>
				
			</button>
			<!-- <button class="cu-btn phone">
				免费用药
			</button> -->
			
		</view>
		<view class="cu-modal" :class="modalName=='Image'?'show':''">
			<view class="cu-dialog">
				<view class="tel">
					<view class="">
						400-800-4268
					</view>
					
				</view>
				<view class="cu-bar bg-white">
					<view class="action flex-sub  cal" @tap="hideModal">取消</view>
					<view class="action flex-sub  call " @tap="call">确定</view>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isend:false,
				modalName:null,
					data:{
						title:'琥珀酸曲格叻玎片（空腹）志愿者',
						cover:'',
						startDate:'2019.9.11',
						enddata:'2019.9.16',
						age:'18-45',
						gender:'女性',
						other:'乳腺癌患者',
						bref:'<p>据统计，从2014年7月到现在，PD-1抗体药物已经在包括日本、美国、欧美、澳大利亚和中国香港在内的全球60多个地区上市，全球无数的瘤患者已经受益于这种抗癌新药。</p><p>目前，通过审批并上市的PD-1抑制剂主要有以下三个3个：</p><p>PD-1抗体Keytruda，由美国默沙东研制并通过临床上市；</p><p>PD-1抗体Opdivo，由美国百时美施贵宝研制并通过临床上市；</p><p>PD-L1抗体Tecentriq，由瑞士罗氏研制并通过临床上市。所以，目前上市的PD-1抗体药物都是由国外的制药公司生产。由于起步较晚和政策原因，国内还没有一家公司的PD-1抗体药物获得上市批准。</p><p>国内的肿瘤患者只能辗转香港等地区购买药物，花费巨大，一年大概百万人民币，绝大部分国内患者都负担不起。下面是目前主要的三种PD-1/PD-L1抗体药物的价格和年花费：</p>'
					}
				
			}
		},
		onLoad(option) {
			console.log(option.id);
		},
		methods: {
			showModal(){
				this.modalName='Image'
			},
			hideModal(){
				this.modalName=null
			},
			call(){
				uni.makePhoneCall({
					phoneNumber:'4008004268'
					
				})
			},
			handelApplication(){
				uni.navigateTo({
					url:"/pages/recruit/application"
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.rec_detail{
		background-color: #fff;
		.title{
			font-size: 36rpx;
			color: #4a4a4a;
			padding: 20rpx 0;
		}
		.cover{
			width: 100%;
		}
		.time{
			margin-top: 28rpx;
			padding-left: 30rpx;
			font-size:28rpx;
			color:rgba(31,29,29,1);
		}
		.info{
			padding-left: 30rpx;
			margin-top: 10rpx;
			.info_item{
				line-height: 34rpx;
				font-size:28rpx;
				color:rgba(74,74,74,1);
			}
		}
		.bref{
			
				padding: 0 40rpx;
				margin-left: 20rpx;
				margin-top: 20rpx;
				font-size:26rpx;
				line-height:36rpx;
				text-align: justify;
				color:rgba(155,155,155,1);
				padding-bottom: 300rpx;
		}
		.btn_group{
			position: fixed;
			width: 100%;
			height: 100rpx;
			bottom: 0;
			display: flex;
			font-size: 28rpx;
			button{
				width: 50%;
				height: 100%;
				position: relative;
			}
			
			.phone{
				background-color: #EAEAEA;
				position: absolute;
				top: 0;
				left: 0;
				right: 0;
				bottom: 0;
				display: flex;
				align-items: center;
				justify-content: center;
				color: #3BCDAE;
				image{
					width: 40rpx;
					height: 40rpx;
					margin-right: 10rpx;
				}
			}
			.rec{
				background-color: #3BCDAE;
				color: #fff;
			}
			.end_phone{
				color: #9B9B9B;
			}
			.end_rec{
				background:rgba(155,155,155,1);
				color: #fff;
			}
		}
		.cu-modal{
			.tel{
				background-color: #fff;
				display: flex;
				height: 190rpx;
				align-items: center;
				justify-content: center;
				view{
					
					line-height: 190rpx;
					font-size:48rpx;
					font-weight:600;
					color:rgba(54,174,173,1);
					// line-height:66rpx;
					width: 588rpx;
					border-bottom: 4rpx solid #efefef;
				}
				
			}
			.cal{
				height: 100rpx;
			}
			.call{
				border-left:2rpx solid #efefef;
				height: 100rpx;
			}
		}
	}
</style>
