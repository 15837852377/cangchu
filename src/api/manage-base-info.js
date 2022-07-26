import request from '@/utils/request'
// 查询仓库
export const getWarehouse = (params) =>
  request({
    url: '/api/warehouse/page',
    params
  })
// 修改仓库
export const editWarehouse = (id) =>
  request({
    // api/warehouse/page?like_code=&like_name=&current=1&size=10&descs=createTime
    url: `/api/warehouse/${id}`
  })
// 新增仓库
export const addWarehouse = (data) =>
  request({
    url: '/api/warehouse',
    method: 'POST',
    data
  })
// 查看全部仓库
export const all = () =>
  request({
    url: 'api/warehouse/list'
  })
// 编号
export const getCode = () =>
  request({
    url: '/api/codeFactory/next/CK'
  })
