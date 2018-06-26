let root = new Vue({
	el:'#root',
	data:{
		firstname:"huahua",
		lastname:"wang"
	},
	computed:{
		fullname:{
			get(){
				return this.firstname + ' ' + this.lastname; 
			},
			set(value){
				var arr = value.split(" ")
				this.firstname = arr[0]
				this.lastname = arr[1]
			}
				
		}
	}
})