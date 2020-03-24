<template>
  <view class="container">
    <cu-custom :isBack="true" class="text-white">
      <block slot="backText">返回</block>
      <block slot="content">申情免费用药</block>
    </cu-custom>
 
	<view class="application">
		
    <bjx-form
        labelType="inline"
        :rules="rules"
        labelWidth="100"
        :form="form"
        msg-type="msg"
        ref="form">
        <view class="form">
          <view class="title">
          	请认真填写下列内容
          	<text>（信息内容我们会为你保密）</text>
          </view>
          <view class="formgroup">
            <bjx-form-item labelType="block" label="1.患者的姓名:" prop="truename" > 
                <input  v-model="form.truename" class="input" name="truename" placeholder="请输入患者姓名" type="text" />
            </bjx-form-item>
          </view>
          <view class="formgroup">
            <bjx-form-item labelType="block" label="2.患者的电话号码:" prop="mobile" > 
                <input  v-model="form.mobile" class="input" name="mobile" placeholder="请输入患者电话号码" type="number"/>
            </bjx-form-item>
          </view>
          <view class="formgroup">
            <bjx-form-item labelType="block" label="3.患者出生日期:" prop="birthday" >
              <picker name="birthday" mode="date" @change="bindDateChange" v-model="form.birthday">
                  <view class="uni-input birthday">{{form.birthday?form.birthday:'请选择患者出生日期'}}</view>
              </picker>
            </bjx-form-item>
          </view>
         <view class="formgroup">
            <bjx-form-item labelType="block" label="4.患者的性别：" prop="sex" >
              <radio-group class="block" @change="RadioChange" name="sex" v-model="form.sex">
              	<radio class=' radio ra' :class="form.sex==1?'checked':''" :checked="form.sex==1?true:false" :value="1"></radio>男
              	<radio class=' radio ra' :class="form.sex==2?'checked':''" :checked="form.sex==2?true:false" :value="2"></radio>女
              </radio-group>
            </bjx-form-item>
          </view>
          <view class="formgroup">
            <bjx-form-item labelType="block" label="5.患者的疾病史：" prop="history" >
              <textarea placeholder="请输入患者的疾病史" name="history" v-model="form.history"/>
            </bjx-form-item>
          </view>
        </view>
        <view class="note text-center margin-top-xs">
        	注：请携带相关资料，比如病例、检测报告等资料
        </view>
        <view class="treaty flex justify-center align-center">
        	<label>
        		<checkbox value="cb" checked="true" color="#FFFFFF" style="transform:scale(0.7)" /><text @click.stop="treaty">我已阅读，并同意接受相关条约</text>
        	</label>
        </view>
        <view class="btn">
        	<button form-type="submit" @tap="submit"> 报名</button>
        </view>
        <view class="cancel text-center" @click="cancal">
        	取消
        </view>
    </bjx-form>
	</view>
  </view>
</template>

<script>
  import bjxForm from '@/components/bjx-form/bjx-form.vue'
  import bjxFormItem from '@/components/bjx-form/bjx-form-item.vue'
  import {addEnroll} from '../../apis/index.js'
	export default {
		data() {
			return {
				radio:null,
				radio1:null,
				id:null,
        birthday:null,
        form: {
            project:'',
            truename: '',
            mobile: '',
            birthday:'',
            sex:'',
            history:''
        },
        rules: {
            truename: {required: true,msg:'请输入患者姓名'},
            mobile: {required: true,msg:'请输入患者电话号'},
            birthday:{required: true,msg:'请选择患者出生日期'},
            sex:{required: true,msg:'请选择患者性别'},
            history:{required: true,msg:'请输入患者疾病史'}
        }
			}
		},
    components:{
       bjxForm,
       bjxFormItem
    },
		onLoad(option){
      this.form.project=option.id
    },
		methods: {
      submit() {
          this.$refs.form.validate(val => {
            if(!val) return
              addEnroll(this.form).then((res)=>{
                console.log(res)
                if(res.status==200){
                  uni.showToast({
                    title:'提交成功',
                    icon:'none'
                  })
                  setTimeout(()=>{
                    uni.navigateBack({
                      delta:1
                    })
                  },1000)
                }else{
                  uni.showToast({
                    title:res.msg,
                    icon:'none'
                  })
                }
                 
                 
              })
          })
      },
      bindDateChange(e){
        this.form.birthday = e.target.value
      },
			RadioChange(e) {
				this.form.sex= e.detail.value
			},
			RadioChange1(e) {
				this.form.sex = e.detail.value
			},
			treaty(){
				uni.navigateTo({
					url:"/pages/recruit/treaty"
				})
			},
			cancal(){
				uni.navigateBack({
					delta:1
				})
			}
      
		}
	}
</script>

<style scoped lang="scss">
  .container{
    min-height: 100vh;
    background:linear-gradient(150deg,rgba(61,223,174,1) 0%,rgba(54,174,173,1) 100%);
  }
	.application{
		overflow-y:scroll ;
		padding: 30rpx;
		height:calc(100vh - 120rpx);
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
				input,textarea,.birthday{
					margin-top: 10rpx;
					border: 2rpx solid rgba(151,151,151,1);
					height: 72rpx;
					font-size:28rpx;
					color:rgba(155,155,155,1);
					padding-left: 20rpx;
				}
        .birthday{
          line-height: 72rpx;
        }
				textarea{
					width: 100%;
					height: 200rpx;
          overflow-y: scroll;
          padding-top: 10rpx;
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
      margin-top: 20rpx;
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
