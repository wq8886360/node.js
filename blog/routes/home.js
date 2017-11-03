
let express = require('express');

let user = require('../models/user');

let home = express.Router();

home.get('/',(req,res)=>{
	res.render('home/index',{});
});

home.get('/article',(req,res)=>{
	res.render('home/article',{})
});

home.get('/register',(req,res)=>{
	res.render('home/register',{})
})
home.get('/login',(req,res)=>{
	res.render('home/login')
})

//注册用户
home.post('/register',(req,res)=>{
	console.log(req.body);
	user.insert(req.body,(err)=>{
		if(!err){
			res.json({
				code:10000,
				msg:'添加成功'
			});
		}
	})
	
})

//登录
home.post('/login',(req,res)=>{
	console.log(req.body)
	res.send('ok')
})
module.exports = home;