<template>
    <div id="header">
        <div class="left">
            <span class="username">{{ user.nickname }}</span>
            <span class="signature">{{ user.introduction }}</span>
        </div>
        <van-image
                class="img"
                width="5rem"
                height="5rem"
                round
                fit="cover"
                :src="host + user.avatarsrc"
        />
    </div>
</template>

<script>
    export default {
        name: "Header",
        data(){
            return {

            }
        },
        props: {
            user: Object
        }
    }
</script>

<style lang="scss" scoped>
    #header{
        display: flex;
        justify-content: space-between;
        padding: 0.4rem 0.8rem;
        background: #ffffff;
        box-shadow: 0 4px 9px #bababa;
        .left{
            padding: 0.2rem;
            max-width: 14rem;
            display: flex;
            flex-direction: column;
            justify-content: start;
            .username{
                color: #484848;
                font-size: 1.25rem;
                font-weight: bold;
            }
            .signature{
                margin-top: 0.2rem;
                font-size: 0.8rem;
                color: #999999;
                max-height: 57px;
            }
        }
    }
</style>
