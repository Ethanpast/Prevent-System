<template>
	<view class="my__layout__wapper">
		<view class="my__layout__wapper_title">
			<view class="my__layout__wapper__title__text">疫校园</view>
		</view>
		<view class="personshow" @click="gopersonal()">
			<view class="touxiang">
				<u-avatar :src="src" mode="circle" size="large"></u-avatar>
			</view>
			<view class="name">甄可爱</view>
			<view class="school">防疫大学</view>
			<view class="banji">防疫191</view>
			<image src="../../static/person/icon1@2x.png" class="personshowicon"></image>
		</view>
		<view class="kouzhaotixing">
			未佩戴口罩提醒
			<view class="xiaoxitixing" v-for="(item,index) in tixingList" :key='item.id'>
				<view class="mark"></view>
				<view class="tixingplace">  您于{{item.place}}未合理佩戴口罩，请以正确方式佩戴</view>
				<view class="tixingdata">{{item.data}}</view>
			</view>
		</view>
		<view class="my__layout__wapper__funcList">
			<view class="my__layout__wapper__funcList__item" v-for="(item, index) in funcList" :key='item.id'
				@click="funcListClick(item)">
				<image class="my__layout__wapper__funcList__item__icon" :src="item.icon" mode=""></image>
				<text class="my__layout__wapper__funcList__item__text">{{item.name}}</text>
				<image src="../../static/person/icon1@2x.png" class="my__layout__wapper__funcList__item__next"
					mode="">
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

				//个人头像
				src: '../../static/yijin.jpg',
				// 我的服务功能列表
				funcList: [{
						id: 0,
						name: '消息通知',
						icon: require('../../static/person/icon2@2x.png'),
						func: function() {
							uni.navigateTo({
								url: '../message/message'
							})
						},
					},
					{
						id: 1,
						name: '行程卡',
						icon: require('../../static/person/icon3@2x.png'),
						func: function() {
							uni.navigateTo({
								url: '../xingchengka/xingchengka'
							})
						},
					},
					{
						id: 2,
						name: '校园信息',
						icon: require('../../static/person/icon4@2x.png'),
						func: function() {
							uni.navigateTo({
								url: '../schoolmessage/schoolmessage'
							})
						},
					},
					{
						id: 3,
						name: '订单信息',
						icon: require('../../static/person/icon5@2x.png'),
						func: function() {
							uni.navigateTo({
								url: '../buymessage/buymessage'
							})
						},
					},
					{
						id: 4,
						name: '好友通讯录',
						icon: require('../../static/person/icon7@2x.png'),
						func: function() {
							uni.navigateTo({
								url: '../friendlist/friendlist'
							})
						},
					},
					{
						id: 5,
						name: '设置',
						icon: require('../../static/person/icon6@2x.png'),
						func: function() {
							uni.navigateTo({
								url: '../setting/setting'
							})
						},
					}
				],
				//口罩提醒
				tixingList: [{
					id: 0,
					place: '崇德楼A401',
					data: '1天前'
				},
				{
					id: 1,
					place: '崇德楼B234',
					data: '2天前'
				}]
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
			gopersonal(){
				uni.navigateTo({
					url:'../personal/personal'
				})
			}


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
		display: flex;
		flex-direction: column;
		overflow: hidden;
		width: 750rpx;
		// background-color: $uni-color-bgc;
		// $padding-content-xg
		box-sizing: border-box;
		padding-top: 165rpx;

		.my__layout__wapper_title {
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

			.my__layout__wapper__title__text {
				font-family: MicrosoftYaHei;
				font-size: 34rpx;
				font-weight: normal;
				font-stretch: normal;
				line-height: 11rpx;
				letter-spacing: 0rpx;
				color: #ffffff;
				position: relative;
				top: -230rpx;
			}
		}

		.personshow {
			display: grid;
			grid-template-columns: 250rpx repeat(3, 1fr);
			grid-template-rows: 110.5rpx 110.5rpx;
			height: 221rpx;
			background-color: #FFFFFF;
		}

		.touxiang {
			grid-row: 1 / 3;
			grid-column: 1/2;
			justify-self: center;
			align-self: center;
		}

		.name {
			grid-row: 1 / 2;
			grid-column: 2/3;
			font-family: MicrosoftYaHei;
			font-size: 40rpx;
			font-weight: 700;
			align-self: end;
		}

		.school {
			grid-row: 2 / 3;
			grid-column: 2/3;
			color: #7c7c7c;
			font-size: 29rpx;
		}

		.banji {
			grid-row: 2 / 3;
			grid-column: 3/4;
			color: #7c7c7c;
			font-size: 29rpx;
		}

		.personshowicon {
			grid-row: 1 / 3;
			grid-column: 4/5;
			width: 25rpx;
			height: 43rpx;
			align-self: center;
			margin-left: 100rpx;
		}

		.kouzhaotixing {
			background-color: #FFFFFF;
			margin: 30rpx 0;
			font-size: 29rpx;
			font-weight: 700;

			.xiaoxitixing {
				width: 690rpx;
				height: 10rpx;
				@include between;
				padding: 15rpx 0rpx;
				font-size: 21rpx;
				font-weight: normal;
				margin-left: 30rpx;
				border-radius: 5rpx;
				color: #7c7c7c;
			}
			.mark {
				width: 10rpx;
				height: 29rpx;
				background-color: #ff0000;
				border-radius: 5rpx;
			}
			
			.tixingplace{
				margin-left: -40rpx;
			}
		}


		.my__layout__wapper{
			box-sizing: border-box;
			padding: 0 41rpx;


			.my__layout__wapper__context {
				display: flex;
				align-items: center;
				height: 180rpx;

				.my__layout__wapper__defaultIcon {
					margin-right: 30rpx;
					width: 100rpx;
					height: 100rpx;
					border-radius: 50%;
				}

				.my__layout__wapper__context__text {
					@include column;
					height: 100rpx;
					justify-content: space-around;

					.my__layout__wapper__text {
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

		.my__layout__wapper__funcList {
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

			.my__layout__wapper__funcList__item {
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

				.my__layout__wapper__funcList__item__icon {
					width: 40rpx;
					height: 40rpx;
				}

				.my__layout__wapper__funcList__item__text {
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

				.my__layout__wapper__funcList__item__next {
					width: 16rpx;
					height: 26rpx;
				}

			}
		}
	}
</style>
