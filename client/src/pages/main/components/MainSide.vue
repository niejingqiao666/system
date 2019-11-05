<template>
  <div class="side_container">
    <p>查看历史记录</p>
    <p>查看收藏夹</p>
    <div class="side_checkBoxContainer">
      <div class="checkBox">
        <input type="checkbox" id="nation"/>
        <label for="nation">全国</label>
      </div>
      <div class="checkBox">
        <input type="checkbox" id="huabei"/>
        <label for="huabei">华北区</label>
      </div>
      <div class="checkBox">
        <input type="checkbox" id="huabei"/>
        <label for="huabei">华东区</label>
      </div>
      <div class="checkBox">
        <input type="checkbox" id="huanan"/>
        <label for="huanan">华南区</label>
      </div>
      <div class="checkBox">
        <input type="checkbox" id="huaxi"/>
        <label for="huaxi">华西区</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.side_container {
  height: 100%;
  width: 200px;
  background-color: white;
  border: 1px solid gray;

  p{
      font-size: 16px;

      &:nth-child(2){
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

.checkBox{
    display: flex;
    align-items: center;
    margin-top: 20px;
}

.checkBox label{
    margin-left: 5px;
    font-size: 16px;
}
</style>