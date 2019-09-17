<template>
    <div id="travel">
        <p class="title">{{ title }}</p>

        <TravelList :storyList="storyList"/>

    </div>
</template>

<script>
    import TravelList from './TravelList'

    export default {
        name: "Travel",
        data(){
            return {

            }
        },
        props: {
            title: String,
            storyList: Array
        },
        components: {
            TravelList
        }
    }
</script>

<style lang="scss" scoped>
    #travel{
        padding: 0.5rem;
        background-color: #ffffff;

        .title{
            display: block;
            color: #484848;
            margin: 0.75rem 0;
            font-size: 1.25rem;
            font-weight: bold;
        }
    }
</style>