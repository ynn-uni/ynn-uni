<template>
  <view class="container home">
    <button open-type="openSetting" bindopensetting="callback">打开设置页</button>
    <Swiper></Swiper>
    <Recruit></Recruit>
    <News></News>
  </view>
</template>

<script>
  import Swiper from './components/swiper'
  import Recruit from './components/recruit'
  import News from './components/news'

  export default {
    data() {
      return {}
    },
    components: {
      Swiper,
      Recruit,
      News
    },
    onLoad() {},
    methods: {}
  }
</script>
