<template>
  <view class="records bg-white">
    <cu-custom :isBack="true" bgcolor="bg-white">
      <block slot="backText">返回</block>
      <block slot="content">健康记录</block>
    </cu-custom>
    <uni-calendar
      :insert="true"
      :showMonth="false"
      startDate="2020-03-10"
      endDate="2020-04-01"
      :selected="recordList"
      @change="handleChange"
    />
    <view>
      <view class="records-tip bg-gray">
        <text class="bg-primary" />已上传
        <text class="bg-secondary" />未上传
        <text class="bg-info" />项目周期
      </view>
      <record-list :list="selectRecords" />
    </view>
    <view class="records-add">
      <button class="cu-btn margin-tb-sm cuIcon lg" @click="handleAdd">
        <text class="cuIcon-add" />
      </button>
    </view>
  </view>
</template>

<script>
  import uniCalendar from '@/components/uni-calendar/uni-calendar.vue'
  import RecordList from './components/RecordList'
  import { getHealthRecords } from '@/apis'
  export default {
    components: {
      uniCalendar,
      RecordList
    },
    data() {
      return {
        recordList: [
          {
            date: '2020-03-10',
            info: '日程',
            data: [
              // 自定义数据
            ]
          },
          {
            date: '2020-03-18',
            info: '日程',
            data: [
              // 自定义数据
            ]
          }
        ],
        selectRecords: [],
        selectedDay: null
      }
    },
    created() {
      this.init()
      this.getHealthRecords()
    },
    computed: {
      formatSelectedDate() {
        if (!this.selectedDay) return
        const [year, month, day] = this.selectedDay.split('-')
        return `${year}年${month}月${day}日`
      }
    },
    mounted() {
      this.getHealthRecords()
    },
    methods: {
      getHealthRecords() {
        getHealthRecords().then(res => {
          console.log(res)
          const { date } = res.data

          this.recordList = this.formatData(date)
        })
      },
      init() {
        const date = new Date()
        this.selectedDay = date.toISOString().split('T')[0]
      },
      handleChange(evt) {
        this.selectedDay = evt.fulldate
      },
      handleAdd() {
        this.$refs.schedulePopup.open()
      },
      formatData(data) {
        const result = []
        for (let key in data) {
          const length = data[key].length
          result.push({
            date: key,
            // info: length ? '已上传' : '未上传',
            type: key === '2020-03-29' ? 'error' : 'info',
            data: data[key]
          })
        }
        return result
      }
    }
  }
</script>

<style lang="scss" scoped>
  .records {
    min-height: 100vh;

    .records-tip {
      padding: 10rpx 0;
      padding-left: 10rpx;
      color: $uni-text-color-grey;
      font-size: 20rpx;

      > text {
        display: inline-block;
        width: 20rpx;
        height: 20rpx;
        vertical-align: -2rpx;
        margin-left: 20rpx;
        margin-right: 10rpx;
      }
    }
  }
  .records-add {
    position: fixed;
    right: 0;
    bottom: 40rpx;
    padding: 30rpx 50rpx;

    .cu-btn {
      background: $uni-color-primary;
      color: #fff;
      font-size: 24px;
    }
  }
  .records::v-deep {
    .uni-calendar-item__weeks-box-circle {
      display: none;
    }
    .uni-calendar-item--extra {
      margin-left: 0;
    }
  }
</style>
