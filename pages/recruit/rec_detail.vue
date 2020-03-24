<template>
	<view class="rec_detail">
    <cu-custom :isBack="true" bgColor="bg-white">
      <block slot="backText">返回</block>
      <block slot="content">征募详情</block>
    </cu-custom>
		<view class="title">
			{{data.title}}
		</view>
		<!-- <image class="cover" :src="data.cover" mode=""></image> -->
    <view class="cover">
      <image class="img" src="../../static/images/home_new.png" mode=""></image>
    </view>
    
		<view class="time">
			报名时间：{{data.start}}~{{data.end}}
		</view>
		<view class="info">
			<view class="info_item">
				年龄：{{data.age}}
			</view>
			<view class="info_item">
				性别：{{data.sex}}
			</view>
			<view class="info_item">
				其他：{{data.condition}}
			</view>
		</view>
		<view class="bref">
			<rich-text :nodes="data.content"></rich-text>
		</view>
		
		<view class="btn_group">
			
			<button v-if="data.status" class="cu-btn" @tap="showModal">
				<view class="phone">
					<image src="../../static/icons/rec_phone.png" mode=""></image>
					资讯
				</view>
				
			</button>
			<button v-if="data.status" class="cu-btn" @click="handelApplication">
				<view class="phone rec">
					免费用药
				</view>
				
			</button>
			<button v-if="!data.status" class="cu-btn" >
				<view class="phone end_phone">
					<image src="../../static/icons/end_phone.png" mode=""></image>
					资讯
				</view>
				
			</button>
			<button v-if="!data.status" class="cu-btn">
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
						{{data.tel}}
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
  import {baseUrl} from '../../configs/index.js'
  import {getRecruitDetails} from '@/apis/index.js'
  import { mapGetters, mapActions, mapMutations } from 'vuex'
	export default {
		data() {
			return {
				status:0,//0未提交  1已提交未审核 2已提交审核通过 3已提交审核未通过
				isend:false,
        id:null,
				modalName:null,
					data:{}
				
			}
		},
    computed:{
      ...mapGetters(['token'])
    },
    onLoad(option) {
      this.id=option.id
      
    },
		onShow() {
      this.initData(this.id)
		},
		methods: {
      initData(id){
        getRecruitDetails({id}).then((res)=>{
          console.log(res,baseUrl)
          this.data=res.data
          this.data.cover=baseUrl+'/'+this.data.cover
        })
      },
      isAppplication(data){
        if(!data.examine) return;
        if(data.examine.enrolled==0){
          return false
        }else{
          return true
        }
      },
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
        if(!this.token){
          uni.navigateTo({
          	url:"/pages/login/login"
          })
        }else if(this.data.examine.enrolled==0){
					uni.navigateTo({
						url:"/pages/recruit/application?id="+this.data.id
					})
				}else if(this.data.examine.enrolled==1){
					uni.navigateTo({
						url:"/pages/recruit/rec_status?status="+this.data.examine.data.status
					})
				}
				
			}
		}
	}
</script>

<style scoped lang="scss">
	.rec_detail{
		background-color: #fff;
    min-height: 100vh;
		.title{
			font-size: 36rpx;
			color: #4a4a4a;
			padding: 20rpx 20rpx;
		}
		.cover{
			padding: 0 20rpx;
      .img{
        width: 100%;
      }
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
			
				padding: 0 30rpx;
				// margin-left: 20rpx;
				margin-top: 20rpx;
				// font-size:34rpx;
				line-height:44rpx;
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
