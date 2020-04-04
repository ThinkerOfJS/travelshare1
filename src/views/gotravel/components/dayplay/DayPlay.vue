<template>
    <div id="day-play">
        <!-- 顶部标题栏 -->
        <div class="top">
            <van-icon name="arrow-left" size="1.25rem" @click="goBack" color="#f5f5f5"/>
            <p class="title">三日游</p>
        </div>
        <!-- 一日游图片区域 -->
        <div class="img">
            <img :src="images[0]" alt="" @click="onImageChange">
            <!-- 图片浏览区域 -->
            <van-image-preview
                    v-model="show"
                    :images="images"
                    @change="onChange"
            >
                <template>{{ index }}</template>
            </van-image-preview>
        </div>
        <!-- 一日游标题及简介区域 -->
        <div class="header">
            <span class="dayplay-title">龙城三日游</span>
            <span class="dayplay-introduce">炎热的夏季，一条凉爽的出行的路线是您最好的选择，而且，购买推荐路线上景区门票，可以享受线下优质服务，还有精心准备的小礼品相送。</span>
        </div>
        <hr>

        <!-- 一日游景点区域 -->
        <ScenicspotList :scenicspotList="scenicspotList" :showTime="daplayShow" />

        <!-- 为你推荐区域 -->
        <div class="recommend">
            <p class="title">为你推荐</p>
            <ScenicspotList :scenicspotList="scenicspotList" :showTime="recommendShow" />
        </div>

    </div>
</template>

<script>
    import ScenicspotList from './../common/ScenicspotList'
    import {getDayPlay} from './../../../../service/index'
    export default {
        name: "DayPlay",
        data(){
            return {
                index: 1,
                show: false,
                daplayShow: true,
                recommendShow: false,
                dayplayTitle:'',
                dayplayIntro:'',
                images: [
                    require('../../../../images/bj_home.jpeg'),
                    require('../../../../images/mzxjnt.jpg'),
                    require('../../../../images/youji7.jpeg'),

                ],
                scenicspotList: [
                    {
                        id: '1',
                        scenicspot_img: require('../../../../images/bj_home.jpeg'),
                        scenicspot_name: '北京天安门',
                        scenicspot_introduce: '  北京天安门 ',
                    },
                    {
                        id: '2',
                        scenicspot_img: require('../../../../images/cc.jpg'),
                        scenicspot_name: '长城',
                        scenicspot_introduce: '长城（The Great Wall），又称万里长城，是中国古代的军事防御工程，是一道高大、坚固而连绵不断的长垣，用以限隔敌骑的行动。长城不是一道单纯孤立的城墙，而是以城墙为主体，同大量的城、障、亭、标相结合的防御体系。',
                    },
                    {
                        id: '3',
                        scenicspot_img: require('../../../../images/xs.jpeg'),
                        scenicspot_name: '香山',
                        scenicspot_introduce: '香山公园，位于北京市海淀区买卖街40号，北京市区西北郊，占地188公顷，是一座具有山林特色的皇家园林。景区内主峰香炉峰俗称“鬼见愁”，海拔575米。',
                    },
                    {
                        id: '4',
                        scenicspot_img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567583112339&di=85d6913157e38cfdf6b13a3d6d261440&imgtype=0&src=http%3A%2F%2Fimg3.tuniucdn.com%2Fimages%2F2011-09-28%2FG%2FG75pd110Z86qqT20.jpg',
                        scenicspot_name: '北京天安门',
                        scenicspot_introduce: '   坐落在中华人民共和国首都北京市的中心、故宫的南端，与天安门广场以及人民英雄纪念碑、毛主席纪念堂、人民大会堂、中国国家博物馆隔长安街相望，占地面积4800平方米',
                    },
                ],
                did: 0
            }
        },
        mounted(){
            // this.scenicspotList = getDayPlay(this.did).scenicspotList;
            // this.dayplayTitle = getDayPlay(this.did).dayplayTitle;
            // this.dayplayIntro = getDayPlay(this.did).dayplayIntro;
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
        },
        components: {
            ScenicspotList
        }
    }
</script>

<style lang="scss" scoped>
    #day-play{
        background: #ffffff;
        margin-bottom: 2.5rem;
        .top{
            display: flex;
            width: 100%;
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
        .img{
            padding: 0.4rem;
            margin: 0.4rem 0;
            img{
                width: 100%;
                box-shadow: 0 0 9px #999;
            }
        }
        .header{
            padding: 0.4rem;
            display: flex;
            flex-direction: column;
            /*justify-content: space-between;*/
            min-height: 4.5rem;
            .dayplay-title{
                font-size: 0.9rem;
                font-weight: bold;
            }
            .dayplay-introduce{
                margin-top: 0.2rem;
                font-size: 0.7rem;
                color: #999999;

            }
        }
        .recommend{
            padding: 0.4rem;
            .title{
                display: block;
                color: #484848;
                margin: 0.75rem 0;
                font-size: 1.25rem;
                font-weight: bold;
            }
        }
    }
</style>
