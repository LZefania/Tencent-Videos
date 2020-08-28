<template>
    <div id="play_video">
        <div class="blank">
        </div>
        <header>
            <div class="left">
                <router-link to='/index'>
                    <img src="../assets/images/play_video/top/logo_play_top.png" alt="">
                </router-link>
            </div>
            <div class="right">
                <div class="current_user">
                    <router-link to="/search">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-sousuo"></use>
                        </svg>
                    </router-link>
                    <router-link to='/login'>
                        <span class="QQ_fa">
                            <img class="head_image" src="../assets/images/play_video/top/head_image.jpg" alt="">
                            <img class="QQ" src="../assets/images/play_video/top/QQ.jpg" alt="">
                        </span>
                        <span>
                            <img class="vip_level" src="../assets/images/play_video/top/vip_level.jpg" alt="">
                        </span>
                    </router-link>
                    <p class="final">看完整版</p>
                </div>
            </div>
        </header>
        <div class="videos">
            <video ref="video" :src="vid.episodes[current_li].video_src" @click="control_show()"></video>
            <div v-if="first_play" class="try">
                <p>当前环境暂不支持播放完整版，请前往APP观看</p>
                <p>打开腾讯视频看完整版</p>
                <p @click="first_play_func()">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-bofang"></use>
                    </svg>
                    试看3分钟
                </p>
            </div>
            <div class="video_control" v-if="want_controll">
                <div class="center" v-if="continue_play" @click="continue_play_func()">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-play"></use>
                    </svg>
                </div>
                <div class="bottom">
                    <div class="left">
                        <svg class="icon" aria-hidden="true" v-if="want_pause" @click="pause_func()">
                            <use xlink:href="#icon-zantingtingzhi"></use>
                        </svg>
                        <svg class="icon" aria-hidden="true" v-if="continue_play" @click="continue_play_func()">
                            <use xlink:href="#icon-play"></use>
                        </svg>
                        <span></span>
                        <span></span>
                    </div>
                    <div class="right">
                        <span>倍速</span>
                        <span>高清</span>
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-quanping"></use>
                        </svg>
                    </div>
                    <mt-range v-model="rangeValue" :step="0.01" :bar-height="3"></mt-range>
                </div>
            </div>
        </div>
        <div class="relevant">
            <div class="left">
                <img src="../assets/images/play_video/top/watch_all_logo.jpg" alt="">
                <span>看全集高清完整版</span>
            </div>
            <div class="right">
                <p>打开</p>
            </div>
        </div>
        <main>
            <div class="simple_about">
                <p>{{vid.video_name}}</p>
                <p>
                    <span>{{vid.msg1}} ·</span>
                    <span>{{vid.msg2}}</span>
                    <span> · {{vid.msg3}}</span>
                    <span> · {{vid.msg4}}</span>
                </p>
                <div class="many_icon">
                    <div class="left">
                        <img src="../assets/images/play_video/top/HD_APP.png" alt="">
                    </div>
                    <div class="right">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-xihuan-tianjia"></use>
                        </svg>
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-xiazai"></use>
                        </svg>
                        <svg class="icon" aria-hidden="true" @click="action_sheet()">
                            <use xlink:href="#icon-gengduo"></use>
                        </svg>
                    </div>
                </div>
                <div class="vip_activities">
                    <p>VIP低至10.7元/月，抢先领穿越火线定制道具</p>
                </div>
            </div>
            <div class="drama_series">
                <div class="series_top">
                    <p>剧集</p>
                    <span>会员看全集</span>
                </div>
                <div class="series">
                    <ul>
                        <li v-for="(item,index) in vid.episodes" :class="{current_li:index==current_li}" @click="change_video(index)">
                            {{item.video_name}}
                        </li>
                    </ul>
                </div>
            </div>
            <div class="command_for">
                <p>为你推荐</p>
                <ul>
                    <li v-for="(item,index) in command_for_you" v-if="now_show>index">
                        <img :src="item.big_src" alt="">
                        <p class="title">{{item.title}}</p>
                        <p class="remark">{{item.remark}}</p>
                        <span class="label"><img src="../assets/images/play_video/command_for/label.jpg" alt=""></span>
                        <span class="episodes">{{item.episodes}}</span>
                    </li>
                </ul>
                <div class="svg" @click="show_more()" v-if="want_show_more">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-jiantou-copy"></use>
                    </svg>
                </div>
                <div class="show_more" v-if="is_show_more">
                    打开腾讯视频，看更多精彩内容
                </div>
            </div>
            <div class="user_comment">
                <p>评论</p>
                <ul>
                    <li v-for="(item,index) in comments">
                        <img class="user_image" :src="item.user_image" alt="">
                        <span class="user_name">{{item.user_name}}</span>
                        <img src="../assets/images/play_video/comments/vip_level_year.png" alt="" v-if="item.isVIP">
                        <p>{{item.content}}</p>
                        <ul v-if="item.comment_img">
                            <li>
                                <img :src="item.comment_img" alt="">
                            </li>
                        </ul>
                    </li>
                </ul>
                <div class="all_comments">
                    <img src="../assets/images/play_video/comments/comment_logo.jpg" alt="">
                    <p>打开腾讯视频，参与51620条热评大讨论</p>
                </div>
            </div>
            <div class="vip_welfare">
                <p>会员福利</p>
                <ul>
                    <li v-for="(item,index) in welfare">
                        <img :src="item.src" alt="">
                        <p>{{item.title}}</p>
                        <span>{{item.content}}</span>
                    </li>
                </ul>
            </div>
            <div class="periphery_recommand">
                <p>周边推荐</p>
                <ul>
                    <li v-for="(item,index) in apps">
                        <img :src="item.src" alt="">
                        <p>{{item.app_name}}</p>
                        <button>下载</button>
                    </li>
                </ul>
            </div>
        </main>
        <mt-actionsheet :actions="actions" v-model="sheetVisible"></mt-actionsheet>
    </div>
