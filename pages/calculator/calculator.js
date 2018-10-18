var a = getApp();

Page({
    data: {
        items: [ {
            name: "经济环保",
            value: "经济环保"
        }, {
            name: "舒适装修",
            value: "舒适装修",
            checked: !0
        }, {
            name: "轻奢装修",
            value: "轻奢装修"
        } ],
        multiArray: [ [ "全部", "历下区", "市中区", "槐荫区", "天桥区", "历城区" ], [ "所在小区" ] ],
        objectMultiArray: [ [ {
            id: 0,
            name: "全部"
        }, {
            id: 1,
            name: "历下区"
        }, {
            id: 2,
            name: "市中区"
        }, {
            id: 3,
            name: "槐荫区"
        }, {
            id: 4,
            name: "天桥区"
        }, {
            id: 5,
            name: "历城区"
        } ], [ {
            id: 0,
            name: "所在小区"
        } ] ],
        multiIndex: [ 0, 0 ],
        submiting: !1
    },
    bindMultiPickerColumnChange: function(a) {
        console.log("修改的列为", a.detail.column, "，值为", a.detail.value);
        var e = {
            multiArray: this.data.multiArray,
            multiIndex: this.data.multiIndex
        };
        switch (e.multiIndex[a.detail.column] = a.detail.value, a.detail.column) {
          case 0:
            switch (e.multiIndex[0]) {
              case 0:
                e.multiArray[1] = [ "所在小区" ];
                break;

              case 1:
                e.multiArray[1] = [ "历下小区01", "历下小区02", "历下小区03" ];
                break;

              case 2:
                e.multiArray[1] = [ "市中小区01", "市中小区02" ];
                break;

              case 3:
                e.multiArray[1] = [ "槐荫小区01", "槐荫小区02", "槐荫小区03" ];
                break;

              case 4:
                e.multiArray[1] = [ "天桥小区01", "天桥小区02" ];
                break;

              case 5:
                e.multiArray[1] = [ "历城小区01", "历城小区02", "历城小区03" ];
            }
            e.multiIndex[1] = 0;
        }
        this.setData(e);
    },
    formSubmit: function(e) {
        var i = e.detail.value;
        i.mianji && /^1\d{10}$/.test(i.tel) && i.address && i.fangshi && !this.data.submiting ? (this.submiting = !0, 
        wx.showLoading({
            title: "提交中"
        }), a.getServerInfo("WeApp/UniDatas/calculateSubmit", i, function(a) {
            wx.hideLoading(), wx.showToast({
                title: "提交成功",
                icon: "success",
                duration: 2e3
            }), setTimeout(function() {
                wx.reLaunch({
                    url: "/pages/index/index"
                });
            }, 1900);
        })) : wx.showToast({
            title: "字段填写错误",
            icon: "none"
        });
    }
});