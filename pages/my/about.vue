<template>
  <view class="container about">
    <image class="about-bg" src="../../static/images/about_bg.png" />
    <view
      class="info text-lg"
    >重庆市肿瘤医院/重庆大学附属肿瘤医院药物临床试验机构于2008年通过CFDA资格认定，2014年、2017年先后两次通过机构资格复核认定，发展至今已有10年历史。机构于2017年开始筹建I期临床试验中心，以临床药代动力学、药物制剂生物利用度及生物等效性评价研究、药物的体内外代谢研究等为主要方向，力求成为一个集医疗教学科研于一体的综合性研究中心。</view>
  </view>
</template>

<style lang="scss" scoped>
  .about {
    position: relative;
    .about-bg {
      position: absolute;
      top: 0rpx;
      left: 0;
      object-fit: cover;
      width: 100%;
      height: calc(100vh);
    }
    .info {
      position: absolute;
      top: 20px;
      left: 50%;
      width: 80%;
      transform: translateX(-50%);
      padding: 30rpx 60rpx;
      line-height: 1.8em;
      background: #fff;
      border-radius: 60rpx;
    }
  }
</style>
