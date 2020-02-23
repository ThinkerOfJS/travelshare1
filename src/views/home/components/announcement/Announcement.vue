<template>
    <div id="announcement">
        <h1 class="title">公告</h1>
        <van-notice-bar
                v-for="(notice, index) in notices"
                :key="index"
                :text="notice.text"
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
                notices: [
                    { text: '重大通知：本站今天正式推出三日游路线旅游，选择三日游路线旅游的游客将享受本站精心提供的线下服务。' },
                    { text: '本站推出的一站式线下服务今天正式推出，详情请到各旅游区游客服务区询问。' },
                    { text: '亲爱的游客朋友门，你们好，明天我市晴，最高气温25摄氏度，最低气温11摄氏度，吹2-3级西南风。' },
                ]
            }
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
