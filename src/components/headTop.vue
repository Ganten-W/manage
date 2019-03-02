<template>
  <div class="head-top">
    <el-row>
      <el-col :span="1" class="icon">
          <i class="el-icon-rank" @click="showL()"></i>
      </el-col>
      <el-col :span="10">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/manage' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item v-for="(item, index) in $route.meta" :key="index">{{item}}
          </el-breadcrumb-item>
        </el-breadcrumb>
        </el-col>
      <el-col :span="12" style="text-align: right;">
        <el-dropdown trigger="click">
          <span class="el-dropdown-link">
            下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>首页</el-dropdown-item>
            <el-dropdown-item>退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'headTop',
    data() {
      return{
        show:false,
      }
    },
    methods:{
      showL(){
        this.show=!this.show
        this.$emit('showL', this.show)
      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .head-top {
    height: 50px;
    line-height: 50px;
    text-align: center;
    border-bottom: 1px solid #dcdfe6;
    .el-breadcrumb{
      height: 50px;
      line-height: 50px;
    }
    .icon {
      font-size: 24px;
    }
  }
</style>
