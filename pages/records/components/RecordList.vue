<template>
  <view class="record-list bg-white">
    <view class="record-title padding-lr">{{ formatSelectedDate }}</view>

    <uni-swipe-action>
      <uni-swipe-action-item
        v-for="(item, index) in list"
        :key="index"
        :options="options"
        @click="handleAction($event, index)"
      >
        <view class="record-item solid-bottom">
          <view class="record-tip bg-primary"></view>
          <view class="flex-sub">{{ item.content }}</view>
        </view>
      </uni-swipe-action-item>
    </uni-swipe-action>
  </view>
</template>

<script>
  export default {
    name: 'SchedueList',
    props: {
      date: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        list: [],
        options: [
          {
            text: '编辑',
            style: {
              backgroundColor: '#3bcdae'
            }
          },
          {
            text: '删除',
            style: {
              backgroundColor: '#ffb3bc'
            }
          }
        ]
      }
    },
    computed: {
      formatSelectedDate() {
        const [year, month, day] = this.date.split('-')
        return `${year}年${month}月${day}日`
      }
    },
    mounted() {
      this.getSchedule()
    },
    methods: {
      handleAction(e, index) {
        const actionIndex = e.index
        if (actionIndex === 0) {
          this.handleEdit(index)
        } else {
          this.handleDel(index)
        }
      },
      handleEdit(index) {
        uni.showModal({
          title: '提示',
          content: '是否编辑'
        })
      },
      handleDel(index) {
        uni.showModal({
          title: '提示',
          content: '是否删除',
          success: res => {
            if (res.confirm) {
              // TODO 调用删除接口
              this.list.splice(index, 1)
            }
          }
        })
      },
      getSchedule(date) {
        this.list = Array(9)
          .fill(1)
          .map((i, idx) => {
            return {
              id: idx + 1,
              content: '您该吃药了（请参照医生建议合理吃药）',
              time: `8:2${idx}`
            }
          })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .record-list {
    padding-bottom: 90rpx;

    .record-title {
      line-height: 3em;
      font-weight: 500;
    }
    .record-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20rpx 30rpx;
      width: 100%;

      .record-tip {
        display: inline-block;
        width: 20rpx;
        height: 20rpx;
        vertical-align: -2rpx;
        margin-right: 20rpx;
      }
    }
  }
</style>
