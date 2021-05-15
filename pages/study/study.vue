<template>
	<view>
		<view class="background"><image class="background_img" src="../../static/study/picture2.png" mode="widthFix"></image></view>
		<view class="function_area">
			<view class="function_item">
				<view class="function_title_row">
					<view class="title">答题练习</view>
					<view class="my_grade">
						我的积分：
						<text style="color: #266AF0;">{{ grade }}</text>
					</view>
				</view>
				<view class="function_expercise">
					<view class="function_expercise_item" v-for="(item, index) in exerciseList" :key="item.id">
						<image class="item_img" :src="item.imgSrc" mode="widthFix"></image>
						<text class="item_name">每日答题</text>
					</view>
				</view>
			</view>
			<view class="function_title_row"><view class="title">防疫知识站</view></view>
			<view class="function_knowledge">
				<scroll-view class="function_knowledge_item"  enable-flex="true" v-for="(item, index) in knowledgeList" :key="item.id">
					<view class="img_knowledge">
						<image class="knowledge_img" :src="item.imgSrc" mode="widthFix"></image>
					</view>
					<view class="content_area">
						<view class="knowledge_name">{{ item.name }}</view>
						<view class="knowledge_writer">作者：{{ item.writer }}</view>
						<view class="issue_date">发表时间：{{ item.issueDate }}</view>
					</view>
				</scroll-view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			grade: '12',
			exerciseList: [
				{
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
			knowledgeList: [
				{
					id: 0,
					imgSrc: '../../static/study/picture1.png',
					name: '如何正确佩戴口罩',
					writer: '何小花',
					issueDate: 'time'
				},
				{
					id: 1,
					imgSrc: '../../static/study/picture1.png',
					name: '如何正确佩戴口罩',
					writer: '何小花',
					issueDate: 'time'
				},
				{
					id: 2,
					imgSrc: '../../static/study/picture1.png',
					name: '如何正确佩戴口罩',
					writer: '何小花',
					issueDate: 'time'
				},
				{
					id: 3,
					imgSrc: '../../static/study/picture1.png',
					name: '如何正确佩戴口罩',
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
	margin: 30rpx 30rpx 30rpx 30rpx;
	padding: 20rpx;
	border-radius: 30rpx;
	.function_title_row {
		font-weight: 600;
		display: flex;
		flex-flow: row nowrap;
		justify-content: space-between;
		align-items: center;
		align-content: center;
		margin: 20rpx 20rpx;
		.title {
			display: flex;
			justify-content: center;
			align-items: center;
			align-content: center;
		}
		.my_grade {
			display: flex;
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
			height: 260rpx;
			flex: 1;
			flex-direction: column;
			border-radius: 30rpx;
			background-color: #ebeef5;
			margin: 10rpx 20rpx;
			.item_img {
				width: 80%;
			}
			.item_name {
				margin-top: 20rpx;
				font-weight: 600;
			}
		}
	}
	.function_knowledge{
		padding: 0 20rpx;
		.function_knowledge_item{
			border-bottom: 2rpx solid #e5e5e5;
			padding: 20rpx 0;
			display: flex;
			.img_knowledge{
				width: 300rpx;
				.knowledge_img{
					width: 100%;
				}
			}
			.content_area{
				width: 300rpx;
				display: flex;
				flex-direction: column;
				margin-left: 20rpx;
				justify-content: center;
				.knowledge_name{
					margin: 10rpx 0;
					justify-content: center;
					align-items: center;
					font-weight: 600;
				}
				.knowledge_writer{
					margin: 10rpx 0;
					font-size:28rpx;
					color: #bbbec4;
					justify-content: center;
					align-items: center;
				}
				.issue_date{
					margin: 10rpx 0;
					color: #bbbec4;
					justify-content: center;
					align-items: center;
					font-size:28rpx;
				}
			}
		}
	}
}
</style>
