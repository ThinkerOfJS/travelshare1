<template>
    <div id="travellist">
        <div class="travel-item" v-for="(story, index) in storyList" :key="index" @click="goDetail(story.tid)" >
            <img :src="host + story.pics[0]" v-lazy="host + story.pics[0]" alt="">
            <div class="travel-content">
                <p class="title">
                    <span class="place">{{ story.place }}</span>
                    <span class="category">{{ type[story.tpid-1] }}</span>
                    <span class="time">{{story.date}}</span>
                </p>
                <p class="content" v-html="story.content">{{ story.content }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TravelList",
        data(){
            return {
                type: ['民宿', '美食', '景点', '艺术', '灵感'],
                // storyLists: this.storyList
            }
        },
        mounted() {

        },
        methods: {
            goDetail(storyId) {
                this.$router.push({
                    name: 'traveldesc',
                    params: { storyId }
                });
            },
            richTextFormat(value) {
                // value = value.replace(/<\/?[^>]*>/g,'')
                value = value.replace(/<\/?.+?>/g,'');
                value = value.replace(/\s+/g,'');
                if (value.length > 30) {
                    return value.slice(0, 50) + "...";
                }
                return value;
            },
        },
        props: {
            storyList: Array
        }
    }
</script>

<style lang="scss" scoped>
    #travellist{
        width: 100%;
        margin-bottom: 0.588rem;
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
                height: 7.059rem;
            }

            .travel-content{
                .title{
                    font-size: 0.7rem;
                    display: flex;
                    align-items: center;
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
                        margin-left: 1.5rem;
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
