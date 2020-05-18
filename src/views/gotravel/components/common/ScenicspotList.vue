<template>
    <!-- 景区列表组件 -->
    <div id="scenicspot">
        <div
            class="body"
            v-for="(item, index) in scenicspotList"
            :key="index"
            @click="toScenicspotDesc(item.sid, item.title, item.images)">
            <img :src="item.pics" alt="">
            <div class="content">
                <span class="scenicspot-name hidden">{{ item.title }}</span>
                <span class="scenicspot-introduce hidden" v-html="item.address">{{ item.address }}</span>
                <div class="tag-playtime">
                    <van-tag class="tag" size="medium" color="#FF9900" type="primary">查看详情</van-tag>
                    <span class="playtime" v-show="showTime">建议游玩时长{{item.playtime}}小时</span>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "Scenicspot",
        data(){
            return {
            }
        },
        methods: {
            toScenicspotDesc(sId, address, img_url){

                let scenicspot = JSON.stringify({
                    sId: sId,
                    address: address,
                    img_url: img_url,
                });
                this.$router.push({
                    name: 'scenicspots',
                    query: {
                        data: scenicspot
                    }
                });
            }
        },
        props: {
            scenicspotList: Array,
            showTime: Boolean
        }
    }
</script>

<style lang="scss" scoped>
    #scenicspot{
        padding: 0 0.2rem 0.2rem;
        .hidden{
            /* 超出两行省略号显示 */
            overflow: hidden;
            text-overflow: ellipsis;
            display:-webkit-box;
            -webkit-box-orient:vertical;
            -webkit-line-clamp:2;
        }
        .body{
            display: flex;
            padding: 0.3em;
            margin: 0.8rem 0;
            border: 1px solid #f5f5f5;
            max-height: 4.95rem;
            flex-direction: row;
            box-shadow: 0 0 9px #bababa;
            img{
                width: 30%;
            }
            .content{
                display: flex;
                width: 20.58rem;
                flex-direction: column;
                justify-content: space-between;
                margin-left: 0.5rem;

                .scenicspot-name{
                    font-size: 0.8rem;
                }
                .scenicspot-introduce{
                    font-size: 0.7rem;
                    color: #999999;
                    min-height: 1.82rem;
                }
                .tag-playtime{

                    .tag{
                        width: 3.7rem;
                    }
                    .playtime{
                        font-size: 0.7rem;
                        line-height: 1.43rem;
                        float: right;
                    }
                }
            }
        }
    }
</style>
