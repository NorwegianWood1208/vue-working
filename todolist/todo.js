//Vue.component('list',{
//	template:'<li>{{value}}</li>',
//	props: ['value']
//})
var list ={
	template:'<li @click="remove">{{value}}</li>',
	props: ['value','keys'],
	methods:{
		remove(){
			this.$emit('delete',this.keys)
		}
	}
}
let ppa = new Vue({
	el:'#root',
	data:{
		list:[],
		inputvalue:''
	},
	methods:{
		add(){
			this.list.push(this.inputvalue)
			this.inputvalue = ''
		},
		remove(index){
			this.list.splice(index,1)
		}
	},
	components:{
		list:list
	}
})