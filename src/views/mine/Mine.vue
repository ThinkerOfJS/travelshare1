<template>
    <div id="mine">
        <div class="top">
            <p class="title">我的</p>
        </div>
        <Header :user="user" />
        <Body :user="user" />
        <div class="btns">
            <van-button
                @click="showChange(user)"
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

        <van-popup
            v-model="show"
            closeable
            close-icon="close"
            position="bottom"
            round
            :style="{ height: '60%' }"
        >
            <div class="change-box">
                <van-cell-group>
                    <van-field
                            v-model="name"
                            clearable
                            label="昵称:"
                            placeholder="请输入昵称"
                    />

                    <van-field
                            v-model="signature"
                            type="textarea"
                            label="个性签名:"
                            placeholder="请输入个性签名"
                            clearable
                            autosize
                    />
                    <van-field
                            v-model="tel"
                            label="手机号:"
                            type="tel"
                            placeholder="请输入手机号"
                            clearable
                    />
                    <van-field
                            v-model="email"
                            label="邮箱地址:"
                            placeholder="请输入邮箱地址"
                            clearable
                    />
                </van-cell-group>
                <van-button
                        @click="change()"
                        class="change-btn"
                        plain
                        color="#4ACBBD"
                        type="primary"
                >
                    保存
                </van-button>
            </div>

        </van-popup>

    </div>
</template>

<script>
    import Header from './components/Header'
    import Body from './components/body/Body'
    export default {
        name: "Mine",
        data(){
            return {
                show: false,
                name: '',
                signature: '',
                tel: '',
                email: '',
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
            showChange(user){
                this.show = true;
                this.tel = user.user_phone;
                this.email = user.user_email;
                this.name = user.user_name;
                this.signature = user.user_signature;
            },
            goLogin(){
                this.$router.push({
                    name: 'login',
                });
            },
            change(){
                alert('修改成功');
            }
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
        .change-box{
            width: 100%;
            .change-btn{
                margin-left: 50%;
                left: -4rem;
                width: 8rem;
            }
        }
    }
</style>