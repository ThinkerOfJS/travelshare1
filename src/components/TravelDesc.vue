<template>
    <div id="traveldesc">
        <!-- 标题区域 -->
        <div class="top">
            <van-icon name="arrow-left" size="1.25rem" @click="goBack" color="#f5f5f5"/>
            <p class="title">游记</p>
            <van-icon name="like-o" size="1.25rem" @click="addStory" color="#f5f5f5"/>
        </div>

        <div class="travels-title">
            <p>{{travels.title}}</p>
        </div>

        <!-- 图文区域 -->
        <div class="content">
            <!-- 图片区域 -->
            <img :src="travels.pics" alt="" @click="onImageChange">
            <!-- 正文区域 -->
            <div class="story">
                <p class="story-user">
                    <span class="user-name">{{nickname}}</span>
                    <span class="user-date">{{travels.date}}</span>
                </p>
                <p class="story-info">
                    <span class="story-place">{{travels.place}}</span>
                    <span class="story-category">{{type[travels.tpid]}}</span>
                </p>
            </div>
            <div class="story-content" v-html="travels.content">
                {{travels.content}}
            </div>
            <!-- 图片浏览区域 -->
            <van-image-preview
                v-model="show"
                :images="travels.images"
                @change="onChange"
            >
                <template>{{ index }}</template>
            </van-image-preview>
        </div>
        <hr style="margin-top: 0.2rem;">
        <div class="comment">
            <div class="input" style="display: flex; justify-content: space-between;padding: 0.4rem;" >
                <van-field v-model="comment" placeholder="" style="border: 1px solid #ebebeb; width: 16rem;" clearable/>
                <van-button style="width: 4rem;" @click="addComment()" type="info" color="#87CEEB">发表</van-button>
            </div>

            <Comments :comments="comments"/>
            <van-button class="btn" @click="loadMoreComment" type="info" color="#87CEEB" round>加载更多</van-button>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import { Toast } from 'vant';
    import Comments from './../components/Comments';
    import {getTravelsDetail, getComment, addCollection, addComment, getUserInfoByUid } from './../service/index'
    import {mapState, mapMutations} from 'vuex';

    Vue.use(Toast);
    export default {
        name: "TravelDesc",
        data(){
            return {
                show: false,
                index: 1,
                nickname: ' ',
                comment: '',
                type: ['民宿', '美食', '景点', '艺术', '灵感'],
                comments: [],
                travels: {},
                // onClose() {
                //     // do something
                // },
                tid: 0
            }
        },
        computed: {
            ...mapState(["userInfo"]),
        },
        mounted() {
            this.tid = this.$route.params.storyId;
            console.log(this.tid);
            this.getInitData();
            this.loadComment(false, false);
        },
        methods: {
            getInitData() {
                let _that = this;
                getTravelsDetail(this.tid).then(res => {

                    if (res.status === 200) {

                        let travels = res.data;
                        travels.date = travels.date.slice(0,10);
                        let images = travels.pics.split(',');
                        for (let i in images) {
                            if (images[i] === '') {
                                images.splice(i,1)
                            } else {
                                images[i] = _that.host + images[i]
                            }
                        }
                        travels.images = images;
                        travels.pics = images[0];
                        _that.travels = travels;
                        _that.getUserInfo(travels.uid);
                        // console.log('游记详情',this.travels);
                    }
                });
            },
            getUserInfo(uid) {
                getUserInfoByUid(uid).then(res => {
                    if (res.status === 200) {
                        this.nickname = res.data.nickname;
                    }
                })
            },
            goBack(){
                this.$router.go(-1);
            },
            onImageChange(){
                this.show = !this.show;
            },
            onChange(index) {
                this.index = index;
            },
            addStory(){
                addCollection(this.tid, this.userInfo.uid).then(res => {
                    if (res.status === 200) {
                        Toast({
                            message: res.data.msg,
                            duration: 1000
                        })
                    } else {
                        Toast.fail('网络错误！');
                    }

                });

            },
            // isPunlish 是否是发表后加载评论
            loadComment(flag, isPublish) {
                let start = 0;
                let end;
                if (flag) {
                    start = this.comments.length;
                }
                if(isPublish) {
                    end = this.comments.length + 1
                } else {
                    end = 5
                }
                getComment(this.tid, start, end).then(res => {
                    console.log('评论列表',res);
                    if (res.status === 200) {
                        if (res.data === null) {
                            res.data = [];
                        }
                        let comments = res.data;
                        for (let item of comments) {
                            item.cdate = item.cdate.slice(0,16)
                        }
                        if (flag) {
                            this.comments = this.comments.concat(res.data);
                        } else {
                            this.comments = res.data;
                        }
                    } else {
                        Toast({
                            message: '网络错误！'
                        })
                    }
                })

            },
            addComment(){
                if (this.comment === '') {
                    Toast({
                        message: '评论内容不能为空!'
                    });
                    return;
                }
                console.log(this.userInfo.nickname);
                let nickname = this.userInfo.nickname;
                addComment(this.comment, nickname, this.tid, this.userInfo.uid).then(res => {
                    // console.log('评论结果', res);
                    if(res.status === 200) {
                        Toast({
                            message: '发表成功！'
                        });
                        this.loadComment(false, true);
                    } else {
                        Toast({
                            message: '游记分享失败！'
                        });
                    }
                });
                this.comment =  '';
            },
            loadMoreComment () {
                this.loadComment(true, false);
            }
        },
        components: {
            Comments
        }
    }
</script>

<style lang="scss" scoped>
    #traveldesc{
        .top{
            display: flex;
            padding: 1rem 0.5rem;
            width: 100%;
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

        .travels-title {
            width: 100%;
            background-color: #ffffff;
            text-align: center;
            padding-top: 0.7rem;
            p{
                font-weight: bolder;
            }
        }

        .content{
            padding: 0.7rem 0.4rem 0.4rem;
            background-color: #ffffff;

            img{
                width: 100%;
                box-shadow: 0 0 9px #999;
            }
            .story{
                margin-top: 0.5rem;

                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;

                .story-user{
                    font-size: 0.85rem;
                    .user-name{
                        margin-right: 0.6rem;
                        font-style: italic;
                    }
                }
                .story-info{
                    line-height: 0.8rem;
                    font-size: 0.8rem;
                    .story-place{
                        font-weight: bold;
                        margin-right: 0.6rem;
                    }
                }
            }
            .story-content{
                padding: 0.2rem;
                margin-top: 0.4rem;
                font-size: 0.8rem;
            }
        }
        .comment{
            margin-bottom: 3.5rem;

            .btn{
                width: 15rem;
                left: 50%;
                margin-left: -7.5rem;
                box-shadow: 0 0 9px #999;
            }
        }

    }
</style>
