// pages/home/page/searchShop/searchShop.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hisroty: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      hisroty: wx.getStorageSync('record') ? wx.getStorageSync('record') : []
    })
  },

  /**
   * 取消搜索
   */
  cancelSearch() {
    wx.reLaunch({
      url: '../../../tabBar/home/home',
    })
  },

  /**
   * 搜索商品
   */
  searchShop(e) {
    var info = e.detail.value
    var record = this.data.hisroty
    if (info) {
      if (record.indexOf(info) == -1) {
        record.push(info)
        this.setData({
          hisroty: record
        })
        wx.setStorageSync('record', record)
      }
      wx.navigateTo({
        url: '../searchResult/searchResult',
      })
    }
  },

  /**
   * 通过热门和历史搜索商品
   */
  searchBtn() {
    wx.navigateTo({
      url: '../searchResult/searchResult',
    })
  },

  /**
   * 清除搜索记录
   */
  clearHistory() {
    this.setData({
      hisroty: []
    })
    wx.clearStorageSync('record')
  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})