<template>
	<view class="personalIntroduction">
		<view class="textarea">
			<textarea maxlength="1000" v-model="content" @input="conInput" placeholder="请输入您的工作内容(输入字数请在50-1000字之间)">
			</textarea>
			<view class="textRight">
				<text :class="colorText?'textRed':'textColor'" >{{talVal}}</text>/1000				
			</view>
		</view>
		<button class="btnTrue" @click="btnTrue">确定</button>
		<u-modal v-model="show" :content="contentModal" :title="titleH" show-cancel-button=true></u-modal>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				colorText:false,
				content:"",
				talVal:0,
				show:false,
				contentModal:"内容未保存,确定放弃",
				titleH:"温馨提示"
			}
		},
		onLoad(ops) {
			//上一个页面传来的参数,获取并赋值渲染
			if(ops.jubduties!="undefined"){
				this.content = ops.jubduties
			}
		},
		methods: {	
			conInput(){//验证字数，超出标红
				this.talVal = this.content.length;
				if(this.talVal > 1000){
					this.colorText=true
					/* uni.showToast({
						icon: 'none',
						title: '最多只能輸入140個字'
					}); */
				}else{
					this.colorText=false
				}
			},
			btnTrue(){//textarea内容传递上一页面
				let pages = getCurrentPages();
				let prevPage = pages[pages.length - 2]; //上一个页面
				//直接调用上一个页面的setData()方法，把数据存到上一个页面中去
				// 上一个页面最后设置userdata
				//小程序用setData带参
				prevPage.setData({
					sh:this.content
				})
				//uni或者vue用$vm
				prevPage.$vm.sh = this.content,
				uni.navigateBack({//返回
					delta: 1
				})
				
				/* uni.navigateTo({
					url: `../experience?content=`+ this.content,
					
				}) */
			}
		}
	}
</script>

<style lang="scss">
	.personalIntroduction{
		border-top:1px solid #f0f0f0;
		padding:0 7%;
		display: flex;
		flex-direction: column;
		.textarea{
			position: relative;
			padding:5px 10px;
			background: #f8f8f8;
			margin: 30px 0 40px;
			textarea{
				width:100%;
				height:140px;
				margin-bottom: 20px;
				color:#333;
				line-height: 20px;
				padding:10px 0;
				font-size: 13px;;
			}
			.textRight{
				position:absolute;
				right:10px;
				bottom:5px;
				font-size: 15px;
				color:#999;
				.textColor{
					color:#999;
				}
				.textRed{
					color:red;
				}
			}
		}
		.btnTrue{
			display: block;
			width:100%;
			line-height: 40px;
			border:none;
			border-radius: 20px;
			background: #00D3BD;
			color:#fff;
			font-size: 14px;
		}
	}
	
</style>
