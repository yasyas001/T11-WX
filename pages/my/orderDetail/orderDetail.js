// pages/my/orderDetail/orderDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    status: 0,
    order: {
      packages: [
        {
          name: "包裹一",
          goods: [
            {
              name: "苹果",
              price: 3.33,
              num: 10,
              total: 33.3
            },
            {
              name: "苹果",
              price: 3.33,
              num: 10,
              total: 33.3
            }
          ]
        },
        {
          name: "包裹二",
          goods: [
            {
              name: "苹果",
              price: 3.33,
              num: 10,
              total: 33.3
            },
            {
              name: "苹果",
              price: 3.33,
              num: 10,
              total: 33.3
            }
          ]
        }
      ],
      express: {
        reciveTime: "明天下午 4:00",
        addr: "湖北省武汉市洪山区APP广场3栋703室",
        type: "T11配送"
      },
      courier: {
        name: "韩冰",
        phone: "187777777777"
      },
      addtion: {
        no: "7382917432894",
        orderTime: "2018-11-11 10:10:10",
        payType: "在线支付",
        invoice: "未开票"
      }
    }
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