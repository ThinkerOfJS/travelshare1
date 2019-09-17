<template>
    <div id="login">
        <van-image
                class="image"
                round
                cover
                width="10rem"
                height="10rem"
                fit="contain"
                src="http://pic1.win4000.com/wallpaper/e/57b668cd660c1.jpg"
        />
        <div class="content">
            <div class="title white">
                <h1>欢迎来到旅享</h1>
            </div>
            <div class="fields">
                <van-cell-group>
                    <van-field
                            class="white"
                            left-icon="contact"
                            v-model="username"
                            required
                            clearable
                            label="用户名"
                            placeholder="请输入用户名"
                    />

                    <van-field
                            class="white"
                            left-icon="contact"
                            v-model="password"
                            type="password"
                            clearable
                            label="密码"
                            placeholder="请输入密码"
                            required
                    />
                </van-cell-group>
            </div>
            <div class="links">
                <router-link class="link white" to="/register">没有账号？</router-link>
                <router-link class="link white" to="/forgot">忘记密码？</router-link>
            </div>


            <router-link to="/dashboard/home">
                <van-button plain hairline round type="danger" size="normal" class="login_btn white">登录</van-button>
            </router-link>


        </div>

    </div>
</template>

<script>
    export default {
        name: "Login",
        data(){
            return {
                username: '',
                password: '',
            }
        },
    }
</script>

<style lang="scss" scoped>
    #login{
        width: 100%;
        height: 100%;
        background: #87CEEB;
        position: relative;

        .white{
            color: #ffffff;
        }

        .image{
            left: 50%;
            margin-left: -5rem;
            margin-top: 3rem;
            border: 3px solid #ffffff;
        }
        .content{
            margin: 1rem 2rem;

            .title{
                font-size: 0.85rem;
            }

            .fields{
                margin: 1.17rem 0 0.58rem;
                padding: 0;
                .van-cell{
                    padding: 0.58rem 0;
                    background-color: transparent;
                    /*.van-field__body{*/
                        /*.van-field__control{*/
                            /*color: #ffffff;*/
                        /*}*/
                    /*}*/
                }

                .van-cell:not(:last-child)::after{
                    border-bottom: 0.05rem solid #ffffff;
                }
                .van-cell--required::before{
                    content: none;
                }
            }
            .links{
                font-size: 0.7rem;
                display: flex;
                justify-content: space-between;
                margin-bottom: 1.17rem;

                .link:hover{
                    cursor: pointer;
                }
            }
            .login_btn{
                margin-top: 1.76rem;
                width: 100%;
                border: 2px solid #ffffff;
                background-color: transparent;
            }
        }
    }
</style>