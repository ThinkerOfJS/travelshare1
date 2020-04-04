<template>
    <div id="search">
        <div class="top">
            <van-icon class="back" name="arrow-left" size="1.25rem" @click="goBack" color="#f5f5f5"/>
            <van-search
                    class="search"
                    v-model="value"
                    placeholder="请输入游记标题"
                    show-action
                    :label="place"
                    shape="round"
                    background="transparent"
                    @search="onSearch"
            >
                <div slot="action" @click="onSearch"><p>搜索</p></div>
            </van-search>
        </div>
        <div class="body">
            <span class="title">所有的故事，都相遇在这里</span>
            <TravelList :storyList="storyList"/>

        </div>
    </div>
</template>

<script>
    import TravelList from './travel/TravelList'
    import {searchTravels} from './../../../service/index';
    import {Toast} from 'vant'

    export default {
        name: "Search",
        data() {
            return {
                value: '',
                storyList: []
            }
        },
        methods: {
            goBack() {
                this.$router.go(-1);
            },
            onSearch() {
                this.loadTravels(this.value);
            },
            loadTravels(title) {
                searchTravels(title).then(res => {
                    console.log('查找', res);
                    if (res.status === 200) {
                        if (res.data.length === 0) {
                            res.data = [];
                            Toast({
                                message: '暂无游记'
                            })
                        }
                        let list = res.data;
                        for(let item of list) {
                            item.date = item.date.slice(0,10);
                            item.pics = item.pics.split(',');
                        }
                        this.storyList = list;

                    } else {
                        Toast.fail('网络错误！')
                    }
                });
            }
        },
        components: {
            TravelList
        }
    }
</script>

<style lang="scss" scoped>
    #search {
        .top{
            display: flex;
            width: 100%;
            padding: 0.5rem;
            background-color: #8fd6f3;
            align-items: center;

            .back {
                margin-right: 1.176rem;
            }
            .title{
                width: 29.412rem;
                display: inline-block;
                color: #f5f5f5;
                text-align: center;
                font-size: 1.25rem;
                line-height: 2.5rem;
                font-weight: bold;
            }
            .search{
                padding: 0;
                width: 27.412rem;
                p{
                    font-size: 0.9rem;
                    color: #f5f5f5;
                }
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
    }
</style>
