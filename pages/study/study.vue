<template>
	<view>
		<view class="background">
			<image class="background_img" src="../../static/study/background.png" mode="widthFix"></image>
		</view>
		<view class="function_area">
			<view class="function_item">
				<view class="function_title_row">
					<view class="mark"></view>
					<view class="title">答题练习</view>
					<view class="my_grade">
						我的积分：
						<text style="color: #ff9000;">{{ grade }}</text>
					</view>
				</view>
				<view class="function_expercise">
					<view class="function_expercise_item" v-for="(item, index) in exerciseList" :key="item.id">
						<image class="item_img" :src="item.imgSrc" mode="widthFix"></image>
						<text class="item_name">{{item.name}}</text>
					</view>
				</view>
			</view>
			<view class="function_title_row">
				<view class="mark"></view>
				<view class="title">防疫知识站</view>
			</view>
			<view class="function_knowledge">
				<view class="function_knowledge_item" enable-flex="true" v-for="(item, index) in knowledgeList"
					:key="item.id">
					<view class="img_knowledge">
						<image class="knowledge_img" :src="item.imgSrc" mode="widthFix"></image>
					</view>
					<view class="content_area">
						<view class="knowledge_name">{{ item.name }}</view>
						<view class="knowledge_writer">作者：{{ item.writer }}</view>
						<view class="issue_date">发表时间：{{ item.issueDate }}</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				grade: '12',
				exerciseList: [{
						id: 0,
						imgSrc: '../../static/study/icon1.png',
						name: '每日答题'
					},
					{
						id: 1,
						imgSrc: '../../static/study/icon2.png',
						name: '每周答题'
					},
					{
						id: 2,
						imgSrc: '../../static/study/icon3.png',
						name: '答题竞赛'
					}
				],
				knowledgeList: [{
						id: 0,
						imgSrc: '../../static/study/picture1.png',
						name: '如何正确佩戴口罩',
						writer: '何小花',
						issueDate: '2021.2.28'
					},
					{
						id: 1,
						imgSrc: '../../static/study/picture2.png',
						name: '抗疫行动，从我做起',
						writer: '吴桂芳',
						issueDate: '2021.1.21'
					},
					{
						id: 2,
						imgSrc: '../../static/study/picture3.png',
						name: '0新增案例',
						writer: '寒冰冰',
						issueDate: '2021.1.21'
					},
					{
						id: 3,
						imgSrc: '../../static/study/picture1.png',
						name: '勤洗手，勤消毒',
						writer: '何小花',
						issueDate: 'time'
					}
				]
			};
		},
		onLoad() {},
		methods: {}
	};
</script>

<style lang="scss">
	// 图标库

	.background {
		display: flex;
		position: fixed;
		top: 0rpx;
		left: 0rpx;
		z-index: -1;

		.background_img {
			width: 750rpx;
		}
	}

	.function_area {
		background-color: #fff;
		margin: 257rpx 30rpx 30rpx 30rpx;
		padding: 20rpx;
		border-radius: 30rpx;

		.function_title_row {
			font-weight: 600;
			display: flex;
			flex-flow: row nowrap;

			align-items: center;
			align-content: center;
			margin: 20rpx 20rpx;

			.mark {
				width: 10rpx;
				height: 29rpx;
				background-color: #3875f6;
				border-radius: 5rpx;
			}

			.title {
				display: flex;
				margin-left: 20rpx;
				align-items: center;
				align-content: center;
			}

			.my_grade {
				display: flex;
				margin-left: 240rpx;
				justify-content: center;
				align-items: center;
				align-content: center;
			}
		}

		.function_expercise {
			display: flex;
			justify-content: space-between;

			.function_expercise_item {
				display: flex;
				justify-content: center;
				align-items: center;
				width: 155rpx;
				height: 192rpx;
				background-color: #f6f6f6;
				border-radius: 13rpx;
				flex: 1;
				flex-direction: column;


				margin: 10rpx 20rpx;

				.item_img {
					width: 80rpx;
					height: 80rpx;
				}

				.item_name {
					margin-top: 20rpx;
					font-weight: 600;
					width: 100rpx;
					height: 28rpx;
					font-size: 24rpx;
					font-weight: 700;
				}
			}
		}

		.function_knowledge {
			padding: 0 20rpx;

			.function_knowledge_item {
				border-bottom: 2rpx solid #e5e5e5;
				padding: 20rpx 0;
				display: flex;
				width: 697rpx;
				height: 200rpx;

				.img_knowledge {
					width: 297rpx;
					height: 171rpx;
					border-radius: 27rpx;

					.knowledge_img {
						width: 100%;
					}
				}

				.content_area {
					width: 300rpx;
					display: flex;
					flex-direction: column;
					margin-left: 20rpx;


					.knowledge_name {

						justify-content: center;
						align-items: center;
						font-weight: 700;
					}

					.knowledge_writer {
						margin: 10rpx 0;
						font-size: 23rpx;
						color: #707070;
						justify-content: center;
						align-items: center;
					}

					.issue_date {
						margin: 10rpx 0;
						color: #707070;
						justify-content: center;
						align-items: center;
						font-size: 23rpx;
					}
				}
			}
		}
	}
</style>
