Vue.component('prevent',{
	template:`<div>
				<children @check="checkeds"></children>
				<span v-if="checked">你有888888888888门</span>
			</div>`,
	data:function(){
		return {
			checked:false
		}
	},
	methods:{
		checkeds(obj){
			this.checked = true
			console.log(obj)
		}
	}
	
})
Vue.component('children',{
	template:`<div>
				<button @click="click">显示余额</button>
			</div>`,
	methods:{
		click(){
			this.$emit('check',{name:11})
		}
	}
	
})
new Vue({
	el:'#root'
})