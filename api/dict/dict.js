import request from '../../utils/request'

const api_name = `/admin/dictionary/dict`


// export default {
//   findByDictCode(dictCode) {
//     return request({
//       url: `${api_name}/findByDictCode/${dictCode}`,
//       method: 'get'
//     })
//   },

//   findByParentId(id) {
//     return request({
//       url: `${api_name}/getChild/${id}`,
//       method: 'get'
//     })
//   }
// }

export function findByDictCode(dictCode) {
  return request({
    url: `${api_name}/findByDictCode/${dictCode}`,
    method: 'get',
  })
}