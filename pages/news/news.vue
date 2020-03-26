<template>
	<view class="container news">
		<view class="hot" v-if="hotList.length">
			<view class="title">
				<view class="left">
					<view class="line"></view>
					<view class="text">热门资讯</view>
				</view>
				<view class="more" ></view>
			</view>	
			
			 <view class="vi">
				 <scroll-view class="scroll-view" scroll-x="true" scroll-left="0">
					 <view  class="scroll-view-item" v-for="(item,index) in 3" :key="index">
						 <image src="../../static/images/home_new.png" mode=""></image>
						 <view class="box">
							 <view class="text">
							 	重庆市肿瘤医院1期临床重庆市肿瘤医院1期临床试…
							 </view>
						 </view>
					 </view>
					
				 </scroll-view>
			 </view>
			
		</view>
		<view class="newslist">
			<NewItem v-for="(item,index) in data" :key="index" :data="item"></NewItem>
		</view>
		
	</view>
</template>

<script>
  import {getNewsList} from '../../apis/index.js'
	import NewItem from './components/newItem.vue'
	export default {
		data() {
			return {
				scrollTop: 0,
				old: {
					scrollTop: 0
				},
				size:10,
        page:1,
        data:[],
        hotList:[]
			}
		},
		components:{
			NewItem
		},
    mounted() {
      this.initData()
    },
		onReachBottom(){
			var that=this
      uni.showLoading({
        icon:'none'
      })
      setTimeout(function(){
        that.page++
        that.initData()
      },1000)
		},
		methods: {
			scroll: function(e) {
          this.old.scrollTop = e.detail.scrollTop
      },
      initData(){
        let page=this.pagelet 
        let size=this.size
        getNewsList({page,size}).then((res)=>{
          let data=res.data.data
          if(page>1){
            data.forEach((val)=>{
              val.created_at=val.created_at.split(' ')[0]
              this.data.push(val)
            })
          }else{
             data.forEach((val)=>{
               val.created_at=val.created_at.split(' ')[0]
             })
             this.data=data
          }
          uni.hideLoading()
        })
      }        
		}
	}
</script>

<style scoped lang="scss">
.news{
	.hot{
		padding: 0 30rpx;
		background-color: #fff;
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
			
		}
		.vi{
			overflow: hidden;
			// width: 690rpx;
			padding: 20rpx 0;
			.scroll-view{
				width:100%;
				white-space: nowrap;
				// margin-left: -30rpx;
				.scroll-view-item{
					display: inline-block;
					position: relative;
					margin-right: 30rpx;
					image{
						width: 440rpx;
						height: 246rpx;
					}
					
					.box{
						position: absolute;
						top: 0;
						left: 0;
						right: 0;
						bottom: 0;
						background-color: rgba(0,0,0,0.3);
						border-radius: 10rpx;
						.text{
							width: 440rpx;
							padding: 20rpx;
							margin-top: 180rpx;
							overflow : hidden;
							text-overflow: ellipsis;
							white-space: nowrap;
							font-size: 32rpx;
							color: #fff;
						}
					}
					
				}
				
			}
		}
		
	}
	.newslist{
		margin-top: 20rpx;
	}
}
</style>
