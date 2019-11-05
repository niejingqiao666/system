<template>
    <div class="main_container">
        <side-component></side-component>
        <content-component></content-component>
    </div>
</template>

<script>
import ContentComponent from './MainContent';
import SideComponent from './MainSide';
export default {
    components: {
        ContentComponent,
        SideComponent
    }
}
</script>

<style lang="less" scoped>
    .main_container{
        display: flex;
        justify-content: space-between;
        height: 500px;
        width: 1160px;
        margin: 0 auto;
        margin-top: 10px;
    }
</style>