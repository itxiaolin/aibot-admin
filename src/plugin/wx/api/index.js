import service from '@/utils/request'
export const getLoginPic = (params) => {
  return service({
    url: '/wxLogin/getLoginPic',
    method: 'get',
    params
  })
}

export const loginOrCreate = (params) => {
  return service({
    url: '/wxLogin/loginOrCreate',
    method: 'get',
    params
  })
}

export const clearWx = () => {
  return service({
    url: '/wxLogin/clearWx',
    method: 'post'
  })
}

export const register = (data) => {
  return service({
    url: '/wxLogin/register',
    method: 'post',
    data
  })
}
