import request from '@/utils/request'
// 查询仓库
export const getWarehouse = (params) =>
  request({
    // api/warehouse/page?like_code=&like_name=&current=1&size=10&descs=createTime
    url: '/api/warehouse/page',
    params
  })
// 修改仓库
export const putWarehouse = (id) =>
  request({
    // api/warehouse/page?like_code=&like_name=&current=1&size=10&descs=createTime
    url: `/api/warehouse/${id}`
  })
