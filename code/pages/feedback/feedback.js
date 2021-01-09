// pages/feedback/feedback.js
Page({
  data: {

  },
  onLoad:function(){
    var App = getApp();
    this.setData({
      navSet:{
        "titleBarHeight":App.globalData.titleBarHeight,
        "statusBarHeight":App.globalData.statusBarHeight,
        "stateColor":"#46A86B",       
        "mode":"1",
        "titleColor":"transparent",  //标题栏颜色
        "image":"/images/fanhui.png",
        "text":"返回"
      }
    })
  },
  handleBack(){
    wx.navigateBack();
  }

})