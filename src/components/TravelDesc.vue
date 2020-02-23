<template>
    <div id="traveldesc">
        <!-- 标题区域 -->
        <div class="top">
            <van-icon name="arrow-left" size="1.25rem" @click="goBack" color="#f5f5f5"/>
            <p class="title">游记</p>
            <van-icon name="like-o" size="1.25rem" @click="addStory" color="#f5f5f5"/>
        </div>
        <!-- 图文区域 -->
        <div class="content">
            <!-- 图片区域 -->
            <img :src="images[0]" alt="" @click="onImageChange">
            <!-- 正文区域 -->
            <div class="story">
                <p class="story-user">
                    <span class="user-name">枫林残忆</span>
                    <span class="user-date">2019.5.4</span>
                </p>
                <p class="story-info">
                    <span class="story-place">江南</span>
                    <span class="story-category">故事</span>
                </p>
            </div>
            <div class="story-content">
                <p>&emsp;&emsp;那是一个带着书香的姑娘，长发婆娑，我与她相遇在梅雨过后的江南小巷。</p><br>
                <p>&emsp;&emsp;屋檐还滴着雨水，撒下一束光，青石小巷，伴着沁人心脾的芳香，那一段美丽的邂逅，也随之而来。那日的她，撑着一顶白色的伞，静静地从我身边走过，她的身上，弥漫着书香，却比一息风，一闪光更少痕迹。她抿起嘴，好像画笔勾勒出来的弧线，伴着美丽与哀愁。
                夜，也为她舞动着。她是爱，是暖，是梁间柔情的呢喃，随着光影交舞着变。几次相逢，她的手中不缺一本诗集。她的目光，透出一股淡淡的忧伤;她的背影，透出一股淡淡的优雅。是一个怎样的女子啊?我时常这样想。</p><br>
                <p>&emsp;&emsp;她的谈吐是柔的匀的，带着无奈，忧伤却又豁达。她笑永恒是人类造的谎，她笑这世道的轮回，又有谁能摆脱。她是一朵洁白的莲花“可远观而不可亵玩焉”。她不信命运的安排，她不信一切都在上帝的掌握中纵横，她爱这江南的早天，她要自己抒写自己的命运。</p><br>
                <p>&emsp;&emsp;她是一个波澜不惊的女子，往事，早已被她浸泡在傍晚的云烟中。她，寂静安然，可我能看到，她的心中浮动着梦想与渴望。可她不会把命运交给凄惨，她要守着那份懵懂，那份纯真，在零乱的花影中穿梭。她的每一个深思都让人着迷，让人有猜透她每一个心境的渴望。</p><br>
                <p>&emsp;&emsp;可她，却又是那么的扑朔迷离。长发在微风中颤动，可她，却依然娇艳。她的话语，是那么奢侈，却又那么悸动人心。</p><br>
                <p>&emsp;&emsp;她，在这暗的世界里是格外显眼的，因为她纯洁，善良，又带着淡淡的伤。分不清，她到底是希望?还是梦?她攒集着地上零落的花，抖擞掉上面的土，静静的，将它们安插在花瓶中。我看到雨水在花瓣上涟动，阳光斑斓错置地撒在上面，那些花也和她一样，如此清新。</p>
            </div>
            <!-- 图片浏览区域 -->
            <van-image-preview
                v-model="show"
                :images="images"
                @change="onChange"
            >
                <template>{{ index }}</template>
            </van-image-preview>
        </div>
        <hr style="margin: 0">
        <div class="comment">
            <div class="input" style="display: flex; justify-content: space-between;padding: 0.4rem;" >
                <van-field v-model="comment" placeholder="" style="border: 1px solid #ebebeb; width: 16rem;" clearable/>
                <van-button style="width: 4rem;" @click="addComment()" type="info" color="#87CEEB">发表</van-button>
            </div>

            <Comments :comments="comments"/>
            <van-button class="btn" type="info" color="#87CEEB" round>加载更多</van-button>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import { Toast } from 'vant';
    import Comments from './../components/Comments';

    Vue.use(Toast);
    export default {
        name: "TravelDesc",
        data(){
            return {
                show: false,
                index: 1,
                comment: '',
                images: [
                    require('../images/travels_detail.jpg'),
                    require('../images/travels_detail1.jpeg'),
                    require('../images/travels_detail2.jpg')
                ],
                comments: [
                    {
                        cid: 1,
                        username: '空城旧梦',
                        date: '10-01 05:30',
                        content: '呵呵1'
                    },
                    {
                        cid: 2,
                        username: '空城旧梦1',
                        date: '10-01 05:22',
                        content: '呵呵1'
                    },
                    {
                        cid: 3,
                        username: '空城旧梦2',
                        date: '10-01 05:21',
                        content: '呵呵1'
                    },
                    {
                        cid: 4,
                        username: '空城旧梦3',
                        date: '10-01 05:20',
                        content: '呵呵1'
                    },
                    {
                        cid: 5,
                        username: '空城旧梦4',
                        date: '10-01 05:20',
                        content: '呵呵1'
                    },
                ],
                onClose() {
                    // do something
                }
            }
        },
        methods: {
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
                Toast({
                    message: '收藏成功',
                    icon: 'like-o',
                    mask: true,
                    duration: 1500
                });
            },
            addComment(){
                let comment = {
                    cid: this.comments.length + 1,
                    username: '空城旧梦',
                    date: new Date(),
                    content: this.comment
                };
                this.comments.unshift(comment);
                this.comment =  '';
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
                    font-size: 0.4rem;
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
