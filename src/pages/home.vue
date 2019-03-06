<template>
  <div class="home">

    <el-row>
      <el-col :span="8" :offset="3" class="url">
        <p class="p1">GitHub地址</p>
        <p class="p2"><a href="https://github.com/macrozheng/mall">https://github.com/macrozheng/mall</a></p>
      </el-col>
      <el-col :span="8" :offset="1" class="url">
        <p class="p1">码云地址</p>
        <p class="p2"><a href="https://gitee.com/macrozheng/mall">https://gitee.com/macrozheng/mall</a></p>
      </el-col>
    </el-row>
  </div>
</template>

<script>

  export default {
    data() {
      return {}
    },
    components: {},
    methods: {},
    watch: {}
  }
</script>

<style lang="scss" scoped>
  .home {
    .url {
      margin-top: 60px;
      border: 1px solid #dcdfe6;

      .p1 {
        color: #606266;
        padding: 15px 20px;
        background: #f2f6fc;
        font-weight: 700;
      }

      .p2 {
        padding: 20px;
        font-size: 18px;

        a {
          color: #409eff;
          cursor: pointer;
          text-decoration: none;
        }
      }
    }
  }
</style>
