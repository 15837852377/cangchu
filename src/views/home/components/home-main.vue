<template>
  <div>
    <!-- 公共样板 -->
    <div class="public">
      <!-- 代办信息 -->
      <div class="main">
        <!-- 通知栏 -->
        <div class="notification-bar">
          <!-- 左部分 -->
          <div class="notification-left">
            <div class="top">
              <img
                class="img-left"
                src="http://www-wms-java.itheima.net/img/dashboard-banner-left@2x.5afd2949.png"
                alt=""
              />
              <img
                class="img-right"
                src="http://www-wms-java.itheima.net/img/dashboard-banner-right@2x.28195570.png"
                alt=""
              />
              <img
                class="touxiang"
                src="http://www-wms-java.itheima.net/img/avatar@2x.4f4a758f.png"
                alt=""
              />
              <p class="text1">仓储管理员</p>
              <p class="text2">我不是为了输赢，我就是认真！</p>
              <p class="text3">—— 罗永浩</p>
              <div class="btn">
                <p class="text4">北京总仓</p>
              </div>
            </div>
            <!-- 代办信息 -->
            <div class="bottom">
              <div class="text5">代办信息</div>
              <div class="information-list">
                <el-row>
                  <!-- 每一项 -->
                  <el-col v-for="(item, index) in information" :key="index">
                    <a href="">
                      <div class="masterplate">
                        <div
                          class="icon"
                          :style="`background-color:${item.bgc}`"
                        >
                          <i class="iconfont icon-ruku" :class="item.icon"></i>
                        </div>
                        <div class="masterplatetop">{{ item.name }}</div>
                        <div class="masterplatedown">
                          <span class="spanlabel">新增</span>
                          <span class="spanValue">{{ item.value1 }}</span>
                          <span class="spanlabel">待审核</span>
                          <span class="spanValue">{{ item.value2 }}</span>
                        </div>
                      </div>
                    </a>
                  </el-col>
                </el-row>
              </div>
            </div>
          </div>
          <!-- 右部分 -->
          <div class="notification-right">
            <div class="notes">
              <div class="subject">通知/公告</div>
              <div class="item">
                <hr />
                <div class="titles">紧急盘点通知</div>
                <div class="time">2020.12.30 18:23:14</div>
              </div>
              <div class="item">
                <hr />
                <div class="titles">运维服务更新通知</div>
                <div class="time">2021.01.25 18:23:14</div>
              </div>
              <div class="item">
                <hr />
                <div class="titles">客户入库变更通知</div>
                <div class="time">2021.01.26 18:23:14</div>
              </div>
              <div class="item">
                <hr />
                <div class="titles">五一放假通知</div>
                <div class="time">2021.02.15 18:23:14</div>
              </div>
              <div class="item">
                <hr />
                <div class="titles">品达物流系统对接通知</div>
                <div class="time">2021.3.25 18:23:14</div>
              </div>
            </div>
          </div>
        </div>

        <!-- 任务导航 -->
        <div class="tasks">
          <div class="subject">任务导航</div>
          <div class="tasks-list">
            <el-row>
              <el-col>
                <a href="">
                  <div class="tasks-item">
                    <div
                      class="tasks-icon"
                      style="background: rgb(0, 118, 255)"
                    >
                      <i
                        class="iconfont icon-kache"
                        style="font-size: 18px"
                      ></i>
                    </div>
                    <div class="tasks-title">收货任务</div>
                  </div>
                </a>
              </el-col>
              <el-col>
                <a href="">
                  <div class="tasks-item">
                    <div
                      class="tasks-icon"
                      style="background: rgb(82, 212, 243)"
                    >
                      <i class="iconfont icon-shangjia"></i>
                    </div>
                    <div class="tasks-title">上架任务</div>
                  </div>
                </a>
              </el-col>
              <el-col>
                <a href="">
                  <div class="tasks-item">
                    <div
                      class="tasks-icon"
                      style="background: rgb(255, 113, 0)"
                    >
                      <i class="iconfont icon-navicon-pdd"></i>
                    </div>
                    <div class="tasks-title">盘点任务</div>
                  </div>
                </a>
              </el-col>
              <el-col>
                <a href="">
                  <div class="tasks-item">
                    <div
                      class="tasks-icon"
                      style="background: rgb(255, 96, 158)"
                    >
                      <i class="iconfont icon-jianhuo"></i>
                    </div>
                    <div class="tasks-title">拣货任务</div>
                  </div>
                </a>
              </el-col>
              <el-col>
                <a href="">
                  <div class="tasks-item">
                    <div
                      class="tasks-icon"
                      style="background: rgb(255, 178, 0)"
                    >
                      <i class="iconfont icon-jjrw"></i>
                    </div>
                    <div class="tasks-title">交接任务</div>
                  </div>
                </a>
              </el-col>
            </el-row>
          </div>
        </div>
        <!-- echarts面板 -->
        <home-echarts />
      </div>
    </div>
  </div>
