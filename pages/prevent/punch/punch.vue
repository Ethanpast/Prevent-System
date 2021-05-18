<template>
	<view class="page_content">
	<view class="punch_area">
		<view class="time_row">
			<view class="icon">
			</view>
			<view class="today_time">time </view>
		</view>
		<view class="punch_content">
			<view class="content_border">
				<view class="punch_row">
					今日体温<input class="punch_input" type="text" value="" />度
				</view>
				<view class="punch_btn">
					打卡
				</view>
			</view>
			
		</view>
	</view>
	<view class="_past_punch_list">
		<view class="punch_area" v-for="(item, index) in punchList" :key="item.id">
			<view class="time_row">
				<view :class="item.isPunch? 'icon' : 'icon-' ">
				</view>
				<view class="today_time"> {{item.punchTime}} </view>
			</view>
				<view class="punch_content">
					<view class="content_border">
						<view class="punch_row">
							{{item.isPunch?`已打卡体温：${item.temperature}度`:'今日未打卡!'}}
						</view>
						<view class="past_punch_btn">
							<view :class="item.isPunch? 'icon-dui' : 'icon-icon-' ">
								
							</view>
						</view>
					</view>
				</view>
		</view>
	</view>
	
	</view>
</template>

<script>
	
	export default {
		components:{
			
		},
		data() {
			return {
				
				 punchList:[
					 {
						 id:0,
						 isPunch:true,
						 punchTime:'time',
						 temperature:37.6,
						 
					 },
					 {
					 	id:1,
					 	isPunch:false,
					 	punchTime:'time',
					 	temperature:'',
					 						 
					 },{
						 id:2,
						 isPunch:true,
						 punchTime:'time',
						 temperature:'36.6',
					 }
				 ]
			};
		},
		 methods: {
		            
		}
	}
	
</script>

<style lang="scss">
	@import '../punch/punch.css';
	.page_content{
		padding: 20rpx 30rpx;
		.punch_area{
			.time_row{
				display: flex;
				align-items: center;
				.icon{
					width: 28rpx;
					height: 28rpx;
					border-radius: 100%;
					background-color: #0cb50c;
					margin-right: 20rpx;
				}
				.today_time{}
			}
			.punch_content{
				padding: 20rpx 0;
				border-left: 4rpx solid #bfbfbf;
				margin-left: 14rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				height: 180rpx;
				.content_border{
					
					display: flex;
					width: 552rpx;
					height: 140rpx;
					border-radius: 27rpx;
					border: solid 3rpx #bfbfbf;
					background-color: #FFFFFF;
					align-items: center;
					padding: 20rpx 30rpx ;
					justify-content: space-between;
					.punch_row{
						display: flex;
						.punch_input{
							margin: 0 6rpx;
							width: 100rpx;
							border-bottom: 2rpx solid #808080;
						}
					}
					.punch_btn{
						background-color: #f19149;
						padding: 10rpx 20rpx;
						border-radius: 13rpx;
						
						
					}
				}
				
				
			}
		}
		._past_punch_list{
			.punch_area{
				.time_row{
					display: flex;
					align-items: center;
					._icon{
						width: 28rpx;
						height: 28rpx;
						border-radius: 100%;
						background-color: #bfbfbf;
						margin-right: 20rpx;
					}
					.icon{
						width: 28rpx;
						height: 28rpx;
						border-radius: 100%;
						background-color: #0cb50c;
						margin-right: 20rpx;
					}
					.icon-{
						width: 28rpx;
						height: 28rpx;
						border-radius: 100%;
						background-color: #ff0000;
						margin-right: 20rpx;
					}
					.today_time{}
				}
				.punch_content{
					padding: 20rpx 0;
					border-left: 4rpx solid #bfbfbf;
					margin-left: 14rpx;
					display: flex;
					justify-content: center;
					align-items: center;
					height: 180rpx;
					.content_border{
						
						display: flex;
						width: 552rpx;
						height: 140rpx;
						border-radius: 27rpx;
						border: solid 3rpx #bfbfbf;
						background-color: #FFFFFF;
						align-items: center;
						padding: 20rpx 30rpx ;
						justify-content: space-between;
						.punch_row{
							display: flex;
							.punch_input{
								margin: 0 6rpx;
								width: 100rpx;
								border-bottom: 2rpx solid #808080;
							}
						}
						.past_punch_btn{
							.icon-dui{
								font-size: 70rpx;
								color:#0cb50c ;
							}
							.icon-icon-{
								font-size: 80rpx;
								color: #ff0000;
							}
						}
					}
					
					
				}
			}
		}
	}

</style>
