<template>
    <div id="buyticket">
        <!--标题区域-->
        <div class="top">
            <van-icon name="arrow-left" size="1.25rem" @click="goBack" color="#f5f5f5"/>
            <p class="title">门票</p>
        </div>
        <div class="header">
            <img :src="image" preview :preview-text="address" :alt="address" >
            <span class="address">{{ address }}</span>
        </div>
        <hr>
        <div class="body">
            <span class="title">门票推荐</span>
            <van-icon size="1.5rem" color="red" name="hot-sale-o" />
        </div>
        <hr>
    </div>
</template>

<script>
    export default {
        name: "BuyTicket",
        data(){
            return {
                sId: '',
                image: '',
                address: '',
                tickets : [
                    {
                        name : "玉屏索道上行成人票",
                        price_mk : "90",
                        price : "90"
                    }
                ],
            }
        },
        mounted(){
            this.getScenicspotData();
        },
        methods: {
            goBack(){
                this.$router.go(-1);
            },
            getScenicspotData(){
                let scenicspotData = JSON.parse(this.$route.query.data);
                this.sId = scenicspotData.sId;
                this.address = scenicspotData.address;
                this.image = scenicspotData.img_url;
            },
        }
    }
</script>

<style lang="scss" scoped>
    #buyticket{
        background-color: #ffffff;
        .top{
            display: flex;
            width: 100%;
            padding: 1rem 0.5rem;
            background-color: #8fd6f3;
            text-align: center;
            .title{
                width: 100%;
                color: #f5f5f5;
                margin-left: -0.2rem;
                font-size: 1.25rem;
                line-height: 1.25rem;
                font-weight: bold;
            }
        }
        .header{
            padding: 0.4rem;
            margin: 0.4rem 0;
            img{
                width: 100%;
                box-shadow: 0 0 9px #999;
            }
            .address{
                font-size: 0.8rem;
            }
        }
        .body{
            text-align: center;
            display: flex;
            justify-content: start;
            margin-left: 1rem;
            .title{
                color: #8c8c8c;
                display: block;
                font-size: 0.8rem;
                line-height: 200%;
            }
        }
    }
</style>