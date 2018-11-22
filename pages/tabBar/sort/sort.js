// pages/sort/sort.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shopType: ["精品推荐", "每日尝鲜", "T11品牌", "生猛海鲜", "酒水饮品", "进口零食", "新鲜果蔬", "肉禽蛋品", "餐饮便当", "日用杂货"],
    shopTypeIndex: 0,
    shopList: [{
        img: '../../../images/shop.jpg',
        name: 'Zeespri佳沛',
        explain: '新西兰绿奇异果特大',
        spec: '140-170*6个',
        tag: '标签',
        price: 9.9,
        num: 1
      },
      {
        img: '../../../images/shop.jpg',
        name: 'Zeespri佳沛',
        explain: '新西兰绿奇异果特大',
        spec: '140-170*6个',
        tag: '标签',
        price: 9.9,
        num: 1
      },
      {
        img: '../../../images/shop.jpg',
        name: 'Zeespri佳沛',
        explain: '新西兰绿奇异果特大',
        spec: '140-170*6个',
        tag: '标签',
        price: 9.9,
        num: 1
      },
      {
        img: '../../../images/shop.jpg',
        name: 'Zeespri佳沛',
        explain: '新西兰绿奇异果特大',
        spec: '140-170*6个',
        tag: '标签',
        price: 9.9,
        num: 1
      },
      {
        img: '../../../images/shop.jpg',
        name: 'Zeespri佳沛',
        explain: '新西兰绿奇异果特大',
        spec: '140-170*6个',
        tag: '标签',
        price: 9.9,
        num: 1
      },
      {
        img: '../../../images/shop.jpg',
        name: 'Zeespri佳沛',
        explain: '新西兰绿奇异果特大',
        spec: '140-170*6个',
        tag: '标签',
        price: 9.9,
        num: 1
      },
      {
        img: '../../../images/shop.jpg',
        name: 'Zeespri佳沛',
        explain: '新西兰绿奇异果特大',
        spec: '140-170*6个',
        tag: '标签',
        price: 9.9,
        num: 1
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 选择商品类型
   */
  choiceType(e) {
    var typeIndex = e.target.dataset.typeIndex
    this.setData({
      shopTypeIndex: typeIndex
    })
  },

  /**
   * 添加数量
   */
  addNum(e) {
    var shopIndex = e.target.dataset.shopIndex
    var shoplist = this.data.shopList
    shoplist[shopIndex].num++
      this.setData({
        shopList: shoplist
      })
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