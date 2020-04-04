<template>
    <div id="login">

        <van-image
                class="image"
                round
                cover
                width="10rem"
                height="10rem"
                fit="contain"
                :src="logo"
        />
        <div class="content">
            <div class="title white">
                <h1>欢迎来到旅享</h1>
            </div>
            <div class="fields">
                    <van-field
                            class="white"
                            left-icon="contact"
                            v-model="username"
                            required
                            clearable
                            label="用户名:"
                            placeholder="请输入用户名"
                    />

                    <van-field
                            class="white"
                            left-icon="contact"
                            v-model="password"
                            type="password"
                            clearable
                            label="密码:"
                            placeholder="请输入密码"
                            required
                    />
            </div>
            <div class="links">
                <router-link class="link white" to="/register">没有账号？</router-link>
                <router-link class="link white" to="/forgot">忘记密码？</router-link>
            </div>


                <!--<router-link to="/dashboard/home">-->
            <van-button
                plain
                hairline
                round
                type="danger"
                size="normal"
                class="login_btn white"
                @click.prevent="login">登录</van-button>
                <!--</router-link>-->
        </div>

    </div>
</template>

<script>
    import { loginPwd, getUserInfo} from './../../service/index'
    import { Notify, Dialog} from 'vant'
    import { mapState, mapMutations } from 'vuex'
    export default {
        name: "Login",
        data(){
            return {
                ...mapState['userInfo'],
                username: '',
                password: '',
                show: false,
                logo: require('../../images/login_logo.jpg')
            }
        },
        mounted() {

        },
        methods: {
            ...mapMutations(["SAVE_USER"]),
            async login(){
                let _this = this;

                if (!_this.username.trim() || !_this.password.trim()) {
                    _this.notifyMsg('用户名或密码不能为空');
                    return ;
                }
                //
                let result = await loginPwd(_this.username, _this.password);
                if (result.status === 200) {
                    if (result.data.code == 0) {
                        let result = await getUserInfo(_this.username);
                        if (result.status == 200) {
                            // console.log('用户信息',result.data);
                            let userInfo = result.data;
                            userInfo.avatarsrc = userInfo.avatarsrc.split(',')[0];
                            _this.SAVE_USER(userInfo);
                        }
                        _this.show = false;
                        _this.$router.push({
                            name: 'home'
                        });
                    } else {
                        _this.notifyMsg(result.data.msg);
                    }
                } else {
                    Dialog.alert({
                        message: '请求失败，请重新登录'
                    }).then(() => {
                        // on close
                    });
                }
            },
            notifyMsg(msg){
                // 用于提示信息的方法
                Notify({
                    message: msg,
                    duration: 1500,
                    color: 'rgba(168,168,168,0.99)',
                    background: '#f5f5f5',
                });
            }
        }
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
                input{
                    color: white;
                }
                .van-cell{
                    padding: 0.58rem 0;
                    background-color: transparent;
                    .van-cell__value{
                        .van-field__body{
                            .van-field__control{
                                color: #ffffff;
                            }
                        }
                    }

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
