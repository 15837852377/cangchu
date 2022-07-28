<template>
  <div class="echarts">
    <!-- 出库入库信息 -->
    <div class="inout-charts">
      <!-- 头部字体 -->
      <div class="header">
        <!-- 左边字体 -->
        <div class="laoliu">
          <p class="subject">入库/出库信息</p>
        </div>
        <!-- 右边按钮 -->
        <div class="liuzi">
          <div class="threebtn">
            <el-button-group>
              <el-button @click="threebtn('w')">本周</el-button>
              <el-button @click="threebtn('e')">本月</el-button>
              <el-button @click="threebtn('c')">全年</el-button>
            </el-button-group>
          </div>
        </div>
      </div>
      <!-- 柱状图 -->
      <div class="chart">
        <div id="myChart" class="mchart"></div>
      </div>
    </div>
    <!-- 库存区使用情况 -->
    <div class="libs">
      <!-- 左部分 -->
      <div class="libs-left">
        <!-- 头部字体 -->
        <div class="laoliu">
          <p class="subject">库存使用情况</p>
        </div>
        <!-- 库存使用情况饼图 -->
        <div class="libs-chart">
          <div id="myChart2" class="myChart2"></div>
        </div>
      </div>
      <!-- 右部分 -->
      <div class="libs-right">
        <!-- 头部字体 -->
        <div class="laoliu">
          <p class="subject">库区使用情况</p>
        </div>
        <!-- 库区使用情况饼图 -->
        <div class="libs-charts">
          <div id="myChart3" class="myChart3"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getGoout, getstock } from '@/api/home'
export default {
  name: 'hello',
  data () {
    return {
      // 出入库信息
      option: {
        legend: { top: 'bottom' },
        xAxis: {
          type: 'category',
          data: []
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '入库',
            data: [],
            type: 'bar',
            color: '#ff7100'
          },
          {
            name: '出库',
            data: [],
            type: 'bar',
            color: '#ffb200'
          }
        ]
      },
      options: {
        series: [
          {
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '14',
                fontWeight: 'bold',
                color: ['#e4dbda', '#ffaa00']
              }
            },
            labelLine: {
              show: false
            },
            color: ['#e4dbda', '#ffaa00'],
            data: [
              { value: '', name: '' },
              { value: '', name: '' }
            ]
          }
        ]
      },
      option2: {
        color: ['#0076ff', '#52d4f3', '#5d7092', '#ffb200', '#ff7100'],
        tooltip: {
          trigger: 'item',
          formatter: ' {b}：{d}%',
          backgroundColor: 'rgba(50,50,50,0.7)',
          textStyle: {
            color: '#fff'
          }
        },
        legend: {
          orient: 'vertical',
          right: '30%',
          top: '20%',
          icon: 'circle', // 设为圆形
          selectedMode: false, // 禁止选定
          itemGap: 20,
          itemWidth: 15,
          // 使用回调函数
          formatter: function (name) {
            const data = [
              { value: 348, name: '拣货区' },
              { value: 487, name: '出货区' },
              { value: 677, name: '暂存货区' },
              { value: 126, name: '进货暂存区' },
              { value: 298, name: '出货暂存区' }
            ]
            let total = 0
            let target
            for (let i = 0; i < data.length; i++) {
              total += data[i].value
              if (data[i].name === name) {
                target = data[i].value
              }
            }
            return (
              name +
              '        ' +
              ((target / total) * 100).toFixed() +
              '%' +
              '        ' +
              target
            )
          }
        },
        series: [
          {
            type: 'pie',
            radius: '70%',
            center: ['30%', '50%'],
            itemStyle: {
              borderColor: '#fff',
              borderWidth: 2
            },
            label: {
              show: true,
              position: 'inside',
              color: '#fff',
              formatter: '{c}'
            },
            labelLine: {
              show: false
            },
            data: [
              { value: 348, name: '拣货区' },
              { value: 487, name: '出货区' },
              { value: 677, name: '暂存货区' },
              { value: 126, name: '进货暂存区' },
              { value: 298, name: '出货暂存区' }
            ]
          }
        ]
      }
    }
  },
  created () {
    this.threebtn('w')
    this.getstock()
  },
  mounted () {
    this.drawLine()
    this.bingtu()
    this.bingtu2()
  },
  methods: {
    // 柱状图
    drawLine () {
      // 基于刚刚准备好的 DOM 容器，初始化 EChart 实例
      const myChart = this.$echarts.init(document.getElementById('myChart'))
      // 绘制图表
      myChart.setOption(this.option)
    },
    // 饼图
    bingtu () {
      const myChart2 = this.$echarts.init(document.getElementById('myChart2'))
      myChart2.setOption(this.options)
    },
    bingtu2 () {
      const myChart3 = this.$echarts.init(document.getElementById('myChart3'))
      myChart3.setOption(this.option2)
    },
    // 点击传参,发起请求入库/出库信息
    async threebtn (type) {
      const res = await getGoout(type)
      // console.log(res)
      this.option.xAxis.data = res.data.data.x
      // console.log(this.option.xAxis.data)
      this.option.series[0].data = res.data.data.data[0].data
      this.option.series[1].data = res.data.data.data[1].data
    },
    // 库存使用情况
    async getstock () {
      const res = await getstock()
      // console.log(res)
      this.options.series[0].data[0].value = res.data.data[0].value
      this.options.series[0].data[0].name = res.data.data[0].name
      // console.log(this.options.series[0].data[0].name)
      this.options.series[0].data[1].value = res.data.data[1].value
      this.options.series[0].data[1].name = res.data.data[1].name
      // console.log(this.options.series[0].data)
    }
  },
  watch: {
    option: {
      deep: true,
      handler () {
        this.drawLine()
      }
    },
    options: {
      deep: true,
      handler () {
        this.bingtu()
      }
    }
  }
}
</script>

