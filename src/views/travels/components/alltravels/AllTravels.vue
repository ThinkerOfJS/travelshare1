<template>
    <div id="alltravels">
        <div class="recommendTravel">
            <p class="title">游记推荐</p>
            <div class="wrapper">
                <div class="wrapperItem" v-for="(story, index) in hot_travels" :key="index" @click="goDetail(story.tid)">
                    <img :src="host + story.pics[0]" alt="">
                    <div class="storyInfo">
                        <p class="storyCategory">{{ type[story.tpid-1] }}</p>
                        <p class="storyContent" v-html="story.content">
                            {{ story.content }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="youlikeTravel">
            <p class="youlikeTitle title">热门推荐</p>
            <div class="youlikeContent">
                <TravelList :storyList="storyList" />
            </div>
        </div>

    </div>
</template>

<script>
    import TravelList from '../travel/TravelList'
    import {getHotTravels} from './../../../../service/index'

    export default {
        name: "AllTravels",
        data(){
            return {
                // 推荐游记故事
                hot_travels: [],
                type: ['民宿', '美食', '景点', '艺术', '灵感'],
            }
        },
        mounted() {
            this.getHotTravelsList();
        },
        methods: {
            goDetail(storyId){
                this.$router.push({
                    name: 'traveldesc',
                    params: { storyId }
                });
            },
            getHotTravelsList() {
                let _this = this;
                getHotTravels().then(res => {
                    // console.log(res);
                    if (res.status === 200) {
                        if (res.data === null) {
                            res.data = []
                        }
                        let travels = res.data;
                        for (let item of travels) {
                            item.pics = item.pics.split(',');
                        }
                        _this.hot_travels = travels
                    } else {
                        Toast({
                            message: '网络错误！'
                        })
                    }
                });
            },

        },
        components: {
            TravelList
        },
        props: {
            storyList: Array
        }
    }
</script>

<style lang="scss" scoped>
    #alltravels{
        padding: 0.5rem;
        background-color: #ffffff;

        .title{
            display: block;
            color: #484848;
            margin: 0.75rem 0;
            font-size: 1.25rem;
            font-weight: bold;
        }

        .wrapper{
            margin-top: 0.5rem;
            display: -webkit-box;
            overflow-y: hidden;
            overflow-x: scroll;
            /*overflow-scrolling: touch;*/

            .wrapperItem{
                width: 7rem;
                height: 7rem;
                padding: 0.2rem;
                margin-right: 0.4rem;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                min-height: 7rem;
                border: 1px solid #f5f5f5;
                box-shadow: 0 0 9px #e2e2e2;

                img{
                    width: 100%;
                    height: 3.235rem;
                }

                .storyInfo{
                    min-height: 3.25rem;
                    margin-top: 0.25rem;
                    .storyCategory{
                        font-size: 0.8rem;
                        font-weight: bold;
                    }
                    .storyContent{
                        font-size: 0.5rem;
                        /*white-space: nowrap;*/
                        /* 设置超出两行的文本使用省略号显示 */
                        overflow: hidden;
                        text-overflow: ellipsis;
                        display:-webkit-box;
                        -webkit-box-orient:vertical;
                        -webkit-line-clamp:2;
                    }
                }
            }
        }
        /*隐藏滚动条*/
        .wrapper::-webkit-scrollbar {display:none}
        .youlikeTravel {
            padding-bottom: 4.353rem;

            .youlikeTitle{
                margin-top: 3rem;
            }
        }

    }
</style>
