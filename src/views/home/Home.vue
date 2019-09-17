<template>
    <div id="home">
        <!-- 搜索框区域 -->
        <Search />
        <!-- 轮播图区域 -->
        <Swipe />
        <!-- 精选区域 -->
        <Concentration />

        <!-- 公告区域 -->
        <Announcement />

    </div>
</template>

<script>
    import Search from './../../components/Search'
    import Swipe from './components/swipe/Swipe'
    import Concentration from './components/concentration/Concentration'
    import Announcement from './components/announcement/Announcement'

    export default {
        name: "Home",
        data(){
            return {

            }
        },
        components: {
            Search,
            Swipe,
            Concentration,
            Announcement
        }
    }
</script>

<style scoped>
    #home{
        width: 100%;
        height: 100%;
        background-color: #f5f5f5;
    }
</style>