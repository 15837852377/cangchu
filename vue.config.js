const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/ips': {
        target: 'http://www-wms-java.itheima.net', // 我们要代理的地址
        changeOrigin: true
      },
      '/api': {
        target: 'http://www-wms-java.itheima.net', // 我们要代理的地址
        changeOrigin: true
      }
    }
  }
})
