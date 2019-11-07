
<template>
  <div class="card_container">
    <p class="card_title">
      {{`${item.id}.${item.title}`}}
      <input
        type="checkbox"
        class="card_checkBox"
        @change="change"
        v-model="myCheck"
      />
    </p>
    <div class="card_authors">
      <span prop>{{item.author}}</span>
      <span prop>{{item.vintage}}</span>
    </div>
    <p class="card_abstract">
      <span>摘要：{{item.abstract}}</span>
    </p>
    <p class="card_keywords">
      <a href>{{item.tags}}</a>
    </p>
    <div class="card_bottom">
      <div class="card_buttonGroup">
        <div class="card_button1">
          <i class="iconfont icon-internet"></i>
          网络来源
        </div>
        <div class="card_button1">
          <i class="iconfont icon-daochu"></i>
          导出
        </div>
        <button class="card_button2" @click="addToCache(item.id, item.title)">收藏</button>
        <button class="card_button2">编辑</button>
      </div>
      <span class="card_citation">被引：0</span>
    </div>
  </div>
</template>

<script>
// import { getList } from "../../../api/index";
export default {
  name: "CardComponent",
  data() {
    return {
      val: null
    };
  },
  computed: {
    myCheck: {
      get(){
        return this.val
      },
      set(value){
        this.val = value;
      }
    }
  },
  watch:{
    check(newVal){
      this.val = newVal
    }
  },
  methods: {
    addToCache(id, title){
      let payload = {
        id,
        title
      }
      this.$store.commit('addToCache', payload)
    },
    change(){
      console.log(this.myCheck);
      this.$emit('boxchange', {index: this.index, check: this.myCheck});
    }
  },
  props: ["item", 'check', 'index']
};
</script>



<style lang="less" scoped>
.card_container {
  border: 1px solid gray;
  box-sizing: border-box;
  padding: 20px;
}
.card_checkBox {
  position: absolute;
  top: 3px;
  left: -15px;
}

.card_title {
  font-size: 16px;
  color: blue;
  font-weight: 600;
  margin-bottom: 20px;
  position: relative;
}

.card_authors {
  padding: 10px 0;
}

.card_bottom {
  display: flex;
  justify-content: space-between;
}

.card_keywords {
  padding: 10px 0;
  text-decoration: underline;

  a:not(:nth-child(1)) {
    padding: 0 5px;
  }
}

.card_buttonGroup {
  display: flex;
  align-items: center;
}

.card_button1 {
  box-sizing: border-box;
  height: 30px;
  color: steelblue;
  border: 1px solid steelblue;
  background-color: white;
  line-height: 30px;
  padding: 0 5px;
  margin-right: 5px;
  display: inline-block;
}

.card_button2 {
  height: 30px;
  padding: 0 20px;
  text-align: center;
  margin-right: 5px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);
}
.card_abstract {
  overflow: hidden;
  line-clamp: 2;
  -webkit-line-clamp: 2;
  text-overflow: ellipsis;
}
</style>