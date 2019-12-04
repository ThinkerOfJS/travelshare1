<template>
    <div id="body">
        <ul>
            <hr>
            <li @click="goMyOrder(user.user_id)">
                <span class="title">我的订单</span>
            </li>
            <hr>
            <li @click="goPersonalDynamic(user.user_id)">
                <span class="title">个人动态</span>
                <van-icon color="#999" name="chat-o" size="1.3rem"/>
            </li>
            <hr>
            <li @click="goCollection(user.user_id)">
                <span class="title">收藏</span>
                <van-icon color="#999" name="like-o" size="1.3rem" />
            </li>
            <hr>
            <li>
                <span class="title">昵称:</span>
                <span class="content">{{ user.user_name }}</span>
            </li>
            <hr>
            <li>
                <span class="title">个性签名:</span>
                <span class="content">{{ user.user_signature }}</span>
            </li>
            <hr>
            <li>
                <span class="title">手机号:</span>
                <span class="content">{{ user.user_phone }}</span>
            </li>
            <hr>
            <li>
                <span class="title">邮箱地址:</span>
                <span class="content">{{ user.user_email }}</span>
            </li>
            <hr>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Body",
        data(){
            return {

            }
        },
        methods: {
            goMyOrder(userId){
                this.$router.push({
                    name: 'myorder',
                    params: { userId }
                })
            },
            goPersonalDynamic(userId){
                this.$router.push({
                    name: 'personaldynamic',
                    params: { userId }
                })
            },
            goCollection(userId){
                this.$router.push({
                    name: 'collection',
                    params: { userId }
                })
            }
        },
        props: {
            user: Object
        }
    }
</script>

<style lang="scss" scoped>
    #body{
        margin-top: 1rem;
        background: #ffffff;
        box-shadow: 0 4px 9px #bababa;
        hr{
            height: 1px;
            background-color: #e8e8e8;
            border: none;
        }
        ul{
            padding: 0.8rem;
            li{
                display: flex;
                justify-content: space-between;
                padding: 0.4rem 0.2rem;
                .title{
                    font-size: 0.9rem;
                    color: #8b8b8b;
                }
                .content{
                    display: inline-block;
                    font-size: 0.8rem;
                    font-style: italic;
                    max-width: 14rem;
                }
            }
        }
    }
</style>