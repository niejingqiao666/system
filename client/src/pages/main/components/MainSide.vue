<template>
  <div class="side_container">
    <p>查看历史记录</p>
    <div>
      <router-link to="/cache">查看收藏夹</router-link>
    </div>
    <div>
      <router-link to="/content">主界面</router-link>
    </div>
    <el-checkbox-group v-model="checkedCities" @change="change">
      <el-checkbox v-for="city in cities" :label="city" :key="city.type">{{city.name}}</el-checkbox>
    </el-checkbox-group>
    <!-- <div class="side_checkBoxContainer">
      <div class="checkBox"  @click="handleList('all')">
        <input type="checkbox" id="nation" v-model="this.checked"/>
        <label for="nation">全国</label>
      </div>
      <div class="checkBox"   @click="handleList('north')">
        <input type="checkbox" id="huabei" v-model="this.checked"/>
        <label for="huabei">华北区</label>
      </div>
      <div class="checkBox"  @click="handleList('east')">
        <input type="checkbox" id="huabei" v-model="this.checked"/>
        <label for="huabei" >华东区</label>
      </div>
      <div class="checkBox"  @click="handleList('south')">
        <input type="checkbox" id="huanan" v-model="this.checked"/>
        <label for="huanan">华南区</label>
      </div>
      <div class="checkBox"  @click="handleList('west')">
        <input type="checkbox" id="huaxi" v-model="this.checked"/>
        <label for="huaxi">华西区</label>
      </div>
    </div>-->
  </div>
</template>
<script>
import VueEvent from "./VueEvent";
export default {
  data() {
    return {
      checkedCities: [],
      cities: [
        {
          name: "全国",
          type: "all"
        },
        {
          name: "华北区",
          type: "north"
        },
        {
          name: "华东区",
          type: "east"
        },
        {
          name: "华南区",
          type: "south"
        },
        {
          name: "华西区",
          type: "west"
        }
      ]
    };
  },
  methods: {
    change(val) {
      console.log(val);
      VueEvent.$emit("aaa", val);
    }
  }
};
</script>

<style lang="less" scoped>
.side_container {
  height: 100%;
  width: 200px;
  background-color: white;
  border: 1px solid gray;

  p {
    font-size: 14px;
    text-indent: 12px;
    margin-top: 20px;

    &:nth-child(2) {
      margin-top: 20px;
    }
  }
}

.side_checkBoxContainer {
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  margin-left: 10px;
}

.checkBox {
  display: flex;
  align-items: center;
  margin-top: 20px;
}

.checkBox label {
  margin-left: 5px;
  font-size: 16px;
}
</style>