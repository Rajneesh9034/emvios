(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2448, 7290], {
        4638: (e, t, a) => {
            "use strict";
            a.d(t, {
                Wu: () => c,
                Zp: () => l
            });
            var r = a(95155),
                i = a(12115),
                n = a(29300),
                s = a.n(n);
            let l = i.forwardRef((e, t) => {
                let {
                    className: a,
                    ...i
                } = e;
                return (0, r.jsx)("div", {
                    ref: t,
                    className: s()("", a),
                    ...i
                })
            });
            l.displayName = "Card", i.forwardRef((e, t) => {
                let {
                    className: a,
                    ...i
                } = e;
                return (0, r.jsx)("div", {
                    ref: t,
                    className: s()("flex flex-col space-y-1.5 p-6", a),
                    ...i
                })
            }).displayName = "CardHeader", i.forwardRef((e, t) => {
                let {
                    className: a,
                    ...i
                } = e;
                return (0, r.jsx)("h3", {
                    ref: t,
                    className: s()("text-2xl font-semibold leading-none tracking-tight", a),
                    ...i
                })
            }).displayName = "CardTitle", i.forwardRef((e, t) => {
                let {
                    className: a,
                    ...i
                } = e;
                return (0, r.jsx)("p", {
                    ref: t,
                    className: s()("text-sm text-muted-foreground", a),
                    ...i
                })
            }).displayName = "CardDescription";
            let c = i.forwardRef((e, t) => {
                let {
                    className: a,
                    ...i
                } = e;
                return (0, r.jsx)("div", {
                    ref: t,
                    className: s()("pl-6 pr-6", a),
                    ...i
                })
            });
            c.displayName = "CardContent", i.forwardRef((e, t) => {
                let {
                    className: a,
                    ...i
                } = e;
                return (0, r.jsx)("div", {
                    ref: t,
                    className: s()("flex items-center p-6 pt-0", a),
                    ...i
                })
            }).displayName = "CardFooter"
        },
        5285: (e, t, a) => {
            "use strict";
            a.d(t, {
                A: () => r
            });
            let r = {
                src: "/_next/static/media/static.ddaf6dfe.svg",
                height: 90,
                width: 90,
                blurWidth: 0,
                blurHeight: 0
            }
        },
        7290: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => j
            });
            var r = a(95155),
                i = a(28157),
                n = a.n(i),
                s = a(29300),
                l = a.n(s),
                c = a(58995),
                o = a(11264),
                d = a(4638),
                u = a(12115),
                m = a(83540),
                h = a(94517),
                x = a(24026);
            let _ = {
                    light: "",
                    dark: ".dark"
                },
                f = u.createContext(null);

            function p() {
                let e = u.useContext(f);
                if (!e) throw Error("useChart must be used within a <ChartContainer />");
                return e
            }
            let g = u.forwardRef((e, t) => {
                let {
                    id: a,
                    className: i,
                    children: n,
                    config: s,
                    ...c
                } = e, o = u.useId(), d = "chart-".concat(a || o.replace(/:/g, ""));
                return (0, r.jsx)(f.Provider, {
                    value: {
                        config: s
                    },
                    children: (0, r.jsxs)("div", {
                        "data-chart": d,
                        ref: t,
                        className: l()("flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none my-[-50%]", i),
                        ...c,
                        children: [(0, r.jsx)(v, {
                            id: d,
                            config: s
                        }), (0, r.jsx)(m.u, {
                            width: "100%",
                            height: "100%",
                            children: n
                        })]
                    })
                })
            });
            g.displayName = "Chart";
            let v = e => {
                let {
                    id: t,
                    config: a
                } = e, i = Object.entries(a).filter(e => {
                    let [t, a] = e;
                    return a.theme || a.color
                });
                return i.length ? (0, r.jsx)("style", {
                    dangerouslySetInnerHTML: {
                        __html: Object.entries(_).map(e => {
                            let [a, r] = e;
                            return "\n".concat(r, " [data-chart=").concat(t, "] {\n").concat(i.map(e => {
                                var t;
                                let [r, i] = e, n = (null == (t = i.theme) ? void 0 : t[a]) || i.color;
                                return n ? "  --color-".concat(r, ": ").concat(n, ";") : null
                            }).join("\n"), "\n}\n")
                        }).join("\n")
                    }
                }) : null
            };

            function b(e, t, a) {
                if ("object" != typeof t || null === t) return;
                let r = "payload" in t && "object" == typeof t.payload && null !== t.payload ? t.payload : void 0,
                    i = a;
                return a in t && "string" == typeof t[a] ? i = t[a] : r && a in r && "string" == typeof r[a] && (i = r[a]), i in e ? e[i] : e[a]
            }
            h.m, u.forwardRef((e, t) => {
                let {
                    active: a,
                    payload: i,
                    className: n,
                    indicator: s = "dot",
                    hideLabel: c = !1,
                    hideIndicator: o = !1,
                    label: d,
                    labelFormatter: m,
                    labelClassName: h,
                    formatter: x,
                    color: _,
                    nameKey: f,
                    labelKey: g
                } = e, {
                    config: v
                } = p(), y = u.useMemo(() => {
                    var e;
                    if (c || !(null == i ? void 0 : i.length)) return null;
                    let [t] = i, a = "".concat(g || t.dataKey || t.name || "value"), n = b(v, t, a), s = g || "string" != typeof d ? null == n ? void 0 : n.label : (null == (e = v[d]) ? void 0 : e.label) || d;
                    return m ? (0, r.jsx)("div", {
                        className: l()("font-medium", h),
                        children: m(s, i)
                    }) : s ? (0, r.jsx)("div", {
                        className: l()("font-medium", h),
                        children: s
                    }) : null
                }, [d, m, i, c, h, v, g]);
                if (!a || !(null == i ? void 0 : i.length)) return null;
                let j = 1 === i.length && "dot" !== s;
                return (0, r.jsxs)("div", {
                    ref: t,
                    className: l()("grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl", n),
                    children: [j ? null : y, (0, r.jsx)("div", {
                        className: "grid gap-1.5",
                        children: i.map((e, t) => {
                            let a = "".concat(f || e.name || e.dataKey || "value"),
                                i = b(v, e, a),
                                n = _ || e.payload.fill || e.color;
                            return (0, r.jsx)("div", {
                                className: l()("flex w-full flex-wrap items-stretch gap-2 [&>svg]:pb-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground", "dot" === s && "items-center"),
                                children: x && (null == e ? void 0 : e.value) !== void 0 && e.name ? x(e.value, e.name, e, t, e.payload) : (0, r.jsxs)(r.Fragment, {
                                    children: [(null == i ? void 0 : i.icon) ? (0, r.jsx)(i.icon, {}) : !o && (0, r.jsx)("div", {
                                        className: l()("shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]", {
                                            "h-2.5 w-2.5": "dot" === s,
                                            "w-1": "line" === s,
                                            "w-0 border-[1.5px] border-dashed bg-transparent": "dashed" === s,
                                            "my-0.5": j && "dashed" === s
                                        }),
                                        style: {
                                            "--color-bg": n,
                                            "--color-border": n
                                        }
                                    }), (0, r.jsxs)("div", {
                                        className: l()("flex flex-1 justify-between leading-none", j ? "items-end" : "items-center"),
                                        children: [(0, r.jsxs)("div", {
                                            className: "grid gap-1.5",
                                            children: [j ? y : null, (0, r.jsx)("span", {
                                                className: "text-muted-foreground",
                                                children: (null == i ? void 0 : i.label) || e.name
                                            })]
                                        }), e.value && (0, r.jsx)("span", {
                                            className: "font-mono font-medium tabular-nums text-foreground",
                                            children: e.value.toLocaleString()
                                        })]
                                    })]
                                })
                            }, e.dataKey)
                        })
                    })]
                })
            }).displayName = "ChartTooltip", x.s, u.forwardRef((e, t) => {
                let {
                    className: a,
                    hideIcon: i = !1,
                    payload: n,
                    verticalAlign: s = "bottom",
                    nameKey: c
                } = e, {
                    config: o
                } = p();
                return (null == n ? void 0 : n.length) ? (0, r.jsx)("div", {
                    ref: t,
                    className: l()("flex items-center justify-center gap-4", "top" === s ? "pb-3" : "pt-3", a),
                    children: n.map(e => {
                        let t = "".concat(c || e.dataKey || "value"),
                            a = b(o, e, t);
                        return (0, r.jsxs)("div", {
                            className: l()("flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground"),
                            children: [(null == a ? void 0 : a.icon) && !i ? (0, r.jsx)(a.icon, {}) : (0, r.jsx)("div", {
                                className: "h-2 w-2 shrink-0 rounded-[2px]",
                                style: {
                                    backgroundColor: e.color
                                }
                            }), null == a ? void 0 : a.label]
                        }, e.value)
                    })
                }) : null
            }).displayName = "ChartLegend";
            let y = {
                visitors: {
                    label: "Visitors"
                },
                static: {
                    label: "Static",
                    color: "hsl(var(--chart-1))"
                },
                dinamic: {
                    label: "Dinamic",
                    color: "hsl(var(--chart-2))"
                }
            };

            function j(e) {
                let {
                    chartData: t = [{
                        browser: "static",
                        visitors: 275,
                        fill: "#00b2c8"
                    }, {
                        browser: "dinamic",
                        visitors: 200,
                        fill: "#b7f2f8"
                    }]
                } = e;
                return (0, r.jsx)(d.Zp, {
                    className: "w-full",
                    children: (0, r.jsx)(d.Wu, {
                        className: n().chart,
                        children: (0, r.jsx)(g, {
                            config: y,
                            className: "mx-[-50%] my-[-12%] aspect-square max-h-[100%]",
                            children: (0, r.jsx)(c.r, {
                                children: (0, r.jsx)(o.F, {
                                    data: t,
                                    dataKey: "visitors",
                                    nameKey: "browser",
                                    innerRadius: 65
                                })
                            })
                        })
                    })
                })
            }
        },
        10458: (e, t, a) => {
            "use strict";
            a.d(t, {
                f: () => i,
                k: () => r
            });
            let r = [{
                    id: 1,
                    minSum: 1e3,
                    maxSum: 2499.99,
                    bonus: 30,
                    investment: 100
                }, {
                    id: 2,
                    minSum: 2500,
                    maxSum: 4999.99,
                    bonus: 75,
                    investment: 250
                }, {
                    id: 3,
                    minSum: 5e3,
                    maxSum: 9999.99,
                    bonus: 150,
                    investment: 500
                }, {
                    id: 4,
                    minSum: 1e4,
                    maxSum: 24999.99,
                    bonus: 300,
                    investment: 1e3
                }, {
                    id: 5,
                    minSum: 25e3,
                    maxSum: 49999.99,
                    bonus: 750,
                    investment: 2500
                }, {
                    id: 6,
                    minSum: 5e4,
                    maxSum: 99999.99,
                    bonus: 1500,
                    investment: 5e3
                }, {
                    id: 7,
                    minSum: 1e5,
                    maxSum: 249999.99,
                    bonus: 3e3,
                    investment: 1e4
                }, {
                    id: 8,
                    minSum: 25e4,
                    maxSum: 499999.99,
                    bonus: 7500,
                    investment: 25e3
                }, {
                    id: 9,
                    minSum: 5e5,
                    maxSum: 999999.99,
                    bonus: 15e3,
                    investment: 5e4
                }, {
                    id: 10,
                    minSum: 1e6,
                    maxSum: 1 / 0,
                    bonus: 3e4,
                    investment: 1e5
                }],
                i = 0x68d62be0
        },
        11808: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => r
            });
            let r = {
                src: "/_next/static/media/check_circle.2110335c.svg",
                height: 21,
                width: 21,
                blurWidth: 0,
                blurHeight: 0
            }
        },
        17652: (e, t, a) => {
            "use strict";
            a.d(t, {
                c3: () => n
            });
            var r = a(46453);

            function i(e, t) {
                return (...e) => {
                    try {
                        return t(...e)
                    } catch {
                        throw Error(void 0)
                    }
                }
            }
            let n = i(0, r.c3);
            i(0, r.kc)
        },
        18986: (e, t, a) => {
            "use strict";
            a.d(t, {
                A: () => i
            });
            var r = a(32850);

            function i(e, t, a, i) {
                if (!e || i === a || null == i || !t) return;
                let n = (0, r.DT)(t),
                    {
                        name: s,
                        ...l
                    } = e;
                l.path || (l.path = "" !== n ? n : "/");
                let c = `${s}=${i};`;
                for (let [e, t] of Object.entries(l)) c += `${"maxAge"===e?"max-age":e}`, "boolean" != typeof t && (c += "=" + t), c += ";";
                document.cookie = c
            }
        },
        19416: (e, t, a) => {
            "use strict";
            a.d(t, {
                A: () => r
            });
            let r = {
                src: "/_next/static/media/candle.f3f44845.svg",
                height: 42,
                width: 43,
                blurWidth: 0,
                blurHeight: 0
            }
        },
        19946: (e, t, a) => {
            "use strict";
            a.d(t, {
                A: () => c
            });
            var r = a(12115);
            let i = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
                n = function() {
                    for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                    return t.filter((e, t, a) => !!e && a.indexOf(e) === t).join(" ")
                };
            var s = {
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
            let l = (0, r.forwardRef)((e, t) => {
                    let {
                        color: a = "currentColor",
                        size: i = 24,
                        strokeWidth: l = 2,
                        absoluteStrokeWidth: c,
                        className: o = "",
                        children: d,
                        iconNode: u,
                        ...m
                    } = e;
                    return (0, r.createElement)("svg", {
                        ref: t,
                        ...s,
                        width: i,
                        height: i,
                        stroke: a,
                        strokeWidth: c ? 24 * Number(l) / Number(i) : l,
                        className: n("lucide", o),
                        ...m
                    }, [...u.map(e => {
                        let [t, a] = e;
                        return (0, r.createElement)(t, a)
                    }), ...Array.isArray(d) ? d : [d]])
                }),
                c = (e, t) => {
                    let a = (0, r.forwardRef)((a, s) => {
                        let {
                            className: c,
                            ...o
                        } = a;
                        return (0, r.createElement)(l, {
                            ref: s,
                            iconNode: t,
                            className: n("lucide-".concat(i(e)), c),
                            ...o
                        })
                    });
                    return a.displayName = "".concat(e), a
                }
        },
        20151: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => r
            });
            let r = {
                src: "/_next/static/media/lookingglass_check.f5f0a26d.svg",
                height: 42,
                width: 42,
                blurWidth: 0,
                blurHeight: 0
            }
        },
        21930: e => {
            e.exports = {
                trigger: "automatictrading_trigger__JkSIr",
                breadcrumb: "automatictrading_breadcrumb__S4Z7v",
                strategies_used: "automatictrading_strategies_used__knutq",
                card: "automatictrading_card__SPnc7",
                active: "automatictrading_active__huO8S",
                trend: "automatictrading_trend__u6gfD",
                check_list: "automatictrading_check_list__rxSG6",
                accordion_lg: "automatictrading_accordion_lg__er8Fp",
                plan: "automatictrading_plan__0kLrI",
                body: "automatictrading_body__2khtA",
                inner: "automatictrading_inner__Zhu16",
                title: "automatictrading_title__0inp2",
                item: "automatictrading_item__VZjX7",
                plans: "automatictrading_plans__aVXOP",
                plan__list: "automatictrading_plan__list__QMga7",
                plan__box: "automatictrading_plan__box__au3E7",
                plan__calculation: "automatictrading_plan__calculation__GGpt8",
                calc: "automatictrading_calc__Np02k",
                switch: "automatictrading_switch__DI9pe",
                list_strategy: "automatictrading_list_strategy__zohJe",
                box: "automatictrading_box__Br4gL",
                counter: "automatictrading_counter__V1LMt",
                arrow: "automatictrading_arrow__RHAZi",
                block: "automatictrading_block__L1e0u",
                button: "automatictrading_button__6bjPy",
                span: "automatictrading_span__dusan",
                card_statistics: "automatictrading_card_statistics__3GJYx",
                progress: "automatictrading_progress__NKmBP",
                list: "automatictrading_list__pO_CO",
                stat: "automatictrading_stat__F7rBD",
                profit: "automatictrading_profit__vlqE7",
                h: "automatictrading_h__0kjkM",
                main: "automatictrading_main__jZ7JJ",
                card_list: "automatictrading_card_list__pQQ4A",
                currency: "automatictrading_currency__1bI5U",
                tab: "automatictrading_tab__HElPL"
            }
        },
        23225: (e, t, a) => {
            "use strict";
            a.d(t, {
                FD: () => p,
                MY: () => n,
                PJ: () => s,
                Wl: () => c,
                XP: () => u,
                _x: () => i,
                bL: () => m,
                po: () => o,
                ql: () => d,
                wO: () => l,
                yL: () => g
            });
            var r = a(87358);

            function i(e) {
                return ("object" == typeof e ? null == e.host && null == e.hostname : !/^[a-z]+:/i.test(e)) && ! function(e) {
                    let t = "object" == typeof e ? e.pathname : e;
                    return null != t && !t.startsWith("/")
                }(e)
            }

            function n(e, t) {
                return e.replace(RegExp(`^${t}`), "") || "/"
            }

            function s(e, t) {
                let a = e;
                return /^\/(\?.*)?$/.test(t) && (t = t.slice(1)), a += t
            }

            function l(e, t) {
                return t === e || t.startsWith(`${e}/`)
            }

            function c(e, t, a) {
                return "string" == typeof e ? e : e[t] || a
            }

            function o(e) {
                let t = function() {
                    try {
                        return "true" === r.env._next_intl_trailing_slash
                    } catch {
                        return !1
                    }
                }();
                if ("/" !== e) {
                    let a = e.endsWith("/");
                    t && !a ? e += "/" : !t && a && (e = e.slice(0, -1))
                }
                return e
            }

            function d(e, t) {
                let a = o(e),
                    r = o(t);
                return (function(e) {
                    let t = e.replace(/\[\[(\.\.\.[^\]]+)\]\]/g, "?(.*)").replace(/\[(\.\.\.[^\]]+)\]/g, "(.+)").replace(/\[([^\]]+)\]/g, "([^/]+)");
                    return RegExp(`^${t}$`)
                })(a).test(r)
            }

            function u(e, t) {
                return "never" !== t.mode && t.prefixes ? .[e] || m(e)
            }

            function m(e) {
                return "/" + e
            }

            function h(e) {
                return e.includes("[[...")
            }

            function x(e) {
                return e.includes("[...")
            }

            function _(e) {
                return e.includes("[")
            }

            function f(e, t) {
                let a = e.split("/"),
                    r = t.split("/"),
                    i = Math.max(a.length, r.length);
                for (let e = 0; e < i; e++) {
                    let t = a[e],
                        i = r[e];
                    if (!t && i) return -1;
                    if (t && !i) return 1;
                    if (t || i) {
                        if (!_(t) && _(i)) return -1;
                        if (_(t) && !_(i)) return 1;
                        if (!x(t) && x(i)) return -1;
                        if (x(t) && !x(i)) return 1;
                        if (!h(t) && h(i)) return -1;
                        if (h(t) && !h(i)) return 1
                    }
                }
                return 0
            }

            function p(e) {
                return e.sort(f)
            }

            function g(e) {
                return "function" == typeof e.then
            }
        },
        23400: (e, t, a) => {
            "use strict";
            a.d(t, {
                o: () => o
            });
            var r = a(95155),
                i = a(12115),
                n = a(75481),
                s = a.n(n),
                l = a(29300),
                c = a.n(l);
            let o = e => {
                let {
                    size: t = "h2",
                    title: a = "",
                    text: n = ""
                } = e;
                return (0, r.jsxs)("div", {
                    className: c()(s().body, s()[t]),
                    children: [i.createElement(t, {
                        className: s().title
                    }, a), n.length > 0 && (0, r.jsx)("p", {
                        className: s().text,
                        children: n
                    })]
                })
            }
        },
        23810: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => W
            });
            var r = a(95155),
                i = a(21930),
                n = a.n(i),
                s = a(29300),
                l = a.n(s),
                c = a(66766),
                o = a(23400),
                d = a(95472),
                u = a(5285),
                m = a(19416),
                h = a(63619),
                x = a(69156),
                _ = a(61440),
                f = a(72197),
                p = a(41857),
                g = a(7290),
                v = a(57793),
                b = a(20151),
                y = a(77783),
                j = a(34322),
                N = a(53774),
                w = a(78776),
                k = a(12115),
                A = a(57062),
                S = a(17652);

            function C() {
                let e = (0, S.c3)("Dashboard"),
                    t = [{
                        img: b.default,
                        key: "item-1",
                        title: e("trend_following"),
                        text: e("using_technical_indicators_to_identify_and_track_market_trends"),
                        list: [e("market_scanning"), e("automated_trading"), e("latency_management"), e("profit_calculation")],
                        details: e("this_strategy_capitalize_on_price_discrepancies_of_the_same_cryptocurrency_across_different_exchanges_the_software_buys_the_cryptocurrency_on_one_exchange_where_the_price_is_lower_and_sells_it_on_another_where_the_price_is_higher_pocketing_the_difference_as_profit")
                    }, {
                        img: y.A,
                        key: "item-2",
                        title: e("market_making"),
                        text: e("profit_from_the_spread_between_the_buy_and_sell_prices"),
                        list: [e("automated_trading"), e("latency_management"), e("profit_calculation"), e("market_scanning")],
                        details: e("profit_from_the_spread_between_the_buy_and_sell_prices_the_software_buys_the_cryptocurrency_on_one_exchange_where_the_price_is_lower_and_sells_it_on_another_where_the_price_is_higher_pocketing_the_difference_as_profit")
                    }, {
                        img: j.A,
                        key: "item-3",
                        title: e("arbitrage"),
                        text: e("earnings_from_price_differences_on_exchanges"),
                        list: [e("profit_calculation"), e("market_scanning"), e("automated_trading"), e("latency_management")],
                        details: e("earnings_from_price_differences_on_exchanges_the_software_buys_the_cryptocurrency_on_one_exchange_where_the_price_is_lower_and_sells_it_on_another_where_the_price_is_higher_pocketing_the_difference_as_profit")
                    }, {
                        img: N.A,
                        key: "item-4",
                        title: e("scalping"),
                        text: e("high_frequency_trading_to_profit_from_small_price_movements"),
                        list: [e("latency_management"), e("profit_calculation"), e("market_scanning"), e("automated_trading")],
                        details: e("high_frequency_trading_to_profit_from_small_price_movements_the_software_buys_the_cryptocurrency_on_one_exchange_where_the_price_is_lower_and_sells_it_on_another_where_the_price_is_higher_pocketing_the_difference_as_profit")
                    }],
                    [a, i] = (0, k.useState)(t[0]);
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsxs)("div", {
                        className: n().strategies_used,
                        children: [t.map((e, t) => (0, r.jsxs)("div", {
                            onClick: () => i(e),
                            className: l()(n().card, {
                                [n().active]: e.title === a.title
                            }),
                            children: [(0, r.jsx)(c.default, {
                                src: e.img,
                                width: 84,
                                height: 84,
                                style: {
                                    width: 84,
                                    height: 84
                                },
                                alt: "icon"
                            }), (0, r.jsx)(o.o, {
                                size: "h4",
                                title: e.title,
                                text: e.text
                            })]
                        }, t)), (0, r.jsxs)("div", {
                            className: n().trend,
                            children: [(0, r.jsx)("h6", {
                                className: "text-[16px] text-[#00b2c8]",
                                children: a.title
                            }), (0, r.jsx)("p", {
                                className: "text-[12px] text-[#303030]",
                                children: a.details
                            }), (0, r.jsx)("div", {
                                className: n().check_list,
                                children: a.list.map((e, t) => (0, r.jsx)("div", {
                                    children: (0, r.jsx)(w.e, {
                                        text: e
                                    })
                                }, t))
                            })]
                        })]
                    }), (0, r.jsx)("div", {
                        className: n().accordion_lg,
                        children: (0, r.jsx)(A.Accordion, {
                            defaultValue: a.key,
                            type: "single",
                            collapsible: !0,
                            children: t.map((e, t) => (0, r.jsxs)(A.AccordionItem, {
                                value: e.key,
                                children: [(0, r.jsx)(A.AccordionTrigger, {
                                    children: (0, r.jsxs)("div", {
                                        className: n().card,
                                        children: [(0, r.jsx)(c.default, {
                                            src: e.img,
                                            width: 84,
                                            height: 84,
                                            alt: "icon"
                                        }), (0, r.jsx)(o.o, {
                                            size: "h4",
                                            title: e.title,
                                            text: e.text
                                        })]
                                    })
                                }), (0, r.jsx)(A.AccordionContent, {
                                    children: (0, r.jsxs)("div", {
                                        className: n().trend,
                                        children: [(0, r.jsx)("h6", {
                                            className: "text-[16px] text-[#00b2c8]",
                                            children: e.title
                                        }), (0, r.jsx)("p", {
                                            className: "text-[12px] text-[#303030]",
                                            children: e.details
                                        }), (0, r.jsx)("div", {
                                            className: n().check_list,
                                            children: e.list.map((e, t) => (0, r.jsx)("div", {
                                                children: (0, r.jsx)(w.e, {
                                                    text: e
                                                })
                                            }, t))
                                        })]
                                    })
                                })]
                            }, e.key))
                        })
                    })]
                })
            }
            var L = a(35695),
                P = a(60388),
                R = a(10458),
                O = a(91429),
                T = a(34160);

            function W(e) {
                var t, a, i, s, b, y, j, N, w, k, W, E, M, D, F, H, I, $, q, Y;
                let {
                    children: Z
                } = e, z = (0, O.A)(), K = (0, L.useSelectedLayoutSegments)(), U = (Math.round(new Date().getTime() / 1e3) - R.f) / 86400, G = (0, S.c3)("Dashboard"), V = {
                    dynamic: [{
                        img: f.A,
                        title: G("investment_amount"),
                        text: G("flexible")
                    }, {
                        img: p.A,
                        title: G("deposit_returning"),
                        text: G("after_lock_in_period")
                    }, {
                        img: x.A,
                        title: G("lock_in_period"),
                        text: G("15_45_days")
                    }, {
                        img: m.A,
                        title: G("daily_returns"),
                        text: G("flexible")
                    }, {
                        img: h.A,
                        title: G("accruals"),
                        text: G("invested_currency")
                    }, {
                        img: _.A,
                        title: G("profitability"),
                        text: G("minimal")
                    }],
                    static: [{
                        img: f.A,
                        title: G("investment_amount"),
                        text: G("fixed_usdt")
                    }, {
                        img: p.A,
                        title: G("deposit_returning"),
                        text: G("after_deactivation")
                    }, {
                        img: x.A,
                        title: G("lock_in_period"),
                        text: G("50_80_days")
                    }, {
                        img: m.A,
                        title: G("daily_returns"),
                        text: G("fixed")
                    }, {
                        img: h.A,
                        title: G("accruals"),
                        text: "USDT"
                    }, {
                        img: _.A,
                        title: G("profitability"),
                        text: G("medium")
                    }]
                };
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)("div", {
                        className: n().body,
                        children: (0, r.jsxs)("div", {
                            className: n().inner,
                            children: [(0, r.jsxs)("div", {
                                className: n().title,
                                children: [(0, r.jsxs)(P.N_, {
                                    href: "/investments/automatictrading/dynamic",
                                    className: l()(n().item, {
                                        [n().active]: K.includes("dynamic")
                                    }),
                                    children: [(0, r.jsx)(c.default, {
                                        src: d.A,
                                        alt: "",
                                        width: 90,
                                        height: 90,
                                        priority: !0
                                    }), (0, r.jsx)(o.o, {
                                        size: "h4",
                                        title: G("dynamic_strategy"),
                                        text: G("a_strategy_with_a_wide_range_of_investment_amounts_and_short_investment_periods")
                                    })]
                                }), (0, r.jsxs)(P.N_, {
                                    href: "/investments/automatictrading/static",
                                    className: l()(n().item, {
                                        [n().active]: K.includes("static")
                                    }),
                                    children: [(0, r.jsx)(c.default, {
                                        src: u.A,
                                        alt: "",
                                        width: 90,
                                        height: 90,
                                        priority: !0
                                    }), (0, r.jsx)(o.o, {
                                        size: "h4",
                                        title: G("static_strategy"),
                                        text: G("profitable_medium_term_strategy_with_fixed_income_and_investment_amount")
                                    })]
                                })]
                            }), K.length > 1 && (0, r.jsx)("div", {
                                className: "hidden lg:block",
                                children: (0, r.jsx)("div", {
                                    className: l()(n().list_strategy),
                                    children: V[K[1]].map((e, t) => (0, r.jsxs)("div", {
                                        className: n().box,
                                        children: [(0, r.jsx)(c.default, {
                                            src: e.img,
                                            alt: "icon"
                                        }), (0, r.jsxs)("div", {
                                            children: [(0, r.jsx)("h6", {
                                                children: e.title
                                            }), (0, r.jsx)("p", {
                                                children: e.text
                                            })]
                                        })]
                                    }, t))
                                })
                            }), Z]
                        })
                    }), (0, r.jsx)(A.Accordion, {
                        type: "single",
                        collapsible: !0,
                        children: (0, r.jsxs)(A.AccordionItem, {
                            value: "features",
                            children: [(0, r.jsx)("div", {
                                className: n().trigger,
                                children: (0, r.jsx)(A.AccordionTrigger, {
                                    className: "pb-0 pt-0 pl-0 pr-0",
                                    children: (0, r.jsx)("div", {
                                        className: n().button_blue,
                                        children: (0, r.jsx)("p", {
                                            children: G("detailed")
                                        })
                                    })
                                })
                            }), (0, r.jsxs)(A.AccordionContent, {
                                className: n().inner,
                                children: [(0, r.jsxs)("div", {
                                    className: n().stat,
                                    children: [(0, r.jsxs)("div", {
                                        className: "flex flex-col",
                                        children: [(0, r.jsx)("p", {
                                            className: "text-[12px] font-[400] uppercase mb-[20px] text-[#828282]",
                                            children: G(K.includes("dynamic") ? "features_of_dynamic_strategy" : "features_of_static_strategy")
                                        }), K.length > 1 && (0, r.jsx)("div", {
                                            className: n().list_strategy,
                                            children: V[K[1]].map((e, t) => (0, r.jsxs)("div", {
                                                className: n().box,
                                                children: [(0, r.jsx)(c.default, {
                                                    src: e.img,
                                                    alt: "icon"
                                                }), (0, r.jsxs)("div", {
                                                    children: [(0, r.jsx)("h6", {
                                                        children: e.title
                                                    }), (0, r.jsx)("p", {
                                                        children: e.text
                                                    })]
                                                })]
                                            }, t))
                                        })]
                                    }), (0, r.jsxs)("div", {
                                        className: "max-w-[750px]",
                                        children: [(0, r.jsx)("p", {
                                            className: "text-[12px] font-[400] uppercase mb-[20px] text-[#828282]",
                                            children: G("trading_statistics")
                                        }), (0, r.jsxs)("div", {
                                            className: n().card_statistics,
                                            children: [(0, r.jsxs)("div", {
                                                className: "flex flex-col justify-between items-center min-h-[250px] flex-shrink-0 w-[170px] relative gap-[24px]",
                                                children: [(0, r.jsx)("p", {
                                                    className: " flex-shrink-0 text-[12px]   ",
                                                    children: G("assets_allocation")
                                                }), (0, r.jsx)(g.default, {
                                                    chartData: [{
                                                        browser: "static",
                                                        visitors: (null == z || null == (t = z.count) ? void 0 : t.static) || 50,
                                                        fill: "#00b2c8"
                                                    }, {
                                                        browser: "dinamic",
                                                        visitors: (null == z || null == (a = z.count) ? void 0 : a.dynamic) || 50,
                                                        fill: "#b7f2f8"
                                                    }]
                                                }), (0, r.jsxs)("div", {
                                                    className: "flex flex-col justify-center items-center self-stretch  flex-shrink-0",
                                                    children: [(0, r.jsxs)("div", {
                                                        className: "flex  items-center  flex-shrink-0 relative gap-[24px]",
                                                        children: [(0, r.jsx)("div", {
                                                            className: " flex-shrink-0 w-[20px] h-[8px] bg-[#00b2c8]"
                                                        }), (0, r.jsx)("p", {
                                                            className: " flex-shrink-0 text-[12px]   text-black",
                                                            children: G("static_strategy")
                                                        })]
                                                    }), (0, r.jsxs)("div", {
                                                        className: "flex  items-center  flex-shrink-0 relative gap-[24px]",
                                                        children: [(0, r.jsx)("div", {
                                                            className: " flex-shrink-0 w-[20px] h-[8px] bg-[#b7f2f8]"
                                                        }), (0, r.jsx)("p", {
                                                            className: " flex-shrink-0 text-[12px]   text-black",
                                                            children: G("dynamic_strategy")
                                                        })]
                                                    })]
                                                })]
                                            }), (0, r.jsxs)("div", {
                                                className: "flex flex-col justify-between self-stretch gap-[40px] min-w-[160px]",
                                                children: [(0, r.jsxs)("div", {
                                                    className: "flex flex-col px-[24px] relative gap-[8px] rounded-[6px]",
                                                    children: [(0, r.jsx)("p", {
                                                        className: "text-[12px]   ",
                                                        children: G("invested")
                                                    }), (0, r.jsxs)("p", {
                                                        className: "text-[16px]",
                                                        children: ["$", (0, T.A)(null == z || null == (i = z.amount) ? void 0 : i.automaticTrading)]
                                                    })]
                                                }), (0, r.jsxs)("div", {
                                                    className: "flex flex-col px-[24px] relative gap-[8px]",
                                                    children: [(0, r.jsx)("p", {
                                                        className: "text-[12px]   ",
                                                        children: G("pool_load")
                                                    }), (0, r.jsxs)("p", {
                                                        className: "text-[16px]  ",
                                                        children: [(null == z || null == (s = z.poolLoad) ? void 0 : s.automaticTrading) > 90 ? "90" : null == z || null == (y = z.poolLoad) || null == (b = y.automaticTrading) ? void 0 : b.toFixed(4), "%"]
                                                    }), (0, r.jsx)("div", {
                                                        className: l()(n().progress, "max-w-[100%] w-full"),
                                                        children: (0, r.jsx)(v.k, {
                                                            value: (null == z || null == (j = z.poolLoad) ? void 0 : j.automaticTrading) > 90 ? 90 : null == z || null == (w = z.poolLoad) || null == (N = w.automaticTrading) ? void 0 : N.toFixed(4)
                                                        })
                                                    })]
                                                }), (0, r.jsxs)("div", {
                                                    className: "flex flex-col px-[24px] relative gap-[8px] rounded-[6px]",
                                                    children: [(0, r.jsx)("p", {
                                                        className: "text-[12px] ",
                                                        children: G("total_profit")
                                                    }), (0, r.jsxs)("p", {
                                                        className: "text-[16px]  ",
                                                        children: [null == z || null == (W = z.totalProfit) || null == (k = W.automaticTrading) ? void 0 : k.toFixed(2), "%"]
                                                    })]
                                                })]
                                            }), (0, r.jsx)("div", {
                                                className: "flex flex-col justify-between bg-[#f3fbfc] self-stretch  gap-[24px]",
                                                children: (0, r.jsxs)("div", {
                                                    className: n().list,
                                                    children: [(0, r.jsxs)("div", {
                                                        className: "flex flex-col",
                                                        children: [(0, r.jsxs)("div", {
                                                            className: "flex flex-col justify-center gap-[8px] px-[12px] py-[16px] ",
                                                            children: [(0, r.jsx)("p", {
                                                                className: "  text-[12px] text-nowrap ",
                                                                children: G("strategies")
                                                            }), (0, r.jsx)("p", {
                                                                className: "font-[500] text-[16px] ",
                                                                children: "6"
                                                            })]
                                                        }), (0, r.jsxs)("div", {
                                                            className: "flex flex-col justify-center gap-[8px] px-[12px] py-[16px]",
                                                            children: [(0, r.jsx)("p", {
                                                                className: "  text-[12px] text-nowrap ",
                                                                children: G("runtime")
                                                            }), (0, r.jsxs)("p", {
                                                                className: "font-[500] text-[16px] ",
                                                                children: [U <= 0 ? 0 : U.toFixed(0), " ", G("days")]
                                                            })]
                                                        })]
                                                    }), (0, r.jsxs)("div", {
                                                        className: "flex flex-col",
                                                        children: [(0, r.jsxs)("div", {
                                                            className: "flex flex-col justify-center gap-[8px] px-[12px] py-[16px] ",
                                                            children: [(0, r.jsx)("p", {
                                                                className: "  text-[12px] text-nowrap ",
                                                                children: G("last_day_profit")
                                                            }), (0, r.jsxs)("p", {
                                                                className: "font-[500] text-[16px] ",
                                                                children: [null == z || null == (M = z.lastPercent) || null == (E = M.automaticTrading) ? void 0 : E.toFixed(2), "%"]
                                                            })]
                                                        }), (0, r.jsxs)("div", {
                                                            className: "flex flex-col justify-center gap-[8px] px-[12px] py-[16px]",
                                                            children: [(0, r.jsx)("p", {
                                                                className: "  text-[12px] text-nowrap ",
                                                                children: G("w_l_ratio")
                                                            }), (0, r.jsxs)("p", {
                                                                className: "font-[500] text-[16px] ",
                                                                children: [(0, T.A)(null == z || null == (F = z.ratio) || null == (D = F.w) ? void 0 : D.automaticTrading), " / ", (0, T.A)(null == z || null == (I = z.ratio) || null == (H = I.l) ? void 0 : H.automaticTrading)]
                                                            })]
                                                        })]
                                                    }), (0, r.jsxs)("div", {
                                                        className: "flex flex-col",
                                                        children: [(0, r.jsxs)("div", {
                                                            className: "flex flex-col justify-center gap-[8px] px-[12px] py-[16px] ",
                                                            children: [(0, r.jsx)("p", {
                                                                className: "  text-[12px] text-nowrap ",
                                                                children: G("total_trades")
                                                            }), (0, r.jsx)("p", {
                                                                className: "font-[500] text-[16px] ",
                                                                children: (0, T.A)(null == z || null == ($ = z.trades) ? void 0 : $.automaticTrading)
                                                            })]
                                                        }), (0, r.jsxs)("div", {
                                                            className: "flex flex-col justify-center gap-[8px] px-[12px] py-[16px]",
                                                            children: [(0, r.jsx)("p", {
                                                                className: "  text-[12px] text-nowrap ",
                                                                children: G("total_users")
                                                            }), (0, r.jsx)("p", {
                                                                className: "font-[500] text-[16px] ",
                                                                children: (null == z || null == (q = z.count) ? void 0 : q.static) + (null == z || null == (Y = z.count) ? void 0 : Y.dynamic) || 0
                                                            })]
                                                        })]
                                                    })]
                                                })
                                            })]
                                        })]
                                    })]
                                }), (0, r.jsx)(C, {})]
                            })]
                        })
                    })]
                })
            }
        },
        28157: e => {
            e.exports = {
                chart: "chart_chart__oxZbY"
            }
        },
        30981: (e, t, a) => {
            "use strict";
            a.d(t, {
                A: () => h
            });
            var r = a(35695),
                i = a(12115),
                n = a.t(i, 2),
                s = a(46453),
                l = n["use".trim()],
                c = a(23225),
                o = a(46160),
                d = a(32850),
                u = a(95155),
                m = a(18986);

            function h(e) {
                let {
                    Link: t,
                    config: a,
                    getPathname: n,
                    ...h
                } = function(e, t) {
                    var a, n, s;
                    let m = { ...a = t || {},
                            localePrefix: "object" == typeof(s = a.localePrefix) ? s : {
                                mode: s || "always"
                            },
                            localeCookie: !!((n = a.localeCookie) ? ? 1) && {
                                name: "NEXT_LOCALE",
                                sameSite: "lax",
                                ..."object" == typeof n && n
                            },
                            localeDetection: a.localeDetection ? ? !0,
                            alternateLinks: a.alternateLinks ? ? !0
                        },
                        h = m.pathnames,
                        x = (0, i.forwardRef)(function({
                            href: t,
                            locale: a,
                            ...r
                        }, i) {
                            let n, s;
                            "object" == typeof t ? (n = t.pathname, s = t.params) : n = t;
                            let d = (0, c._x)(t),
                                x = e(),
                                f = (0, c.yL)(x) ? l(x) : x,
                                p = d ? _({
                                    locale: a || f,
                                    href: null == h ? n : {
                                        pathname: n,
                                        params: s
                                    }
                                }, null != a || void 0) : n;
                            return (0, u.jsx)(o.default, {
                                ref: i,
                                href: "object" == typeof t ? { ...t,
                                    pathname: p
                                } : p,
                                locale: a,
                                localeCookie: m.localeCookie,
                                ...r
                            })
                        });

                    function _(e, t) {
                        let a, {
                            href: r,
                            locale: i
                        } = e;
                        return null == h ? "object" == typeof r ? (a = r.pathname, r.query && (a += (0, d.Zn)(r.query))) : a = r : a = (0, d.FP)({
                            locale: i,
                            ...(0, d.TK)(r),
                            pathnames: m.pathnames
                        }), (0, d.x3)(a, i, m, t)
                    }

                    function f(e) {
                        return function(t, ...a) {
                            return e(_(t), ...a)
                        }
                    }
                    return {
                        config: m,
                        Link: x,
                        redirect: f(r.redirect),
                        permanentRedirect: f(r.permanentRedirect),
                        getPathname: _
                    }
                }(s.Ym, e);
                return { ...h,
                    Link: t,
                    usePathname: function() {
                        let e = function(e) {
                                let t = (0, r.usePathname)(),
                                    a = (0, s.Ym)();
                                return (0, i.useMemo)(() => {
                                    if (!t) return t;
                                    let r = t,
                                        i = (0, c.XP)(a, e.localePrefix);
                                    if ((0, c.wO)(i, t)) r = (0, c.MY)(t, i);
                                    else if ("as-needed" === e.localePrefix.mode && e.localePrefix.prefixes) {
                                        let e = (0, c.bL)(a);
                                        (0, c.wO)(e, t) && (r = (0, c.MY)(t, e))
                                    }
                                    return r
                                }, [e.localePrefix, a, t])
                            }(a),
                            t = (0, s.Ym)();
                        return (0, i.useMemo)(() => e && a.pathnames ? (0, d.aM)(t, e, a.pathnames) : e, [t, e])
                    },
                    useRouter: function() {
                        let e = (0, r.useRouter)(),
                            t = (0, s.Ym)(),
                            l = (0, r.usePathname)();
                        return (0, i.useMemo)(() => {
                            function r(e) {
                                return function(r, i) {
                                    let {
                                        locale: s,
                                        ...c
                                    } = i || {}, o = [n({
                                        href: r,
                                        locale: s || t
                                    })];
                                    Object.keys(c).length > 0 && o.push(c), e(...o), (0, m.A)(a.localeCookie, l, t, s)
                                }
                            }
                            return { ...e,
                                push: r(e.push),
                                replace: r(e.replace),
                                prefetch: r(e.prefetch)
                            }
                        }, [t, l, e])
                    },
                    getPathname: n
                }
            }
        },
        32850: (e, t, a) => {
            "use strict";
            a.d(t, {
                DT: () => c,
                FP: () => s,
                TK: () => i,
                Zn: () => n,
                aM: () => l,
                x3: () => o
            });
            var r = a(23225);

            function i(e) {
                return "string" == typeof e ? {
                    pathname: e
                } : e
            }

            function n(e) {
                let t = new URLSearchParams;
                for (let [a, r] of Object.entries(e)) Array.isArray(r) ? r.forEach(e => {
                    t.append(a, String(e))
                }) : t.set(a, String(r));
                return "?" + t.toString()
            }

            function s({
                pathname: e,
                locale: t,
                params: a,
                pathnames: i,
                query: s
            }) {
                function l(e) {
                    let t = i[e];
                    return t || (t = e), t
                }

                function c(e, i) {
                    let l = (0, r.Wl)(e, t, i);
                    return a && Object.entries(a).forEach(([e, t]) => {
                        let a, r;
                        Array.isArray(t) ? (a = `(\\[)?\\[...${e}\\](\\])?`, r = t.map(e => String(e)).join("/")) : (a = `\\[${e}\\]`, r = String(t)), l = l.replace(RegExp(a, "g"), r)
                    }), l = l.replace(/\[\[\.\.\..+\]\]/g, ""), l = (0, r.po)(l), s && (l += n(s)), l
                }
                if ("string" == typeof e) return c(l(e), e); {
                    let {
                        pathname: t,
                        ...a
                    } = e;
                    return { ...a,
                        pathname: c(l(t), t)
                    }
                }
            }

            function l(e, t, a) {
                let i = (0, r.FD)(Object.keys(a)),
                    n = decodeURI(t);
                for (let t of i) {
                    let i = a[t];
                    if ("string" == typeof i) {
                        if ((0, r.ql)(i, n)) return t
                    } else if ((0, r.ql)((0, r.Wl)(i, e, t), n)) return t
                }
                return t
            }

            function c(e, t = window.location.pathname) {
                return "/" === e ? t : t.replace(e, "")
            }

            function o(e, t, a, i) {
                let n, {
                    mode: s
                } = a.localePrefix;
                return void 0 !== i ? n = i : (0, r._x)(e) && ("always" === s ? n = !0 : "as-needed" === s && (n = a.domains ? !a.domains.some(e => e.defaultLocale === t) : t !== a.defaultLocale)), n ? (0, r.PJ)((0, r.XP)(t, a.localePrefix), e) : e
            }
        },
        34160: (e, t, a) => {
            "use strict";

            function r(e) {
                return e ? Math.abs(e) > 999999 ? "".concat(Math.sign(e) * parseFloat((Math.abs(e) / 1e6).toFixed(1)), " m") : Math.abs(e) > 999 ? "".concat(Math.sign(e) * parseFloat((Math.abs(e) / 1e3).toFixed(1)), " k") : "".concat(Math.sign(e) * parseFloat(Math.abs(e).toFixed(0))) : "0"
            }
            a.d(t, {
                A: () => r
            })
        },
        34322: (e, t, a) => {
            "use strict";
            a.d(t, {
                A: () => r
            });
            let r = {
                src: "/_next/static/media/arbitrage.178727cc.svg",
                height: 84,
                width: 84,
                blurWidth: 0,
                blurHeight: 0
            }
        },
        35695: (e, t, a) => {
            "use strict";
            var r = a(18999);
            a.o(r, "permanentRedirect") && a.d(t, {
                permanentRedirect: function() {
                    return r.permanentRedirect
                }
            }), a.o(r, "redirect") && a.d(t, {
                redirect: function() {
                    return r.redirect
                }
            }), a.o(r, "usePathname") && a.d(t, {
                usePathname: function() {
                    return r.usePathname
                }
            }), a.o(r, "useRouter") && a.d(t, {
                useRouter: function() {
                    return r.useRouter
                }
            }), a.o(r, "useSelectedLayoutSegment") && a.d(t, {
                useSelectedLayoutSegment: function() {
                    return r.useSelectedLayoutSegment
                }
            }), a.o(r, "useSelectedLayoutSegments") && a.d(t, {
                useSelectedLayoutSegments: function() {
                    return r.useSelectedLayoutSegments
                }
            })
        },
        36612: (e, t, a) => {
            "use strict";
            a.d(t, {
                G: () => r
            });
            let r = (0, a(65453).v)(e => ({
                visible: !0,
                currency: "USDT",
                network: "",
                loadingCount: 0,
                setCurrency: t => e({
                    currency: t
                }),
                setNetwork: t => e({
                    network: t
                }),
                clear: () => e({
                    currency: "",
                    network: ""
                }),
                setVisible: t => e({
                    visible: t
                }),
                startLoading: () => e(e => ({
                    loadingCount: e.loadingCount + 1
                })),
                stopLoading: () => e(e => ({
                    loadingCount: Math.max(0, e.loadingCount - 1)
                }))
            }))
        },
        38637: (e, t, a) => {
            e.exports = a(79399)()
        },
        39627: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => r
            });
            let r = {
                src: "/_next/static/media/change_green.805bac21.svg",
                height: 21,
                width: 21,
                blurWidth: 0,
                blurHeight: 0
            }
        },
        40800: (e, t, a) => {
            Promise.resolve().then(a.bind(a, 23810))
        },
        41857: (e, t, a) => {
            "use strict";
            a.d(t, {
                A: () => r
            });
            let r = {
                src: "/_next/static/media/bag.e4d98a88.svg",
                height: 42,
                width: 42,
                blurWidth: 0,
                blurHeight: 0
            }
        },
        46160: (e, t, a) => {
            "use strict";
            a.d(t, {
                default: () => o
            });
            var r = a(6874),
                i = a(35695),
                n = a(12115),
                s = a(46453),
                l = a(18986),
                c = a(95155),
                o = (0, n.forwardRef)(function(e, t) {
                    let {
                        href: a,
                        locale: n,
                        localeCookie: o,
                        onClick: d,
                        prefetch: u,
                        ...m
                    } = e, h = (0, s.Ym)(), x = null != n && n !== h, _ = (0, i.usePathname)();
                    return x && (u = !1), (0, c.jsx)(r, {
                        ref: t,
                        href: a,
                        hrefLang: x ? n : void 0,
                        onClick: function(e) {
                            (0, l.A)(o, _, h, n), d && d(e)
                        },
                        prefetch: u,
                        ...m
                    })
                })
        },
        49984: (e, t, a) => {
            "use strict";

            function r(e) {
                return e
            }
            a.d(t, {
                A: () => r
            })
        },
        52596: (e, t, a) => {
            "use strict";

            function r() {
                for (var e, t, a = 0, r = "", i = arguments.length; a < i; a++)(e = arguments[a]) && (t = function e(t) {
                    var a, r, i = "";
                    if ("string" == typeof t || "number" == typeof t) i += t;
                    else if ("object" == typeof t)
                        if (Array.isArray(t)) {
                            var n = t.length;
                            for (a = 0; a < n; a++) t[a] && (r = e(t[a])) && (i && (i += " "), i += r)
                        } else
                            for (r in t) t[r] && (i && (i += " "), i += r);
                    return i
                }(e)) && (r && (r += " "), r += t);
                return r
            }
            a.d(t, {
                $: () => r,
                A: () => i
            });
            let i = r
        },
        53774: (e, t, a) => {
            "use strict";
            a.d(t, {
                A: () => r
            });
            let r = {
                src: "/_next/static/media/scalping.657be3ff.svg",
                height: 84,
                width: 84,
                blurWidth: 0,
                blurHeight: 0
            }
        },
        55863: (e, t, a) => {
            "use strict";
            a.d(t, {
                C1: () => y,
                bL: () => b
            });
            var r = a(12115),
                i = a(46081),
                n = a(63655),
                s = a(95155),
                l = "Progress",
                [c, o] = (0, i.A)(l),
                [d, u] = c(l),
                m = r.forwardRef((e, t) => {
                    var a, r, i, l;
                    let {
                        __scopeProgress: c,
                        value: o = null,
                        max: u,
                        getValueLabel: m = _,
                        ...h
                    } = e;
                    (u || 0 === u) && !g(u) && console.error((a = "".concat(u), r = "Progress", "Invalid prop `max` of value `".concat(a, "` supplied to `").concat(r, "`. Only numbers greater than 0 are valid max values. Defaulting to `").concat(100, "`.")));
                    let x = g(u) ? u : 100;
                    null === o || v(o, x) || console.error((i = "".concat(o), l = "Progress", "Invalid prop `value` of value `".concat(i, "` supplied to `").concat(l, "`. The `value` prop must be:\n  - a positive number\n  - less than the value passed to `max` (or ").concat(100, " if no `max` prop is set)\n  - `null` or `undefined` if the progress is indeterminate.\n\nDefaulting to `null`.")));
                    let b = v(o, x) ? o : null,
                        y = p(b) ? m(b, x) : void 0;
                    return (0, s.jsx)(d, {
                        scope: c,
                        value: b,
                        max: x,
                        children: (0, s.jsx)(n.sG.div, {
                            "aria-valuemax": x,
                            "aria-valuemin": 0,
                            "aria-valuenow": p(b) ? b : void 0,
                            "aria-valuetext": y,
                            role: "progressbar",
                            "data-state": f(b, x),
                            "data-value": null != b ? b : void 0,
                            "data-max": x,
                            ...h,
                            ref: t
                        })
                    })
                });
            m.displayName = l;
            var h = "ProgressIndicator",
                x = r.forwardRef((e, t) => {
                    var a;
                    let {
                        __scopeProgress: r,
                        ...i
                    } = e, l = u(h, r);
                    return (0, s.jsx)(n.sG.div, {
                        "data-state": f(l.value, l.max),
                        "data-value": null != (a = l.value) ? a : void 0,
                        "data-max": l.max,
                        ...i,
                        ref: t
                    })
                });

            function _(e, t) {
                return "".concat(Math.round(e / t * 100), "%")
            }

            function f(e, t) {
                return null == e ? "indeterminate" : e === t ? "complete" : "loading"
            }

            function p(e) {
                return "number" == typeof e
            }

            function g(e) {
                return p(e) && !isNaN(e) && e > 0
            }

            function v(e, t) {
                return p(e) && !isNaN(e) && e <= t && e >= 0
            }
            x.displayName = h;
            var b = m,
                y = x
        },
        57062: (e, t, a) => {
            "use strict";
            a.d(t, {
                Accordion: () => o,
                AccordionContent: () => m,
                AccordionItem: () => d,
                AccordionTrigger: () => u
            });
            var r = a(95155),
                i = a(12115),
                n = a(23478),
                s = a(66474),
                l = a(29300),
                c = a.n(l);
            let o = n.bL,
                d = i.forwardRef((e, t) => {
                    let {
                        className: a,
                        ...i
                    } = e;
                    return (0, r.jsx)(n.q7, {
                        ref: t,
                        className: c()("accordion_item", a),
                        ...i
                    })
                });
            d.displayName = "AccordionItem";
            let u = i.forwardRef((e, t) => {
                let {
                    className: a,
                    children: i,
                    ...l
                } = e;
                return (0, r.jsx)(n.Y9, {
                    className: "flex",
                    children: (0, r.jsxs)(n.l9, {
                        ref: t,
                        className: c()("flex gap-[12px] justify-between px-[14px] flex-1 items-center py-[16px] font-medium transition-all [&[data-state=open]>svg]:rotate-180 ", a),
                        ...l,
                        children: [i, (0, r.jsx)(s.A, {
                            className: "h-4 w-4 shrink-0 transition-transform duration-200"
                        })]
                    })
                })
            });
            u.displayName = n.l9.displayName;
            let m = i.forwardRef((e, t) => {
                let {
                    className: a,
                    children: i,
                    ...s
                } = e;
                return (0, r.jsx)(n.UC, {
                    ref: t,
                    className: "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
                    ...s,
                    children: (0, r.jsx)("div", {
                        className: c()("pb-[32px] pt-0 px-[14px]", a),
                        children: i
                    })
                })
            });
            m.displayName = n.UC.displayName
        },
        57793: (e, t, a) => {
            "use strict";
            a.d(t, {
                k: () => c
            });
            var r = a(95155),
                i = a(12115),
                n = a(55863),
                s = a(29300),
                l = a.n(s);
            let c = i.forwardRef((e, t) => {
                let {
                    className: a,
                    value: i,
                    ...s
                } = e;
                return (0, r.jsx)(n.bL, {
                    ref: t,
                    className: l()("relative h-[17px] w-full overflow-hidden bg-[#D9D9D9]", a),
                    ...s,
                    children: (0, r.jsx)(n.C1, {
                        className: "h-full w-full flex-1 bg-[#00b2c8] transition-all",
                        style: {
                            transform: "translateX(-".concat(100 - (i || 0), "%)")
                        }
                    })
                })
            });
            c.displayName = n.bL.displayName
        },
        59150: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => r
            });
            let r = {
                src: "/_next/static/media/change_orange.a294ad72.svg",
                height: 21,
                width: 21,
                blurWidth: 0,
                blurHeight: 0
            }
        },
        60388: (e, t, a) => {
            "use strict";
            a.d(t, {
                N_: () => n,
                a8: () => l,
                rd: () => c
            });
            var r = a(30981);
            let i = (0, a(49984).A)({
                    locales: ["en", "fr", "es", "ph", "hi", "hu", "cn", "cz", "jp", "id", "nl", "de", "it", "pt", "ro", "pl", "ar", "tr", "sk"],
                    defaultLocale: "en"
                }),
                {
                    Link: n,
                    redirect: s,
                    usePathname: l,
                    useRouter: c,
                    getPathname: o
                } = (0, r.A)(i)
        },
        61440: (e, t, a) => {
            "use strict";
            a.d(t, {
                A: () => r
            });
            let r = {
                src: "/_next/static/media/dollar-crosshair-black.5e1e2ac1.svg",
                height: 42,
                width: 43,
                blurWidth: 0,
                blurHeight: 0
            }
        },
        63619: (e, t, a) => {
            "use strict";
            a.d(t, {
                A: () => r
            });
            let r = {
                src: "/_next/static/media/sell.2603668d.svg",
                height: 42,
                width: 43,
                blurWidth: 0,
                blurHeight: 0
            }
        },
        65453: (e, t, a) => {
            "use strict";
            a.d(t, {
                v: () => c
            });
            var r = a(12115);
            let i = e => {
                    let t, a = new Set,
                        r = (e, r) => {
                            let i = "function" == typeof e ? e(t) : e;
                            if (!Object.is(i, t)) {
                                let e = t;
                                t = (null != r ? r : "object" != typeof i || null === i) ? i : Object.assign({}, t, i), a.forEach(a => a(t, e))
                            }
                        },
                        i = () => t,
                        n = {
                            setState: r,
                            getState: i,
                            getInitialState: () => s,
                            subscribe: e => (a.add(e), () => a.delete(e))
                        },
                        s = t = e(r, i, n);
                    return n
                },
                n = e => e ? i(e) : i,
                s = e => e,
                l = e => {
                    let t = n(e),
                        a = e => (function(e, t = s) {
                            let a = r.useSyncExternalStore(e.subscribe, () => t(e.getState()), () => t(e.getInitialState()));
                            return r.useDebugValue(a), a
                        })(t, e);
                    return Object.assign(a, t), a
                },
                c = e => e ? l(e) : l
        },
        69156: (e, t, a) => {
            "use strict";
            a.d(t, {
                A: () => r
            });
            let r = {
                src: "/_next/static/media/clock-history-black.f3ba9cf4.svg",
                height: 42,
                width: 42,
                blurWidth: 0,
                blurHeight: 0
            }
        },
        72197: (e, t, a) => {
            "use strict";
            a.d(t, {
                A: () => r
            });
            let r = {
                src: "/_next/static/media/dollar-swirl-black.9a61a8ec.svg",
                height: 42,
                width: 43,
                blurWidth: 0,
                blurHeight: 0
            }
        },
        72948: e => {
            "use strict";
            e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
        },
        75481: e => {
            e.exports = {
                h5: "typography_h5__fLxBs",
                h4: "typography_h4__m64AO",
                h3: "typography_h3__rNW9t",
                h2: "typography_h2__axwib",
                h1: "typography_h1___Y9O1",
                body: "typography_body__M5DEr",
                title: "typography_title___zbQm",
                text: "typography_text__M0uXO"
            }
        },
        77783: (e, t, a) => {
            "use strict";
            a.d(t, {
                A: () => r
            });
            let r = {
                src: "/_next/static/media/market_making.b7b90e03.svg",
                height: 84,
                width: 84,
                blurWidth: 0,
                blurHeight: 0
            }
        },
        78776: (e, t, a) => {
            "use strict";
            a.d(t, {
                e: () => o
            });
            var r = a(95155),
                i = a(66766),
                n = a(11808),
                s = a(39627),
                l = a(93788),
                c = a(59150);
            let o = e => {
                let {
                    icon: t = "blue",
                    title: a,
                    text: o
                } = e;
                return (0, r.jsxs)("div", {
                    className: "flex items-center gap-[6px]",
                    children: ["green" === t ? (0, r.jsx)(i.default, {
                        src: s.default,
                        width: 21,
                        height: 21,
                        alt: "icon"
                    }) : "orange" === t ? (0, r.jsx)(i.default, {
                        src: c.default,
                        width: 21,
                        height: 21,
                        alt: "icon"
                    }) : "dark" === t ? (0, r.jsx)(i.default, {
                        src: l.default,
                        width: 21,
                        height: 21,
                        alt: "icon"
                    }) : (0, r.jsx)(i.default, {
                        src: n.default,
                        width: 21,
                        height: 21,
                        alt: "icon"
                    }), (0, r.jsxs)("p", {
                        className: "text-black text-nowrap",
                        children: [a && (0, r.jsx)("span", {
                            className: "font-[500]",
                            children: a
                        }), o]
                    })]
                })
            }
        },
        79399: (e, t, a) => {
            "use strict";
            var r = a(72948);

            function i() {}

            function n() {}
            n.resetWarningCache = i, e.exports = function() {
                function e(e, t, a, i, n, s) {
                    if (s !== r) {
                        var l = Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                        throw l.name = "Invariant Violation", l
                    }
                }

                function t() {
                    return e
                }
                e.isRequired = e;
                var a = {
                    array: e,
                    bigint: e,
                    bool: e,
                    func: e,
                    number: e,
                    object: e,
                    string: e,
                    symbol: e,
                    any: e,
                    arrayOf: t,
                    element: e,
                    elementType: e,
                    instanceOf: t,
                    node: e,
                    objectOf: t,
                    oneOf: t,
                    oneOfType: t,
                    shape: t,
                    exact: t,
                    checkPropTypes: n,
                    resetWarningCache: i
                };
                return a.PropTypes = a, a
            }
        },
        91429: (e, t, a) => {
            "use strict";
            a.d(t, {
                A: () => l
            });
            var r = a(94052),
                i = a(36612),
                n = a(12115),
                s = a(34953);
            let l = function() {
                let {
                    startLoading: e,
                    stopLoading: t
                } = (0, i.G)(), a = (0, n.useRef)(!0), {
                    data: l,
                    isLoading: c
                } = (0, s.Ay)("/api/stats", r.A, {
                    revalidateOnFocus: !1,
                    revalidateOnReconnect: !1,
                    onSuccess: () => {
                        a.current && (t(), a.current = !1)
                    },
                    onError: () => {
                        a.current && (t(), a.current = !1)
                    }
                });
                return (0, n.useEffect)(() => {
                    c && a.current && e()
                }, [c]), l
            }
        },
        93788: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => r
            });
            let r = {
                src: "/_next/static/media/change_dark.91d51f82.svg",
                height: 22,
                width: 22,
                blurWidth: 0,
                blurHeight: 0
            }
        },
        94052: (e, t, a) => {
            "use strict";
            a.d(t, {
                A: () => r
            });
            let r = function() {
                for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                return fetch(...t).then(e => e.json())
            }
        },
        95472: (e, t, a) => {
            "use strict";
            a.d(t, {
                A: () => r
            });
            let r = {
                src: "/_next/static/media/dynamic.fb76dd74.svg",
                height: 90,
                width: 90,
                blurWidth: 0,
                blurHeight: 0
            }
        }
    },
    e => {
        var t = t => e(e.s = t);
        e.O(0, [5029, 9149, 6453, 3063, 6874, 4953, 1755, 1051, 1486, 8441, 1684, 7358], () => t(40800)), _N_E = e.O()
    }
]);