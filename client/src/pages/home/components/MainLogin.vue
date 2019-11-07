<template>
  <div class="login_container">
    <p class="login_header">登录工程信息系统</p>
    <div class="input_container">
      <input
        type="text"
        class="login_input username"
        v-model="username"
        @input="$v.username.$touch()"
      />
      <p class="error" v-if="$v.username.$dirty && $v.username.$invalid">需要输入用户名</p>
    </div>
    <div class="input_container">
      <input
        :type="passwordType"
        class="login_input password"
        v-model="password"
        @input="$v.password.$touch()"
      />
      <p class="error" v-if="$v.password.$dirty && !$v.password.required">需要输入密码</p>
      <img
        class="hide"
        v-show="passwordType === 'password'"
        src="../../../assets/images/eyeclose.png"
        @click="toggleType"
      />
      <img
        class="show"
        v-show="passwordType === 'text'"
        src="../../../assets/images/eyeopen.png"
        @click="toggleType"
      />
    </div>
    <button class="login_button" @click="login">立即登录</button>
    <p class="login_info">
      <span>申请试用</span>
      <span>|</span>
      <span>忘记密码?</span>
    </p>
  </div>
</template>

<script>
import { handleLogin } from "../../../api/index";
import { required } from "vuelidate/lib/validators";
export default {
  name: "Mainlogin",
  data() {
    return {
      username: null,
      password: null,
      passwordType: "password"
    };
  },
  validations: {
    username: {
      required
    },
    password: {
      required
    }
  },
  methods: {
    login() {
      this.$v.username.$touch();
      this.$v.password.$touch();
      if (!this.$v.username.$invalid) {
        handleLogin(this.username, this.password).then(result => {
          if (result.code === 200) {
            localStorage.setItem('userId', result.user.userId);
            localStorage.setItem('username', result.user.username);
            window.location.href = "/index.html";
          } else {
            alert("用户名或者密码错误");
          }
        });
      }
    },
    toggleType() {
      this.passwordType =
        this.passwordType === "password" ? "text" : "password";
    }
  }
};
</script>

<style lang="less" scoped>
.login_header {
  text-align: center;
  font: 19px "Microsoft YaHei";
  padding: 15px 0 5px;
  color: #404040;
}

.login_input {
  box-sizing: border-box;
  background-color: #ffffff;
  padding: 0px 0px 0px 35px;
  width: 243px;
  height: 36px;
}

.login_button {
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

.login_container {
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
  height: 40px;
}

.login_info {
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

.hide {
  position: absolute;
  top: 21px;
  right: 18px;
  transform: translateX(-50%);
}

.show {
  position: absolute;

  top: 21px;
  right: 18px;
  transform: translateX(-50%);
}

.error {
  text-align: left;
  color: red;
  padding-left: 35px;
}
</style>