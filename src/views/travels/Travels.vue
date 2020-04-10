<template>
    <div id="travels">
        <!-- 搜索框 -->
        <van-search
                v-model="value"
                placeholder="请输入游记标题"
                show-action
                shape="round"
                @focus="toSearch"
        >
            <div slot="action" @click="onSearch">搜索</div>
        </van-search>
        <!-- Tab标签栏区域 -->
        <div class="tabWrapper">
            <van-tabs v-model="active" @change="onChange" color="#87CEEB" animated>
                <van-tab v-for="(item, index) in categories" :title="item.title" :key="index">
                    <AllTravels v-if="!index"  :storyList="storyList"/>
                    <Travel v-else :title="item.title" :storyList="storyList" />

                    <van-button v-if="index" class="btn1" type="info" color="#87CEEB" @click="loadMore" round>加载更多</van-button>
                </van-tab>
            </van-tabs>
        </div>
        <van-button
            class="btn"
            plain
            hairline
            type="primary"
            round
            color="#484848"
            size="normal"
            style="margin-bottom: 2.5rem"
            @click="toWriteTravel"
        >
            <van-icon name="plus"/>写游记
        </van-button>
    </div>
</template>

<script>
    import AllTravels from './components/alltravels/AllTravels'
    import Travel from './components/travel/Travel'
    import {getTypeTravels} from './../../service/index'
    import {Toast} from 'vant'

    export default {
        name: "Travels",
        data(){
            return {
                active: 0,
                value: '',
                categories: [
                    { title: '推荐', value: 0 },
                    { title: '民宿', value: 1 },
                    { title: '美食', value: 2 },
                    { title: '景点', value: 3 },
                    { title: '艺术', value: 4 },
                    { title: '灵感', value: 5 },
                ],
                storyList: [ ]
            }
        },
        mounted(){
            // this.getHotTravelsList();
            this.getTravels(false)
        },
        methods: {
            toWriteTravel(){
                this.$router.push({
                    name: 'writetravel',
                })
            },
            getInitData(){

            },

            // 根据游记分类获取筛选后的游记
            getTravels(flag) {
                let _this = this;
                let length;
                if (flag) {
                    length = this.storyList.length
                } else {
                    length = 0;
                }
                getTypeTravels(this.active, length, 4).then(res => {
                    // console.log('分类游记',res);
                    if (res.status === 200) {
                        if (res.data === null) {
                            res.data = []
                        }
                        let list = res.data;
                        for (let item of list) {
                            item.date = item.date.slice(0,10);
                            item.pics = item.pics.split(',');
                        }

                        if (flag) {
                            // console.log(flag);
                            _this.storyList = _this.storyList.concat(list)
                        } else {
                            _this.storyList = list
                        }
                        // console.log('分类游记',_this.storyList);

                    } else {
                        Toast({
                            message: '网络错误！'
                        })
                    }
                });
            },

            onChange() {
                this.getTravels(false);
            },
            onSearch(){

            },
            toSearch() {
                this.$router.push({
                    name: 'search'
                })
            },
            loadMore() {
                this.getTravels(true)
            }
        },
        components: {
            AllTravels,
            Travel
        }
    }
</script>

<style lang="scss" scoped>
    #travels{
        width: 100%;
        height: 100%;
        background-color: #f5f5f5;
        /*position: relative;*/

        .tabWrapper{
            margin: 0.75rem 0 0;

        }
        .btn{
            top: 85.5%;
            margin-left: 50%;
            left: -43px;
            position: fixed;
            box-shadow: 0 0 9px #999;
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
