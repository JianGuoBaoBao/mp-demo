//app.js

const globalSyncApi = require('async/asyncApi')
const globalUtilApi = require('utils/util')
const globalConfig = require('config/config')
App({
  globalData:{
    globalSyncApi, //通用异步方法
    globalUtilApi,//通用同步方法
    globalConfig,//通用常量
  },
  onLaunch(){
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId

      }
    })
    // 获取用户信息
    wx.getSetting({
      
    })
  },
})