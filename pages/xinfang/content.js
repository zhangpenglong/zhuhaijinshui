var t = getApp(), e = require("../../config"), i = require("../../utils/util.js");

Page(i.extend({}, {
    data: {
        imgPre: e.imgPre,
      pic: ['xinfang1.jpg', 'xinfang2.jpg', 'xinfang3.jpg', 'xinfang4.jpg', 'xinfang5.jpg', 'xinfang6.jpg'],
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