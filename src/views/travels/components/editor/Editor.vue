<template>
    <div id="editors">
        <van-popup
            v-model="show"
            position="top"
            :style="{ height: '20%' }"
            class="popub"
        >
            {{ content }}
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
</template>

<script>


    export default {
        name: "Editor",
        runtimeCompiler: true,
        data() {
            return {
                content: '请输入您的故事',
                show: false,

            }
        },
        methods: {
            updateData(e = ''){
                let c1 = e.replace(/<img width="100%"/g, '<img');
                let c2 = c1.replace(/<img/g, '<img width="100%"');
                this.content = c2;
            },
            publish(){
                // this.show = true;
                addTravels()
            }
        },
    }
</script>

<style lang="scss" scoped>
    #editors{
        margin-bottom: 3rem;
        .popub{
            text-align: center;
        }
        .editor-frame{
            box-shadow: 0 0 9px #999;
        }
        .btn{
            width: 6rem;
            margin-top: 0.5rem;
            margin-left: 50%;
            left: -3rem;
            box-shadow: 0 0 9px #999;
        }
    }
</style>
