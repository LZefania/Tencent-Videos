<template>
    <div>
        <rotation :rotation="rotation"></rotation>
        <figures_list :list_big="false" :big_title="important.big_title" :figures_list="important.figures_list" :page_num="important.page_num" :isChange="true"></figures_list>
        <figures_list :list_big="theatre.list_big" :big_title="theatre.big_title" :figures_list="theatre.figures_list" :page_num="theatre.page_num"></figures_list>
    </div>
</template>

<script>
import figures_list from './figures_list.vue'
import rotation from './rotation.vue'
export default {
    data(){
        return{
            rotation:[
                {
                    vid:'1',
                    src:'./src/assets/images/index/rotation/index_rotation_1.jpg',
                    label:'VIP',
                    episodeOrTime:'全36集',
                    remark:'【穿越火线】把热爱做到极致 鹿晗致敬追梦人'
                },
                {
                    vid:'2',
                    src:'./src/assets/images/index/rotation/index_rotation_2.jpg',
                    label:'超前点播',
                    episodeOrTime:'全30集',
                    remark:'【且听凤鸣❤单点结局】杨超越徐开骋修仙甜恋'
                },
                {
                    vid:'1',
                    src:'./src/assets/images/index/rotation/index_rotation_3.jpg',
                    label:'VIP',
                    episodeOrTime:'更新至118集',
                    remark:'【斗罗大陆】前后无路？看我外挂全开'
                },
                {
                    vid:'2',
                    src:'./src/assets/images/index/rotation/index_rotation_4.jpg',
                    label:'VIP',
                    episodeOrTime:'2020-08-26',
                    remark:'【脱口秀】乘风破浪！张萌自曝被同居室友吐槽'
                },
            ],
            important:{
                big_title:'重磅☀预约LPL夏季总决赛',
                page_num:4,
                figures_list:[
                    {
                        vid:'1',
                        src:'./src/assets/images/index/important/index_important_img1.jpg',
                        title:'且听凤鸣❤单点结局',
                        remark:'杨超越徐开骋修仙甜恋',
                        label:'超前点播',
                        episodeOrTime:'全30集'
                    },
                    {
                        vid:'2',
                        src:'./src/assets/images/index/important/index_important_img2.jpg',
                        title:'穿越火线·致敬热爱',
                        remark:'肖枫率中国电竞征战世界',
                        label:'VIP',
                        episodeOrTime:'全36集'
                    },
                    {
                        vid:'1',
                        src:'./src/assets/images/index/important/index_important_img3.jpg',
                        title:'斗罗大陆⚡预告抢先看',
                        remark:'战士也要德智体美全发展',
                        label:'VIP',
                        episodeOrTime:'更新至118集'
                    },
                    {
                        vid:'2',
                        src:'./src/assets/images/index/important/index_important_img4.jpg',
                        title:'女世子☺古装轻喜剧',
                        remark:'爆笑之女扮男装被发现',
                        label:'VIP',
                        episodeOrTime:'更新至14集'
                    },
                    {
                        vid:'1',
                        src:'./src/assets/images/index/important/index_important_img5.jpg',
                        title:'鹅外惊喜☺爆笑',
                        remark:'刘谦带杨迪妈妈变魔术',
                        label:'自制',
                        episodeOrTime:'2020-08-23'
                    },
                    {
                        vid:'2',
                        src:'./src/assets/images/index/important/index_important_img6.jpg',
                        title:'极挑☺傻媳妇既视感',
                        remark:'郭京飞神吐槽杨超越太逗',
                        episodeOrTime:'2020-08-23'
                    },
                ]
            },
            theatre:{
                list_big:{
                    vid:'1',
                    src:'./src/assets/images/index/theatre/index_theatre_big_img.jpg',
                    title:'摩天大楼·悬疑No.1[会员更新]',
                    remark:'全员合谋作伪证！究竟为了隐藏什么秘密？',
                    label:'超前点播',
                    episodeOrTime:'全16集'
                },
                big_title:'同步剧场',
                page_num:6,
                figures_list:[
                    {
                        vid:'1',
                        src:'./src/assets/images/index/theatre/index_theatre_img1.jpg',
                        title:'且听凤鸣[更新]',
                        remark:'超越徐开骋上演密室大逃脱',
                        label:'超前点播',
                        episodeOrTime:'全30集'
                    },
                    {
                        vid:'2',
                        src:'./src/assets/images/index/theatre/index_theatre_img2.jpg',
                        title:'幸福敲门[更新]',
                        remark:'涉嫌诈骗 聂远又被吴谨言抓',
                        label:'VIP',
                        episodeOrTime:'更新至28集'
                    },
                    {
                        vid:'1',
                        src:'./src/assets/images/index/theatre/index_theatre_img3.jpg',
                        title:'公主小妹[会员全集]',
                        remark:'经典！超清解锁童年回忆！',
                        label:'VIP',
                        episodeOrTime:'全20集'
                    },
                    {
                        vid:'2',
                        src:'./src/assets/images/index/theatre/index_theatre_img4.jpg',
                        title:'女世子[会员抢先看',
                        remark:'韩十一调戏青楼女子掩身份',
                        label:'VIP',
                        episodeOrTime:'更新至14集'
                    },
                    {
                        vid:'1',
                        src:'./src/assets/images/index/theatre/index_theatre_img5.jpg',
                        title:'穿越火线[会员大结局]',
                        remark:'超燃！鹿晗致敬所有追梦人',
                        label:'VIP',
                        episodeOrTime:'全36集'
                    },
                    {
                        vid:'2',
                        src:'./src/assets/images/index/theatre/index_theatre_img6.jpg',
                        title:'少女大人[20点独播]',
                        remark:'陈瑶张凌赫探案甜恋',
                    },
                ]
            }
        }
    },
    components:{rotation,figures_list}
}
</script>
