<template>
    <div id="mine">
        <div class="top">
            <p class="title">我的</p>
        </div>
        <Header :user="user" />
        <Body :user="user" />
        <div class="btns">
            <van-button
                @click="goChangeDocument(user.user_id)"
                class="btn"
                round
                plain
                hairline
                color="#4ACBBD"
                type="primary"
            >
                修改个人资料
            </van-button>
            <van-button
                @click="goLogin"
                class="btn"
                round
                color="#4ACBBD"
                type="primary"
            >
                注销
            </van-button>
        </div>
    </div>
</template>

<script>
    import Header from './components/Header'
    import Body from './components/body/Body'
    export default {
        name: "Mine",
        data(){
            return {
                user: {
                    user_id: 1,
                    user_name: '空城旧梦',
                    user_signature: '分享旅行中的点滴，发现每一个让人回味无穷的故事，期待每一个能够遇见的人,期待每一个能够遇见的人',
                    user_img_url: 'https://img.yzcdn.cn/vant/cat.jpeg',
                    user_phone: '12345678910',
                    user_email: '123456789@qq.com'
                },
            }
        },
        methods: {
            goChangeDocument(userId){
                this.$router.push({
                    name: 'changedocument',
                    params: { userId }
                })
            },
            goLogin(){
                this.$router.push({
                    name: 'login',
                });
            },
        },
        components: {
            Header,
            Body
        }
    }
</script>

<style lang="scss" scoped>
    #mine{
        margin-bottom: 4rem;
        .top{
            display: flex;
            padding: 1rem 0.5rem;
            background-color: #8fd6f3;
            .title{
                width: 100%;
                display: inline-block;
                color: #f5f5f5;
                text-align: center;
                font-size: 1.25rem;
                line-height: 1.25rem;
                font-weight: bold;
            }
        }
        .btns{
            height: 5.5rem;
            margin-top: 1rem;

            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .btn{
                width: 15rem;
                margin: 0 auto;
                font-size: 1.1rem;
                box-shadow: 0 0 9px #bababa;
            }
        }
    }
</style>