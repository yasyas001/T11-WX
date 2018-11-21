// pages/components/counter/counter.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    value: {
      type: "Number",
      value: 0
    },
    min: {
      type: "Number",
      value: 1,
    },
    max: {
      type: "Number",
      value: -1
    }
  },

  attached() {
    this.setData({value: this.data.min > this.data.value ? this.data.min : this.data.value});
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    calcPlus() {
      if(this.data.max >= 0 && this.data.max <= this.data.value) {
        this.setData({value: this.data.max});
      } else {
        this.setData({value: parseInt(this.data.value) + 1});
      }
    },
    calcMinus() {
      if(this.data.min >= this.data.value) {
        this.setData({value: this.data.min});
      } else {
        this.setData({value: parseInt(this.data.value) - 1});
      }
    }
  }
})
