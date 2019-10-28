// 这个文件是配置页面路由
import Index from '@/views/index'
import Login from '@/views/login'

export default [{
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        name: 'login',
        components: {
            default: Login
        }
    },
    {
        path: '/index',
        name: 'index',
        components: {
            default: Index
        }
    }
]