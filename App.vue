<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style >
	page{
		background-color: #f6f6f6
	}
	/*每个页面公共css */
	@import "../uview-ui/libs/index.scss"
	
	@font-face {
	  font-family: "iconfont"; /* Project id 2542126 */
	  src: url('//at.alicdn.com/t/font_2542126_6pb1lrm4wl3.woff2?t=1620914343711') format('woff2'),
	       url('//at.alicdn.com/t/font_2542126_6pb1lrm4wl3.woff?t=1620914343711') format('woff'),
	       url('//at.alicdn.com/t/font_2542126_6pb1lrm4wl3.ttf?t=1620914343711') format('truetype');
	}
	
	.iconfont {
	  font-family: "iconfont" !important;
	  font-size: 16px;
	  font-style: normal;
	  -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
	}
	
	.iconzixun1:before {
	  content: "\e619";
	}
	
	.iconshoujihao:before {
	  content: "\e642";
	}
	
	.icondiqu:before {
	  content: "\e606";
	}
	
	.iconyanzhengma:before {
	  content: "\e624";
	}
	
	.icondc-icon-gaoxiao:before {
	  content: "\e654";
	}
	
	.iconmima:before {
	  content: "\e60d";
	}
	
	.iconyonghu:before {
	  content: "\e6d5";
	}


</style>
