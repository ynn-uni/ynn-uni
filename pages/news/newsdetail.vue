<template>
  <view class="container">  
    <view class="rec_detail">
      <view class="title">
        {{data.title}}
      </view>
      
      <view class="info">
        <view class="data">
          {{data.created_at}}
        </view>
        <view class="data">
          {{data.clicks}}
        </view>
      </view>
      <view class="bref">
        <rich-text :nodes="data.content"></rich-text>
      </view>
      
      <view class="btn_grou" >
        <button  class="cu-btn round"  open-type='share'  >
          <image class="share" src="../../static/icons/share.png" mode=""></image>
          分享
        </button>
        <view class="box" v-if="!token" @click="checkLogin">
          
        </view>
      </view>
      
      
    </view>
  </view>
</template>

<script>
  import { mapGetters} from 'vuex'
  import {getNewsDetails} from '@/apis/index.js'
	export default {
		data() {
			return {
				status:0,//0未提交  1已提交未审核 2已提交审核通过 3已提交审核未通过
				isend:false,
				modalName:null,
					data:{
						title:'重庆市肿瘤医院1期临床试验研一期顺利开展顺利开展',
						data:'2020.01.09',
						num:12025, //sss:''
						bref:'<p>据统计，从2014年7月到现在，PD-1抗体药物已经在包括日本、美国、欧美、澳大利亚和中国香港在内的全球60多个地区上市，全球无数的瘤患者已经受益于这种抗癌新药。</p><img width="100%" src="https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg"></img><p>目前，通过审批并上市的PD-1抑制剂主要有以下三个3个：</p><p>PD-1抗体Keytruda，由美国默沙东研制并通过临床上市；</p><p>PD-1抗体Opdivo，由美国百时美施贵宝研制并通过临床上市；</p><p>PD-L1抗体Tecentriq，由瑞士罗氏研制并通过临床上市。所以，目前上市的PD-1抗体药物都是由国外的制药公司生产。由于起步较晚和政策原因，国内还没有一家公司的PD-1抗体药物获得上市批准。</p><p>国内的肿瘤患者只能辗转香港等地区购买药物，花费巨大，一年大概百万人民币，绝大部分国内患者都负担不起。下面是目前主要的三种PD-1/PD-L1抗体药物的价格和年花费：2222</p>'
						// bref:'<img src="https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg"></img>'
					}
				
			}
		},
    computed:{
      ...mapGetters(['token'])
    },
		onLoad(option) {
      console.log(option.id)
      this.initData(option.id)
			},
		onShareAppMessage(res) {
		    if (res.from === 'button') {// 来自页面内分享按钮
		      console.log(res.target)
		    }
		    return {
		      title: '自定义分享标题',
		      path: '/pages/news/newsdetail'
		    }
		  },
		methods: {
			initData(id){
        getNewsDetails({id}).then((res)=>{
          this.data=res.data
        })
      },
      checkLogin(){
        if(!this.token){
          uni.navigateTo({
          	url:"/pages/login/login"
          })
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
				if(this.status==0){
					uni.navigateTo({
						url:"/pages/recruit/application"
					})
				}else{
					uni.navigateTo({
						url:"/pages/recruit/rec_status?status="+this.status
					})
				}
				
			}
		}
	}
</script>

<style scoped lang="scss">
	.rec_detail{
		padding: 30rpx;
    padding-bottom: 100rpx;
		.title{
			font-size: 36rpx;
			color: #4a4a4a;
		}
		.info{
			display: flex;
			justify-content: space-between;
			font-size:28rpx;
			color:rgba(155,155,155,1);
			line-height:40rpx;
			margin-top: 20rpx;
		}
		.bref{
			margin-top: 20rpx;
			font-size:26rpx;
			line-height:36rpx;
			text-align: justify;
			color:rgba(155,155,155,1);
			padding-bottom: 30rpx;
			display: flex;
			align-items: center;
			justify-content: center;
				
		}
		.btn_grou{
			position: fixed;
			bottom: 4rpx;
			button{
				width:690rpx;
				height:80rpx;
				background:rgba(59,205,174,1);
				border-radius:52rpx;
				color: #fff;
				.share{
					width: 22rpx;
					height: 22rpx;
					margin-right: 10rpx;
				}
			}
		 .box{
       position: absolute;
       top: 0;
       left: 0;
       right: 0;
       bottom: 0;
     }
    }
	}
</style>
