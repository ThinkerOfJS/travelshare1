<template>
    <div id="collection">
        <div class="top">
            <van-icon name="arrow-left" size="1.25rem" @click="goBack" color="#f5f5f5"/>
            <p class="title">收藏</p>
            <van-icon name="ellipsis" size="1.25rem" color="#f5f5f5"/>
        </div>
        <div class="body">
            <span class="title">您可以随时查看您心仪的旅行故事</span>
            <TravelList :storyList="storyList"/>
        </div>
    </div>
</template>

<script>
    import TravelList from './../../../travels/components/travel/TravelList'

    export default {
        name: "Collection",
        data(){
            return {
                storyList: [
                    {
                        storyId: 1,
                        img_url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567250239460&di=a68d1445f6d7d81f6ae05a813c243feb&imgtype=0&src=http%3A%2F%2Fimg1.ph.126.net%2FcKSYoOU_Ic5VSP5FAiUfeA%3D%3D%2F6631444898187314326.gif',
                        storyPlace: '北京',
                        storyCategory: '美食',
                        storyTime: '2019-9-3',
                        storyContent: '站在北京的街头站在北京的街头站在北京的街头'
                    },
                    {
                        storyId: 2,
                        img_url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567250239460&di=a68d1445f6d7d81f6ae05a813c243feb&imgtype=0&src=http%3A%2F%2Fimg1.ph.126.net%2FcKSYoOU_Ic5VSP5FAiUfeA%3D%3D%2F6631444898187314326.gif',
                        storyPlace: '北京',
                        storyCategory: '美食',
                        storyTime: '2019-9-3',
                        storyContent: '站在北京的街头'
                    },
                    {
                        storyId: 3,
                        img_url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567250239460&di=a68d1445f6d7d81f6ae05a813c243feb&imgtype=0&src=http%3A%2F%2Fimg1.ph.126.net%2FcKSYoOU_Ic5VSP5FAiUfeA%3D%3D%2F6631444898187314326.gif',
                        storyPlace: '北京',
                        storyCategory: '美食',
                        storyTime: '2019-9-3',
                        storyContent: '站在北京的街头'
                    },
                    {
                        storyId: 4,
                        img_url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567250239460&di=a68d1445f6d7d81f6ae05a813c243feb&imgtype=0&src=http%3A%2F%2Fimg1.ph.126.net%2FcKSYoOU_Ic5VSP5FAiUfeA%3D%3D%2F6631444898187314326.gif',
                        storyPlace: '北京',
                        storyCategory: '美食',
                        storyTime: '2019-9-3',
                        storyContent: '站在北京的街头'
                    },
                    {
                        storyId: 5,
                        img_url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567250239460&di=a68d1445f6d7d81f6ae05a813c243feb&imgtype=0&src=http%3A%2F%2Fimg1.ph.126.net%2FcKSYoOU_Ic5VSP5FAiUfeA%3D%3D%2F6631444898187314326.gif',
                        storyPlace: '北京',
                        storyCategory: '美食',
                        storyTime: '2019-9-3',
                        storyContent: '站在北京的街头'
                    },
                    {
                        storyId: 6,
                        img_url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567250239460&di=a68d1445f6d7d81f6ae05a813c243feb&imgtype=0&src=http%3A%2F%2Fimg1.ph.126.net%2FcKSYoOU_Ic5VSP5FAiUfeA%3D%3D%2F6631444898187314326.gif',
                        storyPlace: '北京',
                        storyCategory: '美食',
                        storyTime: '2019-9-3',
                        storyContent: '站在北京的街头'
                    },
                    {
                        storyId: 7,
                        img_url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567250239460&di=a68d1445f6d7d81f6ae05a813c243feb&imgtype=0&src=http%3A%2F%2Fimg1.ph.126.net%2FcKSYoOU_Ic5VSP5FAiUfeA%3D%3D%2F6631444898187314326.gif',
                        storyPlace: '北京',
                        storyCategory: '美食',
                        storyTime: '2019-9-3',
                        storyContent: '站在北京的街头'
                    },
                    {
                        storyId: 8,
                        img_url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567250239460&di=a68d1445f6d7d81f6ae05a813c243feb&imgtype=0&src=http%3A%2F%2Fimg1.ph.126.net%2FcKSYoOU_Ic5VSP5FAiUfeA%3D%3D%2F6631444898187314326.gif',
                        storyPlace: '北京',
                        storyCategory: '美食',
                        storyTime: '2019-9-3',
                        storyContent: '站在北京的街头'
                    },
                    {
                        storyId: 9,
                        img_url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567250239460&di=a68d1445f6d7d81f6ae05a813c243feb&imgtype=0&src=http%3A%2F%2Fimg1.ph.126.net%2FcKSYoOU_Ic5VSP5FAiUfeA%3D%3D%2F6631444898187314326.gif',
                        storyPlace: '北京',
                        storyCategory: '美食',
                        storyTime: '2019-9-3',
                        storyContent: '站在北京的街头'
                    },

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
</style>