<template>
    <swiper id="swipe" :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide v-for="(img, index) in imgs" :key="index">
            <img :src="img.img_url" alt="">
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
</template>

<script>
    import 'swiper/dist/css/swiper.css'
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    export default {
        name: "Swipe",
        data(){
            return {
                swiperOption: {
                    notNextTick: true,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    },
                    loop: true,
                    autoplay: {
                        delay: 1500
                    },
                    speed: 600,
                    // 滑动后回调函数
                    on: {
                        slideChangeTransitionEnd(){
                            // console.log(this.activeIndex);
                        }
                    }
                },
                imgs: [
                    { img_url: 'http://image.qmango.com/upload/2013813114718.jpg' },
                    { img_url: 'http://img.article.pchome.net/00/44/11/18/pic_lib/wm/1.jpg' },
                    { img_url: 'http://pic1.win4000.com/wallpaper/e/57b668cd660c1.jpg' },
                    { img_url: 'http://pic1.win4000.com/wallpaper/6/582567c7b500f.jpg' },
                    { img_url: 'http://img.pconline.com.cn/images/upload/upc/tx/wallpaper/1208/07/c0/12746020_1344317236877.jpg' },
                    { img_url: 'http://i8.download.fd.pchome.net/t_600x1024/g1/M00/12/17/ooYBAFae4MiIOvMYAAiZaPjOdcUAAC2pQPuPcEACJmA105.jpg' },
                ]
            }
        },
        components: {
            swiper,
            swiperSlide
        }
    }
</script>

<style lang="scss" scoped>
    #swipe{
        width: 100%;
        height: 12rem;
        /*margin-top: 0.75rem;*/
        box-shadow: 0 3px 9px #999;

        img{
            width: 100%;
        }
    }
</style>