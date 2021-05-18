<template>
	<view class="person">
		<view class="personal_message" v-for="(item) in personlist" >
			<view class="personal_infomation_title">{{item.mingcheng}}</view>
			<view class="personal_infomation">{{item.miaoshu}}</view>
		</view>
		<u-gap></u-gap>
		<view class="danwei">
			单位
		</view>
		<view class="personal_soicial_message">
			<view class="personal_school">防疫大学</view>
			<view class="personal_id">学号/工号：00179679</view>
		</view>
		<u-gap></u-gap>
		<view class="exit_login">退出登录</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				personlist: [
					{	
						id:'0',
						mingcheng:'姓名',
						miaoshu:'xiaojin',
					},
					{
						id:'1',
						mingcheng:'性别',
						miaoshu:'男',
					},
					{	
						id:'2',
						mingcheng:'手机号',
						miaoshu:'35114315325',
					}
				]
			}
		},
		methods: {

		}
	}
</script>

<style>
	.personal_message{
		height: 80rpx;
		background-color: #266AF0 ;
		margin-bottom: 20rpx;
		display: flex;
		font-size: 40rpx;}
	
	.personal_infomation_title{
		margin-right: 40rpx;
	}
	
	.personal_soicial_message{
		height: 100rpx;
		background-color: #2979FF;
	}
</style>
