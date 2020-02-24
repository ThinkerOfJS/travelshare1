<template>
    <div id="travels">
        <!-- 搜索框 -->
        <Search />
        <!-- Tab标签栏区域 -->
        <div class="tabWrapper">
            <van-tabs v-model="active" color="#87CEEB" animated>
                <van-tab v-for="(item, index) in categories" :title="item.title" :key="index">
                    <AllTravels v-if="!index"  :storyList="storyList"/>
                    <Travel v-else :title="item.title" :storyList="storyList" />
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
    import Search from './../../components/Search'
    import AllTravels from './components/alltravels/AllTravels'
    import Travel from './components/travel/Travel'

    export default {
        name: "Travels",
        data(){
            return {
                active: 0,
                categories: [
                    { title: '所有游记' },
                    { title: '民宿' },
                    { title: '美食' },
                    { title: '景点' },
                    { title: '艺术' },
                    { title: '灵感' },
                ],
                storyList: [
                    {
                        storyId: 1,
                        img_url: require('../../images/lbg.jpg'),
                        storyPlace: '北京',
                        storyCategory: '美食',
                        storyTime: '2019-9-3',
                        storyContent: '站在北京的街头，仿佛闻到的老老冰棍的味道。香香甜甜，夏天里能吃上一支老冰棍，人都会凉爽一大截'
                    },
                        {
                            storyId: 2,
                            img_url: require('../../images/ls.jpg'),
                            storyPlace: '宁波',
                            storyCategory: '民宿',
                            storyTime: '2020-1-3',
                            storyContent: '宁波的一些旅馆都还是很不错的，物美价廉，特别是清风旅社，里面的装潢精美，一些人工服务也比较到位，爱了爱了。'
                        },
                        {
                            storyId: 3,
                            img_url: require("../../images/sb.jpg"),
                            storyPlace: '上海',
                            storyCategory: '美食',
                            storyTime: '2019-9-3',
                            storyContent: '上海的鲜肉月饼，既然来到上海旅游，肯定要尝试下当地的鲜肉月饼，这种月饼里面放了很多新鲜的猪肉，制作出来的月饼味道特别棒，' +
                                '外皮酥嫩，还有浓郁的香味，吃过一次之后就会知道是名不虚传。'
                        },
                        {
                            storyId: 4,
                            img_url: require("../../images/szms.png"),
                            storyPlace: '苏州',
                            storyCategory: '美食',
                            storyTime: '2019-9-3',
                            storyContent: '这家才是真正的苏州阳澄湖大闸蟹，感觉之前在巴城那边吃的假的阳澄湖大闸蟹\n' +
                                '\n' +
                                '这家的大闸蟹质量很高，而且价格实惠，性价比超级高的，特别赞的，特别支持！并且大闸蟹质量很好，这才是最真的大闸蟹，真心的推荐好吃不贵，太好了！！'
                        }
                    ]
            }
        },
        methods: {
            toWriteTravel(){
                this.$router.push({
                    name: 'writetravel',
                })
            }
        },
        components: {
            Search,
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
    }

</style>
