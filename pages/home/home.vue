<template>
	<view class="home">
		<view class="my__layout__wapper">
			<view class="my__layout__wapper__login__bg">
				<text class="my__layout__wapper__login__bg__text">疫校园</text>
			</view>
		</view>
		<view class="swipe">
			<u-swiper :list="swiperList"></u-swiper>
		</view>
		<view class="wrap">
			<view class="wenben">新冠肺炎数据</view>
			<u-row gutter="0" justify="between" align="bottom">
				<u-col span="3">
					<view class="yiqingnumber " style="color:#2d6b00 ;">0</view>
				</u-col>
				<u-col span="2">
					<view class="yiqingnumber " style="color:#ff8400 ;">17</view>
				</u-col>
				<u-col span="3">
					<view class="yiqingnumber " style="color:#ff0000 ;">8</view>
				</u-col>
				<u-col span="2">
					<view class="yiqingnumber " style="color:#ff0000 ;">376</view>
				</u-col>
			</u-row>
			<u-row gutter="0" justify="between" align="bottom">
				<u-col span="3">
					<view class="demo-layout bg-purple-light">浙江新增</view>
				</u-col>
				<u-col span="2">
					<view class="demo-layout bg-purple-dark">国内新增</view>
				</u-col>
				<u-col span="3">
					<view class="demo-layout bg-purple-light">境外输入新增</view>
				</u-col>
				<u-col span="2">
					<view class="demo-layout bg-purple-dark">现存确诊</view>
				</u-col>
			</u-row>
		</view>

		<view class="content-div">
			<view class="uswipetitle">
				<u-tabs-swiper ref="uTabs" :list="tabSwiperlist" :current="current" @change="tabsChange"
					:is-scroll="false">
				</u-tabs-swiper>
			</view>
			<swiper :current="swiperCurrent" @transition="transition" @animationfinish="animationfinish">
				<swiper-item class="swiper-item">
					<scroll-view scroll-y @scrolltolower="onreachBottom">

						<view class="news">
							<view class="xuexiaotitle">我校成立“民族精神+”课程思政教学研究中心</view>
							<view class="xuexiaocontent">
								我校成立“民族精神+”课程思政教学研究中心
							</view>
							<view class="xuexiaoziyunxianshi">
								<view class="xuexiaoziyunicon">
									<image class="zixunicon" src="../../static/home/icon9@2x.png"></image>
									<view class="zixun">资讯</view>
								</view>
								<view class="swiper_date ">1天前</view>
							</view>

						</view>

					</scroll-view>

				</swiper-item>
				<swiper-item class="swiper-item">
					<scroll-view scroll-y @scrolltolower="onreachBottom">
						<view>
							nihaohfgd
						</view>
					</scroll-view>

				</swiper-item>
				<swiper-item class="swiper-item">
					<scroll-view scroll-y @scrolltolower="onreachBottom">
						<view>
							nihaohfgd
						</view>
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>



	</view>
</template>

<script>
	import uSwiper from '../../uview-ui/components/u-swiper/u-swiper.vue'
	import uNavbar from '../../uview-ui/components/u-navbar/u-navbar.vue'
	import uRow from '../../uview-ui/components/u-row/u-row.vue'
	import uCol from '../../uview-ui/components/u-col/u-col.vue'
	import uTabsSwiper from '../../uview-ui/components/u-tabs-swiper/u-tabs-swiper.vue'
	export default {
		components: {
			uSwiper,
			uNavbar,
			uRow,
			uCol,
			uTabsSwiper
		},
		data() {
			return {
				swiperList: [{
						image: '../../../static/home/picture.png',
						title: 'nihao'
					},
					{
						image: '../../../static/home/picture.png',
						title: 'nihao'
					}

				],
				tabSwiperlist: [{
					name: '学校资讯'
				}, {
					name: '疫情资讯'
				}, {
					name: '学校通知'
				}],
				current: 0,
				swiperCurrent: 0,
			};
			newslist: [{
					title: 'hasdghagdhjkga'
				},
				{
					title: 'gadfgdfgfgdg'
				},
				{
					title: 'hasdghagdhjkga'
				},
				{
					title: 'hasdghagdhjkga'
				},
				{
					title: 'hasdghagdhjkga'
				},
				{
					title: 'hasdghagdhjkga'
				},
			]
		},
		methods: {
			// tabs通知swiper切换
			tabsChange(index) {
				this.swiperCurrent = index;
			},
			// swiper-item左右移动，通知tabs的滑块跟随移动
			transition(e) {
				let dx = e.detail.dx;
				this.$refs.uTabs.setDx(dx);
			},
			// 由于swiper的内部机制问题，快速切换swiper不会触发dx的连续变化，需要在结束时重置状态
			// swiper滑动结束，分别设置tabs和swiper的状态
			animationfinish(e) {
				let current = e.detail.current;
				this.$refs.uTabs.setFinishCurrent(current);
				this.swiperCurrent = current;
				this.current = current;
			},
			// scroll-view到底部加载更多
			onreachBottom() {

			}
		}

	}
</script>

<style>
	/* 	.home{
		display: flex;
		flex-direction: column;
	} */
	.my__layout__wapper {
		overflow: hidden;
		width: 750rpx;
		// background-color: $uni-color-bgc;
		// $padding-content-xg
		box-sizing: border-box;
		padding-top: 165rpx;
	}

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
	}
	.uswipetitle{
		margin-top: 20rpx;
		width: 677rpx;
		margin-left: 36.5rpx;
		border: 3rpx solid #eeeeee ;
			border-radius: 35rpx;
	}
	.swipe {
		margin: 0 auto;
		width: 677rpx;
		height: 295rpx;
	border-radius: 27rpx;
		
	}

	.wrap {
		margin: 0 auto;
		width: 677rpx;
		height: 187rpx;
		background-color: #ffffff;
		border-radius: 27rpx;
		border: 3rpx solid #eeeeee ;
	}

	.yiqingnumber {
		height: 35rpx;
		margin-top: 20rpx;
		font-family: MicrosoftYaHei;
		font-size: 35rpx;
	}

	.demo-layout {
		font-family: MicrosoftYaHei;
		height: 50rpx;
		font-size: 27rpx;
		font-weight: 900;
		margin-top: 20rpx;
	}



	.content-div {
		width: 677rpx;
		height: 751rpx;
	}

	.swiper-div {
		display: flex;
		width: 677rpx;
		height: 751rpx;
		margin-bottom: 5rpx;
	}

	.news {
		height: 150rpx;
		width: 677rpx;
		font-family: MicrosoftYaHei;
		font-size: 23rpx;
		margin-left: 36.5rpx;
		border: 3rpx solid #eeeeee ;
	}

	.xuexiaotitle {
		font-size: 27rpx;
		font-weight: 700;
		margin: 10rpx 0;
	}

	.xuexiaocontent {
		font-weight: 700;
		
	}
	.xuexiaoziyunxianshi{
		display: flex;
		justify-content:space-between;
	}
	.xuexiaoziyunicon{
		display: flex;
		margin-top: 10rpx;
		align-items: center;
	}
	.zixunicon{
		width: 21rpx;
		height: 21rpx;
		margin-right:10rpx ;
	}
	.zixun{
		color: #c3c3c3;
	}
	.swiper_date{
		margin-right: 50rpx;
		color: #c3c3c3;
	}
</style>
