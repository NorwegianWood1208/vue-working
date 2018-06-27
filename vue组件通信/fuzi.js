Vue.component('app',{
	template:'<button @click="click()">{{val}}</button>',
	props:['val'],
	methods:{
		click(){
			alert(this.val)
		}
	}
})
Vue.component('user',{
	template:'<a :href="\'../组件化开发/\'+ username+\'.html\'">{{username}}</a>',
	props:['username'],
	methods:{
	}
})
new Vue({
	el:'#root',
	data:{
		
	}
})