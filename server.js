/*
    file: server.js
    note: 此文件用于接收硬件使用HTTP协议通过POST方式发送的JSON数据
*/
var express = require('express');
var app = express();

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
app.post('/login', function(req, res) {
    var data = '';
    req.on('end', function() {
        console.log('login:' + data);
    });

    req.on('data', function(chunk) {
        data += chunk;
    })

});

// 开启服务器监听
var server = app.listen(8081, '192.168.0.188', function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log("listen at:%s %s", host, port);
});