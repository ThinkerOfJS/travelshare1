<template>
    <!-- 景区详情景点组件 -->
    <div id="scenicspot">
        <div class="body" v-for="(item, index) in scenicspotList" :key="index" >
            <div class="title">
                <span class="scenicspot-name">{{ item.title }}</span>
            </div>

            <img :src="item.pics" preview :preview-text="item.title" alt="">
            <p style="white-space: pre-wrap" class="scenicspot-introduce" v-html="item.introduction">{{ item.introduction }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Scenicspot",
        data(){
            return {

            }
        },
        methods: {
            async getScenicspotDetail() {

            }
        },
        props: {
            scenicspotList: Array,
            showTime: Boolean
        }
    }
</script>

<style lang="scss" scoped>
    #scenicspot{
        padding: 0 0.2rem 0.2rem;
        .body{
            display: flex;
            flex-direction: column;
            justify-content: start;

            .title{
                text-align: center;
                margin: 0.3rem 0;
                .scenicspot-name{
                    font-size: 0.8rem;
                    font-weight: bold;
                }
            }
            img{
                width: 90%;
                margin: 0 auto;
                box-shadow: 0 0 9px #999;
            }
            .scenicspot-introduce{
                display: block;
                padding: 0.3rem 0;
                margin: 0.3rem 0.9rem 0;
                font-size: 0.7rem;
                color: #999999;
                min-height: 1.82rem;
            }
        }
    }
</style>
