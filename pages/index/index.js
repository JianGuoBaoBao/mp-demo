//index.js
//获取应用实例
const app = getApp()
const regeneratorRuntime  = require('../../plugin/regenerator-runtime/runtime')
const utilApi = app.globalData.globalUtilApi;
const asyncApi = app.globalData.globalSyncApi;
const config = app.globalData.globalConfig;

Page({
      data:{
        username:''
      },
      onLoad(){
        let that = this;
        that.init(that);
      },
      async init(that){
        that.getUserInof(that);
      },
      async getUserInof(that){
         await asyncApi.getData(config.ServerIP + config.LINK_API1).then(res=>{
           that.setData({
             username: res.data.name
           })
      })
      }
})
