let root = new Vue({
	el:'#root',
	data:{
//		userinfo:{
//			name:'huahua',
//			age:21,
//			sex:'mail'
//		}
		userinfo:[1,2,3,4]
	},
	methods:{
		add(){
			Vue.set(root.userinfo,4,5)
		}
		
	}
})