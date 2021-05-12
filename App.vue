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

<style>
	/*每个页面公共css */
	/*此处设置清除浮动代码*/
	 .clear::after,
	 .clear::before {
	        content: "";
	        display: block;
	         clear: both;
	  }
	  
	  @font-face {
	    font-family: "iconfont"; /* Project id 2542126 */
	    src: url('//at.alicdn.com/t/font_2542126_4pwduh2xyx.woff2?t=1620801687796') format('woff2'),
	         url('//at.alicdn.com/t/font_2542126_4pwduh2xyx.woff?t=1620801687796') format('woff'),
	         url('//at.alicdn.com/t/font_2542126_4pwduh2xyx.ttf?t=1620801687796') format('truetype');
	  }
	  
	  .iconfont {
	    font-family: "iconfont" !important;
	    font-size: 16px;
	    font-style: normal;
	    -webkit-font-smoothing: antialiased;
	    -moz-osx-font-smoothing: grayscale;
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
