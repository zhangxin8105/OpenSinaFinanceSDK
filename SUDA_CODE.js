(function() {
    var aD = "V=2.1.16";
    var aw = window,
    M = document,
    v = navigator,
    ag = v.userAgent,
    aE = aw.screen,
    k = aw.location.href;
    var aV = "https:" == aw.location.protocol ? "https://s": "http://",
    aP = "beacon.sina.com.cn";
    var W = aV + aP + "/a.gif?",
    E = aV + aP + "/g.gif?",
    aa = aV + aP + "/f.gif?",
    av = aV + aP + "/e.gif?",
    aS = aV + "beacon.sinauda.com/i.gif?";
    var aR = M.referrer.toLowerCase();
    var am = "SINAGLOBAL",
    ai = "FSINAGLOBAL",
    Q = "Apache",
    Y = "ULV",
    m = "SUP",
    aW = "UOR",
    L = "_s_acc",
    ah = "_s_tentry",
    o = false,
    aQ = false,
    H = (document.domain == "sina.com.cn") ? true: false;
    var q = 0;
    var aY = false,
    F = false;
    var aB = "";
    var n = 16777215,
    aj = 0,
    I, T = 0;
    var u = "",
    b = "",
    a = "";
    var V = [],
    ac = [],
    R = [];
    var x = 0;
    var y = 0;
    var r = "";
    var aC = false;
    var A = false;
    function X() {
        var e = document.createElement("iframe");
        e.src = aV + aP + "/data.html?" + new Date().getTime();
        e.id = "sudaDataFrame";
        e.style.height = "0px";
        e.style.width = "1px";
        e.style.overflow = "hidden";
        e.frameborder = "0";
        e.scrolling = "no";
        document.getElementsByTagName("head")[0].appendChild(e)
    }
    function l() {
        var e = document.createElement("iframe");
        e.src = aV + aP + "/ckctl.html";
        e.id = "ckctlFrame";
        e.style.height = "0px";
        e.style.width = "1px";
        e.style.overflow = "hidden";
        e.frameborder = "0";
        e.scrolling = "no";
        document.getElementsByTagName("head")[0].appendChild(e)
    }
    function t() {
        var e = document.createElement("script");
        e.src = aV + aP + "/h.js";
        document.getElementsByTagName("head")[0].appendChild(e)
    }
    function j(aZ, i) {
        var D = M.getElementsByName(aZ);
        var e = (i > 0) ? i: 0;
        return (D.length > e) ? D[e].content: ""
    }
    function aX() {
        var a1 = M.getElementsByName("sudameta");
        var a9 = [];
        for (var a6 = 0; a6 < a1.length; a6++) {
            var a2 = a1[a6].content;
            if (a2) {
                if (a2.indexOf(";") != -1) {
                    var D = a2.split(";");
                    for (var aZ = 0; aZ < D.length; aZ++) {
                        var a7 = aM(D[aZ]);
                        if (!a7) {
                            continue
                        }
                        a9.push(a7)
                    }
                } else {
                    a9.push(a2)
                }
            }
        }
        var a4 = M.getElementsByTagName("meta");
        for (var a6 = 0,
        a0 = a4.length; a6 < a0; a6++) {
            var a5 = a4[a6];
            if (a5.name == "tags") {
                a9.push("content_tags:" + encodeURI(a5.content))
            }
        }
        var a3 = w("vjuids");
        a9.push("vjuids:" + a3);
        var e = "";
        var a8 = k.indexOf("#");
        if (a8 != -1) {
            e = escape(k.substr(a8 + 1));
            a9.push("hashtag:" + e)
        }
        return a9
    }
    function af(a2, D, a0, aZ) {
        if (a2 == "") {
            return ""
        }
        aZ = (aZ == "") ? "=": aZ;
        D += aZ;
        var a1 = a2.indexOf(D);
        if (a1 < 0) {
            return ""
        }
        a1 += D.length;
        var i = a2.indexOf(a0, a1);
        if (i < a1) {
            i = a2.length
        }
        return a2.substring(a1, i)
    }
    function w(e) {
        if (undefined == e || "" == e) {
            return ""
        }
        return af(M.cookie, e, ";", "")
    }
    function aJ(a0, e, i, aZ) {
        if (e != null) {
            if ((undefined == aZ) || (null == aZ)) {
                aZ = "sina.com.cn"
            }
            if ((undefined == i) || (null == i) || ("" == i)) {
                M.cookie = a0 + "=" + e + ";domain=" + aZ + ";path=/"
            } else {
                var D = new Date();
                var a1 = D.getTime();
                a1 = a1 + 86400000 * i;
                D.setTime(a1);
                a1 = D.getTime();
                M.cookie = a0 + "=" + e + ";domain=" + aZ + ";expires=" + D.toUTCString() + ";path=/"
            }
        }
    }
    function g(D) {
        try {
            var i = document.getElementById("sudaDataFrame").contentWindow.storage;
            return i.get(D)
        } catch(aZ) {
            return false
        }
    }
    function aH(D, aZ) {
        try {
            var i = document.getElementById("sudaDataFrame").contentWindow.storage;
            i.set(D, aZ);
            return true
        } catch(a0) {
            return false
        }
    }
    function U() {
        var a1 = 15;
        var D = window.SUDA.etag;
        if (!H) {
            return "-"
        }
        if (x == 0) {
            X();
            t()
        }
        if (D && D != undefined) {
            A = true
        }
        ls_gid = g(am);
        if (ls_gid === false || A == false) {
            return false
        } else {
            aC = true
        }
        if (ls_gid && ls_gid.length > a1) {
            aJ(am, ls_gid, 3650);
            o = true;
            return ls_gid
        } else {
            if (D && D.length > a1) {
                aJ(am, D, 3650);
                aQ = true
            }
            var i = 0,
            a0 = 500;
            var aZ = setInterval((function() {
                var e = w(am);
                if (A) {
                    e = D
                }
                i += 1;
                if (i > 3) {
                    clearInterval(aZ)
                }
                if (e.length > a1) {
                    clearInterval(aZ);
                    aH(am, e)
                }
            }), a0);
            return A ? D: w(am)
        }
    }
    function ae(e, aZ, D) {
        var i = e;
        if (i == null) {
            return false
        }
        aZ = aZ || "click";
        if ((typeof D).toLowerCase() != "function") {
            return
        }
        if (i.attachEvent) {
            i.attachEvent("on" + aZ, D)
        } else {
            if (i.addEventListener) {
                i.addEventListener(aZ, D, false)
            } else {
                i["on" + aZ] = D
            }
        }
        return true
    }
    function au() {
        if (window.event != null) {
            return window.event
        } else {
            if (window.event) {
                return window.event
            }
            var D = arguments.callee.caller;
            var i;
            var aZ = 0;
            while (D != null && aZ < 40) {
                i = D.arguments[0];
                if (i && (i.constructor == Event || i.constructor == MouseEvent || i.constructor == KeyboardEvent)) {
                    return i
                }
                aZ++;
                D = D.caller
            }
            return i
        }
    }
    function h(i) {
        i = i || au();
        if (!i.target) {
            i.target = i.srcElement;
            i.pageX = i.x;
            i.pageY = i.y
        }
        if (typeof i.layerX == "undefined") {
            i.layerX = i.offsetX
        }
        if (typeof i.layerY == "undefined") {
            i.layerY = i.offsetY
        }
        return i
    }
    function aM(aZ) {
        if (typeof aZ !== "string") {
            throw "trim need a string as parameter"
        }
        var e = aZ.length;
        var D = 0;
        var i = /(\u3000|\s|\t|\u00A0)/;
        while (D < e) {
            if (!i.test(aZ.charAt(D))) {
                break
            }
            D += 1
        }
        while (e > D) {
            if (!i.test(aZ.charAt(e - 1))) {
                break
            }
            e -= 1
        }
        return aZ.slice(D, e)
    }
    function d(e) {
        return Object.prototype.toString.call(e) === "[object Array]"
    }
    function S(aZ, a3) {
        var a5 = aM(aZ).split("&");
        var a4 = {};
        var D = function(i) {
            if (a3) {
                try {
                    return decodeURIComponent(i)
                } catch(a7) {
                    return i
                }
            } else {
                return i
            }
        };
        for (var a1 = 0,
        a2 = a5.length; a1 < a2; a1++) {
            if (a5[a1]) {
                var a0 = a5[a1].split("=");
                var e = a0[0];
                var a6 = a0[1];
                if (a0.length < 2) {
                    a6 = e;
                    e = "$nullName"
                }
                if (!a4[e]) {
                    a4[e] = D(a6)
                } else {
                    if (d(a4[e]) != true) {
                        a4[e] = [a4[e]]
                    }
                    a4[e].push(D(a6))
                }
            }
        }
        return a4
    }
    function aq(D, a0) {
        for (var aZ = 0,
        e = D.length; aZ < e; aZ++) {
            a0(D[aZ], aZ)
        }
    }
    function az(i) {
        var e = new RegExp("^http(?:s)?://([^/]+)", "im");
        if (i.match(e)) {
            return i.match(e)[1].toString()
        } else {
            return ""
        }
    }
    function ay(a6) {
        try {
            var a3 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
            var D = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=";
            var a8 = function(e) {
                var a9 = "",
                ba = 0;
                for (; ba < e.length; ba++) {
                    a9 += "%" + aZ(e[ba])
                }
                return decodeURIComponent(a9)
            };
            var aZ = function(e) {
                var i = "0" + e.toString(16);
                return i.length <= 2 ? i: i.substr(1)
            };
            var a7 = function(bg, bd, a9) {
                if (typeof(bg) == "string") {
                    bg = bg.split("")
                }
                var bf = function(bp, br) {
                    for (var bq = 0; bq < bp.length; bq++) {
                        if (bp[bq] == br) {
                            return bq
                        }
                    }
                    return - 1
                };
                var ba = [];
                var bo, bm, bj = "";
                var bn, bl, bi, bh = "";
                if (bg.length % 4 != 0) {}
                var e = /[^A-Za-z0-9\+\/\=]/g;
                var bk = a3.split("");
                if (bd == "urlsafe") {
                    e = /[^A-Za-z0-9\-_\=]/g;
                    bk = D.split("")
                }
                var bc = 0;
                if (bd == "binnary") {
                    bk = [];
                    for (bc = 0; bc <= 64; bc++) {
                        bk[bc] = bc + 128
                    }
                }
                if (bd != "binnary" && e.exec(bg.join(""))) {
                    return a9 == "array" ? [] : ""
                }
                bc = 0;
                do {
                    bn = bf(bk, bg[bc++]);
                    bl = bf(bk, bg[bc++]);
                    bi = bf(bk, bg[bc++]);
                    bh = bf(bk, bg[bc++]);
                    bo = (bn << 2) | (bl >> 4);
                    bm = ((bl & 15) << 4) | (bi >> 2);
                    bj = ((bi & 3) << 6) | bh;
                    ba.push(bo);
                    if (bi != 64 && bi != -1) {
                        ba.push(bm)
                    }
                    if (bh != 64 && bh != -1) {
                        ba.push(bj)
                    }
                    bo = bm = bj = "";
                    bn = bl = bi = bh = ""
                } while ( bc < bg . length );
                if (a9 == "array") {
                    return ba
                }
                var be = "",
                bb = 0;
                for (; bb < ba.lenth; bb++) {
                    be += String.fromCharCode(ba[bb])
                }
                return be
            };
            var a0 = [];
            var a5 = a6.substr(0, 3);
            var a2 = a6.substr(3);
            switch (a5) {
            case "v01":
                for (var a1 = 0; a1 < a2.length; a1 += 2) {
                    a0.push(parseInt(a2.substr(a1, 2), 16))
                }
                return decodeURIComponent(a8(a7(a0, "binnary", "array")));
                break;
            case "v02":
                a0 = a7(a2, "urlsafe", "array");
                return a8(a7(a0, "binnary", "array"));
                break;
            default:
                return decodeURIComponent(a6)
            }
        } catch(a4) {
            return ""
        }
    }
    var aF = {
        screenSize: function() {
            return (n & 8388608 == 8388608) ? aE.width + "x" + aE.height: ""
        },
        colorDepth: function() {
            return (n & 4194304 == 4194304) ? aE.colorDepth: ""
        },
        appCode: function() {
            return (n & 2097152 == 2097152) ? v.appCodeName: ""
        },
        appName: function() {
            return (n & 1048576 == 1048576) ? ((v.appName.indexOf("Microsoft Internet Explorer") > -1) ? "MSIE": v.appName) : ""
        },
        cpu: function() {
            return (n & 524288 == 524288) ? (v.cpuClass || v.oscpu) : ""
        },
        platform: function() {
            return (n & 262144 == 262144) ? (v.platform) : ""
        },
        jsVer: function() {
            if (n & 131072 != 131072) {
                return ""
            }
            var a0, e, a2, D = 1,
            aZ = 0,
            i = (v.appName.indexOf("Microsoft Internet Explorer") > -1) ? "MSIE": v.appName,
            a1 = v.appVersion;
            if ("MSIE" == i) {
                e = "MSIE";
                a0 = a1.indexOf(e);
                if (a0 >= 0) {
                    a2 = window.parseInt(a1.substring(a0 + 5));
                    if (3 <= a2) {
                        D = 1.1;
                        if (4 <= a2) {
                            D = 1.3
                        }
                    }
                }
            } else {
                if (("Netscape" == i) || ("Opera" == i) || ("Mozilla" == i)) {
                    D = 1.3;
                    e = "Netscape6";
                    a0 = a1.indexOf(e);
                    if (a0 >= 0) {
                        D = 1.5
                    }
                }
            }
            return D
        },
        network: function() {
            if (n & 65536 != 65536) {
                return ""
            }
            var i = "";
            i = (v.connection && v.connection.type) ? v.connection.type: i;
            try {
                M.body.addBehavior("#default#clientCaps");
                i = M.body.connectionType
            } catch(D) {
                i = "unkown"
            }
            return i
        },
        language: function() {
            return (n & 32768 == 32768) ? (v.systemLanguage || v.language) : ""
        },
        timezone: function() {
            return (n & 16384 == 16384) ? (new Date().getTimezoneOffset() / 60) : ""
        },
        flashVer: function() {
            if (n & 8192 != 8192) {
                return ""
            }
            var a2 = v.plugins,
            aZ, a3, a5;
            if (a2 && a2.length) {
                for (var a1 in a2) {
                    a3 = a2[a1];
                    if (a3.description == null) {
                        continue
                    }
                    if (aZ != null) {
                        break
                    }
                    a5 = a3.description.toLowerCase();
                    if (a5.indexOf("flash") != -1) {
                        aZ = a3.version ? parseInt(a3.version) : a5.match(/\d+/);
                        continue
                    }
                }
            } else {
                if (window.ActiveXObject) {
                    for (var a0 = 10; a0 >= 2; a0--) {
                        try {
                            var D = new ActiveXObject("ShockwaveFlash.ShockwaveFlash." + a0);
                            if (D) {
                                aZ = a0;
                                break
                            }
                        } catch(a4) {}
                    }
                } else {
                    if (ag.indexOf("webtv/2.5") != -1) {
                        aZ = 3
                    } else {
                        if (ag.indexOf("webtv") != -1) {
                            aZ = 2
                        }
                    }
                }
            }
            return aZ
        },
        javaEnabled: function() {
            if (n & 4096 != 4096) {
                return ""
            }
            var D = v.plugins,
            i = v.javaEnabled(),
            aZ,
            a0;
            if (i == true) {
                return 1
            }
            if (D && D.length) {
                for (var e in D) {
                    aZ = D[e];
                    if (aZ.description == null) {
                        continue
                    }
                    if (i != null) {
                        break
                    }
                    a0 = aZ.description.toLowerCase();
                    if (a0.indexOf("java plug-in") != -1) {
                        i = parseInt(aZ.version);
                        continue
                    }
                }
            } else {
                if (window.ActiveXObject) {
                    i = (new ActiveXObject("JavaWebStart.IsInstalled") != null)
                }
            }
            return i ? 1 : 0
        }
    };
    var ar = {
        pageId: function(i) {
            var D = i || u,
            a2 = "-9999-0-0-1";
            if ((undefined == D) || ("" == D)) {
                try {
                    var aZ = j("publishid");
                    if ("" != aZ) {
                        var a1 = aZ.split(",");
                        if (a1.length > 0) {
                            if (a1.length >= 3) {
                                a2 = "-9999-0-" + a1[1] + "-" + a1[2]
                            }
                            D = a1[0]
                        }
                    } else {
                        D = "0"
                    }
                } catch(a0) {
                    D = "0"
                }
                D = D + a2
            }
            return D
        },
        sessionCount: function() {
            var e = w("_s_upa");
            if (e == "") {
                e = 0
            }
            return e
        },
        excuteCount: function() {
            return SUDA.sudaCount
        },
        referrer: function() {
            if (n & 2048 != 2048) {
                return ""
            }
            var e = /^[^\?&#]*.swf([\?#])?/;
            if ((aR == "") || (aR.match(e))) {
                var i = af(k, "ref", "&", "");
                if (i != "") {
                    return escape(i)
                }
            }
            return escape(aR)
        },
        isHomepage: function() {
            if (n & 1024 != 1024) {
                return ""
            }
            var D = "";
            try {
                M.body.addBehavior("#default#homePage");
                D = M.body.isHomePage(k) ? "Y": "N"
            } catch(i) {
                D = "unkown"
            }
            return D
        },
        PGLS: function() {
            return (n & 512 == 512) ? j("stencil") : ""
        },
        ZT: function() {
            if (n & 256 != 256) {
                return ""
            }
            var e = j("subjectid");
            e.replace(",", ".");
            e.replace(";", ",");
            return escape(e)
        },
        mediaType: function() {
            return (n & 128 == 128) ? j("mediaid") : ""
        },
        domCount: function() {
            return (n & 64 == 64) ? M.getElementsByTagName("*").length: ""
        },
        iframeCount: function() {
            return (n & 32 == 32) ? M.getElementsByTagName("iframe").length: ""
        }
    };
    var aL = {
        visitorId: function() {
            var i = 15;
            var e = w(am);
            if (e.length > i && x == 0) {
                return e
            } else {
                return
            }
        },
        fvisitorId: function(e) {
            if (!e) {
                var e = w(ai);
                return e
            } else {
                aJ(ai, e, 3650)
            }
        },
        sessionId: function() {
            var e = w(Q);
            if ("" == e) {
                var i = new Date();
                e = Math.random() * 10000000000000 + "." + i.getTime()
            }
            return e
        },
        flashCookie: function(e) {
            if (e) {} else {
                return r
            }
        },
        lastVisit: function() {
            var D = w(Q);
            var a0 = w(Y);
            var aZ = a0.split(":");
            var a1 = "",
            i;
            if (aZ.length >= 6) {
                if (D != aZ[4]) {
                    i = new Date();
                    var e = new Date(window.parseInt(aZ[0]));
                    aZ[1] = window.parseInt(aZ[1]) + 1;
                    if (i.getMonth() != e.getMonth()) {
                        aZ[2] = 1
                    } else {
                        aZ[2] = window.parseInt(aZ[2]) + 1
                    }
                    if (((i.getTime() - e.getTime()) / 86400000) >= 7) {
                        aZ[3] = 1
                    } else {
                        if (i.getDay() < e.getDay()) {
                            aZ[3] = 1
                        } else {
                            aZ[3] = window.parseInt(aZ[3]) + 1
                        }
                    }
                    a1 = aZ[0] + ":" + aZ[1] + ":" + aZ[2] + ":" + aZ[3];
                    aZ[5] = aZ[0];
                    aZ[0] = i.getTime();
                    aJ(Y, aZ[0] + ":" + aZ[1] + ":" + aZ[2] + ":" + aZ[3] + ":" + D + ":" + aZ[5], 360)
                } else {
                    a1 = aZ[5] + ":" + aZ[1] + ":" + aZ[2] + ":" + aZ[3]
                }
            } else {
                i = new Date();
                a1 = ":1:1:1";
                aJ(Y, i.getTime() + a1 + ":" + D + ":", 360)
            }
            return a1
        },
        userNick: function() {
            if (aB != "") {
                return aB
            }
            var D = unescape(w(m));
            if (D != "") {
                var i = af(D, "ag", "&", "");
                var e = af(D, "user", "&", "");
                var aZ = af(D, "uid", "&", "");
                var a1 = af(D, "sex", "&", "");
                var a0 = af(D, "dob", "&", "");
                aB = i + ":" + e + ":" + aZ + ":" + a1 + ":" + a0;
                return aB
            } else {
                return ""
            }
        },
        userOrigin: function() {
            if (n & 4 != 4) {
                return ""
            }
            var e = w(aW);
            var i = e.split(":");
            if (i.length >= 2) {
                return i[0]
            } else {
                return ""
            }
        },
        advCount: function() {
            return (n & 2 == 2) ? w(L) : ""
        },
        setUOR: function() {
            var a3 = w(aW),
            a7 = "",
            i = "",
            a6 = "",
            a0 = "",
            a4 = k.toLowerCase(),
            D = M.referrer.toLowerCase();
            var a8 = /[&|?]c=spr(_[A-Za-z0-9]{1,}){3,}/;
            var a2 = new Date();
            if (a4.match(a8)) {
                a6 = a4.match(a8)[0]
            } else {
                if (D.match(a8)) {
                    a6 = D.match(a8)[0]
                }
            }
            if (a6 != "") {
                a6 = a6.substr(3) + ":" + a2.getTime()
            }
            if (a3 == "") {
                if (w(Y) == "") {
                    a7 = az(D);
                    i = az(a4)
                }
                aJ(aW, a7 + "," + i + "," + a6, 365)
            } else {
                var a1 = 0,
                a5 = a3.split(",");
                if (a5.length >= 1) {
                    a7 = a5[0]
                }
                if (a5.length >= 2) {
                    i = a5[1]
                }
                if (a5.length >= 3) {
                    a0 = a5[2]
                }
                if (a6 != "") {
                    a1 = 1
                } else {
                    var aZ = a0.split(":");
                    if (aZ.length >= 2) {
                        var e = new Date(window.parseInt(aZ[1]));
                        if (e.getTime() < (a2.getTime() - 86400000 * 30)) {
                            a1 = 1
                        }
                    }
                }
                if (a1) {
                    aJ(aW, a7 + "," + i + "," + a6, 365)
                }
            }
        },
        setAEC: function(e) {
            if ("" == e) {
                return
            }
            var i = w(L);
            if (i.indexOf(e + ",") < 0) {
                i = i + e + ","
            }
            aJ(L, i, 7)
        },
        ssoInfo: function() {
            var D = unescape(ay(w("sso_info")));
            if (D != "") {
                if (D.indexOf("uid=") != -1) {
                    var i = af(D, "uid", "&", "");
                    return escape("uid:" + i)
                } else {
                    var e = af(D, "u", "&", "");
                    return escape("u:" + unescape(e))
                }
            } else {
                return ""
            }
        },
        subp: function() {
            return w("SUBP")
        }
    };
    var ax = {
        CI: function() {
            var e = ["sz:" + aF.screenSize(), "dp:" + aF.colorDepth(), "ac:" + aF.appCode(), "an:" + aF.appName(), "cpu:" + aF.cpu(), "pf:" + aF.platform(), "jv:" + aF.jsVer(), "ct:" + aF.network(), "lg:" + aF.language(), "tz:" + aF.timezone(), "fv:" + aF.flashVer(), "ja:" + aF.javaEnabled()];
            return "CI=" + e.join("|")
        },
        PI: function(e) {
            var i = ["pid:" + ar.pageId(e), "st:" + ar.sessionCount(), "et:" + ar.excuteCount(), "ref:" + ar.referrer(), "hp:" + ar.isHomepage(), "PGLS:" + ar.PGLS(), "ZT:" + ar.ZT(), "MT:" + ar.mediaType(), "keys:", "dom:" + ar.domCount(), "ifr:" + ar.iframeCount()];
            return "PI=" + i.join("|")
        },
        UI: function() {
            var e = ["vid:" + aL.visitorId(), "sid:" + aL.sessionId(), "lv:" + aL.lastVisit(), "un:" + aL.userNick(), "uo:" + aL.userOrigin(), "ae:" + aL.advCount(), "lu:" + aL.fvisitorId(), "si:" + aL.ssoInfo(), "rs:" + (o ? 1 : 0), "dm:" + (H ? 1 : 0), "su:" + aL.subp()];
            return "UI=" + e.join("|")
        },
        EX: function(i, e) {
            if (n & 1 != 1) {
                return ""
            }
            i = (null != i) ? i || "": b;
            e = (null != e) ? e || "": a;
            return "EX=ex1:" + i + "|ex2:" + e
        },
        MT: function() {
            return "MT=" + aX().join("|")
        },
        V: function() {
            return aD
        },
        R: function() {
            return "gUid_" + new Date().getTime()
        }
    };
    function aO() {
        var a2 = "-",
        aZ = M.referrer.toLowerCase(),
        D = k.toLowerCase();
        if ("" == w(ah)) {
            if ("" != aZ) {
                a2 = az(aZ)
            }
            aJ(ah, a2, "", "weibo.com")
        }
        var a0 = /weibo.com\/reg.php/;
        if (D.match(a0)) {
            var a1 = af(unescape(D), "sharehost", "&", "");
            var i = af(unescape(D), "appkey", "&", "");
            if ("" != a1) {
                aJ(ah, a1, "", "weibo.com")
            }
            aJ("appkey", i, "", "weibo.com")
        }
    }
    function f(e, i) {
        P(e, i)
    }
    function P(i, D) {
        D = D || {};
        var e = new Image(),
        aZ;
        if (D && D.callback && typeof D.callback == "function") {
            e.onload = function() {
                clearTimeout(aZ);
                aZ = null;
                D.callback(true)
            }
        }
        SUDA.img = e;
        e.src = i;
        aZ = setTimeout(function() {
            if (D && D.callback && typeof D.callback == "function") {
                D.callback(false);
                e.onload = null
            }
        },
        D.timeout || 2000)
    }
    function B(e, aZ, D, a0) {
        SUDA.sudaCount++;
        if (!aL.visitorId() && !U()) {
            if (x < 3) {
                x++;
                setTimeout(B, 500);
                return
            }
        }
        var i = W + [ax.V(), ax.CI(), ax.PI(e), ax.UI(), ax.MT(), ax.EX(aZ, D), ax.R()].join("&");
        P(i, a0)
    }
    function C(e, D, i) {
        if (aY || F) {
            return
        }
        if (SUDA.sudaCount != 0) {
            return
        }
        B(e, D, i)
    }
    function an(e, aZ) {
        if (("" == e) || (undefined == e)) {
            return
        }
        aL.setAEC(e);
        if (0 == aZ) {
            return
        }
        var D = "AcTrack||" + w(am) + "||" + w(Q) + "||" + aL.userNick() + "||" + e + "||";
        var i = av + D + "&gUid_" + new Date().getTime();
        f(i)
    }
    function aG(a0, e, i, a1) {
        a1 = a1 || {};
        if (!i) {
            i = ""
        } else {
            i = escape(i)
        }
        var aZ = "UATrack||" + w(am) + "||" + w(Q) + "||" + aL.userNick() + "||" + a0 + "||" + e + "||" + ar.referrer() + "||" + i + "||" + (a1.realUrl || "") + "||" + aL.subp() + "||" + a1.ext;
        var D = av + aZ + "&gUid_" + new Date().getTime();
        f(D, a1)
    }
    function aU(a2) {
        var i = h(a2);
        var a0 = i.target;
        var aZ = "",
        a3 = "",
        D = "";
        var a1;
        if (a0 != null && a0.getAttribute && (!a0.getAttribute("suda-uatrack") && !a0.getAttribute("suda-actrack") && !a0.getAttribute("suda-data"))) {
            while (a0 != null && a0.getAttribute && ( !! a0.getAttribute("suda-uatrack") || !!a0.getAttribute("suda-actrack") || !!a0.getAttribute("suda-data")) == false) {
                if (a0 == M.body) {
                    return
                }
                a0 = a0.parentNode
            }
        }
        if (a0 == null || a0.getAttribute == null) {
            return
        }
        aZ = a0.getAttribute("suda-actrack") || "";
        a3 = a0.getAttribute("suda-uatrack") || a0.getAttribute("suda-data") || "";
        sudaUrls = a0.getAttribute("suda-urls") || "";
        if (a3) {
            a1 = S(a3);
            if (a0.tagName.toLowerCase() == "a") {
                D = a0.href
            }
            opts = {};
            opts.ext = (a1.ext || "");
            a1.key && SUDA.uaTrack && SUDA.uaTrack(a1.key, a1.value || a1.key, D, opts)
        }
        if (aZ) {
            a1 = S(aZ);
            a1.key && SUDA.acTrack && SUDA.acTrack(a1.key, a1.value || a1.key)
        }
    }
    if (window.SUDA && Object.prototype.toString.call(window.SUDA) === "[object Array]") {
        for (var Z = 0,
        at = SUDA.length; Z < at; Z++) {
            switch (SUDA[Z][0]) {
            case "setGatherType":
                n = SUDA[Z][1];
                break;
            case "setGatherInfo":
                u = SUDA[Z][1] || u;
                b = SUDA[Z][2] || b;
                a = SUDA[Z][3] || a;
                break;
            case "setPerformance":
                aj = SUDA[Z][1];
                break;
            case "setPerformanceFilter":
                I = SUDA[Z][1];
                break;
            case "setPerformanceInterval":
                T = SUDA[Z][1] * 1 || 0;
                T = isNaN(T) ? 0 : T;
                break;
            case "setGatherMore":
                V.push(SUDA[Z].slice(1));
                break;
            case "acTrack":
                ac.push(SUDA[Z].slice(1));
                break;
            case "uaTrack":
                R.push(SUDA[Z].slice(1));
                break
            }
        }
    }
    aY = (function(D, i) {
        if (aw.top == aw) {
            return false
        } else {
            try {
                if (M.body.clientHeight == 0) {
                    return false
                }
                return ((M.body.clientHeight >= D) && (M.body.clientWidth >= i)) ? false: true
            } catch(aZ) {
                return true
            }
        }
    })(320, 240);
    F = (function() {
        return false
    })();
    aL.setUOR();
    var aK = aL.sessionId();
    window.SUDA = window.SUDA || [];
    SUDA.sudaCount = SUDA.sudaCount || 0;
    SUDA.log = function() {
        B.apply(null, arguments)
    };
    SUDA.acTrack = function() {
        an.apply(null, arguments)
    };
    SUDA.uaTrack = function() {
        aG.apply(null, arguments)
    };
    ae(M.body, "click", aU);
    window.GB_SUDA = SUDA;
    GB_SUDA._S_pSt = function() {};
    GB_SUDA._S_acTrack = function() {
        an.apply(null, arguments)
    };
    GB_SUDA._S_uaTrack = function() {
        aG.apply(null, arguments)
    };
    window._S_pSt = function() {};
    window._S_acTrack = function() {
        an.apply(null, arguments)
    };
    window._S_uaTrack = function() {
        aG.apply(null, arguments)
    };
    window._S_PID_ = "";
    if (!window.SUDA.disableClickstream) {
        C()
    }
    try {
        l()
    } catch(ad) {}
    function J(e) {
        var i;
        i = e + "=";
        offset = document.cookie.indexOf(i);
        if (offset != -1) {
            offset += i.length;
            end = document.cookie.indexOf(";", offset);
            if (end == -1) {
                end = document.cookie.length
            }
            return document.cookie.substring(offset, end)
        } else {
            return ""
        }
    }
    function O(i, aZ, a2, a1, a0) {
        var e = new sinaadToolkit.Box({
            width: 160,
            height: 160,
            position: "left bottom",
            follow: 1,
            zIndex: 10010,
            autoShow: 1
        });
        e.getMain().innerHTML = sinaadToolkit.ad.createHTML("image", "http://newsurvey.client.sina.com.cn/PerUserData/1/invite.png", "160px", "160px", "http://newsurvey.client.sina.com.cn/q.php?qname=survey_pc2016");
        var D = document.createElement("div");
        D.style.cssText += ";width: 40px; height: 18px; position: absolute; right: 0px; top: 0px; cursor: pointer; background: url(http://newsurvey.client.sina.com.cn/static/img/close-h.jpg) 0% 50% no-repeat rgb(235, 235, 235);";
        e.getMain().appendChild(D);
        D.onclick = function() {
            e.hide()
        }
    }
    var N = "user_survey";
    var p = 30;
    var al = 3;
    var c = 50;
    var aN = "";
    var G = "";
    var z = 750;
    var K = 600;
    var s = new Array(480);
    function aI(i) {
        var e = w(N);
        if (e != "") {
            e = (parseInt(e) + 1) + ""
        } else {
            e = "1"
        }
        if (i != "" && i != "undefined" && i != null) {
            e = i
        }
        aJ(N, e, p)
    }
    function ap(e) {
        if (w(e) == "") {
            return false
        }
        return true
    }
    function aT(i) {
        var e = Math.floor(Math.random() * 100);
        if (i > e) {
            return true
        } else {
            return false
        }
    }
    function ak() {
        var i = /\/(www|news|finance|sports|fashion|eladies|ent|tech|auto|video|edu|travel|astro|baby|test\.www|data|webtest|)\.sina\.com\.cn.*/;
        var e = /\/iframe\//;
        var D = document.location.href.toLowerCase();
        if (D.match(i) && !D.match(e)) {
            return true
        } else {
            return false
        }
    }
    function ao() {
        var i = Math.floor(Math.random() * s.length);
        var e = O(s[i], 0, 100, z, K)
    }
    function ab() {
        dt = new Date();
        sdt = ((dt.getYear() + 1900) * 10000 + (1 + dt.getMonth()) * 100 + dt.getDate()).toString();
        var e = w(N);
        if (e == "" || e.length != 10 || e.search(sdt) != 0) {
            aJ(N, sdt + "00");
            return true
        } else {
            cnt = parseInt(e.substr(8, 2));
            if (cnt < (al - 1)) {
                cnt++;
                aJ(N, sdt + "0" + cnt);
                return true
            } else {
                return false
            }
        }
    }
    function aA() {
        try {
            if (!ak()) {
                return
            }
            var i = w(G);
            if (i == "1") {
                return
            }
            if (aT(c)) {
                if (ab()) {
                    ao()
                } else {}
            }
        } catch(D) {}
    }
    poploopcnt = 0;
    if (typeof(sinaadToolkit) == "undefined" && poploopcnt < 3) {
        poploopcnt++;
        setTimeout(aA, 2000)
    } else {
        if (! (typeof(sinaadToolkit) == "undefined")) {
            aA()
        }
    }
})();