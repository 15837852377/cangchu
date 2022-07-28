import request from '@/utils/request'

export const getWarehouse = (params) =>
  request({
    // api/warehouse/page?like_code=&like_name=&current=1&size=10&descs=createTime
    url: '/api/warehouse/page',
    params
  })
