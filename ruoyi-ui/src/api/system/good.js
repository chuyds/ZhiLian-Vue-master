import request from '@/utils/request'

// 查询产品列表
export function listGood() {
  return request({
    url: '/goods/list',
    method: 'get'
  })
}

// 查询某一类别产品列表
export function listGoodByCategory(category) {
  return request({
    url: '/goods/list/category/' + category,
    method: 'get'
  })
}

// 查询产品详细
export function getGood(id) {
  return request({
    url: '/goods/list/id/' + id,
    method: 'get'
  })
}
