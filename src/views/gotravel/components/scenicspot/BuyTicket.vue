<template>
    <div id="buyticket">
        <!--标题区域-->
        <div class="top">
            <van-icon name="arrow-left" size="1.25rem" @click="goBack" color="#f5f5f5"/>
            <p class="title">门票</p>
        </div>
        <!-- 景区图片和地点 -->
        <div class="header">
            <img :src="image" preview :preview-text="address" :alt="address" >
            <span class="address">{{ address }}</span>
        </div>
        <hr>
        <!-- 门票推荐区域 -->
        <div class="body">
            <div class="body-top">
                <span class="title">门票推荐：</span>
                <van-icon size="1.5rem" color="red" name="hot-sale-o" />
                <span class="ticket">{{ tickets[0].tname }}</span>
            </div>

            <div class="tags" @click="goBuy(address, tickets[0].tname, tickets[0].tprice)">
                <van-tag class="size" color="#FF9900" plain>￥{{ tickets[0].tprice }}</van-tag>
                <van-tag class="size" color="#FF9900">预定</van-tag>
            </div>
        </div>
        <hr>
        <!-- 门票列表区域 -->
        <div class="ticket-list" v-for="(item, index) in tickets" :key="index">
            <div class="ticket-left">
                <van-icon class="icon" name="coupon-o" color="red" />
                <span class="ticket">{{ item.tname }}</span>
            </div>

            <div class="tags" @click="goBuy(address, item.tname, item.tprice)">
                <van-tag class="size" color="#FF9900" plain>￥{{ item.tprice }}</van-tag>
                <van-tag class="size" color="#FF9900">预定</van-tag>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState, mapMutations} from 'vuex';
    import {getScenicspotTicket} from './../../../../service/index'
    export default {
        name: "BuyTicket",
        data(){
            return {
                sId: '',
                image: '',
                address: '',
                tickets : [],
                hotTickets: {},
            }
        },
        mounted(){
            this.getScenicspotData();
            this.getTicket();
        },
        methods: {
            ...mapMutations(["ADD_TICKET"]),
            goBack(){
                this.$router.go(-1);
            },
            goBuy(address, ticketName, ticketPrice){
                this.ADD_TICKET({
                    ticketName,
                    ticketPrice
                });
                // console.log(ticketName + '2------' + ticketPrice);
                this.$router.push({
                    name: 'order',
                    params: { address }
                });
            },

            getScenicspotData(){
                let scenicspotData = JSON.parse(this.$route.query.data);
                this.sId = scenicspotData.sId;
                this.address = scenicspotData.address;
                this.image = scenicspotData.img_url;
                console.log('sid', this.sId);
            },

            getTicket() {
                let _this = this;
                getScenicspotTicket(_this.sId).then(res => {
                    console.log('景区门票', res);
                    if (res.status === 200) {
                        if (res.data === null) {
                            res.data = []
                        }

                        _this.tickets = res.data;
                    }
                });

            }
        }
    }
</script>

<style lang="scss" scoped>
    #buyticket{
        background-color: #ffffff;
        margin-bottom: 3rem;
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
                font-weight: bold;
                font-size: 0.85rem;
            }
        }
        .body{
            width: 382px;
            display: flex;
            justify-content: space-between;
            margin-left: 0.5rem;
            .body-top {
                display: flex;
                align-items: center;

                .title{
                    color: #8c8c8c;
                    display: block;
                    font-size: 0.8rem;
                    font-weight: bold;
                    line-height: 200%;
                }
                .ticket{
                    line-height: 1.529rem;
                    font-size: 0.8rem;
                }
            }

            .tags{
                .size {
                    text-align: center;
                    width: 2.4rem;
                }
            }

        }
        .ticket-list{
            display: flex;
            justify-content: space-between;
            padding: 0.588rem 1.176rem;
            .ticket-left {
                display: flex;
                justify-content: flex-start;
                .icon{
                    line-height: 1.435rem;
                }
                .ticket{
                    max-width: 150px;
                    line-height: 1.435rem;
                    font-size: 0.8rem;
                    margin-left: 0.588rem;
                }
            }

            .tags{
                margin-left: 4.7rem;
                text-align: center;
                .size{
                    width: 2.4rem;
                }
            }
        }
    }
</style>
