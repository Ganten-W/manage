<template>
  <div class="login">
    <div class="form-container">
      <div class="manage-title">
        <p>mall-admin-web</p>
      </div>
      <el-form :model="loginForm" ref="ruleForm2" class="loginForm" :rules="rules">
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
        url: '../../static/json/username.json',
        resData: '',
        loginForm: {
          username: "",
          password: ""
        },
        rules: {
          username: [
            {required: true, message: '请输入用户名', trigger: 'blur'},
          ],
          password: [
            {required: true, message: '请输入密码', trigger: 'blur'},
          ]
        },
      }
    },
    methods: {
      async getUsername() {
        let res = await this.axios.get(this.url);
        // console.log(res);
        this.resData = res.data;
        // console.log(this.resData)
      },
      //登录验证
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // console.log(this.loginForm.username);
            for (let i = 0; i < this.resData.length; i++) {
              if (this.resData[i].username === this.loginForm.username) {
                if (this.resData[i].password === this.loginForm.password) {
                  this.$router.push("manage")
                  this.$message.success("登录成功")
                } else {
                  this.$message.error("密码错误")
                }
                break
              } else if (i === (this.resData.length - 1)) {
                this.$message.error("该用户名未注册")
              }
            }
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
    },
    created() {
      this.getUsername()
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

      .el-button {
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
