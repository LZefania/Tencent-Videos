<template>
    <div id="vip">
        <div class="top">
            <div class="search_input">
                <router-link to="/search">
                    <input type="text" placeholder="怪物先生">
                </router-link>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-sousuo"></use>
                </svg>
            </div>
        </div>
        <div class="bottom">
           <ul><li v-for="(item,index) in ul1" :class="{li_current:index==num1}" @click="change1(index)">{{item}}</li></ul>
           <ul><li v-for="(item,index) in ul2" :class="{li_current:index==num2}" @click="change2(index)">{{item}}</li></ul>
           <ul><li v-for="(item,index) in ul3" :class="{li_current:index==num3}" @click="change3(index)">{{item}}</li></ul>
           <ul><li v-for="(item,index) in ul4" :class="{li_current:index==num4}" @click="change4(index)">{{item}}</li></ul>
           <ul><li v-for="(item,index) in ul5" :class="{li_current:index==num5}" @click="change5(index)">{{item}}</li></ul>
           <ul><li v-for="(item,index) in ul6" :class="{li_current:index==num6}" @click="change6(index)">{{item}}</li></ul>
        </div>
        <div class="content">
            <ul>
                <li v-for="(item,index) in lis">
                    <router-link :to="'/play_video/'+item.vid">
                        <img :src="item.big_src" alt="">
                        <span>{{item.video_name}}</span>
                        <img :src="item.logo_src" alt="">
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="footer">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-refresh"></use>
            </svg>
            <router-link to="/index">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-zhuye"></use>
                </svg> 
            </router-link>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            ul1:['电视剧','电影','动漫','综艺','少儿','纪录片','音乐','知识'],
            ul2:['最热','最新','好评','知乎高分'],
            ul3:['全部','内地','美国','泰国','中国香港','中港台湾','韩国','日本','腾讯出品','其他'],
            ul4:['全部','偶像爱情','古装历史','玄幻史诗','都市生活','罪案谍战','历险科幻','军旅抗战','喜剧','武侠江湖','青春校园','时代传奇','体育竞技','真人动漫'],
            ul5:['全部','2020','2019','2018','2017','2016','2015','2014','2013','2012','2011','2010','更早'],
            ul6:['全部','会员','超前点播'],
            num1:0,
            num2:0,
            num3:0,
            num4:0,
            num5:0,
            num6:0,
            lis:[
                {
                    vid:'1',
                    big_src:'./src/assets/images/vip/vip_1.jpg',
                    video_name:'三十而已',
                    logo_src:'./src/assets/images/vip/VIP.png'
                },
                {
                    vid:'2',
                    big_src:'./src/assets/images/vip/vip_2.jpg',
                    video_name:'且听凤鸣',
                    logo_src:'./src/assets/images/vip/only@2x.png'
                },
                {
                    vid:'1',
                    big_src:'./src/assets/images/vip/vip_3.jpg',
                    video_name:'穿越火线',
                    logo_src:'./src/assets/images/vip/VIP.png'
                },
                {
                    vid:'2',
                    big_src:'./src/assets/images/vip/vip_4.jpg',
                    video_name:'锦绣南歌',
                    logo_src:'./src/assets/images/vip/VIP.png'
                },
                {
                    vid:'1',
                    big_src:'./src/assets/images/vip/vip_5.jpg',
                    video_name:'摩天大楼',
                    logo_src:'./src/assets/images/vip/VIP.png'
                },
                {
                    vid:'2',
                    big_src:'./src/assets/images/vip/vip_6.jpg',
                    video_name:'女世子',
                    logo_src:'./src/assets/images/vip/VIP.png'
                },
                {
                    vid:'1',
                    big_src:'./src/assets/images/vip/vip_7.jpg',
                    video_name:'如懿传',
                    logo_src:'./src/assets/images/vip/VIP.png'
                },
                {
                    vid:'2',
                    big_src:'./src/assets/images/vip/vip_8.jpg',
                    video_name:'独孤天下',
                    logo_src:'./src/assets/images/vip/VIP.png'
                },
                {
                    vid:'1',
                    big_src:'./src/assets/images/vip/vip_9.jpg',
                    video_name:'幸福会来敲门',
                    logo_src:'./src/assets/images/vip/VIP.png'
                },
            ]
        }
    },
    methods:{
        change1(temp){
            this.num1=temp;
        },
        change2(temp){
            this.num2=temp;
        },
        change3(temp){
            this.num3=temp;
        },
        change4(temp){
            this.num4=temp;
        },
        change5(temp){
            this.num5=temp;
        },
        change6(temp){
            this.num6=temp;
        },
    }
}
</script>
<style scoped>
    a{
        text-decoration: none;
    }
    #vip{
        margin: 0px -13px;
    }
    #vip .top{
        padding: 9px;
        background-color: #EFEFEF;
        border-bottom: 1px solid #b6b7b7;
    }
    #vip .top .search_input{
        border-radius: 6px;
        background-color: #FFF;
        position: relative;
    }
    #vip .top .search_input input{
        width: calc(100% - 44px);
        border: none;
        margin-left: 33px;
        padding: 4px;
        font-size: 14px;
        color: #979797;
    }
    #vip .top .search_input svg{
        position: absolute;
        font-size: 18px;
        left: 5px;
        top: 5px;
        color: grey;
    }
    #vip .bottom ul{
        width: auto;
        padding: 9px 0px 9px 7px;
        white-space: nowrap;
        overflow: auto;
    }
    #vip .bottom ul::after{
        content: '';
        display: block;
        border-bottom: 1px solid #b6b7b7;
        position: relative;
        top: 9px;
        left: -7px;
    }
    #vip .bottom li{
        display: inline-block;
        font-size: 14px;
        line-height: 28px;
        padding: 0 13px;
        border-radius: 15px;
    }
    #vip .bottom li.li_current{
        color: #ff6a00;
        border: 1px solid #ff6a00;  
    }
    #vip .content{
        padding: 10px 5px;
    }
    #vip .content li{
        float: left;
        width: calc(33.33% - 10px);
        margin-bottom: 10px;
        text-align: center;
        position: relative;
        padding: 0px 5px;
    }
    #vip .content li img{
        width: 100%;
    }
    #vip .content li span{
        margin-top: 5px;
        font-size: 14px;
        line-height: 18px;
        color: #222;
    }
    #vip .content li img:nth-of-type(2){
        position: absolute;
        width: 37px;
        height: 27px;
        top: 0px;
        right: 5px;
    }
    #vip .footer{
        position: fixed;
        bottom: 0px;
        height: 44px;
        width: 100%;
        background-color: #363636;
    }
    #vip .footer{
        font-size: 25px;
    }
    #vip .footer>svg:nth-of-type(1){
        float: left;
        margin-top: 10px;
        margin-left: 20px;
    }
    #vip .footer a svg{
        color: white;
        float: right;
        margin-top: 10px;
        margin-right: 20px;
    }
</style>