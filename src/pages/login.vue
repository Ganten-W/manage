<template>
  <div class="login">
    <div class="form-container">
      <div class="manage-title">
        <p>mall-admin-web</p>
      </div>
      <el-form :model="loginForm" ref="ruleForm2" class="loginForm">
        <el-form-item prop="username">
          <el-input v-model="loginForm.username" placeholder="用户名" clearable></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" v-model="loginForm.password" placeholder="密码" clearable></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm2')">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        loginForm: {
          username: 'admin',
          password: '123'
        }
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$router.push("manage")
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
    }
  }
</script>

<style lang="scss" scoped>
  .login {
    width: 100%;
    height: 100%;
    background-color: #324057;

    .form-container {
      position: absolute;
      top: 50%;
      left: 50%;
      margin-top: -105px;
      margin-left: -160px;
      width: 320px;
      height: 210px;
      padding: 25px;
      background: #fff;
      text-align: center;
      -webkit-border-radius: 5px;
      -moz-border-radius: 5px;
      border-radius: 5px;
      .el-button{
        width: 100%;
      }
      .manage-title {
        position: absolute;
        top: -100px;
        left: 0;
        width: 100%;
        font-size: 34px;
        color: #fff;
      }
    }
  }
</style>
