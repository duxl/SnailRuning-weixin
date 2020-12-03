//app.js
App({
  onLaunch: function () {
    console.log("onLaunch 应用第一次启动的时候回调")
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  onShow: function() {
    console.log("onShow 应用被用户看到的时候触发，经常触发")
  },
  onHide: function() {
    console.log("onHide 应用被隐藏，经常触发")
  },
  onError: function(e) {
    console.log("onError 报错了")
    console.log(e)
  },
  onPageNotFound: function() {
    console.log("onPageNotFound 应用第一次启动的时候找不到入口页面回调")
  },
  globalData: {
    userInfo: null
  }
})