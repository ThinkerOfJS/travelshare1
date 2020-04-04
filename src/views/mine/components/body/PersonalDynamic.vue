<template>
    <div id="personaldynamic">
        <div class="top">
            <van-icon name="arrow-left" size="1.25rem" @click="goBack" color="#f5f5f5"/>
            <p class="title">个人动态</p>
            <van-icon name="ellipsis" size="1.25rem" color="#f5f5f5"/>
        </div>
        <div class="body">
            <span class="title">分享生活中的一点一滴</span>
            <TravelList :storyList="storyList"/>
        </div>
        <van-button class="btn1" type="info" color="#87CEEB" @click="loadMore" round>加载更多</van-button>
    </div>
</template>

<script>
    import TravelList from './../../../travels/components/travel/TravelList';
    import {getUserTravels} from './../../../../service/index';
    import {Toast} from 'vant'

    export default {
        name: "PersonalDynamic",
        data(){
            return {
                uid: 0,
                storyList: []
            }
        },
        mounted(){
            this.uid = this.$route.params.userId;
            this.getTravelsList(false);
        },
        methods: {
            goBack(){
                this.$router.go(-1);
            },
            getTravelsList(flag) {
                let start = 0;
                if (flag) {
                    start = this.storyList.length;
                }
                getUserTravels(this.uid, start, 4).then(res => {
                    if (res.status === 200) {
                        if (res.data === null) {
                            res.data = []
                        }
                        let list = res.data;
                        for(let item of list) {
                            item.date = item.date.slice(0,10);
                            item.pics = item.pics.split(',');
                        }
                        if (flag) {
                            this.storyList = this.storyList.concat(list)
                        } else {
                            this.storyList = list
                        }
                    } else {
                        Toast.fail('网络错误！')
                    }
                })
            },
            loadMore() {
                this.getTravelsList(true);
            }
        },
        components: {
            TravelList
        }
    }
</script>

<style lang="scss" scoped>
    #personaldynamic{
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
        .body{
            padding: 0.5rem;
            background: #ffffff;
            .title{
                display: block;
                margin: 0.5rem 0;
                font-size: 0.9rem;
                color: #999;
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
