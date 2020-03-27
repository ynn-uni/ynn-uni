<template>
  <view class="container">
    <view class="archives">
      <view class="cu-avatar round lg">
        <open-data type="userAvatarUrl" />
      </view>
      <view class="archives-content">
        <view class="archives-tips">为了给您提供更准确的健康管理服务 请务必如实填写一下资料</view>
        <view class="archives-form">
          <bjx-form
            labelType="inline"
            :rules="rules"
            labelWidth="100"
            :form="form"
            msg-type="msg"
            ref="form"
          >
            <view class="form">
              <view class="cu-form-group">
                <bjx-form-item labelType="inline" label="姓名:" prop="truename">
                  <input
                    v-model="form.truename"
                    class="input"
                    name="truename"
                    placeholder="请输入您的姓名"
                    type="text"
                  />
                </bjx-form-item>
              </view>
              <view class="cu-form-group">
                <bjx-form-item labelType="inline" label="手机:" prop="phone">
                  <input
                    v-model="form.phone"
                    class="input"
                    name="phone"
                    placeholder="请输入您的电话号码"
                    type="number"
                  />
                </bjx-form-item>
              </view>
              <view class="cu-form-group">
                <bjx-form-item labelType="inline" label="生日:" prop="birthday">
                  <picker
                    name="birthday"
                    mode="date"
                    @change="handleBirthChange"
                    v-model="form.birthday"
                  >
                    <view class="text-placeholder">{{form.birthday?form.birthday:'请选择您的出生日期'}}</view>
                  </picker>
                </bjx-form-item>
              </view>
              <view class="cu-form-group">
                <bjx-form-item labelType="inline" label="性别：" prop="sex">
                  <picker :range="['男', '女']" @change="handleSexChange" v-model="form.sex">
                    <view class="text-placeholder">{{!form.sex?'请选择您的性别':form.sex==1?'男':'女'}}</view>
                  </picker>
                </bjx-form-item>
              </view>
              <view class="cu-form-group">
                <bjx-form-item labelType="inline" label="身高：" prop="height">
                  <view class="flex justify-between align-center">
                    <input
                      v-model="form.height"
                      class="input"
                      name="height"
                      placeholder="请输入您的身高"
                      type="number"
                    />
                    <text>CM</text>
                  </view>
                </bjx-form-item>
              </view>
              <view class="cu-form-group">
                <bjx-form-item labelType="inline" label="体重：" prop="weight">
                  <view class="flex justify-between align-center">
                    <input
                      v-model="form.weight"
                      class="input"
                      name="weight"
                      placeholder="请输入您的体重"
                      type="number"
                    />
                    <text>KG</text>
                  </view>
                </bjx-form-item>
              </view>
            </view>
            <view class="submit-btn">
              <button
                form-type="submit"
                @tap="submit"
                class="cu-btn round lg bg-primary"
              >{{ hasInfo ? '修改' : '提交' }}</button>
            </view>
          </bjx-form>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  import bjxForm from '@/components/bjx-form/bjx-form.vue'
  import bjxFormItem from '@/components/bjx-form/bjx-form-item.vue'
  import { setUserInfo, getUserInfo } from '../../apis/index.js'
  export default {
    name: 'Archives',
    data() {
      return {
        archivesInfo: {},
        hasInfo: true,
        reg: /^1[3456789]\d{9}$/,
        form: {
          project: '',
          truename: '',
          phone: '',
          birthday: '',
          sex: '',
          height: '',
          weight: ''
        },
        rules: {
          truename: { required: true, msg: '请输入您的真实姓名' },
          //使用正则的时候注意字符的转译
          phone: {
            required: true,
            rule: ['reg:^1[3456789]\\d{9}$'],
            msg: '请输入您的手机号',
            message: '请输入正确的手机号'
          },
          birthday: { required: true, msg: '请选择您的出生日期' },
          sex: { required: true, msg: '请选择您的性别' },
          height: { required: true, msg: '请输入您的身高' },
          weight: { required: true, msg: '请输入您的体重' }
        }
      }
    },

    components: {
      bjxForm,
      bjxFormItem
    },
    mounted() {
      this.getArchivesInfo()
    },
    methods: {
      submit() {
        this.$refs.form.validate(val => {
          if (!val) return
          setUserInfo(this.form).then(res => {
            console.log(res)
            if (res.status == 200) {
              uni.showToast({
                title: '提交成功',
                icon: 'none'
              })
              setTimeout(() => {
                uni.navigateBack({
                  delta: 1
                })
              }, 1000)
            } else {
              uni.showToast({
                title: res.msg,
                icon: 'none'
              })
            }
          })
        })
      },
      getArchivesInfo() {
        getUserInfo().then(res => {
          if (res.data) {
            this.form = res.data
            this.hasInfo = true
          } else {
            this.hasInfo = false
          }
        })
      },
      handleBirthChange(e) {
        console.log(e.target.value)
        this.form.birthday = e.target.value
      },
      handleSexChange(e) {
        console.log(e.target.value)
        this.form.sex = parseInt(e.target.value) + 1
      },
      // 表单验证
      valdateForm(data) {
        const validator = new schema(this.rules)
        return validator.validate(data)
      },
      handleErrors(errors) {
        const errTitle = errors.map(i => i.message)
        uni.showToast({
          title: errTitle[0],
          icon: 'none',
          duration: 2000
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .archives {
    padding-top: 40rpx;

    .cu-avatar {
      display: block;
      margin: 0 auto 40rpx;
      width: 160rpx;
      height: 160rpx;
      font-size: 0;
      overflow: hidden;
    }

    .archives-tips {
      width: 60%;
      margin: 40rpx auto 80rpx;
    }
    .archives-form {
      width: 70%;
      margin: auto;
    }
    .cu-form-group + .cu-form-group {
      border-top: 1px solid #f7f7f7;
    }
    .submit-btn {
      text-align: center;
      margin-top: 60rpx;
      button {
        width: 360rpx;
        background: $uni-color-primary;
        color: #fff;
      }
    }
  }

  .archives::v-deep {
    .text-placeholder {
      width: 370rpx;
      font-size: 28rpx;
      text-align: left;
      color: #808080;
    }
  }
</style>
