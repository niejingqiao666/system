<template>
  <div class="nav_container">
    <div class="nav_left">欢迎您访问RCC</div>
    <div class="nav_right">
      <span>
        当前用户
        <span>{{username}}</span>
      </span>
      <span @click="toggleModal">修改密码</span>
      <span>退出登录</span>
      <div class="reset_container" v-show="show">
        <div class="form_container">
          <div class="inp_container">
            <input type="password" placeholder="请输入密码" v-model="password"         @input="$v.password.$touch()"
/>
            <p class="error" v-if="$v.password.$dirty && !$v.password.required">需填</p>
          </div>
          <div class="inp_container">
            <input type="password" placeholder="请再一次输入密码" v-model="passwordAgain"         @input="$v.passwordAgain.$touch()"
/>
            <p class="error" v-if="$v.passwordAgain.$dirty && !$v.passwordAgain.required">需填</p>
          </div>
          <button @click="handleReset">提交</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";
import { resetPass } from "../../../api/index";
export default {
  data() {
    return {
      username: localStorage.getItem("username"),
      password: "",
      passwordAgain: "",
      show: false
    };
  },
  methods: {
    toggleModal() {
      this.show = !this.show;
    },
    handleReset() {
      console.log('a');
      this.$v.password.$touch();
      this.$v.passwordAgain.$touch();
      if (!this.$v.$invalid) {
        if (this.password !== this.passwordAgain) {
          this.$message.error("两次不一致");
        } else {
          let id = localStorage.getItem('userId');
          console.log(id, this.password);
          resetPass(id, this.password).then(result => {
            console.log(result);
            if (result.code === 200) {
              alert("重置成功");
            } else {
              alert("用户名或者密码错误");
            }
          }).catch(err=>{
            console.log(err);
          })
        }
      }
    }
  },
  validations: {
    password: {
      required
    },
    passwordAgain: {
      required
    }
  }
};
</script>

<style lang="less" scoped>
.nav_container {
  margin: 0 auto;
  width: 1160px;
  display: flex;
  justify-content: space-between;
  font-size: 16px;
}

.reset_container {
  position: absolute;
  width: 100%;
  height: 200px;
  background-color: steelblue;
}

.inp_container {
  height: 40px;
}

.error {
  text-align: left;
  color: red;
  padding-left: 35px;
}
</style>