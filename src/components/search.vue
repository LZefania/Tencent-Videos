<template>
    <div id="search">
        <div class="top">
            <div class="search">
                <router-link to="/search">
                    <img src="https://vm.gtimg.cn/tencentvideo/vstyle/mobile/v2/style/img/common/search_logo.png" alt="">
                </router-link>
                <input type="text" placeholder="怪物先生" @keydown.enter="add_history()">
                <router-link to="/index">
                    <span>返回</span>
                </router-link>
                <svg class="icon" aria-hidden="true" @click="clear_input()">
                    <use xlink:href="#icon-guanbi"></use>
                </svg>
            </div>
            <div class="search_history" v-if="search_history.length!=0">
                <div class="his_top">
                    <span>搜索历史</span>
                    <svg class="icon" aria-hidden="true" @click="clear_history()">
                        <use xlink:href="#icon-shanchu"></use>
                    </svg>
                </div>
                <div class="his_bottom">
                    <p v-for="(item,index) in search_history">{{item}}</p>
                </div>
            </div>
            <div class="nav">
                <ul>
                    <li v-for="(item,index) in nav" :class="{current_li:current_index==index}" @click="change(index)">
                        {{item.nav_name}}
                    </li>
                </ul>
            </div>
            <div class="range">
                <ul>
                    <li v-for="(item,index) in nav[current_index].list">
                        <span>{{index+1}}</span>
                        <span>{{item.video_name}}</span>
                        <svg class="icon" aria-hidden="true">
                            <use :xlink:href="item.svg_href"></use>
                        </svg>
                    </li>
                </ul>
            </div>
            <div class="footer">
                <p>Copyright © 1998 - 2020 Tencent. All Rights Reserved</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            current_index:0,
            search_history:[],
            nav:[
                {
                    nav_name:'热搜',
                    list:[
                    {
                        video_name:'斗罗大陆',
                        svg_href:'#icon-chiping'
                    },
                    {
                        video_name:'奔跑吧 第4季',
                        svg_href:'#icon-chiping'
                    },
                    {
                        video_name:'脱口秀大会 第3季',
                        svg_href:'#icon-shangsheng'
                    },
                    {
                        video_name:'三十而已',
                        svg_href:'#icon-chiping'
                    },
                    {
                        video_name:'八佰',
                        svg_href:'#icon-xiajiang'
                    },
                    {
                        video_name:'穿越火线',
                        svg_href:'#icon-chiping'
                    },
                    {
                        video_name:'极限挑战 第6季',
                        svg_href:'#icon-xiajiang'
                    },
                    {
                        video_name:'王牌对王牌 第5季',
                        svg_href:'#icon-shangsheng'
                    },
                    {
                        video_name:'小猪佩奇之欢乐一家人',
                        svg_href:'#icon-shangsheng'
                    },
                    {
                        video_name:'德云斗笑社',
                        svg_href:'#icon-xiajiang'
                    },
                    {
                        video_name:'青春环游记 第2季',
                        svg_href:'#icon-xiajiang'
                    },
                    {
                        video_name:'2020中国好声音',
                        svg_href:'#icon-xiajiang'
                    },
                    {
                        video_name:'且听凤鸣',
                        svg_href:'#icon-xiajiang'
                    },
                    {
                        video_name:'摩天大楼',
                        svg_href:'#icon-shangsheng'
                    },
                    {
                        video_name:'精灵梦叶罗丽第八季',
                        svg_href:'#icon-shangsheng'
                    },
                    ]
                },
                {
                    nav_name:'电视剧',
                    list:[
                    {
                        video_name:'三十而已',
                        svg_href:'#icon-chiping'
                    },
                    {
                        video_name:'穿越火线',
                        svg_href:'#icon-chiping'
                    },
                    {
                        video_name:'且听凤鸣',
                        svg_href:'#icon-xiajiang'
                    },
                    {
                        video_name:'摩天大楼',
                        svg_href:'#icon-chiping'
                    },
                    {
                        video_name:'如懿传',
                        svg_href:'#icon-chiping'
                    },
                    {
                        video_name:'锦绣南歌',
                        svg_href:'#icon-shangsheng'
                    },
                    {
                        video_name:'独孤天下',
                        svg_href:'#icon-xiajiang'
                    },
                    {
                        video_name:'陈情令',
                        svg_href:'#icon-chiping'
                    },
                    {
                        video_name:'琉璃',
                        svg_href:'#icon-shangsheng'
                    },
                    {
                        video_name:'传闻中的陈芊芊',
                        svg_href:'#icon-xiajiang'
                    },
                    {
                        video_name:'太太万岁',
                        svg_href:'#icon-shangsheng'
                    },
                    {
                        video_name:'龙日一你死定了2',
                        svg_href:'#icon-xiajiang'
                    },
                    {
                        video_name:'以家人之名',
                        svg_href:'#icon-chiping'
                    },
                    {
                        video_name:'女世子',
                        svg_href:'#icon-xiajiang'
                    },
                    {
                        video_name:'幸福还会来敲门',
                        svg_href:'#icon-shangsheng'
                    },
                    ]
                },
                {
                    nav_name:'少儿',
                    list:[]
                },
                {
                    nav_name:'综艺',
                    list:[]
                },
                {
                    nav_name:'电影',
                    list:[]
                },
                {
                    nav_name:'动漫',
                    list:[]
                },
                {
                    nav_name:'明星',
                    list:[]
                },
                {
                    nav_name:'游戏',
                    list:[]
                },
                {
                    nav_name:'音乐',
                    list:[]
                },
                {
                    nav_name:'热点',
                    list:[]
                },
                {
                    nav_name:'实时',
                    list:[]
                },
            ]
        }
    },
    methods:{
        change(temp){
            this.current_index=temp;
        },
        add_history(){
            this.search_history.unshift($('input').eq(0).val());
            $('input').eq(0).val('');
        },
        clear_input(){
            if($('input').eq(0).val()!=''){
                $('input').eq(0).attr('placeholder','输入片名、主演或导演');
            }
            $('input').eq(0).val('');
        },
        clear_history(){
            this.search_history=[];
        }
    }
}
</script>

