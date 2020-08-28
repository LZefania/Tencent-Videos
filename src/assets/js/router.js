import VueRouter from 'vue-router'

import home from '../../components/home.vue'
import index from '../../components/index.vue'
import tvPlay from '../../components/tvPlay.vue'
import vip from '../../components/vip.vue'
import movie from '../../components/movie.vue'
import variety from '../../components/variety.vue'
import comic from '../../components/comic.vue'
import child from '../../components/child.vue'
import entertainment from '../../components/entertainment.vue'
import music from '../../components/music.vue'
import game from '../../components/game.vue'

import play_video from '../../components/play_video.vue'
import search from '../../components/search.vue'

import login from '../../components/login.vue'
import QQ_login from '../../components/QQ_login.vue'

export default new VueRouter({
    routes:[
        {
            path:'/',
            component:home,
            children:[
                {
                    path:'/index',
                    component:index
                },
                {
                    path:'/tvPlay',
                    component:tvPlay
                },
                {
                    path:'/movie',
                    component:movie
                },
                {
                    path:'/variety',
                    component:variety
                },
                {
                    path:'/comic',
                    component:comic
                },
                {
                    path:'/child',
                    component:child
                },
                {
                    path:'/entertainment',
                    component:entertainment
                },
                {
                    path:'/music',
                    component:music
                },
                {
                    path:'/game',
                    component:game
                }
            ],
            redirect:'/index'
        },
        {
            path:'/vip',
            component:vip
        },
        {
            path:'/play_video',
            component:play_video
        },
        {
            path:'/search',
            component:search
        },
        {
            path:'/login',
            component:login
        },
        {
            path:'/QQ_login',
            component:QQ_login
        },
        {
            path:'/play_video/:vid',
            component:play_video
        },
        {
            path:'/*',
            redirect:'/index'
        }
    ]
})