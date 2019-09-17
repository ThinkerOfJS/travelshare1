<template>
    <!-- 景点列表组件 -->
    <div id="scenicspot">
        <div class="body" v-for="(item, index) in scenicspotList" :key="index" >
            <div class="title">
                <span class="scenicspot-name">{{ item.scenicspot_name }}</span>
            </div>

            <img :src="item.scenicspot_img" preview :preview-text="item.scenicspot_name" alt="">
            <p class="scenicspot-introduce">{{ item.scenicspot_introduce }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Scenicspot",
        data(){
            return {
                scenicspotList: [
                    {
                        scenicspot_img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568544433122&di=6bfb095dcf51429e7828a3b138e62efc&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201412%2F25%2F20141225204152_aYEc3.jpeg',
                        scenicspot_name: '北京天安门1',
                        scenicspot_introduce: '  北京天安门北京天安门北京天安门北京天安门北京天安门北京天安门北京天安门北京天安门北京天安门北京天安门北京天安门北京天安门北京天安门北京天安门北京天安门北京天安门北京天安门北京天安门北京天安门北京天安门北京天安门 ',
                    },
                    {
                        scenicspot_img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568544433122&di=6bfb095dcf51429e7828a3b138e62efc&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201412%2F25%2F20141225204152_aYEc3.jpeg',
                        scenicspot_name: '北京天安门2',
                        scenicspot_introduce: '  北京天安门北京天安门北京天安门北京天安门北京天安门北京天安门北京天安门北京天安门北京天安门北京天安门北京天安门北京天安门北京天安门北京天安门北京天安门北京天安门北京天安门北京天安门北京天安门北京天安门北京天安门 ',
                    },
                    {
                        scenicspot_img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568544433122&di=6bfb095dcf51429e7828a3b138e62efc&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201412%2F25%2F20141225204152_aYEc3.jpeg',
                        scenicspot_name: '北京天安门3',
                        scenicspot_introduce: '  北京天安门北京天安门北京天安门北京天安门北京天安门北京天安门北京天安门北京天安门北京天安门北京天安门北京天安门北京天安门北京天安门北京天安门北京天安门北京天安门北京天安门北京天安门北京天安门北京天安门北京天安门 ',
                    },
                    {
                        scenicspot_img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568544433122&di=6bfb095dcf51429e7828a3b138e62efc&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201412%2F25%2F20141225204152_aYEc3.jpeg',
                        scenicspot_name: '北京天安门4',
                        scenicspot_introduce: '  北京天安门北京天安门北京天安门北京天安门北京天安门北京天安门北京天安门北京天安门北京天安门北京天安门北京天安门北京天安门北京天安门北京天安门北京天安门北京天安门北京天安门北京天安门北京天安门北京天安门北京天安门 ',
                    },
                ]
            }
        },
        methods: {

        },
        // props: {
        //     scenicspotList: Array,
        //     showTime: Boolean
        // }
    }
</script>

<style lang="scss" scoped>
    #scenicspot{
        padding: 0 0.2rem 0.2rem;
        .body{
            display: flex;
            flex-direction: column;
            justify-content: start;

            .title{
                text-align: center;
                margin: 0.3rem 0;
                .scenicspot-name{
                    font-size: 0.8rem;
                    font-weight: bold;
                }
            }
            img{
                width: 90%;
                margin: 0 auto;
                box-shadow: 0 0 9px #999;
            }
            .scenicspot-introduce{
                display: block;
                padding: 0.3rem 0;
                margin: 0.3rem 0.9rem 0;
                font-size: 0.7rem;
                color: #999999;
                min-height: 1.82rem;
            }
        }
    }
</style>