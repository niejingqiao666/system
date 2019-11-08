<template>
  <div class="content_container">
    <div class="content_head">
      <p>排序: 日期</p>
      <div class="content_checkBox">
        <input type="checkbox" @change="toggleAll" v-model="checked" />
        <label>全选</label>
      </div>
      <button>批量导出</button>
      <button>批量数据</button>
    </div>
    <div class="content_result">
      <div class="content_wrapper">
        <card-component
          v-for="(item,index) in searchData"
          :item="item"
          :key="item.index"
          :check="checkList[index]"
          :index="index"
          @boxchange="handleBoxChange"
        ></card-component>
      </div>
    </div>
  </div>
</template>

<script>
import CardComponent from "./MainContentCard";
import VueEvent from "./VueEvent";
import { getList } from "../../../api/index";
import {mapState} from "vuex";
export default {
  data() {
    return {
      checkList: [],
      checked: false
    };
  },
  components: {
    CardComponent
  },
  created() {
    getList().then(result => {
      if (result.code === 200) {
        this.$store.commit('injection',result.data);        
        // console.log(this.dataList.title);
        return;
      }
    });
  },
  computed:{
    ...mapState(['searchData'])
  },
  watch:{
    searchData(val){
      let arr = new Array(val.length).fill(false);
        this.checkList = arr;
    }
  },
  mounted() {
    const _this = this;
    VueEvent.$on("aaa", function(val) {
      console.log(val);
      getList('','',val).then(result => {
        console.log(result)
        if (result.code === 200) {
           _this.$store.commit('injection',result.data);        
        }
      });
    });
  },
  methods: {
    toggleAll() {
      if (this.checked) {
        this.checkList = this.checkList.map(() => {
          return true;
        });
      } else {
        this.checkList = this.checkList.map(() => {
          return false;
        });
      }
    },
    handleBoxChange(payload){
      this.checkList.splice(payload.index, 1, payload.check);
      console.log(this.checkList);
      if (this.checkList.indexOf(false) === -1){
        console.log('a');
        this.checked = true;
      } else {
        this.checked = false;
      }
    }
  }
};
</script>

<style lang="less" scoped>
.content_container {
  height: 100%;
  width: 900px;
  overflow: scroll;
}

.content_head {
  display: flex;
  justify-content: space-between;
  padding-right: 300px;
  align-items: center;

  button {
    width: 100px;
    height: 40px;
    background-color: rgba(146, 141, 174);
    border: none;
    font-size: 14px;
    color: white;
  }
}

.content_result {
  margin-top: 10px;
  height: 450px;
}

.content_wrapper {
  background-color: white;
}
</style>