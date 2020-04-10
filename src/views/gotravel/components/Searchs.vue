<template>
    <div id="search">
        <div class="top">
            <van-icon class="back" name="arrow-left" size="1.25rem" @click="goBack" color="#f5f5f5"/>
            <van-search
                    class="search"
                    v-model="value"
                    placeholder="请输入景区名称关键词"
                    show-action
                    shape="round"
                    background="transparent"
                    @search="onSearch"
            >
                <div slot="action" @click="onSearch"><p>搜索</p></div>
            </van-search>
        </div>
        <div class="body">
            <span class="title">最佳的游玩地点，在这里</span>
            <ScenicspotList :scenicspotList="scenicspotList" />

        </div>
    </div>
</template>

<script>
    import ScenicspotList from './common/ScenicspotList'
    import {searchScenicspot} from './../../../service/index';
    import {Toast} from 'vant'

    export default {
        name: "Search",
        data() {
            return {
                value: '',
                scenicspotList: []
            }
        },
        methods: {
            goBack() {
                this.$router.go(-1);
            },
            onSearch() {
                this.loadScenicspot(this.value);
            },
            loadScenicspot(title) {
                searchScenicspot(title).then(res => {
                    console.log('查找', res);
                    if (res.status === 200) {
                        if (res.data.length === 0) {
                            res.data = [];
                            Toast({
                                message: '暂无景区'
                            })
                        }
                        let list = res.data;
                        for(let item of list) {
                            let images = item.imgurl.split(',');
                            for(let i in images) {
                                if (images[i] === '') {
                                    images.splice(i, 1);
                                } else {
                                    images[i] = this.host + images[i]
                                }
                            }
                            item.pics = images[0];
                            item.images = images;
                        }
                        this.scenicspotList = list;

                    } else {
                        Toast.fail('网络错误！')
                    }
                });
            }
        },
        components: {
            ScenicspotList
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
