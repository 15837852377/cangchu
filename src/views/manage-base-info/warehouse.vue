<template>
  <div>
    <div class="divWarehouse">
      <!-- 头部搜索栏 -->
      <div class="divHead">
        <!-- 输入框 -->
        <div class="serchForm">
          <el-row style="margin-left: -15px; margin-right: -15px">
            <el-col>
              <div class="divLable">仓库编号</div>
              <el-input v-model="input" placeholder="请输入"></el-input>
            </el-col>
            <el-col>
              <div class="divLable">库位名称</div>
              <el-input v-model="input" placeholder="请输入"></el-input>
            </el-col>
            <el-col>
              <div class="divLable">库位状态</div>
              <el-form :inline="true">
                <el-select
                  v-model="state"
                  placeholder="请选择"
                  style="background-color: #f8f5f5"
                  align="center"
                >
                  <el-option label="全部" value="all"></el-option>
                  <el-option label="停用" value="stop"></el-option>
                  <el-option label="启用" value="start"></el-option>
                </el-select>
              </el-form>
            </el-col>
          </el-row>
        </div>
        <div class="textRight">
          <el-button round class="btn1">搜索</el-button>
          <el-button round class="btn2">重置</el-button>
        </div>
        <!-- 按钮 -->
      </div>
      <!-- 表单区域 -->
      <div class="divContent">
        <el-button
          round
          class="addbtn"
          @click="$router.push('/manage-base-info/warehouse/addstorehouse')"
          >新增仓库</el-button>
        <div class="divContent-bottom">
          <!-- 表格 -->
          <div class="biaoge">
            <el-table
              :data="warehouse"
              style="width: 100%"
              border
              :stripe="true"
              :header-cell-style="{ 'text-align': 'center' }"
              :cell-style="{ 'text-align': 'center' }"
            >
              <el-table-column type="index" label="序号" width="68">
              </el-table-column>
              <el-table-column prop="code" label="仓库编码" width="150">
              </el-table-column>
              <el-table-column prop="name" label="仓库名称" width="150">
              </el-table-column>
              <el-table-column prop="type" label="仓库类型" width="150">
              </el-table-column>
              <el-table-column prop="location" label="省/市/区" width="200">
              </el-table-column>
              <el-table-column prop="address" label="详细地址" width="150">
              </el-table-column>
              <el-table-column label="仓库状态" width="150"> </el-table-column>
              <el-table-column
                prop="surface"
                label="仓库面积m²"
                width="150"
              ></el-table-column>
              <el-table-column prop="includedNum" label="库区数量" width="150">
              </el-table-column>
              <el-table-column prop="personName" label="负责人" width="150">
              </el-table-column>
              <el-table-column prop="phone" label="联系电话" width="150">
              </el-table-column>
              <el-table-column prop="createTime" label="更新时间" width="200">
              </el-table-column>
              <el-table-column fixed="right" label="操作" width="180">
                <template slot-scope="scope">
                  <el-button
                    @click.native.prevent="deleteRow(scope.$index, tableData)"
                    type="text"
                    size="small"
                  >
                    编辑
                  </el-button>
                  <el-button
                    @click.native.prevent="deleteRow(scope.$index, tableData)"
                    type="text"
                    size="small"
                  >
                    停用
                  </el-button>
                  <el-button
                    @click.native.prevent="deleteRow(scope.$index, tableData)"
                    type="text"
                    size="small"
                  >
                    删除
                  </el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
          <!-- 分页 -->
          <div class="paging">
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="currentPage"
              :page-sizes="[10, 20, 30, 40]"
              :page-size="10"
              layout="total, sizes, prev, pager, next, jumper"
              :total="4"
            >
            </el-pagination>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getWarehouse } from '@/api/manage-base-info'
export default {
  data () {
    return {
      input: '',
      // 表格数组数组
      warehouse: [],
      // 三个状态
      all: '',
      stop: '',
      start: '',
      state: '',
      currentPage: 1
    }
  },
  created () {
    this.getWarehouse()
  },
  methods: {
    async getWarehouse () {
      const res = await getWarehouse()
      console.log(res)
      this.warehouse = res.data.data.records
    },
    onSubmit () {
      console.log('submit!')
    },
    // 分页
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    }
  }
}
</script>

<style scoped lang="less">
.divWarehouse {
  margin: 20px 30px 30px;
  // 头部搜索栏
  .divHead {
    height: 127px;
    padding: 30px;
    margin-bottom: 20px;
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 0 6px 0 rgb(144 142 142 / 17%);
    // 输入框
    .serchForm {
      width: 78%;
      display: inline-block;
      .el-col {
        width: 33.3333333333%;
        padding-left: 15px;
        padding-right: 15px;
        float: left;
        box-sizing: border-box;
        .divLable {
          color: #887e7e;
          margin-bottom: 10px;
          height: 18px;
          font-size: 12px;
          font-family: PingFangSC, PingFangSC-Medium;
          font-weight: 500;
        }
        .el-input {
          position: relative;
          font-size: 14px;
          display: inline-block;
          width: 100%;
          /deep/.el-input__inner {
            height: 40px;
            line-height: 40px;
            border: 1px solid #f8f5f5;
            background: #f8f5f5;
            border-radius: 6px;
            padding-left: 12px;
            padding-right: 12px;
          }
        }
        /deep/.el-input__inner {
          background: #f8f5f5;
        }
      }
    }
    // 按钮
    .textRight {
      padding: 28px 0 0;
      float: right;
      .btn1 {
        margin-right: 10px;
        background: #ffb200;
        color: #332929;
      }
      .btn2 {
        background: #f8f5f5;
        color: #332929;
      }
    }
  }
  // 表单区域
  .divContent {
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 0 6px 0 rgb(144 142 142 / 17%);
    // 输入框
    .addbtn {
      margin-left: 30px;
      margin-top: 20px;
      margin-bottom: 20px;
      background: #00be76;
      color: #fff;
    }
    // 表格
    .divContent-bottom {
      .biaoge {
        /deep/.el-table__row {
          height: 44px;
        }
      }
    }
    // 分页
    .paging {
      text-align: center;
      padding-top: 18px;
      padding-bottom: 34px;
    }
  }
}
</style>
