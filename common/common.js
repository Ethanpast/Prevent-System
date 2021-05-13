
import http from './http';
export default {
	// 请求数据
	loadData: function() {
		let um = this;
		const { url, params } = um.pagination;
		http.request({
			url: url,
			method: 'GET',
			contentType: 'application/x-www-form-urlencoded',
			data: params,
			loading: true
		}).then((data) => {
			if (data) {
				return 'data';
				// um.pagination.list = um.pagination.list.concat([q,q4qq,55]);
			}
		}).catch((err) => {
			console.log('err', err);
		});
		return 'data';
	},
	// 分页管理
	pageManagement: function() {
		this.pagination = {
			...this.pagination,
			params: {
				...this.pagination.params,
				current: this.pagination.params++,
			},
		};
		
	}
	
}