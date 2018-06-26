let root = new Vue({
	el:'#root',
	data:{
		firstname:'huahua',
		lastname:'wang',
		fullname:'huahua wang',
		age:18
	},
	watch:{
		firstname(){
//			console.log('我执行了一次')
			this.fullname =  this.firstname+' '+this.lastname
		},
		lastname(){
//			console.log('我执行了一次')
			this.fullname =  this.firstname+' '+this.lastname
		}
	}
	
//	方法
//	methods:{
//		fullname(){
//			console.log('我执行了一次')
//			return this.firstname+' '+this.lastname
//			
//		}
//	}

//	计算属性
//	computed:{
//		fullname(){
//			console.log('我执行了一次')
//			return this.firstname+' '+this.lastname
//			
//		}
//	}
})