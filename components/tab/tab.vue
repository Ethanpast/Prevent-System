<template>
	<view class="tab">
			<view class="home smalltab">
				<view class="img">
					<image  src="../../static/home/icon1@2x.png"></image>
				</view>
				<view>首页</view>
			</view>
			<view class="antiepidemic smalltab">
				<view class="img">
					<image  src="../../static/home/icon2@2x.png"></image>
				</view>
				<view>防疫</view>
		
			</view>
			
			<view class="study smalltab">
				<view class="img">
					<image  src="../../static/home/icon3@2x.png"></image>
				</view>
				<view>学习</view>
			</view>
			
			<view class="My smalltab">
				<view class="img">
					<image  src="../../static/home/icon4@2x.png"></image>
				</view>
				<view>我的</view>
			</view>

	</view>
</template>

<script>
	export default {
		name:"tab",
		data() {
			return {
				
			};
		}
	}
</script>

<style>
	.tab{
		height: 5rem;
		width: 100%;
		display: flex;
		position: fixed;
		bottom: 0;
		background-color: dodgerblue;
	}
	
	.smalltab{
		flex: 1;
		width: 25%;
		display: flex;
		flex-direction: column;
		align-items: center;
		position: relative;
		top: 0.5rem;
	}
	
	.img image {
		width: 2rem;
		height: 2rem;
	}
	
	
</style>
