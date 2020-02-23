<template>
    <div id="concentration">
        <h1 class="title">精选</h1>
        <div class="wrapper">
                <div
                    class="wrapperItem"
                    v-for="(story, index) in storyList"
                    :key="index"
                    @click="goDetail(story.id)"
                >
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
</template>

<script>
    export default {
        name: "Concentration",
        data(){
            return {
                storyList: [
                    {
                        id: 1,
                        img_url: require('../../../../images/youji1.jpeg'),
                        storyCategory: '故事',
                        storyContent: '今天的风儿甚是喧嚣,我都不知道该怎么办了'
                    },
                    {
                        id: 2,
                        img_url: require('../../../../images/youji2.jpeg'),
                        storyCategory: '故事',
                        storyContent: '今天的风儿甚是喧嚣,我都不知道该怎么办了'
                    },
                    {
                        id: 3,
                        img_url: require('../../../../images/youji3.jpg'),
                        storyCategory: '故事',
                        storyContent: '今天的风儿甚是喧嚣,我都不知道该怎么办了'
                    },{
                        id: 4,
                        img_url: require('../../../../images/youji4.jpg'),
                        storyCategory: '故事',
                        storyContent: '今天的风儿甚是喧嚣,我都不知道该怎么办了'
                    },{
                        id: 5,
                        img_url: require('../../../../images/youji5.jpg'),
                        storyCategory: '故事',
                        storyContent: '今天的风儿甚是喧嚣,我都不知道该怎么办了'
                    },
                    {
                        id: 6,
                        img_url: require('../../../../images/youji6.jpg'),
                        storyCategory: '故事',
                        storyContent: '今天的风儿甚是喧嚣,我都不知道该怎么办了'
                    },
                ]
            }
        },
        methods: {
            goDetail(storyId){
                this.$router.push({
                    name: 'traveldesc',
                    params: { storyId }
                });
            }
        }
    }
</script>

<style lang="scss" scoped>
    #concentration{
        width: 100%;
        height: 9rem;
        margin: 0.75rem 0;
        padding: 0.5rem;
        background-color: #ffffff;
        /*border: 1px solid #f5f5f5;*/
        box-shadow: 0 1px 9px #999;
        .title{
            color: #484848;
            font-size: 1.25rem;
            font-weight: bold;
        }

        .wrapper{
            margin-top: 0.5rem;
            display: -webkit-box;
            overflow-x: scroll;
            overflow-scrolling: touch;

            .wrapperItem{
                width: 5rem;
                height: 6rem;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                border: 1px solid #f5f5f5;
                box-shadow: 0 4px 9px #f5f5f5;
                margin-right: 0.4rem;

                img{
                    width: 100%;
                    height: 2.941rem;
                }

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
        /*隐藏滚动条*/
        .wrapper::-webkit-scrollbar {display:none}
    }
</style>
