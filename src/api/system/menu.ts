import Request from '@/api'
export const getMenuList = (data: any) => {
  return Request.post('/basic-api/getMenuList', data || {})
}
