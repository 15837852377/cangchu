<!-- eslint-disable vue/no-useless-template-attributes -->
<template>
  <div class="app">
    <div class="left">
      <!-- 侧边栏图片 -->
      <div class="left-img">
        <a href=""
          ><img
            src="http://www-wms-java.itheima.net/img/logo@2x.2c4f2c76.png"
            alt=""
        /></a>
      </div>
      <!-- 侧边栏导航 -->
      <div class="navigation">
        <el-row class="tac">
          <el-col>
            <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              :router="true"
            >
              <!-- 工作台 -->
              <el-menu-item index="/dashboard">
                <i class="el-icon-menu left-icon"></i>
                <span slot="title">工作台</span>
              </el-menu-item>
              <!-- 一级菜单 -->
              <el-submenu
                :index="index + ''"
                v-for="(obj, index) in list"
                :key="index"
              >
                <template slot="title" :item="obj.out">
                  <i class="left-icon iconfont" :class="obj.icon"></i>
                  <span>{{ obj.out }}</span>
                </template>
                <!-- 二级菜单 -->
                <el-menu-item
                  @click="erjicaidan(item)"
                  v-for="(item, index) in obj.in"
                  :key="index"
                  style="padding-left: 40px; color: rgb(136, 126, 126)"
                  >{{ item }}</el-menu-item
                >
              </el-submenu>
              <!-- 商务管理 -->
              <!-- <el-submenu index="2">
                <template slot="title">
                  <i class="iconfont icon-shangwuguanli left-icon"></i>
                  <span>商务管理</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="2-1">货主管理</el-menu-item>
                  <el-menu-item index="2-2">承运商管理</el-menu-item>
                </el-menu-item-group>
              </el-submenu> -->
              <!-- 库内管理 -->
              <!-- <el-submenu index="3">
                <template slot="title">
                  <i class="iconfont icon-kunei left-icon"></i>
                  <span>库内管理</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="3-1">盘点单</el-menu-item>
                  <el-menu-item index="3-2">盘点任务</el-menu-item>
                  <el-menu-item index="3-3">库存损益</el-menu-item>
                  <el-menu-item index="3-4">实时库存</el-menu-item>
                </el-menu-item-group>
              </el-submenu> -->
              <!-- 入库管理 -->
              <!-- <el-submenu index="4">
                <template slot="title">
                  <i class="iconfont icon-rukuguanli left-icon"></i>
                  <span>入库管理</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="4-1">入库单</el-menu-item>
                  <el-menu-item index="4-2">收货任务</el-menu-item>
                  <el-menu-item index="4-3">上架任务</el-menu-item>
                </el-menu-item-group>
              </el-submenu> -->
              <!-- 出库管理 -->
              <!-- <el-submenu index="5">
                <template slot="title">
                  <i class="iconfont icon-chukuguanli left-icon"></i>
                  <span>出库管理</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="5-1">出库单</el-menu-item>
                  <el-menu-item index="5-2">拣货任务</el-menu-item>
                  <el-menu-item index="5-3">交接任务</el-menu-item>
                </el-menu-item-group>
              </el-submenu> -->
            </el-menu>
          </el-col>
        </el-row>
      </div>
      <!-- 侧边栏底部退出框 -->
      <div class="out">
        <img
          src="http://www-wms-java.itheima.net/img/avatar@2x.4f4a758f.png"
          alt=""
        />
        <span> admin </span>
        <div class="shu"></div>
        <i class="iconfont icon-tuichu"></i>
      </div>
    </div>
    <div class="right">
      <!-- 头部标签栏 -->
      <div class="header">
        <div class="header-tag">
          <el-tag class="biaoqian1" :class="{}" type="info">工作台</el-tag>
          <el-tag
            :class="{ active: one === index }"
            closable
            class="biaoqian"
            type="info"
            v-for="(item, index) in menubar"
            :key="index"
            @click="biaoqian(index)"
          >
            {{ item }}
          </el-tag>
        </div>
        <el-dropdown class="header-icon">
          <i class="el-icon-arrow-down"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item
              ><i class="el-icon-back" style="font-weight: 700"></i
              >关闭左侧</el-dropdown-item
            >
            <el-dropdown-item
              ><i class="el-icon-right" style="font-weight: 700"></i
              >关闭右侧</el-dropdown-item
            >
            <el-dropdown-item
              ><i class="el-icon-close" style="font-weight: 700"></i
              >关闭其他</el-dropdown-item
            >
            <el-dropdown-item
              ><i class="el-icon-error" style="font-weight: 700"></i
              >关闭全部</el-dropdown-item
            >
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 侧边导航栏
      list: [
        {
          out: '基础信息管理',
          in: [
            '仓库管理',
            '库区管理',
            '库位管理',
            '库位视图',
            '货品管理',
            '货品类型管理'
          ],
          icon: 'el-icon-document-copy'
        },
        {
          out: '商务管理',
          in: ['货主管理', '承运商管理'],
          icon: 'icon-shangwuguanli'
        },
        {
          out: '库内管理',
          in: ['盘点单', '盘点任务', '库存损益', '实时库存'],
          icon: 'icon-kunei'
        },
        {
          out: '入库管理',
          in: ['入库单', '收货任务', '上架任务'],
          icon: 'icon-rukuguanli'
        },
        {
          out: '出库管理',
          in: ['出库单', '拣货任务', '交接任务'],
          icon: 'icon-chukuguanli'
        }
      ],
      // 顶部菜单栏数组
      menubar: [],
      one: 0
    }
  },
  methods: {
    biaoqian (index) {
      this.one = index
    },
    erjicaidan (item) {
      console.log(item)
      // this.menubar.forEach((items) => {
      //   console.log(items)
      //   if (items === item) {
      //     this.menubar.push(item)
      //   } else {
      //     return console.log(111)
      //   }
      // })
      console.log(this.menubar)
    }
  }
}
</script>

