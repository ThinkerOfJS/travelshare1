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
                        :src="scenicspot_logo"
                />
                <span class="text">景区门票</span>
            </div>
            <div class="position" @click="goDayplay(place)">
                <van-image
                        class="box-shadow"
                        round
                        width="5rem"
                        height="5rem"
                        :src="dayplay_logo"
                />
                <span class="text">三日游</span>
            </div>
        </div>

        <!-- 热门推荐区域 -->
        <div class="hot-recommend">
            <p class="title">热门推荐</p>
            <ScenicspotList :scenicspotList="scenicspotList" :showTime="showTime" />
            <van-button class="btn" @click="loadMoreScenicspot" type="info" color="#87CEEB" round>加载更多</van-button>
        </div>
    </div>
</template>

<script>
    import ScenicspotList from './components/common/ScenicspotList'
    import {getHotScenicspot} from './../../service/index'

    export default {
        name: "GoTravel",
        data(){
            return {
                scenicspot_logo: require('../../images/jingqu_ticket.jpg'),
                dayplay_logo: require('../../images/dayplay_logo.jpg'),
                value: '',
                place: '',
                scenicspotList: [
                    {
                        id: '1',
                        scenicspot_img: require('../../images/bj_home.jpeg'),
                        scenicspot_name: '北京天安门',
                        scenicspot_introduce: '  坐落在中华人民共和国首都北京市的中心、故宫的南端，与天安门广场以及人民英雄纪念碑、毛主席纪念堂、人民大会堂、中国国家博物馆隔长安街相望，占地面积4800平方米 ',
                    },
                    {
                        id: '2',
                        scenicspot_img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567583112339&di=85d6913157e38cfdf6b13a3d6d261440&imgtype=0&src=http%3A%2F%2Fimg3.tuniucdn.com%2Fimages%2F2011-09-28%2FG%2FG75pd110Z86qqT20.jpg',
                        scenicspot_name: '阳澄湖',
                        scenicspot_introduce: '阳澄湖是太湖平原上第三大淡水湖，湖中两条天然土埂贯穿南北．将湖面分为东、中、西三湖，其中东湖最大．三湖之间有众多港汊相通．是阳澄地区防洪、排涝、引水、灌溉的调蓄湖泊．同时也是苏州市区和昆山市城区主要饮用水水源地。',
                    },
                    {
                        id: '3',
                        scenicspot_img: require('../../images/youji7.jpeg'),
                        scenicspot_name: '西塘古镇',
                        scenicspot_introduce: '西塘古镇属浙江省嘉兴市嘉善县，地处江浙沪三省市交界处，地理位置优越。交通便捷，东距上海90公里，西距杭州110公里，北距苏州85公里。',
                    }
                ],
                showTime: false,
                tid: 0
            }
        },
        mounted(){
            this.loadScecispot(false);
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
            },
            loadScecispot(flag) {
                let top = 0;
                if (flag) {
                    top = this.scenicspotList.length;
                }
                let result = getHotScenicspot(top, 5);
                if(result.status == 200) {
                    if (flag) {
                        this.scenicspotList = this.scenicspotList.concat(result.data)
                    } else {
                        this.scenicspotList = result.data
                    }
                }

            },
            loadMoreScenicspot() {
                this.loadScecispot(true)
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
