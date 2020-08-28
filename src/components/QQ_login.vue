<template>
    <div id="QQ_login">
        <img src="../assets/images/login/logo_upice.png" alt="">
        <p class="recomand">亿万用户已选择QQ帐号登录应用</p>
        <p class="login" @click="back()">一键登录</p>
        <div class="web_login">
            <p>腾讯视频H5将获得以下权限:</p>
            <ul>
                <li>
                    <img src="../assets/images/login/necessary.png" alt="">
                    <span>访问你的详细资料 (必选)</span>
                </li>
                <li>
                    <img src="../assets/images/login/necessary.png" alt="">
                    <span>访问你的基础资料 (必选)</span>
                </li>
            </ul>
        </div>
        <div class="login_footer">
            <p>Copyright © 2010 - 2020 Tencent.All Rights Reserved.</p>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        back(){
            this.$router.go(-2);
        }
    }
}

</script>
<style scoped>
    #QQ_login{
        text-align: center;
        position: relative;
        height: 100vh;
    }
    #QQ_login>img{
        width: 99px;
        padding-top: 40px;
    }
    #QQ_login .recomand{
        margin-top: 16px;
        color: #777;
        font-size: 14px;
        padding-bottom: 30px;
    }
    #QQ_login .login{
        margin: 28px 14.5px 12px;
        background-color: rgb(18, 183, 245);
        line-height: 40px;
        font-size: 18px;
        border-radius: 4px;
        color: white;
    }
    #QQ_login .web_login{
        text-align: left;
        margin: 50px 14.5px 0px;
    }
    #QQ_login .web_login>p{
        margin-bottom: 9px;
    }
    #QQ_login .web_login ul{
        border-radius: 4px;
        border: 1px solid rgb(219, 216, 216);
        font-size: 12px;
        color: rgb(119, 119, 119);
    }
    #QQ_login .web_login li{
        padding: 11px 12.5px;
    }
    #QQ_login .web_login li:nth-of-type(1){
        border-bottom: 1px solid rgb(219, 216, 216);
    }
    #QQ_login .web_login li img{
        width: 10.5px;
        height: 7.5px;
    }
    #QQ_login .login_footer{
        width: 100%;
        position: absolute;
        font-size: 12px;
        bottom: 14px;
        color: #bbb;
        text-align: center;
    }
</style>