<style scoped lang="less">
.inout-charts {
  margin-top: 20px;
  height: 500px;
  background: #fff;
  box-shadow: 0 0 6px 0 rgb(144 142 142 / 17%);
  border-radius: 12px;
  padding: 25px;
  // 头部字体
  .header {
    position: relative;
    box-sizing: border-box;
    display: flex;
    // 左边字体
    .laoliu {
      width: 25%;
      float: left;
      .subject {
        font-size: 16px;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        color: #332929;
        line-height: 22px;
      }
    }
    // 右边按钮
    .liuzi {
      width: 75%;
      text-align: right;
      .threebtn {
        display: inline-block;
        line-height: 1;
        vertical-align: middle;
        font-size: 0;
        .el-button {
          color: black;
          background-color: #fff;
          border: 1px solid #dcdfe6;
          box-shadow: none !important;
          &:focus {
            color: #fff;
            background-color: #ffb200;
            border-color: #ffb200;
          }
        }
      }
    }
  }
  // 柱状图
  .chart {
    height: 430px;
    width: 100%;
    -webkit-tap-highlight-color: transparent;
    user-select: none;
    position: relative;
    .mchart {
      position: relative;
      width: 1013px;
      height: 430px;
      padding: 0px;
      margin: 0px;
      border-width: 0px;
      cursor: default;
    }
  }
}
.libs {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
  .libs-left {
    width: 30%;
    height: 354px;
    background: #fff;
    box-shadow: 0 0 6px 0 rgb(144 142 142 / 17%);
    border-radius: 12px;
    padding: 25px;
    margin-right: 30px;
    // 库存使用情况饼图
    .myChart2 {
      height: 280px;
      width: 100%;
      -webkit-tap-highlight-color: transparent;
      user-select: none;
      position: relative;
    }
  }
  .libs-right {
    width: 70%;
    height: 354px;
    background: #fff;
    box-shadow: 0 0 6px 0 rgb(144 142 142 / 17%);
    border-radius: 12px;
    padding: 25px;
    .libs-charts {
      height: 280px;
      width: 100%;
      -webkit-tap-highlight-color: transparent;
      user-select: none;
      position: relative;
      .myChart3 {
        position: relative;
        width: 793px;
        height: 280px;
        padding: 0px;
        margin: 0px;
        border-width: 0px;
        cursor: default;
      }
    }
  }
}
</style>
