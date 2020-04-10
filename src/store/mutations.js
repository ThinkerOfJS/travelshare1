import {
    ADD_TICKET,
    INIT_ORDER,
    REDUCE_TICKET,
    SELECTED_SINGER_TICKETS,
    SELECTED_All_TICKETS,
    CLEAR_ORDER,
    SAVE_USER,
    GET_USER,
    CLEAR_USER
} from './mutations-type';

import { getStore, setStore, removeStore } from './../config/global'

export default {
    // 1.向订单页面添加门票
    [ADD_TICKET](state, { ticketName, ticketPrice }){
        let tickets = state.tickets;
        if (tickets.length === 0) {
            tickets.push({
                num: 1,
                ticketName: ticketName,
                ticketPrice: ticketPrice,
                checked: true
            });
        } else {
            // 判断是否存在该元素
            let flag = true;
            tickets.some( ticket => {
                if (ticketName === ticket.ticketName) {
                    ticket.num++;
                    flag = false;
                }
            });
            // 不存在该元素则添加该元素
            if (flag) {
                tickets.push({
                    num: 1,
                    ticketName: ticketName,
                    ticketPrice: ticketPrice,
                    checked: true
                });
            }
        }
        state.tickets = tickets;
        setStore('tickets', state.tickets)
    },
    // 2.初始化订单页面
    [INIT_ORDER](state){
        let init = getStore('tickets') || '[]';
        if (init) {
            state.tickets = JSON.parse(init);
        }
    },
    // 3.从订单页面移除门票
    [REDUCE_TICKET](state, { ticketName }){
        let tickets = state.tickets;
        if (tickets.length > 0) {
            // 找到门票的索引值
            let index = tickets.findIndex( ticket => {
                if (ticketName === ticket.ticketName) {
                    return true;
                }
            });
            if (tickets[index].num > 0) {
                tickets[index].num--;
            } else {
                tickets.splice(index, 1);
            }
        }

        state.tickets = tickets;
        setStore('tickets', state.tickets);
    },
    // 4.单一门票的选中与取消选中
    [SELECTED_SINGER_TICKETS](state, { ticketName }){
        let tickets = state.tickets;
        tickets.some( ticket => {
            if (ticketName === ticket.ticketName) {
                !ticket.checked;
            }
        });

        state.tickets = tickets;
        setStore('tickets', state.tickets);
    },
    // 5.所有门票的选中与取消选中
    [SELECTED_All_TICKETS](state, { isSellected }){
        let tickets = state.tickets;
        tickets.forEach( ticket => {
            ticket.checked = !isSellected;
        } );

        state.tickets = tickets;
        setStore('tickets', state.tickets);
    },
    // 6.清除订单页面
    [CLEAR_ORDER](state){
        state.tickets = [];
        setStore('tickets', state.tickets);
    },

    // 保存用户信息
    [SAVE_USER](state, users) {

        state.userInfo = users;

        setStore('userInfo', state.userInfo);
    },

    // 获取用户信息
    [GET_USER](state) {
        let user = getStore('userInfo');
        if (user) {
            state.userInfo = JSON.parse(user);
        }
    },

    [CLEAR_USER](state) {
        state.userInfo = {};
        setStore('userInfo', state.userInfo);
    }
}
