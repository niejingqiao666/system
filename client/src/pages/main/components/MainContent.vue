<template>
  <div class="content_container">
    <div class="content_head">
      <p>排序: 日期</p>
      <div class="content_checkBox">
        <input type="checkBox" />
        <label for>全选</label>
      </div>
      <button>批量导出</button>
      <button>批量数据</button>
    </div>
    <div class="content_result">
        <card-component></card-component>
    </div>
  </div>
</template>

<script>
import CardComponent from './MainContentCard';
export default {
    components: {
        CardComponent
    }
};
</script>

<style lang="less" scoped>
.content_container {
  height: 100%;
  width: 900px;
}

.content_head {
  display: flex;
  justify-content: space-between;
  padding-right: 300px;
  align-items: center;

  button{
      width: 100px;
      height: 40px;
      background-color: rgba(146,141,174);
      border: none;
      font-size: 14px;
      color: white;
  }
}

.content_result{
    background-color: white;
    margin-top: 10px;
    height: 450px;
}
</style>