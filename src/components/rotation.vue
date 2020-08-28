<template>
    <div class="rotation">
        <mt-swipe :show-indicators="false" :auto="3000">
            <mt-swipe-item v-for="(item,index) in rotation">
                <router-link :to="'/play_video/'+item.vid">
                    <div class="rotation_img">
                        <img :src="item.src" alt="">
                        <span class="label" v-if="item.label">
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-yousanjiaoxing"></use>
                            </svg>
                            {{item.label}}
                        </span>
                        <span class="episodeOrTime" v-if="item.episodeOrTime">{{item.episodeOrTime}}</span>
                    </div>
                    <div class="rotation_bottom">
                        <p class="remark">{{item.remark}}</p>
                        <span class="rotation_index">{{index+1}}/{{rotation.length}}</span>
                    </div>
                </router-link>
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
export default {
    props:['rotation']
}

</script>
<style>
    .rotation .mint-swipe{
        margin-bottom: 18px;
    }
    .rotation .mint-swipe-items-wrap{
        padding-bottom: 69%;
    }
    @media (min-width: 768px) {
        .rotation .mint-swipe-items-wrap{
            padding-bottom: 62%;
        }
    }
    .rotation .mint-swipe-item{
        width: 100%;
    }
    .rotation .mint-swipe-item .rotation_img{
        position: relative;
    }
    .rotation .mint-swipe-item img{
        width: 100%;
    }
    .rotation .mint-swipe-item .label{
        position: absolute;
        left: 0px;
        top: 5px;
        font-size: 10px;
        color: white;
    }
    .rotation .mint-swipe-item svg{
        color: orange;
    }
    .rotation .mint-swipe-item .episodeOrTime{
        position: absolute;
        bottom: 10px; 
        right: 5px;
        font-size: 10px;
        color: white;
        background-color: rgba(255, 255, 255, 0.3);
        padding: 0px 3px;
    }
    .rotation .mint-swipe-item .rotation_bottom{
        margin-top: -3px;
        height: 46px;
        background-color: #f4f5f6;
        overflow: hidden;
        color: #000028;
    }
    .rotation .mint-swipe-item .remark{
        float: left;
        font-size: 14px;
        width: 90%;
        margin: 13px 0px;
        height: 20px;
        line-height: 20px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        /* 行数 */
        -webkit-line-clamp: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: break-all;
    }
    .rotation .mint-swipe-item .rotation_index{
        font-size: 14px;
        float: right;
        padding-top: 13px;
    }
</style>