<template>
	<view class="loginbar clear">
		<view class="text clear" @tap="stu">
			学号/工号
		</view>
		<view class="text clear" @tap="visit">
			游客
		</view>
	</view>
</template>

<script>
	export default {
		name:"loginbar",
		data() {
			return {
				
			};
		},
		methods:{
			stu(){
				uni.redirectTo({
					url:'../../pages/login/Stulogin'
				})
			},
			visit(){
				uni.redirectTo({
					url:'../../pages/login/Visitlogin'
				})
			}
		}
	}
</script>

<style>
	.loginbar{
		width: 100%;
		height: 35px;
		line-height: 35px;
		border-bottom:  solid #d2cce6;
		background-color: #f8f8f8;
		grid-area: header;
	}
	.text{
		float: left;
		width: 50%;
		color: #808080;
		text-align: center;
		padding-bottom: 2rem;
		font-style:Fantasy;
		font-size: large;
	}
	
	
</style>
