<template>
	<view class="login">
		<view class="buju">
			<loginbar></loginbar>
		</view>
		<view class="schoolselect box">
			<view class="iconfont icondc-icon-gaoxiao iconbox"></view>
			<view class="select ">
				<picker mode="selector" @change="examinationType" :range="examinationTypeArray">
					<label>{{ examinationTypeArrayType }}</label>
				</picker>
			</view>
		</view>
		<view class="phone box">
			<view class="iconfont iconshoujihao iconbox"></view>
			<view class="input ">
				<input type="number" placeholder="请输入手机号" maxlength="11" v-model="uname" />
			</view>
		</view>
		<view class="authcode box ">
			<view class="iconfont iconyanzhengma iconbox"></view>
			<view class="input ">
				<input type="text" placeholder="验证码" maxlength="6" />
			</view>
		</view>
		<view class="send "><button class="colo">发送验证码</button></view>
		<view class="places">
			14天内前往地区
		</view>
		<view class="content box">
			<pickerAddress @change="change">{{txt}}</pickerAddress>
		</view>
		<view class="loginBtnView denglu "><button class="loginBtn denglu" @tap="lands">立即登录</button></view>
		<view class="message">若登录、注册遇到问题，请<text class="ziti">联系客服</text></view>
	</view>

</template>

<script>
	import loginbar from '../../components/loginbar/loginbar.vue'
	import pickerAddress from '../../components/pickerAddress/pickerAddress.vue'
	export default {
		components: {
			loginbar,
			pickerAddress
		},
		data() {
			return {
				examinationTypeArray: ['所处高校', '浙江大学', '嘉兴学院', '宁波大学', '浙江工商大学'],
				examinationTypeIndex: 0,
				examinationTypeArrayType: '所处高校',

				txt: '请选择地址',
			}
		},
		onLoad() {

		},
		methods: {
			examinationType(e) {
				// 获取点击的值并修改显示
				this.examinationTypeIndex = e.target.value;
				this.examinationTypeArrayType = this.examinationTypeArray[this.examinationTypeIndex];
			},

			change(data) {
				this.txt = data.data.join('')
				onsole.log(data.data.join(''))
			}
		}
	}
</script>

<style>
	.login {
		display: grid;
		height: auto;
		grid-template-columns: 50% 50%;
		grid-template-rows: 35px 40px 40px 40px 40px 40px 35px 1fr;
		row-gap: 20px;
		column-gap: 10px;
	}

	.buju {
		grid-row: 1 / 2;
		grid-column: 1/3;
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
	
	.schoolselect {
		grid-row: 2 / 3;
		grid-column: 1/3;
	}

	.phone {
		grid-row: 3 / 4;
		grid-column: 1/3;
	}
	
	.authcode{
		grid-row: 4 / 5;
		grid-column: 1/2;
		display: flex;
		border: solid;
		display: flex;
		width: 70%;
		margin-left: 19%;
		align-items: center;
		background-color: #f5f6f6;
		border-radius: 5px;
	}
	.send{
		grid-row: 4 /5;
		grid-column: 2/3;
		width: 70%;
		height: 40px;
		margin-top: 0.5rem;
	}
	.colo{
		background-color:#5280c1 ;
		color: #FFFFFF;
	}
	.places{
		grid-row: 5 / 6;
		grid-column: 1/2;
		height: 40px;
		font-size: 18px;
		width: 70%;
		margin-left: 19%;
		margin-top: 2rem;
	}
	.content{
		grid-row: 6/7;
		grid-column: 1/3;
		align-self: flex-start;
	}
	.loginBtnView{
		width: 80%;
		height: 35px;
	}
	.denglu {
		grid-row: 7/ 8;
		grid-column: 1/3;
		background-color: #5280c1;
		justify-self:center;
		border-radius: 5px;
		color: #FFFFFF;
	}
	.message {
		grid-column: 1/3;
		grid-row: 8/9;
		align-self: end;
		justify-self: center;
		color: #a2a3a3;
		margin-top: 17rem;
	}
	.ziti {
		font-weight: 700;
		color: black;
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
