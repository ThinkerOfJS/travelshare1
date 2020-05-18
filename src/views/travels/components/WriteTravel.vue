<template>
    <div id="writetravel">
        <!-- 标题区域 -->

        <div class="top">
            <van-icon name="arrow-left" size="1.25rem" @click="goBack" color="#f5f5f5"/>
            <p class="title">期待您的每一篇游记</p>
        </div>
        <!-- 添加图片区域 -->
        <div class="addPic">
            <van-uploader :after-read="getImage" v-model="fileList" multiple/>
        </div>
        <!-- 编写故事地点及分类区域 -->
        <div class="body">
            <div class="story-place">
                    <van-field
                            v-model="place"
                            center
                            clearable
                            label="地点"
                            placeholder="请输入故事地点"
                    >
                        <van-button slot="button" size="small" type="primary" @click="getNowPlace">获取当前位置</van-button>
                    </van-field>
            </div>
            <div class="story-category">
                <van-dropdown-menu direction="up">
                    <van-dropdown-item z-index="9999" v-model="storyCategory" :options="option1"/>
                </van-dropdown-menu>
            </div>
            <div></div>
        </div>
        <!-- 编写故事区域 -->
        <van-field
                v-model="title"
                center
                clearable
                label="游记标题："
                placeholder="请输入游记标题"
        ></van-field>
        <div id="editors">
            <van-popup
                    v-model="show"
                    position="top"
                    :style="{ height: '20%' }"
                    class="popub"
            >
                标题：{{ title }} 内容：{{ content }} 地点：{{place}} 图片：{{storyCategory}}
            </van-popup>
            <vue-html5-editor
                    class="editor-frame"
                    :content="content"
                    :height="200"
                    @change="updateData"
            >

            </vue-html5-editor>
            <van-button
                    class="btn"
                    round
                    type="danger"
                    @click="publish"
                    color="#87CEEB"
            >
                发布
            </van-button>
        </div>
    </div>
</template>

<script>
    import getCurrentCityName from './../components/map'
    import {mapState, mapMutations} from 'vuex';
    import {Toast} from 'vant'

    export default {
        name: "WriteTravel",
        runtimeCompiler: true,
        data() {
            return {
                // ...mapState(["userInfo"]),
                content: '',
                // img: require('/img/b5566963-9a4d-7f0c-514b-f6e701f1843c系统客户端架构图.png'),
                img: this.host+'/img/253b83d2-9fd5-d780-bd57-938316aa07dbWebpack打包示意图.png',
                show: false,
                place: '',
                title: '',
                storyCategory: 4,
                fileList: [],
                option1: [
                    {text: '民宿', value: 1},
                    {text: '美食', value: 2},
                    {text: '景点', value: 3},
                    {text: '艺术', value: 4},
                    {text: '灵感', value: 5},
                ],
                uid: 0,
            }
        },
        computed: {
            ...mapState(["userInfo"]),
        },
        mounted() {
            this.getUid();
        },
        methods: {
            ...mapMutations(["GET_USER"]),
            goBack() {
                this.$router.go(-1);
            },
            getUid() {
                this.uid = this.userInfo.uid;
                console.log(this.userInfo.uid);
            },
            updateData(e = '') {
                let c1 = e.replace(/<img width="100%"/g, '<img');
                let c2 = c1.replace(/<img/g, '<img width="100%"');
                this.content = c2;
            },
            getImage(file) {
                console.log(file);
                file.status = 'uploading';
                file.message = '上传中...';
            },
            // 获取当前位置信息
            getNowPlace() {
                getCurrentCityName().then((city) => {
                    this.place = city;
                })
            },
            publish() {
                // this.show = true;
                let fileLists = this.fileList;
                // console.log(fileLists);
                let param = new FormData();
                for (let i = 0; i < fileLists.length; i++) {
                    let file = fileLists[i].file;
                    param.append('file', file);
                }
                param.append('title', this.title);
                param.append('content', this.content);
                param.append('place', this.place);
                param.append('tpid', this.storyCategory);
                param.append('viewcount', 0);
                param.append('uid', this.userInfo.uid);
                let config = {
                    headers: {'Content-Type': 'multipart/form-data'}

                }; //添加请求头
                this.$ajax.post('/api/travels/add', param, config)
                    .then(res => {
                        if (res.status == 200) {
                            Toast({
                                message: '发表成功！'
                            });
                            this.$router.push({
                                name: 'travels'
                            })
                        } else {
                            Toast({
                                message: '图片过大，请重新选择图片！'
                            });
                            return
                        }
                        // console.log(res);
                    });
            }
        },
    }
</script>

<style lang="scss" scoped>
    #writetravel {
        .top {
            display: flex;
            width: 100%;
            padding: 1rem 0.5rem;
            background-color: #8fd6f3;

            .title {
                width: 100%;
                display: inline-block;
                color: #f5f5f5;
                text-align: center;
                font-size: 1.25rem;
                line-height: 1.25rem;
                font-weight: bold;
            }
        }

        .addPic {
            margin-top: 1rem;
            padding: 0.5rem;
        }

        .body {
            .story-place {
                box-shadow: 0 0 9px #999;
            }

            .story-category {
                margin: 1rem 0;
                box-shadow: 0 0 9px #999;
            }
        }

        #editors {
            margin-bottom: 3rem;

            .popub {
                text-align: center;
            }

            .editor-frame {
                box-shadow: 0 0 9px #999;
            }

            .btn {
                width: 6rem;
                margin-top: 0.5rem;
                margin-left: 50%;
                left: -3rem;
                box-shadow: 0 0 9px #999;
            }
        }
    }

</style>
