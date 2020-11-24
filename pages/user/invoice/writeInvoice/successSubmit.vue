<template>
	<view class="successCom">
		
		<image :src="success" mode=""></image>
		<text>提交成功</text>
		<text>发票将在3个工作日内开出，请在发票界面注意查看</text>
		<button type="default">完成</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 提交成功图片
				success: this.baseImgUrl + '/static/invoice/pic_tijiaochenggong.png',
			}
		}
	}
</script>

<style lang="scss">
	page{
		height: 100%;
		width: 100%;
		.successCom{
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
		}
	}
</style>
