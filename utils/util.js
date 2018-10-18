function t(t) {
    return (t = t.toString())[1] ? t : "0" + t;
}

function e(t) {
    for (var r = Array.prototype.slice.call(arguments, 1), o = 0; o < r.length; o += 1) {
        var a = r[o];
        for (var s in a) "object" !== n(t[s]) ? t[s] = a[s] : "object" === n(a[s]) ? e(t[s], a[s]) : a.hasOwnProperty(s) && (t[s] = a[s]);
    }
    return t;
}

var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
}, r = require("../config");

module.exports = {
    formatTime: function(e) {
        var n = e.getFullYear(), r = e.getMonth() + 1, o = e.getDate(), a = e.getHours(), s = e.getMinutes(), i = e.getSeconds();
        return [ n, r, o ].map(t).join("/") + " " + [ a, s, i ].map(t).join(":");
    },
    isEmpty: function(t) {
        for (var e in t) return !1;
        return !0;
    },
    bd_decrypt: function(t, e) {
        var n = 3e3 * Math.PI / 180, r = t - .0065, o = e - .006, a = Math.sqrt(r * r + o * o) - 2e-5 * Math.sin(o * n), s = Math.atan2(o, r) - 3e-6 * Math.cos(r * n);
        return {
            gg_lon: a * Math.cos(s),
            gg_lat: a * Math.sin(s)
        };
    },
    bd_encrypt: function(t, e) {
        var n = 3e3 * Math.PI / 180, r = t, o = e, a = Math.sqrt(r * r + o * o) + 2e-5 * Math.sin(o * n), s = Math.atan2(o, r) + 3e-6 * Math.cos(r * n), i = a * Math.cos(s) + .0065;
        return {
            bd_lat: a * Math.sin(s) + .006,
            bd_lon: i
        };
    },
    formatDateTime: function(t, e) {
        var n = new Date();
        return Date.prototype.format = function(t) {
            var e = {
                "M+": this.getMonth() + 1,
                "d+": this.getDate(),
                "h+": this.getHours(),
                "m+": this.getMinutes(),
                "s+": this.getSeconds(),
                "q+": Math.floor((this.getMonth() + 3) / 3),
                "S+": this.getMilliseconds()
            };
            /(y+)/i.test(t) && (t = t.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length)));
            for (var n in e) new RegExp("(" + n + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[n] : ("00" + e[n]).substr(("" + e[n]).length)));
            return t;
        }, n.setTime(1e3 * t), e = e || "yyyy-MM-dd hh:mm:ss", n.format(e);
    },
    isMobile: function(t) {
        return /^1[3|4|5|7|8]{1}[0-9]{9}$/.test(t);
    },
    addHost: function(t) {
        return t && t.indexOf("://") < 0 && (t = r.host + (0 === t.indexOf("/") ? t.substr(1) : t)), 
        t;
    },
    extend: e
};