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
                        img_url: require('../../../../images/travels_detail1.jpeg'),
                        storyCategory: '故事',
                        storyContent: '那是一个带着书香的姑娘，长发婆娑，我与她相遇在梅雨过后的江南小巷。'
                    },
                    {
                        id: 2,
                        img_url: require('../../../../images/youji2.jpeg'),
                        storyCategory: '美食',
                        storyContent: '缙云烧饼是真的好次，外酥里嫩，薄厚恰到好处，葱花的香味能够在嘴里久久不散。'
                    },
                    {
                        id: 3,
                        img_url: require('../../../../images/youji3.jpg'),
                        storyCategory: '民宿',
                        storyContent: '真是让人激动，宁波的清风酒店，独特的室内装潢，热情的人工服务。'
                    },{
                        id: 4,
                        img_url: require('../../../../images/youji4.jpg'),
                        storyCategory: '故事',
                        storyContent: '人生处处有惊喜，早上4点多起床，就是为了看一严日出，功夫不负有心人，虽然累了点。'
                    },{
                        id: 5,
                        img_url: require('../../../../images/youji5.jpg'),
                        storyCategory: '美食',
                        storyContent: '想吃螃蟹，淡黄色的蟹黄，香气四溢，闻着想吃，吃者流泪啊。'
                    }
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
