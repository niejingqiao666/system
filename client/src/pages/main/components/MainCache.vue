<template>
  <div class="content_container">
    <p v-for="item in cache" :key="item.id">{{item.title}}</p>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: mapState(["cache"])
};
</script>

<style scoped>
.content_container {
  height: 100%;
  width: 900px;
  overflow: scroll;
}
</style>