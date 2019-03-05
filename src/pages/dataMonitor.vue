<template>
  <div class="data-monitor">
    <el-row class="tableName">
      <el-col :span="12">CBI数据同步监控系统</el-col>
      <el-col :span="12" style="text-align: right;">
        <el-button
          type="primary"
          icon="el-icon-plus"
          round
          @click="dialogFormVisible= true">
          新建监控
        </el-button>
      </el-col>
    </el-row>
    <el-dialog
      title="新建监控"
      width="35%"
      center
      :visible.sync="dialogFormVisible">
      <el-form :model="form" label-width="130px" label-position="left">
        <el-form-item label="表格名称">
          <el-input v-model="form.tableName" size="small" clearable></el-input>
        </el-form-item>
        <el-form-item label="负责人">
          <el-input v-model="form.name" size="small" clearable></el-input>
        </el-form-item>
        <el-form-item label="Process ID">
          <el-input v-model="form.id" size="small" clearable></el-input>
        </el-form-item>
        <el-form-item label="Process ID负责人">
          <el-input v-model="form.idName" size="small" clearable></el-input>
        </el-form-item>
        <el-form-item label="更新日期">
          <el-input v-model="form.date" size="small" clearable></el-input>
        </el-form-item>
        <el-form-item label="数据量">
          <el-input v-model="form.number" size="small" clearable></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="addTable()"
                   round size="small">
          &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp提交&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
        </el-button>
        <el-button @click="dialogFormVisible = false" round size="small">
          &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp取消&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
        </el-button>
      </div>
    </el-dialog>
    <el-row style="padding: 0 20px;">
      <el-col :span="24">
        <!--数据分页-->
          <el-table
            :data="tableData.slice((currentPage-1)*pageSize,currentPage*pageSize)"
            border
            tooltip-effect="dark"
            style="width: 100%">
            <el-table-column type="selection">
            </el-table-column>
            <el-table-column
              prop="tableName"
              label="表格名称">
            </el-table-column>
            <el-table-column
              prop="name"
              label="负责人"
              show-overflow-tooltip>
            </el-table-column>
            <el-table-column
              prop="id"
              label="Process ID">
            </el-table-column>
            <el-table-column
              prop="idName"
              label="Process ID负责人"
              show-overflow-tooltip>
            </el-table-column>
            <el-table-column
              prop="date"
              label="更新日期">
            </el-table-column>
            <el-table-column
              prop="number"
              label="数量">
            </el-table-column>
            <el-table-column label="操作" show-overflow-tooltip>
              <template slot-scope="scope">
                <i class="el-icon-edit-outline"
                   @click="handleEdit(scope.$index, scope.row)"></i>
                <el-dialog
                  title="修改监控"
                  width="35%"
                  center
                  :visible.sync="dialogFormVisible2">
                  <el-form :model="form2" label-width="130px" label-position="left">
                    <el-form-item label="表格名称">
                      <el-input v-model="form2.tableName" size="small" clearable></el-input>
                    </el-form-item>
                    <el-form-item label="负责人">
                      <el-input v-model="form2.name" size="small" clearable></el-input>
                    </el-form-item>
                    <el-form-item label="Process ID">
                      <el-input v-model="form2.id" size="small" clearable></el-input>
                    </el-form-item>
                    <el-form-item label="Process ID负责人">
                      <el-input v-model="form2.idName" size="small" clearable></el-input>
                    </el-form-item>
                    <el-form-item label="更新日期">
                      <el-input v-model="form2.date" size="small" clearable></el-input>
                    </el-form-item>
                    <el-form-item label="数据量">
                      <el-input v-model="form2.number" size="small" clearable></el-input>
                    </el-form-item>
                  </el-form>
                  <div slot="footer" class="dialog-footer">
                    <el-button type="primary" @click="changeTable(scope.$index, scope.row)"
                               round size="small">
                      &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp保存&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
                    </el-button>
                    <el-button @click="dialogFormVisible2 = false" round size="small">
                      &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp取消&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
                    </el-button>
                  </div>
                </el-dialog>
                <i class="el-icon-delete"
                   @click="handleDelete(scope.$index, scope.row)"></i>
              </template>
            </el-table-column>
          </el-table>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24" style="padding: 20px;text-align: right;">
        <!--数据分页-->
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[5,10, 15, 20]"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="this.tableData.length">
        </el-pagination>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        dialogFormVisible: false,
        dialogFormVisible2: false,
        form: {
          tableName:'',
          name:'',
          id:'',
          idName:'',
          date:'',
          number:''
        },
        form2: {
          tableName:'',
          name:'',
          id:'',
          idName:'',
          date:'',
          number:''
        },
        tableData:[
          {
            tableName:'',
            name:'Nella Gerhold',
            id:'1',
            idName:'Bernadette Schuster',
            date:'2019-12-11',
            number:''
          },
          {
            tableName:'',
            name:'Nella Gerhold',
            id:'2',
            idName:'Bernadette Schuster',
            date:'2019-12-11',
            number:''
          },
          {
            tableName:'',
            name:'Nella Gerhold',
            id:'3',
            idName:'Bernadette Schuster',
            date:'2019-12-11',
            number:''
          },
          {
            tableName:'',
            name:'Nella Gerhold',
            id:'4',
            idName:'Bernadette Schuster',
            date:'2019-12-11',
            number:''
          },
          {
            tableName:'',
            name:'Nella Gerhold',
            id:'5',
            idName:'Bernadette Schuster',
            date:'2019-12-11',
            number:''
          },
          {
            tableName:'',
            name:'Nella Gerhold',
            id:'6',
            idName:'Bernadette Schuster',
            date:'2019-12-11',
            number:''
          },
          {
            tableName:'',
            name:'Nella Gerhold',
            id:'7',
            idName:'Bernadette Schuster',
            date:'2019-12-11',
            number:''
          },
          {
            tableName:'',
            name:'Nella Gerhold',
            id:'8',
            idName:'Bernadette Schuster',
            date:'2019-12-11',
            number:''
          }
        ],
        index:'',
        currentPage:1,
        pageSize:5,
      }
    },

    methods:{
      addTable(){
        this.tableData.push(this.form);
        this.dialogFormVisible = false;
        this.form={
          tableName:'',
          name:'',
          id:'',
          idName:'',
          date:'',
          number:''}
      },
      changeTable(param1,param2){
        console.log(this.index);
        this.tableData.splice(this.index,1,this.form2)
        this.dialogFormVisible2 = false;
        this.form2={
          tableName:'',
          name:'',
          id:'',
          idName:'',
          date:'',
          number:''}
      },

      handleEdit(param1,param2){
        this.dialogFormVisible2 = true;
        this.index=param1;
      },
      handleDelete(param1,param2){
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
      },
      handleSizeChange(val) {
        this.pageSize = val;
      },
      handleCurrentChange(val) {
        this.currentPage = val;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .data-monitor{
    .tableName{
      padding: 0 40px;
      font-size: 20px;
      height: 60px;
      line-height: 60px;
      color: #666;
      font-weight: 600;
    }
    .el-icon-edit-outline,.el-icon-delete{
      font-size: 20px;
      color: #1296DB;
    }
    .el-icon-delete{
      padding-left: 10px;
    }
  }
</style>
