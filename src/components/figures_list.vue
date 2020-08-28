<template>
    <div id="figures_list">
        <p class="big_title">{{big_title}}</p>
        <div class="list_big" v-if="list_big">
            <div class="figures_list_img">
                <img :src="list_big.src" alt="">
                <span class="label" v-if="list_big.label">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-yousanjiaoxing"></use>
                    </svg>
                    {{list_big.label}}
                </span>
                <span class="episodeOrTime">{{list_big.episodeOrTime}}</span>
            </div>
            <p class="title">{{list_big.title}}</p>
            <p class="remark">{{list_big.remark}}</p>
        </div>
        <ul>
            <li v-for='(item,index) in figures_list' v-if="(index>=min*page_num)&&(index<max*page_num)">
                <router-link :to="'/play_video/'+item.vid">
                    <div class="figures_list_img">
                        <img :src="item.src" alt="">
                        <span class="label" v-if="item.label">
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-yousanjiaoxing"></use>
                            </svg>
                            {{item.label}}
                        </span>
                        <span class="episodeOrTime">{{item.episodeOrTime}}</span>
                    </div>
                    <p class="title">{{item.title}}</p>
                    <p class="remark">{{item.remark}}</p>
                </router-link>
            </li>
        </ul>
        <div class="list_change" @click='change(page_num)' v-if="isChange">
            <span>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-shuaxin_refresh"></use>
                </svg>
                换一换
            </span>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            min:0,
            max:1,
        }
    },
    methods:{
            change(page_num){
                this.min++;
                this.max++;
                if(this.min*page_num>this.figures_list.length){
                    this.min=0;
                    this.max=1;
                }
            }
    },
    props:['list_big','big_title','figures_list','page_num','isChange']
}
</script>

<style scoped>
    a{
        text-decoration: none;
    }
    #figures_list{
        width: 100%;
        padding-bottom: 18px;
    }
    #figures_list>p{
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 10px;
    }
    #figures_list .list_big{
        margin-bottom: 10px;
    }
    #figures_list .figures_list_img{
        position: relative;
    }
    #figures_list ul{
        overflow: hidden;
    }

    #figures_list li{
        float: left;
        width: 49%;
    }
    #figures_list li:nth-of-type(2n+1){
        margin-right: 2%;
    }
    #figures_list img{
        width: 100%;
    }
    #figures_list .label{
        position: absolute;
        left: 0px;
        top: 5px;
        font-size: 10px;
        color: white;
    }
    #figures_list .episodeOrTime{
        position: absolute;
        bottom: 7px; 
        right: 5px;
        font-size: 10px;
        color: white;
        background-color: rgba(255, 255, 255, 0.3);
        padding: 0px 3px;
    }
    #figures_list .title{
        font-size: 14px;
        color: #000028;
    }
    #figures_list .remark{
        font-size: 12px;
        color: gray;
        margin-bottom: 5px;
        margin-top: 2px;
    }
    #figures_list .list_change{
        text-align: center;
        font-size: 12px;
        color: gray;
        margin-top: 24px;
        margin-bottom: 6px;
    }
    #figures_list svg{
        color: #ff6022;
    }
</style>