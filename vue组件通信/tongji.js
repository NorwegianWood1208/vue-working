//调度器

var events =  new Vue()

Vue.component('huahua',{
	template:`
				<div>
					我说：<input @keyup="click" type="text" v-model="said" /><span>{{said}}</span>
				</div>
			`,
	data:function(){
		return {
			said:''
		}
	},
	methods:{
		click(){
			events.$emit('huahua_said_somesthing',this.said)
		}
	}
})
Vue.component('xiaohua',{
	template:'<div>花花说                {{huahua_said}}</div>',
	data:function(){
		return {
			huahua_said:''
		}
	},
	mounted:function(){
		var oun = this
		events.$on('huahua_said_somesthing',function(data){
			oun.huahua_said = data
		})
	}
})
new Vue({
	el:'#root'
})