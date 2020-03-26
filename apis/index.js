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
//幕政报名 /Apis/Enroll/addEnroll
export const addEnroll = (data = {}) => {
  return postAction(`/Apis/Enroll/addEnroll`, data)
}
export const getEnrollList = (data = {}) => {
  return postAction(`/Apis/Enroll/getEnrollList`, data)
}
export const getEnrollDetails = (data = {}) => {
  return postAction(`/Apis/Enroll/getEnrollDetails`, data)
}
export const getHealthRecords = (data = {}) => {
  return postAction(`/Apis/Trial/getTrialDetailsInMonth`, data)
}
