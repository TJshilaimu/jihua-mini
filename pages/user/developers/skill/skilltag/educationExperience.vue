<template>
	<view class="educationExperience">
		<view class="">
			<u-form :model="educationForm" ref="educationForm">
				<u-form-item label="学校名称" prop="schoolName" label-position="top" required>
					<u-input v-model="educationForm.schoolName"  placeholder="请输入学校名称"/>
				</u-form-item>
				<u-form-item label="在校时间" label-position="top" required class="schoolTime"  style="position: relative;" prop="time">
					<div style="height:40px;">
						<u-input class="timeInput" v-model="educationForm.timeStart" @focus="startTime" placeholder="入学时间" style="position:absolute;left:0;display: inline-block;width:50%"/>
						<u-input class="timeInput" v-model="educationForm.timeEnd" @focus="endTime" placeholder="毕业时间" style="position:absolute;right:0;display: inline-block;width:50%"/>
					</div>
					<!-- <u-input v-model="educationForm.schoolTime"  placeholder="请输入在校时间"/> -->
				</u-form-item>
				<u-form-item label="学历水平" prop="educationalLevel" label-position="top" required>
					<u-input v-model="educationForm.educationalLevel"  placeholder="请输入学历水平"/>
				</u-form-item>
				<u-form-item label="专业名称" prop="majorName" label-position="top" required>
					<u-input v-model="educationForm.majorName"  placeholder="请输入专业名称"/>
				</u-form-item>
				<u-form-item label="在校经历" prop="associationActivity" label-position="top" required>
					<u-input v-model="educationForm.associationActivity"  @click="toAssociationActivity" placeholder="请输入在校经历"/>
					<!-- <view class="association" @click="toAssociationActivity">{{educationForm.associationActivity}}</view> -->
				</u-form-item>
			</u-form>
		</view>
		<view class="btnBox">
			<button class="trueBtn" @click="toConfirm">确定</button>
			<button class="deleteBtn" @click="toDelete">删除</button>
		</view>
		<u-picker mode="time" v-model="showJoin" :params="params" @cancecl="cancel" @confirm="confirmJoin"></u-picker>
		<u-picker mode="time" v-model="showOut" :params="params" @cancecl="cancel" @confirm="confirmOut"></u-picker>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				educationForm: {
					schoolName: "",
					timeStart: "",
					timeEnd: "",
					educationalLevel: "",
					majorName: "",
					associationActivity: ""
				},
				params: {
					year: true,
					month: true,
					day: false,
					hour: false,
					minute: false,
					second: false
				},
				showJoin:false,
				showOut:false,
				rules:{
					schoolName: [
						{
							required: true,
							trigger: 'blur,change'
						}
					],
					time: [
						{
							required: true,
							trigger: 'blur,change'
						}
					],
					educationalLevel: [
						{
							required: true,
							trigger: 'blur,change'
						}
					],
					majorName: [
						{
							required: true,
							trigger: 'blur,change'
						}
					],
					associationActivity: [
						{
							required: true,
							trigger: 'blur,change'
						}
					],
				},
				id:''
			}
		},
		onLoad: function(data) {
			//接收上一个页面传来的参数,id获取并赋值渲染
			if(data.id!=undefined){
				this.id = data.id
				this.$u.api.findOneEducational({
					id:this.id
				}).then(res =>{
					console.log(res,1111)
					if(res.meta.code==0){
						this.educationForm.schoolName = res.data.schoolName
						this.educationForm.timeStart = res.data.startTime
						this.educationForm.timeEnd = res.data.endTime
						this.educationForm.educationalLevel = res.data.education
						this.educationForm.majorName = res.data.major
						this.educationForm.associationActivity = res.data.synopsis
					}
				})
			}else{		
			}
		},
		//返回textarea经历编辑页面数据，接收参数(返回页面不刷新)
		onShow: function () {
		    let that = this;
		    let pages = getCurrentPages();
		    let currPage = pages[pages.length - 1]; //当前页面
		    this.educationForm.associationActivity = currPage.data.sh;
		    console.log('resresres',this.educationForm.associationActivity)//为传过来的值
		 },
		methods: {
			toAssociationActivity(){ //跳转到textarea经历编辑页面
				uni.navigateTo({
					url:`associationActivity?synopsis=`+this.educationForm.associationActivity
				})
			},
			startTime(){
				this.showJoin=true
				},
			endTime(){
				this.showOut=true
			},
			confirmJoin(e){
				console.log(e)
				let t = `${e.year}.${e.month}`;
				this.educationForm.timeStart = t
				t = new Date(t).getTime()
				console.log(t)
			},
			confirmOut(e){
				console.log(e)
				let t = `${e.year}.${e.month}`;
				this.educationForm.timeEnd = t
				t = new Date(t).getTime()
				console.log(t)
			},
			cancel(){
				
			},
			//确认提交数据
			toConfirm(){
				let flag = true
				for(let prop in this.educationForm){
					if(this.educationForm[prop] == ''){
						flag = false;
					}
				}
				if(flag){
					//调用接口
					uni.getStorage({
						key: "phone",
						success: (res) => {
							this.phone = res.data
							this.$u.api.saveEducational({//保存教育经历
								phone:this.phone,
								schoolName:this.educationForm.schoolName,
								startTime:this.educationForm.timeStart,
								endTime:this.educationForm.timeEnd,
								education:this.educationForm.educationalLevel,
								major:this.educationForm.majorName,
								synopsis:this.educationForm.associationActivity,
								id:this.id
							}).then(res =>{
								console.log(res,"0000")
								if(res.meta.code==0){
									uni.navigateTo({
										url: "../skill",
									})
								}else{
									uni.showToast({
										title:'教育经历信息操作失败',
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
				this.$u.api.deleteEducational({
					id:this.id
				}).then(res =>{
					console.log(res)
					if(res.meta.code==0){
						uni.navigateTo({
							url: "../skill",
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
				border:none;
				border-radius: 90rpx;
				background-color: $u-m-color;
				color: white;
				width:380rpx;
				margin-right:30rpx;
				line-height: 80rpx;
			}
			.deleteBtn{
				border:none;
				border:1px solid $u-m-color;
				border-radius: 90rpx;
				width:220rpx;
				background-color: white;
				color:$u-m-color;
				line-height:80rpx;
			}
		}
		.association{
			line-height: 40px;
			color:#999;
		}
	}
</style>
