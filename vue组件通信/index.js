Vue.prototype.bus = new Vue();
Vue.component('child',{
	template:'<div @click="change">{{con}}</div>',
	props:{
		content:String
	},
	data:function(){
		return {
			con:this.content
		}
	},
	methods:{
		change(){
			this.bus.$emit('change',this.con)
		}
	},
	mounted(){
		var this_ = this
		this.bus.$on('change',function(msg){
			this_.con = msg
		})
	}
})
let root = new Vue({
	el:'#root',
	data:{
		
	},
	methods:{
	}
})