var t = getApp(), e = require("../../config"), i = require("../../utils/util.js");

Page(i.extend({}, {
    data: {
        imgPre: e.imgPre,
      pic: ['anli1.png', 'anli2.png', 'anli3.png', 'anli4.png', 'anli5.png', 'anli6.png', 'anli7.png', 'anli8.png', 'anli9.png', 'anli10.png', 'anli11.png', 'anli12.png', 'anli13.png', 'anli14.png', 'anli15.png', 'anli16.png', 'anli17.png', 'anli18.png', 'anli19.png', 'anli20.png', 'anli21.png', 'anli22.png', 'anli23.png', 'anli24.png', 'anli25.png', 'anli26.png', 'anli27.png',],
        title: null
    },
    // onLoad: function(e) {
    //     var i = this;
    //     t.getServerInfo("WeApp/Template3/getCaseContent", {
    //         id: e.id
    //     }, function(t) {
    //         i.setData({
    //             title: t.data.title,
    //             pic: t.data.pic
    //         });
    //     }), t.getServerInfo("WeApp/UniDatas/getAppTitle", {}, function(t) {
    //         wx.setNavigationBarTitle({
    //             title: t.data.title
    //         });
    //     });
    // },
    onShareAppMessage: function() {
        return {};
    }
}));