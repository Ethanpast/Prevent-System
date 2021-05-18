<template>
	<view>
		<pickerAddress class="picker_now" @change="changeLocation">
			<view class="conten_row">
				<view class="title">目前所在地区</view>
				<view class="content">{{ nowLocation }}</view>
			</view>
		</pickerAddress>

		
		<view class="conten_row">
			<view class="title">14天内途径地区：</view>
			<view class="content">xx省-xx市-xx区</view>
		</view>
		<view class="past_location_list">
			<view class="past_location_item" v-for="(item, index) in pastLocationList" :key="index">{{ item.location }}</view>
		</view>
		<pickerAddress class="picker_past" @change="changePastLocation">
			<view class="choose_past_location_btn">
				<view class="icon_add">
					
				</view>
			</view>
		</pickerAddress>
		<view class="condition_radio">
			<radio-group name="">
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
		<view class="contrat_radio">
			<radio-group name="">
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
			pastLocationList: []
		};
	},
	onLoad() {},
	methods: {
		changeLocation(data) {
			var city = data.data;
			this.nowLocation = `${city[0]}-${city[1]}-${city[2]}`;
		},
		changePastLocation(data) {
			var city = data.data;
			var nowLocation = `${city[0]}-${city[1]}-${city[2]}`;
			this.pastLocationList.push({ location: nowLocation });
			console.log(this.pastLocationList);
		}
	}
};
</script>

<style lang="scss"></style>
