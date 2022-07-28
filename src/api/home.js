import request from '@/utils/request'

// 代办信息
export const getInformation = () =>
  request({
    url: '/ips/home/todo'
  })

// 入库/出库信息
export const getGoout = (data) =>
  request({
    url: `/ips/home/sumList?dimension=${data}`
  })

// 库存使用情况
export const getstock = () =>
  request({
    url: '/ips/home/stockUseStatus'
  })
