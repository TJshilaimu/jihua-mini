<template>
	<view class="attestation">
		<view class="realName">
			<view class="title">
				实名认证
			</view>
			<view class="proStatus" @click="toAttestation">
				<text v-if="true">审核中</text>
				<text v-if="false">审核中</text>
				<text v-if="false">审核中</text>
				<u-icon name="arrow-right"></u-icon>
			</view>
		</view>
		<view class="realName" @click="toSkill">
			<view class="title">
				技能展示
			</view>
			<view class="proStatus">
				<text v-if="true">共三项，已完成一项，继续完善</text>
				<text v-if="false">.共三项，已完成两项，继续完善</text>
				<text v-if="false">已完善</text>
				<u-icon name="arrow-right"></u-icon>
			</view>
		</view>
	</view>
</template>


<script>
	export default {
		data() {
			return {
				attestationStep:1,
				skillStep:1
			};
		},
		methods:{
			toAttestation(){ //实名认证跳转
				uni.navigateTo({
					url:'./verified/verified'
				})
			},
			toSkill(){ //技能展示跳转
				uni.navigateTo({
					url:'./skill/skill'
				})
			}
		}
	}
</script>

<style lang="scss">
	page{
		background-color: #f8f8f8;
		padding-top:3rpx;
	}
	.attestation{
		background-color: #ffffff;
		.realName{
			// width: 100%;
			height: 100rpx;
			display: flex;
			margin: 0 30rpx;
			justify-content: space-between;
			align-items: center;
			&:first-of-type{
				border-bottom: 1px solid $u-b-color;
			}
			.title{
				color: #333333;
				font-size: 30rpx;
			}
			.proStatus{
				color: #999999;
				text{
					margin-right: 7rpx;
				}
			}
		}
	}
</style>
