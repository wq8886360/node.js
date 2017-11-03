let express = require('express');

// 后台主路由
let admin = express.Router();

admin.get('/', (req, res) => {
    res.render('admin/index',{})
});
admin.get('/add', (req, res) => {
    res.render('admin/add',{})
});
module.exports = admin;