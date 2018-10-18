var a = getApp(), t = require("../../config.js");

Page({
    data: {
        slidePicHeight: a.globalData.slidePicHeight,
        imgPre: t.imgPre,
      slidePic: ['lunbo1.png', 'lunbo2.png', 'lunbo3.png', 'lunbo4.png', 'lunbo5.png', 'lunbo6.png',],
        companyDatas: {
          tel:'18511508181',
          wx_num:'18511508181',
          special: '水电安装、外保温。家装，工装，设计，施工一条龙服务，精装，简装，二手房翻新，出租房，局部维修，旧房改造。',
          about:'水电安装、外保温。家装，工装，设计，施工一条龙服务，精装，简装，二手房翻新，出租房，局部维修，旧房改造。',
          name:'北京豪利装饰',
          address:'北京市大兴区豪利装饰'
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