Vue.component('prevent',{
	template:`<div><children @checks="checkeds"></children>
				<span v-if="checked">爸爸你有99999999999元<span>
				</div>`,
	data:function(){
		return{
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
	template:'<button @click="click">我的存款</button>',
	methods:{
		click(){
			this.$emit('checks',{a:1})
		}
	}
})
new Vue({
	el:'#root'
})