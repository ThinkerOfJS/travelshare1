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
                        img_url: 'https://tse4-mm.cn.bing.net/th?id=OIP.0QuhtF0h9HRhZcYwYqoXfwHaEK&w=263&h=160&c=7&o=5&pid=1.7',
                        storyPlace: '北京',
                        storyCategory: '美食',
                        storyTime: '2019-9-3',
                        storyContent: '站在北京的街头'
                    },
                    {
                        storyId: 2,
                        img_url: 'https://tse4-mm.cn.bing.net/th?id=OIP.0QuhtF0h9HRhZcYwYqoXfwHaEK&w=263&h=160&c=7&o=5&pid=1.7',
                        storyPlace: '北京',
                        storyCategory: '美食',
                        storyTime: '2019-9-3',
                        storyContent: '站在北京的街头'
                    },
                    {
                        storyId: 3,
                        img_url: 'https://tse4-mm.cn.bing.net/th?id=OIP.0QuhtF0h9HRhZcYwYqoXfwHaEK&w=263&h=160&c=7&o=5&pid=1.7',
                        storyPlace: '北京',
                        storyCategory: '美食',
                        storyTime: '2019-9-3',
                        storyContent: '站在北京的街头'
                    },
                    {
                        storyId: 4,
                        img_url: 'https://tse4-mm.cn.bing.net/th?id=OIP.0QuhtF0h9HRhZcYwYqoXfwHaEK&w=263&h=160&c=7&o=5&pid=1.7',
                        storyPlace: '北京',
                        storyCategory: '美食',
                        storyTime: '2019-9-3',
                        storyContent: '站在北京的街头'
                    },
                    {
                        storyId: 5,
                        img_url: 'https://tse4-mm.cn.bing.net/th?id=OIP.0QuhtF0h9HRhZcYwYqoXfwHaEK&w=263&h=160&c=7&o=5&pid=1.7',
                        storyPlace: '北京',
                        storyCategory: '美食',
                        storyTime: '2019-9-3',
                        storyContent: '站在北京的街头'
                    },
                    {
                        storyId: 6,
                        img_url: 'https://tse4-mm.cn.bing.net/th?id=OIP.0QuhtF0h9HRhZcYwYqoXfwHaEK&w=263&h=160&c=7&o=5&pid=1.7',
                        storyPlace: '北京',
                        storyCategory: '美食',
                        storyTime: '2019-9-3',
                        storyContent: '站在北京的街头'
                    },
                    {
                        storyId: 7,
                        img_url: 'https://tse4-mm.cn.bing.net/th?id=OIP.0QuhtF0h9HRhZcYwYqoXfwHaEK&w=263&h=160&c=7&o=5&pid=1.7',
                        storyPlace: '北京',
                        storyCategory: '美食',
                        storyTime: '2019-9-3',
                        storyContent: '站在北京的街头'
                    },
                    {
                        storyId: 8,
                        img_url: 'https://tse4-mm.cn.bing.net/th?id=OIP.0QuhtF0h9HRhZcYwYqoXfwHaEK&w=263&h=160&c=7&o=5&pid=1.7',
                        storyPlace: '北京',
                        storyCategory: '美食',
                        storyTime: '2019-9-3',
                        storyContent: '站在北京的街头'
                    },
                    {
                        storyId: 9,
                        img_url: 'https://tse4-mm.cn.bing.net/th?id=OIP.0QuhtF0h9HRhZcYwYqoXfwHaEK&w=263&h=160&c=7&o=5&pid=1.7',
                        storyPlace: '北京',
                        storyCategory: '美食',
                        storyTime: '2019-9-3',
                        storyContent: '站在北京的街头'
                    },

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
