<template>
  <div class="login">
    <div class="laft">
      <img
        src="http://www-wms-java.itheima.net/img/title.ef005a7a.png"
        alt=""
      />
      <!-- 账号 -->
      <el-form style="margin-top: 50px" :model="loginForm" :rules="loginRules">
        <el-form-item class="account" prop="mobile">
          <div class="account-icon">
            <i class="el-icon-mobile"></i>
          </div>
          <div class="account-content">
            <el-input
              v-model="loginForm.mobile"
              placeholder="请输入内容"
            ></el-input>
          </div>
        </el-form-item>
      </el-form>
      <!-- 密码 -->
      <el-form style="margin-top: 42px" :model="loginForm" :rules="loginRules">
        <el-form-item class="account" prop="password">
          <div class="account-icon">
            <i class="el-icon-lock"></i>
          </div>
          <div class="account-content">
            <el-input
              placeholder="请输入密码"
              v-model="loginForm.password"
            ></el-input>
          </div>
        </el-form-item>
      </el-form>
      <div class="choicebox">
        <el-checkbox label="记住密码" name="type"></el-checkbox>
      </div>
      <div class="btn-div">
        <el-button class="btn" @click="$router.push('/dashboard')">
          立即登录
        </el-button>
      </div>
    </div>
    <div class="right"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loginForm: {
        mobile: 'admin',
        password: '123456'
      },
      loginRules: {
        mobile: [
          {
            required: true,
            message: '请输入账户',
            trigger: 'blur'
          }
        ],
        password: [
          {
            required: true,
            message: '请输入密码',
            trigger: 'blur'
          }
        ]
      }
    }
  }
}
</script>

<style scoped lang="less">
.login {
  width: 958px;
  height: 516px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 20px rgb(93 93 93 / 33%);
  background-color: #fff;
  border-radius: 40px;
  .laft {
    float: left;
    width: 398px;
    height: 516px;
    background: #fff;
    border-radius: 34px 0 0 34px;
    margin: 0 auto;
    img {
      margin-left: 124px;
      margin-top: 72px;
      width: 150px;
      height: 64px;
    }
    .account {
      margin-left: 59px;
      width: 280px;
      height: 50px;
      /deep/.el-form-item__error {
        margin-left: 50px;
      }
      .account-icon {
        float: left;
        width: 50px;
        height: 50px;
        background: #eae7e7;
        border-radius: 8px 0 0 8px;
        i {
          color: #b5abab;
          width: 25px;
          height: 24px;
          margin: 12px 13px;
          font-size: 23px;
        }
      }
      .account-content {
        float: left;
        font-size: 14px;
        /deep/.el-input__inner {
          width: 230px;
          height: 50px;
          background-color: #f8f5f5;
          border-bottom-left-radius: 0;
          border-top-left-radius: 0;
        }
      }
    }
    .choicebox {
      margin-top: 22px;
      margin-left: 60px;
      color: #1f2d3d;
      font-size: 14px;
    }
    .btn-div {
      margin-top: 23px;
      margin-left: 59px;
      .btn {
        width: 280px;
        height: 50px;
        background: #ffb200;
        border-radius: 8px;
        box-shadow: 0 2px 9px 1px rgb(255 178 0 / 47%);
        font-size: 16px;
        font-weight: 600;
        text-align: center;
        color: #332929;
        line-height: 22px;
      }
    }
  }
  .right {
    float: right;
    background-image: url('http://www-wms-java.itheima.net/img/contentBg.1321d126.png');
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    width: 560px;
    height: 516px;
  }
}
</style>
