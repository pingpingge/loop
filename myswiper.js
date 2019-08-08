/*
* @Author: Administrator
* @Date:   2019-06-27 09:04:11
* @Last Modified by:   Administrator
* @Last Modified time: 2019-06-27 09:04:28
*/
var myswiper={
			template:`<div class="content">
					<img :src="list[curindex]" alt="">
					<div class="jiaod" v-if="fouce">
						<span v-for="(val,index) of list" :class="index==curindex?'cur':''"></span>
					</div>
				</div>	`,
			data:function(){
				return {
					curindex:0
				}
			},
			props:{
				list:{
					type:Array,
					default:['./images/1.jpg','./images/2.jpg','./images/3.jpg',]
				},
				fouce:{
					type:Boolean,
					default:true
				},
				time:{
					type:Number,
					default:2000
				}
			},
			mounted(){
				setInterval(()=>{
					if(this.curindex==this.list.length-1){
						this.curindex=0;
					}else{
						this.curindex++;
					}
				},this.time);	
			}
		}
