<template>
	<view class="archives">
		<view class="cu-avatar round lg">
			<open-data type="userAvatarUrl" />
		</view>
		<view class="archives-content">
			<view class="archives-tips">为了给您提供更准确的健康管理服务 请务必如实填写一下资料</view>
			<view class="archives-form">
				<form>
					<view class="cu-form-group">
						<view class="title">姓名：</view>
						<input
							v-model="archivesInfo.name"
							placeholder="请输入您的真实姓名"
							name="input"
							placeholder-class="text-placeholder"
							confirm-type="next"
						/>
					</view>
					<view class="cu-form-group">
						<view class="title">手机：</view>
						<input
							v-model="archivesInfo.phone"
							placeholder="请输入您的手机号码"
							name="input"
							type="number"
							placeholder-class="text-placeholder"
							confirm-type="next"
						/>
					</view>
					<view class="cu-form-group">
						<view class="title">生日：</view>
						<picker :value="birth" mode="date" @change="handleBirthChange">
							<view class="picker">
								<text v-if="birth">{{ birth }}</text>
								<view class="text-placeholder" v-else>请输入您的身高</view>
							</view>
						</picker>
					</view>
					<view class="cu-form-group">
						<view class="title">性别：</view>
						<picker :value="sex" :range="['男', '女']" @change="handleSexChange">
							<view class="picker">
								<text v-if="sex != null">{{ sex ? '女' : '男' }}</text>
								<view class="text-placeholder" v-else>请选择您的性别</view>
							</view>
						</picker>
					</view>
					<view class="cu-form-group">
						<view class="title">身高：</view>
						<input
							v-model="archivesInfo.height"
							placeholder="请输入您的身高"
							name="input"
							type="number"
							placeholder-class="text-placeholder"
							confirm-type="next"
						/>
						<text>CM</text>
					</view>
					<view class="cu-form-group">
						<view class="title">体重：</view>
						<input
							v-model="archivesInfo.weight"
							placeholder="请输入您的体重"
							type="number"
							name="input"
							placeholder-class="text-placeholder"
							confirm-type="done"
						/>
						<text>KG</text>
					</view>
				</form>
			</view>
			<view class="submit-btn">
				<button
					class="cu-btn round lg bg-primary"
					type="submit"
					@click="handleSubmit"
				>{{ hasInfo ? '修改' : '提交' }}</button>
			</view>
		</view>
	</view>
</template>

<script>
	// import schema from 'async-validator'
	export default {
		name: 'Archives',
		data() {
			return {
				archivesInfo: {},
				hasInfo: true,
				rules: {
					name: {
						type: 'string',
						required: true,
						message: '请填写姓名'
					},
					phone: {
						required: true,
						pattern: /^1[3-9]\d{9}$/,
						message: '请正确填写手机号'
					}
				}
			}
		},
		mounted() {
			this.getArchivesInfo()
		},
		methods: {
			getArchivesInfo() {
				this.archivesInfo = {
					name: '',
					phone: '',
					birth: '',
					sex: null,
					height: null,
					weight: null
				}
			},
			handleBirthChange(e) {
				this.archivesInfo.birth = e.target.value
			},
			handleSexChange(e) {
				this.archivesInfo.sex = +e.target.value
			},
			handleSubmit() {
				const { name, phone, birth, sex, height, weight } = this.archivesInfo
				// this.valdateForm({
				// 	name,
				// 	phone,
				// 	birth,
				// 	sex,
				// 	height,
				// 	weight
				// })
					.then(res => {
						uni.showToast({
							title: '表单提交成功',
							icon: 'success',
							duration: 2000
						})
						console.log('表单提交成功')
					})
					.catch(({ errors }) => {
						this.handleErrors(errors)
					})
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
		min-height: 100vh;
		background: #fff;
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
			font-size: 28rpx;
			text-align: left;
			color: #808080;
		}
	}
</style>
