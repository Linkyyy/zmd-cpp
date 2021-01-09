Component({
  data: {
    selected:0,
    list: [
      {
      pagePath: "/pages/table/table",
      iconPath:"/images/kebiao1.png",
      selectedIconPath:"/images/kebiao2.png",
      text: "课表"
    }, 
    {
      pagePath: "/pages/news/news",
      iconPath:"/images/chat1.png",
      selectedIconPath:"/images/chat2.png",
      text: "新鲜事"
    },
    {
      pagePath: "/pages/tools/tools",
      iconPath:"/images/bbx1.png",
      selectedIconPath:"/images/bbx2.png",
      text: "百宝箱"
    },
    {
      pagePath: "/pages/user/user",
      iconPath:"/images/yonghu1.png",
      selectedIconPath:"/images/yonghu2.png",
      text: "我的"
    }]

  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url})
      this.setData({
        selected: data.index
      })
    }
  }
})