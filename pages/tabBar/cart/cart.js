// pages/home/home.js
const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    showDeleteId: null,
    animateDelta: 0,
    animations: [],
    checkedAll: false,
    checked: {},
    goods: [
      {
        id: 1,
        imageUrl: "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg",
        title: "商品一",
        spec: "100cm",
        prepare: "30",
        reach: "10:20",
        price: "10.88"
      },
      {
        id: 2,
        imageUrl: "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg",
        title: "商品一",
        spec: "100cm",
        prepare: "30",
        reach: "10:20",
        price: "10.88"
      },
      {
        id: 3,
        imageUrl: "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg",
        title: "商品一",
        spec: "100cm",
        prepare: "30",
        reach: "10:20",
        price: "10.88"
      }
    ],
    recommend: [
      { imageUrl: "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg" },
      { imageUrl: "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg" },
      { imageUrl: "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg" },
      { imageUrl: "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg" }
    ],
    totalPrice: "11.88"
  },
  // 显示delete元素
  showDeleteAnimation(index) {
    let animate = JSON.parse(JSON.stringify(this.data.animations));
    let currentAnimate = wx.createAnimation({
      duration: 500,
      timingFunction: 'ease',
    });
    if (this.data.showDeleteId !== index) {
      currentAnimate.left("-160rpx").step();
      animate[index] = currentAnimate.export();
    }
    this.setData({ animations: animate });
  },

  // 关闭delete元素
  clearAnimation() {
    let animate = JSON.parse(JSON.stringify(this.data.animations));
    let oldAnimate = wx.createAnimation({
      duration: 500,
      timingFunction: 'ease',
    });
    oldAnimate.left("0").step();
    animate[this.data.showDeleteId] = oldAnimate.export();
    this.setData({
      animations: animate
    });
  },

  // 记录初始位置，关闭已打开的delete元素
  logTouchDirection(e) {
    let index = e.currentTarget.dataset.index;
    this.animateDelta = e.touches[0].pageX;
    if (this.data.showDeleteId != null) this.clearAnimation();
    if (index === this.data.showDeleteId) {
      this.data.showDeleteId = null;
    }
  },
  // 判断是否展开delete元素
  canShowDelete(e) {
    if (this.data.showDeleteId < 0) return ;
    let index = e.currentTarget.dataset.index;
    let lastX = e.changedTouches[0].pageX;
    if(this.animateDelta - lastX > 40) {
      this.showDeleteAnimation(index);
      this.data.showDeleteId = index;
    }
  },
  // 选中/取消 当前
  checkedGoods(e) {
    let len = e.detail.value.length;
    this.setData({ checkedAll: len === this.data.goods.length });
  },
  // 选中/取消 所有
  chooseAll() {
    let len = this.data.goods.length;
    let checked = new Array(len + 1);
    checked.fill(!this.data.checkedAll, 0, len + 1);
    this.setData({
      checkedAll: !this.data.checkedAll,
      checked: checked
    });
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