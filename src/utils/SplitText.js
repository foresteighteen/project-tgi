var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
! function (e) {
  var t = e.GreenSockGlobals || e,
    a = function (e) {
      var a, n = e.split("."),
        s = t;
      for (a = 0; a < n.length; a++) s[n[a]] = s = s[n[a]] || {};
      return s
    },
    n = a("com.greensock.utils"),
    s = function e(t) {
      var a = t.nodeType,
        n = "";
      if (1 === a || 9 === a || 11 === a) {
        if ("string" === typeof t.textContent) return t.textContent;
        for (t = t.firstChild; t; t = t.nextSibling) n += e(t)
      } else if (3 === a || 4 === a) return t.nodeValue;
      return n
    },
    r = document,
    i = r.defaultView ? r.defaultView.getComputedStyle : function () {},
    o = /([A-Z])/g,
    l = function (e, t, a, n) {
      var s;
      return (a = a || i(e, null)) ? (e = a.getPropertyValue(t.replace(o, "-$1").toLowerCase()), s = e || a.length ? e : a[t]) : e.currentStyle && (a = e.currentStyle, s = a[t]), n ? s : parseInt(s, 10) || 0
    },
    c = function (e) {
      return !!(e.length && e[0] && (e[0].nodeType && e[0].style && !e.nodeType || e[0].length && e[0][0]))
    },
    u = function (e) {
      var t, a, n, s = [],
        r = e.length;
      for (t = 0; t < r; t++)
        if (a = e[t], c(a))
          for (n = a.length, n = 0; n < a.length; n++) s.push(a[n]);
        else s.push(a);
      return s
    },
    d = function (e, t) {
      var a, n = t.length;
      while (--n > -1)
        if (a = t[n], e.substr(0, a.length) === a) return a.length
    },
    p = /(?:\r|\n|\t\t)/g,
    h = /(?:\s\s+)/g,
    m = 55296,
    f = 56319,
    v = 56320,
    _ = 127462,
    g = 127487,
    b = 127995,
    y = 127999,
    S = function (e) {
      return (e.charCodeAt(0) - m << 10) + (e.charCodeAt(1) - v) + 65536
    },
    C = r.all && !r.addEventListener,
    E = " style='position:relative;display:inline-block;" + (C ? "*display:inline;*zoom:1;'" : "'"),
    w = function (e, t) {
      e = e || "";
      var a = -1 !== e.indexOf("++"),
        n = 1;
      return a && (e = e.split("++").join("")),
        function () {
          return "<" + t + E + (e ? " class='" + e + (a ? n++ : "") + "'>" : ">")
        }
    },
    O = n.SplitText = t.SplitText = function (e, t) {
      if ("string" === typeof e && (e = O.selector(e)), !e) throw "cannot split a null element.";
      this.elements = c(e) ? u(e) : [e], this.chars = [], this.words = [], this.lines = [], this._originals = [], this.vars = t || {}, this.split(t)
    },
    I = function e(t, a, n) {
      var s = t.nodeType;
      if (1 === s || 9 === s || 11 === s)
        for (t = t.firstChild; t; t = t.nextSibling) e(t, a, n);
      else 3 !== s && 4 !== s || (t.nodeValue = t.nodeValue.split(a).join(n))
    },
    A = function (e, t) {
      var a = t.length;
      while (--a > -1) e.push(t[a])
    },
    $ = function (e) {
      var t, a = [],
        n = e.length;
      for (t = 0; t !== n; a.push(e[t++]));
      return a
    },
    T = function (e, t, a) {
      var n;
      while (e && e !== t) {
        if (n = e._next || e.nextSibling, n) return n.textContent.charAt(0) === a;
        e = e.parentNode || e._parent
      }
      return !1
    },
    L = function e(t) {
      var a, n, s = $(t.childNodes),
        r = s.length;
      for (a = 0; a < r; a++) n = s[a], n._isSplit ? e(n) : (a && 3 === n.previousSibling.nodeType ? n.previousSibling.nodeValue += 3 === n.nodeType ? n.nodeValue : n.firstChild.nodeValue : 3 !== n.nodeType && t.insertBefore(n.firstChild, n), t.removeChild(n))
    },
    x = function (e, t, a, n, s, o, c) {
      var u, d, p, h, m, f, v, _, g, b, y, S, C = i(e),
        E = l(e, "paddingLeft", C),
        w = -999,
        O = l(e, "borderBottomWidth", C) + l(e, "borderTopWidth", C),
        $ = l(e, "borderLeftWidth", C) + l(e, "borderRightWidth", C),
        x = l(e, "paddingTop", C) + l(e, "paddingBottom", C),
        P = l(e, "paddingLeft", C) + l(e, "paddingRight", C),
        k = .2 * l(e, "fontSize"),
        D = l(e, "textAlign", C, !0),
        N = [],
        R = [],
        M = [],
        q = t.wordDelimiter || " ",
        H = t.span ? "span" : "div",
        j = t.type || t.split || "chars,words,lines",
        F = s && -1 !== j.indexOf("lines") ? [] : null,
        B = -1 !== j.indexOf("words"),
        z = -1 !== j.indexOf("chars"),
        V = "absolute" === t.position || !0 === t.absolute,
        G = t.linesClass,
        U = -1 !== (G || "").indexOf("++"),
        Y = [];
      for (U && (G = G.split("++").join("")), d = e.getElementsByTagName("*"), p = d.length, m = [], u = 0; u < p; u++) m[u] = d[u];
      if (F || V)
        for (u = 0; u < p; u++) h = m[u], f = h.parentNode === e, (f || V || z && !B) && (S = h.offsetTop, F && f && Math.abs(S - w) > k && ("BR" !== h.nodeName || 0 === u) && (v = [], F.push(v), w = S), V && (h._x = h.offsetLeft, h._y = S, h._w = h.offsetWidth, h._h = h.offsetHeight), F && ((h._isSplit && f || !z && f || B && f || !B && h.parentNode.parentNode === e && !h.parentNode._isSplit) && (v.push(h), h._x -= E, T(h, e, q) && (h._wordEnd = !0)), "BR" === h.nodeName && (h.nextSibling && "BR" === h.nextSibling.nodeName || 0 === u) && F.push([])));
      for (u = 0; u < p; u++) h = m[u], f = h.parentNode === e, "BR" !== h.nodeName ? (V && (g = h.style, B || f || (h._x += h.parentNode._x, h._y += h.parentNode._y), g.left = h._x + "px", g.top = h._y + "px", g.position = "absolute", g.display = "block", g.width = h._w + 1 + "px", g.height = h._h + "px"), !B && z ? h._isSplit ? (h._next = h.nextSibling, h.parentNode.appendChild(h)) : h.parentNode._isSplit ? (h._parent = h.parentNode, !h.previousSibling && h.firstChild && (h.firstChild._isFirst = !0), h.nextSibling && " " === h.nextSibling.textContent && !h.nextSibling.nextSibling && Y.push(h.nextSibling), h._next = h.nextSibling && h.nextSibling._isFirst ? null : h.nextSibling, h.parentNode.removeChild(h), m.splice(u--, 1), p--) : f || (S = !h.nextSibling && T(h.parentNode, e, q), h.parentNode._parent && h.parentNode._parent.appendChild(h), S && h.parentNode.appendChild(r.createTextNode(" ")), t.span && (h.style.display = "inline"), N.push(h)) : h.parentNode._isSplit && !h._isSplit && "" !== h.innerHTML ? R.push(h) : z && !h._isSplit && (t.span && (h.style.display = "inline"), N.push(h))) : F || V ? (h.parentNode && h.parentNode.removeChild(h), m.splice(u--, 1), p--) : B || e.appendChild(h);
      u = Y.length;
      while (--u > -1) Y[u].parentNode.removeChild(Y[u]);
      if (F) {
        V && (b = r.createElement(H), e.appendChild(b), y = b.offsetWidth + "px", S = b.offsetParent === e ? 0 : e.offsetLeft, e.removeChild(b)), g = e.style.cssText, e.style.cssText = "display:none;";
        while (e.firstChild) e.removeChild(e.firstChild);
        for (_ = " " === q && (!V || !B && !z), u = 0; u < F.length; u++) {
          for (v = F[u], b = r.createElement(H), b.style.cssText = "display:block;text-align:" + D + ";position:" + (V ? "absolute;" : "relative;"), G && (b.className = G + (U ? u + 1 : "")), M.push(b), p = v.length, d = 0; d < p; d++) "BR" !== v[d].nodeName && (h = v[d], b.appendChild(h), _ && h._wordEnd && b.appendChild(r.createTextNode(" ")), V && (0 === d && (b.style.top = h._y + "px", b.style.left = E + S + "px"), h.style.top = "0px", S && (h.style.left = h._x - S + "px")));
          0 === p ? b.innerHTML = "&nbsp;" : B || z || (L(b), I(b, String.fromCharCode(160), " ")), V && (b.style.width = y, b.style.height = h._h + "px"), e.appendChild(b)
        }
        e.style.cssText = g
      }
      V && (c > e.clientHeight && (e.style.height = c - x + "px", e.clientHeight < c && (e.style.height = c + O + "px")), o > e.clientWidth && (e.style.width = o - P + "px", e.clientWidth < o && (e.style.width = o + $ + "px"))), A(a, N), A(n, R), A(s, M)
    },
    P = function (e, t, a, n) {
      var i, o, l, c, u, v, C, E, w, O, A = t.span ? "span" : "div",
        $ = t.type || t.split || "chars,words,lines",
        T = -1 !== $.indexOf("chars"),
        L = "absolute" === t.position || !0 === t.absolute,
        x = t.wordDelimiter || " ",
        P = " " !== x ? "" : L ? "&#173; " : " ",
        k = t.span ? "</span>" : "</div>",
        D = !0,
        N = t.specialChars ? "function" === typeof t.specialChars ? t.specialChars : d : null,
        R = r.createElement("div"),
        M = e.parentNode;
      for (M.insertBefore(R, e), R.textContent = e.nodeValue, M.removeChild(e), e = R, i = s(e), C = -1 !== i.indexOf("<"), !1 !== t.reduceWhiteSpace && (i = i.replace(h, " ").replace(p, "")), C && (i = i.split("<").join("{{LT}}")), u = i.length, o = (" " === i.charAt(0) ? P : "") + a(), l = 0; l < u; l++)
        if (v = i.charAt(l), N && (O = N(i.substr(l), t.specialChars))) v = i.substr(l, O || 1), o += T && " " !== v ? n() + v + "</" + A + ">" : v, l += O - 1;
        else if (v === x && i.charAt(l - 1) !== x && l) {
        o += D ? k : "", D = !1;
        while (i.charAt(l + 1) === x) o += P, l++;
        l === u - 1 ? o += P : ")" !== i.charAt(l + 1) && (o += P + a(), D = !0)
      } else "{" === v && "{{LT}}" === i.substr(l, 6) ? (o += T ? n() + "{{LT}}</" + A + ">" : "{{LT}}", l += 5) : v.charCodeAt(0) >= m && v.charCodeAt(0) <= f || i.charCodeAt(l + 1) >= 65024 && i.charCodeAt(l + 1) <= 65039 ? (E = S(i.substr(l, 2)), w = S(i.substr(l + 2, 2)), c = E >= _ && E <= g && w >= _ && w <= g || w >= b && w <= y ? 4 : 2, o += T && " " !== v ? n() + i.substr(l, c) + "</" + A + ">" : i.substr(l, c), l += c - 1) : o += T && " " !== v ? n() + v + "</" + A + ">" : v;
      e.outerHTML = o + (D ? k : ""), C && I(M, "{{LT}}", "<")
    },
    k = function e(t, a, n, s) {
      var r, i, o = $(t.childNodes),
        c = o.length,
        u = "absolute" === a.position || !0 === a.absolute;
      if (3 !== t.nodeType || c > 1) {
        for (a.absolute = !1, r = 0; r < c; r++) i = o[r], (3 !== i.nodeType || /\S+/.test(i.nodeValue)) && (u && 3 !== i.nodeType && "inline" === l(i, "display", null, !0) && (i.style.display = "inline-block", i.style.position = "relative"), i._isSplit = !0, e(i, a, n, s));
        return a.absolute = u, void(t._isSplit = !0)
      }
      P(t, a, n, s)
    },
    D = O.prototype;
  D.split = function (e) {
    this.isSplit && this.revert(), this.vars = e = e || this.vars, this._originals.length = this.chars.length = this.words.length = this.lines.length = 0;
    var t, a, n, s = this.elements.length,
      r = e.span ? "span" : "div",
      i = w(e.wordsClass, r),
      o = w(e.charsClass, r);
    while (--s > -1) n = this.elements[s], this._originals[s] = n.innerHTML, t = n.clientHeight, a = n.clientWidth, k(n, e, i, o), x(n, e, this.chars, this.words, this.lines, a, t);
    return this.chars.reverse(), this.words.reverse(), this.lines.reverse(), this.isSplit = !0, this
  }, D.revert = function () {
    if (!this._originals) throw "revert() call wasn't scoped properly.";
    var e = this._originals.length;
    while (--e > -1) this.elements[e].innerHTML = this._originals[e];
    return this.chars = [], this.words = [], this.lines = [], this.isSplit = !1, this
  }, O.selector = e.$ || e.jQuery || function (t) {
    var a = e.$ || e.jQuery;
    return a ? (O.selector = a, a(t)) : "undefined" === typeof document ? t : document.querySelectorAll ? document.querySelectorAll(t) : document.getElementById("#" === t.charAt(0) ? t.substr(1) : t)
  }, O.version = "0.6.1"
}(_gsScope),
function (e) {
  "use strict";
  var t = function () {
    return (_gsScope.GreenSockGlobals || _gsScope).SplitText
  };
  "undefined" != typeof module && module.exports ? module.exports = t() : "function" == typeof define && define.amd && define([], t)
}();