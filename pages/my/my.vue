<template>
	<view class="my__layout__wapper">
		<view class="my__layout__wapper__login__bg">
			<text class="my__layout__wapper__login__bg__text">疫校园</text>
			<image src="../../static/login/mylogo@3x.png" mode="aspectFill"
				class="my__layout__wapper__login__bg__image"></image>
		</view>
		<view class="my__layout__wapper__login" @click="login">
			<view class="my__layout__wapper__login__context">
				<image :src="!!accountNumber ? '../../static/login/material@3x.png' : '../../static/default.png'"
					class="my__layout__wapper__login__defaultIcon" mode=""></image>

				<view class="my__layout__wapper__login__context__text">
					<text class="my__layout__wapper__login__text">{{!!accountNumber ? accountNumber : '立即登录/注册'}}</text>
					<text class="my__layout__wapper__login__text address" v-for="(item, index) in users"
						:key="item.id">{{item.address}}:{{item.identityType == 1 ? '发起人':'合伙人'}} </text>
				</view>
			</view>
		</view>
		<view class="my__layout__wapper__login__funcList">
			<view class="my__layout__wapper__login__funcList__item" v-for="(item, index) in funcList" :key='item.id'
				@click="funcListClick(item)">
				<image class="my__layout__wapper__login__funcList__item__icon" :src="item.icon" mode=""></image>
				<text class="my__layout__wapper__login__funcList__item__text">{{item.name}}</text>
				<image src="../../static/next@3x.png" class="my__layout__wapper__login__funcList__item__next" mode="">
				</image>
			</view>
		</view>
	</view>
</template>

<script>
	import http from '../../common/http';
	export default {
		data() {
			return {
				invitationCode: '111111111111',
				avatarUrl: '',
				accountNumber: '',
				users: [],

				// 我的服务功能列表
				funcList: [{
					id: 0,
					name: '消息通知',
					icon: require('../../static/person/icon2@2x.png'),
					func: function() {
						uni.navigateTo({
							url: ''
						})
					},
				}],
			}
		},
		onLoad(e) {

		},
		mounted() {

		},
		onShow() {
			const value = http.getStorage('simple_key');
			if (value && !!value.phoneNumber) {
				this.accountNumber = value.phoneNumber.substring(0, 3) + "****" + value.phoneNumber.substring(7, 11);

				http.request({
					url: '/hiyan-nft/nft/applyList/list',
					method: 'GET',
					data: {
						phone: value.phoneNumber,
						state: 1,
					},
					// loading: true
				}).then((data) => {
					if (data && data.records) {
						this.users = [...data.records];
					}
				}).catch((err) => {
					console.log('err', err);
				});
			};
			// const users = http.getStorage('user_key');
			// this.users = users || [];
		},
		methods: {
			copyText: function() {
				// 复制文本
				uni.setClipboardData({
					data: this.invitationCode, //要被复制的内容
					success: () => { //复制成功的回调函数
						uni.showToast({ //提示
							title: "复制成功"
						})
					}
				});
			},
			funcListClick(item) {
				item.func();
			},

			login: function() {
				uni.navigateTo({
					url: '../login/login?nav=1'
				})
			},
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #f7f7f7;
		overflow-x: hidden;
		width: 750rpx;
	}

	.my__layout__wapper {
		overflow: hidden;
		width: 750rpx;
		// background-color: $uni-color-bgc;
		// $padding-content-xg
		box-sizing: border-box;
		padding-top: 165rpx;

		.my__layout__wapper__login__bg {
			overflow: hidden;
			position: fixed;
			width: 1350rpx;
			height: 1300rpx;
			top: -1130rpx;
			top: -960rpx;
			left: -300rpx;
			z-index: -2;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: flex-end;

			background: linear-gradient(top right, #87CEFA, #3762EC);
			border-radius: 45%;

			.my__layout__wapper__login__bg__text {
				font-family: MicrosoftYaHei;
				font-size: 34rpx;
				font-weight: normal;
				font-stretch: normal;
				line-height: 11rpx;
				letter-spacing: 0rpx;
				color: #ffffff;
				position: relative;
				top: -100rpx;
			}

			.my__layout__wapper__login__bg__image {
				position: relative;
				top: -40rpx;
				left: 270rpx;
				width: 220rpx;
				height: 250rpx;
			}
		}

		.my__layout__wapper__login {
			box-sizing: border-box;
			padding: 0 41rpx;


			.my__layout__wapper__login__context {
				display: flex;
				align-items: center;
				height: 180rpx;

				.my__layout__wapper__login__defaultIcon {
					margin-right: 30rpx;
					width: 100rpx;
					height: 100rpx;
					border-radius: 50%;
				}

				.my__layout__wapper__login__context__text {
					@include column;
					height: 100rpx;
					justify-content: space-around;

					.my__layout__wapper__login__text {
						font-family: SimHei;
						font-weight: normal;
						font-stretch: normal;
						letter-spacing: 1rpx;
						color: #FFFFFF;

						&.phone {
							font-size: 32rpx;
						}

						&.address {
							font-size: 24rpx;
						}
					}
				}
			}
		}

		.my__layout__wapper__login__funcList {
			overflow-x: hidden;
			background-color: #FFFFFF;
			border-bottom: #EEEEEE solid 1rpx;
			width: 668rpx;
			// height: 720rpx;
			background-color: #ffffff;
			box-shadow: 0rpx 2rpx 21rpx 0rpx rgba(155, 155, 155, 0.43);
			border-radius: 20rpx;
			margin: 0 auto;
			position: relative;
			// top: 180rpx;

			.my__layout__wapper__login__funcList__item {
				height: 122rpx;
				// width: 750rpx;
				@include between;
				padding: 0 42rpx;
				border-top: 0;
				border-bottom: solid 1rpx;
				// border-image: -webkit-linear-gradient(to right, #FFFFFF  6%, #ebebeb 7%, #ebebeb 100%)1 10 1; /* 控制边框颜色渐变 */
				// border-image: -moz-linear-gradient(to right, #FFFFFF  6%, #ebebeb 7%, #ebebeb 100%)1 10 1;
				border-image: linear-gradient(to right, #FFFFFF 6%, #ebebeb 7%, #ebebeb 100%) 1 1 1;
				border-right: 0;

				&:last-child {
					border: 0;
				}

				.my__layout__wapper__login__funcList__item__icon {
					width: 40rpx;
					height: 40rpx;
				}

				.my__layout__wapper__login__funcList__item__text {
					width: 220rpx;
					text-align: left;
					font-family: SimHei;
					font-size: 32rpx;
					font-weight: normal;
					font-stretch: normal;
					letter-spacing: 1rpx;
					color: #333333;
					position: relative;
					right: 140rpx;
				}

				.my__layout__wapper__login__funcList__item__next {
					width: 16rpx;
					height: 26rpx;
				}

			}
		}
	}
</style>
