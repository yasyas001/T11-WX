// pages/my/orderList/orderList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: [
      { id: 0, name: "全部" },
      { id: 1, name: "待付款" },
      { id: 2, name: "待配送" },
      { id: 3, name: "待收货" },
      { id: 4, name: "退货" }
    ],
    status: ["已完成", "待付款", "待配送", "待收货", "退货"],
    orders: [
      {
        id: "3872922187",
        state: 0,
        num: 4,
        price: "999999.00"
      },
      {
        id: "38729187",
        state: 1,
        num: 4,
        price: "99.00"
      },
      {
        id: "3872922187",
        state: 2,
        num: 4,
        price: "99.00"
      },
      {
        id: "3872922187",
        state: 3,
        num: 4,
        price: "99.00"
      },
      {
        id: "3872922187",
        state: 4,
        num: 4,
        price: "99.00"
      }
    ]
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