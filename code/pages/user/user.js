// pages/user/user.js
var util = require('../../utils/util.js');
Page({
  
  data: {
    helloText:"你好！",
    displayMode:true,//姓名栏显示模式
    isPlay:true, //头像的水波效果是否播放
    userinfo:{},
  },
  //加载时设置上面导航栏信息
  onLoad:function(){
    var App = getApp();
    this.setData({
      navSet:{
        //必填参数，titleBarHeight和statusBarHeight 在onLoad里获取
        "titleBarHeight":App.globalData.titleBarHeight,   
        "statusBarHeight":App.globalData.statusBarHeight,
        "stateColor":"#46A86B",  //状态栏颜色

        //模式0 自定义 此模式下不用其他参数
        //模式1 参考“我的”页面 参数有 image、text、titleColor和 bindClick(在wxml页面设置)
        //模式2 参考“设置”页面 参数有 title、titleColor和 bindClick(在wxml页面设置)
        "mode":"1",
        "titleColor":"#46A86B",  //标题栏颜色
        "image":"/images/shezhi1.png",
        "text":"设置",
      }
    })
  },
  handleSet:function(){
    wx.navigateTo({
      url: '/pages/set/set',
    })
  },
  hanleName:function(){
    var time = util.formatTime(new Date());
    let hour=parseInt(time.slice(11,13));
    if(hour>=0&&hour<6||hour>=23){
      this.setData({
        helloText:"早点休息哦！"
      })
    }
    else if(hour>=6&&hour<11)
    {
      this.setData({
        helloText:"早上好！"
      })
    }
    else if(hour>=11&&hour<14)
    {
      this.setData({
        helloText:"中午好！"
      })
    }
    else if(hour>=14&&hour<18)
    {
      this.setData({
        helloText:"下午好！"
      })
    }
    else if(hour>=18&&hour<23)
    {
      this.setData({
        helloText:"晚上好！"
      })
    }
    this.setData({
      displayMode:!this.data.displayMode
    })

  },
  handlePlay:function(){
    this.setData({
      isPlay:!this.data.isPlay
    })
  },
  onShow:function(){
    let userinfo=wx.getStorageSync('userinfo')||{};
    this.setData({
      userinfo:userinfo
    });
    if (typeof this.getTabBar === 'function' &&
    this.getTabBar()) {
    this.getTabBar().setData({
      selected: 3
    })
  }
  },
  handleGetUI:function(e){
    let {userInfo}=e.detail;
    //给后台发code获取openid请求
    wx.login({
      success (res) {
        if (res.code) {
          console.log(res);
          //发起网络请求
          wx.request({
            url: 'https://www.shoolos.cn/zmd/get_openid/',
            data: {
              code: res.code
            },
            success(res){
              wx.setStorageSync('openid',res.data.code)
            },
          })
        }
      }
    });
    wx.setStorageSync('userInfo', userInfo);
    this.setData({
      userinfo:userInfo
    });
  },
  handleAuth:function(){
    wx.navigateTo({
      url: '/pages/auth/auth',
    })
  },
  handleFeedback:function(){
    wx.navigateTo({
      url: '/pages/feedback/feedback',
    })
  }
})