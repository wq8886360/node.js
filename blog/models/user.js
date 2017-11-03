let db = require('./db');

//插入用户
exports.insert = function(data,cb){
	let query = 'insert into users set ?';

	data.pass= db.md5(data.pass);
	db.query(query,data,(err)=>{
		if(err){
			return cb(err);
		}
		cb(null);
	})
}