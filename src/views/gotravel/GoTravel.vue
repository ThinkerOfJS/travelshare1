<template>
    <div id="gotravel">
        <!-- 标题区域 -->
        <div class="top">
            <p class="title">去旅行</p>
            <van-search
                    class="search"
                    v-model="value"
                    placeholder="请输入景区名称"
                    show-action
                    :label="place"
                    shape="round"
                    background="transparent"
                    @focus="onSearch"
            >
                <div slot="action" @click="onSearch"><p>搜索</p></div>
            </van-search>
        </div>

        <!-- 景点门票、三日游区域 -->
        <div class="body">
            <div class="position" @click="goScenicspot(place)">
                <van-image
                        class="box-shadow"
                        round
                        width="5rem"
                        height="5rem"
                        :src="scenicspot_logo"
                />
                <span class="text">景区门票</span>
            </div>
            <div class="position" @click="goDayplay(place)">
                <van-image
                        class="box-shadow"
                        round
                        width="5rem"
                        height="5rem"
                        :src="dayplay_logo"
                />
                <span class="text">三日游</span>
            </div>
        </div>

        <!-- 热门推荐区域 -->
        <div class="hot-recommend">
            <p class="title">热门推荐</p>
            <ScenicspotList :scenicspotList="scenicspotList" :showTime="showTime" />
            <van-button class="btn" @click="loadMoreScenicspot" type="info" color="#87CEEB" round>加载更多</van-button>
        </div>
    </div>
</template>

<script>
    import ScenicspotList from './components/common/ScenicspotList'
    import {getHotScenicspot} from './../../service/index'

    export default {
        name: "GoTravel",
        data(){
            return {
                scenicspot_logo: require('../../images/jingqu_ticket.jpg'),
                dayplay_logo: require('../../images/dayplay_logo.jpg'),
                value: '',
                place: '',
                scenicspotList: [],
                showTime: false,
                tid: 0
            }
        },
        mounted(){
            this.loadScecispot(false);
        },
        methods: {
            onSearch(){
                this.$router.push({
                    name: 'searchs',
                })
            },
            goScenicspot(place){
                this.$router.push({
                    name: 'scenicspot',
                });
            },
            goDayplay(){
                this.$router.push({
                    name: 'dayplay',
                });
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
                        console.log( _that.scenicspotList);
                    }
                });


            },
            loadMoreScenicspot() {
                this.loadScecispot(true)
            }
        },
        components: {
            ScenicspotList
        }
    }
</script>

<style lang="scss" scoped>
    #gotravel{
        background-color: #ffffff;
        .top{
            display: flex;
            width: 100%;
            padding: 0.5rem;
            background-color: #8fd6f3;
            .title{
                width: 5rem;
                display: inline-block;
                color: #f5f5f5;
                text-align: center;
                font-size: 1.25rem;
                line-height: 2.5rem;
                font-weight: bold;
            }
            .search{
                padding: 0;
                p{
                    font-size: 0.9rem;
                    color: #f5f5f5;
                }
            }
        }
        .body{
            margin: 0.75rem 0;
            background: #ffffff;
            padding: 0.6rem 3rem;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            box-shadow: 0 4px 9px #bababa;
            .position{
                width: 5rem;
                text-align: center;
                .img{
                    width: 100%;
                }
                .text{
                    font-size: 0.8rem;
                }
            }
        }
        .hot-recommend{
            padding: 0.5rem;
            background: #ffffff;
            margin-bottom: 3.0rem;
            box-shadow: 0 0 9px #bababa;
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
