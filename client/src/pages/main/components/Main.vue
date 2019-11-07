<template>
  <div class="main_container">
    <side-component>
      
    </side-component>
    <router-view></router-view>
  </div>
</template>

<script>
import SideComponent from "./MainSide";
export default {
  components: {
    SideComponent
  }
};
</script>

<style lang="less" scoped>
.main_container {
  display: flex;
  justify-content: space-between;
  height: 500px;
  width: 1160px;
  margin: 0 auto;
  margin-top: 10px;
}
</style>