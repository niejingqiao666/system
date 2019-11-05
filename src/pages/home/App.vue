<template>
    <div class="container">
        <nav-component></nav-component>
        <main-component></main-component>
        <footer-component></footer-component>
    </div>
</template>

<script>
import NavComponent from './components/Nav.vue';
import MainComponent from './components/Main.vue';
import FooterComponent from './components/Footer.vue';

export default {
    components: {
        NavComponent,
        MainComponent,
        FooterComponent
    }
}   
</script>

<style lang="less" scoped>

</style>