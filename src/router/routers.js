// 这个文件是配置页面路由
import Index from '@/views/index'
import Login from '@/views/login'
import StatusInfo from '@/views/statusPage'
import remoteControl from '@/views/remoteControlPage'

export default [{
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        name: 'login',
        components: {
            default: Login
        },
        meta: { auth: false } // 用于保存是否需要进行登陆验证
    },
    {
        path: '/index',
        name: 'index',
        components: {
            default: Index
        },
        children: [{
                path: '/status',
                name: 'status',
                components: {
                    default: StatusInfo
                },
                meta: {
                    auth: true
                }
            },
            {
                path: '/remotecontrol',
                name: 'remotecontrol',
                components: {
                    default: remoteControl
                },
                meta: {
                    auth: true
                }
            }
        ],
        meta: { auth: true } // 用于保存是否需要进行登陆验证
    }
]