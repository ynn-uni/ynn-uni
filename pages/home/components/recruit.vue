<template>
	<view class="recruit">
		<view class="title">
			<view class="left">
				<view class="line"></view>
				<view class="text">征募报名</view>
			</view>
			<view class="more" @click="handelRecList">
				查看更多<text class="cuIcon-right"></text>
			</view>
			
		</view>
		<view class="rec_go" @click="handelRecDetail(firstData.id)">
			<image class="rec_img" src="../../../static/images/home_recgo.jpg" mode=""></image>
			<view class="box">
				{{firstData.title}}
			</view>
		</view>
		
		<view class="list">
			<view class="item" v-for="(item,index) in list" :key="index" @click="handelRecDetail(item.id)">
				<image class="my-ri" src="../../../static/images/home_re1.png" mode=""></image>
				<view class="content">
					<view class="text">
						{{item.title}}
					</view>
					<view class="re">
						{{item.type}}
					</view>
				</view>
			</view>
			
		</view>
	</view>
</template>

<script>
  import {getRecruitList} from '@/apis/index.js'
  import { mapGetters, mapActions, mapMutations } from 'vuex'
	export default {
		data() {
			return {
				list:[],
				firstData:{}
			};
		},
		mounted() {
		  this.initData()
		},
		methods: {
      initData(){
        getRecruitList().then((res)=>{
          this.list=res.data.data
          this.firstData=res.data.data[0]
        })
      },
			handelRecDetail(id){
				uni.navigateTo({
					url:"/pages/recruit/rec_detail?id="+id
				})
			},
			handelRecList(){
				uni.switchTab({
					url:"/pages/recruit/recruit"
				})
			}

		}
	}
</script>

<style lang="scss" scoped>
	.recruit{
		padding: 0rpx 30rpx;
		padding-top: 70rpx;
    position: relative;
    z-index: 10;
		.title{
			width: 100%;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.left{
				display: flex;
				align-items: center;
				height: 50rpx;
				.line{
					width:12rpx;
					height:30rpx;
					background:rgba(54,174,173,1);
					margin-right: 10rpx;
				}
				.text{
					font-size:36rpx;
					color:rgba(74,74,74,1);
					
				}
			}
			.more{
				font-size:28rpx;
				color:rgba(155,155,155,1);
				height:40rpx;
			}
		}
		.rec_go{
			position: relative;
			.rec_img{
				width: 710rpx;
				height: 190rpx;
				margin-top: 10rpx;
			}
			.box{
				width: 380rpx;
				position: absolute;
				top: 46rpx;
				left: 185rpx;
				color: #fff;
				font-size: 40rpx;
				font-style: italic;
				overflow : hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-line-clamp: 2;
				-webkit-box-orient: vertical;
			}
		}
		
		.list{
			display: flex;
			margin-top: 6rpx;
			justify-content: space-between;
			.item{
				width: 332rpx;
				height: 164rpx;
				position: relative;
				background:linear-gradient(134deg,rgba(80,227,194,1) 0%,rgba(66,234,157,1) 100%);
				border-radius: 18rpx;
				
				.my-ri{
					width: 124rpx;
					height: 114rpx;
					position: absolute;
					right: -14rpx;
					bottom: -20rpx;
				}
				.my-ri1{
					width: 140rpx;
					height: 122rpx;
					position: absolute;
					right: -14rpx;
					bottom: -20rpx;
				}
				.content{
					position: absolute;
					top: 0;
					left: 0;
					right: 0;
					bottom: 0;
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
					.text{
						width:308rpx;
						font-size:28rpx;
						color:rgba(74,74,74,1);
						line-height:36rpx;
						text-align: justify;
						overflow : hidden;
						text-overflow: ellipsis;
						display: -webkit-box;
						-webkit-line-clamp: 2;
						-webkit-box-orient: vertical;
            margin-bottom: 16rpx;
					}
					.re{
						margin-top: rpx;
						align-self: flex-start;
						margin-left: 10rpx;
						margin-top: 10rpx;
						width:140rpx;
						line-height:46rpx;
						background:rgba(255,218,156,1);
						box-shadow:0px 4rpx 18rpx 0px rgba(65,117,5,0.25);
						border-radius:23rpx;
						text-align: center;
						font-size:24rpx;
						color:rgba(74,74,74,1);
					}
				}
			}
		}
	}
</style>
