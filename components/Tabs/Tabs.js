// components/Tabs/Tabs.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    aaa:{
      type:Int16Array,
      value:""
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
      tabs:[
        {
          id:0,
          name:"首页",
          isActive:true
        },
        {
          id:1,
          name:"原创",
          isActive:false
        },
        {
          id:2,
          name:"分类",
          isActive:false
        },
        {
          id:3,
          name:"我的",
          isActive:false
        }
      ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleTap(e){
      this.triggerEvent("itemChange",{index})
    }

  }
})
