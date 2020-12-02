// pages/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  onClickBtn: function () {
    const query = wx.createSelectorQuery()
    query.select("#txt").boundingClientRect(function (res) {
      console.log(res.left + "-" + res.top + "-" + res.right + "-" + res.bottom)
    })
    query.selectViewport().scrollOffset(function (res) {
      console.log("scrollOffset: " + res.scrollTop)
    })
    query.exec()
  },

  onScrollY: function(e) {
    console.log(e)
    // const query = wx.createSelectorQuery()
    // query.selectViewport().scrollOffset(function (res) {
    //   console.log("currentScrollOffset: " + res.scrollTop)
    // })
    // query.exec()
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})