// 导入axios用于http数据通信
import axios from 'axios'
// 导入qs模块用于格式化字符串为json
import qs from 'qs'

const ajax = axios.create({
    // 定义默认URL
    baseURL: "http://localhost:8080"
})


export const userLogin = (username, password) => {
    return ajax({
        url: '/login',
        method: 'post',
        responseType: 'json',
        data: qs.stringify({'username': username, 'password': password})
    })
}