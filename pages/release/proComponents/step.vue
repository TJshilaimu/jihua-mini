<template>
	<view class="myStep">
		<view class="stepItem" v-for="(item,index) in titleList" :key="item.steps">
			<view class="itemTop" @click="showStep(item,index)">
				<view class="line" :class="[item.steps ==1?'unSee' : '',item.flag?'secColor' : '']">
				</view>
				<view class="itemIcon" ref  :class="[item.flag?'secColor' : '']">
					<text v-if="!item.flag">{{item.steps}}</text>
					<u-icon v-else name="checkmark"></u-icon>
				</view>
				<view class="line"  :class="[item.steps ==4?'unSee' : '',item.flag?'secColor' : '']">
				</view>
			</view>
			<view class="itemTitle" :class="[item.flag?'secColor' : '']">
				{{item.title}}
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				titleList:[{
								title:'1.已申请',
								steps:'1',
								flag:true
							},{
								title:'2.签合同',
								steps:'2',
								flag:true
							},{
								title:'3.开发中',
								steps:'3',
								flag:true
							},{
								title:'4.已完成',
								steps:'4 ',
								flag:true
							}]
			}
		},
		methods:{
			showStep(item,index){
				
				console.log('展示不同样式',item.flag);
				if(item.flag){ // 为真，则把这之后的变为假
					for(let i = index; i<this.titleList.length;i++){
						// console.log(this.titleList,'122')
						console.log(this.titleList[i]['flag'],'show flag' )
						this.titleList[i]['flag'] = false;
					}
					
				}else{// 为假， 则将这之前的都变为真
					for(let i = 0; i<=index;i++){
						this.titleList[i].flag = true;
					}
				}
				// item.flag = !item.flag
			}
		}
	}
</script>

<style lang="scss">
	.secColor{
		color:#00D3BD;
	}
	.myStep{
		width:700rpx;
		// border:1px solid red;
		margin:0 auto;
		box-sizing: border-box;
		padding-top: 20px;
		padding-bottom: 20px;
		display: flex;
		align-items: center;
		.stepItem{
			width:175rpx;
			// border:1px solid red;
			// flex: 1 1 auto;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			.itemTop{
				display: flex;
				align-items: center;
				margin-bottom:10rpx;
				.line{
					display: inline-block;
					width:66rpx;
					height: 0;
					border:1rpx solid #ccc;
					&.secColor{
						border-color:#00D3BD;
					}
					&.unSee{
						border-color: transparent;
					}
				}
				.itemIcon{
					display: inline-block;
					text-align: center;
					width:45rpx;
					height: 45rpx;
					border-radius: 50%;
					border:1px solid #ccc;
					background-color: #ccc;
					color:#fff;
					&.secColor{
						border-color: #00D3BD;
						background: #00d3bd;
					}
				}
			}
			.itemTitle{
				color:#ccc;
				font-size: 12px;
				&.secColor{
					color:#00d3bd;
				}
			}
		}
	}
</style>
