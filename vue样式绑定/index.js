let root = new Vue({
	el:'#root',
	data:{
		styleobj:{
			color:"yellow"
		}
	},
	methods:{
		changecolor(){
			this.styleobj.color = this.styleobj.color === 'yellow'?"red":"yellow"
		}
	}
})