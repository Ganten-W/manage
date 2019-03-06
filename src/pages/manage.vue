<template>
  <div class="manage">
    <el-row style="height: 100%;">
      <el-col :span="3" style="height: 100%; background-color: #324057;" :class="{width3:isCollapse}">
        <el-collapse-transition>
          <el-menu
            :collapse="isCollapse"
            class="el-menu-vertical-demo"
            :default-active="defaultActive"
            style="min-height: 100%;width: 100%;"
            background-color="#324057"
            text-color="#fff"
            active-text-color="#409eff"
            router>
            <el-menu-item index="manage" :class="{marginL10:isCollapse}">
              <i class="el-icon-menu"></i>
              <span slot="title">首页</span>
            </el-menu-item>
            <el-submenu index="2" :class="{marginL10:isCollapse}">
              <template slot="title">
                <i class="el-icon-goods"></i>
                <span>商品</span>
              </template>
              <el-menu-item index="goods-class">
                <i class="el-icon-menu"></i>
                <span slot="title">商品分类</span>
              </el-menu-item>
            </el-submenu>
            <el-submenu index="3" :class="{marginL10:isCollapse}">
              <template slot="title">
                <i class="el-icon-document"></i>
                <span>订单</span>
              </template>
              <el-menu-item index="data-monitor">
                <i class="el-icon-menu"></i>
                <span slot="title">数据监控</span>
              </el-menu-item>
            </el-submenu>
            <el-submenu index="4" :class="{marginL10:isCollapse}">
              <template slot="title">
                <i class="el-icon-star-on"></i>
                <span>营销</span>
              </template>
              <el-menu-item index="manage">
                <i class="el-icon-menu"></i>
                <span slot="title">首页</span>
              </el-menu-item>
            </el-submenu>
          </el-menu>
        </el-collapse-transition>
      </el-col>
      <el-collapse-transition>
        <el-col :span="21" :class="{width97:isCollapse}"
                style="height: 100%;background-color: #f5f5f5; overflow: auto;">
          <head-top @showL="showL"></head-top>
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </el-col>
      </el-collapse-transition>
    </el-row>
  </div>
</template>

<script>
  import headTop from "@/components/headTop"

  export default {
    data() {
      return {
        isCollapse: false,
      }
    },
    computed: {
      defaultActive: function () {
        return this.$route.path.replace('/', '');
      }
    },
    components: {
      headTop
    },
    methods: {
      showL(show) {
        this.isCollapse = show;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .width3 {
    width: 3%;
  }

  .width97 {
    width: 97%;
  }

  .marginL10 {
    margin-left: -10px;
  }

  .manage {
    width: 100%;
    height: 100%;
  }
</style>