</template>

<script>
import { getInformation } from '@/api/home'
import homeEcharts from './home-echarts.vue'
export default {
  components: { homeEcharts },
  data () {
    return {
      information: [
        {
          icon: 'icon-ruku',
          bgc: 'rgb(0, 118, 255)'
        },
        {
          icon: 'icon-chukudan',
          bgc: 'rgb(255, 178, 0)'
        },
        {
          icon: 'icon-navicon-pdd',
          bgc: 'rgb(255, 113, 0)'
        }
      ]
    }
  },
  created () {
    this.getInformation()
  },
  methods: {
    async getInformation () {
      const res = await getInformation()
      // console.log(res)
      this.information = res.data.data
    }
  }
}
</script>

<style scoped lang="less">
// 样板
.public {
  background-color: #fdfafa;
  width: 100%;
  position: relative;
  overflow: hidden;
  // 代办信息
  .main {
    padding: 20px 30px 30px 30px;
    // 通知栏
    .notification-bar {
      width: 100%;
      height: 451px;
      // 左部分
      .notification-left {
        width: calc(100% - 261px);
        padding-right: 30px;
        float: left;
        .top {
          position: relative;
          width: 100%;
          height: 148px;
          background: linear-gradient(270deg, #ffc771, #ffa634);
          box-shadow: 0 0 6px 0 rgb(188 151 69 / 12%);
          border-radius: 12px;
          box-sizing: border-box;
          .img-left {
            position: absolute;
            top: 0;
            left: 0;
            height: 148px;
            box-sizing: border-box;
          }
          .img-right {
            position: absolute;
            top: 0;
            right: 0;
            height: 148px;
          }
          .touxiang {
            position: absolute;
            top: 31px;
            left: 43px;
            height: 62px;
          }
          .text1 {
            position: absolute;
            left: 36px;
            bottom: 20px;
            font-size: 16px;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
            color: #332929;
            line-height: 22px;
          }
          .text2 {
            position: absolute;
            top: 36px;
            left: 200px;
            font-size: 18px;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
            color: #fff;
            line-height: 25px;
          }
          .text3 {
            top: 76px;
            left: 400px;
            font-size: 16px;
            position: absolute;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
            color: #fff;
            line-height: 25px;
          }
          .btn {
            position: absolute;
            top: 20px;
            right: 20px;
            width: 147px;
            height: 40px;
            background: #f8f5f5;
            border-radius: 6px;
            opacity: 0.79;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-around;
            .text4 {
              font-size: 14px;
              font-weight: 500;
              color: #332929;
            }
          }
        }
        .bottom {
          margin-top: 20px;
          width: 100%;
          height: 282px;
          background: #fff;
          box-shadow: 0 0 6px 0 rgb(144 142 142 / 17%);
          border-radius: 12px;
          padding: 25px;
          box-sizing: border-box;
          .text5 {
            font-size: 16px;
            font-family: PingFangSC-Semibold, PingFang SC;
            font-weight: 600;
            color: #332929;
            line-height: 22px;
          }
          .information-list {
            margin-top: 19px;
            box-sizing: border-box;
            .el-row {
              margin-left: -15px;
              margin-right: -15px;
              position: relative;
              box-sizing: border-box;
              .el-col {
                width: 33.3333333333%;
                float: left;
                box-sizing: border-box;
                padding-left: 15px !important;
                padding-right: 15px !important;
                a {
                  color: inherit;
                  outline: none;
                  text-decoration: none;
                  cursor: pointer;
                  .masterplate {
                    position: relative;
                    height: 186px;
                    background: #fbf7f7;
                    border-radius: 8px;
                    padding: 20px;
                    cursor: pointer;
                    box-sizing: border-box;
                    &:hover {
                      background: hsla(0, 0%, 100%, 0.8);
                      box-shadow: 0 2px 12px 0 rgb(0 0 0 / 6%);
                      border-radius: 8px;
                      border: 1px solid #f5efee;
                    }
                    .icon {
                      width: 49px;
                      height: 49px;
                      border-radius: 12px;
                      display: flex;
                      align-items: center;
                      justify-content: space-around;
                      i {
                        font-size: 32px;
                        color: #f8f5f5;
                      }
                    }
                    .masterplatetop {
                      position: absolute;
                      top: 34px;
                      left: 85px;
                      font-size: 16px;
                      font-family: PingFangSC-Medium, PingFang SC;
                      font-weight: 500;
                      color: #332929;
                      line-height: 22px;
                    }
                    .masterplatedown {
                      position: absolute;
                      bottom: 20px;
                      .spanlabel {
                        font-size: 14px;
                        font-family: PingFangSC-Regular, PingFang SC;
                        font-weight: 400;
                        color: #887e7e;
                        margin-right: 10px;
                        vertical-align: super;
                      }
                      .spanValue {
                        font-size: 36px;
                        font-family: DIN-Medium, DIN;
                        font-weight: 500;
                        color: #332929;
                        margin-right: 20px;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      // 右部分
      .notification-right {
        float: left;
        box-sizing: border-box;
        .notes {
          width: 261px;
          height: 451px;
          background: #fff;
          box-shadow: 0 0 6px 0 rgb(144 142 142 / 17%);
          border-radius: 12px;
          padding: 30px;
          box-sizing: border-box;
          .subject {
            font-size: 16px;
            font-family: PingFangSC-Semibold, PingFang SC;
            font-weight: 600;
            color: #332929;
            line-height: 22px;
            box-sizing: border-box;
          }
          .item {
            margin-top: 15px;
            box-sizing: border-box;
            hr {
              width: 201px;
              height: 1px;
              background-color: #eee;
              box-sizing: border-box;
            }
            .titles {
              width: 195px;
              height: 18px;
              font-size: 13px;
              font-family: PingFangSC-Regular, PingFang SC;
              font-weight: 400;
              color: #332929;
              line-height: 18px;
              margin-top: 15px;
            }
            .time {
              width: 115px;
              height: 17px;
              font-size: 12px;
              font-family: PingFangSC-Regular, PingFang SC;
              font-weight: 400;
              color: #887e7e;
              line-height: 17px;
              margin-top: 10px;
            }
          }
        }
      }
    }
  }
  // 任务导航
  .tasks {
    margin-top: 20px;
    height: 188px;
    background: #fff;
    box-shadow: 0 0 6px 0 rgb(144 142 142 / 17%);
    border-radius: 12px;
    padding: 25px;
    .tasks-list {
      margin-top: 19px;
      .el-row {
        position: relative;
        box-sizing: border-box;
        .el-col {
          padding-left: 15px;
          padding-right: 15px;
          width: 20%;
          a {
            text-decoration: none;
            cursor: pointer;
            .tasks-item {
              position: relative;
              width: 100%;
              height: 93px;
              background: #fbf7f7;
              border-radius: 8px;
              cursor: pointer;
              display: flex;
              align-items: center;
              justify-content: space-evenly;
              &:hover {
                background: hsla(0, 0%, 100%, 0.8);
                box-shadow: 0 2px 12px 0 rgb(0 0 0 / 6%);
                border-radius: 8px;
                border: 1px solid #f5efee;
              }
              .tasks-icon {
                // background: #0076ff;
                width: 50px;
                height: 50px;
                border-radius: 25px;
                display: flex;
                align-items: center;
                justify-content: space-around;
                i {
                  font-size: 28px;
                  color: #f8f5f5;
                }
              }
              .tasks-title {
                font-size: 16px;
                font-family: PingFangSC-Medium, PingFang SC;
                font-weight: 500;
                color: #332929;
                line-height: 22px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
