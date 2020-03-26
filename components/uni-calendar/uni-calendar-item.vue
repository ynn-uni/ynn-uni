<template>
	<view class="uni-calendar-item__weeks-box" :class="{
		'uni-calendar-item--disable':weeks.disable,
		'uni-calendar-item--isDay':calendar.fullDate === weeks.fullDate && weeks.isDay,
		'uni-calendar-item--checked':(calendar.fullDate === weeks.fullDate && !weeks.isDay) ,
		'uni-calendar-item--multiple': weeks.multiple, 
    'uni-calendar-item--info' : weeks.extraInfo.type === 'info',
    'uni-calendar-item--success' : weeks.extraInfo.type === 'success',
    'uni-calendar-item--error' : weeks.extraInfo.type === 'error'
		}"
	 @click="choiceDate(weeks)">
		<view class="uni-calendar-item__weeks-box-item">
			<text v-if="selected&&weeks.extraInfo" class="uni-calendar-item__weeks-box-circle"></text>
			<text class="uni-calendar-item__weeks-box-text" :class="{
				'uni-calendar-item--isDay-text': weeks.isDay,
				'uni-calendar-item--isDay':calendar.fullDate === weeks.fullDate && weeks.isDay,
				'uni-calendar-item--checked_none':calendar.fullDate === weeks.fullDate && !weeks.isDay,
				'uni-calendar-item--multiple': weeks.multiple,
				'uni-calendar-item--disable':weeks.disable,
				}">{{weeks.date}}</text>
			<text v-if="!lunar&&!weeks.extraInfo && weeks.isDay" class="uni-calendar-item__weeks-lunar-text" :class="{
				'uni-calendar-item--isDay-text':weeks.isDay,
				'uni-calendar-item--isDay':calendar.fullDate === weeks.fullDate && weeks.isDay,
				'uni-calendar-item--checked_none':calendar.fullDate === weeks.fullDate && !weeks.isDay,
				'uni-calendar-item--multiple': weeks.multiple,
				}">今天</text>
			<text v-if="lunar&&!weeks.extraInfo" class="uni-calendar-item__weeks-lunar-text" :class="{
				'uni-calendar-item--isDay-text':weeks.isDay,
				'uni-calendar-item--isDay':calendar.fullDate === weeks.fullDate && weeks.isDay,
				'uni-calendar-item--checked':calendar.fullDate === weeks.fullDate && !weeks.isDay,
				'uni-calendar-item--multiple': weeks.multiple,
				'uni-calendar-item--disable':weeks.disable,
				}">{{weeks.isDay?'今天': (weeks.lunar.IDayCn === '初一'?weeks.lunar.IMonthCn:weeks.lunar.IDayCn)}}</text>
			<text v-if="weeks.extraInfo&&weeks.extraInfo.info" class="uni-calendar-item__weeks-lunar-text" :class="{
				'uni-calendar-item--extra':weeks.extraInfo.info,
				'uni-calendar-item--isDay-text':weeks.isDay,
				'uni-calendar-item--isDay':calendar.fullDate === weeks.fullDate && weeks.isDay,
				'uni-calendar-item--checked_none':calendar.fullDate === weeks.fullDate && !weeks.isDay,
				'uni-calendar-item--multiple': weeks.multiple,
				'uni-calendar-item--disable':weeks.disable,
				}">{{weeks.extraInfo.info}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			weeks: {
				type: Object,
				default () {
					return {}
				}
			},
			calendar: {
				type: Object,
				default: () => {
					return {}
				}
			},
			selected: {
				type: Array,
				default: () => {
					return []
				}
			},
			lunar: {
				type: Boolean,
				default: false
			}
		},
		methods: {
			choiceDate(weeks) {
				this.$emit('change', weeks)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.uni-calendar-item__weeks-box {
		flex: 1;
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background: #fff; // custom
		border-radius: 8rpx; // custom
		border: 1px solid transparent; // custom
	}

	.uni-calendar-item__weeks-box-text {
		font-size: $uni-font-size-base;
		color: $uni-text-color;
	}

	.uni-calendar-item__weeks-lunar-text {
		font-size: $uni-font-size-sm;
		color: $uni-text-color;
	}

	.uni-calendar-item__weeks-box-item {
		position: relative;
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 80rpx; // 100rpx; // custom
		height: 80rpx; // 100rpx; // custom
	}

	.uni-calendar-item__weeks-box-circle {
		position: absolute;
		top: 5px;
		right: 5px;
		width: 8px;
		height: 8px;
		border-radius: 8px;
		background-color: $uni-color-warning;
	}

	.uni-calendar-item--disable {
		// background-color: rgba(249, 249, 249, $uni-opacity-disabled);
		background-color: rgb(249, 249, 249); // custom
		color: $uni-text-color-disable;
	}

	.uni-calendar-item--isDay-text {
		color: $uni-color-primary;
	}

	// .uni-calendar-item--isDay {
	// 	background-color: $uni-color-primary;
	// 	opacity: 0.8;
	// 	color: #fff;
	// }
	// custom
	.uni-calendar-item__weeks-box.uni-calendar-item--isDay {
		border: 1px solid $uni-color-warning;
	}

	.uni-calendar-item--extra {
		color: $uni-color-warning;
		opacity: 0.8;
	}

	.uni-calendar-item--checked {
		// background-color: $uni-color-primary;
		// color: #fff;
		// opacity: 0.8;
		// custom
		border: 1px solid $uni-color-warning;
	}

	.uni-calendar-item--multiple {
		background-color: $uni-color-primary;
		color: #fff;
		opacity: 0.8;
  }
  
  .uni-calendar-item--info {
		background: #d8d8d8;
	}
  .uni-calendar-item--success {
		background: $uni-color-primary;
	}
	.uni-calendar-item--error {
		background: $uni-color-secondary
	}
	.uni-calendar-item--success .uni-calendar-item__weeks-box-text {
		color: #fff;
	}
	.uni-calendar-item--error .uni-calendar-item__weeks-box-text {
		color: #9b9b9b;
	}
</style>