<style scoped>
    #search{
        margin: 0px -13px;
    }
    #search .top .search{
        height: 35px;
        padding: 10px 10px;
        position: relative;
    }
    #search .top .search img{
        width: 75px;
    }
    #search .top .search input{
        width: calc(100% - 146px);
        height: 33px;
        font-size: 14px;
        line-height: 16px;
        position: relative;
        top: -7px;
        padding: 0px 13px;
        border: 1px solid skyblue;
        border-radius: 18px;
        outline: none;
    }
    #search .top .search span{
        display: inline-block;
        width: 28px;
        color: #383838;
        position: relative;
        top: -7px;
        right: 2px;
        font-size: 14px;
        line-height: 33px;
        margin-left: 5px;
    }
    #search .top .search svg{
        position: absolute;
        font-size: 20px;
        top: 17px;
        right: 55px;
    }
    #search .search_history .his_top{
        padding: 10px 10px 5px;
        margin: 0px 6px 5px;
        color: #8d8d8d;
        font-size: 13px;
    }
    #search .search_history .his_top svg{
        float: right;
        font-size: 15px;
    }
    #search .search_history .his_bottom{
        max-height: 74px;
        padding-left: 10px;
        overflow: hidden;
    }
    #search .search_history .his_bottom p{
        display: inline-block;
        max-width: calc(100% - 10px);
        margin: 0px 10px 10px 0px;
        padding: 0px 10px;
        overflow: hidden;
        border-radius: 2px;
        background-color: #f7f7f7;
        color: #4c4c4c;
        font-size: 14px;
        line-height: 30px;
        /* -webkit-line-clamp: 1; */
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    #search .nav{
        width: 100%;
        overflow: auto;
    }
    #search .nav::-webkit-scrollbar{
        display: none;
    }
    #search .nav ul{
        width: 498px;
        padding: 6px 8px;
        overflow: auto;
    }
    #search .nav li{
        float: left;
        font-size: 14px;
        color: #222;
        margin: 0px 8px 5px;
    }
    #search .nav .current_li{
        color: #ff6022;
        font-weight: bold;
    }
    #search .nav .current_li:after{
        content:'';
        display: block;
        width: 18px;
        height: 2.5px;
        background: #ff6022;
        margin: 3px auto 0px;
    }
    #search .range{
        padding-left: 3px;
    }
    #search .range ul{
        padding-left: 10px;
    }
    #search .range li{
        margin-top: 10px;
        padding-bottom: 10px;
        border-bottom: 1px solid #ebebeb;
        position: relative;
    }
    #search .range li span:nth-of-type(1){
        display: inline-block;
        font-size: 14px;
        width: 16px;
        height: 16px;
        line-height: 16px;
        text-align: center;
        margin-right: 5px;
        background: #e6e6e6;
        color: #878787;
    }
    #search .range li:nth-of-type(1) span:nth-of-type(1){
        background: #e42818;
        color: #fff;
    }
    #search .range li:nth-of-type(2) span:nth-of-type(1){
        background: #ff7100;
        color: #fff;
    }
    #search .range li:nth-of-type(3) span:nth-of-type(1){
        background: #ffb900;
        color: #fff;
    }
    #search .range li span:nth-of-type(2){
        color: #4c4c4c;
        font-size: 14px;
        line-height: 30px
    }
    #search .range li svg{
        font-size: 10px;
        position: absolute;
        right: 10px;
        top: 10px;
    }
    #search .footer{
        height: 48px;
        width: 100%;
        line-height: 48px;
        text-align: center;
        font-size: 10px;
        color: #b3b3b3;
        background-color: #eaeaea;
    }
</style>