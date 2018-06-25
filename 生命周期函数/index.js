let root = new Vue({
	el:'#root',
	data:{
		text:'你好世界'
	},
	beforeCreate(){
		console.log('beoforeCreate')
	},
	created(){
		console.log('created')
	},
	beforeMount(){
		console.log(this.$el)
		console.log('beforeMount')
	},
	mounted(){
		console.log(this.$el)
		console.log('Mount')
	},
	beforeUpdate(){
		console.log('beforeUpdate')
	},
	updated(){
		console.log('update')
	}
})