</template>
<script>
export default {
    data(){
        return{
            first_play:true,
            want_controll:false,
            want_pause:true,
            continue_play:false,
            a_interval:'',
            rangeValue:0,
            current_time:0,
            duration:0,
            want_show_more:true,
            is_show_more:false,
            now_show:4,
            current_li:0,
            vid:{},
            vid1:{
                video_name:'穿越火线',
                msg1:'8.9 分',
                msg2:'VIP',
                msg3:'全36集',
                msg4:'16.1亿次播放',
                episodes:[
                    {
                        video_name:'01',
                        video_src:'./src/assets/videos/vid1_01.mp4'
                    },
                    {
                        video_name:'02',
                        video_src:'./src/assets/videos/vid1_02.mp4'
                    },
                    {
                        video_name:'03',
                        video_src:'./src/assets/videos/vid1_03.mp4'
                    },
                    {
                        video_name:'04',
                        video_src:'./src/assets/videos/vid1_01.mp4'
                    },
                    {
                        video_name:'05',
                        video_src:'./src/assets/videos/vid1_02.mp4'
                    },
                    {
                        video_name:'06',
                        video_src:'./src/assets/videos/vid1_03.mp4'
                    },
                    {
                        video_name:'07',
                        video_src:'./src/assets/videos/vid1_01.mp4'
                    },
                    {
                        video_name:'08',
                        video_src:'./src/assets/videos/vid1_02.mp4'
                    },
                    {
                        video_name:'09',
                        video_src:'./src/assets/videos/vid1_03.mp4'
                    },
                ]
            },
            vid2:{
                video_name:'且听凤鸣',
                msg1:'7.8 分',
                msg2:'超前点播',
                msg3:'全30集',
                msg4:'6.7亿次播放',
                episodes:[
                    {
                        video_name:'01',
                        video_src:'./src/assets/videos/vid2_01.mp4'
                    },
                    {
                        video_name:'02',
                        video_src:'./src/assets/videos/vid2_02.mp4'
                    },
                    {
                        video_name:'03',
                        video_src:'./src/assets/videos/vid2_03.mp4'
                    },
                    {
                        video_name:'04',
                        video_src:'./src/assets/videos/vid2_01.mp4'
                    },
                    {
                        video_name:'05',
                        video_src:'./src/assets/videos/vid2_02.mp4'
                    },
                    {
                        video_name:'06',
                        video_src:'./src/assets/videos/vid2_03.mp4'
                    },
                    {
                        video_name:'07',
                        video_src:'./src/assets/videos/vid2_01.mp4'
                    },
                    {
                        video_name:'08',
                        video_src:'./src/assets/videos/vid2_02.mp4'
                    },
                    {
                        video_name:'09',
                        video_src:'./src/assets/videos/vid2_03.mp4'
                    },
                ]
            },
            command_for_you:[
            {
                big_src:'./src/assets/images/play_video/command_for/command_for1.jpg',
                title:'全职高手',
                remark:'杨洋江疏影共赴荣耀之路',
                episodes:'全40集'
            },
            {
                big_src:'./src/assets/images/play_video/command_for/command_for2.jpg',
                title:'甜蜜暴击',
                remark:'鹿晗变身格斗系元气学长',
                episodes:'全38集'
            },
            {
                big_src:'./src/assets/images/play_video/command_for/command_for3.jpg',
                title:'斗破苍穹',
                remark:'吴磊林允闯荡热血江湖',
                episodes:'全42集'
            },
            {
                big_src:'./src/assets/images/play_video/command_for/command_for4.jpg',
                title:'择天记',
                remark:'鹿晗荧屏首秀逆天改命',
                episodes:'全56集'
            },
            {
                big_src:'./src/assets/images/play_video/command_for/command_for5.jpg',
                title:'沙海',
                remark:'吴磊秦昊开启探险之旅',
                episodes:'全52集'
            },
            {
                big_src:'./src/assets/images/play_video/command_for/command_for6.jpg',
                title:'亲爱的，热爱的',
                remark:'杨紫李现追逐爱与梦想',
                episodes:'全41集'
            },
            {
                big_src:'./src/assets/images/play_video/command_for/command_for7.jpg',
                title:'什刹海',
                remark:'关晓彤吴磊用爱烹饪美味奇缘',
                episodes:'全42集'
            },
            {
                big_src:'./src/assets/images/play_video/command_for/command_for8.jpg',
                title:'极速营救',
                remark:'兵王智勇护主险中求生',
            },
            ],
            comments:[
                {
                    user_image:'./src/assets/images/play_video/comments/user_image1.jpg',
                    user_name:'追剧小奶鹅',
                    isVIP:true,
                    content:'肖枫、路小北两个在现实中失意的人在游戏中相遇，同时路小北告诉了肖枫他之后的成就，如果是你，会选择相信路小北吗？',
                    comment_img:'./src/assets/images/play_video/comments/comment_img1.jpg',
                },
                {
                    user_image:'./src/assets/images/play_video/comments/user_image2.jpg',
                    user_name:'腾讯网友',
                    isVIP:false,
                    content:'牛逼',
                    comment_img:'',
                },
                {
                    user_image:'./src/assets/images/play_video/comments/user_image3.jpg',
                    user_name:'☆小爷我有枪☆',
                    isVIP:false,
                    content:'我是',
                    comment_img:'',
                },
                {
                    user_image:'./src/assets/images/play_video/comments/user_image4.jpg',
                    user_name:'小迷糊',
                    isVIP:true,
                    content:'???? 我',
                    comment_img:'',
                },
            ],
            welfare:[
                {
                    src:'./src/assets/images/play_video/welfare/welfare1.jpg',
                    title:'VIP首月仅6元',
                    content:'看《且听》抽华为手机',
                },
                {
                    src:'./src/assets/images/play_video/welfare/welfare2.jpg',
                    title:'七夕甜蜜陪伴',
                    content:'爱要有礼，好课5折起',
                },
                {
                    src:'./src/assets/images/play_video/welfare/welfare3.jpg',
                    title:'VIP赢《八佰》电影票',
                    content:'观影团邀你一起看电影',
                },
                {
                    src:'./src/assets/images/play_video/welfare/welfare4.jpg',
                    title:'VIP首月仅6元',
                    content:'享《认真的嘎嘎们》5大权益',
                },
                {
                    src:'./src/assets/images/play_video/welfare/welfare5.jpg',
                    title:'开VIP得Super Buff',
                    content:'每日翻倍，自动加油',
                },
            ],
            apps:[
                {
                    src:'./src/assets/images/play_video/apps/app1.jpg',
                    app_name:'穿越火线-枪战王者',
                },
                {
                    src:'./src/assets/images/play_video/apps/app2.jpg',
                    app_name:'雪鹰领主',
                },
                {
                    src:'./src/assets/images/play_video/apps/app3.jpg',
                    app_name:'仙剑奇侠传online',
                },
                {
                    src:'./src/assets/images/play_video/apps/app4.jpg',
                    app_name:'斗破苍穹：异火重燃',
                },
                {
                    src:'./src/assets/images/play_video/apps/app5.jpg',
                    app_name:'轩辕剑online',
                },
                {
                    src:'./src/assets/images/play_video/apps/app6.jpg',
                    app_name:'仙剑奇侠传四',
                },
                {
                    src:'./src/assets/images/play_video/apps/app7.jpg',
                    app_name:'猎人',
                },
                {
                    src:'./src/assets/images/play_video/apps/app8.jpg',
                    app_name:'龙之谷2',
                },
                {
                    src:'./src/assets/images/play_video/apps/app9.jpg',
                    app_name:'战歌竞技场',
                },
                {
                    src:'./src/assets/images/play_video/apps/app10.jpg',
                    app_name:'龙族幻想',
                },
            ],
            actions:[
                {
                    name:'',
                    method:'',
                }
            ],
            sheetVisible:false,
        }
    },
    beforeMount(){
        if(this.$route.params.vid=='1'){
            this.vid=this.vid1;
        }
        if(this.$route.params.vid=='2'){
            this.vid=this.vid2;
        }
    },
    destroyed(){
        clearInterval(this.a_interval);
    },
    watch:{
        first_play(){
            this.a_interval=setInterval(()=>{
                this.current_time=$('video')[0].currentTime;
                this.duration=$('video')[0].duration;
                $('.videos .video_control .bottom .left span').eq(0).html(`${parseInt(this.current_time/60)}:${parseInt(this.current_time%60)}`);
                $('.videos .video_control .bottom .left span').eq(1).html(`/${parseInt(this.duration/60)}:${parseInt(this.duration%60)}`);
            },1000);
        },
        rangeValue(){
            $('video')[0].currentTime=this.rangeValue*$('video')[0].duration*0.01;
        },
        current_time(){
            this.rangeValue=Math.round((this.current_time/this.duration)*100);
        },
        current_li(){
            this.first_play=true;
            this.want_controll=false;
            this.want_pause=true;
            this.continue_play=false;
            clearInterval(this.a_interval);
        }
    },
    methods:{
        first_play_func(){
            this.first_play=false;
            this.$refs.video.play();
        },
        control_show(){
            if(!this.first_play){
                this.want_controll=true;
            }
        },
        pause_func(){
            this.want_pause=false;
            this.continue_play=true;
            this.$refs.video.pause();
        },
        continue_play_func(){
            this.want_pause=true;
            this.continue_play=false;
            this.$refs.video.play();
        },
        show_more(){
            this.want_show_more=false;
            this.is_show_more=true;
            this.now_show=100;
        },
        action_sheet(){
            this.sheetVisible=true;
        },
        change_video(temp){
            this.current_li=temp;
        }
    }
}
</script>

