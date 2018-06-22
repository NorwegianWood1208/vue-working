Vue.component('like',{
	template:'#likes',
	data:function(){
		return {
			likes:0,
			likesed:false
		}
	},
	methods:{
		click(){
			if (!this.likesed) {
				this.likes++
				this.likesed = !this.likesed
			} else{
				this.likes--
				this.likesed = !this.likesed
			}
			
		}
	}
})
new Vue({
	el:'#root'
})