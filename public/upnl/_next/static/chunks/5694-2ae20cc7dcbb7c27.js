"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5694], {
        11275: (e, t, n) => {
            n.d(t, {
                X: () => o
            });
            var r = n(12115),
                i = n(52712);

            function o(e) {
                let [t, n] = r.useState(void 0);
                return (0, i.N)(() => {
                    if (e) {
                        n({
                            width: e.offsetWidth,
                            height: e.offsetHeight
                        });
                        let t = new ResizeObserver(t => {
                            let r, i;
                            if (!Array.isArray(t) || !t.length) return;
                            let o = t[0];
                            if ("borderBoxSize" in o) {
                                let e = o.borderBoxSize,
                                    t = Array.isArray(e) ? e[0] : e;
                                r = t.inlineSize, i = t.blockSize
                            } else r = e.offsetWidth, i = e.offsetHeight;
                            n({
                                width: r,
                                height: i
                            })
                        });
                        return t.observe(e, {
                            box: "border-box"
                        }), () => t.unobserve(e)
                    }
                    n(void 0)
                }, [e]), t
            }
        },
        17652: (e, t, n) => {
            n.d(t, {
                c3: () => o
            });
            var r = n(46453);

            function i(e, t) {
                return (...e) => {
                    try {
                        return t(...e)
                    } catch {
                        throw Error(void 0)
                    }
                }
            }
            let o = i(0, r.c3);
            i(0, r.kc)
        },
        19178: (e, t, n) => {
            n.d(t, {
                lg: () => v,
                qW: () => d,
                bL: () => g
            });
            var r, i = n(12115),
                o = n(85185),
                l = n(63655),
                a = n(6101),
                s = n(39033),
                u = n(95155),
                c = "dismissableLayer.update",
                f = i.createContext({
                    layers: new Set,
                    layersWithOutsidePointerEventsDisabled: new Set,
                    branches: new Set
                }),
                d = i.forwardRef((e, t) => {
                    var n, d;
                    let {
                        disableOutsidePointerEvents: p = !1,
                        onEscapeKeyDown: g,
                        onPointerDownOutside: v,
                        onFocusOutside: y,
                        onInteractOutside: w,
                        onDismiss: x,
                        ...b
                    } = e, E = i.useContext(f), [R, A] = i.useState(null), L = null != (d = null == R ? void 0 : R.ownerDocument) ? d : null == (n = globalThis) ? void 0 : n.document, [, C] = i.useState({}), P = (0, a.s)(t, e => A(e)), O = Array.from(E.layers), [T] = [...E.layersWithOutsidePointerEventsDisabled].slice(-1), D = O.indexOf(T), S = R ? O.indexOf(R) : -1, k = E.layersWithOutsidePointerEventsDisabled.size > 0, W = S >= D, j = function(e) {
                        var t;
                        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null == (t = globalThis) ? void 0 : t.document,
                            r = (0, s.c)(e),
                            o = i.useRef(!1),
                            l = i.useRef(() => {});
                        return i.useEffect(() => {
                            let e = e => {
                                    if (e.target && !o.current) {
                                        let t = function() {
                                                m("dismissableLayer.pointerDownOutside", r, i, {
                                                    discrete: !0
                                                })
                                            },
                                            i = {
                                                originalEvent: e
                                            };
                                        "touch" === e.pointerType ? (n.removeEventListener("click", l.current), l.current = t, n.addEventListener("click", l.current, {
                                            once: !0
                                        })) : t()
                                    } else n.removeEventListener("click", l.current);
                                    o.current = !1
                                },
                                t = window.setTimeout(() => {
                                    n.addEventListener("pointerdown", e)
                                }, 0);
                            return () => {
                                window.clearTimeout(t), n.removeEventListener("pointerdown", e), n.removeEventListener("click", l.current)
                            }
                        }, [n, r]), {
                            onPointerDownCapture: () => o.current = !0
                        }
                    }(e => {
                        let t = e.target,
                            n = [...E.branches].some(e => e.contains(t));
                        W && !n && (null == v || v(e), null == w || w(e), e.defaultPrevented || null == x || x())
                    }, L), H = function(e) {
                        var t;
                        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null == (t = globalThis) ? void 0 : t.document,
                            r = (0, s.c)(e),
                            o = i.useRef(!1);
                        return i.useEffect(() => {
                            let e = e => {
                                e.target && !o.current && m("dismissableLayer.focusOutside", r, {
                                    originalEvent: e
                                }, {
                                    discrete: !1
                                })
                            };
                            return n.addEventListener("focusin", e), () => n.removeEventListener("focusin", e)
                        }, [n, r]), {
                            onFocusCapture: () => o.current = !0,
                            onBlurCapture: () => o.current = !1
                        }
                    }(e => {
                        let t = e.target;
                        ![...E.branches].some(e => e.contains(t)) && (null == y || y(e), null == w || w(e), e.defaultPrevented || null == x || x())
                    }, L);
                    return ! function(e, t = globalThis ? .document) {
                        let n = (0, s.c)(e);
                        i.useEffect(() => {
                            let e = e => {
                                "Escape" === e.key && n(e)
                            };
                            return t.addEventListener("keydown", e, {
                                capture: !0
                            }), () => t.removeEventListener("keydown", e, {
                                capture: !0
                            })
                        }, [n, t])
                    }(e => {
                        S === E.layers.size - 1 && (null == g || g(e), !e.defaultPrevented && x && (e.preventDefault(), x()))
                    }, L), i.useEffect(() => {
                        if (R) return p && (0 === E.layersWithOutsidePointerEventsDisabled.size && (r = L.body.style.pointerEvents, L.body.style.pointerEvents = "none"), E.layersWithOutsidePointerEventsDisabled.add(R)), E.layers.add(R), h(), () => {
                            p && 1 === E.layersWithOutsidePointerEventsDisabled.size && (L.body.style.pointerEvents = r)
                        }
                    }, [R, L, p, E]), i.useEffect(() => () => {
                        R && (E.layers.delete(R), E.layersWithOutsidePointerEventsDisabled.delete(R), h())
                    }, [R, E]), i.useEffect(() => {
                        let e = () => C({});
                        return document.addEventListener(c, e), () => document.removeEventListener(c, e)
                    }, []), (0, u.jsx)(l.sG.div, { ...b,
                        ref: P,
                        style: {
                            pointerEvents: k ? W ? "auto" : "none" : void 0,
                            ...e.style
                        },
                        onFocusCapture: (0, o.m)(e.onFocusCapture, H.onFocusCapture),
                        onBlurCapture: (0, o.m)(e.onBlurCapture, H.onBlurCapture),
                        onPointerDownCapture: (0, o.m)(e.onPointerDownCapture, j.onPointerDownCapture)
                    })
                });
            d.displayName = "DismissableLayer";
            var p = i.forwardRef((e, t) => {
                let n = i.useContext(f),
                    r = i.useRef(null),
                    o = (0, a.s)(t, r);
                return i.useEffect(() => {
                    let e = r.current;
                    if (e) return n.branches.add(e), () => {
                        n.branches.delete(e)
                    }
                }, [n.branches]), (0, u.jsx)(l.sG.div, { ...e,
                    ref: o
                })
            });

            function h() {
                let e = new CustomEvent(c);
                document.dispatchEvent(e)
            }

            function m(e, t, n, r) {
                let {
                    discrete: i
                } = r, o = n.originalEvent.target, a = new CustomEvent(e, {
                    bubbles: !1,
                    cancelable: !0,
                    detail: n
                });
                t && o.addEventListener(e, t, {
                    once: !0
                }), i ? (0, l.hO)(o, a) : o.dispatchEvent(a)
            }
            p.displayName = "DismissableLayerBranch";
            var g = d,
                v = p
        },
        22475: (e, t, n) => {
            n.d(t, {
                UE: () => ed,
                ll: () => el,
                rD: () => eh,
                UU: () => eu,
                jD: () => ef,
                ER: () => ep,
                cY: () => ea,
                BN: () => es,
                Ej: () => ec
            });
            let r = ["top", "right", "bottom", "left"],
                i = Math.min,
                o = Math.max,
                l = Math.round,
                a = Math.floor,
                s = e => ({
                    x: e,
                    y: e
                }),
                u = {
                    left: "right",
                    right: "left",
                    bottom: "top",
                    top: "bottom"
                },
                c = {
                    start: "end",
                    end: "start"
                };

            function f(e, t) {
                return "function" == typeof e ? e(t) : e
            }

            function d(e) {
                return e.split("-")[0]
            }

            function p(e) {
                return e.split("-")[1]
            }

            function h(e) {
                return "x" === e ? "y" : "x"
            }

            function m(e) {
                return "y" === e ? "height" : "width"
            }

            function g(e) {
                return ["top", "bottom"].includes(d(e)) ? "y" : "x"
            }

            function v(e) {
                return e.replace(/start|end/g, e => c[e])
            }

            function y(e) {
                return e.replace(/left|right|bottom|top/g, e => u[e])
            }

            function w(e) {
                return "number" != typeof e ? {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    ...e
                } : {
                    top: e,
                    right: e,
                    bottom: e,
                    left: e
                }
            }

            function x(e) {
                let {
                    x: t,
                    y: n,
                    width: r,
                    height: i
                } = e;
                return {
                    width: r,
                    height: i,
                    top: n,
                    left: t,
                    right: t + r,
                    bottom: n + i,
                    x: t,
                    y: n
                }
            }

            function b(e, t, n) {
                let r, {
                        reference: i,
                        floating: o
                    } = e,
                    l = g(t),
                    a = h(g(t)),
                    s = m(a),
                    u = d(t),
                    c = "y" === l,
                    f = i.x + i.width / 2 - o.width / 2,
                    v = i.y + i.height / 2 - o.height / 2,
                    y = i[s] / 2 - o[s] / 2;
                switch (u) {
                    case "top":
                        r = {
                            x: f,
                            y: i.y - o.height
                        };
                        break;
                    case "bottom":
                        r = {
                            x: f,
                            y: i.y + i.height
                        };
                        break;
                    case "right":
                        r = {
                            x: i.x + i.width,
                            y: v
                        };
                        break;
                    case "left":
                        r = {
                            x: i.x - o.width,
                            y: v
                        };
                        break;
                    default:
                        r = {
                            x: i.x,
                            y: i.y
                        }
                }
                switch (p(t)) {
                    case "start":
                        r[a] -= y * (n && c ? -1 : 1);
                        break;
                    case "end":
                        r[a] += y * (n && c ? -1 : 1)
                }
                return r
            }
            let E = async (e, t, n) => {
                let {
                    placement: r = "bottom",
                    strategy: i = "absolute",
                    middleware: o = [],
                    platform: l
                } = n, a = o.filter(Boolean), s = await (null == l.isRTL ? void 0 : l.isRTL(t)), u = await l.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: i
                }), {
                    x: c,
                    y: f
                } = b(u, r, s), d = r, p = {}, h = 0;
                for (let n = 0; n < a.length; n++) {
                    let {
                        name: o,
                        fn: m
                    } = a[n], {
                        x: g,
                        y: v,
                        data: y,
                        reset: w
                    } = await m({
                        x: c,
                        y: f,
                        initialPlacement: r,
                        placement: d,
                        strategy: i,
                        middlewareData: p,
                        rects: u,
                        platform: l,
                        elements: {
                            reference: e,
                            floating: t
                        }
                    });
                    c = null != g ? g : c, f = null != v ? v : f, p = { ...p,
                        [o]: { ...p[o],
                            ...y
                        }
                    }, w && h <= 50 && (h++, "object" == typeof w && (w.placement && (d = w.placement), w.rects && (u = !0 === w.rects ? await l.getElementRects({
                        reference: e,
                        floating: t,
                        strategy: i
                    }) : w.rects), {
                        x: c,
                        y: f
                    } = b(u, d, s)), n = -1)
                }
                return {
                    x: c,
                    y: f,
                    placement: d,
                    strategy: i,
                    middlewareData: p
                }
            };
            async function R(e, t) {
                var n;
                void 0 === t && (t = {});
                let {
                    x: r,
                    y: i,
                    platform: o,
                    rects: l,
                    elements: a,
                    strategy: s
                } = e, {
                    boundary: u = "clippingAncestors",
                    rootBoundary: c = "viewport",
                    elementContext: d = "floating",
                    altBoundary: p = !1,
                    padding: h = 0
                } = f(t, e), m = w(h), g = a[p ? "floating" === d ? "reference" : "floating" : d], v = x(await o.getClippingRect({
                    element: null == (n = await (null == o.isElement ? void 0 : o.isElement(g))) || n ? g : g.contextElement || await (null == o.getDocumentElement ? void 0 : o.getDocumentElement(a.floating)),
                    boundary: u,
                    rootBoundary: c,
                    strategy: s
                })), y = "floating" === d ? {
                    x: r,
                    y: i,
                    width: l.floating.width,
                    height: l.floating.height
                } : l.reference, b = await (null == o.getOffsetParent ? void 0 : o.getOffsetParent(a.floating)), E = await (null == o.isElement ? void 0 : o.isElement(b)) && await (null == o.getScale ? void 0 : o.getScale(b)) || {
                    x: 1,
                    y: 1
                }, R = x(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({
                    elements: a,
                    rect: y,
                    offsetParent: b,
                    strategy: s
                }) : y);
                return {
                    top: (v.top - R.top + m.top) / E.y,
                    bottom: (R.bottom - v.bottom + m.bottom) / E.y,
                    left: (v.left - R.left + m.left) / E.x,
                    right: (R.right - v.right + m.right) / E.x
                }
            }

            function A(e, t) {
                return {
                    top: e.top - t.height,
                    right: e.right - t.width,
                    bottom: e.bottom - t.height,
                    left: e.left - t.width
                }
            }

            function L(e) {
                return r.some(t => e[t] >= 0)
            }
            async function C(e, t) {
                let {
                    placement: n,
                    platform: r,
                    elements: i
                } = e, o = await (null == r.isRTL ? void 0 : r.isRTL(i.floating)), l = d(n), a = p(n), s = "y" === g(n), u = ["left", "top"].includes(l) ? -1 : 1, c = o && s ? -1 : 1, h = f(t, e), {
                    mainAxis: m,
                    crossAxis: v,
                    alignmentAxis: y
                } = "number" == typeof h ? {
                    mainAxis: h,
                    crossAxis: 0,
                    alignmentAxis: null
                } : {
                    mainAxis: h.mainAxis || 0,
                    crossAxis: h.crossAxis || 0,
                    alignmentAxis: h.alignmentAxis
                };
                return a && "number" == typeof y && (v = "end" === a ? -1 * y : y), s ? {
                    x: v * c,
                    y: m * u
                } : {
                    x: m * u,
                    y: v * c
                }
            }

            function P() {
                return "undefined" != typeof window
            }

            function O(e) {
                return S(e) ? (e.nodeName || "").toLowerCase() : "#document"
            }

            function T(e) {
                var t;
                return (null == e || null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window
            }

            function D(e) {
                var t;
                return null == (t = (S(e) ? e.ownerDocument : e.document) || window.document) ? void 0 : t.documentElement
            }

            function S(e) {
                return !!P() && (e instanceof Node || e instanceof T(e).Node)
            }

            function k(e) {
                return !!P() && (e instanceof Element || e instanceof T(e).Element)
            }

            function W(e) {
                return !!P() && (e instanceof HTMLElement || e instanceof T(e).HTMLElement)
            }

            function j(e) {
                return !!P() && "undefined" != typeof ShadowRoot && (e instanceof ShadowRoot || e instanceof T(e).ShadowRoot)
            }

            function H(e) {
                let {
                    overflow: t,
                    overflowX: n,
                    overflowY: r,
                    display: i
                } = M(e);
                return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(i)
            }

            function N(e) {
                return [":popover-open", ":modal"].some(t => {
                    try {
                        return e.matches(t)
                    } catch (e) {
                        return !1
                    }
                })
            }

            function B(e) {
                let t = F(),
                    n = k(e) ? M(e) : e;
                return ["transform", "translate", "scale", "rotate", "perspective"].some(e => !!n[e] && "none" !== n[e]) || !!n.containerType && "normal" !== n.containerType || !t && !!n.backdropFilter && "none" !== n.backdropFilter || !t && !!n.filter && "none" !== n.filter || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some(e => (n.willChange || "").includes(e)) || ["paint", "layout", "strict", "content"].some(e => (n.contain || "").includes(e))
            }

            function F() {
                return "undefined" != typeof CSS && !!CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")
            }

            function z(e) {
                return ["html", "body", "#document"].includes(O(e))
            }

            function M(e) {
                return T(e).getComputedStyle(e)
            }

            function V(e) {
                return k(e) ? {
                    scrollLeft: e.scrollLeft,
                    scrollTop: e.scrollTop
                } : {
                    scrollLeft: e.scrollX,
                    scrollTop: e.scrollY
                }
            }

            function U(e) {
                if ("html" === O(e)) return e;
                let t = e.assignedSlot || e.parentNode || j(e) && e.host || D(e);
                return j(t) ? t.host : t
            }

            function Y(e, t, n) {
                var r;
                void 0 === t && (t = []), void 0 === n && (n = !0);
                let i = function e(t) {
                        let n = U(t);
                        return z(n) ? t.ownerDocument ? t.ownerDocument.body : t.body : W(n) && H(n) ? n : e(n)
                    }(e),
                    o = i === (null == (r = e.ownerDocument) ? void 0 : r.body),
                    l = T(i);
                if (o) {
                    let e = _(l);
                    return t.concat(l, l.visualViewport || [], H(i) ? i : [], e && n ? Y(e) : [])
                }
                return t.concat(i, Y(i, [], n))
            }

            function _(e) {
                return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
            }

            function G(e) {
                let t = M(e),
                    n = parseFloat(t.width) || 0,
                    r = parseFloat(t.height) || 0,
                    i = W(e),
                    o = i ? e.offsetWidth : n,
                    a = i ? e.offsetHeight : r,
                    s = l(n) !== o || l(r) !== a;
                return s && (n = o, r = a), {
                    width: n,
                    height: r,
                    $: s
                }
            }

            function X(e) {
                return k(e) ? e : e.contextElement
            }

            function I(e) {
                let t = X(e);
                if (!W(t)) return s(1);
                let n = t.getBoundingClientRect(),
                    {
                        width: r,
                        height: i,
                        $: o
                    } = G(t),
                    a = (o ? l(n.width) : n.width) / r,
                    u = (o ? l(n.height) : n.height) / i;
                return a && Number.isFinite(a) || (a = 1), u && Number.isFinite(u) || (u = 1), {
                    x: a,
                    y: u
                }
            }
            let q = s(0);

            function $(e) {
                let t = T(e);
                return F() && t.visualViewport ? {
                    x: t.visualViewport.offsetLeft,
                    y: t.visualViewport.offsetTop
                } : q
            }

            function Z(e, t, n, r) {
                var i;
                void 0 === t && (t = !1), void 0 === n && (n = !1);
                let o = e.getBoundingClientRect(),
                    l = X(e),
                    a = s(1);
                t && (r ? k(r) && (a = I(r)) : a = I(e));
                let u = (void 0 === (i = n) && (i = !1), r && (!i || r === T(l)) && i) ? $(l) : s(0),
                    c = (o.left + u.x) / a.x,
                    f = (o.top + u.y) / a.y,
                    d = o.width / a.x,
                    p = o.height / a.y;
                if (l) {
                    let e = T(l),
                        t = r && k(r) ? T(r) : r,
                        n = e,
                        i = _(n);
                    for (; i && r && t !== n;) {
                        let e = I(i),
                            t = i.getBoundingClientRect(),
                            r = M(i),
                            o = t.left + (i.clientLeft + parseFloat(r.paddingLeft)) * e.x,
                            l = t.top + (i.clientTop + parseFloat(r.paddingTop)) * e.y;
                        c *= e.x, f *= e.y, d *= e.x, p *= e.y, c += o, f += l, i = _(n = T(i))
                    }
                }
                return x({
                    width: d,
                    height: p,
                    x: c,
                    y: f
                })
            }

            function J(e, t) {
                let n = V(e).scrollLeft;
                return t ? t.left + n : Z(D(e)).left + n
            }

            function K(e, t, n) {
                void 0 === n && (n = !1);
                let r = e.getBoundingClientRect();
                return {
                    x: r.left + t.scrollLeft - (n ? 0 : J(e, r)),
                    y: r.top + t.scrollTop
                }
            }

            function Q(e, t, n) {
                let r;
                if ("viewport" === t) r = function(e, t) {
                    let n = T(e),
                        r = D(e),
                        i = n.visualViewport,
                        o = r.clientWidth,
                        l = r.clientHeight,
                        a = 0,
                        s = 0;
                    if (i) {
                        o = i.width, l = i.height;
                        let e = F();
                        (!e || e && "fixed" === t) && (a = i.offsetLeft, s = i.offsetTop)
                    }
                    return {
                        width: o,
                        height: l,
                        x: a,
                        y: s
                    }
                }(e, n);
                else if ("document" === t) r = function(e) {
                    let t = D(e),
                        n = V(e),
                        r = e.ownerDocument.body,
                        i = o(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
                        l = o(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight),
                        a = -n.scrollLeft + J(e),
                        s = -n.scrollTop;
                    return "rtl" === M(r).direction && (a += o(t.clientWidth, r.clientWidth) - i), {
                        width: i,
                        height: l,
                        x: a,
                        y: s
                    }
                }(D(e));
                else if (k(t)) r = function(e, t) {
                    let n = Z(e, !0, "fixed" === t),
                        r = n.top + e.clientTop,
                        i = n.left + e.clientLeft,
                        o = W(e) ? I(e) : s(1),
                        l = e.clientWidth * o.x,
                        a = e.clientHeight * o.y;
                    return {
                        width: l,
                        height: a,
                        x: i * o.x,
                        y: r * o.y
                    }
                }(t, n);
                else {
                    let n = $(e);
                    r = {
                        x: t.x - n.x,
                        y: t.y - n.y,
                        width: t.width,
                        height: t.height
                    }
                }
                return x(r)
            }

            function ee(e) {
                return "static" === M(e).position
            }

            function et(e, t) {
                if (!W(e) || "fixed" === M(e).position) return null;
                if (t) return t(e);
                let n = e.offsetParent;
                return D(e) === n && (n = n.ownerDocument.body), n
            }

            function en(e, t) {
                let n = T(e);
                if (N(e)) return n;
                if (!W(e)) {
                    let t = U(e);
                    for (; t && !z(t);) {
                        if (k(t) && !ee(t)) return t;
                        t = U(t)
                    }
                    return n
                }
                let r = et(e, t);
                for (; r && ["table", "td", "th"].includes(O(r)) && ee(r);) r = et(r, t);
                return r && z(r) && ee(r) && !B(r) ? n : r || function(e) {
                    let t = U(e);
                    for (; W(t) && !z(t);) {
                        if (B(t)) return t;
                        if (N(t)) break;
                        t = U(t)
                    }
                    return null
                }(e) || n
            }
            let er = async function(e) {
                    let t = this.getOffsetParent || en,
                        n = this.getDimensions,
                        r = await n(e.floating);
                    return {
                        reference: function(e, t, n) {
                            let r = W(t),
                                i = D(t),
                                o = "fixed" === n,
                                l = Z(e, !0, o, t),
                                a = {
                                    scrollLeft: 0,
                                    scrollTop: 0
                                },
                                u = s(0);
                            if (r || !r && !o)
                                if (("body" !== O(t) || H(i)) && (a = V(t)), r) {
                                    let e = Z(t, !0, o, t);
                                    u.x = e.x + t.clientLeft, u.y = e.y + t.clientTop
                                } else i && (u.x = J(i));
                            let c = !i || r || o ? s(0) : K(i, a);
                            return {
                                x: l.left + a.scrollLeft - u.x - c.x,
                                y: l.top + a.scrollTop - u.y - c.y,
                                width: l.width,
                                height: l.height
                            }
                        }(e.reference, await t(e.floating), e.strategy),
                        floating: {
                            x: 0,
                            y: 0,
                            width: r.width,
                            height: r.height
                        }
                    }
                },
                ei = {
                    convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
                        let {
                            elements: t,
                            rect: n,
                            offsetParent: r,
                            strategy: i
                        } = e, o = "fixed" === i, l = D(r), a = !!t && N(t.floating);
                        if (r === l || a && o) return n;
                        let u = {
                                scrollLeft: 0,
                                scrollTop: 0
                            },
                            c = s(1),
                            f = s(0),
                            d = W(r);
                        if ((d || !d && !o) && (("body" !== O(r) || H(l)) && (u = V(r)), W(r))) {
                            let e = Z(r);
                            c = I(r), f.x = e.x + r.clientLeft, f.y = e.y + r.clientTop
                        }
                        let p = !l || d || o ? s(0) : K(l, u, !0);
                        return {
                            width: n.width * c.x,
                            height: n.height * c.y,
                            x: n.x * c.x - u.scrollLeft * c.x + f.x + p.x,
                            y: n.y * c.y - u.scrollTop * c.y + f.y + p.y
                        }
                    },
                    getDocumentElement: D,
                    getClippingRect: function(e) {
                        let {
                            element: t,
                            boundary: n,
                            rootBoundary: r,
                            strategy: l
                        } = e, a = [..."clippingAncestors" === n ? N(t) ? [] : function(e, t) {
                            let n = t.get(e);
                            if (n) return n;
                            let r = Y(e, [], !1).filter(e => k(e) && "body" !== O(e)),
                                i = null,
                                o = "fixed" === M(e).position,
                                l = o ? U(e) : e;
                            for (; k(l) && !z(l);) {
                                let t = M(l),
                                    n = B(l);
                                n || "fixed" !== t.position || (i = null), (o ? !n && !i : !n && "static" === t.position && !!i && ["absolute", "fixed"].includes(i.position) || H(l) && !n && function e(t, n) {
                                    let r = U(t);
                                    return !(r === n || !k(r) || z(r)) && ("fixed" === M(r).position || e(r, n))
                                }(e, l)) ? r = r.filter(e => e !== l) : i = t, l = U(l)
                            }
                            return t.set(e, r), r
                        }(t, this._c) : [].concat(n), r], s = a[0], u = a.reduce((e, n) => {
                            let r = Q(t, n, l);
                            return e.top = o(r.top, e.top), e.right = i(r.right, e.right), e.bottom = i(r.bottom, e.bottom), e.left = o(r.left, e.left), e
                        }, Q(t, s, l));
                        return {
                            width: u.right - u.left,
                            height: u.bottom - u.top,
                            x: u.left,
                            y: u.top
                        }
                    },
                    getOffsetParent: en,
                    getElementRects: er,
                    getClientRects: function(e) {
                        return Array.from(e.getClientRects())
                    },
                    getDimensions: function(e) {
                        let {
                            width: t,
                            height: n
                        } = G(e);
                        return {
                            width: t,
                            height: n
                        }
                    },
                    getScale: I,
                    isElement: k,
                    isRTL: function(e) {
                        return "rtl" === M(e).direction
                    }
                };

            function eo(e, t) {
                return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
            }

            function el(e, t, n, r) {
                let l;
                void 0 === r && (r = {});
                let {
                    ancestorScroll: s = !0,
                    ancestorResize: u = !0,
                    elementResize: c = "function" == typeof ResizeObserver,
                    layoutShift: f = "function" == typeof IntersectionObserver,
                    animationFrame: d = !1
                } = r, p = X(e), h = s || u ? [...p ? Y(p) : [], ...Y(t)] : [];
                h.forEach(e => {
                    s && e.addEventListener("scroll", n, {
                        passive: !0
                    }), u && e.addEventListener("resize", n)
                });
                let m = p && f ? function(e, t) {
                        let n, r = null,
                            l = D(e);

                        function s() {
                            var e;
                            clearTimeout(n), null == (e = r) || e.disconnect(), r = null
                        }
                        return ! function u(c, f) {
                            void 0 === c && (c = !1), void 0 === f && (f = 1), s();
                            let d = e.getBoundingClientRect(),
                                {
                                    left: p,
                                    top: h,
                                    width: m,
                                    height: g
                                } = d;
                            if (c || t(), !m || !g) return;
                            let v = a(h),
                                y = a(l.clientWidth - (p + m)),
                                w = {
                                    rootMargin: -v + "px " + -y + "px " + -a(l.clientHeight - (h + g)) + "px " + -a(p) + "px",
                                    threshold: o(0, i(1, f)) || 1
                                },
                                x = !0;

                            function b(t) {
                                let r = t[0].intersectionRatio;
                                if (r !== f) {
                                    if (!x) return u();
                                    r ? u(!1, r) : n = setTimeout(() => {
                                        u(!1, 1e-7)
                                    }, 1e3)
                                }
                                1 !== r || eo(d, e.getBoundingClientRect()) || u(), x = !1
                            }
                            try {
                                r = new IntersectionObserver(b, { ...w,
                                    root: l.ownerDocument
                                })
                            } catch (e) {
                                r = new IntersectionObserver(b, w)
                            }
                            r.observe(e)
                        }(!0), s
                    }(p, n) : null,
                    g = -1,
                    v = null;
                c && (v = new ResizeObserver(e => {
                    let [r] = e;
                    r && r.target === p && v && (v.unobserve(t), cancelAnimationFrame(g), g = requestAnimationFrame(() => {
                        var e;
                        null == (e = v) || e.observe(t)
                    })), n()
                }), p && !d && v.observe(p), v.observe(t));
                let y = d ? Z(e) : null;
                return d && function t() {
                    let r = Z(e);
                    y && !eo(y, r) && n(), y = r, l = requestAnimationFrame(t)
                }(), n(), () => {
                    var e;
                    h.forEach(e => {
                        s && e.removeEventListener("scroll", n), u && e.removeEventListener("resize", n)
                    }), null == m || m(), null == (e = v) || e.disconnect(), v = null, d && cancelAnimationFrame(l)
                }
            }
            let ea = function(e) {
                    return void 0 === e && (e = 0), {
                        name: "offset",
                        options: e,
                        async fn(t) {
                            var n, r;
                            let {
                                x: i,
                                y: o,
                                placement: l,
                                middlewareData: a
                            } = t, s = await C(t, e);
                            return l === (null == (n = a.offset) ? void 0 : n.placement) && null != (r = a.arrow) && r.alignmentOffset ? {} : {
                                x: i + s.x,
                                y: o + s.y,
                                data: { ...s,
                                    placement: l
                                }
                            }
                        }
                    }
                },
                es = function(e) {
                    return void 0 === e && (e = {}), {
                        name: "shift",
                        options: e,
                        async fn(t) {
                            let {
                                x: n,
                                y: r,
                                placement: l
                            } = t, {
                                mainAxis: a = !0,
                                crossAxis: s = !1,
                                limiter: u = {
                                    fn: e => {
                                        let {
                                            x: t,
                                            y: n
                                        } = e;
                                        return {
                                            x: t,
                                            y: n
                                        }
                                    }
                                },
                                ...c
                            } = f(e, t), p = {
                                x: n,
                                y: r
                            }, m = await R(t, c), v = g(d(l)), y = h(v), w = p[y], x = p[v];
                            if (a) {
                                let e = "y" === y ? "top" : "left",
                                    t = "y" === y ? "bottom" : "right",
                                    n = w + m[e],
                                    r = w - m[t];
                                w = o(n, i(w, r))
                            }
                            if (s) {
                                let e = "y" === v ? "top" : "left",
                                    t = "y" === v ? "bottom" : "right",
                                    n = x + m[e],
                                    r = x - m[t];
                                x = o(n, i(x, r))
                            }
                            let b = u.fn({ ...t,
                                [y]: w,
                                [v]: x
                            });
                            return { ...b,
                                data: {
                                    x: b.x - n,
                                    y: b.y - r,
                                    enabled: {
                                        [y]: a,
                                        [v]: s
                                    }
                                }
                            }
                        }
                    }
                },
                eu = function(e) {
                    return void 0 === e && (e = {}), {
                        name: "flip",
                        options: e,
                        async fn(t) {
                            var n, r, i, o, l;
                            let {
                                placement: a,
                                middlewareData: s,
                                rects: u,
                                initialPlacement: c,
                                platform: w,
                                elements: x
                            } = t, {
                                mainAxis: b = !0,
                                crossAxis: E = !0,
                                fallbackPlacements: A,
                                fallbackStrategy: L = "bestFit",
                                fallbackAxisSideDirection: C = "none",
                                flipAlignment: P = !0,
                                ...O
                            } = f(e, t);
                            if (null != (n = s.arrow) && n.alignmentOffset) return {};
                            let T = d(a),
                                D = g(c),
                                S = d(c) === c,
                                k = await (null == w.isRTL ? void 0 : w.isRTL(x.floating)),
                                W = A || (S || !P ? [y(c)] : function(e) {
                                    let t = y(e);
                                    return [v(e), t, v(t)]
                                }(c)),
                                j = "none" !== C;
                            !A && j && W.push(... function(e, t, n, r) {
                                let i = p(e),
                                    o = function(e, t, n) {
                                        let r = ["left", "right"],
                                            i = ["right", "left"];
                                        switch (e) {
                                            case "top":
                                            case "bottom":
                                                if (n) return t ? i : r;
                                                return t ? r : i;
                                            case "left":
                                            case "right":
                                                return t ? ["top", "bottom"] : ["bottom", "top"];
                                            default:
                                                return []
                                        }
                                    }(d(e), "start" === n, r);
                                return i && (o = o.map(e => e + "-" + i), t && (o = o.concat(o.map(v)))), o
                            }(c, P, C, k));
                            let H = [c, ...W],
                                N = await R(t, O),
                                B = [],
                                F = (null == (r = s.flip) ? void 0 : r.overflows) || [];
                            if (b && B.push(N[T]), E) {
                                let e = function(e, t, n) {
                                    void 0 === n && (n = !1);
                                    let r = p(e),
                                        i = h(g(e)),
                                        o = m(i),
                                        l = "x" === i ? r === (n ? "end" : "start") ? "right" : "left" : "start" === r ? "bottom" : "top";
                                    return t.reference[o] > t.floating[o] && (l = y(l)), [l, y(l)]
                                }(a, u, k);
                                B.push(N[e[0]], N[e[1]])
                            }
                            if (F = [...F, {
                                    placement: a,
                                    overflows: B
                                }], !B.every(e => e <= 0)) {
                                let e = ((null == (i = s.flip) ? void 0 : i.index) || 0) + 1,
                                    t = H[e];
                                if (t) return {
                                    data: {
                                        index: e,
                                        overflows: F
                                    },
                                    reset: {
                                        placement: t
                                    }
                                };
                                let n = null == (o = F.filter(e => e.overflows[0] <= 0).sort((e, t) => e.overflows[1] - t.overflows[1])[0]) ? void 0 : o.placement;
                                if (!n) switch (L) {
                                    case "bestFit":
                                        {
                                            let e = null == (l = F.filter(e => {
                                                if (j) {
                                                    let t = g(e.placement);
                                                    return t === D || "y" === t
                                                }
                                                return !0
                                            }).map(e => [e.placement, e.overflows.filter(e => e > 0).reduce((e, t) => e + t, 0)]).sort((e, t) => e[1] - t[1])[0]) ? void 0 : l[0];e && (n = e);
                                            break
                                        }
                                    case "initialPlacement":
                                        n = c
                                }
                                if (a !== n) return {
                                    reset: {
                                        placement: n
                                    }
                                }
                            }
                            return {}
                        }
                    }
                },
                ec = function(e) {
                    return void 0 === e && (e = {}), {
                        name: "size",
                        options: e,
                        async fn(t) {
                            var n, r;
                            let l, a, {
                                    placement: s,
                                    rects: u,
                                    platform: c,
                                    elements: h
                                } = t,
                                {
                                    apply: m = () => {},
                                    ...v
                                } = f(e, t),
                                y = await R(t, v),
                                w = d(s),
                                x = p(s),
                                b = "y" === g(s),
                                {
                                    width: E,
                                    height: A
                                } = u.floating;
                            "top" === w || "bottom" === w ? (l = w, a = x === (await (null == c.isRTL ? void 0 : c.isRTL(h.floating)) ? "start" : "end") ? "left" : "right") : (a = w, l = "end" === x ? "top" : "bottom");
                            let L = A - y.top - y.bottom,
                                C = E - y.left - y.right,
                                P = i(A - y[l], L),
                                O = i(E - y[a], C),
                                T = !t.middlewareData.shift,
                                D = P,
                                S = O;
                            if (null != (n = t.middlewareData.shift) && n.enabled.x && (S = C), null != (r = t.middlewareData.shift) && r.enabled.y && (D = L), T && !x) {
                                let e = o(y.left, 0),
                                    t = o(y.right, 0),
                                    n = o(y.top, 0),
                                    r = o(y.bottom, 0);
                                b ? S = E - 2 * (0 !== e || 0 !== t ? e + t : o(y.left, y.right)) : D = A - 2 * (0 !== n || 0 !== r ? n + r : o(y.top, y.bottom))
                            }
                            await m({ ...t,
                                availableWidth: S,
                                availableHeight: D
                            });
                            let k = await c.getDimensions(h.floating);
                            return E !== k.width || A !== k.height ? {
                                reset: {
                                    rects: !0
                                }
                            } : {}
                        }
                    }
                },
                ef = function(e) {
                    return void 0 === e && (e = {}), {
                        name: "hide",
                        options: e,
                        async fn(t) {
                            let {
                                rects: n
                            } = t, {
                                strategy: r = "referenceHidden",
                                ...i
                            } = f(e, t);
                            switch (r) {
                                case "referenceHidden":
                                    {
                                        let e = A(await R(t, { ...i,
                                            elementContext: "reference"
                                        }), n.reference);
                                        return {
                                            data: {
                                                referenceHiddenOffsets: e,
                                                referenceHidden: L(e)
                                            }
                                        }
                                    }
                                case "escaped":
                                    {
                                        let e = A(await R(t, { ...i,
                                            altBoundary: !0
                                        }), n.floating);
                                        return {
                                            data: {
                                                escapedOffsets: e,
                                                escaped: L(e)
                                            }
                                        }
                                    }
                                default:
                                    return {}
                            }
                        }
                    }
                },
                ed = e => ({
                    name: "arrow",
                    options: e,
                    async fn(t) {
                        let {
                            x: n,
                            y: r,
                            placement: l,
                            rects: a,
                            platform: s,
                            elements: u,
                            middlewareData: c
                        } = t, {
                            element: d,
                            padding: v = 0
                        } = f(e, t) || {};
                        if (null == d) return {};
                        let y = w(v),
                            x = {
                                x: n,
                                y: r
                            },
                            b = h(g(l)),
                            E = m(b),
                            R = await s.getDimensions(d),
                            A = "y" === b,
                            L = A ? "clientHeight" : "clientWidth",
                            C = a.reference[E] + a.reference[b] - x[b] - a.floating[E],
                            P = x[b] - a.reference[b],
                            O = await (null == s.getOffsetParent ? void 0 : s.getOffsetParent(d)),
                            T = O ? O[L] : 0;
                        T && await (null == s.isElement ? void 0 : s.isElement(O)) || (T = u.floating[L] || a.floating[E]);
                        let D = T / 2 - R[E] / 2 - 1,
                            S = i(y[A ? "top" : "left"], D),
                            k = i(y[A ? "bottom" : "right"], D),
                            W = T - R[E] - k,
                            j = T / 2 - R[E] / 2 + (C / 2 - P / 2),
                            H = o(S, i(j, W)),
                            N = !c.arrow && null != p(l) && j !== H && a.reference[E] / 2 - (j < S ? S : k) - R[E] / 2 < 0,
                            B = N ? j < S ? j - S : j - W : 0;
                        return {
                            [b]: x[b] + B,
                            data: {
                                [b]: H,
                                centerOffset: j - H - B,
                                ...N && {
                                    alignmentOffset: B
                                }
                            },
                            reset: N
                        }
                    }
                }),
                ep = function(e) {
                    return void 0 === e && (e = {}), {
                        options: e,
                        fn(t) {
                            let {
                                x: n,
                                y: r,
                                placement: i,
                                rects: o,
                                middlewareData: l
                            } = t, {
                                offset: a = 0,
                                mainAxis: s = !0,
                                crossAxis: u = !0
                            } = f(e, t), c = {
                                x: n,
                                y: r
                            }, p = g(i), m = h(p), v = c[m], y = c[p], w = f(a, t), x = "number" == typeof w ? {
                                mainAxis: w,
                                crossAxis: 0
                            } : {
                                mainAxis: 0,
                                crossAxis: 0,
                                ...w
                            };
                            if (s) {
                                let e = "y" === m ? "height" : "width",
                                    t = o.reference[m] - o.floating[e] + x.mainAxis,
                                    n = o.reference[m] + o.reference[e] - x.mainAxis;
                                v < t ? v = t : v > n && (v = n)
                            }
                            if (u) {
                                var b, E;
                                let e = "y" === m ? "width" : "height",
                                    t = ["top", "left"].includes(d(i)),
                                    n = o.reference[p] - o.floating[e] + (t && (null == (b = l.offset) ? void 0 : b[p]) || 0) + (t ? 0 : x.crossAxis),
                                    r = o.reference[p] + o.reference[e] + (t ? 0 : (null == (E = l.offset) ? void 0 : E[p]) || 0) - (t ? x.crossAxis : 0);
                                y < n ? y = n : y > r && (y = r)
                            }
                            return {
                                [m]: v,
                                [p]: y
                            }
                        }
                    }
                },
                eh = (e, t, n) => {
                    let r = new Map,
                        i = {
                            platform: ei,
                            ...n
                        },
                        o = { ...i.platform,
                            _c: r
                        };
                    return E(e, t, { ...i,
                        platform: o
                    })
                }
        },
        25085: (e, t, n) => {
            n.d(t, {
                Mz: () => X,
                i3: () => q,
                UC: () => I,
                bL: () => G,
                Bk: () => T
            });
            var r = n(12115),
                i = n(22475),
                o = n(47650),
                l = "undefined" != typeof document ? r.useLayoutEffect : r.useEffect;

            function a(e, t) {
                let n, r, i;
                if (e === t) return !0;
                if (typeof e != typeof t) return !1;
                if ("function" == typeof e && e.toString() === t.toString()) return !0;
                if (e && t && "object" == typeof e) {
                    if (Array.isArray(e)) {
                        if ((n = e.length) !== t.length) return !1;
                        for (r = n; 0 != r--;)
                            if (!a(e[r], t[r])) return !1;
                        return !0
                    }
                    if ((n = (i = Object.keys(e)).length) !== Object.keys(t).length) return !1;
                    for (r = n; 0 != r--;)
                        if (!({}).hasOwnProperty.call(t, i[r])) return !1;
                    for (r = n; 0 != r--;) {
                        let n = i[r];
                        if (("_owner" !== n || !e.$$typeof) && !a(e[n], t[n])) return !1
                    }
                    return !0
                }
                return e != e && t != t
            }

            function s(e) {
                return "undefined" == typeof window ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
            }

            function u(e, t) {
                let n = s(e);
                return Math.round(t * n) / n
            }

            function c(e) {
                let t = r.useRef(e);
                return l(() => {
                    t.current = e
                }), t
            }
            let f = e => ({
                    name: "arrow",
                    options: e,
                    fn(t) {
                        let {
                            element: n,
                            padding: r
                        } = "function" == typeof e ? e(t) : e;
                        return n && ({}).hasOwnProperty.call(n, "current") ? null != n.current ? (0, i.UE)({
                            element: n.current,
                            padding: r
                        }).fn(t) : {} : n ? (0, i.UE)({
                            element: n,
                            padding: r
                        }).fn(t) : {}
                    }
                }),
                d = (e, t) => ({ ...(0, i.cY)(e),
                    options: [e, t]
                }),
                p = (e, t) => ({ ...(0, i.BN)(e),
                    options: [e, t]
                }),
                h = (e, t) => ({ ...(0, i.ER)(e),
                    options: [e, t]
                }),
                m = (e, t) => ({ ...(0, i.UU)(e),
                    options: [e, t]
                }),
                g = (e, t) => ({ ...(0, i.Ej)(e),
                    options: [e, t]
                }),
                v = (e, t) => ({ ...(0, i.jD)(e),
                    options: [e, t]
                }),
                y = (e, t) => ({ ...f(e),
                    options: [e, t]
                });
            var w = n(63655),
                x = n(95155),
                b = r.forwardRef((e, t) => {
                    let {
                        children: n,
                        width: r = 10,
                        height: i = 5,
                        ...o
                    } = e;
                    return (0, x.jsx)(w.sG.svg, { ...o,
                        ref: t,
                        width: r,
                        height: i,
                        viewBox: "0 0 30 10",
                        preserveAspectRatio: "none",
                        children: e.asChild ? n : (0, x.jsx)("polygon", {
                            points: "0,0 30,0 15,10"
                        })
                    })
                });
            b.displayName = "Arrow";
            var E = n(6101),
                R = n(46081),
                A = n(39033),
                L = n(52712),
                C = n(11275),
                P = "Popper",
                [O, T] = (0, R.A)(P),
                [D, S] = O(P),
                k = e => {
                    let {
                        __scopePopper: t,
                        children: n
                    } = e, [i, o] = r.useState(null);
                    return (0, x.jsx)(D, {
                        scope: t,
                        anchor: i,
                        onAnchorChange: o,
                        children: n
                    })
                };
            k.displayName = P;
            var W = "PopperAnchor",
                j = r.forwardRef((e, t) => {
                    let {
                        __scopePopper: n,
                        virtualRef: i,
                        ...o
                    } = e, l = S(W, n), a = r.useRef(null), s = (0, E.s)(t, a);
                    return r.useEffect(() => {
                        l.onAnchorChange((null == i ? void 0 : i.current) || a.current)
                    }), i ? null : (0, x.jsx)(w.sG.div, { ...o,
                        ref: s
                    })
                });
            j.displayName = W;
            var H = "PopperContent",
                [N, B] = O(H),
                F = r.forwardRef((e, t) => {
                    var n, f, b, R, P, O, T, D;
                    let {
                        __scopePopper: k,
                        side: W = "bottom",
                        sideOffset: j = 0,
                        align: B = "center",
                        alignOffset: F = 0,
                        arrowPadding: z = 0,
                        avoidCollisions: M = !0,
                        collisionBoundary: V = [],
                        collisionPadding: G = 0,
                        sticky: X = "partial",
                        hideWhenDetached: I = !1,
                        updatePositionStrategy: q = "optimized",
                        onPlaced: $,
                        ...Z
                    } = e, J = S(H, k), [K, Q] = r.useState(null), ee = (0, E.s)(t, e => Q(e)), [et, en] = r.useState(null), er = (0, C.X)(et), ei = null != (T = null == er ? void 0 : er.width) ? T : 0, eo = null != (D = null == er ? void 0 : er.height) ? D : 0, el = "number" == typeof G ? G : {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        ...G
                    }, ea = Array.isArray(V) ? V : [V], es = ea.length > 0, eu = {
                        padding: el,
                        boundary: ea.filter(U),
                        altBoundary: es
                    }, {
                        refs: ec,
                        floatingStyles: ef,
                        placement: ed,
                        isPositioned: ep,
                        middlewareData: eh
                    } = function(e) {
                        void 0 === e && (e = {});
                        let {
                            placement: t = "bottom",
                            strategy: n = "absolute",
                            middleware: f = [],
                            platform: d,
                            elements: {
                                reference: p,
                                floating: h
                            } = {},
                            transform: m = !0,
                            whileElementsMounted: g,
                            open: v
                        } = e, [y, w] = r.useState({
                            x: 0,
                            y: 0,
                            strategy: n,
                            placement: t,
                            middlewareData: {},
                            isPositioned: !1
                        }), [x, b] = r.useState(f);
                        a(x, f) || b(f);
                        let [E, R] = r.useState(null), [A, L] = r.useState(null), C = r.useCallback(e => {
                            e !== D.current && (D.current = e, R(e))
                        }, []), P = r.useCallback(e => {
                            e !== S.current && (S.current = e, L(e))
                        }, []), O = p || E, T = h || A, D = r.useRef(null), S = r.useRef(null), k = r.useRef(y), W = null != g, j = c(g), H = c(d), N = c(v), B = r.useCallback(() => {
                            if (!D.current || !S.current) return;
                            let e = {
                                placement: t,
                                strategy: n,
                                middleware: x
                            };
                            H.current && (e.platform = H.current), (0, i.rD)(D.current, S.current, e).then(e => {
                                let t = { ...e,
                                    isPositioned: !1 !== N.current
                                };
                                F.current && !a(k.current, t) && (k.current = t, o.flushSync(() => {
                                    w(t)
                                }))
                            })
                        }, [x, t, n, H, N]);
                        l(() => {
                            !1 === v && k.current.isPositioned && (k.current.isPositioned = !1, w(e => ({ ...e,
                                isPositioned: !1
                            })))
                        }, [v]);
                        let F = r.useRef(!1);
                        l(() => (F.current = !0, () => {
                            F.current = !1
                        }), []), l(() => {
                            if (O && (D.current = O), T && (S.current = T), O && T) {
                                if (j.current) return j.current(O, T, B);
                                B()
                            }
                        }, [O, T, B, j, W]);
                        let z = r.useMemo(() => ({
                                reference: D,
                                floating: S,
                                setReference: C,
                                setFloating: P
                            }), [C, P]),
                            M = r.useMemo(() => ({
                                reference: O,
                                floating: T
                            }), [O, T]),
                            V = r.useMemo(() => {
                                let e = {
                                    position: n,
                                    left: 0,
                                    top: 0
                                };
                                if (!M.floating) return e;
                                let t = u(M.floating, y.x),
                                    r = u(M.floating, y.y);
                                return m ? { ...e,
                                    transform: "translate(" + t + "px, " + r + "px)",
                                    ...s(M.floating) >= 1.5 && {
                                        willChange: "transform"
                                    }
                                } : {
                                    position: n,
                                    left: t,
                                    top: r
                                }
                            }, [n, m, M.floating, y.x, y.y]);
                        return r.useMemo(() => ({ ...y,
                            update: B,
                            refs: z,
                            elements: M,
                            floatingStyles: V
                        }), [y, B, z, M, V])
                    }({
                        strategy: "fixed",
                        placement: W + ("center" !== B ? "-" + B : ""),
                        whileElementsMounted: function() {
                            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                            return (0, i.ll)(...t, {
                                animationFrame: "always" === q
                            })
                        },
                        elements: {
                            reference: J.anchor
                        },
                        middleware: [d({
                            mainAxis: j + eo,
                            alignmentAxis: F
                        }), M && p({
                            mainAxis: !0,
                            crossAxis: !1,
                            limiter: "partial" === X ? h() : void 0,
                            ...eu
                        }), M && m({ ...eu
                        }), g({ ...eu,
                            apply: e => {
                                let {
                                    elements: t,
                                    rects: n,
                                    availableWidth: r,
                                    availableHeight: i
                                } = e, {
                                    width: o,
                                    height: l
                                } = n.reference, a = t.floating.style;
                                a.setProperty("--radix-popper-available-width", "".concat(r, "px")), a.setProperty("--radix-popper-available-height", "".concat(i, "px")), a.setProperty("--radix-popper-anchor-width", "".concat(o, "px")), a.setProperty("--radix-popper-anchor-height", "".concat(l, "px"))
                            }
                        }), et && y({
                            element: et,
                            padding: z
                        }), Y({
                            arrowWidth: ei,
                            arrowHeight: eo
                        }), I && v({
                            strategy: "referenceHidden",
                            ...eu
                        })]
                    }), [em, eg] = _(ed), ev = (0, A.c)($);
                    (0, L.N)(() => {
                        ep && (null == ev || ev())
                    }, [ep, ev]);
                    let ey = null == (n = eh.arrow) ? void 0 : n.x,
                        ew = null == (f = eh.arrow) ? void 0 : f.y,
                        ex = (null == (b = eh.arrow) ? void 0 : b.centerOffset) !== 0,
                        [eb, eE] = r.useState();
                    return (0, L.N)(() => {
                        K && eE(window.getComputedStyle(K).zIndex)
                    }, [K]), (0, x.jsx)("div", {
                        ref: ec.setFloating,
                        "data-radix-popper-content-wrapper": "",
                        style: { ...ef,
                            transform: ep ? ef.transform : "translate(0, -200%)",
                            minWidth: "max-content",
                            zIndex: eb,
                            "--radix-popper-transform-origin": [null == (R = eh.transformOrigin) ? void 0 : R.x, null == (P = eh.transformOrigin) ? void 0 : P.y].join(" "),
                            ...(null == (O = eh.hide) ? void 0 : O.referenceHidden) && {
                                visibility: "hidden",
                                pointerEvents: "none"
                            }
                        },
                        dir: e.dir,
                        children: (0, x.jsx)(N, {
                            scope: k,
                            placedSide: em,
                            onArrowChange: en,
                            arrowX: ey,
                            arrowY: ew,
                            shouldHideArrow: ex,
                            children: (0, x.jsx)(w.sG.div, {
                                "data-side": em,
                                "data-align": eg,
                                ...Z,
                                ref: ee,
                                style: { ...Z.style,
                                    animation: ep ? void 0 : "none"
                                }
                            })
                        })
                    })
                });
            F.displayName = H;
            var z = "PopperArrow",
                M = {
                    top: "bottom",
                    right: "left",
                    bottom: "top",
                    left: "right"
                },
                V = r.forwardRef(function(e, t) {
                    let {
                        __scopePopper: n,
                        ...r
                    } = e, i = B(z, n), o = M[i.placedSide];
                    return (0, x.jsx)("span", {
                        ref: i.onArrowChange,
                        style: {
                            position: "absolute",
                            left: i.arrowX,
                            top: i.arrowY,
                            [o]: 0,
                            transformOrigin: {
                                top: "",
                                right: "0 0",
                                bottom: "center 0",
                                left: "100% 0"
                            }[i.placedSide],
                            transform: {
                                top: "translateY(100%)",
                                right: "translateY(50%) rotate(90deg) translateX(-50%)",
                                bottom: "rotate(180deg)",
                                left: "translateY(50%) rotate(-90deg) translateX(50%)"
                            }[i.placedSide],
                            visibility: i.shouldHideArrow ? "hidden" : void 0
                        },
                        children: (0, x.jsx)(b, { ...r,
                            ref: t,
                            style: { ...r.style,
                                display: "block"
                            }
                        })
                    })
                });

            function U(e) {
                return null !== e
            }
            V.displayName = z;
            var Y = e => ({
                name: "transformOrigin",
                options: e,
                fn(t) {
                    var n, r, i, o, l;
                    let {
                        placement: a,
                        rects: s,
                        middlewareData: u
                    } = t, c = (null == (n = u.arrow) ? void 0 : n.centerOffset) !== 0, f = c ? 0 : e.arrowWidth, d = c ? 0 : e.arrowHeight, [p, h] = _(a), m = {
                        start: "0%",
                        center: "50%",
                        end: "100%"
                    }[h], g = (null != (o = null == (r = u.arrow) ? void 0 : r.x) ? o : 0) + f / 2, v = (null != (l = null == (i = u.arrow) ? void 0 : i.y) ? l : 0) + d / 2, y = "", w = "";
                    return "bottom" === p ? (y = c ? m : "".concat(g, "px"), w = "".concat(-d, "px")) : "top" === p ? (y = c ? m : "".concat(g, "px"), w = "".concat(s.floating.height + d, "px")) : "right" === p ? (y = "".concat(-d, "px"), w = c ? m : "".concat(v, "px")) : "left" === p && (y = "".concat(s.floating.width + d, "px"), w = c ? m : "".concat(v, "px")), {
                        data: {
                            x: y,
                            y: w
                        }
                    }
                }
            });

            function _(e) {
                let [t, n = "center"] = e.split("-");
                return [t, n]
            }
            var G = k,
                X = j,
                I = F,
                q = V
        },
        34378: (e, t, n) => {
            n.d(t, {
                Z: () => s
            });
            var r = n(12115),
                i = n(47650),
                o = n(63655),
                l = n(52712),
                a = n(95155),
                s = r.forwardRef((e, t) => {
                    var n, s;
                    let {
                        container: u,
                        ...c
                    } = e, [f, d] = r.useState(!1);
                    (0, l.N)(() => d(!0), []);
                    let p = u || f && (null == (s = globalThis) || null == (n = s.document) ? void 0 : n.body);
                    return p ? i.createPortal((0, a.jsx)(o.sG.div, { ...c,
                        ref: t
                    }), p) : null
                });
            s.displayName = "Portal"
        }
    }
]);