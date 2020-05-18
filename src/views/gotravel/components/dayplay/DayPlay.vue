<template>
    <div id="day-play">
        <!-- 顶部标题栏 -->
        <div class="top">
            <van-icon name="arrow-left" size="1.25rem" @click="goBack" color="#f5f5f5"/>
            <p class="title">三日游</p>
        </div>
        <!-- 三日游图片区域 -->
        <div class="img">
            <img :src="images[0]" alt="" @click="onImageChange">
            <!-- 图片浏览区域 -->
            <van-image-preview
                    v-model="show"
                    :images="dayplay.images"
                    @change="onChange"
            >
                <template>{{ index }}</template>
            </van-image-preview>
        </div>
        <!-- 三日游标题及简介区域 -->
        <div class="header">
            <span class="dayplay-title">{{dayplay.name}}</span>
            <span class="dayplay-introduce">{{dayplay.introduction}}</span>
        </div>
        <hr>

        <!-- 三日游景点区域 -->
        <ScenicspotList :scenicspotList="dayplayList" :showTime="daplayShow" />

        <!-- 为你推荐区域 -->
<!--        <div class="recommend">-->
<!--            <p class="title">为你推荐</p>-->
<!--            <ScenicspotList :scenicspotList="hotscenicspotList" :showTime="recommendShow" />-->
<!--            <van-button v-if="index" class="btn1" type="info" color="#87CEEB" @click="loadMore" round>加载更多</van-button>-->
<!--        </div>-->

    </div>
</template>

<script>
    import ScenicspotList from './../common/ScenicspotList'
    import {getDayPlay, getDayPlayList, getHotScenicspot} from "../../../../service";
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
                dayplay: {},
                images: [
                    require('../../../../images/bj_home.jpeg'),
                    require('../../../../images/mzxjnt.jpg'),
                    require('../../../../images/youji7.jpeg'),

                ],
                dayplayList: [],
                hotscenicspotList: [],
                did: 0
            }
        },
        mounted(){
            this.loadDayplay();
            this.loadDayplayScenicspot();
            this.loadScenicspot(false);
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
            loadDayplay() {
                let that = this;
                getDayPlay().then(res => {
                    // console.log('三日游', res);
                    if (res.status === 200) {

                        let dayplay = res.data;
                        let images = dayplay.pics.split(',');
                        for (let i in images) {
                            if (images[i] === '') {
                                images.splice(i,1);
                            } else {
                                images[i] = that.host + images[i];
                            }
                        }
                        dayplay.images = images;
                        dayplay.pics = images[0];
                        that.dayplay = dayplay;
                    } else {
                        Toast({
                            message: '网络错误！'
                        })
                    }
                })
            },
            loadDayplayScenicspot() {
                let _that = this;

                getDayPlayList().then(res => {
                    if(res.status === 200) {
                        if (res.data === null) {
                            res.data = [];
                        }
                        let dayplayList = res.data;
                        for(let item of dayplayList) {
                            let images = item.imgurl.split(',');
                            for (let i in images) {
                                if (images[i] === '') {
                                    images.splice(i,1);
                                } else {
                                    images[i] = _that.host + images[i];
                                }
                            }
                            item.images = images;
                            item.pics = images[0];
                        }
                        _that.dayplayList = dayplayList;
                        // console.log( _that.dayplayList);
                    } else {
                        Toast({
                            message: '网络错误！'
                        })
                    }
                })
            },
            loadScenicspot(flag) {
                let _that = this;
                let top = 0;
                if (flag) {
                    top = this.hotscenicspotList.length;
                }
                getHotScenicspot(top, 5).then(res => {
                    // console.log(res);
                    if(res.status == 200) {
                        let hotscenicspotList = res.data;
                        for(let item of hotscenicspotList) {
                            let images = item.imgurl.split(',');
                            for (let i in images) {
                                if (images[i] === '') {
                                    images.splice(i,1);
                                } else {
                                    images[i] = _that.host + images[i];
                                }
                            }
                            item.images = images;
                            item.pics = images[0];
                        }
                        if (flag) {
                            _that.hotscenicspotList = _that.hotscenicspotList.concat(hotscenicspotList);
                        } else {
                            _that.hotscenicspotList = hotscenicspotList;
                        }
                        // console.log( _that.hotscenicspotList);
                    }
                });
            },
            loadMore() {
                this.loadScenicspot(true)
            }
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
            .btn1{
                width: 15rem;
                left: 50%;
                margin-left: -7.5rem;
                box-shadow: 0 0 9px #999;
                margin-bottom: 5.882rem;
            }
        }
    }
</style>
