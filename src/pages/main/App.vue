<template>
    <div class="container">
        <nav-component></nav-component>
        <header-component></header-component>
    </div>
</template>

<script>
import NavComponent from './components/Nav';
import HeaderComponent from './components/Header';
export default {
    components: {
        NavComponent,
        HeaderComponent
    }
}   
</script>

<style lang="less">
    body{
        background-color: rgba(230, 252, 242);
    }
</style>