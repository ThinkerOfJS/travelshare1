<template>
    <div id="gotravel">
        <!-- 标题区域 -->
        <div class="top">
            <p class="title">去旅行</p>
            <van-search
                    class="search"
                    v-model="value"
                    placeholder="请输入景区名称"
                    show-action
                    :label="place"
                    shape="round"
                    background="transparent"
                    @search="onSearch"
            >
                <div slot="action" @click="onSearch"><p>搜索</p></div>
            </van-search>
        </div>

        <!-- 景点门票、一日游区域 -->
        <div class="body">
            <div class="position" @click="goScenicspot(place)">
                <van-image
                        class="box-shadow"
                        round
                        width="5rem"
                        height="5rem"
                        src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567572515994&di=e47b163fd5e3fd599338ca712673f0f7&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F45858c1f11e0b3c30bd0113c6f7ab88f5847034e51d57-Hprwwb_fw658"
                />
                <span class="text">景区门票</span>
            </div>
            <div class="position" @click="goDayplay(place)">
                <van-image
                        class="box-shadow"
                        round
                        width="5rem"
                        height="5rem"
                        src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567572515993&di=3e461f121af0320f240e7bf492afb022&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2017-12-11%2F5a2e68d678ddd.jpg"
                />
                <span class="text">一日游</span>
            </div>
        </div>

        <!-- 热门推荐区域 -->
        <div class="hot-recommend">
            <p class="title">热门推荐</p>
            <ScenicspotList :scenicspotList="scenicspotList" :showTime="showTime" />
            <van-button class="btn" type="info" color="#87CEEB" round>加载更多</van-button>
        </div>
    </div>
</template>

<script>
    import ScenicspotList from './components/common/ScenicspotList'

    export default {
        name: "GoTravel",
        data(){
            return {
                value: '',
                place: '上海',
                scenicspotList: [
                    {
                        id: '1',
                        scenicspot_img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567583112339&di=85d6913157e38cfdf6b13a3d6d261440&imgtype=0&src=http%3A%2F%2Fimg3.tuniucdn.com%2Fimages%2F2011-09-28%2FG%2FG75pd110Z86qqT20.jpg',
                        scenicspot_name: '北京天安门北京天安门北京天安门北京天安门北京天安门北京天安门北京天安门',
                        scenicspot_introduce: '  北京天安门 ',
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
                    },
                    {
                        id: '5',
                        scenicspot_img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567583112339&di=85d6913157e38cfdf6b13a3d6d261440&imgtype=0&src=http%3A%2F%2Fimg3.tuniucdn.com%2Fimages%2F2011-09-28%2FG%2FG75pd110Z86qqT20.jpg',
                        scenicspot_name: '北京天安门',
                        scenicspot_introduce: '   坐落在中华人民共和国首都北京市的中心、故宫的南端，与天安门广场以及人民英雄纪念碑、毛主席纪念堂、人民大会堂、中国国家博物馆隔长安街相望，占地面积4800平方米',
                    },{
                        id: '6',
                        scenicspot_img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567583112339&di=85d6913157e38cfdf6b13a3d6d261440&imgtype=0&src=http%3A%2F%2Fimg3.tuniucdn.com%2Fimages%2F2011-09-28%2FG%2FG75pd110Z86qqT20.jpg',
                        scenicspot_name: '北京天安门',
                        scenicspot_introduce: '   坐落在中华人民共和国首都北京市的中心、故宫的南端，与天安门广场以及人民英雄纪念碑、毛主席纪念堂、人民大会堂、中国国家博物馆隔长安街相望，占地面积4800平方米',
                    },
                    {
                        id: '7',
                        scenicspot_img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567583112339&di=85d6913157e38cfdf6b13a3d6d261440&imgtype=0&src=http%3A%2F%2Fimg3.tuniucdn.com%2Fimages%2F2011-09-28%2FG%2FG75pd110Z86qqT20.jpg',
                        scenicspot_name: '北京天安门',
                        scenicspot_introduce: '   坐落在中华人民共和国首都北京市的中心、故宫的南端，与天安门广场以及人民英雄纪念碑、毛主席纪念堂、人民大会堂、中国国家博物馆隔长安街相望，占地面积4800平方米',
                    },
                    {
                        id: '8',
                        scenicspot_img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567583112339&di=85d6913157e38cfdf6b13a3d6d261440&imgtype=0&src=http%3A%2F%2Fimg3.tuniucdn.com%2Fimages%2F2011-09-28%2FG%2FG75pd110Z86qqT20.jpg',
                        scenicspot_name: '北京天安门',
                        scenicspot_introduce: '   坐落在中华人民共和国首都北京市的中心、故宫的南端，与天安门广场以及人民英雄纪念碑、毛主席纪念堂、人民大会堂、中国国家博物馆隔长安街相望，占地面积4800平方米',
                    },
                    {
                        id: '9',
                        scenicspot_img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567583112339&di=85d6913157e38cfdf6b13a3d6d261440&imgtype=0&src=http%3A%2F%2Fimg3.tuniucdn.com%2Fimages%2F2011-09-28%2FG%2FG75pd110Z86qqT20.jpg',
                        scenicspot_name: '北京天安门',
                        scenicspot_introduce: '   坐落在中华人民共和国首都北京市的中心、故宫的南端，与天安门广场以及人民英雄纪念碑、毛主席纪念堂、人民大会堂、中国国家博物馆隔长安街相望，占地面积4800平方米',
                    },
                    {
                        id: '10',
                        scenicspot_img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567583112339&di=85d6913157e38cfdf6b13a3d6d261440&imgtype=0&src=http%3A%2F%2Fimg3.tuniucdn.com%2Fimages%2F2011-09-28%2FG%2FG75pd110Z86qqT20.jpg',
                        scenicspot_name: '北京天安门',
                        scenicspot_introduce: '   坐落在中华人民共和国首都北京市的中心、故宫的南端，与天安门广场以及人民英雄纪念碑、毛主席纪念堂、人民大会堂、中国国家博物馆隔长安街相望，占地面积4800平方米',
                    },
                ],
                showTime: false
            }
        },
        methods: {
            onSearch(){
                alert(this.value);
                this.value = '';
            },
            goScenicspot(place){
                this.$router.push({
                    name: 'scenicspot',
                });
            },
            goDayplay(){
                this.$router.push({
                    name: 'dayplay',
                });
            }
        },
        components: {
            ScenicspotList
        }
    }
</script>

<style lang="scss" scoped>
    #gotravel{
        background-color: #ffffff;
        .top{
            display: flex;
            width: 100%;
            padding: 0.5rem;
            background-color: #8fd6f3;
            .title{
                width: 5rem;
                display: inline-block;
                color: #f5f5f5;
                text-align: center;
                font-size: 1.25rem;
                line-height: 2.5rem;
                font-weight: bold;
            }
            .search{
                padding: 0;
                p{
                    font-size: 0.9rem;
                    color: #f5f5f5;
                }
            }
        }
        .body{
            margin: 0.75rem 0;
            background: #ffffff;
            padding: 0.6rem 3rem;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            box-shadow: 0 4px 9px #bababa;
            .position{
                width: 5rem;
                text-align: center;
                .img{
                    width: 100%;
                }
                .text{
                    font-size: 0.8rem;
                }
            }
        }
        .hot-recommend{
            padding: 0.5rem;
            background: #ffffff;
            margin-bottom: 3.0rem;
            box-shadow: 0 0 9px #bababa;
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
