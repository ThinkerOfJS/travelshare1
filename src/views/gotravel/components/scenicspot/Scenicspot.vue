<template>
    <!--景区组件-->
    <div id="scenicspot">
        <div class="top">
            <van-icon name="arrow-left" size="1.25rem" @click="goBack" color="#f5f5f5"/>
            <p class="title">景区</p>
        </div>
        <!-- 景区图片区域 -->
        <div class="img">
            <img :src="images[0]" alt="" @click="onImageChange">
            <!-- 图片浏览区域 -->
            <van-image-preview
                    v-model="show"
                    :images="images"
                    @change="onChange"
            >
                <template>{{ index }}</template>
            </van-image-preview>
        </div>

        <hr>
        <div class="body">

            <p class="title">景区推荐</p>
            <ScenicspotList :scenicspotList="scenicspotList" />
            <van-button class="btn" type="info" color="#87CEEB" round>加载更多</van-button>
        </div>
    </div>
</template>

<script>
    import ScenicspotList from './../common/ScenicspotList'


    export default {
        name: "Scenicspot",
        data(){
            return {
                show: false,
                index: 1,
                images: [
                    require('../../../../images/bj_home.jpeg'),
                    require('../../../../images/bj_home2.jpeg'),
                    require('../../../../images/bj_home3.jpeg'),
                ],
                scenicspotList: [
                    {
                        id: '1',
                        scenicspot_img: require('../../../../images/bj_home.jpeg'),
                        scenicspot_name: '北京天安门',
                        scenicspot_introduce: '  坐落在中华人民共和国首都北京市的中心、故宫的南端，与天安门广场以及人民英雄纪念碑、毛主席纪念堂、人民大会堂、中国国家博物馆隔长安街相望，占地面积4800平方米 ',
                    },
                    {
                        id: '2',
                        scenicspot_img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567583112339&di=85d6913157e38cfdf6b13a3d6d261440&imgtype=0&src=http%3A%2F%2Fimg3.tuniucdn.com%2Fimages%2F2011-09-28%2FG%2FG75pd110Z86qqT20.jpg',
                        scenicspot_name: '北京天安门',
                        scenicspot_introduce: '   坐落在中华人民共和国首都北京市的中心、故宫的南端，与天安门广场以及人民英雄纪念碑、毛主席纪念堂、人民大会堂、中国国家博物馆隔长安街相望，占地面积4800平方米',
                    },
                    {
                        id: '3',
                        scenicspot_img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567583112339&di=85d6913157e38cfdf6b13a3d6d261440&imgtype=0&src=http%3A%2F%2Fimg3.tuniucdn.com%2Fimages%2F2011-09-28%2FG%2FG75pd110Z86qqT20.jpg',
                        scenicspot_name: '北京天安门',
                        scenicspot_introduce: '   坐落在中华人民共和国首都北京市的中心、故宫的南端，与天安门广场以及人民英雄纪念碑、毛主席纪念堂、人民大会堂、中国国家博物馆隔长安街相望，占地面积4800平方米',
                    },
                    {
                        id: '4',
                        scenicspot_img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567583112339&di=85d6913157e38cfdf6b13a3d6d261440&imgtype=0&src=http%3A%2F%2Fimg3.tuniucdn.com%2Fimages%2F2011-09-28%2FG%2FG75pd110Z86qqT20.jpg',
                        scenicspot_name: '北京天安门',
                        scenicspot_introduce: '   坐落在中华人民共和国首都北京市的中心、故宫的南端，与天安门广场以及人民英雄纪念碑、毛主席纪念堂、人民大会堂、中国国家博物馆隔长安街相望，占地面积4800平方米',
                    }
                ]
            }
        },
        methods: {
            goBack(){
                this.$router.go(-1);
            },
            onImageChange(){
                this.show = !this.show;
            },
            onChange(index) {
                this.index = index;
            },
        },
        components: {
            ScenicspotList
        }
    }
</script>

<style lang="scss" scoped>
    #scenicspot{
        background: #ffffff;
        .top{
            display: flex;
            width: 100%;
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
        .img{
            padding: 0.4rem;
            margin: 0.4rem 0;
            img{
                width: 100%;
                box-shadow: 0 0 9px #999;
                height: 11.765rem;
            }
        }
        .body{
            margin-bottom: 3.5rem;
            padding: 0.3rem;
            .title{
                color: #484848;
                font-size: 1.25rem;
                font-weight: bold;
            }
            .btn{
                width: 15rem;
                left: 50%;
                margin-left: -7.5rem;
                box-shadow: 0 0 9px #999;
            }
        }
    }
</style>
