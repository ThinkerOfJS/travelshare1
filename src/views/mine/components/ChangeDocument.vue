<template>
    <div id="changedocument">
        <!--标题区域-->
        <div class="top">
            <van-icon name="arrow-left" size="1.25rem" @click="goBack" color="#f5f5f5"/>
            <p class="title">修改</p>
            <van-icon name="success" size="1.25rem" @click="save" color="#f5f5f5" />
        </div>
    </div>
</template>

<script>
    export default {
        name: "ChangeDocument",
        methods: {
            goBack(){
                this.$router.go(-1);
            },
            save(){
                alert('保存成功');
            }
        }
    }
</script>

<style lang="scss" scoped>
    #changedocument{
        .top{
            display: flex;
            width: 100%;
            padding: 1rem 0.5rem;
            background-color: #8fd6f3;
            text-align: center;
            .title{
                width: 100%;
                color: #f5f5f5;
                margin-left: -0.2rem;
                font-size: 1.25rem;
                line-height: 1.25rem;
                font-weight: bold;
            }
            .clear{
                font-size: 0.7rem;
            }
        }
    }

</style>