var routers = [
	{
		path:'/',
		component:{
			template:'<div><h1>第一页<h1></div>'
		}
	},
	{
		path:'/about',
		component:{
			template:'<div><h1>关于我们<h1></div>'
		}
	}
]
var router = new VueRouter({
	routers: routers
})
new Vue({
	el:'#root',
	router:router
})