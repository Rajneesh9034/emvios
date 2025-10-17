(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6630], {
        2492: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => n
            });
            let n = {
                src: "/_next/static/media/statistics_aush.3b35cbc8.svg",
                height: 25,
                width: 24,
                blurWidth: 0,
                blurHeight: 0
            }
        },
        4061: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => n
            });
            let n = {
                src: "/_next/static/media/wallets.00ebfa6e.svg",
                height: 25,
                width: 24,
                blurWidth: 0,
                blurHeight: 0
            }
        },
        5623: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => n
            });
            let n = (0, r(19946).A)("Ellipsis", [
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "1",
                    key: "41hilf"
                }],
                ["circle", {
                    cx: "19",
                    cy: "12",
                    r: "1",
                    key: "1wjl8i"
                }],
                ["circle", {
                    cx: "5",
                    cy: "12",
                    r: "1",
                    key: "1pcz8c"
                }]
            ])
        },
        6101: (e, t, r) => {
            "use strict";
            r.d(t, {
                s: () => l,
                t: () => a
            });
            var n = r(12115);

            function i(e, t) {
                if ("function" == typeof e) return e(t);
                null != e && (e.current = t)
            }

            function a(...e) {
                return t => {
                    let r = !1,
                        n = e.map(e => {
                            let n = i(e, t);
                            return r || "function" != typeof n || (r = !0), n
                        });
                    if (r) return () => {
                        for (let t = 0; t < n.length; t++) {
                            let r = n[t];
                            "function" == typeof r ? r() : i(e[t], null)
                        }
                    }
                }
            }

            function l(...e) {
                return n.useCallback(a(...e), e)
            }
        },
        6654: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "useMergedRef", {
                enumerable: !0,
                get: function() {
                    return i
                }
            });
            let n = r(12115);

            function i(e, t) {
                let r = (0, n.useRef)(null),
                    i = (0, n.useRef)(null);
                return (0, n.useCallback)(n => {
                    if (null === n) {
                        let e = r.current;
                        e && (r.current = null, e());
                        let t = i.current;
                        t && (i.current = null, t())
                    } else e && (r.current = a(e, n)), t && (i.current = a(t, n))
                }, [e, t])
            }

            function a(e, t) {
                if ("function" != typeof e) return e.current = t, () => {
                    e.current = null
                }; {
                    let r = e(t);
                    return "function" == typeof r ? r : () => e(null)
                }
            }("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        7874: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => n
            });
            let n = {
                src: "/_next/static/media/withdrawal.3aa2694c.svg",
                height: 24,
                width: 24,
                blurWidth: 0,
                blurHeight: 0
            }
        },
        9898: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => n
            });
            let n = {
                src: "/_next/static/media/affiliate.069e1aaf.svg",
                height: 25,
                width: 24,
                blurWidth: 0,
                blurHeight: 0
            }
        },
        13052: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => n
            });
            let n = (0, r(19946).A)("ChevronRight", [
                ["path", {
                    d: "m9 18 6-6-6-6",
                    key: "mthhwq"
                }]
            ])
        },
        17652: (e, t, r) => {
            "use strict";
            r.d(t, {
                c3: () => a
            });
            var n = r(46453);

            function i(e, t) {
                return (...e) => {
                    try {
                        return t(...e)
                    } catch {
                        throw Error(void 0)
                    }
                }
            }
            let a = i(0, n.c3);
            i(0, n.kc)
        },
        18986: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => i
            });
            var n = r(32850);

            function i(e, t, r, i) {
                if (!e || i === r || null == i || !t) return;
                let a = (0, n.DT)(t),
                    {
                        name: l,
                        ...c
                    } = e;
                c.path || (c.path = "" !== a ? a : "/");
                let s = `${l}=${i};`;
                for (let [e, t] of Object.entries(c)) s += `${"maxAge"===e?"max-age":e}`, "boolean" != typeof t && (s += "=" + t), s += ";";
                document.cookie = s
            }
        },
        19946: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => s
            });
            var n = r(12115);
            let i = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
                a = function() {
                    for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                    return t.filter((e, t, r) => !!e && r.indexOf(e) === t).join(" ")
                };
            var l = {
                xmlns: "http://www.w3.org/2000/svg",
                width: 24,
                height: 24,
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: 2,
                strokeLinecap: "round",
                strokeLinejoin: "round"
            };
            let c = (0, n.forwardRef)((e, t) => {
                    let {
                        color: r = "currentColor",
                        size: i = 24,
                        strokeWidth: c = 2,
                        absoluteStrokeWidth: s,
                        className: o = "",
                        children: u,
                        iconNode: d,
                        ...f
                    } = e;
                    return (0, n.createElement)("svg", {
                        ref: t,
                        ...l,
                        width: i,
                        height: i,
                        stroke: r,
                        strokeWidth: s ? 24 * Number(c) / Number(i) : c,
                        className: a("lucide", o),
                        ...f
                    }, [...d.map(e => {
                        let [t, r] = e;
                        return (0, n.createElement)(t, r)
                    }), ...Array.isArray(u) ? u : [u]])
                }),
                s = (e, t) => {
                    let r = (0, n.forwardRef)((r, l) => {
                        let {
                            className: s,
                            ...o
                        } = r;
                        return (0, n.createElement)(c, {
                            ref: l,
                            iconNode: t,
                            className: a("lucide-".concat(i(e)), s),
                            ...o
                        })
                    });
                    return r.displayName = "".concat(e), r
                }
        },
        22421: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => n
            });
            let n = {
                src: "/_next/static/media/replenishment.54d6b95c.svg",
                height: 24,
                width: 24,
                blurWidth: 0,
                blurHeight: 0
            }
        },
        23225: (e, t, r) => {
            "use strict";
            r.d(t, {
                FD: () => y,
                MY: () => a,
                PJ: () => l,
                Wl: () => s,
                XP: () => d,
                _x: () => i,
                bL: () => f,
                po: () => o,
                ql: () => u,
                wO: () => c,
                yL: () => x
            });
            var n = r(87358);

            function i(e) {
                return ("object" == typeof e ? null == e.host && null == e.hostname : !/^[a-z]+:/i.test(e)) && ! function(e) {
                    let t = "object" == typeof e ? e.pathname : e;
                    return null != t && !t.startsWith("/")
                }(e)
            }

            function a(e, t) {
                return e.replace(RegExp(`^${t}`), "") || "/"
            }

            function l(e, t) {
                let r = e;
                return /^\/(\?.*)?$/.test(t) && (t = t.slice(1)), r += t
            }

            function c(e, t) {
                return t === e || t.startsWith(`${e}/`)
            }

            function s(e, t, r) {
                return "string" == typeof e ? e : e[t] || r
            }

            function o(e) {
                let t = function() {
                    try {
                        return "true" === n.env._next_intl_trailing_slash
                    } catch {
                        return !1
                    }
                }();
                if ("/" !== e) {
                    let r = e.endsWith("/");
                    t && !r ? e += "/" : !t && r && (e = e.slice(0, -1))
                }
                return e
            }

            function u(e, t) {
                let r = o(e),
                    n = o(t);
                return (function(e) {
                    let t = e.replace(/\[\[(\.\.\.[^\]]+)\]\]/g, "?(.*)").replace(/\[(\.\.\.[^\]]+)\]/g, "(.+)").replace(/\[([^\]]+)\]/g, "([^/]+)");
                    return RegExp(`^${t}$`)
                })(r).test(n)
            }

            function d(e, t) {
                return "never" !== t.mode && t.prefixes ? .[e] || f(e)
            }

            function f(e) {
                return "/" + e
            }

            function h(e) {
                return e.includes("[[...")
            }

            function p(e) {
                return e.includes("[...")
            }

            function m(e) {
                return e.includes("[")
            }

            function g(e, t) {
                let r = e.split("/"),
                    n = t.split("/"),
                    i = Math.max(r.length, n.length);
                for (let e = 0; e < i; e++) {
                    let t = r[e],
                        i = n[e];
                    if (!t && i) return -1;
                    if (t && !i) return 1;
                    if (t || i) {
                        if (!m(t) && m(i)) return -1;
                        if (m(t) && !m(i)) return 1;
                        if (!p(t) && p(i)) return -1;
                        if (p(t) && !p(i)) return 1;
                        if (!h(t) && h(i)) return -1;
                        if (h(t) && !h(i)) return 1
                    }
                }
                return 0
            }

            function y(e) {
                return e.sort(g)
            }

            function x(e) {
                return "function" == typeof e.then
            }
        },
        24444: (e, t, r) => {
            "use strict";
            r.r(t), r.d(t, {
                default: () => n
            });
            let n = {
                src: "/_next/static/media/trading.47071606.svg",
                height: 36,
                width: 35,
                blurWidth: 0,
                blurHeight: 0
            }
        },
        26665: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => n
            });
            let n = {
                src: "/_next/static/media/investments.39330b64.svg",
                height: 25,
                width: 24,
                blurWidth: 0,
                blurHeight: 0
            }
        },
        29300: (e, t) => {
            var r;
            ! function() {
                "use strict";
                var n = {}.hasOwnProperty;

                function i() {
                    for (var e = "", t = 0; t < arguments.length; t++) {
                        var r = arguments[t];
                        r && (e = a(e, function(e) {
                            if ("string" == typeof e || "number" == typeof e) return e;
                            if ("object" != typeof e) return "";
                            if (Array.isArray(e)) return i.apply(null, e);
                            if (e.toString !== Object.prototype.toString && !e.toString.toString().includes("[native code]")) return e.toString();
                            var t = "";
                            for (var r in e) n.call(e, r) && e[r] && (t = a(t, r));
                            return t
                        }(r)))
                    }
                    return e
                }

                function a(e, t) {
                    return t ? e ? e + " " + t : e + t : e
                }
                e.exports ? (i.default = i, e.exports = i) : void 0 === (r = (function() {
                    return i
                }).apply(t, [])) || (e.exports = r)
            }()
        },
        30981: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => h
            });
            var n = r(35695),
                i = r(12115),
                a = r.t(i, 2),
                l = r(46453),
                c = a["use".trim()],
                s = r(23225),
                o = r(46160),
                u = r(32850),
                d = r(95155),
                f = r(18986);

            function h(e) {
                let {
                    Link: t,
                    config: r,
                    getPathname: a,
                    ...h
                } = function(e, t) {
                    var r, a, l;
                    let f = { ...r = t || {},
                            localePrefix: "object" == typeof(l = r.localePrefix) ? l : {
                                mode: l || "always"
                            },
                            localeCookie: !!((a = r.localeCookie) ? ? 1) && {
                                name: "NEXT_LOCALE",
                                sameSite: "lax",
                                ..."object" == typeof a && a
                            },
                            localeDetection: r.localeDetection ? ? !0,
                            alternateLinks: r.alternateLinks ? ? !0
                        },
                        h = f.pathnames,
                        p = (0, i.forwardRef)(function({
                            href: t,
                            locale: r,
                            ...n
                        }, i) {
                            let a, l;
                            "object" == typeof t ? (a = t.pathname, l = t.params) : a = t;
                            let u = (0, s._x)(t),
                                p = e(),
                                g = (0, s.yL)(p) ? c(p) : p,
                                y = u ? m({
                                    locale: r || g,
                                    href: null == h ? a : {
                                        pathname: a,
                                        params: l
                                    }
                                }, null != r || void 0) : a;
                            return (0, d.jsx)(o.default, {
                                ref: i,
                                href: "object" == typeof t ? { ...t,
                                    pathname: y
                                } : y,
                                locale: r,
                                localeCookie: f.localeCookie,
                                ...n
                            })
                        });

                    function m(e, t) {
                        let r, {
                            href: n,
                            locale: i
                        } = e;
                        return null == h ? "object" == typeof n ? (r = n.pathname, n.query && (r += (0, u.Zn)(n.query))) : r = n : r = (0, u.FP)({
                            locale: i,
                            ...(0, u.TK)(n),
                            pathnames: f.pathnames
                        }), (0, u.x3)(r, i, f, t)
                    }

                    function g(e) {
                        return function(t, ...r) {
                            return e(m(t), ...r)
                        }
                    }
                    return {
                        config: f,
                        Link: p,
                        redirect: g(n.redirect),
                        permanentRedirect: g(n.permanentRedirect),
                        getPathname: m
                    }
                }(l.Ym, e);
                return { ...h,
                    Link: t,
                    usePathname: function() {
                        let e = function(e) {
                                let t = (0, n.usePathname)(),
                                    r = (0, l.Ym)();
                                return (0, i.useMemo)(() => {
                                    if (!t) return t;
                                    let n = t,
                                        i = (0, s.XP)(r, e.localePrefix);
                                    if ((0, s.wO)(i, t)) n = (0, s.MY)(t, i);
                                    else if ("as-needed" === e.localePrefix.mode && e.localePrefix.prefixes) {
                                        let e = (0, s.bL)(r);
                                        (0, s.wO)(e, t) && (n = (0, s.MY)(t, e))
                                    }
                                    return n
                                }, [e.localePrefix, r, t])
                            }(r),
                            t = (0, l.Ym)();
                        return (0, i.useMemo)(() => e && r.pathnames ? (0, u.aM)(t, e, r.pathnames) : e, [t, e])
                    },
                    useRouter: function() {
                        let e = (0, n.useRouter)(),
                            t = (0, l.Ym)(),
                            c = (0, n.usePathname)();
                        return (0, i.useMemo)(() => {
                            function n(e) {
                                return function(n, i) {
                                    let {
                                        locale: l,
                                        ...s
                                    } = i || {}, o = [a({
                                        href: n,
                                        locale: l || t
                                    })];
                                    Object.keys(s).length > 0 && o.push(s), e(...o), (0, f.A)(r.localeCookie, c, t, l)
                                }
                            }
                            return { ...e,
                                push: n(e.push),
                                replace: n(e.replace),
                                prefetch: n(e.prefetch)
                            }
                        }, [t, c, e])
                    },
                    getPathname: a
                }
            }
        },
        32228: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => n
            });
            let n = {
                src: "/_next/static/media/help_center.ba18b5e1.svg",
                height: 21,
                width: 20,
                blurWidth: 0,
                blurHeight: 0
            }
        },
        32850: (e, t, r) => {
            "use strict";
            r.d(t, {
                DT: () => s,
                FP: () => l,
                TK: () => i,
                Zn: () => a,
                aM: () => c,
                x3: () => o
            });
            var n = r(23225);

            function i(e) {
                return "string" == typeof e ? {
                    pathname: e
                } : e
            }

            function a(e) {
                let t = new URLSearchParams;
                for (let [r, n] of Object.entries(e)) Array.isArray(n) ? n.forEach(e => {
                    t.append(r, String(e))
                }) : t.set(r, String(n));
                return "?" + t.toString()
            }

            function l({
                pathname: e,
                locale: t,
                params: r,
                pathnames: i,
                query: l
            }) {
                function c(e) {
                    let t = i[e];
                    return t || (t = e), t
                }

                function s(e, i) {
                    let c = (0, n.Wl)(e, t, i);
                    return r && Object.entries(r).forEach(([e, t]) => {
                        let r, n;
                        Array.isArray(t) ? (r = `(\\[)?\\[...${e}\\](\\])?`, n = t.map(e => String(e)).join("/")) : (r = `\\[${e}\\]`, n = String(t)), c = c.replace(RegExp(r, "g"), n)
                    }), c = c.replace(/\[\[\.\.\..+\]\]/g, ""), c = (0, n.po)(c), l && (c += a(l)), c
                }
                if ("string" == typeof e) return s(c(e), e); {
                    let {
                        pathname: t,
                        ...r
                    } = e;
                    return { ...r,
                        pathname: s(c(t), t)
                    }
                }
            }

            function c(e, t, r) {
                let i = (0, n.FD)(Object.keys(r)),
                    a = decodeURI(t);
                for (let t of i) {
                    let i = r[t];
                    if ("string" == typeof i) {
                        if ((0, n.ql)(i, a)) return t
                    } else if ((0, n.ql)((0, n.Wl)(i, e, t), a)) return t
                }
                return t
            }

            function s(e, t = window.location.pathname) {
                return "/" === e ? t : t.replace(e, "")
            }

            function o(e, t, r, i) {
                let a, {
                    mode: l
                } = r.localePrefix;
                return void 0 !== i ? a = i : (0, n._x)(e) && ("always" === l ? a = !0 : "as-needed" === l && (a = r.domains ? !r.domains.some(e => e.defaultLocale === t) : t !== r.defaultLocale)), a ? (0, n.PJ)((0, n.XP)(t, r.localePrefix), e) : e
            }
        },
        34322: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => n
            });
            let n = {
                src: "/_next/static/media/arbitrage.178727cc.svg",
                height: 84,
                width: 84,
                blurWidth: 0,
                blurHeight: 0
            }
        },
        34899: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => n
            });
            let n = {
                src: "/_next/static/media/dashboard.973257ea.svg",
                height: 25,
                width: 24,
                blurWidth: 0,
                blurHeight: 0
            }
        },
        35695: (e, t, r) => {
            "use strict";
            var n = r(18999);
            r.o(n, "permanentRedirect") && r.d(t, {
                permanentRedirect: function() {
                    return n.permanentRedirect
                }
            }), r.o(n, "redirect") && r.d(t, {
                redirect: function() {
                    return n.redirect
                }
            }), r.o(n, "usePathname") && r.d(t, {
                usePathname: function() {
                    return n.usePathname
                }
            }), r.o(n, "useRouter") && r.d(t, {
                useRouter: function() {
                    return n.useRouter
                }
            }), r.o(n, "useSelectedLayoutSegment") && r.d(t, {
                useSelectedLayoutSegment: function() {
                    return n.useSelectedLayoutSegment
                }
            }), r.o(n, "useSelectedLayoutSegments") && r.d(t, {
                useSelectedLayoutSegments: function() {
                    return n.useSelectedLayoutSegments
                }
            })
        },
        35747: (e, t, r) => {
            Promise.resolve().then(r.bind(r, 95060))
        },
        36396: (e, t, r) => {
            "use strict";
            r.d(t, {
                v: () => m,
                h: () => g
            });
            var n = r(34899),
                i = r(4061),
                a = r(26665),
                l = r(2492),
                c = r(9898),
                s = r(32228),
                o = r(34322),
                u = r(22421),
                d = r(7874),
                f = r(24444);
            let h = {
                src: "/_next/static/media/copy_trading.82e41326.svg",
                height: 48,
                width: 35,
                blurWidth: 0,
                blurHeight: 0
            };
            var p = r(47329);
            let m = [{
                    key: "item-0",
                    path: "dashboard",
                    icon: n.A.src,
                    text: "Dashboard"
                }, {
                    key: "item-1",
                    path: "wallets/replenishment",
                    icon: i.A.src,
                    text: "Wallets",
                    childs: [{
                        key: "item-10",
                        path: "/wallets/replenishment",
                        icon: u.A,
                        text: "Replenishment"
                    }, {
                        key: "item-9",
                        path: "/wallets/withdrawal",
                        icon: d.A,
                        text: "Withdrawal"
                    }, {
                        key: "item-8",
                        path: "/wallets/exchange",
                        icon: o.A,
                        text: "Exchange"
                    }]
                }, {
                    key: "item-2",
                    path: "/investments/automatictrading/dynamic",
                    icon: a.A.src,
                    text: "Investments",
                    childs: [{
                        key: "item-11",
                        path: "/investments/automatictrading/dynamic",
                        icon: f.default,
                        text: "Automatic Trading",
                        description: "Automated trading system"
                    }, {
                        key: "item-12",
                        path: "/investments/copytrading",
                        icon: h,
                        text: "Copy Trading",
                        description: "Long-term strategies from Emvios"
                    }, {
                        key: "item-13",
                        path: "/investments/crosschain",
                        icon: p.A,
                        text: "Cross-chain DEX Trading",
                        description: "Coming soon"
                    }]
                }, {
                    key: "item-3",
                    path: "statistics/all",
                    icon: l.A.src,
                    text: "Statistics"
                }, {
                    key: "item-4",
                    path: "affiliate",
                    icon: c.A.src,
                    text: "Affiliate Program"
                }, {
                    key: "item-5",
                    path: "helpcenter",
                    icon: s.A.src,
                    text: "Help Center"
                }],
                g = [{
                    key: "item-0",
                    path: "dashboard",
                    icon: n.A.src,
                    text: "Dashboard"
                }, {
                    key: "item-1",
                    path: "wallets",
                    icon: i.A.src,
                    text: "Wallets",
                    childs: [{
                        key: "item-10",
                        path: "",
                        icon: u.A.src,
                        text: "Replenishment"
                    }, {
                        key: "item-9",
                        path: "",
                        icon: d.A.src,
                        text: "Withdrawal"
                    }, {
                        key: "item-8",
                        path: "",
                        icon: o.A.src,
                        text: "Exchange"
                    }]
                }, {
                    key: "item-2",
                    path: "investments",
                    icon: a.A.src,
                    text: "Investments",
                    childs: [{
                        key: "item-11",
                        path: "",
                        icon: f.default.src,
                        text: "Automatic Trading"
                    }, {
                        key: "item-12",
                        path: "",
                        icon: h.src,
                        text: "Copy Trading"
                    }, {
                        key: "item-13",
                        path: "",
                        icon: p.A.src,
                        text: "Cross-chain DEX Trading"
                    }]
                }, {
                    key: "item-3",
                    path: "statistics",
                    icon: l.A.src,
                    text: "Statistics"
                }, {
                    key: "item-4",
                    path: "affiliate",
                    icon: c.A.src,
                    text: "Affiliate Program"
                }, {
                    key: "item-4",
                    path: "profile",
                    icon: "",
                    text: "Profile"
                }, {
                    key: "item-5",
                    path: "help",
                    icon: s.A.src,
                    text: "Help Center"
                }]
        },
        46160: (e, t, r) => {
            "use strict";
            r.d(t, {
                default: () => o
            });
            var n = r(6874),
                i = r(35695),
                a = r(12115),
                l = r(46453),
                c = r(18986),
                s = r(95155),
                o = (0, a.forwardRef)(function(e, t) {
                    let {
                        href: r,
                        locale: a,
                        localeCookie: o,
                        onClick: u,
                        prefetch: d,
                        ...f
                    } = e, h = (0, l.Ym)(), p = null != a && a !== h, m = (0, i.usePathname)();
                    return p && (d = !1), (0, s.jsx)(n, {
                        ref: t,
                        href: r,
                        hrefLang: p ? a : void 0,
                        onClick: function(e) {
                            (0, c.A)(o, m, h, a), u && u(e)
                        },
                        prefetch: d,
                        ...f
                    })
                })
        },
        47329: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => n
            });
            let n = {
                src: "/_next/static/media/cross_chain.aedc3b26.svg",
                height: 36,
                width: 35,
                blurWidth: 0,
                blurHeight: 0
            }
        },
        49984: (e, t, r) => {
            "use strict";

            function n(e) {
                return e
            }
            r.d(t, {
                A: () => n
            })
        },
        60388: (e, t, r) => {
            "use strict";
            r.d(t, {
                N_: () => a,
                a8: () => c,
                rd: () => s
            });
            var n = r(30981);
            let i = (0, r(49984).A)({
                    locales: ["en", "fr", "es", "ph", "hi", "hu", "cn", "cz", "jp", "id", "nl", "de", "it", "pt", "ro", "pl", "ar", "tr", "sk"],
                    defaultLocale: "en"
                }),
                {
                    Link: a,
                    redirect: l,
                    usePathname: c,
                    useRouter: s,
                    getPathname: o
                } = (0, n.A)(i)
        },
        95060: (e, t, r) => {
            "use strict";
            r.d(t, {
                BreadcrumbAuth: () => f
            });
            var n = r(95155),
                i = r(98057),
                a = r.n(i),
                l = r(35695),
                c = r(95063),
                s = r(60388),
                o = r(36396),
                u = r(17652),
                d = r(46453);
            let f = e => {
                let {
                    header: t = !1
                } = e, r = (0, u.c3)("Dashboard"), i = (0, d.Ym)(), f = (0, l.usePathname)(), h = f.split("/").filter((e, t) => 0 !== t && e !== i);
                return (0, n.jsx)("div", {
                    className: t ? a().breadcrumbHeader : a().breadcrumb,
                    children: (0, n.jsx)(c.Qp, {
                        children: (0, n.jsxs)(c.AB, {
                            children: [(0, n.jsx)(c.J5, {
                                children: (0, n.jsx)(c.w1, {
                                    children: (0, n.jsx)(s.N_, {
                                        href: "",
                                        children: r("personal_account")
                                    })
                                })
                            }), h.map((e, t) => {
                                let i = o.v.find(t => f.includes(t.path) && t.path === e);
                                return (0, n.jsxs)("span", {
                                    className: "flex gap-1.5 items-center",
                                    children: [(0, n.jsx)(c.tH, {}), h.length - 1 === t ? (0, n.jsx)(c.J5, {
                                        children: (0, n.jsx)("div", {
                                            className: "font-[400] text-[#000]",
                                            children: (0, n.jsx)(c.tJ, {
                                                className: "flex gap-[4px] items-center capitalize",
                                                children: i ? r(i.text.toLowerCase()) : "changepassword" == e ? r("change_password") : r(e.toLowerCase())
                                            })
                                        })
                                    }) : (0, n.jsx)(c.J5, {
                                        children: (0, n.jsx)(c.w1, {
                                            children: (0, n.jsx)(s.N_, {
                                                className: "capitalize",
                                                href: i ? "/".concat(i.path) : "/".concat(e),
                                                children: i ? r(i.text.toLowerCase()) : "changepassword" == e ? r("change_password") : r(e.toLowerCase())
                                            })
                                        })
                                    })]
                                }, t)
                            })]
                        })
                    })
                })
            }
        },
        95063: (e, t, r) => {
            "use strict";
            r.d(t, {
                AB: () => u,
                J5: () => d,
                Qp: () => o,
                tH: () => p,
                tJ: () => h,
                w1: () => f
            });
            var n = r(95155),
                i = r(12115),
                a = r(99708),
                l = r(13052),
                c = (r(5623), r(29300)),
                s = r.n(c);
            let o = i.forwardRef((e, t) => {
                let { ...r
                } = e;
                return (0, n.jsx)("nav", {
                    ref: t,
                    "aria-label": "breadcrumb",
                    ...r
                })
            });
            o.displayName = "Breadcrumb";
            let u = i.forwardRef((e, t) => {
                let {
                    className: r,
                    ...i
                } = e;
                return (0, n.jsx)("ol", {
                    ref: t,
                    className: s()("flex flex-wrap items-center gap-1.5 break-words text-sm sm:gap-2.5 justify-center", r),
                    ...i
                })
            });
            u.displayName = "BreadcrumbList";
            let d = i.forwardRef((e, t) => {
                let {
                    className: r,
                    ...i
                } = e;
                return (0, n.jsx)("li", {
                    ref: t,
                    className: s()("inline-flex items-center gap-1.5", r),
                    ...i
                })
            });
            d.displayName = "BreadcrumbItem";
            let f = i.forwardRef((e, t) => {
                let {
                    asChild: r,
                    className: i,
                    ...l
                } = e, c = r ? a.DX : "span";
                return (0, n.jsx)(c, {
                    ref: t,
                    className: s()("transition-colors hover:text-foreground", i),
                    ...l
                })
            });
            f.displayName = "BreadcrumbLink";
            let h = i.forwardRef((e, t) => {
                let {
                    className: r,
                    ...i
                } = e;
                return (0, n.jsx)("span", {
                    ref: t,
                    role: "link",
                    "aria-disabled": "true",
                    "aria-current": "page",
                    className: r,
                    ...i
                })
            });
            h.displayName = "BreadcrumbPage";
            let p = e => {
                let {
                    children: t,
                    className: r,
                    ...i
                } = e;
                return (0, n.jsx)("li", {
                    role: "presentation",
                    "aria-hidden": "true",
                    className: s()("[&>svg]:size-3.5", r),
                    ...i,
                    children: null != t ? t : (0, n.jsx)(l.A, {})
                })
            };
            p.displayName = "BreadcrumbSeparator"
        },
        98057: e => {
            e.exports = {
                breadcrumb: "breadcrumbAuth_breadcrumb__Log0f",
                breadcrumbHeader: "breadcrumbAuth_breadcrumbHeader__gJmD4"
            }
        },
        99708: (e, t, r) => {
            "use strict";
            r.d(t, {
                DX: () => l,
                xV: () => s
            });
            var n = r(12115),
                i = r(6101),
                a = r(95155),
                l = n.forwardRef((e, t) => {
                    let {
                        children: r,
                        ...i
                    } = e, l = n.Children.toArray(r), s = l.find(o);
                    if (s) {
                        let e = s.props.children,
                            r = l.map(t => t !== s ? t : n.Children.count(e) > 1 ? n.Children.only(null) : n.isValidElement(e) ? e.props.children : null);
                        return (0, a.jsx)(c, { ...i,
                            ref: t,
                            children: n.isValidElement(e) ? n.cloneElement(e, void 0, r) : null
                        })
                    }
                    return (0, a.jsx)(c, { ...i,
                        ref: t,
                        children: r
                    })
                });
            l.displayName = "Slot";
            var c = n.forwardRef((e, t) => {
                let {
                    children: r,
                    ...a
                } = e;
                if (n.isValidElement(r)) {
                    let e = function(e) {
                            let t = Object.getOwnPropertyDescriptor(e.props, "ref") ? .get,
                                r = t && "isReactWarning" in t && t.isReactWarning;
                            return r ? e.ref : (r = (t = Object.getOwnPropertyDescriptor(e, "ref") ? .get) && "isReactWarning" in t && t.isReactWarning) ? e.props.ref : e.props.ref || e.ref
                        }(r),
                        l = function(e, t) {
                            let r = { ...t
                            };
                            for (let n in t) {
                                let i = e[n],
                                    a = t[n];
                                /^on[A-Z]/.test(n) ? i && a ? r[n] = (...e) => {
                                    a(...e), i(...e)
                                } : i && (r[n] = i) : "style" === n ? r[n] = { ...i,
                                    ...a
                                } : "className" === n && (r[n] = [i, a].filter(Boolean).join(" "))
                            }
                            return { ...e,
                                ...r
                            }
                        }(a, r.props);
                    return r.type !== n.Fragment && (l.ref = t ? (0, i.t)(t, e) : e), n.cloneElement(r, l)
                }
                return n.Children.count(r) > 1 ? n.Children.only(null) : null
            });
            c.displayName = "SlotClone";
            var s = ({
                children: e
            }) => (0, a.jsx)(a.Fragment, {
                children: e
            });

            function o(e) {
                return n.isValidElement(e) && e.type === s
            }
        }
    },
    e => {
        var t = t => e(e.s = t);
        e.O(0, [3700, 6453, 6874, 8441, 1684, 7358], () => t(35747)), _N_E = e.O()
    }
]);