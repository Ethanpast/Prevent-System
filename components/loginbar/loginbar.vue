<template>
	<view class="loginbar">
		<view class="text clear">
			学号/工号
		</view>
		<view class="text clear">
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
		}
	}
</script>

<style>
	.loginbar{
		width: 100%;
		position: fixed;
		left: 0px;
		height: 35px;
		line-height: 35px;
	}
	.text{
		float: left;
		width: 50%;
		color: #808080;
		text-align: center;
	}
	
	/*此处设置清除浮动代码*/
	 .clear::after,
	 .clear::before {
	        content: "";
	        display: block;
	         clear: both;
	  }
</style>
