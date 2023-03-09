import { getDict } from '@/utils/dictionary'
import moment from 'moment'

export const formatBoolean = (bool) => {
  if (bool !== null) {
    return bool ? '是' : '否'
  } else {
    return ''
  }
}
export const formatDate = (time) => {
  if (time !== null && time !== '') {
    // var date = new Date('2023-03-09T15:06:29.74+08:00')
    // var date = new Date(time)
    return moment.utc(time).format('YYYY-MM-DD HH:mm:ss')
    // return formatTimeToStr(date, 'yyyy-MM-dd hh:mm:ss')
  } else {
    return ''
  }
}

export const filterDict = (value, options) => {
  const rowLabel = options && options.filter(item => item.value === value)
  return rowLabel && rowLabel[0] && rowLabel[0].label
}

export const getDictFunc = async(type) => {
  const dicts = await getDict(type)
  return dicts
}
