<template>
  <div class="search_container">
    <p class="search_header">登录工程信息系统</p>
    <div class="input_container">
      <input type="text" class="search_input username" />
    </div>
    <div class="input_container">
      <input type="password" class="search_input password" />
      <img class="hide" src="../../../assets/images/eyeclose.png" alt="">
      <img class="show" src="../../../assets/images/eyeopen.png" alt="">
    </div>
    <button class="search_button">立即登录</button>
    <p class="search_info">
      <span>申请试用</span>
      <span> | </span>
      <span>忘记密码?</span>
    </p>
  </div>
</template>

<script>
export default {
  name: "MainSearch"
};
</script>

<style lang="less" scoped>
.search_header {
  text-align: center;
  font: 19px "Microsoft YaHei";
  padding: 15px 0 5px;
  color: #404040;
}

.search_input {
  box-sizing: border-box;
  background-color: #ffffff;
  padding: 0px 0px 0px 35px;
  width: 243px;
  height: 36px;
}

.search_button {
  width: 243px;
  height: 40px;
  background-color: #ff7500;
  border-radius: 2px;
  border: 0;
  cursor: pointer;
  font-family: "Microsoft Yahei", serif;
  font-size: 16px;
  color: #fff;
  padding: 1px 7px 2px;
  margin: 10px 0;
}

.search_container {
  width: 347px;
  height: 293px;
  background-color: white;
  text-align: center;
  padding: 0 32px;
  box-sizing: border-box;
  position: absolute;
  top: 56px;
  right: 170px;
}

.input_container {
  padding: 10px 0;
  position: relative;
}

.search_info {
  padding: 5px 0 15px;
  text-align: right;

  span {
    font-size: 13px;
    color: #333;
    font-family: "Microsoft Yahei" serif;
    padding-top: 5px;
  }
}

.username {
  background: url("../../../assets/images/l_icon1.png") 3px center no-repeat;
  border: 1px solid #d3d3d3;
}

.password {
  background: url("../../../assets/images/l_icon2.png") 3px center no-repeat;
  border: 1px solid #d3d3d3;
}

.hide{
    position: absolute;
    top: 21px;
    right: 18px;
    transform: translateX(-50%);
}

.show{
    display: none;
    top: 21px;
    right: 18px;
}
</style>