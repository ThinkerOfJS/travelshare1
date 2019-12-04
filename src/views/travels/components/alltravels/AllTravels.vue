<template>
    <div id="alltravels">
        <div class="recommendTravel">
            <p class="title">游记推荐</p>
            <div class="wrapper">
                <div class="wrapperItem" v-for="(story, index) in recommendStory" :key="index" @click="goDetail(story.storyId)">
                    <img :src="story.img_url" alt="">
                    <div class="storyInfo">
                        <p class="storyCategory">{{ story.storyCategory }}</p>
                        <p class="storyContent">
                            {{ story.storyContent }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="youlikeTravel">
            <p class="youlikeTitle title">猜你喜欢</p>
            <div class="youlikeContent">
                <TravelList :storyList="storyList" />
            </div>
        </div>

    </div>
</template>

<script>
    import TravelList from '../travel/TravelList'

    export default {
        name: "AllTravels",
        data(){
            return {
                // 推荐游记故事
                recommendStory: [
                    {
                        storyId: 1,
                        img_url: 'https://img.ivsky.com/img/tupian/pre/201904/11/hupo-005.jpg',
                        storyCategory: '故事',
                        storyContent: '今天的风儿甚是喧嚣,我都不知道该怎么办了该怎么办了该怎么办了'
                    },
                    {
                        storyId: 2,
                        img_url: 'https://img.ivsky.com/img/tupian/pre/201904/11/hupo-005.jpg',
                        storyCategory: '故事',
                        storyContent: '今天的风儿甚是喧嚣,我都不知道该怎么办了该怎么办了该怎么办了'
                    },
                    {
                        storyId: 3,
                        img_url: 'https://img.ivsky.com/img/tupian/pre/201904/11/hupo-005.jpg',
                        storyCategory: '故事',
                        storyContent: '今天的风儿甚是喧嚣,我都不知道该怎么办了该怎么办了该怎么办了'
                    },
                    {
                        storyId: 4,
                        img_url: 'http://img1.imgtn.bdimg.com/it/u=2746120682,390938867&fm=26&gp=0.jpg',
                        storyCategory: '故事',
                        storyContent: '今天的风儿甚是喧嚣,我都不知道该怎么办了该怎么办了该怎么办了'
                    },
                    {
                        storyId: 5,
                        img_url: 'http://img1.imgtn.bdimg.com/it/u=2746120682,390938867&fm=26&gp=0.jpg',
                        storyCategory: '故事',
                        storyContent: '今天的风儿甚是喧嚣,我都不知道该怎么办了该怎么办了该怎么办了'
                    },
                    {
                        storyId: 6,
                        img_url: 'http://img1.imgtn.bdimg.com/it/u=2746120682,390938867&fm=26&gp=0.jpg',
                        storyCategory: '故事',
                        storyContent: '今天的风儿甚是喧嚣,我都不知道该怎么办了该怎么办了该怎么办了'
                    },
                    {
                        storyId: 7,
                        img_url: 'http://img1.imgtn.bdimg.com/it/u=2746120682,390938867&fm=26&gp=0.jpg',
                        storyCategory: '故事',
                        storyContent: '今天的风儿甚是喧嚣,我都不知道该怎么办了该怎么办了该怎么办了'
                    },
                ],
            }
        },
        methods: {
            goDetail(storyId){
                this.$router.push({
                    name: 'traveldesc',
                    params: { storyId }
                });
            }
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
        .youlikeTitle{
            margin-top: 3rem;
        }
    }
</style>
