<template>
    <div id="personaldynamic">
        <div class="top">
            <van-icon name="arrow-left" size="1.25rem" @click="goBack" color="#f5f5f5"/>
            <p class="title">个人动态</p>
            <van-icon name="ellipsis" size="1.25rem" color="#f5f5f5"/>
        </div>
        <div class="body">
            <span class="title">您可以随时查看您发表过的旅行故事</span>
            <TravelList :storyList="storyList"/>
        </div>
    </div>
</template>

<script>
    import TravelList from './../../../travels/components/travel/TravelList'
    export default {
        name: "PersonalDynamic",
        data(){
            return {
                storyList: [
                    {
                        storyId: 1,
                        img_url: require('../../../../images/lbg.jpg'),
                        storyPlace: '北京',
                        storyCategory: '美食',
                        storyTime: '2019-9-3',
                        storyContent: '站在北京的街头，仿佛闻到的老老冰棍的味道。香香甜甜，夏天里能吃上一支老冰棍，人都会凉爽一大截'
                    },
                    {
                        storyId: 2,
                        img_url: require('../../../../images/ls.jpg'),
                        storyPlace: '宁波',
                        storyCategory: '民宿',
                        storyTime: '2020-1-3',
                        storyContent: '宁波的一些旅馆都还是很不错的，物美价廉，特别是清风旅社，里面的装潢精美，一些人工服务也比较到位，爱了爱了。'
                    },
                    {
                        storyId: 3,
                        img_url: require("../../../../images/sb.jpg"),
                        storyPlace: '上海',
                        storyCategory: '美食',
                        storyTime: '2019-9-3',
                        storyContent: '上海的鲜肉月饼，既然来到上海旅游，肯定要尝试下当地的鲜肉月饼，这种月饼里面放了很多新鲜的猪肉，制作出来的月饼味道特别棒，' +
                            '外皮酥嫩，还有浓郁的香味，吃过一次之后就会知道是名不虚传。'
                    },
                    {
                        storyId: 4,
                        img_url: require("../../../../images/szms.png"),
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
            goBack(){
                this.$router.go(-1);
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
    }
</style>
