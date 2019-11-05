<template>
  <div class="header_container">
    <div class="header_logo"></div>
    <input type="text" class="header_input" placeholder="请输入检索内容">
    <img src="" alt="" class="header_img">
    <i class="iconfont icon-search"></i>
    <button class="header_button">搜索</button>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.header_container {
  width: 1160px;
  margin: 0 auto;
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.icon-search{
  margin-left: -120px;
}

.header_logo {
  height: 44px;
  width: 166px;
  background: url("../../../assets/images/logo.png");
}

.header_input{
    width: 700px;
    height: 30px;
}

.header_button{
    width: 100px;
    border-radius: 25px;
    background-color: rgba(68,68,229);
    height: 30px;
}
</style>