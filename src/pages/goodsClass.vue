<template>
  <div class="goods-class">

    <el-row class="card">
      <el-col :span="24">
        <el-card class="box-card" shadow="never">
          <span style="font-size: 16px;"><i class="el-icon-tickets"></i>&nbsp数据列表</span>
          <el-button style="float: right;" size="mini">添加</el-button>
        </el-card>
      </el-col>
      <!--<el-col :span="12"><i class="el-icon-tickets"></i>数据列表</el-col>-->
      <!--<el-col :span="12"><el-button >添加</el-button></el-col>-->
    </el-row>
    <el-row>
      <el-col :span="24" style="padding: 0 20px;">
        <el-table
          :data="tableData"
          border
          style="width: 100%">
          <el-table-column
            prop="serialNum"
            label="编号">
          </el-table-column>
          <el-table-column
            prop="className"
            label="分类名称">
          </el-table-column>
          <el-table-column
            prop="level"
            label="级别">
          </el-table-column>
          <el-table-column
            prop="number"
            label="商品数量">
          </el-table-column>
          <el-table-column
            prop="units"
            label="数量单位">
          </el-table-column>
          <el-table-column
            prop="navBar"
            label="导航栏">
            <template slot-scope="scope">
              <el-switch
                v-model="scope.row.navBar"
                @change="activeText($event, scope.row)"
              ></el-switch>
            </template>
          </el-table-column>
          <el-table-column
            prop="ifShow"
            label="是否显示">
            <template slot-scope="scope">
              <el-switch v-model="scope.row.ifShow"></el-switch>
            </template>
          </el-table-column>
          <el-table-column
            prop="sort"
            label="排序">
          </el-table-column>
          <el-table-column label="设置" width="200px" show-overflow-tooltip>
            <template>
              <el-button size="mini">查看下级</el-button>
              <el-button size="mini">转移商品</el-button>
            </template>
          </el-table-column>
          <el-table-column label="操作" width="200px" show-overflow-tooltip>
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)">编辑
              </el-button>
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">删除
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24" style="padding: 20px;text-align: right;">
        <el-pagination
          :current-page="currentPage"
          :page-sizes="[5, 10, 15, 20]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="this.tableData.length">
        </el-pagination>
      </el-col>
    </el-row>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        tableData: [
          {
            serialNum: '1',
            className: '服装',
            level: '一级',
            number: '100',
            units: '件',
            navBar: true,
            ifShow: true,
            sort: '1',
          },
          {
            serialNum: '2',
            className: '手机数码',
            level: '一级',
            number: '100',
            units: '件',
            navBar: true,
            ifShow: true,
            sort: '1',
          },
          {
            serialNum: '3',
            className: '家用电器',
            level: '一级',
            number: '100',
            units: '件',
            navBar: false,
            ifShow: false,
            sort: '1',
          },
          {
            serialNum: '4',
            className: '家用家装',
            level: '一级',
            number: '100',
            units: '件',
            navBar: true,
            ifShow: true,
            sort: '1',
          },
          {
            serialNum: '5',
            className: '汽车用品',
            level: '一级',
            number: '100',
            units: '件',
            navBar: true,
            ifShow: true,
            sort: '1',
          },
        ],
        currentPage:1,
      }
    },
    components: {

    },
    methods: {
      activeText(param1, param2) {
        console.log(param1, param2)
      },
      handleEdit(param1, param2) {
        // console.log(param1,param2);
        this.$alert(param2)
      },
      handleDelete(param1, param2) {
        // console.log(param1,param2)
        this.$confirm('是否要删除该产品', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.tableData.splice(param1, 1);
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      }
    }
  }
</script>

<style lang="scss" scoped>
  .goods-class {
    .card {
      margin: 40px 20px 20px;
    }
  }
</style>
