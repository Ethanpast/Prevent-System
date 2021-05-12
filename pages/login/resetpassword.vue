<template>
	<view>
		<view class="reset">
			密码重置
		</view>
		<view class="text">
			重置密码
		</view>
		<view class="box">
			<view class="iconfont iconmima iconbox"></view>
			<view class="input ">
				<input type="text" placeholder="请输入" />
			</view>
		</view>
		<view class="text">
			再次输入密码
		</view>
		<view class="sure box">
			<view class="iconfont iconmima iconbox"></view>
			<view class="input ">
				<input type="text" placeholder="请输入" />
			</view>
		</view>
		<view class="done">
			完成
		</view>
		<view class="message">若登录、注册遇到问题，请<text class="ziti">联系客服</text></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style>
	.reset{
		height: 3rem;
		background-color: #f5f6f6;
		text-align: center;
		font-size: 25px;
		line-height: 3rem;
	}
	.box {
		display: flex;
		width: 80%;
		height: 40px;
		margin-top: 2rem;
		border: solid;
		margin: 15rpx auto;
		align-items: center;
		background-color: #f5f6f6;
		border-radius: 5px;
	}
	.text{
		margin-top: 2rem;
		margin-left: 10%;
		font-size: 20px;
	}
	.done{
		height: 3rem;
		width: 80%;
		background-color: #5280c1;
		border-radius: 8px;
		font-size: 25px;
		text-align: center;
		margin: 15rpx auto;
		line-height: 3rem;
		margin-top: 2rem;
		color: #FFFFFF;

	}
	.message{
		margin-top: 21rem;
		margin-left: 15%;
		color: #a2a3a3;
	}
	.ziti {
		color: black;
		font-weight: 700;
	}

	.iconbox {
		width: 60rpx;
		height: 60rpx;
		border-right: 1px solid;
	}

	.iconfont {
		width: 60rpx;
		height: 60rpx;
		font-size: 60rpx;
	}
	
</style>
