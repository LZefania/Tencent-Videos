<template>
    <div id="home">
        <header>
            <div class="top">
                <img src="../assets/images/logo/logo_home.png" alt="">
                <router-link to="/search">
                    <input type="text" placeholder="怪物先生">
                </router-link>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-sousuo"></use>
                </svg>
            </div>
            <div class="bottom">
                <ul>
                    <li v-for="(item,index) in nav_list">
                        <router-link :to="item.path">
                            {{item.name}}
                            <p></p>
                        </router-link>
                    </li>
                </ul>
            </div>
        </header>
        <main>
            <router-view></router-view>
        </main>
    </div>
</template>

<script>
export default {
    data(){
        return{
        nav_list:[
            {
                name:'精选',
                path:'/index'
            },
            {
                name:'电视剧',
                path:'/tvPlay'
            },
            {
                name:'VIP',
                path:'/vip'
            },
            {
                name:'电影',
                path:'/movie'
            },
            {
                name:'综艺',
                path:'/variety'
            },
            {
                name:'动漫',
                path:'/comic'
            },
            {
                name:'少儿',
                path:'/child'
            },
            {
                name:'娱乐',
                path:'/entertainment'
            },
            {
                name:'潮音',
                path:'/music'
            },
            {
                name:'游戏',
                path:'/game'
            },
        ]
        }
    }
}

</script>
<style scoped>
    ::-webkit-scrollbar{
        display:none;
    }
    #home header .top{
        height: 35px;
        width: 100%;
        margin-top: 15px;
        position: relative;
    }
    #home header .top img{
        float: left;
        height: 22px;
        margin-top: 3px;
    }
    #home header .top input{
        float: right;
        font-size: 13px;
        color: gray;
        width: 140px;
        height: 30px;
        border: none;
        background-color: rgba(128, 128, 128,0.05);
        padding-left: 10px;
    }
    #home header .top svg{
        font-size: 15px;
        color: #ff6022;
        position: absolute;
        right: 17px;
        top: 6px;
    }
    #home header .bottom{
        width: 100%;
        overflow: auto;
    }
    #home header .bottom ul{
        height: 40px;
        width: 552px;
    }
    #home header .bottom li{
        float: left;
        font-size: 17px;
        font-weight: bold;
        width: auto;
        margin-right: 13px;
        margin-left: 9px;
        padding: 9px 0px;
    }
    #home header .bottom li:nth-of-type(1){
        margin-left: 0px;
    }
    #home header .bottom li:nth-of-type(10){
        margin-right: 0px;
    }
    #home header .bottom a{
        color: black;
        text-decoration: none;
    }
    #home header .bottom .router-link-active{
        color: #ff6022;
    }
     #home header a.router-link-active p{
        width: 12px;
        border-bottom: 2px solid #ff6022;
        margin: 2px auto;
    }
</style>