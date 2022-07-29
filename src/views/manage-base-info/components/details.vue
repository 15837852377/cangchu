<template>
  <div>
    <div class="divWarehouseAdd">
      <!-- 表单 -->
      <el-form class="divForm" :v-model="formDate">
        <el-row style="margin-left: -15px; margin-right: -15px">
          <el-col>
            <el-form-item label="仓库编码" prop="code">
              <el-input
                v-model="formDate.code"
                :disabled="true"
                placeholder="请输入"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col>
            <el-form-item label="仓库名称" prop="name">
              <el-input
                v-model="formDate.name"
                placeholder="请输入"
                :clearable="true"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col>
            <el-form-item label="仓库类型" prop="type">
              <el-select
                :clearable="true"
                v-model="formDate.type"
                placeholder="请选择"
                style="width: 100%"
                align="center"
              >
                <el-option label="中转仓" value="ZZ"></el-option>
                <el-option label="加工仓" value="JG"></el-option>
                <el-option label="储备仓" value="CB"></el-option>
                <el-option label="冷藏仓" value="LC"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row style="margin-left: -15px; margin-right: -15px">
          <el-col style="width: 66.6666666667%">
            <el-form-item label="省/市/区" prop="areaCode">
              <el-cascader
                :clearable="true"
                style="width: 100%"
                v-model="formDate.selectedOptions"
                :options="options"
                :props="{ expandTrigger: 'hover' }"
                @change="addressChange"
              ></el-cascader>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row style="margin-left: -15px; margin-right: -15px">
          <el-col style="width: 66.6666666667%">
            <el-form-item label="详细地址" prop="address">
              <el-input
                v-model="formDate.address"
                placeholder="请输入"
                :clearable="true"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col>
            <el-form-item label="仓库状态" :clearable="true" prop="status">
              <div class="radio">
                <el-radio v-model="formDate.status" label="1">启用</el-radio>
                <el-radio v-model="formDate.status" label="0">停用</el-radio>
              </div>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row style="margin-left: -15px; margin-right: -15px">
          <el-col>
            <el-form-item label="仓库面积" :clearable="true" prop="ssurface">
              <el-input
                v-model="formDate.surface"
                placeholder="请输入"
              ></el-input>
              <span class="el-input-group__append">m³</span>
            </el-form-item>
          </el-col>
          <el-col>
            <el-form-item label="负责人" :clearable="true" prop="personName">
              <el-input
                v-model="formDate.personName"
                placeholder="请输入"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col>
            <el-form-item label="联系电话" :clearable="true" prop="phone">
              <el-input
                v-model="formDate.phone"
                placeholder="请输入"
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <!-- 按钮 -->
      <div class="buttonBox">
        <el-button round class="unimportanceButton">返回</el-button>
        <el-button round class="unimportanceButton" @click="submit"
          >提交</el-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import { regionData, CodeToText } from 'element-china-area-data'
import { addWarehouse } from '@/api/manage-base-info'
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      formDate: {
        code: 'CK001003',
        name: '',
        type: '',
        address: '',
        surface: '',
        personName: '',
        phone: '',
        selectedOptions: [],
        status: '1'
      },
      options: regionData,
      form: {}
    }
  },
  created () {
    this.getter()
    // 初始化省市区
    this.selectedOptions = [
      this.form.provinceCode,
      this.form.cityCode,
      this.form.areaCode
    ]
  },
  computed: {
    ...mapGetters(['editlist'])
  },
  methods: {
    // 省/市/区
    addressChange (arr) {
      const _this = this
      console.log(arr)
      console.log(CodeToText[arr[0]], CodeToText[arr[1]], CodeToText[arr[2]])
      _this.form.provinceCode = arr[0]
      _this.form.cityCode = arr[1]
      _this.form.areaCode = arr[2]
    },
    // 如果编辑数据回显
    getter () {
      this.formDate = this.editlist
      console.log(this.formDate)
    },
    async submit () {
      await addWarehouse({
        ...this.formData
      })
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
