<template>
    <div id="announcement">
        <h1 class="title">公告</h1>
        <van-notice-bar
                v-for="(item, index) in notice"
                :key="index"
                :text="item.content"
                left-icon="volume-o"
                color="#999"
                background="#ffffff"
                :speed="10"
                :scrollable="false"
                wrapable
        />

    </div>
</template>

<script>

    export default {
        name: "Announcement",
        data(){
            return {

            }
        },

        props: {
            notice: Array
        }
    }
</script>

<style lang="scss" scoped>
    #announcement{
        width: 100%;
        margin: 0.75rem 0 2rem;
        padding: 0.5rem;
        background-color: #ffffff;
        /*border: 1px solid #f9f9f9;*/
        box-shadow: 0 0 9px #999;

        .title{
            color: #484848;
            font-size: 1.25rem;
            font-weight: bold;
        }
    }
</style>
