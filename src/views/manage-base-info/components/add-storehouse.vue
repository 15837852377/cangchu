<template>
  <div>
    <div class="divWarehouseAdd">
      <!-- 表单 -->
      <el-form class="divForm">
        <el-row style="margin-left: -15px; margin-right: -15px">
          <el-col>
            <el-form-item label="仓库编码">
              <el-input
                v-model="bianma"
                :disabled="true"
                placeholder="请输入"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col>
            <el-form-item label="仓库名称">
              <el-input
                v-model="mingcheng"
                placeholder="请输入"
                :clearable="true"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col>
            <el-form-item label="仓库类型">
              <el-select
                :clearable="true"
                v-model="state"
                placeholder="请选择"
                style="width: 100%"
                align="center"
              >
                <el-option label="中转仓" value="zhongzhuan"></el-option>
                <el-option label="加工仓" value="jiagong"></el-option>
                <el-option label="储备仓" value="chubei"></el-option>
                <el-option label="冷藏仓" value="lengcang"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row style="margin-left: -15px; margin-right: -15px">
          <el-col style="width: 66.6666666667%">
            <el-form-item label="省/市/区">
              <el-cascader
                :clearable="true"
                style="width: 100%"
                v-model="diqu"
                :options="options"
                :props="{ expandTrigger: 'hover' }"
                @change="handleChange"
              ></el-cascader>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row style="margin-left: -15px; margin-right: -15px">
          <el-col style="width: 66.6666666667%">
            <el-form-item label="详细地址">
              <el-input
                v-model="dizhi"
                placeholder="请输入"
                :clearable="true"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col>
            <el-form-item label="仓库状态" :clearable="true">
              <div class="radio">
                <el-radio v-model="radio" label="1">启用</el-radio>
                <el-radio v-model="radio" label="2">停用</el-radio>
              </div>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row style="margin-left: -15px; margin-right: -15px">
          <el-col>
            <el-form-item label="仓库面积" :clearable="true">
              <el-input v-model="mianji" placeholder="请输入"></el-input>
              <span class="el-input-group__append">m³</span>
            </el-form-item>
          </el-col>
          <el-col>
            <el-form-item label="负责人" :clearable="true">
              <el-input v-model="fuzeren" placeholder="请输入"></el-input>
            </el-form-item>
          </el-col>
          <el-col>
            <el-form-item label="联系电话" :clearable="true">
              <el-input v-model="dianhua" placeholder="请输入"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <!-- 按钮 -->
      <div class="buttonBox">
        <el-button round class="unimportanceButton">返回</el-button>
        <el-button round class="unimportanceButton">提交</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      bianma: 'CK001003',
      mingcheng: '',
      // ------------
      state: '',
      zhongzhuan: '',
      jiagong: '',
      chubei: '',
      lengcang: '',
      // -------------
      diqu: '',
      options: [],
      // -------------
      dizhi: '',
      mianji: '',
      fuzeren: '',
      dianhua: '',

      radio: '1'
    }
  },
  methods: {
    handleChange () {
      console.log(111)
    }
  }
}
</script>

<style scoped lang="less">
.divWarehouseAdd {
  height: 509px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 0 6px 0 rgb(144 142 142 / 17%);
  margin-top: 20px;
  margin-left: 29px;
  margin-right: 29px;
  padding-top: 31px;
  padding-bottom: 30px;
  // 表单
  .divForm {
    padding-left: 30px;
    padding-right: 30px;
    .el-col {
      width: 33.3333333333%;
      padding-left: 15px;
      padding-right: 15px;
      float: left;
      box-sizing: border-box;
      .el-form-item {
        margin-bottom: 30px;
        /deep/.el-form-item__label {
          color: #887e7e;
          margin-bottom: 10px;
          font-size: 12px !important;
          font-family: PingFangSC, PingFangSC-Medium;
          font-weight: 500;
          padding: 0 12px 0 5px;
        }
        .radio {
          width: 100%;
          display: inline-block;
          line-height: 1;
          vertical-align: middle;
        }
        .el-input {
          position: relative;
          font-size: 14px;
          display: inline-block;
          width: 100%;
          /deep/.el-input__inner {
            background: #f8f5f5;
            border-color: #f3ebeb;
            color: #b5abab;
            height: 40px;
            line-height: 40px;
            border-radius: 6px;
          }
        }
        .el-input-group__append {
          width: 40px;
          height: 40px;
          background: #e7dfdf;
          border-radius: 0 6px 6px 0;
          padding: 0 10px;
          border: 0;
        }
      }
      /deep/.el-input__inner {
        width: 100%;
        background: #f8f5f5;
      }
    }
  }
  // 按钮
  .buttonBox {
    padding: 25px 0 0;
    margin: 0 -30px -5px;
    border-top: 1px solid #f5efee;
    text-align: center;
    .unimportanceButton {
      background: #f8f5f5;
      color: #332929;
      width: 170px;
      margin: 0 15px;
    }
    .unimportanceButton:nth-child(2) {
      background: #ffb200;
    }
  }
}
</style>
