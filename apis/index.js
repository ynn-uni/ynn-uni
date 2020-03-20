import {getAction,postAction} from '@/utils/request.js'

export function loginOrRegister(data = {}) {
  return postAction('/Apis/Member/loginWithWechat', data);
}
export const getNewsList = (data = {}) => {
  return getAction(`/Apis/Article/getArticleList`, data)
}

export const getNewsDetails = (data = {}) => {
  return getAction(`/Apis/Article/getArticleDetails`, data)
}
export const getRecruitList = (data = {}) => {
  return getAction(`/Apis/Project/getProjectList`, data)
}
export const getRecruitDetails = (data = {}) => {
  return getAction(`/Apis/Project/getProjectDetails`, data)
}