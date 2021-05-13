import { baseUrl } from '../config/api';

const http = {
	// 基础url
	baseUrl,
	timer: null, 
	// 提示延迟时间
	toastDuration: 2000, 
	// 请求超时时间
	timeout: 10000,
	/*
	 *options: {
		 url, 
		 method = 'GET', 
		 contentType = 'application/json'     'content-type'常用的类型： 'application/json',   'application/x-www-form-urlencoded',  'multipart/form-data'(form-data格式不需要设置)...
		 data = {}, 
		 loading = false, 
		 loadingText, 
		 errMsg, 
		 callBack
	 }
	*/
	request(options) {
		return new Promise((resolve, reject) => {
			const e = this;
			const { url, method = 'GET', contentType = 'application/json', data = {}, loading = false, loadingText, errMsg, callBack } = options;
			const dataStorage = e.getStorage('storage_key');
			loading && uni.showLoading({ title: (loadingText === '' || !!loadingText) ? loadingText : '加载中', mask: true });
			uni.request({
				url: e.baseUrl + url,
				data,
				header: e.setHeader(url, dataStorage.token, contentType),
				method: method.toUpperCase(),
				timeout: e.timeout,
				success: (res) => {
					if(res && res.data && res.data.success) {
						resolve(res.data.result || true);
					}else {
						reject(res.data);
						/*防止reject失败的的时候，立刻关闭Toast提示框的真机(iphone)Bug, 真机上受uni.hideLoading()的影响, 组件中可使用this.$nextTick*/
						setTimeout(() => {
							e.showToast(errMsg || res.data.message || '抱歉, 请求错误');
						}, 0);
					};
					if(res && res.data && res.data.status === 500) {
						setTimeout(() => {
							const msg = res.data.message === 'Token失效，请重新登录' ? '登录失效，请重新登录' : (res.data.message || '抱歉, 请求错误');
							e.showToast(msg);
						}, 0);
						if(res.data.message === 'Token失效，请重新登录') {
							if(e.timer !== null) {
								clearTimeout(e.timer);
								e.timer = null;
							};
							e.timer = setTimeout(() => {
								uni.reLaunch({
								    url: '/pages/login/login',
								});
							}, e.toastDuration);
						};
					};
					callBack && typeof callBack === 'function' && callBack(res.data);
				},
				fail: (err) => {
					console.log('err', err);
					/*防止断网等请求错误fail的时候，立刻关闭Toast提示框的真机(iphone)Bug, 真机上受uni.hideLoading()的影响, 组件中可使用this.$nextTick*/
					setTimeout(() => {
						const msg = '网络错误, 请稍后重试';
						e.showToast(msg);
					}, 0);
				},
				complete: () => {
					loading && uni.hideLoading();
				}
			})
		})
	},
	/*
	 * 文件上传的http请求
	 * url: 请求路径
	 * filePath: 文件路径
	 * fileOptName: 文件流参数名字
	 * formData: HTTP 请求中其他额外的 formData参数
	 * loading = false, 
	 * loadingText, 
	 * errMsg, 
	 * callBack
	*/
	uploadRequest({ url, filePath, fileOptName, formData = {}, loading = false, loadingText, errMsg, callBack }) {
		return new Promise((resolve, reject) => {
			const e = this;
			loading && uni.showLoading({ title: (loadingText === '' || !!loadingText) ? loadingText : '加载中', mask: true });
			uni.uploadFile({
				url: e.baseUrl + url,
				filePath,
				name: fileOptName,
				formData,
				header: {
					// 'Blade-Auth': e.getStorage('storage_key').token,
				},
				success: (res) => {
					if(typeof res.data === 'string' && res.data.startsWith("{") && res.data.endsWith("}")) {
						res.data = JSON.parse(res.data);
					};
					if(res && res.data && res.data.success) {
						resolve(res.data.result || true);
					}else {
						reject(res.data);
						/*防止reject失败的的时候，立刻关闭Toast提示框的真机(iphone)Bug, 真机上受uni.hideLoading()的影响, 组件中可使用this.$nextTick*/
						setTimeout(() => {
							e.showToast(errMsg || res.data.message || '抱歉, 请求错误');
						}, 0);
					};
					if(res && res.data) {
						if(res.data.status === 500 || res.data.code === 500) {
							setTimeout(() => {
								const msg = res.data.message === 'Token失效，请重新登录' ? '登录失效，请重新登录' : (res.data.message || '抱歉, 请求错误');
								e.showToast(msg);
							}, 0);
							if(res.data.message === 'Token失效，请重新登录') {
								if(e.timer !== null) {
									clearTimeout(e.timer);
									e.timer = null;
								};
								e.timer = setTimeout(() => {
									uni.reLaunch({
									    url: '/pages/login/login',
									});
								}, e.toastDuration);
							};
						}
					};
					
					callBack && typeof callBack === 'function' && callBack(res.data);
				},
				fail: (err) => {
					console.log('err', err);
					/*防止断网等请求错误fail的时候，立刻关闭Toast提示框的真机(iphone)Bug, 真机上受uni.hideLoading()的影响, 组件中可使用this.$nextTick*/
					setTimeout(() => {
						const msg = '网络错误, 请稍后重试';
						e.showToast(msg);
					}, 0);
				},
				complete: () => {
					loading && uni.hideLoading();
				}
			})
		})
	},
	// 不需要token的接口
	noTokenInterfaces() {
		return [
			'/blade-auth/oauth/token',
		];
	},
	// 设置请求头
	setHeader(url, token, contentType) {
		const header = 
		this.noTokenInterfaces().includes(url) ? 
		{
			'content-type': contentType,
			// 'Tenant-Id': '000000',
			// 'Authorization': 'Basic c3dvcmQ6c3dvcmRfc2VjcmV0',
		} : {
			'content-type': contentType,
			// 手机号
			
			// 'Blade-Auth': token,
			
			// 'Tenant-Id': '000000',
			// Authorization: 'Basic c3dvcmQ6c3dvcmRfc2VjcmV0',
		}
		return header;
	},
	getStorage(key) {
		const value = uni.getStorageSync(key);
		return value || {};
	},
	showToast(msg) {
		uni.showToast({
			icon: 'none',
			title: msg,
			duration: this.toastDuration,
			mask: true,
		})
	}
}


export default http;
