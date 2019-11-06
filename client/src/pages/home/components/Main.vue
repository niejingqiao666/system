<template>
    <div class="main_container">
        <login-component></login-component>
    </div>
</template>

<script>
import LoginComponent from './MainLogin';
export default {
    components: {
        LoginComponent
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