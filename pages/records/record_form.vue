<template>
  <view class="container record-form">
    <form>
      <view class="record-form-item" v-for="item in recordForm" :key="item.id">
        <record-input
          v-if="item.type === 1"
          v-model="formData[item.id]"
          :title="item.title"
          :native-type="parseNativeType(item.rule)"
          :error="errors[item.id]"
        />
        <record-select
          v-if="item.type === 2"
          v-model="formData[item.id]"
          :title="item.title"
          :range="item.items"
          :error="errors[item.id]"
        />
        <record-switch
          v-if="item.type === 3"
          v-model="formData[item.id]"
          :title="item.title"
          :range="item.items"
          :error="errors[item.id]"
        />
        <record-check
          v-if="item.type === 4"
          v-model="formData[item.id]"
          :title="item.title"
          :range="item.items"
          :error="errors[item.id]"
        />
        <record-upload
          v-if="item.type === 5"
          v-model="formData[item.id]"
          :title="item.title"
          :error="errors[item.id]"
        />
      </view>
    </form>

    <button
      class="record-submit cu-btn round lg"
      @click="handleSubmit"
    >{{ isEdit ? '点击修改': '点击上传' }}</button>
  </view>
</template>

<script>
  import RecordInput from './components/Input'
  import RecordSelect from './components/Select'
  import RecordSwitch from './components/Switch'
  import RecordCheck from './components/Check'
  import RecordUpload from './components/Upload'
  import { postHealthRecords } from '@/apis'
  import { createDescriptor } from './utils/descriptor'
  import schema from 'async-validator'
  export default {
    name: 'RecordForm',
    components: {
      RecordInput,
      RecordSelect,
      RecordSwitch,
      RecordCheck,
      RecordUpload
    },
    data() {
      return {
        isEdit: false,
        trialId: null,
        formData: {},
        // type: 1，填空，2，单选，3，开关，4，多选，5，图片
        recordForm: [],
        rules: {},
        errors: {}
      }
    },
    onLoad(options) {
      const { id, form } = options
      this.trialId = id
      this.recordForm = JSON.parse(decodeURIComponent(form))

      this.initFormData()
      this.initRules()
    },
    methods: {
      initFormData() {
        const result = {}
        this.recordForm.map(i => {
          switch (i.type) {
            case 1:
              result[i.id] = ''
              break
            case 2:
              result[i.id] = i.items && i.items[0] && i.items[0].value
              break
            case 3:
              result[i.id] = i.items && i.items[0] && i.items[0].value
              break
            case 4:
              result[i.id] = []
              break
            case 5:
              result[i.id] = ''
              break
          }
        })
        this.formData = result
      },
      initRules() {
        this.recordForm.forEach(i => {
          const rule = createDescriptor(i.rule)
          this.$set(this.rules, i.id, rule)
        })
      },
      parseNativeType(rule) {
        if (rule.includes('number')) {
          return 'number'
        }
        return 'string'
      },
      handleSubmit() {
        this.validateForm(this.formData)
          .then(() => {
            this.submitRecords()
          })
          .catch(({ fields }) => {
            this.handleErrors(fields)
          })
      },
      submitRecords() {
        postHealthRecords({
          trial: this.trialId,
          answer: this.formData
        }).then(() => {
          uni
            .showToast({
              title: '上传成功',
              icon: 'success'
            })
            .then(() => {
              setTimeout(() => {
                uni.navigateBack()
              }, 100)
            })
        })
      },
      validateForm(data) {
        const validator = new schema(this.rules)
        return validator.validate(data)
      },
      handleErrors(fields) {
        console.log(fields)
        const errors = {}
        for (const key in fields) {
          errors[key] = fields[key][0].message
        }
        this.errors = errors
      }
    }
  }
</script>

<style lang="scss" scoped>
  .record-form {
    padding: 30rpx 30rpx 140rpx;
    .record-form-item {
      border-bottom: 1px solid #e9e9e9;
    }
    .record-submit {
      position: fixed;
      width: calc(100% - 60rpx);
      bottom: 40rpx;
      background: $uni-color-primary;
      color: #fff;
      z-index: 1;
    }
  }
  .record-form::v-deep {
    .record-icon {
      font-size: 36rpx;
      margin-right: 10rpx;
      vertical-align: -2rpx;
    }
    .record-form-item {
      position: relative;
      .error-tips {
        position: absolute;
        bottom: 4rpx;
        right: 2em;
        text-align: right;
        font-size: 20rpx;
      }
    }
  }
</style>
