<template>
  <div class="data-monitor">
    <el-row class="tableName">
      <el-col :span="12">CBI数据同步监控系统</el-col>
      <el-col :span="12" style="text-align: right;">
        <el-button
          type="primary"
          icon="el-icon-plus"
          style="width: 120px;"
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
      <el-form
        :model="form"
        label-width="140px"
        label-position="left"
        ref="formName"
        :rules="rules">
        <el-form-item label="表格名称" prop="tableName">
          <el-input v-model="form.tableName" size="small" clearable></el-input>
        </el-form-item>
        <el-form-item label="负责人" prop="name">
          <el-input v-model="form.name" size="small" clearable></el-input>
        </el-form-item>
        <el-form-item label="Process ID" prop="id">
          <el-input v-model="form.id" size="small" clearable></el-input>
        </el-form-item>
        <el-form-item label="Process ID负责人" prop="idName">
          <el-input v-model="form.idName" size="small" clearable></el-input>
        </el-form-item>
        <el-form-item label="更新日期" prop="date">
          <el-date-picker
            clearable
            type="date"
            placeholder="选择日期"
            v-model="form.date"
            value-format="yyyy-MM-dd"
            style="width: 100%;">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="数据量" prop="number">
          <el-input v-model="form.number" size="small" clearable></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button
          type="primary"
          @click="addTable('formName')"
          round size="small">
          提交
        </el-button>
        <el-button @click="clearError('formName')" round size="small">
          取消
        </el-button>
      </div>
    </el-dialog>
    <el-row style="padding: 0 20px;">
      <el-col :span="24">
        <!--数据分页-->
        <el-table
          :data="tableData1"
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
              <i class="el-icon-delete"
                 @click="handleDelete(scope.$index, scope.row)"></i>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
    <el-dialog
      title="修改监控"
      width="35%"
      center
      :visible.sync="dialogFormVisible2">
      <el-form
        :model="form2"
        label-width="140px"
        label-position="left"
        ref="formName1"
        :rules="rules2">
        <el-form-item label="表格名称" prop="tableName">
          <el-input v-model="form2.tableName" size="small" clearable></el-input>
        </el-form-item>
        <el-form-item label="负责人" prop="name">
          <el-input v-model="form2.name" size="small" clearable></el-input>
        </el-form-item>
        <el-form-item label="Process ID" prop="id">
          <el-input v-model="form2.id" size="small" clearable></el-input>
        </el-form-item>
        <el-form-item label="Process ID负责人" prop="idName">
          <el-input v-model="form2.idName" size="small" clearable></el-input>
        </el-form-item>
        <el-form-item label="更新日期" prop="date">
          <el-date-picker
            clearable
            type="date"
            placeholder="选择日期"
            v-model="form2.date"
            value-format="yyyy-MM-dd"
            style="width: 100%;">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="数据量" prop="number">
          <el-input v-model="form2.number" size="small" clearable></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button
          type="primary"
          @click="changeTable('formName1')"
          round size="small">
          保存
        </el-button>
        <el-button @click="clearError1('formName1')" round size="small">
          取消
        </el-button>
      </div>
    </el-dialog>
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
    data() {
      return {
        dialogFormVisible: false,
        dialogFormVisible2: false,
        form: {
          tableName: '',
          name: '',
          id: '',
          idName: '',
          date: '',
          number: ''
        },
        rules: {
          tableName: [
            {required: true, message: '请输入表格名称', trigger: 'blur'}
          ],
          name: [
            {required: true, message: '请输入负责人', trigger: 'blur'}
          ],
          id: [
            {required: true, message: '请输入ID', trigger: 'blur'}
          ],
          idName: [
            {required: true, message: '请输入ID负责人', trigger: 'blur'}
          ],
          date: [
            {required: true, message: '请输入更新日期', trigger: 'blur'}
          ],
          number: [
            {required: true, message: '请输入数量', trigger: 'blur'}
          ],
        },
        rules2: {
          tableName: [
            {required: true, message: '请输入表格名称', trigger: 'blur'}
          ],
          name: [
            {required: true, message: '请输入负责人', trigger: 'blur'}
          ],
          id: [
            {required: true, message: '请输入ID', trigger: 'blur'}
          ],
          idName: [
            {required: true, message: '请输入ID负责人', trigger: 'blur'}
          ],
          date: [
            {required: true, message: '请输入更新日期', trigger: 'blur'}
          ],
          number: [
            {required: true, message: '请输入数量', trigger: 'blur'}
          ],
        },
        form2: '',
        form3: '',
        tableData: [
          {
            tableName: '',
            name: 'Nella Gerhold',
            id: '1',
            idName: 'Bernadette Schuster',
            date: '2019-12-11',
            number: ''
          },
          {
            tableName: '',
            name: 'Nella Gerhold',
            id: '2',
            idName: 'Bernadette Schuster',
            date: '2019-12-11',
            number: ''
          },
          {
            tableName: '',
            name: 'Nella Gerhold',
            id: '3',
            idName: 'Bernadette Schuster',
            date: '2019-12-11',
            number: ''
          },
          {
            tableName: '',
            name: 'Nella Gerhold',
            id: '4',
            idName: 'Bernadette Schuster',
            date: '2019-12-11',
            number: ''
          },
          {
            tableName: '',
            name: 'Nella Gerhold',
            id: '5',
            idName: 'Bernadette Schuster',
            date: '2019-12-11',
            number: ''
          },
          {
            tableName: '',
            name: 'Nella Gerhold',
            id: '6',
            idName: 'Bernadette Schuster',
            date: '2019-12-11',
            number: ''
          },
          {
            tableName: '',
            name: 'Nella Gerhold',
            id: '7',
            idName: 'Bernadette Schuster',
            date: '2019-12-11',
            number: ''
          },
          {
            tableName: '',
            name: 'Nella Gerhold',
            id: '8',
            idName: 'Bernadette Schuster',
            date: '2019-12-11',
            number: ''
          }
        ],
        index: '',
        currentPage: 1,
        pageSize: 5,
      }
    },
    computed: {
      tableData1() {
        return this.tableData.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize)
      }
    },

    methods: {
      //添加错误监控
      addTable(formName) {
        this.$refs[formName].validate((valid) => {
          console.log(valid);
          if (valid) {
            this.tableData.push(this.form);
            this.dialogFormVisible = false;
            this.form = {
              tableName: '',
              name: '',
              id: '',
              idName: '',
              date: '',
              number: ''
            };
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      //关闭新建监控 清除错误提示
      clearError(formName) {
        this.dialogFormVisible = false;
        this.$refs[formName].clearValidate();
        this.form = {
          tableName: '',
          name: '',
          id: '',
          idName: '',
          date: '',
          number: ''
        };
      },
      //关闭修改监控 清除错误提示
      clearError1(formName1) {
        this.dialogFormVisible2 = false;
        this.$refs[formName1].clearValidate();
      },
      // 修改监控
      changeTable(formName1) {
        this.$refs[formName1].validate((valid) => {
          console.log(valid);
          if (valid) {
            console.log(this.index);
            this.tableData.splice(this.index, 1, this.form2);
            this.dialogFormVisible2 = false;
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      //弹出框 编辑内容
      handleEdit(param1, param2) {
        this.dialogFormVisible2 = true;
        this.index = param1;
        //el-dialog弹框 编辑表格每一行的内容
        this.form2 = Object.assign({}, param2);
      },
      //删除此行数据
      handleDelete(param1, param2) {
        this.$confirm('是否要删除该产品', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          console.log((this.currentPage - 1) * this.pageSize + param1);
          this.tableData.splice((this.currentPage - 1) * this.pageSize + param1, 1);
          this.$message.success('删除成功!');
        }).catch(() => {
          this.$message.info('已取消删除');
        });
      },
      //当前页条数
      handleSizeChange(val) {
        this.pageSize = val;
      },
      // 当前页数
      handleCurrentChange(val) {
        this.currentPage = val;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .el-button {
    width: 100px;
  }

  .data-monitor {
    .tableName {
      padding: 0 40px;
      font-size: 20px;
      height: 60px;
      line-height: 60px;
      color: #666;
      font-weight: 600;
    }

    .el-icon-edit-outline, .el-icon-delete {
      font-size: 20px;
      color: #1296DB;
    }

    .el-icon-delete {
      padding-left: 10px;
    }
  }
</style>
