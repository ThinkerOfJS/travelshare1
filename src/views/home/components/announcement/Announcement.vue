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
        />

    </div>
</template>

<script>

    export default {
        name: "Announcement",
        data(){
            return {
                notices: [
                    { text: '通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容' },
                    { text: '今天正式推出今天正式推出今天正式推出今天正式推出今天正式推出今天正式推出' },
                    { text: '今天是晴天今天是晴天今天是晴天今天是晴天今天是晴天今天是晴天今天是晴天今天是晴天' },
                    { text: '通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容' },
                    { text: '通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容' },
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