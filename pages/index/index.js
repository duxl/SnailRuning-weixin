//index.js
//获取应用实例
const app = getApp()

const util = require('../../utils/util.js')

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    myMsg: ''
  },
  //事件处理函数
  onClickAvatar: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onClickMe: function() {
    this.setData({
      myMsg: util.formatTime(new Date())
    })
    wx.showToast({
      title: '点击我啊',
      icon: "none",
      duration: 3000
    })
  },

  onLoad: function () {
    console.log("页面创建时执行")
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },

  onHide: function() {
    console.log("页面从前台变为后台时执行")
  },

  onGetUserInfoCallback: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