<style scoped lang="less">
.app {
  position: relative;
  height: 100%;
  width: 100%;
  .left {
    transition: width 0.28s;
    width: 226px !important;
    height: 100%;
    position: fixed;
    font-size: 0;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 1001;
    overflow: hidden;
    background: #fff;
    box-shadow: 2px 0 6px 0 rgb(144 142 142 / 13%);
    .left-img {
      position: relative;
      width: 100%;
      height: 100px;
      line-height: 100px;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        display: block;
        width: 150px;
        height: 64px;
      }
    }
    .navigation {
      height: calc(100% - 163px);
      .tac {
        margin-bottom: -17px;
        margin-right: -17px;
        height: 100%;
        padding-right: 20px;
        .el-col {
          width: 100%;
          .el-menu {
            border: none;
            color: #887e7e;
            .left-icon {
              width: 20px;
              height: 20px;
              margin-right: 16px;
            }
            span {
              color: rgb(136, 126, 126);
            }
            /deep/.el-submenu__icon-arrow {
              position: absolute;
              top: 50%;
              right: 35px;
              margin-top: -7px;
              transition: transform 0.3s;
              font-size: 12px;
              font-weight: 700;
            }
          }
        }
      }
    }
    .out {
      height: 62px;
      width: 226px;
      background-color: #fff;
      border-top: 1px solid #f5efee;
      display: flex;
      flex-direction: row;
      align-items: center;
      img {
        width: 32px;
        height: 32px;
        margin-left: 41px;
        margin-right: 14px;
      }
      span {
        height: 20px;
        font-size: 14px;
        font-family: PingFangSC, PingFangSC-Regular;
        font-weight: 400;
        text-align: left;
        color: #332929;
        line-height: 20px;
      }
      .shu {
        height: 17px;
        border-left: 1px solid #d9d0cf;
        border-right: 0;
        margin-left: 17px;
        margin-right: 17px;
      }
      /deep/i {
        width: 21px;
        height: 21px;
        cursor: pointer;
        color: #b5abab;
      }
    }
  }
  .right {
    min-height: 100%;
    transition: margin-left 0.28s;
    margin-left: 226px;
    position: relative;
    background-color: #fdfafa;
    // 头部标签栏
    .header {
      height: 64px;
      width: 100%;
      background: #f5f1f1;
      box-shadow: 0 1px 3px 0 rgb(0 0 0 / 12%), 0 0 3px 0 rgb(0 0 0 / 4%);
      .header-tag {
        white-space: nowrap;
        position: relative;
        height: 100%;
        .biaoqian1 {
          display: inline-block;
          position: relative;
          cursor: pointer;
          height: 36px;
          background: #fff;
          border-radius: 6px;
          line-height: 36px;
          color: #b5abab;
          padding: 0 15px 0 15px;
          font-size: 13px;
          margin-left: 30px;
          margin-top: 14px;
          margin-bottom: 14px;
          font-weight: 400;
          font-family: PingFangSC, PingFangSC-Regular;
        }
        .biaoqian {
          display: inline-block;
          position: relative;
          cursor: pointer;
          height: 36px;
          background: #fff;
          border-radius: 6px;
          line-height: 36px;
          color: #b5abab;
          padding: 0 15px 0 15px;
          font-size: 13px;
          margin-left: 10px;
          margin-top: 14px;
          margin-bottom: 14px;
          font-weight: 400;
          font-family: PingFangSC, PingFangSC-Regular;
        }
        .active {
          color: #ffb200;
        }
      }
      .header-icon {
        width: 36px;
        height: 36px;
        background: #fff;
        border-radius: 6px;
        position: absolute !important;
        right: 34px;
        top: 14px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
}
</style>
