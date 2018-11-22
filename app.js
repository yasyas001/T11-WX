//app.js
App({
  onLaunch: function () {
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
  // 请求方法
  showToast: false,
  requestTimer: null,
  request(req, duration) {
    let _this = this;
    let obj = Object.assign({
      baseUrl: "",
      method: "GET",
      dataType: "JSON"
    }, req);
    obj.url = obj.baseUrl + req.url;
    obj.success = function (data) {
      clearTimeout(_this.requestTimer);
      _this.requestTimer = setTimeout(function () {
        _this.showToast = false;
      }, duration || 500);
      req.success(data);
    }
    _this.showToast = true;
    wx.request(obj);
  },
  // API授权方法
  wxAuth(name) {
    const api = {
      "getUserInfo": "userInfo",
      "getLocation": "userLocation",
      "chooseLocation": "userLocation",
      "openLocation": "userLocation",
      "chooseAddress": "address",
      "chooseInvoiceTitle": "invoiceTitle",
      "chooseInvoice": "invoice",
      "getWeRunData": "werun",
      "startRecord": "record",
      "saveImageToPhotosAlbum": "writePhotosAlbum",
      "saveVideoToPhotosAlbum": "writePhotosAlbum",
      "camera": "camera"
    };
    return new Promise((resolve, reject) => {
      wx.authorize({
        scope: `scope.${api[name]}`,
        success: (res) => {
          if(name !== "camera") {
            wx[name]({
              success: (data) => {
                resolve(data);
              },
              fail: (data) => {
                reject(data);
              }
            });
          } else {
            resolve(wx.createCameraContext());
          }
        },
        fail: (res) => {
          reject(res);
        }
      });
    });
  },
  globalData: {
    userInfo: null
  }
})