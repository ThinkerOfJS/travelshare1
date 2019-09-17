<template>
    <div id="writetravel">
        <!-- 标题区域 -->
        <div class="top">
            <van-icon name="arrow-left" size="1.25rem" @click="goBack" color="#f5f5f5"/>
            <p class="title">期待您的每一篇游记</p>
        </div>
        <!-- 添加图片区域 -->
        <div class="addPic">
            <van-uploader v-model="fileList" multiple />
        </div>
        <!-- 编写故事地点及分类区域 -->
        <div class="body">
            <div class="story-place">
                <van-cell-group>
                    <van-field
                        v-model="place"
                        center
                        clearable
                        label="地点"
                        placeholder="请输入故事地点"
                    >
                        <van-button slot="button" size="small" type="primary" @click="getNowPlace">获取当前位置</van-button>
                    </van-field>
                </van-cell-group>

            </div>
            <div class="story-category">
                <van-dropdown-menu direction="up">
                    <van-dropdown-item z-index="9999" v-model="storyCategory" :options="option1" />
                </van-dropdown-menu>
            </div>
            <div></div>
        </div>
        <!-- 编写故事区域 -->
        <Editor></Editor>
    </div>
</template>

<script>
    import Editor from './editor/Editor'
    import getCurrentCityName from './../components/map'

    export default {
        name: "WriteTravel",
        data(){
            return {
                place: '',
                storyCategory: 4,
                fileList: [
                    { url: 'https://img.yzcdn.cn/vant/cat.jpeg' }
                    // Uploader 根据文件后缀来判断是否为图片文件
                    // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
                    // { url: 'https://cloud-image', isImage: true }
                ],
                option1: [
                    { text: '民宿', value: 0 },
                    { text: '美食', value: 1 },
                    { text: '景点', value: 2 },
                    { text: '艺术', value: 3 },
                    { text: '灵感', value: 4 },
                ],
            }
        },
        methods: {
            goBack(){
                this.$router.go(-1);
            },
            // 获取当前位置信息
            getNowPlace(){
                getCurrentCityName().then((city) => {
                    this.place = city;
                })
            }
        },
        components: {
            Editor,
        }
    }
</script>

<style lang="scss" scoped>
    #writetravel{
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
        .addPic{
            margin-top: 1rem;
            padding: 0.5rem;
        }
        .body{
            .story-place{
                box-shadow: 0 0 9px #999;
            }
            .story-category{
                margin: 1rem 0;
                box-shadow: 0 0 9px #999;
            }
        }
    }
</style>