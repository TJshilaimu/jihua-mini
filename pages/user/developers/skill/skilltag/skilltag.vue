<template>
	<view class="tagWrap">
		<view class="addTag closeBtn" v-for="(item,index) in tagList" :key="item" @click="deleteTag(index)">
			{{item}}
		</view>
		<view class="tag diy" @click="addTag">
			+自定义
		</view>
		<button class="saveBtn" @click="saveSkills">
			保存
		</button>
		<u-popup v-model="show" mode="center" height="314rpx" width="584rpx">
			<view class="tagTitle">
				<text>创建个人标签</text>
				<input class="inp" type="text" @change="checkLength" v-model="val" placeholder="请输入标签，不超过6个字" />
			</view>

			<view class="btn">
				<text class="cancel" @click="cancelTag">取消</text>
				<text class="comfire" @click="comfireTag">确认</text>
			</view>
		</u-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tagList: [],
				show: false,
				val: '',
				navigation:'',
			}
		},
		onReady() {
			uni.getStorage({
				key: "phone",
				success: (res) => {
					this.phone = res.data
					this.$u.api.selectFindSkills({
						phone:this.phone
					}).then(res =>{
						this.tagList = res.data
						let len = this.tagList.length;
						this.navigation = `擅长技术标签${len}/5`;
						uni.setNavigationBarTitle({
							title:this.navigation
						})
						console.log('goodSkill', res)
					})
				}
			})
			
			
		},
		methods: {
			deleteTag(index) {//删除tag
				this.tagList.splice(index,1);
				let len = this.tagList.length;
				this.navigation = `擅长技术标签${len}/5`;
				uni.setNavigationBarTitle({
					title:this.navigation
				})
			},
			addTag() {
				if (this.tagList.length >= 5) {
					uni.showToast({
						title: '最多可选5个标签',
						icon: 'none'
					})
				}else{
					this.show= true;
					this.val=""
				}
			},
			comfireTag(){//添加tag
				console.log('添加tag')
				//调用api
				this.tagList.push(this.val)
				// this.tagList.length++;
				let len = this.tagList.length;
				this.navigation = `擅长技术标签${len}/5`;
				uni.setNavigationBarTitle({
					title:this.navigation
				})
				this.show=false;
				
			},
			cancelTag(){
				console.log('取消tag');
				this.show = false;
				this.val='';
			},
			checkLength(){//限制输入字数长度
				if(this.val.length>6){
					this.val=this.val.slice(0,6);
					console.log('pp')
				}
			},
			saveSkills(){//保存擅长技能
				console.log(this.tagList,"1111")
				this.$u.api.saveSkills({
					phone:this.phone,
					entity:this.tagList
				}).then(res =>{
					console.log(res)
					if(res.meta.code==0){
						uni.navigateTo({
							url: "../skill"
						})
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	.tagWrap {
		border-top: 1px solid $u-b-color;
		padding: 30rpx;
		.saveBtn{
			background-color: #00d3bd;
			width: 630rpx;
			border-radius: 90rpx;
			color: #fffffF;
			font-size: 32rpx;
			position: absolute;
			bottom:30px;
			left:20px;
		}

		.tag {
			display: inline-block;
			height: 84rpx;
			line-height: 80rpx;
			margin-right: 20rpx;
			margin-bottom: 20rpx;
			padding: 0rpx 38rpx;
			border: 1px solid $u-m-color;
			color: $u-m-color;
			font-size: 32rpx;
			border-radius: 6px;
		}

		.addTag {
			background-color: #E0FAF7;
			box-sizing: border-box;
			display: inline-block;
			height: 84rpx;
			line-height: 80rpx;
			margin-right: 20rpx;
			margin-bottom: 20rpx;
			padding: 0rpx 54rpx 0rpx 38rpx;
			border: 1px solid $u-m-color;
			color: $u-m-color;
			font-size: 32rpx;
			position: relative;
			border-radius: 6px;

			&::before {
				content: 'x';
				width: 16rpx;

				display: inline-block;
				position: absolute;
				right: 25rpx;
				bottom: 0rpx;
			}
		}

		.tagTitle {
			text-align: center;
			height: 223rpx;
			padding-top: 40rpx;

			text {
				display: inline-block;
				padding-bottom: 52rpx;
				font-size: 34rpx;
				color: #333333;
				font-weight: bold;

			}
			.inp{
				caret-color:#00d3bd;
			}

		}

		.btn {
			display: flex;
			height: 90rpx;

			text {
				flex: 1;
				text-align: center;
				line-height: 90rpx;
				border-top: 1px solid $u-b-color;
				color: #333333;
				font-size: 30rpx;

				&:last-of-type {
					border-left: 1px solid $u-b-color;
					color: #00D3BD;
				}
			}
		}
	}
</style>
