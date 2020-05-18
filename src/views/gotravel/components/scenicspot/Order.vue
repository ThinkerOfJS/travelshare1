<template>
    <div id="order">
        <!--标题区域-->
        <div class="top">
            <van-icon name="arrow-left" size="1.25rem" @click="goBack" color="#f5f5f5"/>
            <p class="title">下单</p>
            <van-icon name="close" size="1.25rem" @click="clearOrder" color="#f5f5f5" />
        </div>
        <!--内容区域-->
        <div class="body">
            <div class="title">
                <span>景点名称：</span>
                <span style="margin-left: 0.5rem;">{{ address }}</span>
            </div>
            <div class="ticket" v-for="(ticket, index) in tickets" :key="index">
                <van-switch
                        v-model="ticket.checked"
                        active-color="#07c160"
                        inactive-color="#ee0a24"
                        size="20px"
                        @change="sellectSingle(ticket.ticketName)"
                />
                <div class="ticket-body">
                    <div class="ticket-name">
                        <span style="margin-left: 2.5rem; color: #999999">门票说明：</span>
                        <span style="color: #999999;">{{ ticket.ticketName }}</span>
                    </div>
                    <div class="ticket-num">
                        <span style="margin-left: 2.5rem;">购买数量：</span>
                        <van-stepper
                            v-model="ticket.num"
                            min="0" max="9"
                            button-size="20px"
                            @plus="addTicket(ticket.ticketName, ticket.ticketPrice)"
                            @minus="reduceTicket(ticket.num ,ticket.ticketName)"
                        />
                    </div>
                    <span style="color: red;margin-left: 2.3rem; margin-top: 0.3rem;">￥ {{ ticket.ticketPrice }}</span>
                </div>
            </div>
        </div>
        <AddContact @getcontact="getContact" />
<!--        <span>联系人：{{ contact.name + contact.tel }}</span>-->

        <van-submit-bar
                :price="allPrice"
                button-text="提交订单"
                @submit="openActionSheet"
        >
            <van-switch
                    v-model="isSellected"
                    active-color="#07c160"
                    inactive-color="#ee0a24"
                    size="1.471rem"
                    style="margin-left: 0.5rem"
                    @change="sellectAll(isSellected)"
            />
        </van-submit-bar>
        <van-action-sheet v-model="show" title="密码">
            <div class="content">
                <van-password-input
                        :value="value"
                        :focused="showKeyboard"
                        @focus="showKeyboard = true"
                />
                <!-- 数字键盘 -->
                <van-number-keyboard
                        :show="show"
                        theme="custom"
                        extra-key="."
                        close-button-text="完成"
                        @blur="show = false"
                        @input="onInput"
                        @delete="onDelete"
                        @close="onSubmit"
                />
            </div>
            <!-- 密码输入框 -->

        </van-action-sheet>
    </div>

</template>

