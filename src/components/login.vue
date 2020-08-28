<template>
    <div id="login">
        <div class="avater">
            <img src="../assets/images/login/login_head.png" alt="">
            <p>1秒登录腾讯视频</p>
            <p>微信和QQ是两个独立账号，账号信息不互通</p>
        </div>
        <div class="platform_we" @click="back()">
            <img src="../assets/images/login/login_wechat.png" alt="">
            <span>微信登录</span>
        </div>
        <router-link to="/QQ_login">
            <div class="platform_qq">
                <img src="../assets/images/login/login_QQ.png" alt="">
                <span>QQ登录</span>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
   methods:{
       back(){
           this.$router.back();
       }
   } 
}
</script>
<style scoped>
    #login{
        margin: 0px -13px;
        padding:0px 13px;
        width: 100%;
        height: 100vh;
        text-align: center;
        background-image: url('../assets/images/login/login_bg.jpg');
        background-size: 100% auto;
    }
    #login a{
        text-decoration: none;
    }
    #login .avater{
        padding: 53px 0 57px;
    }
    #login .avater img{
        width: 78px;
        border: 1px solid black;
        border-radius: 50%;
        margin-bottom: 21px;
    }
    #login .avater>p:nth-of-type(1){
        font-size: 15px;
        line-height: 24px;
        margin-bottom: 3px;
    }
    #login .avater>p:nth-of-type(2){
        font-size: 12px;
        color: #979797;
        line-height: 20px;
    }
    #login .platform_we,.platform_qq{
        width: 225px;
        height: 45px;
        line-height: 45px;
        text-align: center;
        margin: 0px auto;
        background: #2ec637;
        font-size: 16px;
        color: #fff;
        border-radius: 23px;
        margin-bottom: 20px;
    }
    #login .platform_we img{
        width: 28px;
        position: relative;
        top: 3px;
    }
    #login .platform_qq{
        background: #40a5e5;
    }
    #login .platform_qq img{
        width: 20px;
        position: relative;
        top: 3px;
    }
</style>