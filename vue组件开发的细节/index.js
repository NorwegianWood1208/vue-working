//Vue.component('row',{
//	template:'<tr><td>这是一个表<td><tr>'
//})
Vue.component('counter',{
	template: '<div @click="handlenum">{{number}}</div>',
	data:function(){
		return {
			number:0
		}
	},
	methods:{
		handlenum(){
			this.number++
			this.$emit('handnum')
		}
	}
})

let root = new Vue({
	el:'#root',
	data:{
		all:0
	},
	methods:{
		numadd(){
			this.all = this.$refs.one.number + this.$refs.two.number
		}
	}
})