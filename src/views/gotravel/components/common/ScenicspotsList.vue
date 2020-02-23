<template>
    <!-- 景区详情组件 -->
    <div id="scenicspot">
        <div class="body" v-for="(item, index) in scenicspotList" :key="index" >
            <div class="title">
                <span class="scenicspot-name">{{ item.scenicspot_name }}</span>
            </div>

            <img :src="item.scenicspot_img" preview :preview-text="item.scenicspot_name" alt="">
            <p style="white-space: pre-wrap" class="scenicspot-introduce">{{ item.scenicspot_introduce }}</p>
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
                        scenicspot_img: require('../../../../images/mzxjnt.jpg'),
                        scenicspot_name: '毛主席纪念堂',
                        scenicspot_introduce: '  毛主席纪念堂，位于天安门广场人民英雄纪念碑南面。' +
                            '1977年5月落成，占地57000多平方米，总建筑面积为28000平方米。' +
                            '主体呈正方形，外有44根福建黄色花岗石建筑的明柱，柱间装有广州石湾花饰陶板，通体青岛花岗石贴面。屋顶有两层玻璃飞檐，檐间镶葵花浮雕。基座有两层平台，台帮全部用四川大渡河旁的枣红色花岗石砌成，四周环以房山汉白玉万年青花饰栏杆。' +
                            '南、北门台阶中间又各有两条汉白玉垂带，上面雕刻着葵花、万年青、腊梅、青松图案。 ',
                    },
                    {
                        scenicspot_img: require('../../../../images/rmyxjnb.jpg'),
                        scenicspot_name: '人民英雄纪念碑',
                        scenicspot_introduce: '  人民英雄纪念碑（Monument to the People\'s Heroes）位于北京天安门广场中心，在天安门南约463米，正阳门北约440米的南北中轴线上，是中华人民共和国政府为纪念中国近现代史上的革命烈士而修建的纪念碑。\n' +
                            '1949年9月30日，中国人民政治协商会议第一届全体会议决定，为了纪念在人民解放战争和人民革命中牺牲的人民英雄，在首都北京建立人民英雄纪念碑。1949年9月30日奠基，1952年8月1日开工，1958年4月22日建成 [1]  ，1958年5月1日揭幕，1961年被中华人民共和国国务院公布为第一批全国重点文物保护单位之一。\n' +
                            '人民英雄纪念碑通高37.94米，正面（北面）碑心是一整块花岗岩，长14.7米、宽2.9米、厚1米、重60.23吨，镌刻着毛泽东同志1955年6月9日所题写的“人民英雄永垂不朽”八个金箔大字。背面碑心由7块石材构成，内容为毛泽东起草、周恩来书写的150字小楷字体碑文。 ',
                    },
                    {
                        scenicspot_img: require('../../../../images/gjbwg.jpg'),
                        scenicspot_name: '国家博物馆',
                        scenicspot_introduce: '  中国国家博物馆（National Museum of China）简称国博，位于北京市中心天安门广场东侧，东长安街南侧，与人民大会堂东西相对称，是历史与艺术并重，集收藏、展览、研究、考古、公共教育、文化交流于一体的综合性博物馆。隶属于中华人民共和国文化部。 [1] \n' +
                            '截止至2013年末，中国国家博物馆总建筑面积近20万平方米，国博藏品数量为100余万件，展厅数量48个。是世界上单体建筑面积最大的博物馆，也是中华文物收藏量最丰富的博物馆之一，整体规模在世界博物馆中位居前列，2012年游客接待量达到537万人次，2013年达到745万人次 [2]  ，是全世界最受游客欢迎的博物馆之一。 ',
                    },
                    {
                        scenicspot_img: require('../../../../images/rmdht.jpg'),
                        scenicspot_name: '人民大会堂',
                        scenicspot_introduce: '  中华人民共和国中央政府人民大会堂位于中国北京市天安门广场西侧，西长安街南侧。人民大会堂坐西朝东，南北长336米，东西宽206米，高46.5米，占地面积15万平方米，建筑面积17.18万平方米。\n' +
                            '人民大会堂是中国全国人民代表大会开会地和全国人民代表大会常务委员会的办公场所，是党、国家和各人民团体举行政治活动的重要场所，也是中国党和国家领导人和人民群众举行政治、外交、文化活动的场所。人民大会堂每年举行的全国人民代表大会、中国人民政治协商会议以及五年一届的中国共产党全国代表大会也在此召开。 ',
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
