// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num:0,
  },
  //输入框的input事件
  handleInput(e){
    //console.log(e.detail.value);
    this.setData({
      num: e.detail.value
    })
  },
  handletap(num){
    // console.log(num)
    const operation = num.currentTarget.dataset.operation
    this.setData({
     num:this.data.num+=operation
    })
  }

})