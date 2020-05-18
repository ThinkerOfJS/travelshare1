<template>
    <!--景区组件-->
    <div id="scenicspot">
        <div class="top">
            <van-icon name="arrow-left" size="1.25rem" @click="goBack" color="#f5f5f5"/>
            <p class="title">景区</p>
        </div>
        <!-- 景区图片区域 -->
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

        <hr>
        <div class="body">
            <p class="title">景区推荐</p>
            <ScenicspotList :scenicspotList="scenicspotList" />
            <van-button class="btn" type="info" color="#87CEEB" @click="loadMore" round>加载更多</van-button>
        </div>
    </div>
</template>

<script>
    import ScenicspotList from './../common/ScenicspotList';
    import {getHotScenicspot} from "../../../../service";

    export default {
        name: "Scenicspot",
        data(){
            return {
                show: false,
                index: 1,
                images: [
                    require('../../../../images/bj_home.jpeg'),
                    require('../../../../images/bj_home2.jpeg'),
                    require('../../../../images/bj_home3.jpeg'),
                ],
                scenicspotList: []
            }
        },
        mounted() {
            this.loadScecispot(false);
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
            loadScecispot(flag) {
                let _that = this;
                let top = 0;
                if (flag) {
                    top = this.scenicspotList.length;
                }
                getHotScenicspot(top, 5).then(res => {
                    // console.log(res);
                    if(res.status == 200) {
                        let scenicspotList = res.data;
                        for(let item of scenicspotList) {
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
                            _that.scenicspotList = _that.scenicspotList.concat(scenicspotList);
                        } else {
                            _that.scenicspotList = scenicspotList;
                        }
                        // console.log( _that.hotscenicspotList);
                    }
                });
            },
            loadMore() {
                this.loadScecispot(true)
            }
        },
        components: {
            ScenicspotList
        }
    }
</script>

<style lang="scss" scoped>
    #scenicspot{
        background: #ffffff;
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
                height: 11.765rem;
            }
        }
        .body{
            margin-bottom: 3.5rem;
            padding: 0.3rem;
            .title{
                color: #484848;
                font-size: 1.25rem;
                font-weight: bold;
            }
            .btn{
                width: 15rem;
                left: 50%;
                margin-left: -7.5rem;
                box-shadow: 0 0 9px #999;
            }
        }
    }
</style>
