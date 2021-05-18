<template>
	<view>
		<view class="list_area">
			<view class="area_title">
				<view class="deliver" style="width: 9rpx;height: 27rpx;background-color: #3875f6;border-radius: 4rpx;margin-right: 10rpx;"></view>
				疫情高危地区返校
			</view>
			<view class="area_content">
				<view class="search_row">
					<view class="city_route">{{ txt }}</view>
					<view class="picker_"><pickerAddress class="picker_type" @change="change">更改地址</pickerAddress></view>
				</view>

				<view class="student_list" v-for="(item, index) in studentList" :key="item.id">
					<view class="student_info">
						<image :src="item.imgSrc" mode="widthFix"></image>
						<view class="student_class">{{ item.class }}</view>
						<view class="student_name">{{ item.stuName }}</view>
					</view>
					<view :class="item.condition">{{ item.condition === 'normal' ? '体温正常' : '体温异常' }}</view>
				</view>
				<view class="show_more">查看更多</view>
			</view>
			<view class="area_title">
				<view class="deliver" style="width: 9rpx;height: 27rpx;background-color: #3875f6;border-radius: 4rpx;margin-right: 10rpx;"></view>
				未带口罩学生行程
			</view>
			<view class="area_content">
				<view class="search_row">
					<view class="time_picker">
						<picker class="date_Picker" mode="date" :start="startDate" :end="endDate" @change="onConfirm" enable-flex="true">
							<view class="date_Picker">
								<view class="icon-time"></view>
								{{ pickerDate }}
								<view class="icon-xia"></view>
							</view>
						</picker>
					</view>

					<view class="picker_">
						<picker :range="locationRange" @change="changelocation" range-key="name">
							<view class="picker_content">
								<view class="icon-didian"></view>
								{{ location }}
								<view class="icon-xia"></view>
							</view>
						</picker>
					</view>
				</view>

				<view class="student_list" v-for="(item, index) in studentList" :key="item.id">
					<view class="student_info">
						<image :src="item.imgSrc" mode="widthFix"></image>
						<view class="student_class">{{ item.class }}</view>
						<view class="student_name">{{ item.stuName }}</view>
					</view>
					<view class="icon"><view class="icon-gengduo"></view></view>
				</view>
				<view class="show_more">查看更多</view>
			</view>
		</view>
	</view>
</template>

<script>
import pickerAddress from '../../../components/pickerAddress/pickerAddress.vue';

export default {
	components: {
		pickerAddress,

	},
	data() {
		return {
			txt: '地址',
			startDate: '2019-12-09',
			endDate: '',
			pickerDate: '',
			studentList: [
				{
					id: 0,
					class: '服饰172',
					stuName: '戴成雨',
					condition: 'normal',
					imgSrc: '../../../static/StudentLtinerary/people1.png'
				},
				{
					id: 1,
					class: '服饰172',
					stuName: '戴成雨',
					condition: 'normal',
					imgSrc: '../../../static/StudentLtinerary/people1.png'
				},
				{
					id: 2,
					class: '服饰172',
					stuName: '戴成雨',
					condition: 'normal',
					imgSrc: '../../../static/StudentLtinerary/people1.png'
				},
				{
					id: 3,
					class: '服饰172',
					stuName: '戴成雨',
					condition: 'bad',
					imgSrc: '../../../static/StudentLtinerary/people1.png'
				}
			],
			locationRange: [
				{
					id: 0,
					name: '明心楼'
				},
				{
					id: 1,
					name: '明月楼'
				}
			],
			location: '明德楼'
		};
	},

	methods: {
		onLoad() {
			this.now();
		},
		now() {
			var today = new Date();

			this.pickerDate = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
			this.endDate = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
			console.log(this.pickerDate);
		},
		change(data) {
			var city = data.data;
			this.txt = `${city[0]}-${city[1]}-${city[2]}`;
			console.log(this.txt);
		},
		onConfirm(e) {
			this.pickerDate = e.target.value;
		},
		changelocation(e) {
			var locationRange = this.locationRange;
			this.location = locationRange[e.detail.value].name;
		}
	}
};
</script>

<style lang="scss">
@import '../routeQuery/routeQuery.css';
.list_area {
	padding: 20rpx 30rpx 100rpx 30rpx;
	.area_title {
		display: flex;
		align-items: center;
		margin: 30rpx 0;
	}
	.area_content {
		border-radius: 27rpx;
		background-color: #fff;
		padding: 20rpx 0;
		.search_row {
			padding: 20rpx 30rpx;
			display: flex;
			justify-content: space-between;
			.city_route {
			}
			.time_picker {
				border-right: 2rpx solid #e5e5e5;
				padding-right: 20rpx;
				.date_Picker {
					display: flex;
					align-items: center;
					.icon-time {
						margin-right: 20rpx;
						font-size: 50rpx;
					}
					.icon-xia {
						margin-left: 20rpx;
						font-size: 50rpx;
					}
				}
			}
			.picker_ {
				.picker_type{
					font-weight: 600;
					color:#bbbec4 ;
				}
				.picker_content {
					display: flex;
					.icon-didian {
						margin-right: 20rpx;
						font-size: 50rpx;
					}
					.icon-xia {
						margin-left: 20rpx;
						font-size: 50rpx;
					}
				}
			}
		}
		.student_list {
			padding: 20rpx 30rpx;
			border-bottom: 2rpx solid #e5e5e5;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.student_info {
				display: flex;
				align-items: center;
				image {
					width: 74rpx;
				}
				.student_class {
					margin: 0 30rpx;
				}
				.student_name {
				}
			}
			.normal {
				color: #00ab0c;
			}
			.bad {
				color: #ff0000;
			}
		}
		.icon-gengduo{
			font-size: 50rpx;
		}
	}
	.show_more {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 20rpx;
		font-size: 30rpx;
		font-weight: 600;
	}
}
</style>
