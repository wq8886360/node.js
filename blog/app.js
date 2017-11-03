let express = require('express');

let bodyParser = require('body-parser');

let app = express();

app.listen(3000,()=>{
	console.log('成功!')
});
app.set('view engine','xtpl'); 

app.set('views','./views');

app.use(express.static('./public'));

app.use(bodyParser.urlencoded({extended:false}))

let admin = require('./routes/admin');

let home = require('./routes/home');

app.use('/admin',admin);

app.use('/',home);   