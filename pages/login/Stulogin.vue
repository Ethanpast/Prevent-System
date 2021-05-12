<template>
	<view class="login">
		<view class="buju">
			<loginbar></loginbar>
			<view class="schoolselect box">
				<view class="iconfont icondc-icon-gaoxiao iconbox"></view>
				<view class="select ">
					<picker mode="selector" @change="examinationType" :range="examinationTypeArray">
						<label>{{ examinationTypeArrayType }}</label>
					</picker>
				</view>
			</view>
			<view class="number box">
				<view class="iconfont iconyonghu iconbox"></view>
				<view class="input ">
					<input type="number" placeholder="请输入学号/工号" v-model="uname" />
				</view>
			</view>
			<view class="password box">
				<view class="iconfont iconmima iconbox"></view>
				<view >
					<input type="password" placeholder="请输入密码" v-model="passw" />
				</view>
			</view>
		</view>


		<view class="authcode">
			<view class="iconfont iconyanzhengma iconbox"></view>
			<view >
				<input type="text" placeholder="验证码" maxlength="4" />
			</view>
		</view>
		<imgcode class="imgcodes"></imgcode>



		<checkbox-group class="jizhu">
			<label>
				<checkbox value="psw" :checked='rememberPsw' @tap="rememberPsw =! rememberPsw" color="#09CC86" />
				记住密码
			</label>
		</checkbox-group>
		<view class="login-tip" >
			<navigator url="resetpassword">
				<text class="wangji" @tap="reset">忘记密码</text>
			</navigator>
			
		</view> 


		<view class="loginBtnView denglu "><button class="loginBtn denglu" @tap="lands">立即登录</button></view>      
		<view class="message">若登录、注册遇到问题，请<text class="ziti">联系客服</text></view>
	</view>
</template>

<script>
	import loginbar from '../../components/loginbar/loginbar.vue'
	import imgcode from '../../components/imgcode/imgcode.vue'

	export default {
		components: {
			loginbar,
			imgcode
		},

		data() {
			return {
				examinationTypeArray: ['隶属高校', '浙江大学', '嘉兴学院', '宁波大学', '浙江工商大学'],
				examinationTypeIndex: 0,
				examinationTypeArrayType: '隶属高校',
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
		grid-row: 1 / 5;
		grid-column: 1/3;
	}

	.loginBtnView {
		width: 80%;
	}

	.denglu {
		grid-column: 1/3;
		grid-row: 7 / 8;
		justify-self: center;
		background-color: #5280c1;
		border-radius: 8px;

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

	.authcode {
		grid-column: 1/2;
		grid-row: 5/6;
		display: flex;
		border: solid;
		width: 70%;
		margin-left: 19%;
		align-items: center;
		background-color: #f5f6f6;
		border-radius: 5px;
	}

	.imgcodes {
		grid-column: 2/3;
		grid-row: 5/6;
	}

	.jizhu {
		width: 70%;
		margin-left: 19%;
		grid-column: 1/2;
		grid-row: 6/7;
	}

	.login-tip {
		width: 70%;
		margin-left: 19%;
		grid-column: 2/3;
		grid-row: 6/7;
	}

	.wangji {
		border-bottom: solid #bfc9e6;
	}

	.message {
		color: #a2a3a3;
		grid-column: 1/3;
		grid-row: 8/9;
		align-self: end;
		justify-self: center;
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
