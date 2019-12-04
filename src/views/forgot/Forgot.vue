<template>
    <div id="forgot">

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
                <h1>忘记密码</h1>
            </div>
            <div class="fields">
                <van-cell-group>
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
                        label="新密码:"
                        placeholder="请输入新密码"
                        required
                    />
                </van-cell-group>
            </div>

            <div class="btns">
                <van-button
                    plain
                    hairline
                    round
                    type="danger"
                    size="normal"
                    class="btn white"
                    @click.prevent="changeUser">确认</van-button>
                <van-button
                    plain
                    hairline
                    round
                    type="danger"
                    size="normal"
                    class="btn white"
                    @click.prevent="back">返回</van-button>
            </div>
        </div>
    </div>
</template>

<script>
    import { forgotPwd } from '../../service/index'
    import { Dialog, Notify } from 'vant'

    export default {
        name: "Forgot",
        data(){
            return {
                username: '',
                password: '',
                show: false
            }
        },
        methods: {
            async changeUser(){
                let _this = this;
                if (!_this.username.trim() || !_this.password.trim()) {
                    _this.notifyMsg('用户名或密码不能为空！');
                    return ;
                }
                let result = await forgotPwd(_this.username, _this.password);
                console.log(result.data.code);
                if (result.status === 200) {
                    if (!result.data.code) {
                        Dialog.alert({
                            title: '修改密码',
                            message: '修改密码成功，请登录'
                        }).then(() => {
                            console.log('确认成功');
                            _this.back();
                        });
                    } else {
                        _this.notifyMsg(result.data.msg);
                    }
                } else if (result){
                    _this.notifyMsg('请求失败！');
                }
            },
            back(){
                this.$router.push({
                    name: 'login'
                });
            },
            notifyMsg(msg){
                // 提示信息
                Notify({
                    message: msg,
                    duration: 1500,
                    color: 'rgba(168,168,168,0.99)',
                    background: '#f5f5f5'
                });
            },
        }
    }
</script>

<style lang="scss" scoped>
    #forgot{
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
                margin: 20px 0 10px;
                padding: 0;
                .van-cell{
                    padding: 10px 0;
                    background-color: transparent;

                    .van-field__control{
                        color: transparent;
                    }
                }

                .van-cell:not(:last-child)::after{
                    border-bottom: 0.05rem solid #ffffff;
                }
                .van-cell--required::before{
                    content: none;
                }
            }
            .btns{
                .btn{
                    margin-top: 30px;
                    width: 100%;
                    border: 2px solid #ffffff;
                    background-color: transparent;
                }
            }

        }
    }
</style>
