// components/Tabs/Tabs.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabs: {
      type: Array,
      value:[]
    }
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
    hanldeItemTap:function(e) {
      //console.log(e)
      const index = e.target.dataset.index;
      //console.log(index)
      this.triggerEvent("itemChange", {index})

      /*
      let {tabs} = this.data // 相当于 tabs = this.data.tabs
      tabs.forEach((v, i)=>i===index?v.isActive=true:v.isActive=false)
      this.setData({
        //tabs: tabs // key和value名称相同，可以省略value
        tabs
      })

      // const list = this.data.tabs
      // list.forEach((v, i)=>i===index?v.isActive=true: v.isActive=false)
      // this.setData({
      //   tabs: list
      // })
      */
    }
  }
})
