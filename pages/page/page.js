var a = getApp(), t = require("../../config.js");

Page({
    data: {
        slidePicHeight: a.globalData.slidePicHeight,
        imgPre: t.imgPre,
      slidePic: ['lunbo1.png', 'lunbo2.png', 'lunbo3.png',],
        companyDatas: {
          tel:'15916283648',
          wx_num:'15916283648',
          special: '家装、工装、设计施工一条龙、水电、厂房装修、办公室装修、二手房翻新、半包全包、精装简装、局部维修、旧房改造。',
          about:'家装、工装、设计施工一条龙、水电、厂房装修、办公室装修、二手房翻新、半包全包、精装简装、局部维修、旧房改造。',
          name:'珠海金水装修装饰',
          address:'珠海金水装修装饰'
        }
    },
    onShow: function() {
        // var t = this;
        // a.getServerInfo("WeApp/Template3/getPageDatas", {}, function(a) {
        //     t.setData({
        //         slidePic: a.data.slidePic,
        //         companyDatas: a.data.companyDatas
        //     });
        // });
    },
    openMap: function() {
        wx.openLocation({
          latitude: parseFloat(39.7660531109),
          longitude: parseFloat(116.4086329937),
            scale: 28
        });
    },
    jumpThing: a.jumpThing,
    onShareAppMessage: function() {
        return {};
    },
    onLoad: function() {
        // a.getServerInfo("WeApp/UniDatas/getAppTitle", {}, function(a) {
        //     wx.setNavigationBarTitle({
        //         title: a.data.title
        //     });
        // });
    }
});