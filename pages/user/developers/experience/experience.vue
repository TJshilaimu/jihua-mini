<template>
	<view class="">
		<u-form :model="form" ref="uForm" error-type="['none']">
			<u-form-item label-position="top" required label="公司名称" prop="name">
				<u-input v-model="form.name" placeholder="请输入公司名称" />
			</u-form-item>
			<u-form-item label-position="top" required label="在职时间"  class="timeChoose" style="position: relative;" prop="time">
				<div style="height:40px;">
					<u-input class="timeInput" v-model="form.timeJoin" @focus="showJoinTime" placeholder="入职时间"style="position:absolute;left:0;display: inline-block;width:50%"/>
					<u-input class="timeInput" v-model="form.timeOut" @focus="showOutTime" placeholder="离职时间" style=" position:absolute;right:0;display: inline-block;width:50%"/>
				</div>
				
			</u-form-item>
			<!-- <u-form-item label-position="top" required label="在职时间"  class="timeChoose" style="position: relative;">
				<u-input class="timeInput" v-model="form.timeJoin" @focus="showJoinTime" placeholder="入职时间"style="display: inline-block; "/>
				<u-input class="timeInput" v-model="form.timeOut" @focus="showOutTime" placeholder="离职时间" style=" position:absolute;right: -194rpx;
				 top:114rpx; display: inline-block; z-index:99;"/>
			</u-form-item> -->
			<u-form-item label-position="top" required label="职位名称" prop="position">
				<u-input v-model="form.position" placeholder="点击输入职位名称"/>
			</u-form-item>
			<u-form-item label-position="top" required label="工作内容" prop="content">
				<u-input v-model="form.content" @click="toEdit" placeholder="输入工作内容"/>
			</u-form-item>
		</u-form>
		<view class="secBtn">
			<button  class="btn1" @click="toConfirm">确定</button>
			<button class="btn2" @click="toDelete">删除</button>
		</view>
		<u-picker mode="time" v-model="showJoin" :params="params" @cancecl="cancel" @confirm="confirmJoin"></u-picker>
		<u-picker mode="time" v-model="showOut" :params="params" @cancecl="cancel" @confirm="confirmOut"></u-picker>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				params: {
					year: true,
					month: true,
					day: false,
					hour: false,
					minute: false,
					second: false
				},
				showJoin: false,
				showOut:false,
				form:{
					name:'',
					timeJoin:'',
					timeOut:'',
					position:'',
					content:''
				},
				workId:'',
				rules:{
					name: [
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
					position: [
							{
								required: true,
								trigger: 'blur,change'
							}
						],
					content: [
							{
								required: true,
								trigger: 'blur,change'
							}
						],
				}
			};
		},
		onLoad: function(data) {
			//上一个页面传来的参数,获取并赋值渲染
			if(data.workId1!=undefined){
				this.workId = data.workId1
				this.$u.api.findOneWork({//查询工作经历
					workId:this.workId
				}).then(res =>{
					if(res.meta.code==0){
						this.form.name = res.data.companyName
						this.form.timeJoin = res.data.startTime
						this.form.timeOut = res.data.endTime
						this.form.position = res.data.jobtitle
						this.form.content = res.data.jubduties
					}
				})
			}else{		
			}
		},
		//返回接收参数
		onShow: function () {
		    let that = this;
		    let pages = getCurrentPages();
		    let currPage = pages[pages.length - 1]; //当前页面
		    this.form.content = currPage.data.sh;
		    console.log('resresres',this.form.content)//为传过来的值
		 },
		onReady() {
				this.$refs.uForm.setRules(this.rules);
			},
		methods:{
			//入职时间
			showJoinTime(){
				this.showJoin = true;
				console.log('123')
			},
			// 离职时间
			showOutTime(){
				this.showOut = true;
				console.log('123')
			},
			confirmJoin(e){
				console.log(e)
				let t = `${e.year}.${e.month}`;
				this.form.timeJoin = t
				t = new Date(t).getTime()
				console.log(t)
			},
			confirmOut(e){
				console.log(e)
				let t = `${e.year}.${e.month}`;
				this.form.timeOut = t
				t = new Date(t).getTime()
				console.log(t)
			},
			cancel(){
				
			},
			//确认提交数据
			toConfirm(){
				let flag = true
				for(let prop in this.form){
					if(this.form[prop] == ''){
						flag = false;
					}
				}
				if(flag){
					//调用接口
					uni.getStorage({
						key: "phone",
						success: (res) => {
							this.phone = res.data
							this.$u.api.saveWork({
								phone:this.phone,
								companyName:this.form.name,
								startTime:this.form.timeJoin,
								endTime:this.form.timeOut,
								jobtitle:this.form.position,
								jubduties:this.form.content,
								workId:this.workId
							}).then(res =>{
								if(res.meta.code==0){
									uni.navigateTo({
										url: "../skill/skill",
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
				this.$u.api.deleteWork({
					workId:this.workId
				}).then(res =>{
					console.log(res)
					if(res.meta.code==0){
						uni.navigateTo({
							url: "../skill/skill",
						})
					}
				})
			},
			//跳转到textarea经历编辑页面
			toEdit(){
				uni.navigateTo({
					url:`companyExperience/companyExperience?jubduties=`+this.form.content
				})
				/* if(this.form.content==""&&this.form.content==null){
					uni.navigateTo({
						url:'companyExperience/companyExperience'
					})
				}else{
					uni.navigateTo({
						url:`companyExperience/companyExperience?jubduties=`+this.form.content
					})
				} */
				
			}
		}
	}
</script>

<style lang="scss">
	page {
		border-top: 1px solid $u-b-color;
	}
	.u-form {
		padding-left: 60rpx;
		padding-right: 60rpx;
	}
	/* .u-form-item{
		border-bottom: 1px solid $u-b-color !important;
		// z-index: 99 !important;
		&.u-border-bottom{
			width:630rpx !important;
		}
	} */
	
	/* .timeChoose{
		display: flex !important;
	} */
	.secBtn{
		margin-top:240rpx;
		margin-bottom: 78rpx;
		display: flex;
		font-size: 32rpx;
		.btn1{
			border:none;
			border-radius: 90rpx;
			background-color: $u-m-color;
			color: white;
			width:380rpx;
			margin-right:30rpx;
			line-height: 80rpx;
		}
		.btn2{
			border:none;
			border:1px solid $u-m-color;
			border-radius: 90rpx;
			width:220rpx;
			background-color: white;
			color:$u-m-color;
			line-height:80rpx;
			
		}
	}
	.u-input__input{
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		width: 630rpx !important;
	}
</style>
