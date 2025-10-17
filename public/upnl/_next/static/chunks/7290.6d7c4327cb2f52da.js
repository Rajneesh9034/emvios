(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7290], {
        7290: (e, r, t) => {
            "use strict";
            t.r(r), t.d(r, {
                default: () => _
            });
            var l = t(95155),
                a = t(28157),
                n = t.n(a),
                s = t(29300),
                o = t.n(s),
                c = t(58995),
                i = t(11264),
                d = t(4638),
                u = t(12115),
                h = t(83540),
                m = t(94517),
                f = t(24026);
            let x = {
                    light: "",
                    dark: ".dark"
                },
                v = u.createContext(null);

            function p() {
                let e = u.useContext(v);
                if (!e) throw Error("useChart must be used within a <ChartContainer />");
                return e
            }
            let g = u.forwardRef((e, r) => {
                let {
                    id: t,
                    className: a,
                    children: n,
                    config: s,
                    ...c
                } = e, i = u.useId(), d = "chart-".concat(t || i.replace(/:/g, ""));
                return (0, l.jsx)(v.Provider, {
                    value: {
                        config: s
                    },
                    children: (0, l.jsxs)("div", {
                        "data-chart": d,
                        ref: r,
                        className: o()("flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none my-[-50%]", a),
                        ...c,
                        children: [(0, l.jsx)(b, {
                            id: d,
                            config: s
                        }), (0, l.jsx)(h.u, {
                            width: "100%",
                            height: "100%",
                            children: n
                        })]
                    })
                })
            });
            g.displayName = "Chart";
            let b = e => {
                let {
                    id: r,
                    config: t
                } = e, a = Object.entries(t).filter(e => {
                    let [r, t] = e;
                    return t.theme || t.color
                });
                return a.length ? (0, l.jsx)("style", {
                    dangerouslySetInnerHTML: {
                        __html: Object.entries(x).map(e => {
                            let [t, l] = e;
                            return "\n".concat(l, " [data-chart=").concat(r, "] {\n").concat(a.map(e => {
                                var r;
                                let [l, a] = e, n = (null == (r = a.theme) ? void 0 : r[t]) || a.color;
                                return n ? "  --color-".concat(l, ": ").concat(n, ";") : null
                            }).join("\n"), "\n}\n")
                        }).join("\n")
                    }
                }) : null
            };

            function j(e, r, t) {
                if ("object" != typeof r || null === r) return;
                let l = "payload" in r && "object" == typeof r.payload && null !== r.payload ? r.payload : void 0,
                    a = t;
                return t in r && "string" == typeof r[t] ? a = r[t] : l && t in l && "string" == typeof l[t] && (a = l[t]), a in e ? e[a] : e[t]
            }
            m.m, u.forwardRef((e, r) => {
                let {
                    active: t,
                    payload: a,
                    className: n,
                    indicator: s = "dot",
                    hideLabel: c = !1,
                    hideIndicator: i = !1,
                    label: d,
                    labelFormatter: h,
                    labelClassName: m,
                    formatter: f,
                    color: x,
                    nameKey: v,
                    labelKey: g
                } = e, {
                    config: b
                } = p(), y = u.useMemo(() => {
                    var e;
                    if (c || !(null == a ? void 0 : a.length)) return null;
                    let [r] = a, t = "".concat(g || r.dataKey || r.name || "value"), n = j(b, r, t), s = g || "string" != typeof d ? null == n ? void 0 : n.label : (null == (e = b[d]) ? void 0 : e.label) || d;
                    return h ? (0, l.jsx)("div", {
                        className: o()("font-medium", m),
                        children: h(s, a)
                    }) : s ? (0, l.jsx)("div", {
                        className: o()("font-medium", m),
                        children: s
                    }) : null
                }, [d, h, a, c, m, b, g]);
                if (!t || !(null == a ? void 0 : a.length)) return null;
                let _ = 1 === a.length && "dot" !== s;
                return (0, l.jsxs)("div", {
                    ref: r,
                    className: o()("grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl", n),
                    children: [_ ? null : y, (0, l.jsx)("div", {
                        className: "grid gap-1.5",
                        children: a.map((e, r) => {
                            let t = "".concat(v || e.name || e.dataKey || "value"),
                                a = j(b, e, t),
                                n = x || e.payload.fill || e.color;
                            return (0, l.jsx)("div", {
                                className: o()("flex w-full flex-wrap items-stretch gap-2 [&>svg]:pb-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground", "dot" === s && "items-center"),
                                children: f && (null == e ? void 0 : e.value) !== void 0 && e.name ? f(e.value, e.name, e, r, e.payload) : (0, l.jsxs)(l.Fragment, {
                                    children: [(null == a ? void 0 : a.icon) ? (0, l.jsx)(a.icon, {}) : !i && (0, l.jsx)("div", {
                                        className: o()("shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]", {
                                            "h-2.5 w-2.5": "dot" === s,
                                            "w-1": "line" === s,
                                            "w-0 border-[1.5px] border-dashed bg-transparent": "dashed" === s,
                                            "my-0.5": _ && "dashed" === s
                                        }),
                                        style: {
                                            "--color-bg": n,
                                            "--color-border": n
                                        }
                                    }), (0, l.jsxs)("div", {
                                        className: o()("flex flex-1 justify-between leading-none", _ ? "items-end" : "items-center"),
                                        children: [(0, l.jsxs)("div", {
                                            className: "grid gap-1.5",
                                            children: [_ ? y : null, (0, l.jsx)("span", {
                                                className: "text-muted-foreground",
                                                children: (null == a ? void 0 : a.label) || e.name
                                            })]
                                        }), e.value && (0, l.jsx)("span", {
                                            className: "font-mono font-medium tabular-nums text-foreground",
                                            children: e.value.toLocaleString()
                                        })]
                                    })]
                                })
                            }, e.dataKey)
                        })
                    })]
                })
            }).displayName = "ChartTooltip", f.s, u.forwardRef((e, r) => {
                let {
                    className: t,
                    hideIcon: a = !1,
                    payload: n,
                    verticalAlign: s = "bottom",
                    nameKey: c
                } = e, {
                    config: i
                } = p();
                return (null == n ? void 0 : n.length) ? (0, l.jsx)("div", {
                    ref: r,
                    className: o()("flex items-center justify-center gap-4", "top" === s ? "pb-3" : "pt-3", t),
                    children: n.map(e => {
                        let r = "".concat(c || e.dataKey || "value"),
                            t = j(i, e, r);
                        return (0, l.jsxs)("div", {
                            className: o()("flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground"),
                            children: [(null == t ? void 0 : t.icon) && !a ? (0, l.jsx)(t.icon, {}) : (0, l.jsx)("div", {
                                className: "h-2 w-2 shrink-0 rounded-[2px]",
                                style: {
                                    backgroundColor: e.color
                                }
                            }), null == t ? void 0 : t.label]
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

            function _(e) {
                let {
                    chartData: r = [{
                        browser: "static",
                        visitors: 275,
                        fill: "#00b2c8"
                    }, {
                        browser: "dinamic",
                        visitors: 200,
                        fill: "#b7f2f8"
                    }]
                } = e;
                return (0, l.jsx)(d.Zp, {
                    className: "w-full",
                    children: (0, l.jsx)(d.Wu, {
                        className: n().chart,
                        children: (0, l.jsx)(g, {
                            config: y,
                            className: "mx-[-50%] my-[-12%] aspect-square max-h-[100%]",
                            children: (0, l.jsx)(c.r, {
                                children: (0, l.jsx)(i.F, {
                                    data: r,
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
        28157: e => {
            e.exports = {
                chart: "chart_chart__oxZbY"
            }
        }
    }
]);