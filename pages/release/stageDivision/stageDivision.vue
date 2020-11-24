<template>
	<view class="stageDivide">
		<view class="stage">
			<view class="titleH">阶段数目</view>
		</view>
		<view class="stageNum">
			<input type="text" placeholder="请输入阶段数目(1-5)">
			<button @click="generateStage">生成阶段</button>
		</view>
		<view style="margin-top:10px;">
			<view class="stageInf">
				<view class="stage">
					<view class="titleH">P1阶段</view>
				</view>
				<!-- <u-form :model="form" ref="uForm">
					<u-form-item class="u-form-item" >
						<view>阶段名称</view>
						<u-input v-model="form.name" />
					</u-form-item>
					<u-form-item label="交付日期" prop="intro" border-bottom=true>
						<u-input v-model="form.intro" />
					</u-form-item>
				</u-form> -->
				<view>
					<view class="inputBox">
						<text>阶段名称</text>
						<input type="text" placeholder="请输入阶段名称">
					</view>
					<view class="inputBox">
						<text>交付日期</text>
						<input type="text" class="deliveryDate" v-model="deliveryDate" @focus="startTime" placeholder="入学时间" style="display: inline-block; ">
					</view>
					<view class="inputBox">
						<text>阶段金额</text>
						<input type="text" placeholder="请输入阶段金额">
					</view>
					<view class="textBox">
						<text>交付说明</text>
						<textarea maxlength="1000" v-model="content"  placeholder="请输入说明内容">
							
						</textarea>
					</view>
				</view>
				<u-picker mode="time" v-model="showJoin" :params="params" @cancecl="cancel" @confirm="confirmJoin"></u-picker>
				
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				form: {
					name: '',
					intro: '',
				},
				deliveryDate:'',
				params: {
					year: true,
					month: true,
					day: false,
					hour: false,
					minute: false,
					second: false
				},
				showJoin: false
			}
		},
		onLoad(ops) {
			//上一个页面传来的参数,获取并赋值渲染
			console.log(ops)
		},
		methods: {
			startTime(){
				this.showJoin=true
				},
			confirmJoin(e){
				console.log(e)
				let t = `${e.year}-${e.month}`;
				this.deliveryDate = t
				t = new Date(t).getTime()
				console.log(t)
			},
			

		}
	}
</script>

<style lang="scss">
	page {
		height: 100vh;
		background: #f8f8f8;
	}
	.stageDivide{
		margin-top:10px;
		.stage{
			display: flex;
			justify-content: space-between;
			padding:0 10px;
			border-bottom: 1px solid #E6E6E6;
			background-color: #fff;
			.titleH{
				display: flex;
				font-size: 15px;
				padding-left:8px;
				align-items: center;
				position: relative;
				color:#333;
				line-height: 40px;
				font-weight: bold;
				&:before {
					position: absolute;
					left: 0px;;
					content: "";
					display: block;
					margin-right: 4px;
					width: 3px;
					height: 18px;
					background-color: #00D3BD;
				}				
			}
		}	
		.stageNum{
			display: flex;
			justify-content: space-between;
			padding:10px;
			background-color: #fff;
			input{
				font-size: 15px;
				color:#333;
				padding:5px 0;
			}
			button{
				background-color: #00D3BD;
				color:#fff;
				border: none;
				line-height: 34px;
				margin:0;
				border-radius: 40px;
				font-size: 14px;;
				padding:0 12px;
			}
		}
		.stageInf{
			background-color: #fff;
			margin-bottom: 10px;
			.inputBox{
				display: flex;
				flex-direction: row;
				margin:0 15px;
				border-bottom:1px solid #E6E6E6;
				line-height: 30px;
				padding:10px 0;
				color:#333;
				input{
					line-height: 30px;
					height:30px;
					padding-left:20px;
				}
			}
			.textBox{
				display: flex;
				flex-direction: column;
				margin:0 15px;
				padding-bottom: 20px;
				text{
					line-height: 30px;
					padding:10px 0;
					color:#333;
				}
				textarea{
					border:1px solid #E6E6E6;
					width:100%;
					padding:10px;
					box-sizing: border-box;
				}
			}
		}
	}
</style>
