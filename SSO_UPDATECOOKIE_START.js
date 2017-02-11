var sinaSSOManager = sinaSSOManager || {};
sinaSSOManager.q = function(b) {
    if (typeof b != "object") {
        return ""
    }
    var a = new Array();
    for (key in b) {
        a.push(key + "=" + encodeURIComponent(b[key]))
    }
    return a.join("&")
};
sinaSSOManager.es = function(f, d, e) {
    var c = document.getElementsByTagName("head")[0];
    var a = document.getElementById(f);
    if (a) {
        c.removeChild(a)
    }
    var b = document.createElement("script");
    if (e) {
        b.charset = e
    } else {
        b.charset = "UTF-8"
    }
    b.id = f;
    b.type = "text/javascript";
    d += (/\?/.test(d) ? "&": "?") + "_=" + (new Date()).getTime();
    b.src = d;
    c.appendChild(b)
};
sinaSSOManager.doCrossDomainCallBack = function(a) {
    sinaSSOManager.crossDomainCounter++;
    document.getElementsByTagName("head")[0].removeChild(document.getElementById(a.scriptId))
};
sinaSSOManager.crossDomainCallBack = function(a) {
    if (!a || a.retcode != 0) {
        return false
    }
    var d = a.arrURL;
    var b, f;
    var e = {
        callback: "sinaSSOManager.doCrossDomainCallBack"
    };
    sinaSSOManager.crossDomainCounter = 0;
    if (d.length == 0) {
        return true
    }
    for (var c = 0; c < d.length; c++) {
        b = d[c];
        f = "ssoscript" + c;
        e.scriptId = f;
        b = b + (/\?/.test(b) ? "&": "?") + sinaSSOManager.q(e);
        sinaSSOManager.es(f, b)
    }
};
sinaSSOManager.updateCookieCallBack = function(c) {
    var d = "ssoCrossDomainScriptId";
    var a = "http://login.sina.com.cn/sso/crossdomain.php";
    if (c.retcode == 0) {
        var e = {
            scriptId: d,
            callback: "sinaSSOManager.crossDomainCallBack",
            action: "login",
            domain: "sina.com.cn"
        };
        var b = a + "?" + sinaSSOManager.q(e);
        sinaSSOManager.es(d, b)
    } else {}
};
sinaSSOManager.updateCookie = function() {
    var g = 1800;
    var p = 7200;
    var b = "ssoLoginScript";
    var h = 3600 * 24;
    var i = "sina.com.cn";
    var m = 1800;
    var l = "http://login.sina.com.cn/sso/updatetgt.php";
    var n = null;
    var f = function(e) {
        var r = null;
        var q = null;
        switch (e) {
        case "sina.com.cn":
            q = sinaSSOManager.getSinaCookie();
            if (q) {
                r = q.et
            }
            break;
        case "sina.cn":
            q = sinaSSOManager.getSinaCookie();
            if (q) {
                r = q.et
            }
            break;
        case "51uc.com":
            q = sinaSSOManager.getSinaCookie();
            if (q) {
                r = q.et
            }
            break
        }
        return r
    };
    var j = function() {
        try {
            return f(i)
        } catch(e) {
            return null
        }
    };
    try {
        if (g > 5) {
            if (n != null) {
                clearTimeout(n)
            }
            n = setTimeout("sinaSSOManager.updateCookie()", g * 1000)
        }
        var d = j();
        var c = (new Date()).getTime() / 1000;
        var o = {};
        if (d == null) {
            o = {
                retcode: 6102
            }
        } else {
            if (d < c) {
                o = {
                    retcode: 6203
                }
            } else {
                if (d - h + m > c) {
                    o = {
                        retcode: 6110
                    }
                } else {
                    if (d - c > p) {
                        o = {
                            retcode: 6111
                        }
                    }
                }
            }
        }
        if (o.retcode !== undefined) {
            return false
        }
        var a = l + "?callback=sinaSSOManager.updateCookieCallBack";
        sinaSSOManager.es(b, a)
    } catch(k) {}
    return true
};
sinaSSOManager.updateCookie();