<template>
	<view class="Journey_page_content">
		<pickerAddress class="picker_now" @change="changeLocation">
			<view class="conten_row">
				<view class="title">目前所在地区：</view>
				<view class="content">{{ nowLocation }}</view>
			</view>
		</pickerAddress>

		
		<view class="conten_row">
			<view class="title">14天内途径地区：</view>
			<view class="content">xx省-xx市-xx区</view>
		</view>
		<view class="past_location_list">
			<view class="past_location_item" v-for="(item, index) in pastLocationList" :key="index"> 
			<view class="item_id">
				<view class="icon_item_id "></view> 
				<view class="item_location">
					{{item.location}}
				</view>
			</view>
			
			<view class="delete_btn" @click="deleteLocation" id="index">
				删除
			</view>
			</view>
		</view>
		<pickerAddress class="picker_past" @change="changePastLocation" >
			<view class="choose_past_location_btn">
				
				<view class="icon-ziyuan">
					
				</view>
			</view>
		</pickerAddress>
		<view class="condition_radio" >
			有无发热、咳嗽等症状
			<radio-group id='condition' name="condition" @change="changeRadio">
				<label >
					<radio :value="true" />
					<text>有</text>
				</label>
				<label>
					<radio :value="false" />
					<text>无</text>
				</label>
			</radio-group>
		</view>
		<view class="condition_radio">
			有无接触疑似或确诊人员
			<radio-group name='contract' id='contract' @change="changeRadio">
				<label>
					<radio :value="true" />
					<text>有</text>
				</label>
				<label>
					<radio :value="false" />
					<text>无</text>
				</label>
			</radio-group>
		</view>
		
		<view class="submit_btn" @click="submit">
			确认提交
		</view>
	</view>
</template>

<script>
import pickerAddress from '../../../components/pickerAddress/pickerAddress.vue';
export default {
	components: {
		pickerAddress
	},
	data() {
		return {
			nowLocation: 'xx省-xx市-xx区',
			pastLocationList: [] , 	//  [{id:0, location:地址}]
			condition:'',
			togertherPerple:'',
		};
	},
	onLoad() {},
	methods: {
		changeLocation(data) { //目前所在地
			var city = data.data;
			this.nowLocation = `${city[0]}-${city[1]}-${city[2]}`;
		},
		changePastLocation(data) { //14天途径
			var city = data.data;
			var nowLocation = `${city[0]}-${city[1]}-${city[2]}`;
			var length=this.pastLocationList.length
			this.pastLocationList.push({ 
				id:length,
				location: nowLocation ,
				});
			console.log(this.pastLocationList);
		},
		deleteLocation(e){ //删除地址按钮
			console.log(e)
			var id = e.currentTarget.dataset.id
			this.pastLocationList.splice(id,1)
		},
		changeRadio(e){ //单选    这里有问题
			console.log(e)
			var id = e.currentTarget.dataset.id
			
			if (id==='condition'){
				this.condition=e.detail.value
				console.log(this.condition)
			}
		},
		submit(){ //提交按钮
			var res={
				nowLocation:this.nowLocation,
				pastLocationList:this.pastLocationList,
				condition:this.condition,
				togertherPeople:this.togertherPerple,
			}
			uni.navigateBack({
				delta:1
			})
			}
			
		}
	}

</script>

<style lang="scss">
		@import '../studentJourney/studentJourney.css';
	
		
		.conten_row{
			padding: 30rpx;
			margin: 20rpx 0;
			display: flex;
			align-items: center;
			background-color: #FFFFFF;
			.content{
				margin-left: 20rpx;
				color: #aeaeae;
			}	
		}
		.past_location_list{
			padding: 5rpx ;
			background-color:	#FFFFFF ;
			
			.past_location_item{
				display: flex;
				align-content: center;
				justify-content: space-between;
				background-color: #FFFFFF;
				padding: 20rpx 30rpx;
				.item_id{
					display: flex;
					align-items: center;
					.icon_item_id{
						margin-right: 20rpx;
						width: 30rpx;
						height: 30rpx;
						border-radius: 100%;
						background-color: #3875f6 ;
					}
				}
				.delete_btn{
					background-color: #febe8f;
					padding: 10rpx 20rpx;
					border-radius: 15rpx;
				}
				
				
			}
		}
		.choose_past_location_btn{
			
			display: flex;
			align-items: center;
			justify-content: center;
			background-color: #FFFFFF;
			.icon-ziyuan{
				margin: 10rpx;
				font-size: 80rpx;
				border-radius: 100%;
				color:  #3875f6;
			}
		}
		.condition_radio{
			display: flex;
			padding: 30rpx 20rpx;
			margin: 20rpx 0;
			background-color: #FFFFFF;
			justify-content: space-between;
			radio-group{
				margin: 0 20rpx;
				label{
					padding: 0 20rpx;
				}
			}
			
		}
		.submit_btn{
			margin: 30rpx;
			background-color: #febe8f ;
			border-radius: 50rpx;
			padding: 20rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			font-weight: 600;
		}
	
	
	
	
	
</style>
