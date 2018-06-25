let root = new Vue({
	el:'#root',
	data:{
		firstname:'huahua',
		lastname:'wang',
		age:18
	},
	computed:{
		fullname(){
			console.log('我执行了一次')
			return this.firstname+' '+this.lastname
			
		}
	}
})