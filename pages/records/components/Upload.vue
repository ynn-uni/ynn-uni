<template>
  <view class="cu-form-group">
    <view class="title">
      <text class="record-icon cuIcon color-primary" :class="icon" />
      {{ title }}
    </view>
    <text class="record-icon cuIcon cuIcon-cameraadd color-primary" @click="chooseImage" />
    <view v-if="error" class="error-tips color-error">{{ error }}</view>
  </view>
</template>

<script>
  export default {
    name: 'RecordUpload',
    props: {
      value: {
        type: String,
        default: ''
      },
      icon: {
        type: String,
        default: 'cuIcon-camerafill'
      },
      title: {
        type: String,
        default: ''
      },
      error: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        imgPath: ''
      }
    },
    mounted() {},
    methods: {
      chooseImage() {
        uni.chooseImage({
          count: 4, //默认9
          sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
          sourceType: ['album', 'camera'], //从相册选择
          success: res => {
            uni.showLoading()
            this.imgPath = res.tempFilePaths
            this.handleUpload(res.tempFilePaths).then(uploadFileRes => {
              uni.hideLoading()
              const realPath = uploadFileRes.data.path || 'imagePath'
              this.$emit('input', realPath)
            })
          }
        })
      },
      handleUpload(tempFilePath) {
        return uni.uploadFile({
          url: 'https://www.example.com/upload', //仅为示例，非真实的接口地址
          filePath: tempFilePath,
          name: 'file',
          formData: {
            // 其他额外的 form data
          }
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>
