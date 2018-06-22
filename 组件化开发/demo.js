//1、直接定义（不安全、耗性能）
//Vue.component('huahua',{
//	//双引号******************
//	template:'<button @click="onClick">狗子</button>',
//	methods:{
//		onClick(){
//			alert('我爱王花花')
//		}
//	}
//})
//new Vue({
//	el:'#demo1'
//})
//----------------------------------------------------------------------------------
//2、全局定义（不安全、耗性能）
//var huahua = {
//	template:'<button @click="onClick">狗子</button>',
//	methods	:{
//		onClick(){
//			alert('我爱王花花')
//		}
//	}
//}
//new Vue({
//	el:'#demo1',
//	components:{
//		huahua
//	}
//})
//——————————————————————————————————————————————————————————————————————————————————————————————————————
//3、挂载点定义****常用
//new Vue({
//	el:'#demo1',
//	components:{
//		huahua:{
//			template:'<button @click="onClick">狗子</button>',
//			methods:{
//				onClick(){
//					alert('我爱王花花')
//				}
//			}
//		}
//	}
//})
