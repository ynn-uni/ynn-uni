import {getAction,postAction} from '@/utils/request'

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
//健康档案  
export const getHealthRecords = (data = {}) => {
  return getAction(`/Apis/Trial/getTrialDetailsInMonth`, data)
}
export const postHealthRecords = (data = {}) => {
  return postAction(`/Apis/Trial/setTrialData`, data)
}
//传入参数{truename,phone,birthday,sex,height,weight}
export const setUserInfo = (data = {}) => {
  return postAction(`/Apis/Member/setUserInfo`, data)
}
export const getUserInfo = (data = {}) => {
  return getAction(`/Apis/Member/getUserInfo`, data)
}
