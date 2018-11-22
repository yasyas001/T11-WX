// pages/tabBar/home/home.js 
var QQMapWX = require('../../../libs/qqmap-wx-jssdk.js');
var qqmapsdk;
Page({

  /** 
   * 页面的初始数据 h
   */
  data: {
    address:{
      name: "定位中...",
      distanceStr:'',
      distance:-1,
      location:{
        latitude:-1,
        longitude:-1
      }

    }
  },

  /** 
   * 生命周期函数--监听页面加载 
   */
  onLoad: function(options) {
    console.log("onLoad");
    qqmapsdk = new QQMapWX({
      key: 'R5WBZ-KMXWU-TJTVO-4UOP5-EB4IZ-V2FG7'
    });
 
    const that = this;
    wx.getLocation({
      type: 'wgs84',
      success(res) {
        console.log(res);
        qqmapsdk.reverseGeocoder({
          poi_options: 'policy=2',
          success: function (res) {
            console.log(res);
            const address =  that.data.address;
            address.name = res.result.formatted_addresses.recommend;
            address.location.latitude = res.result.location.lat;
            address.location.longitude = res.result.location.lng
            that.driving(res.result.location.lat + "," + res.result.location.lng, (res.result.location.lat + 0.1) + "," + (res.result.location.lng + 0.1));
            that.setData({
              address: address
            })
          },
          fail: function (res) {
            that.setData({
              addressName: "定位失败"
            })
          }
        });
      }
    })
  },

  /** 
   * 生命周期函数--监听页面初次渲染完成 
   */
  onReady: function() {
    console.log("onLaunch");
  },

  /**
   * 搜索商品
   */
  searchShop() {
    wx.navigateTo({
      url: '../../home/page/searchShop/searchShop',
    })
  },

  /**
   * 扫码
   */

  scavenging() {
    wx.scanCode({
      
    })
  },

  onShow: function () {
    console.log("onShow");
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
  onHide: function() {
    console.log("onHide");
  },

  /** 
   * 生命周期函数--监听页面卸载 
   */
  onUnload: function() {
    console.log("onUnload");
  },

  /** 
   * 页面相关事件处理函数--监听用户下拉动作 
   */
  onPullDownRefresh: function() {
    console.log("onPullDownRefresh");
  },

  /** 
   * 页面上拉触底事件的处理函数 
   */
  onReachBottom: function() {
    console.log("onReachBottom");
  },

  /** 
   * 用户点击右上角分享 
   */
  onShareAppMessage: function() {
    console.log("onLaunch");
  },
  driving: function (from,to) {
    var _this = this;
    //网络请求设置
    var opt = {
      //WebService请求地址，from为起点坐标，to为终点坐标，开发key为必填
      url: 'https://apis.map.qq.com/ws/direction/v1/bicycling/?from='+from+'&to='+to+'&key=R5WBZ-KMXWU-TJTVO-4UOP5-EB4IZ-V2FG7',
      method: 'GET',
      dataType: 'json',
      //请求成功回调
      success: function (res) {
        console.log(res);
        var ret = res.data
        if (ret.status != 0) return; //服务异常处理
        const address = _this.data.address;
        const num =  parseInt(ret.result.routes[0].distance/1000);
        address.distanceStr = "距您" + num+"km";
        _this.setData({
          address: address
        })
      }
    };
    wx.request(opt);
  }
})