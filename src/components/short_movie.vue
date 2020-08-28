<template>
    <div id="short_movie">
        <div v-for="(item,index) in short_movies" class="a_short_movie">
            <video :src="item.video_src" v-if="list_video_status[index]" controls></video>
            <div class="main"  v-if="list_img_status[index]">
                <img :src="item.video_img_src">
                <b v-show="false">{{never_show}}</b>
                <p class="title">{{item.title}}</p>
                <span>{{item.time}}</span>
                <div class="center">
                    <svg class="icon" aria-hidden="true" @click="play_video(index)">
                        <use xlink:href="#icon-bofang2"></use>
                    </svg>
                </div>
            </div>
                <div class="footer">
                    <router-link :to="'/play_video/'+item.vid">
                        <div class="left">
                            <img :src="item.user_img_src" alt="">
                            <span>{{item.user_name}}</span>
                        </div>
                    </router-link>
                    <div class="right">
                        <router-link :to="'/play_video/'+item.vid">
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-pinglun"></use>
                            </svg>
                        </router-link>
                        <svg class="icon" aria-hidden="true" @click="action_sheet()">
                            <use xlink:href="#icon-gengduo1"></use>
                        </svg>
                    </div>
                </div>
        </div>
        <mt-actionsheet :actions="actions" v-model="sheetVisible"></mt-actionsheet>
    </div>
</template>
<script>
export default {
    data(){
        return{
            list_img_status:[],
            list_video_status:[],
            never_show:0,
            actions:[
                {
                    name:'',
                    method:'',
                }
            ],
            sheetVisible:false
        }
    },
    mounted(){
        for(let i=0;i<this.short_movies.length;i++){
            this.list_img_status.push(true);
            this.list_video_status.push(false);
        }
    },
    methods:{
        play_video(temp){
            for(let i=0;i<this.list_img_status.length;i++){
                    this.list_img_status[i]=true;
                    this.list_video_status[i]=false;
            }
            this.list_img_status[temp]=false;
            this.list_video_status[temp]=true;
            this.never_show++;
        },
        action_sheet(){
            this.sheetVisible=true;
        }
    },
    props:['short_movies']
}
</script>

<style>
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
    #short_movie{
        margin: 0px -13px;
    }
    #short_movie .a_short_movie{
        padding-top: 10px;
        background-color: #f5f7f9;
    }
    #short_movie .main{
        position: relative;
    }
    #short_movie .main img{
        width: 100%;
    }
    #short_movie video{
        width: 100%;
    }
    #short_movie .main p{
        position: absolute;
        top: 0px;
        padding: 13px 16px 0px;
        font-size: 17px;
        font-weight: bold;
        color: #fff;
        line-height: 22px;
    }
    #short_movie .main span{
        position: absolute;
        right: 7px;
        bottom: 7px;
        color: #fff;
        font-size: 11px;
    }
    #short_movie .footer{
        height: 28px;
        padding: 10px 16px;
        background-color: white;
    }
    #short_movie .footer img{
        width: 28px;
        height: 28px;
        border-radius: 50%;
    }
    #short_movie .footer .left{
        float: left;
        background-color: #f6f8fa;
        border-radius: 14px;
    }
    #short_movie .footer .left span{
        font-size: 12px;
        color: #999;
        padding: 0px 10px;
        position: relative;
        bottom: 10px;
    }
    #short_movie .footer .right{
        float: right;
    }
    #short_movie .footer .right svg:nth-of-type(1){
        font-size: 18px;
        color: #999;
        position: relative;
        top: 3px;
    }
    #short_movie .footer .right svg:nth-of-type(2){
        font-size: 13px;
        color: #999;
        position: relative;
        margin-left: 20px;
    }
    #short_movie .main .center svg{
    color: none;
    font-size: 50px;
    text-align: center;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    opacity: 0.85;
    }
</style>