// pages/home/home.js
var QQMapWX = require('../../../libs/qqmap-wx-jssdk.js');
var qqmapsdk;

const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 实例化API核心类
    qqmapsdk = new QQMapWX({
      key: 'I6WBZ-JELWX-EFG4Q-TCDDY-P4CA2-2OBQC'
    });
    wx.getSetting({
      success(res) {
        console.log(res.authSetting)
        if (!res.authSetting['scope.userLocation']) {
          // wx.authorize({
          //   scope: 'scope.userLocation',
          //   success() {
          // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
          wx.getLocation({
            success: function (data) {
              console.log(data);

            }
          });
          //   }
          // });
          // wx.openSetting({
          //   success(res) {
          //     console.log(res.authSetting)
             
          //   }
          // });
         
      }else{
          wx.getLocation({
            success: function (data) {
              console.log(data);

            }
          });
      }
      }
    });
    console.log(qqmapsdk);
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

    // 调用接口
    // qqmapsdk.search({
    //   keyword: '酒店',
    //   success: function (res) {
    //     console.log(res);
    //   },
    //   fail: function (res) {
    //     console.log(res);
    //   },
    //   complete: function (res) {
    //     console.log(res);
    //   }
    // });

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

  },
  goIndexPage: function () {
    wx.navigateTo({
      url: '../index/index'
    });
  },
  imageError: function (event) {
    console.log(event.detail.errMsg);
  },
  goSkuDetail:function(id){
    wx.navigateTo({
      url: '/skuDetail?id='+id
    })
  }
})