<template>
    <short_movie :short_movies="short_movies"></short_movie>
</template>

<script>
import short_movie from './short_movie.vue'
export default {
    data(){
        return{
            short_movies:[
                {
                    vid:'1',
                    video_img_src:'./src/assets/images/entertainment/video_img/video_img_1.jpg',
                    video_src:'./src/assets/videos/Jay.mp4',
                    title:'鹿晗宋妍霏吻戏长达1分钟，因入戏太深伸出舌头，关晓彤情何以堪？',
                    time:'01:08',
                    user_img_src:'./src/assets/images/entertainment/user_img/user_img_1.jpg',
                    user_name:'星娱有料扒',
                },
                {
                    vid:'2',
                    video_img_src:'./src/assets/images/entertainment/video_img/video_img_2.jpg',
                    video_src:'./src/assets/videos/Jay.mp4',
                    title:'黄子韬教吴昕唱rap,听到吴昕37岁,黄子韬接下来的话尽显高情商',
                    time:'01:10',
                    user_img_src:'./src/assets/images/entertainment/user_img/user_img_2.jpg',
                    user_name:'无聊欣',
                },
                {
                    vid:'1',
                    video_img_src:'./src/assets/images/entertainment/video_img/video_img_3.jpg',
                    video_src:'./src/assets/videos/Jay.mp4',
                    title:'赵丽颖问：峰哥，我美不美，冯绍峰立马点头认怂，实力宠妻啊！',
                    time:'00:50',
                    user_img_src:'./src/assets/images/entertainment/user_img/user_img_3.jpg',
                    user_name:'柠萌甜加酸',
                },
                {
                    vid:'2',
                    video_img_src:'./src/assets/images/entertainment/video_img/video_img_4.jpg',
                    video_src:'./src/assets/videos/Jay.mp4',
                    title:'70岁刘晓庆再次饰演18岁少女角色，网友：刘奶奶放过我们的眼睛吧',
                    time:'02:16',
                    user_img_src:'./src/assets/images/entertainment/user_img/user_img_4.jpg',
                    user_name:'娱乐八卦一起聊',
                },
                {
                    vid:'1',
                    video_img_src:'./src/assets/images/entertainment/video_img/video_img_5.jpg',
                    video_src:'./src/assets/videos/Jay.mp4',
                    title:'1993年港姐冠军钟丽缇，这颜值太高啦，倾国倾城',
                    time:'00:56',
                    user_img_src:'./src/assets/images/entertainment/user_img/user_img_5.jpg',
                    user_name:'乐派娱乐',
                },
            ]
        }
    },
    components:{short_movie}
}
</script>