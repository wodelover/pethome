/*
    file: server.js
    note: 此文件用于接收硬件使用HTTP协议通过POST方式发送的JSON数据
*/

// 导入express框架模块 
var express = require('express');
var app = express();

var bodyParser = require('body-parser');
// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false });

// 导入mysql模块
// var mysql = require('mysql');
// // 配置数据库连接信息
// var db_connection = mysql.createConnection({
//     host: 'localhost',
//     database: 'pethome',
//     user: 'root',
//     password: '123456'
// });


/* 跨域设置 */
app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*'); //访问控制允许来源：所有
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept'); //访问控制允许报头 X-Requested-With: xhr请求
    res.header('Access-Control-Allow-Metheds', 'PUT, POST, GET, DELETE, OPTIONS'); //访问控制允许方法
    // res.header('X-Powered-By', 'nodejs'); //自定义头信息，表示服务端用nodejs
    res.header('Content-Type', 'application/json;charset=utf-8');
    next();
});

/*
    url:  127.0.0.1:8081/petroom
    note: 硬件数据回传接口地址，数据返回也通过此接口地址
*/
app.post('/petroom', function(req, res) {

    // 定义接收数据缓冲区
    var data = '';

    // 连接数据接收完成信号
    req.on('end', function() {
        console.log("recvdata:" + data);
        res.send(data);
    });

    // 连接有新数据到来信号
    req.on('data', function(chunk) {
        data += chunk;
    });
});

/*
    url:  127.0.0.1:8081/login 
    note: 网页首页登陆接口
*/
app.post('/login', urlencodedParser, function(req, res) {

    // 获取用户名和密码
    var request = {
        "username": req.body.username,
        "password": req.body.password
    };

    // 验证用户名和密码
    console.log("username:" + request.username);
    console.log("password:" + request.password);


    // 返回是否验证成功
    var response = {
        "loginStatus": true
    }
    res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
    // 把json对象转换为json字符串
    res.end(JSON.stringify(response));
});

// 开启服务器监听
var server = app.listen(8080, 'localhost' ,function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log("listen at:%s %s", host, port);
});