<style>
    #play_video .videos .bottom .mt-range{
        height: 12px;
        line-height: 12px;
        position: relative;
        top: 5px;
    }
    #play_video .videos .bottom .mt-range-content{
        margin-right: 12px;
    }
    #play_video .videos .bottom .mt-range-runway{
        right: -12px;
    }
    #play_video .videos .bottom .mt-range-progress{
        background-color: #ff7000;
    }
    #play_video .videos .bottom .mt-range-thumb{
        background-color: #ff7000;
        width: 12px;
        height: 12px;
    }

    .mint-actionsheet-listitem{
        height: 130px;
    }
    .mint-actionsheet-listitem::after{
        content: url(../assets/images/accusation.png);
        display: block;
        transform: scale(0.95);
        float: left;
        position: relative;
        left: 15px;
        top: 20px;
    }
    .mint-actionsheet-button{
        height: 70px;
    }
</style>

<style scoped>
#play_video .blank{
    height: 50px;
}
#play_video header{
    width: calc(100% - 26px);
    height: 50px;
    background-color: #2D2D2E;
    margin: 0px -13px;
    padding:0px 13px;
    position: fixed;
    top: 0px;
    z-index: 10;
}
#play_video header .left{
    float: left;
}
#play_video header .left img{
    height: 22px;
    width: 114px;
    margin-top: 14px;
}
#play_video header .right{
    float: right;
    height: 50px;
}
#play_video header .current_user{
    height: 50px;
}
#play_video header svg{
    color: white;
}
#play_video header .head_image{
    width: 30px;
    height: 30px;
    position: relative;
    top: 10px;
    border-radius: 50%;
    margin-left: 8px;
}
#play_video header .QQ_fa{
    position: relative;
}
#play_video header .QQ{
    width: 12px;
    height: 12px;
    position: absolute;
    right: 5px;
    bottom: -6px;
}
#play_video header .vip_level{
    position: relative;
    top: 3px;
    width: 24px;
    height: 16px;
}
#play_video header .final{
    display: inline-block;
    width: 70px;
    height: 25px;
    line-height: 25px;
    text-align: center;
    background: #ff6022;
    font-size: 12px;
    color: white;
    border-radius: 20px;
    position: relative;
    bottom: 2px;
    margin-left: 10px;
}
#play_video main>div{
    padding-top: 14px;
}
#play_video .videos{
    width: calc(100% + 26px);
    position: relative;
    margin: 0px -13px;
}
#play_video video{
    width: 100%;
}
#play_video .videos .try{
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    position: absolute;
    color: white;
    text-align: center;
}
#play_video .videos .try p:nth-of-type(1){
    margin-bottom: 16px;
}
#play_video .videos .try p:nth-of-type(1){
    font-size: 15px;
    padding: 0px 16px;
}
#play_video .videos .try p:nth-of-type(2){
    width: 180px;
    font-size: 14px;
    color: #663D00;
    background-color: #ffdf89;
    padding: 10px 5px;
    margin: 0px auto 16px;
    border-radius: 20px;
}
#play_video .videos .try svg{
    font-size: 18px;
}
#play_video .videos .video_control{
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
}
#play_video .videos .center{
    width: 68px;
    height: 68px;
    color: white;
    font-size: 23px;
    text-align: center;
    line-height: 68px;
    background-color: rgba(34, 34, 34, 0.75);
    border-radius: 50%;
    position: relative;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
}
#play_video .videos .bottom{
    height: 40px;
    width: 100%;
    position: absolute;
    bottom: -5px;
}
#play_video .videos .bottom .left{
    text-align: center;
    float: left;
    color: white;
}
#play_video .videos .bottom .left svg{
    width: 60px;
    font-size: 18px;
}
#play_video .videos .bottom .left span{
    font-size: 9px;
    position: relative;
    bottom: 1px;
}
#play_video .videos .bottom .left span:nth-of-type(1){
    margin-left: -6px;
}
#play_video .videos .bottom .left span:nth-of-type(2){
    margin-right: 8px;
}
#play_video .videos .bottom .right{
    float: right;
    color: white;
    text-align: center;
}
#play_video .videos .bottom .right span{
    font-size: 14px;
    margin-right: 13px;
    position: relative;
    bottom: 3px;
}
#play_video .videos .bottom .right span:nth-of-type(1){
    margin-left: 10px;
}
#play_video .videos .bottom .right svg{
    font-size: 21px;
    margin-right: 13px;
}
#play_video .relevant{
    height: 60px;
    padding-top: 7px;
}
#play_video .relevant .left{
    float: left;
    overflow: hidden;
}
#play_video .relevant img{
    width: 37px;
    border: 1px solid rgba(0,0,40,0.1);
    border-radius: 6px;
    margin-right: 3px;
}
#play_video .relevant span{
    font-size: 13px;
    position: relative;
    bottom: 15px;
}
#play_video .relevant .right{
    float: right;
    font-size: 12px;
    margin-top: 6px;
    color: #ff6022;
    background-color: rgba(255,96,34,0.06);
    padding: 5px 15px;
    border-radius: 15px;
}
#play_video main{
    margin: 0px -13px;
    padding: 0px 16px;
}
#play_video .simple_about>p:nth-of-type(1){
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 5px;
}
#play_video .simple_about>p:nth-of-type(2){
    font-size: 13px;
    color: #848494;
}
#play_video .simple_about span:nth-of-type(2){
    color: #FF7B00;
}
#play_video .many_icon{
    margin-top: 18px;
    overflow: hidden;
}
#play_video .many_icon .left{
    float: left;
}
#play_video .many_icon img{
    height: 29px;
    width: 44px;
}
#play_video .many_icon .right{
    float: right;
    margin-top: 5px;
}
#play_video .many_icon .right svg{
    font-size: 22px;
    margin-right: 27px;
}
#play_video .many_icon .right svg:nth-of-type(3){
    margin-right: 0px;
}
#play_video .vip_activities{
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    color: white;
    font-size: 15px;
    background-color: #e5c057;
    margin-top: 25px;
    border-radius: 4px;
}
#play_video .vip_activities p{
    height: 40px;
}
#play_video .drama_series .series_top{
    overflow: hidden;
    height: 28px;
    margin-bottom: 13px;
}
#play_video .drama_series .series_top p{
    font-size: 15px;
    font-weight: bold;
    float: left;
}
#play_video .drama_series .series_top span{
    float: right;
    font-size: 12px;
    color: #848494;
    position: relative;
    top: 7px;
}
#play_video .drama_series .series ul::-webkit-scrollbar{
    display:none;
}
#play_video .drama_series .series ul{
    width: 100%;
    padding-bottom: 15px;
    overflow: auto;
    white-space: nowrap;
}
#play_video .drama_series .series .current_li{
    color: #ff6022;
}
#play_video .drama_series .series li{
    display: inline-block;
    width: 56px;
    height: 56px;
    margin-right: 3px;
    border-radius: 2px;
    font-size: 14px;
    line-height: 56px;
    text-align: center;
    background: #f6f8fa;
}
#play_video .command_for>p{
    font-size: 15px;
    font-weight: bold;
    margin-bottom: 13px;
}
#play_video .command_for ul{
    overflow: hidden;
}
#play_video .command_for li{
    width: calc((100% - 7px)/ 2);
    float: left;
    position: relative;
}
#play_video .command_for li:nth-of-type(2n+1){
    margin-right: 7px;
}
#play_video .command_for li>img{
    width: 100%;
    border-radius: 4px;
}
#play_video .command_for .title{
    font-size: 14px;
    font-weight: bold;
}
#play_video .command_for .remark{
    color: #a2a2b6;
    font-size: 12px;
    line-height: 20px;
}
#play_video .command_for .label{
    display: inline-block;
    position: absolute;
    top: 0px;
    left: 3px;
}
#play_video .command_for .label img{
    width: 24px;
}
#play_video .command_for .episodes{
    position: absolute;
    right: 8px;
    bottom: 48px;
    color: #fff;
    font-size: 12px;
}
#play_video .command_for .svg{
    text-align: center;
    color: gray;
}
#play_video .command_for .show_more{
    height: 36px;
    margin-top: 16px;
    font-size: 13px;
    color: #000028;
    border: 1px solid #ebebeb;
    border-radius: 18px;
    line-height: 34px;
    text-align: center;
}
#play_video .user_comment>p{
    font-size: 15px;
    font-weight: bold;
    margin-bottom: 13px;
}
#play_video .user_comment>ul>li{
    margin-bottom: 22px;
}
#play_video .user_comment .user_image{
    width: 30px;
    height: 30px;
    margin-right: 5px;
}
#play_video .user_comment span{
    font-size: 13px;
    position: relative;
    bottom: 10px;
    margin-right: 3px;
}
#play_video .user_comment>ul>li>img:nth-of-type(2){
    position: relative;
    bottom: 15px;
}
#play_video .user_comment li p{
    font-size: 13px;
    line-height: 21px;
    margin-bottom: 6px;
}
#play_video .user_comment li li{
    width: 33.33%;
}
#play_video .user_comment li li img{
    width: 100%;
    height: 100%;
}
#play_video .all_comments{
    height: 36px;
    text-align: center;
    border: 1px solid black;
    border-radius: 20px;
}
#play_video .all_comments img{
    position: relative;
    top: 5px;
    width: 28px;
}
#play_video .all_comments p{
    display: inline-block;
    font-size: 13px;
    position: relative;
    bottom: 3px;
}
#play_video .vip_welfare>p{
    font-size: 15px;
    font-weight: bold;
    margin-bottom: 13px;
}
#play_video .vip_welfare ul::-webkit-scrollbar{
    display:none;
}
#play_video .vip_welfare ul{
    white-space: nowrap;
    overflow: auto;
}
#play_video .vip_welfare li{
    display: inline-block;
    width: 137px;
    margin: 0px 4px;
    font-size: 13px;
}
#play_video .vip_welfare li img{
    width: 100%;
}
#play_video .vip_welfare li span{
    display: block;
    overflow: hidden;
    line-height: 18px;
    text-overflow: ellipsis;
    white-space: nowrap;
}
#play_video .periphery_recommand{
    margin-bottom: 14px;
}
#play_video .periphery_recommand ul{
    white-space: nowrap;
    overflow: auto;
}
#play_video .periphery_recommand li{
    display: inline-block;
    width: 33.33%;
    text-align: center;
}
#play_video .periphery_recommand>p{
    font-size: 15px;
    font-weight: bold;
    margin-bottom: 13px;
}
#play_video .periphery_recommand img{
    width: 64px;
}
#play_video .periphery_recommand li p{
    font-size: 14px;
    margin: 8px 0px;
    text-overflow: ellipsis;
    overflow: hidden;
}
#play_video .periphery_recommand li button{
    font-size: 14px;
    border: 1px solid #ebebeb;
    color: gray;
    padding: 3px 13px;
}
</style>