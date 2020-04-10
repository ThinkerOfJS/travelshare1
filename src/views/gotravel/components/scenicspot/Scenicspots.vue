<template>
    <!--景点门票-->
    <div id="scenicspots">
        <div class="top">
            <van-icon name="arrow-left" size="1.25rem" @click="goBack" color="#f5f5f5"/>
            <p class="title">景点门票</p>
        </div>
        <!-- 景点图片区域 -->
        <div class="img">
            <img :src="scenicspot.pics" preview :preview-text="scenicspot.title" :alt="scenicspot.title" >
        </div>
        <hr>
        <div class="body">
            <div class="header">
                <div class="top-box">
                    <span class="address">{{scenicspot.title}}</span>
                    <van-button class="buy-btn" size="small" type="info" color="#FF9900" @click="buyTicket(scenicspot.sid, scenicspot.title, scenicspot.pics)">门票预定</van-button>
                </div>
                <div class="bottom">
                    <p v-html="scenicspot.address">{{scenicspot.address}}</p>
                </div>

            </div>

            <ScenicspotsList :scenicspotList="attractions" />
        </div>
    </div>
</template>

<script>
    import ScenicspotsList from './../common/ScenicspotsList'
    import {getAttractions, getScenicspotDetail} from './../../../../service/index'
    export default {
        name: "Scenicspots",
        data(){
            return {
                show: false,
                sId: '',
                image: '',
                address: '',
                scenicspot: {},
                attractions: []
            }
        },
        mounted(){
            this.getScenicspotData();
            this.loadScenicspot();
            this.loadAttractios();
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
            loadScenicspot() {
                getScenicspotDetail(this.sId).then(res => {

                    if (res.status === 200) {
                        let scenicspot = res.data;
                        let images = scenicspot.imgurl.split(',');
                        for (let i in images) {
                            if (images[i] === '') {
                                images.splice(i, 1);
                            } else {
                                images[i] = this.host + images[i];
                            }
                        }
                        scenicspot.images = images;
                        scenicspot.pics = images[0];
                        this.scenicspot = scenicspot;
                        // console.log('景区详情',this.scenicspot);
                    }
                })
            },
            loadAttractios() {
                let _this = this;
                getAttractions(_this.sId).then(res => {
                    // console.log('景点数据',res);
                    if (res.status === 200) {
                        if (res.data === null) {
                            res.data = []
                        }

                        let attractions = res.data;
                        for (let item of attractions) {
                            let images = item.imgurl.split(',');
                            for (let i in images) {
                                if(images[i] === '') {
                                    images.splice(i, 1);
                                } else {
                                    images[i] = this.host + images[i];
                                }
                            }
                            item.images = images;
                            item.pics = images[0];
                        }

                        this.attractions = attractions;
                    }
                });

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
                flex-direction: column;
                .top-box {
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
                .bottom {
                    font-size: 0.8rem;
                    margin-top: 0.3rem;
                    color: #999999;
                }
            }
        }
    }
</style>
