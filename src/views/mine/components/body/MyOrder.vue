<template>
    <div id="my-order">
        <div class="top">
            <van-icon name="arrow-left" size="1.25rem" @click="goBack" color="#f5f5f5"/>
            <p class="title">我的订单</p>
            <van-icon name="ellipsis" size="1.25rem" color="#f5f5f5"/>
        </div>
        <div class="body">
            <div class="order" v-for="(order, index) in orderList" :key="index">
                <div class="order-top">
                    <span class="order-title">{{order.sname}}</span>
                    <span class="order-num">订单编号：{{order.ordernumber}}</span>
                </div>

                <div class="order-ticket" v-for="(item, indexs) in order.orderDetList" :key="indexs">
                    <span class="order-ticket-tname">{{item.tname}}</span>
                    <span class="order-ticket-tnumber">X  {{item.tnumber}}</span>
                </div>

                <div class="order-contact">
                    <span class="order-contact-text">{{order.coname}}：{{order.cphone}}</span>
                    <span class="order-cdate">下单时间：{{order.odate}}</span>
                </div>

                <div class="order-price">
                    <span class="order-price-label">总价：</span>
                    <span class="order-price-text">￥{{order.oprice}}</span>
                </div>

            </div>

            <van-button class="btn1" type="info" color="#87CEEB" @click="loadMore" round>加载更多</van-button>
        </div>
    </div>
</template>

<script>
    import {Toast} from 'vant'
    import {getOrderList, getOrderDetList} from "../../../../service";

    export default {
        name: "MyOrder",
        data(){
            return {
                uid: 0,
                orderList: []
            }
        },

        mounted() {
            this.uid = this.$route.params.userId;
            this.loadOrderList(false);
        },

        methods: {
            goBack() {
                this.$router.go(-1);
            },
            loadOrderList(flag) {
                let that = this;
                let offset = 0;
                if (flag) {
                    offset = that.orderList.length;
                }
                getOrderList(that.uid,offset, 3).then(res => {
                    // console.log('订单数据', res);
                    if (res.status === 200) {
                        if (res.data === null) {
                            res.data = []
                        }
                        let order = that.orderList;
                        if (flag) {
                            order = order.concat(res.data);
                        } else {
                            order = res.data
                        }

                        for (let i in order) {
                            that.loadOrderDetList(i, order[i].ordernumber);
                            order[i].odate = order[i].odate.slice(0, 16);
                        }
                        that.orderList = order;
                        console.log(that.orderList);
                    }
                })
            },
            loadOrderDetList(i, ordernumber) {
                let that = this;
                getOrderDetList(ordernumber).then(res => {
                    // console.log('门票', res);
                    if (res.status === 200) {
                        if (res.data === null) {
                            res.data = [];
                        }
                        that.orderList[i].orderDetList = res.data;
                    }
                });
                console.log('orderlist', that.orderList);
            },
            loadMore() {
                this.loadOrderList(true)
            }
        }
    }
</script>

<style scoped lang="scss">
    #my-order {
        .top{
            display: flex;
            padding: 1rem 0.5rem;
            background-color: #8fd6f3;
            .title{
                width: 100%;
                display: inline-block;
                color: #f5f5f5;
                text-align: center;
                font-size: 1.25rem;
                line-height: 1.25rem;
                font-weight: bold;
            }
        }
        .body {
            .order {
                width: 20rem;
                border-radius: 10px;
                background-color: white;
                margin: 1.176rem auto;
                display: flex;
                flex-direction: column;
                padding: 0.5rem 0.588rem 0.8rem;
                /*background: radial-gradient(circle at 0px 50px, transparent 10px, #FFFFFF 0) top left;*/
                background: radial-gradient(circle at 0 50px, transparent 10px,  #FFFFFF 0) top left / 200px 51% no-repeat,
                radial-gradient(circle at right bottom, transparent 0px,  #FFFFFF 0) bottom left /160px 51% no-repeat,
                radial-gradient(circle at 190px 50px, transparent 10px, #FFFFFF 0) top right /190px 51% no-repeat,
                radial-gradient(circle at left bottom, transparent 0px, #FFFFFF 0) bottom right /230px 51% no-repeat;
                filter: drop-shadow(3px 3px 3px rgba(0,0,0,.3));
                .order-top {
                    display: flex;
                    flex-direction: column;
                    .order-title {
                        margin-bottom: 0.588rem;
                        text-align: center;
                        font-size: 1.176rem;
                    }
                    .order-num {
                        padding-top: 0.588rem;
                        border-top: 1px dashed rgba(161, 161, 161, 0.52);
                        margin-top: 0.118rem;
                        margin-bottom: 0.294rem;
                        color: gray;
                        font-size: 0.70rem;
                    }
                }

                .order-ticket {
                    display: flex;
                    align-items: center;
                    .order-ticket-tname {
                        font-size: 17px;
                        color: darkslategrey;
                        margin-right: 1.176rem;
                    }
                    .order-ticket-tnumber {
                        width: 3.529rem;
                        font-size: 1rem;
                    }

                }
                .order-contact {
                    display: flex;

                    flex-direction: column;
                    .order-contact-text {
                        font-size: 17px;
                        margin: 0.3rem 0 0.3rem 0;
                    }

                    .order-cdate {
                        font-size: 17px;
                        margin: 0 0 0.3rem 0;
                    }
                }


                .order-price {
                    margin-left: 200px;
                    display: flex;
                    align-items: center;
                    .order-price-text {
                        color: rgb(255, 153, 0);
                    }
                }
            }
        }
        .btn1{
            width: 15rem;
            left: 50%;
            margin-left: -7.5rem;
            box-shadow: 0 0 9px #999;
            margin-bottom: 5.882rem;
        }
    }
</style>
