<template>
    <div id="travellist">
        <div class="travel-item" v-for="(story, index) in storyList" :key="index" @click="goDetail(story.storyId)" >
            <img :src="story.img_url" v-lazy="story.img_url" alt="" >
            <div class="travel-content">
                <p class="title">
                    <span class="place">{{ story.storyPlace }}</span>
                    <span class="category">{{ story.storyCategory }}</span>
                    <span class="time">2019-9-3</span>
                </p>
                <p class="content">{{ story.storyContent }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TravelList",
        data(){
            return {

            }
        },
        methods: {
            goDetail(storyId) {
                this.$router.push({
                    name: 'traveldesc',
                    params: { storyId }
                });
            }
        },
        props: {
            storyList: Array
        }
    }
</script>

<style lang="scss" scoped>
    #travellist{
        width: 100%;
        margin-bottom: 3rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        .travel-item{
            width: 49%;
            padding: 0.2rem;
            margin-top: 0.4rem;
            max-height: 200px;
            border: 1px solid #f5f5f5;
            box-shadow: 0 0 9px #c0c0c0;
            img{
                width: 100%;
            }

            .travel-content{
                .title{
                    font-size: 0.7rem;
                    .place{
                        font-weight: bold;
                    }
                    .category{
                        display: inline-block;
                        margin-left: 0.2rem;
                    }
                    .time{
                        display: inline-block;
                        font-style: italic;
                        margin-left: 3rem;
                    }
                }
                .content{
                    font-size: 0.6rem;
                    /* 超出两行省略号显示 */
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display:-webkit-box;
                    -webkit-box-orient:vertical;
                    -webkit-line-clamp:2;
                }
            }

        }

    }
</style>
