// components/jianggangview.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    items: {
      type: Array,
      value: null
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    str: "hello",
    items:[
      {
        name: "推荐",
        subName: "优质好品"
      },
      {
        name: "送礼",
        subName: "优质高档"
      },
      {
        name: "果蔬",
        subName: "新鲜速达"
      },
      {
        name: "还产",
        subName: "新鲜直达"
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
