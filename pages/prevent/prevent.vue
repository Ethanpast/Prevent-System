<template>
	<view>
		<view class="my__layout__wapper">
			<view class="my__layout__wapper_title"><view class="my__layout__wapper__title__text">校园防疫</view></view>
		</view>
		<view class="prevent_content">
			<image src="../../static/prevention/fy_xiaoditu.png" mode="widthFix"></image>
			<view class="prevent_function_area">
				<view class="location_list">
						消毒区域
					<view class="location_row">
						<view class="location_type" style="color: #ff0000;">
							未消毒
						</view>
						<view class="location_item" v-for="(item, index) in redlocationList" :key="item.id">
							{{item.locationName}}
						</view>
						
					</view>
					<view class="location_row">
						<view class="location_type" style="color: #00ab0c;">
							已消毒
						</view>
						<view class="location_item" v-for="(item, index) in redlocationList" :key="item.id">
							{{item.locationName}}
						</view>
					</view>
				</view>
				<view class="prevent_function_title_row">
					<view class="deliver" style="width: 9rpx;height: 27rpx;background-color: #3875f6;border-radius: 4rpx;margin-right: 10rpx;"></view>
					<view class="prevent_function_title">防疫功能</view>
				</view>
				<view class="prevent_function_list">
					<view class="prevent_function_item" v-for="(item, index) in functionList" :key="item.id" v-if='item.permission <= userPerssion' @click="funcListClick(item)">
						<image :src="item.imgSrc" mode="widthFix"></image>
						<view class="prevent_function_item_name">{{ item.name }}</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			userPerssion:1,
			redlocationList:[
				{
					id:0,
					locationName:'博雅楼'
				},{
					id:1,
					locationName:'博雅楼'
				},{
					id:2,
					locationName:'博雅楼'
				},{
					id:3,
					locationName:'博雅楼'
				},{
					id:4,
					locationName:'博雅楼'
				},{
					id:5,
					locationName:'博雅楼'
				},{
					id:6,
					locationName:'博雅楼'
				}
			],
			functionList:[
				{
					id:0,
					permission:0,
					name:"体温打卡",
					imgSrc:'../../static/prevention/icon1.png',
					func: function() {
						uni.navigateTo({
							url: './punch/punch'
						})
					},
				},
				{
					id:1,
					permission:0,
					name:"健康码",
					imgSrc:'../../static/prevention/icon2.png'
				},
				{
					id:2,
					permission:0,
					name:"口罩购买",
					imgSrc:'../../static/prevention/icon3.png'},
				{
					id:3,
					permission:0,
					name:"14天行程",
					imgSrc:'../../static/prevention/icon4.png'
				},
				{
					id:4,
					permission:0,
					name:"通信证",
					imgSrc:'../../static/prevention/icon5.png'
				},
				{
					id:5,
					permission:1,
					name:"学生行程查询",
					imgSrc:'../../static/prevention/icon6.png',
					func: function() {
						uni.navigateTo({
							url: './routeQuery/routeQuery'
						})
					}
				},
				{
					id:6,
					permission:1,
					name:"监控查询",
					imgSrc:'../../static/prevention/icon7.png'
				},
			],
		};
	},
	methods: {
		funcListClick(item) {item.func();},
	}
};
</script>

<style lang="scss">
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

		background: linear-gradient(top right, #87cefa, #3762ec);
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
}
.prevent_content{
	display: flex;
	justify-content: center;
	flex-direction: column;
	padding: 30rpx 30rpx;
	image{
		width: 690rpx;
	}
	.prevent_function_area{
		margin-top: 30rpx;
		
		.location_list{
			font-weight: 500;
			padding: 20rpx;
			
			background-color: #ffffff;
			border-radius: 27rpx;
			border:  4rpx solid rgba(0, 0, 0, 0.03);
			
			
			.location_row{
				margin: 20rpx 0;
				display: flex;
				flex-direction: row;
				flex-wrap: wrap;
				.location_type{
					font-weight: 500;
					font-size: 24rpx;
					margin-right: 20rpx;
				}
				.location_item{
					margin-right: 20rpx;
					font-size: 24rpx;
					font-weight: 400;
					display: flex;
					flex-wrap: nowrap;
				}
			}
		}
		
		.prevent_function_title_row{
			padding: 20rpx 0;
			display: flex;
			align-items: center;
			.prevent_function_title{
				display: flex;
				
			}
		}
		.prevent_function_list{
			
			display: flex;
			flex-wrap: wrap;
			
			.prevent_function_item{
				
				display: flex;
				flex-direction: column;
				justify-content: center;
				width: 187rpx;
					height: 187rpx;
				align-items: center;
				background-color: #fff;
				border-radius: 27rpx;
				border: 2rpx solid  rgba(0, 0, 0, 0.03);
				margin: 30rpx 30rpx 0 30rpx ;
				image{
					width:70rpx ;
				}
				
				.prevent_function_item_name{
					margin-top: 20rpx;
					font-size: 24rpx;
				}
			}
			.prevent_function_item:nth-child(3n){
				margin: 30rpx 0rpx 0 30rpx ;
			}
			.prevent_function_item:nth-child(3n-2){
				margin: 30rpx 30rpx 0 0 ;
			}
		}
	}
}
</style>
