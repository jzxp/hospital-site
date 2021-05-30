import request from '../../utils/request'

const api_name = `/api/hospital/hospital`


// export default {

//   getPageList(data) {
//     return request({
//       url: `${api_base}/${api_name}/getPage`,
//       method: 'post',
//       data
//     })
//   },

//   getByHosname(params) {
//     return request({
//       url: `${api_name}/findByHosname/${hpName}`,
//       method: 'get',
//       params,
//     })
//   },

// }

export function getPageList(data) {
  return request({
    url: `${api_name}/getPage`,
    method: 'post',
    data,
  })
}

export function getByHosname(params) {
  return request({
    url: `${api_name}/findByHpName/${hpName}`,
    method: 'get',
    params,
  })
}
