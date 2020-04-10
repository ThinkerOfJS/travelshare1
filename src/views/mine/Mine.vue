<template>
    <div id="mine">
        <div class="top">
            <p class="title">我的</p>
        </div>
        <Header :user="userInfo" />
        <Body :user="userInfo" />
        <div class="btns">
            <van-button
                @click="showChange()"
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
                    <!-- 添加头像 -->
                    <div class="addPic">
                        <van-uploader v-model="fileList" multiple/>
                    </div>
                    <van-field
                            v-model="nickname"
                            clearable
                            label="昵称:"
                            placeholder="请输入昵称"
                    />

                    <van-field
                            v-model="introduction"
                            type="textarea"
                            label="个性签名:"
                            placeholder="请输入个性签名"
                            clearable
                            autosize
                    />
                    <van-field
                            v-model="phone"
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
    import Header from './components/Header';
    import Body from './components/body/Body';
    import {mapState, mapMutations} from 'vuex';
    import {Toast, CellGroup} from 'vant';
    import {getUserInfo} from './../../service/index'

    export default {
        name: "Mine",
        data(){
            return {
                show: false,
                nickname: '',
                introduction: '',
                phone: '',
                email: '',
                fileList: []
            }
        },
        computed: {
            ...mapState(["userInfo"]),
        },
        methods: {
            ...mapMutations(["CLEAR_ORDER","SAVE_USER", "CLEAR_USER"]),
            goChangeDocument(userId){
                this.$router.push({
                    name: 'changedocument',
                    params: { userId }
                })
            },
            showChange(){
                this.show = true;
                this.phone = this.userInfo.phone;
                this.email = this.userInfo.email;
                this.nickname = this.userInfo.nickname;
                this.introduction = this.userInfo.introduction;
            },
            goLogin(){
                this.CLEAR_ORDER();
                this.CLEAR_USER();
                this.$router.push({
                    name: 'login',
                });
            },
            change(){
                let _that = this;
                let fileLists = _that.fileList;
                // console.log(fileLists);
                _that.show = false;
                let param = new FormData();
                for (let i = 0; i < fileLists.length; i++) {
                    let file = fileLists[i].file;
                    param.append('file', file);
                }
                param.append('nickname', this.nickname);
                param.append('introduction', this.introduction);
                param.append('phone', this.phone);
                param.append('email', this.email);
                param.append('uid', this.userInfo.uid);
                let config = {
                    headers: {'Content-Type': 'multipart/form-data'}
                }; //添加请求头
                _that.$ajax.post('/api/user/change', param, config)
                    .then(res => {

                        if (res.status == 200) {
                            Toast({
                                message: '修改成功！'
                            });
                            _that.loadUser();
                        } else {
                            Toast({
                                message: '修改失败'
                            });
                            return
                        }
                        // console.log(res);
                    });
            },
            loadUser() {
                getUserInfo(this.userInfo.username).then(res => {
                    console.log(res);
                    if (res.status === 200) {
                        let userInfo = res.data;
                        userInfo.avatarsrc = userInfo.avatarsrc.split(',')[0];
                        this.SAVE_USER(userInfo);
                    }
                })
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
            .addPic {
                margin-top: 1rem;
                padding: 0.5rem;
            }
        }
    }
</style>
