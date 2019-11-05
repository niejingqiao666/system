<template>
    <div class="main_container">
        <search-component></search-component>
    </div>
</template>

<script>
import SearchComponent from './MainSearch';
export default {
    components: {
        SearchComponent
    }
}
</script>

<style lang="less" scoped>
    .main_container{
        width: 1440px;
        height: 447px;
        background: url('../../../assets/images/l_bg.jpg');
        margin-top: 8px;
        position: relative;
    }
</style>