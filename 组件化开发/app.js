//子组件
//Vue.component('ppa',{
//	template:'<button @click="click">搞我</button>',
//	methods:{
//		click(){
//			alert('我执行了')
//		}
//	}
//})
//var ppa = {
//	template:'<button @click="click">搞我</button>',
//	methods:{
//		click(){
//			alert('我执行了')
//		}
//	}
//}
//挂载点
new Vue({
	el:'#demo1',
	components:{
		ppa:{
				template:'<button @click="click">搞我</button>',
				methods:{
					click(){
						alert('我执行了')
					}
				}
			}
	}
})
//new Vue({
//	el:'#demo2'
//})