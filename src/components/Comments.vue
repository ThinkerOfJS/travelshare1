<template>
    <div id="comments">
        <div class="comment" v-for="(comment, index) in comments" :key="index">
            <span class="index">{{ index+1 }}楼：</span>
            <div class="content">
                <div class="title">
                    <span>{{ comment.username }}</span>
                    <span>{{ comment.date | dateFormat }}</span>
                </div>
                <span style="margin-top: 0.3rem">{{ comment.content }}</span>

            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "Comments",
        props: {
            comments: Array
        }
    }
</script>

<style lang="scss" scoped>
    #comments{
        margin-bottom: 0.5rem;
        padding: 0.5rem 0.4rem;
        background-color: #ebebeb;
        .comment{
            display: flex;
            justify-content: start;
            font-size: 0.8rem;
            /*height: 3rem;*/
            margin-top: 0.5rem;

            border-bottom: 1px solid #d5d5d5;
            .content{
                display: flex;
                flex-direction: column;
                justify-content: start;
                padding-bottom: 0.5rem;
                width: 18rem;
                .title{

                    display: flex;
                    justify-content: space-between;
                }
            }
        }
    }
</style>