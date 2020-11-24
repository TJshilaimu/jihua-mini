<template>
	<view class="educationExperience">
		<view class="">
			<u-form :model="educationForm" ref="educationForm">
				<u-form-item label="项目名称" prop="projectName" label-position="top" required>
					<u-input v-model="educationForm.projectName"  placeholder="请输入项目名称"/>
				</u-form-item>
				<u-form-item label="开发周期" prop="projectTime" label-position="top" required>
					<u-input v-model="educationForm.projectTime"  placeholder="请选择开发周期"/>
				</u-form-item>
				<u-form-item label="项目介绍" prop="projectLevel" label-position="top" required>
					<!-- <u-input v-model="educationForm.projectLevel"  placeholder="点击输入项目介绍"/> -->
					<u-input v-model="educationForm.projectLevel"  @click="toProjectLevel" placeholder="点击输入项目介绍"/>
					<!-- <view class="association" @click="toProjectLevel">{{educationForm.projectLevel}}</view> -->
				</u-form-item>
				<u-form-item label="项目截图" prop="projectScreenshot" label-position="top">
					<u-input v-model="educationForm.projectScreenshot"  placeholder="请添加项目截图"/>
				</u-form-item>
				<u-form-item label="演示地址" prop="demoAddress" label-position="top">
					<u-input v-model="educationForm.demoAddress"  placeholder="请输入演示地址"/>
					
				</u-form-item>
			</u-form>
		</view>
		<view class="btnBox">
			<button class="trueBtn" @click="toConfirm">确定</button>
			<button class="deleteBtn" @click="toDelete">删除</button>
		</view>
		<u-modal v-model="show" :content="contentModal" :title="titleH" show-cancel-button=true></u-modal>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				educationForm: {
					projectName: "",
					projectTime: "",
					projectLevel: "",
					projectScreenshot: "",
					demoAddress: "",
					
				},
				form: {
					projectName: "",
					projectTime: "",
					projectLevel: "",
					
				},
				rules:{
					projectName: [
						{
							required: true,
							trigger: 'blur,change'
						}
					],
					projectTime: [
						{
							required: true,
							trigger: 'blur,change'
						}
					],
					projectLevel: [
						{
							required: true,
							trigger: 'blur,change'
						}
					],
				},
				show:false,
				contentModal:"确定要删除这个项目经历吗？",
				titleH:"温馨提示",
				projectId:''
			}
		},
		onLoad: function(data) {
			//接收上一个页面传来的参数,id获取并赋值渲染
			if(data.projectId!=undefined){
				this.projectId = data.projectId
				this.$u.api.findOneProjectEditor({
					projectId:this.projectId
				}).then(res =>{
					console.log(res,1111)
					if(res.meta.code==0){
						this.educationForm.projectName = res.data.projectName
						this.educationForm.projectTime = res.data.leadTime
						this.educationForm.projectLevel = res.data.projects
						this.educationForm.demoAddress = res.data.url
					}
				})
			}else{		
			}
		},
		//接受textarea编辑页面返回数据，接收参数(返回页面不刷新)
		onShow: function () {
		    let that = this;
		    let pages = getCurrentPages();
		    let currPage = pages[pages.length - 1]; //当前页面
		    this.educationForm.projectLevel = currPage.data.sh;
		    console.log('projectLevel',this.educationForm.projectLevel)//为传过来的值
		 },
		methods: {
			toProjectLevel(){ ////跳转到textarea编辑页面
				uni.navigateTo({
					url:`./projectExperience?projectLevel=`+this.educationForm.projectLevel
				})
			},
			//确认提交数据
			toConfirm(){
				let flag = true
				/* for(let prop in this.form){
					if(this.form[prop] == ''){
						flag = false;
					}
				} */
				if(flag){
					//调用接口
					console.log(this.projectId)
					uni.getStorage({
						key: "phone",
						success: (res) => {
							this.phone = res.data
							console.log(this.projectId)
							this.$u.api.saveProjectEditor({//保存项目案例
								phone:this.phone,
								projectName:this.educationForm.projectName,
								leadTime:this.educationForm.projectTime,
								projects:this.educationForm.projectLevel,
								picture:this.educationForm.projectScreenshot,
								url:this.educationForm.demoAddress,
								projectId:this.projectId
							}).then(res =>{
								console.log(res,"0000")
								if(res.meta.code==0){
									uni.navigateTo({
										url: "../companyProfile",
									})
								}else{
									uni.showToast({
										title:'项目案例保存失败',
										icon:'none'
									})
								}
							})
						}
					})
				}else{
					uni.showToast({
						title:'请填写完整数据',
						icon:'none'
					})
				}
			},
			//删除数据
			toDelete(){
				this.$u.api.deleteProjectEditor({
					projectId:this.projectId
				}).then(res =>{
					console.log(res)
					if(res.meta.code==0){
						uni.navigateTo({
							url: "../companyProfile",
						})
					}
				})
			},
		}
	}
</script>

<style lang="scss">
	.educationExperience{
		padding:0 20px;
		border-top:1px solid #f0f0f0;
		.educationForm{
			.u-form-item{
				position: relative;	
			}
		}
		.btnBox{
			display: flex;
			justify-content: space-between;
			margin-top:30px;
			.trueBtn{
				display: inline-block;
				width:50%;
				line-height: 30px;
				border:none;
				border-radius: 15px;
				background: #00D3BD;
				color:#fff;
				font-size: 13px;
			}
			.deleteBtn{
				display: inline-block;
				width:38%;
				line-height: 30px;
				border:1px solid #00D3BD;
				border-radius: 15px;
				background: none;
				color:#00D3BD;
				font-size: 13px;
			}
		}
		.association{
			line-height: 40px;
			color:#999;
		}
	}
</style>
