<template>
    <!--景点门票-->
    <div id="scenicspots">
        <div class="top">
            <van-icon name="arrow-left" size="1.25rem" @click="goBack" color="#f5f5f5"/>
            <p class="title">景点门票</p>
        </div>
        <!-- 景点图片区域 -->
        <div class="img">
            <img :src="image" preview :preview-text="address" :alt="address" >
        </div>
        <hr>
        <div class="body">
            <div class="header">
                <span class="address">{{address}}</span>
                <van-button class="buy-btn" size="small" type="info" color="#FF9900" @click="buyTicket(sId, address, image)">门票预定</van-button>
            </div>

            <ScenicspotsList :scenicspotList="scenicspotList" />
        </div>
    </div>
</template>

<script>
    import ScenicspotsList from './../common/ScenicspotsList'
    import {getAttractions} from './../../../../service/index'
    export default {
        name: "Scenicspots",
        data(){
            return {
                show: false,
                sId: '',
                image: '',
                scenicspotList: [
                    {
                        id: '1',
                        scenicspot_img: require('../../../../images/bj_home.jpeg'),
                        scenicspot_name: '北京天安门',
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
                ],
                address: '',
                getAttractions: []
            }
        },
        mounted(){
            this.getScenicspotData();
            this.getInitData();
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
            getScenicspotData(){
                let scenicspotData = JSON.parse(this.$route.query.data);
                this.sId = scenicspotData.sId;
                this.address = scenicspotData.address;
                this.image = scenicspotData.img_url;
            },
            buyTicket(sId, address, img_url){

                let scenicspot = JSON.stringify({
                    sId: sId,
                    address: address,
                    img_url: img_url,
                });

                this.$router.push({
                    name: 'buyticket',
                    query: {
                        data: scenicspot
                    }
                });
            },
            async getInitData() {
                let _this = this
                let result = getAttractions(_this.sid);
                if (result == 200) {
                    _this.getAttractions = result.Data;
                }
            }

        },
        components: {
            ScenicspotsList
        },
        props: {

        }
    }
</script>

<style lang="scss" scoped>
    #scenicspots{
        background: #ffffff;
        padding-bottom: 1rem;
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
            }
        }
        .body{
            margin-bottom: 3.5rem;
            padding: 0 0.4rem;
            .header{
                display: flex;
                justify-content: space-between;
                .address{
                    max-width: 15rem;
                    font-size: 0.9rem;
                    font-weight: bold;
                }
                .buy-btn{
                    width: 5rem;
                    box-shadow: 0 0 9px #999;
                }
            }
        }
    }
</style>
