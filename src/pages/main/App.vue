<template>
    <div class="container">
        <nav-component></nav-component>
        <header-component></header-component>
        <main-component></main-component>
    </div>
</template>

<script>
import NavComponent from './components/Nav';
import HeaderComponent from './components/Header';
import MainComponent from './components/Main';
export default {
    components: {
        NavComponent,
        HeaderComponent,
        MainComponent
    }
}   
</script>

<style lang="less">
    body{
        background-color: rgba(230, 252, 242);
    }
</style>