<script>
    import { mapState, mapMutations } from 'vuex'
    import { Dialog, Toast } from 'vant';
    import AddContact from './AddContact'
    import {addOrder} from './../../../../service/index'

    export default {
        name: "Order",
        data(){
            return {
                address: '',
                contact: {
                    name: '',
                    tel: ''
                },
                value: '',
                showKeyboard: true,
                show: false
            }
        },
        mounted(){
            this.initOrder();
        },
        computed: {
            ...mapState(["tickets", "userInfo"]),
            allPrice(){
                let totalPrice = 0;
                this.tickets.forEach( ticket => {
                    if (ticket.checked) {
                        totalPrice += ticket.num * parseInt(ticket.ticketPrice) * 100;
                    }
                } );

                return totalPrice;
            },
            isSellected: {
                get(){
                    let ticketCount = this.tickets.length;
                    let flag = ticketCount > 0;
                    this.tickets.some( ticket => {
                        if (!ticket.checked) {
                            flag = false;
                        }
                    } );
                    return flag;
                },
                set(){
                }
            },
            // contact(){
            //     return this.getContact();
            // }
        },
        methods: {
            ...mapMutations(["ADD_TICKET","INIT_ORDER", "REDUCE_TICKET", "SELECTED_SINGER_TICKETS", "SELECTED_All_TICKETS", "CLEAR_ORDER"]),
            goBack(){
                this.$router.go(-1);
            },
            openActionSheet(){
                this.show = !this.show;
            },
            onInput(key) {
                this.value = (this.value + key).slice(0, 6);
            },
            onDelete() {
                this.value = this.value.slice(0, this.value.length - 1);
            },
            initOrder(){
                this.INIT_ORDER();
                this.address = this.$route.params.address
            },
            addTicket(ticketName, ticketPrice){
                this.ADD_TICKET({
                    ticketName,
                    ticketPrice
                })
            },
            reduceTicket(num, ticketName){
                if (num > 3) {
                    this.REDUCE_TICKET({ ticketName });
                } else {
                    Dialog.confirm({
                        title: '温馨提示',
                        message: '确定取消预定门票吗?'
                    }).then(() => {
                        this.REDUCE_TICKET({ ticketName });
                    });
                }

            },
            clearOrder(){
                Dialog.confirm({
                    title: '温馨提示',
                    message: '确定清空所有预定门票吗?'
                }).then(() => {
                    this.CLEAR_ORDER();
                });
            },
            sellectSingle(ticketName){
                this.SELECTED_SINGER_TICKETS({
                    ticketName
                });
            },
            sellectAll(isSellected){
                this.SELECTED_All_TICKETS({ isSellected });
            },
            getContact(contact){
                Object.assign(this.contact, contact);
            },
            toMyOrder(){
                let that = this;
                that.$router.push({
                    name: 'myorder',
                    params: { userId: that.userInfo.uid }
                });
            },
            onSubmit(){
                let that = this;
                let orderDetList = [];
                let tickets = this.tickets;
                for (let i in tickets) {
                    orderDetList[i] = {
                        tname: tickets[i].ticketName,
                        tnumber: tickets[i].num
                    }
                }
                if (that.contact.name === '' || that.contact.tel === '') {
                    Toast({
                        message: '联系人信息不能为空！'
                    });
                    return;
                }
                let coname = that.contact.name;
                let cphone = that.contact.tel;
                let oprice = parseFloat(that.allPrice/100);
                let sname = that.address;
                addOrder(oprice, coname, cphone, that.userInfo.uid, sname, orderDetList).then(res => {
                    console.log('下单结果',res);
                    if (res.status === 200) {
                        if (res.data.code === 1) {
                            Toast({
                                message: res.data.msg
                            });
                            return
                        } else {
                            Toast({
                                message: '支付成功！'
                            });
                            that.CLEAR_ORDER();
                            setTimeout(this.toMyOrder(), 1000);
                        }
                    }
                });
            }
        },
        components: {
            AddContact
        }
    }
</script>

<style lang="scss" scoped>
    #order{
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
            .clear{
                font-size: 0.7rem;
            }
        }
        .body{
            padding: 0.588rem 1.176rem;
            font-size: 0.85rem;
            .title{
                margin: 1rem 0 2rem;
            }
            .ticket{
                display: flex;
                justify-content: start;
                margin: 1rem 0;
                .ticket-body{
                    width: 17.647rem;
                    display: flex;
                    flex-direction: column;
                    /*justify-content: space-between;*/

                    .ticket-name{
                        display: flex;
                        align-items: center;

                        /*justify-content: space-between;*/
                    }
                    .ticket-num{
                        margin-top: 0.5rem;
                        display: flex;
                        /*justify-content: space-between;*/
                        .van-stepper {
                            margin-left: 0.9rem;
                        }
                    }
                }
            }
        }
        .content {
            height: 15.294rem;
            padding: 16px;
        }
    }
</style>
