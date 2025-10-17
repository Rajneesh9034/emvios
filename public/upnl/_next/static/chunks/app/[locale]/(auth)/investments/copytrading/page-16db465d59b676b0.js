(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4103, 7290], {
        4638: (e, t, s) => {
            "use strict";
            s.d(t, {
                Wu: () => c,
                Zp: () => n
            });
            var a = s(95155),
                r = s(12115),
                l = s(29300),
                i = s.n(l);
            let n = r.forwardRef((e, t) => {
                let {
                    className: s,
                    ...r
                } = e;
                return (0, a.jsx)("div", {
                    ref: t,
                    className: i()("", s),
                    ...r
                })
            });
            n.displayName = "Card", r.forwardRef((e, t) => {
                let {
                    className: s,
                    ...r
                } = e;
                return (0, a.jsx)("div", {
                    ref: t,
                    className: i()("flex flex-col space-y-1.5 p-6", s),
                    ...r
                })
            }).displayName = "CardHeader", r.forwardRef((e, t) => {
                let {
                    className: s,
                    ...r
                } = e;
                return (0, a.jsx)("h3", {
                    ref: t,
                    className: i()("text-2xl font-semibold leading-none tracking-tight", s),
                    ...r
                })
            }).displayName = "CardTitle", r.forwardRef((e, t) => {
                let {
                    className: s,
                    ...r
                } = e;
                return (0, a.jsx)("p", {
                    ref: t,
                    className: i()("text-sm text-muted-foreground", s),
                    ...r
                })
            }).displayName = "CardDescription";
            let c = r.forwardRef((e, t) => {
                let {
                    className: s,
                    ...r
                } = e;
                return (0, a.jsx)("div", {
                    ref: t,
                    className: i()("pl-6 pr-6", s),
                    ...r
                })
            });
            c.displayName = "CardContent", r.forwardRef((e, t) => {
                let {
                    className: s,
                    ...r
                } = e;
                return (0, a.jsx)("div", {
                    ref: t,
                    className: i()("flex items-center p-6 pt-0", s),
                    ...r
                })
            }).displayName = "CardFooter"
        },
        4884: (e, t, s) => {
            "use strict";
            s.d(t, {
                bL: () => y,
                zi: () => N
            });
            var a = s(12115),
                r = s(85185),
                l = s(6101),
                i = s(46081),
                n = s(5845),
                c = s(45503),
                d = s(11275),
                o = s(63655),
                x = s(95155),
                p = "Switch",
                [u, h] = (0, i.A)(p),
                [m, f] = u(p),
                v = a.forwardRef((e, t) => {
                    let {
                        __scopeSwitch: s,
                        name: i,
                        checked: c,
                        defaultChecked: d,
                        required: p,
                        disabled: u,
                        value: h = "on",
                        onCheckedChange: f,
                        form: v,
                        ...g
                    } = e, [j, y] = a.useState(null), N = (0, l.s)(t, e => y(e)), w = a.useRef(!1), k = !j || v || !!j.closest("form"), [C = !1, A] = (0, n.i)({
                        prop: c,
                        defaultProp: d,
                        onChange: f
                    });
                    return (0, x.jsxs)(m, {
                        scope: s,
                        checked: C,
                        disabled: u,
                        children: [(0, x.jsx)(o.sG.button, {
                            type: "button",
                            role: "switch",
                            "aria-checked": C,
                            "aria-required": p,
                            "data-state": _(C),
                            "data-disabled": u ? "" : void 0,
                            disabled: u,
                            value: h,
                            ...g,
                            ref: N,
                            onClick: (0, r.m)(e.onClick, e => {
                                A(e => !e), k && (w.current = e.isPropagationStopped(), w.current || e.stopPropagation())
                            })
                        }), k && (0, x.jsx)(b, {
                            control: j,
                            bubbles: !w.current,
                            name: i,
                            value: h,
                            checked: C,
                            required: p,
                            disabled: u,
                            form: v,
                            style: {
                                transform: "translateX(-100%)"
                            }
                        })]
                    })
                });
            v.displayName = p;
            var g = "SwitchThumb",
                j = a.forwardRef((e, t) => {
                    let {
                        __scopeSwitch: s,
                        ...a
                    } = e, r = f(g, s);
                    return (0, x.jsx)(o.sG.span, {
                        "data-state": _(r.checked),
                        "data-disabled": r.disabled ? "" : void 0,
                        ...a,
                        ref: t
                    })
                });
            j.displayName = g;
            var b = e => {
                let {
                    control: t,
                    checked: s,
                    bubbles: r = !0,
                    ...l
                } = e, i = a.useRef(null), n = (0, c.Z)(s), o = (0, d.X)(t);
                return a.useEffect(() => {
                    let e = i.current,
                        t = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "checked").set;
                    if (n !== s && t) {
                        let a = new Event("click", {
                            bubbles: r
                        });
                        t.call(e, s), e.dispatchEvent(a)
                    }
                }, [n, s, r]), (0, x.jsx)("input", {
                    type: "checkbox",
                    "aria-hidden": !0,
                    defaultChecked: s,
                    ...l,
                    tabIndex: -1,
                    ref: i,
                    style: { ...e.style,
                        ...o,
                        position: "absolute",
                        pointerEvents: "none",
                        opacity: 0,
                        margin: 0
                    }
                })
            };

            function _(e) {
                return e ? "checked" : "unchecked"
            }
            var y = v,
                N = j
        },
        7290: (e, t, s) => {
            "use strict";
            s.r(t), s.d(t, {
                default: () => y
            });
            var a = s(95155),
                r = s(28157),
                l = s.n(r),
                i = s(29300),
                n = s.n(i),
                c = s(58995),
                d = s(11264),
                o = s(4638),
                x = s(12115),
                p = s(83540),
                u = s(94517),
                h = s(24026);
            let m = {
                    light: "",
                    dark: ".dark"
                },
                f = x.createContext(null);

            function v() {
                let e = x.useContext(f);
                if (!e) throw Error("useChart must be used within a <ChartContainer />");
                return e
            }
            let g = x.forwardRef((e, t) => {
                let {
                    id: s,
                    className: r,
                    children: l,
                    config: i,
                    ...c
                } = e, d = x.useId(), o = "chart-".concat(s || d.replace(/:/g, ""));
                return (0, a.jsx)(f.Provider, {
                    value: {
                        config: i
                    },
                    children: (0, a.jsxs)("div", {
                        "data-chart": o,
                        ref: t,
                        className: n()("flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none my-[-50%]", r),
                        ...c,
                        children: [(0, a.jsx)(j, {
                            id: o,
                            config: i
                        }), (0, a.jsx)(p.u, {
                            width: "100%",
                            height: "100%",
                            children: l
                        })]
                    })
                })
            });
            g.displayName = "Chart";
            let j = e => {
                let {
                    id: t,
                    config: s
                } = e, r = Object.entries(s).filter(e => {
                    let [t, s] = e;
                    return s.theme || s.color
                });
                return r.length ? (0, a.jsx)("style", {
                    dangerouslySetInnerHTML: {
                        __html: Object.entries(m).map(e => {
                            let [s, a] = e;
                            return "\n".concat(a, " [data-chart=").concat(t, "] {\n").concat(r.map(e => {
                                var t;
                                let [a, r] = e, l = (null == (t = r.theme) ? void 0 : t[s]) || r.color;
                                return l ? "  --color-".concat(a, ": ").concat(l, ";") : null
                            }).join("\n"), "\n}\n")
                        }).join("\n")
                    }
                }) : null
            };

            function b(e, t, s) {
                if ("object" != typeof t || null === t) return;
                let a = "payload" in t && "object" == typeof t.payload && null !== t.payload ? t.payload : void 0,
                    r = s;
                return s in t && "string" == typeof t[s] ? r = t[s] : a && s in a && "string" == typeof a[s] && (r = a[s]), r in e ? e[r] : e[s]
            }
            u.m, x.forwardRef((e, t) => {
                let {
                    active: s,
                    payload: r,
                    className: l,
                    indicator: i = "dot",
                    hideLabel: c = !1,
                    hideIndicator: d = !1,
                    label: o,
                    labelFormatter: p,
                    labelClassName: u,
                    formatter: h,
                    color: m,
                    nameKey: f,
                    labelKey: g
                } = e, {
                    config: j
                } = v(), _ = x.useMemo(() => {
                    var e;
                    if (c || !(null == r ? void 0 : r.length)) return null;
                    let [t] = r, s = "".concat(g || t.dataKey || t.name || "value"), l = b(j, t, s), i = g || "string" != typeof o ? null == l ? void 0 : l.label : (null == (e = j[o]) ? void 0 : e.label) || o;
                    return p ? (0, a.jsx)("div", {
                        className: n()("font-medium", u),
                        children: p(i, r)
                    }) : i ? (0, a.jsx)("div", {
                        className: n()("font-medium", u),
                        children: i
                    }) : null
                }, [o, p, r, c, u, j, g]);
                if (!s || !(null == r ? void 0 : r.length)) return null;
                let y = 1 === r.length && "dot" !== i;
                return (0, a.jsxs)("div", {
                    ref: t,
                    className: n()("grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl", l),
                    children: [y ? null : _, (0, a.jsx)("div", {
                        className: "grid gap-1.5",
                        children: r.map((e, t) => {
                            let s = "".concat(f || e.name || e.dataKey || "value"),
                                r = b(j, e, s),
                                l = m || e.payload.fill || e.color;
                            return (0, a.jsx)("div", {
                                className: n()("flex w-full flex-wrap items-stretch gap-2 [&>svg]:pb-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground", "dot" === i && "items-center"),
                                children: h && (null == e ? void 0 : e.value) !== void 0 && e.name ? h(e.value, e.name, e, t, e.payload) : (0, a.jsxs)(a.Fragment, {
                                    children: [(null == r ? void 0 : r.icon) ? (0, a.jsx)(r.icon, {}) : !d && (0, a.jsx)("div", {
                                        className: n()("shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]", {
                                            "h-2.5 w-2.5": "dot" === i,
                                            "w-1": "line" === i,
                                            "w-0 border-[1.5px] border-dashed bg-transparent": "dashed" === i,
                                            "my-0.5": y && "dashed" === i
                                        }),
                                        style: {
                                            "--color-bg": l,
                                            "--color-border": l
                                        }
                                    }), (0, a.jsxs)("div", {
                                        className: n()("flex flex-1 justify-between leading-none", y ? "items-end" : "items-center"),
                                        children: [(0, a.jsxs)("div", {
                                            className: "grid gap-1.5",
                                            children: [y ? _ : null, (0, a.jsx)("span", {
                                                className: "text-muted-foreground",
                                                children: (null == r ? void 0 : r.label) || e.name
                                            })]
                                        }), e.value && (0, a.jsx)("span", {
                                            className: "font-mono font-medium tabular-nums text-foreground",
                                            children: e.value.toLocaleString()
                                        })]
                                    })]
                                })
                            }, e.dataKey)
                        })
                    })]
                })
            }).displayName = "ChartTooltip", h.s, x.forwardRef((e, t) => {
                let {
                    className: s,
                    hideIcon: r = !1,
                    payload: l,
                    verticalAlign: i = "bottom",
                    nameKey: c
                } = e, {
                    config: d
                } = v();
                return (null == l ? void 0 : l.length) ? (0, a.jsx)("div", {
                    ref: t,
                    className: n()("flex items-center justify-center gap-4", "top" === i ? "pb-3" : "pt-3", s),
                    children: l.map(e => {
                        let t = "".concat(c || e.dataKey || "value"),
                            s = b(d, e, t);
                        return (0, a.jsxs)("div", {
                            className: n()("flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground"),
                            children: [(null == s ? void 0 : s.icon) && !r ? (0, a.jsx)(s.icon, {}) : (0, a.jsx)("div", {
                                className: "h-2 w-2 shrink-0 rounded-[2px]",
                                style: {
                                    backgroundColor: e.color
                                }
                            }), null == s ? void 0 : s.label]
                        }, e.value)
                    })
                }) : null
            }).displayName = "ChartLegend";
            let _ = {
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

            function y(e) {
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
                return (0, a.jsx)(o.Zp, {
                    className: "w-full",
                    children: (0, a.jsx)(o.Wu, {
                        className: l().chart,
                        children: (0, a.jsx)(g, {
                            config: _,
                            className: "mx-[-50%] my-[-12%] aspect-square max-h-[100%]",
                            children: (0, a.jsx)(c.r, {
                                children: (0, a.jsx)(d.F, {
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
        10458: (e, t, s) => {
            "use strict";
            s.d(t, {
                f: () => r,
                k: () => a
            });
            let a = [{
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
                r = 0x68d62be0
        },
        12588: (e, t, s) => {
            "use strict";
            s.d(t, {
                d: () => c
            });
            var a = s(95155),
                r = s(12115),
                l = s(4884),
                i = s(29300),
                n = s.n(i);
            let c = r.forwardRef((e, t) => {
                let {
                    border: s = "border-[#00b2c8]",
                    bg: r = "data-[state=checked]:bg-[#00b2c8]",
                    bgUnchecked: i = "data-[state=unchecked]:bg-[#e4fafc]",
                    bgChecked: c = "data-[state=checked]:bg-[#e4fafc]",
                    className: d,
                    ...o
                } = e;
                return (0, a.jsx)(l.bL, {
                    className: n()("peer inline-flex h-[20px] w-[40px] shrink-0 cursor-pointer items-center rounded-[3px] border-[1px] border-[#cbcbcb] border-solid transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=unchecked]:bg-[#fff] ".concat(c), d),
                    ...o,
                    ref: t,
                    children: (0, a.jsx)(l.zi, {
                        className: n()("pointer-events-none block h-[20px] w-[20px] rounded-[3px] bg-[background] shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0   border-solid border-[1px] ".concat(s, " ").concat(r, " ").concat(i, " "))
                    })
                })
            });
            c.displayName = l.bL.displayName
        },
        15549: (e, t, s) => {
            "use strict";
            s.d(t, {
                A: () => a
            });
            let a = {
                src: "/_next/static/media/market-making.aa062a83.svg",
                height: 40,
                width: 40,
                blurWidth: 0,
                blurHeight: 0
            }
        },
        17128: (e, t, s) => {
            "use strict";
            s.d(t, {
                w: () => d
            });
            var a = s(95155),
                r = s(89953),
                l = s.n(r),
                i = s(12588),
                n = s(92338),
                c = s(17652);
            let d = e => {
                let {
                    compouding: t,
                    setCompouding: s,
                    reactivation: r,
                    setReactivation: d,
                    reactivationDisabled: o,
                    colorSheme: x,
                    blockStyle: p
                } = e, u = (0, c.c3)("Dashboard");
                return (0, a.jsxs)("div", {
                    className: p || l().switch,
                    children: [(0, a.jsxs)("div", {
                        className: "flex items-center gap-[10px] relative",
                        children: [(0, a.jsx)("p", {
                            className: "text-[16px] text-center",
                            children: u("compounding")
                        }), (0, a.jsx)(i.d, {
                            border: x && x.border,
                            bg: x && x.bg,
                            bgUnchecked: x && x.bgUnchecked,
                            bgChecked: x && x.bgChecked,
                            checked: t,
                            onCheckedChange: () => s(!t)
                        }), (0, a.jsx)(n.r, {
                            text: u("adds_profit_to_the_invested_amount_increasing_profits_for_subsequent_days_can_be_changed_at_any_time")
                        })]
                    }), !o && (0, a.jsxs)("div", {
                        className: "flex items-center gap-[10px] relative mr-[20px]",
                        children: [(0, a.jsx)("p", {
                            className: "text-[16px] text-center",
                            children: u("reactivation")
                        }), (0, a.jsx)(i.d, {
                            border: x && x.border,
                            bg: x && x.bg,
                            bgUnchecked: x && x.bgUnchecked,
                            bgChecked: x && x.bgChecked,
                            checked: r,
                            onCheckedChange: () => d(!r)
                        }), (0, a.jsx)(n.r, {
                            text: u("automatically_reactivates_the_plan_for_the_next_term_as_a_bonus_you_get_02_to_your_daily_profit_cannot_be_disabled_once_activated")
                        })]
                    }), o && (0, a.jsxs)("div", {
                        className: "flex items-center gap-[10px] relative mr-[20px]",
                        children: [(0, a.jsx)("p", {
                            className: "text-[16px] text-center",
                            children: u("manual_deactivation")
                        }), (0, a.jsx)(n.r, {
                            text: u("the_investment_plan_can_be_deactivated_manually_after_the_end_of_the_lock_in_period_until_deactivation_profit_continues_to_accrue_daily")
                        })]
                    })]
                })
            }
        },
        18872: (e, t, s) => {
            "use strict";
            s.d(t, {
                A: () => a
            });
            let a = {
                src: "/_next/static/media/cryptomax.1cafa731.svg",
                height: 40,
                width: 40,
                blurWidth: 0,
                blurHeight: 0
            }
        },
        25952: e => {
            e.exports = {
                trigger: "copytrading_trigger__ndQpe",
                breadcrumb: "copytrading_breadcrumb__Unr50",
                plan: "copytrading_plan__feC2S",
                active: "copytrading_active__dol4L",
                body: "copytrading_body__liznR",
                inner: "copytrading_inner__DNHeO",
                title: "copytrading_title___PI7Z",
                item: "copytrading_item__1MDNA",
                main: "copytrading_main__w1qPt",
                card_list: "copytrading_card_list__rs_jh",
                plans: "copytrading_plans__6fpi8",
                plan__list: "copytrading_plan__list__H8H0B",
                plan__box: "copytrading_plan__box__nZ6gJ",
                plan__calculation: "copytrading_plan__calculation__ewilQ",
                calc: "copytrading_calc__wlK_0",
                switch: "copytrading_switch__PWwmO",
                list_strategy: "copytrading_list_strategy__t8Gca",
                box: "copytrading_box__1Kehu",
                counter: "copytrading_counter__zAHq3",
                arrow: "copytrading_arrow__PTEav",
                block: "copytrading_block__LpySh",
                button: "copytrading_button__HqOVe",
                span: "copytrading_span__LMSvC",
                h: "copytrading_h__6U4Td",
                card_statistics: "copytrading_card_statistics__wGfHr",
                progress: "copytrading_progress__U2KjE",
                list: "copytrading_list__67J9t",
                stat: "copytrading_stat__yRX1N",
                currency: "copytrading_currency__aAqqx",
                profit: "copytrading_profit__i2cnN",
                pagination: "copytrading_pagination__Sgtd9",
                carousel: "copytrading_carousel__S5HPQ",
                carousel_container: "copytrading_carousel_container__demZR",
                pagination_wrapper: "copytrading_pagination_wrapper__Mb1o_",
                progress_bot: "copytrading_progress_bot__BYccM",
                crypto: "copytrading_crypto__Ampn4",
                tab: "copytrading_tab__u_fTV"
            }
        },
        28157: e => {
            e.exports = {
                chart: "chart_chart__oxZbY"
            }
        },
        34160: (e, t, s) => {
            "use strict";

            function a(e) {
                return e ? Math.abs(e) > 999999 ? "".concat(Math.sign(e) * parseFloat((Math.abs(e) / 1e6).toFixed(1)), " m") : Math.abs(e) > 999 ? "".concat(Math.sign(e) * parseFloat((Math.abs(e) / 1e3).toFixed(1)), " k") : "".concat(Math.sign(e) * parseFloat(Math.abs(e).toFixed(0))) : "0"
            }
            s.d(t, {
                A: () => a
            })
        },
        38637: (e, t, s) => {
            e.exports = s(79399)()
        },
        41857: (e, t, s) => {
            "use strict";
            s.d(t, {
                A: () => a
            });
            let a = {
                src: "/_next/static/media/bag.e4d98a88.svg",
                height: 42,
                width: 42,
                blurWidth: 0,
                blurHeight: 0
            }
        },
        55863: (e, t, s) => {
            "use strict";
            s.d(t, {
                C1: () => _,
                bL: () => b
            });
            var a = s(12115),
                r = s(46081),
                l = s(63655),
                i = s(95155),
                n = "Progress",
                [c, d] = (0, r.A)(n),
                [o, x] = c(n),
                p = a.forwardRef((e, t) => {
                    var s, a, r, n;
                    let {
                        __scopeProgress: c,
                        value: d = null,
                        max: x,
                        getValueLabel: p = m,
                        ...u
                    } = e;
                    (x || 0 === x) && !g(x) && console.error((s = "".concat(x), a = "Progress", "Invalid prop `max` of value `".concat(s, "` supplied to `").concat(a, "`. Only numbers greater than 0 are valid max values. Defaulting to `").concat(100, "`.")));
                    let h = g(x) ? x : 100;
                    null === d || j(d, h) || console.error((r = "".concat(d), n = "Progress", "Invalid prop `value` of value `".concat(r, "` supplied to `").concat(n, "`. The `value` prop must be:\n  - a positive number\n  - less than the value passed to `max` (or ").concat(100, " if no `max` prop is set)\n  - `null` or `undefined` if the progress is indeterminate.\n\nDefaulting to `null`.")));
                    let b = j(d, h) ? d : null,
                        _ = v(b) ? p(b, h) : void 0;
                    return (0, i.jsx)(o, {
                        scope: c,
                        value: b,
                        max: h,
                        children: (0, i.jsx)(l.sG.div, {
                            "aria-valuemax": h,
                            "aria-valuemin": 0,
                            "aria-valuenow": v(b) ? b : void 0,
                            "aria-valuetext": _,
                            role: "progressbar",
                            "data-state": f(b, h),
                            "data-value": null != b ? b : void 0,
                            "data-max": h,
                            ...u,
                            ref: t
                        })
                    })
                });
            p.displayName = n;
            var u = "ProgressIndicator",
                h = a.forwardRef((e, t) => {
                    var s;
                    let {
                        __scopeProgress: a,
                        ...r
                    } = e, n = x(u, a);
                    return (0, i.jsx)(l.sG.div, {
                        "data-state": f(n.value, n.max),
                        "data-value": null != (s = n.value) ? s : void 0,
                        "data-max": n.max,
                        ...r,
                        ref: t
                    })
                });

            function m(e, t) {
                return "".concat(Math.round(e / t * 100), "%")
            }

            function f(e, t) {
                return null == e ? "indeterminate" : e === t ? "complete" : "loading"
            }

            function v(e) {
                return "number" == typeof e
            }

            function g(e) {
                return v(e) && !isNaN(e) && e > 0
            }

            function j(e, t) {
                return v(e) && !isNaN(e) && e <= t && e >= 0
            }
            h.displayName = u;
            var b = p,
                _ = h
        },
        57062: (e, t, s) => {
            "use strict";
            s.d(t, {
                Accordion: () => d,
                AccordionContent: () => p,
                AccordionItem: () => o,
                AccordionTrigger: () => x
            });
            var a = s(95155),
                r = s(12115),
                l = s(23478),
                i = s(66474),
                n = s(29300),
                c = s.n(n);
            let d = l.bL,
                o = r.forwardRef((e, t) => {
                    let {
                        className: s,
                        ...r
                    } = e;
                    return (0, a.jsx)(l.q7, {
                        ref: t,
                        className: c()("accordion_item", s),
                        ...r
                    })
                });
            o.displayName = "AccordionItem";
            let x = r.forwardRef((e, t) => {
                let {
                    className: s,
                    children: r,
                    ...n
                } = e;
                return (0, a.jsx)(l.Y9, {
                    className: "flex",
                    children: (0, a.jsxs)(l.l9, {
                        ref: t,
                        className: c()("flex gap-[12px] justify-between px-[14px] flex-1 items-center py-[16px] font-medium transition-all [&[data-state=open]>svg]:rotate-180 ", s),
                        ...n,
                        children: [r, (0, a.jsx)(i.A, {
                            className: "h-4 w-4 shrink-0 transition-transform duration-200"
                        })]
                    })
                })
            });
            x.displayName = l.l9.displayName;
            let p = r.forwardRef((e, t) => {
                let {
                    className: s,
                    children: r,
                    ...i
                } = e;
                return (0, a.jsx)(l.UC, {
                    ref: t,
                    className: "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
                    ...i,
                    children: (0, a.jsx)("div", {
                        className: c()("pb-[32px] pt-0 px-[14px]", s),
                        children: r
                    })
                })
            });
            p.displayName = l.UC.displayName
        },
        57793: (e, t, s) => {
            "use strict";
            s.d(t, {
                k: () => c
            });
            var a = s(95155),
                r = s(12115),
                l = s(55863),
                i = s(29300),
                n = s.n(i);
            let c = r.forwardRef((e, t) => {
                let {
                    className: s,
                    value: r,
                    ...i
                } = e;
                return (0, a.jsx)(l.bL, {
                    ref: t,
                    className: n()("relative h-[17px] w-full overflow-hidden bg-[#D9D9D9]", s),
                    ...i,
                    children: (0, a.jsx)(l.C1, {
                        className: "h-full w-full flex-1 bg-[#00b2c8] transition-all",
                        style: {
                            transform: "translateX(-".concat(100 - (r || 0), "%)")
                        }
                    })
                })
            });
            c.displayName = l.bL.displayName
        },
        60388: (e, t, s) => {
            "use strict";
            s.d(t, {
                N_: () => l,
                a8: () => n,
                rd: () => c
            });
            var a = s(30981);
            let r = (0, s(49984).A)({
                    locales: ["en", "fr", "es", "ph", "hi", "hu", "cn", "cz", "jp", "id", "nl", "de", "it", "pt", "ro", "pl", "ar", "tr", "sk"],
                    defaultLocale: "en"
                }),
                {
                    Link: l,
                    redirect: i,
                    usePathname: n,
                    useRouter: c,
                    getPathname: d
                } = (0, a.A)(r)
        },
        61440: (e, t, s) => {
            "use strict";
            s.d(t, {
                A: () => a
            });
            let a = {
                src: "/_next/static/media/dollar-crosshair-black.5e1e2ac1.svg",
                height: 42,
                width: 43,
                blurWidth: 0,
                blurHeight: 0
            }
        },
        63619: (e, t, s) => {
            "use strict";
            s.d(t, {
                A: () => a
            });
            let a = {
                src: "/_next/static/media/sell.2603668d.svg",
                height: 42,
                width: 43,
                blurWidth: 0,
                blurHeight: 0
            }
        },
        69156: (e, t, s) => {
            "use strict";
            s.d(t, {
                A: () => a
            });
            let a = {
                src: "/_next/static/media/clock-history-black.f3ba9cf4.svg",
                height: 42,
                width: 42,
                blurWidth: 0,
                blurHeight: 0
            }
        },
        72197: (e, t, s) => {
            "use strict";
            s.d(t, {
                A: () => a
            });
            let a = {
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
        73300: (e, t, s) => {
            "use strict";
            s.d(t, {
                Y: () => n
            });
            var a = s(95155),
                r = s(66766),
                l = s(92338),
                i = s(17652);
            let n = e => {
                let {
                    item: t
                } = e, s = (0, i.c3)("CopyTrading");
                return (0, a.jsxs)("div", {
                    className: "flex flex-col gap-[32px] p-[16px] rounded-[6px] border-solid border border-[#ebebeb] justify-between bg-white",
                    children: [(0, a.jsxs)("div", {
                        className: "flex items-center gap-[8px]",
                        children: [(0, a.jsxs)("div", {
                            className: "w-[43px] aspect-square",
                            children: [(0, a.jsx)("div", {
                                className: "absolute left-[-1px] top-[-1px]"
                            }), (0, a.jsx)("img", {
                                src: t.logo,
                                className: "w-[76px] object-cover"
                            })]
                        }), (0, a.jsx)("p", {
                            className: "text-black text-wrap",
                            children: t.name
                        })]
                    }), (0, a.jsx)("p", {
                        className: "text-[14px] text-black",
                        children: s(t.description)
                    }), (0, a.jsxs)("div", {
                        className: "flex justify-between items-center",
                        children: [(0, a.jsxs)("div", {
                            className: "flex flex-col justify-center items-start gap-[10px]",
                            children: [(0, a.jsx)("p", {
                                className: "text-[14px] text-[#717171]",
                                children: s("profit")
                            }), (0, a.jsx)("div", {
                                className: "flex justify-start items-center gap-[10px]",
                                children: (0, a.jsxs)("div", {
                                    className: "flex relative justify-center gap-[10px] px-[8px] py-[4px] rounded-[3px] bg-[#baaaea3b]",
                                    children: [(0, a.jsxs)("p", {
                                        className: "text-[14px] text-[#0d0c43]",
                                        children: [t.profit, "%"]
                                    }), (0, a.jsx)(l.r, {
                                        text: s("profit-description")
                                    })]
                                })
                            })]
                        }), (0, a.jsxs)("div", {
                            className: "flex flex-col justify-center gap-[10px]",
                            children: [(0, a.jsx)("p", {
                                className: "text-[14px] text-[#717171]",
                                children: s("max-drawdown")
                            }), (0, a.jsx)("div", {
                                className: "flex items-center gap-[10px]",
                                children: (0, a.jsxs)("div", {
                                    className: "flex relative justify-center gap-[10px] px-[8px] py-[4px] rounded-[3px] bg-[#baaaea3b]",
                                    children: [(0, a.jsxs)("p", {
                                        className: "text-[14px] text-[#0d0c43]",
                                        children: [t.maxDrawdown, "%"]
                                    }), (0, a.jsx)(l.r, {
                                        text: s("profit-description1")
                                    })]
                                })
                            })]
                        })]
                    }), (0, a.jsxs)("div", {
                        className: "flex justify-between items-center  flex-grow-0 ",
                        children: [(0, a.jsxs)("div", {
                            className: "flex flex-col justify-between items-start self-stretch flex-grow-0  relative",
                            children: [(0, a.jsx)("p", {
                                className: "flex-grow-0  text-[14px] text-left text-[#717171]",
                                children: s("max-drawdown-description")
                            }), (0, a.jsxs)("div", {
                                className: "flex justify-center items-center flex-grow-0  relative gap-3 px-2.5 py-2 rounded-md bg-neutral-50 border-[0.5px] border-[#d9d9d9]",
                                children: [(0, a.jsx)(r.default, {
                                    src: t.currencyLogo,
                                    width: 25,
                                    height: 25,
                                    alt: "icon"
                                }), (0, a.jsx)("p", {
                                    className: "flex-grow-0  text-[18px] font-light text-left text-[#303030]",
                                    children: t.currencyName
                                })]
                            })]
                        }), (0, a.jsxs)("div", {
                            className: "flex flex-col justify-center items-start self-stretch flex-grow-0  relative gap-2.5",
                            children: [(0, a.jsx)("p", {
                                className: "flex-grow-0  text-[14px] text-left text-[#717171]",
                                children: s("exchange")
                            }), (0, a.jsxs)("div", {
                                className: "flex justify-start items-center flex-grow-0  relative gap-2.5 px-2.5 py-2",
                                children: [(0, a.jsx)(r.default, {
                                    src: t.exchangeLogo,
                                    width: 25,
                                    height: 25,
                                    alt: "icon"
                                }), (0, a.jsx)("p", {
                                    className: "flex-grow-0  text-[16px] text-left text-[#303030]",
                                    children: t.exchangeName
                                })]
                            })]
                        })]
                    })]
                })
            }
        },
        73817: (e, t, s) => {
            "use strict";
            s.d(t, {
                default: () => K
            });
            var a = s(95155),
                r = s(25952),
                l = s.n(r),
                i = s(29300),
                n = s.n(i),
                c = s(12115),
                d = s(15549),
                o = s(81260),
                x = s(18872);
            let p = {
                src: "/_next/static/media/triangle_violet.bdd42776.svg",
                height: 19,
                width: 23,
                blurWidth: 0,
                blurHeight: 0
            };
            var u = s(10515),
                h = s(10947),
                m = s(33565),
                f = s(66766),
                v = s(36612),
                g = s(15739),
                j = s(21518),
                b = s(17128),
                _ = s(28756),
                y = s(7531),
                N = s(45567),
                w = s(84084),
                k = s(41564),
                C = s(17652),
                A = s(98648),
                S = s(84567),
                R = s(5770),
                D = s(96323),
                F = s(75752),
                T = s(73300),
                E = s(63619),
                M = s(69156),
                L = s(61440),
                P = s(72197),
                O = s(41857),
                H = s(7290),
                I = s(57793),
                W = s(60388),
                z = s(10458),
                U = s(91429),
                Y = s(89397),
                q = s(34160);

            function B() {
                var e, t, s, r, i, d, o, x, p, u, h, v, g, j, b, _, y, N, w, k, A;
                let S = (0, C.c3)("Dashboard"),
                    R = (0, C.c3)("CopyTrading"),
                    B = (0, U.A)(),
                    $ = (Math.round(new Date().getTime() / 1e3) - z.f) / 86400,
                    {
                        data: K,
                        isLoading: G
                    } = (0, Y.A)(),
                    Z = Math.ceil((null == K ? void 0 : K.length) / 3),
                    V = Math.ceil((null == K ? void 0 : K.length) / 2),
                    X = Math.ceil((null == K ? void 0 : K.length) / 1),
                    [Q, J] = (0, c.useState)(0),
                    [ee, et] = (0, c.useState)(0),
                    [es, ea] = (0, c.useState)(!1),
                    [er, el] = (0, c.useState)(!1);
                return (0, c.useEffect)(() => {
                    {
                        let e = window.matchMedia("(max-width: 830px)"),
                            t = window.matchMedia("(max-width: 1360px)");
                        ea(e.matches), el(t.matches), e.addEventListener("change", e => ea(e.matches)), t.addEventListener("change", e => el(e.matches))
                    }
                }, []), (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsxs)("div", {
                        className: l().stat,
                        children: [(0, a.jsxs)("div", {
                            className: "flex flex-col",
                            children: [(0, a.jsx)("p", {
                                className: "text-[12px] font-[400] uppercase mb-[20px] text-[#828282]",
                                children: S("features_of_dynamic_strategy")
                            }), (0, a.jsxs)("div", {
                                className: l().list_strategy,
                                children: [(0, a.jsxs)("div", {
                                    className: l().box,
                                    children: [(0, a.jsx)(f.default, {
                                        src: O.A,
                                        alt: "icon"
                                    }), (0, a.jsxs)("div", {
                                        children: [(0, a.jsx)("h6", {
                                            children: S("deposit_returning")
                                        }), (0, a.jsx)("p", {
                                            children: S("after_closing")
                                        })]
                                    })]
                                }), (0, a.jsxs)("div", {
                                    className: l().box,
                                    children: [(0, a.jsx)(f.default, {
                                        src: M.A,
                                        alt: "icon"
                                    }), (0, a.jsxs)("div", {
                                        children: [(0, a.jsx)("h6", {
                                            children: S("lock_in_period")
                                        }), (0, a.jsxs)("p", {
                                            children: ["90 ", S("days")]
                                        })]
                                    })]
                                }), (0, a.jsxs)("div", {
                                    className: l().box,
                                    children: [(0, a.jsx)(f.default, {
                                        src: P.A,
                                        alt: "icon"
                                    }), (0, a.jsxs)("div", {
                                        children: [(0, a.jsx)("h6", {
                                            children: S("investment_amount")
                                        }), (0, a.jsx)("p", {
                                            children: S("flexible")
                                        })]
                                    })]
                                }), (0, a.jsxs)("div", {
                                    className: l().box,
                                    children: [(0, a.jsx)(f.default, {
                                        src: D.A,
                                        alt: "icon"
                                    }), (0, a.jsxs)("div", {
                                        children: [(0, a.jsx)("h6", {
                                            children: S("daily_returns")
                                        }), (0, a.jsx)("p", {
                                            children: S("flexible")
                                        })]
                                    })]
                                }), (0, a.jsxs)("div", {
                                    className: l().box,
                                    children: [(0, a.jsx)(f.default, {
                                        src: E.A,
                                        alt: "icon"
                                    }), (0, a.jsxs)("div", {
                                        children: [(0, a.jsx)("h6", {
                                            children: S("accruals")
                                        }), (0, a.jsx)("p", {
                                            children: S("in_deposited_currency")
                                        })]
                                    })]
                                }), (0, a.jsxs)("div", {
                                    className: l().box,
                                    children: [(0, a.jsx)(f.default, {
                                        src: L.A,
                                        alt: "icon"
                                    }), (0, a.jsxs)("div", {
                                        children: [(0, a.jsx)("h6", {
                                            children: S("profitability")
                                        }), (0, a.jsx)("p", {
                                            children: S("maximum")
                                        })]
                                    })]
                                })]
                            })]
                        }), (0, a.jsxs)("div", {
                            className: "max-w-[750px]",
                            children: [(0, a.jsx)("p", {
                                className: "text-[12px] font-[400] uppercase mb-[20px] text-[#828282]",
                                children: S("trading_statistics")
                            }), (0, a.jsxs)("div", {
                                className: l().card_statistics,
                                children: [(0, a.jsxs)("div", {
                                    className: "flex flex-col justify-between items-center min-h-[250px] flex-shrink-0 w-[188px] relative gap-[24px]",
                                    children: [(0, a.jsx)("p", {
                                        className: " flex-shrink-0 text-[12px]   ",
                                        children: S("assets_allocation")
                                    }), (0, a.jsx)(H.default, {
                                        chartData: [{
                                            browser: "CryptoYield 12",
                                            visitors: (null == B || null == (e = B.count) ? void 0 : e.cryptoYield12) || 50,
                                            fill: "#5F43B2"
                                        }, {
                                            browser: "CryptoPro 24",
                                            visitors: (null == B || null == (t = B.count) ? void 0 : t.cryptoYield24) || 50,
                                            fill: "#EEE9FD"
                                        }, {
                                            browser: "CryptoMax 36",
                                            visitors: (null == B || null == (s = B.count) ? void 0 : s.cryptoYield36) || 50,
                                            fill: "#A58DEE"
                                        }]
                                    }), (0, a.jsxs)("div", {
                                        className: "flex flex-col justify-center items-center self-stretch  flex-shrink-0",
                                        children: [(0, a.jsxs)("div", {
                                            className: "flex  items-center  flex-shrink-0 relative gap-[24px]",
                                            children: [(0, a.jsx)("div", {
                                                className: " flex-shrink-0 w-[20px] h-[8px] bg-[#5F43B2]"
                                            }), (0, a.jsx)("p", {
                                                className: " flex-shrink-0 text-[12px]   text-black",
                                                children: "CryptoYield 12"
                                            })]
                                        }), (0, a.jsxs)("div", {
                                            className: "flex  items-center  flex-shrink-0 relative gap-[24px]",
                                            children: [(0, a.jsx)("div", {
                                                className: " flex-shrink-0 w-[20px] h-[8px] bg-[#EEE9FD]"
                                            }), (0, a.jsx)("p", {
                                                className: " flex-shrink-0 text-[12px]   text-black",
                                                children: "CryptoPro 24"
                                            })]
                                        }), (0, a.jsxs)("div", {
                                            className: "flex  items-center  flex-shrink-0 relative gap-[24px]",
                                            children: [(0, a.jsx)("div", {
                                                className: " flex-shrink-0 w-[20px] h-[8px] bg-[#A58DEE]"
                                            }), (0, a.jsx)("p", {
                                                className: " flex-shrink-0 text-[12px]   text-black",
                                                children: "CryptoMax 36"
                                            })]
                                        })]
                                    })]
                                }), (0, a.jsxs)("div", {
                                    className: "flex flex-col justify-between self-stretch gap-[40px] min-w-[160px]",
                                    children: [(0, a.jsxs)("div", {
                                        className: "flex flex-col px-[24px] relative gap-[8px] rounded-[6px]",
                                        children: [(0, a.jsx)("p", {
                                            className: "text-[12px]   ",
                                            children: S("invested")
                                        }), (0, a.jsxs)("p", {
                                            className: "text-[16px]",
                                            children: ["$", (0, q.A)(null == B || null == (r = B.amount) ? void 0 : r.copyTrading)]
                                        })]
                                    }), (0, a.jsxs)("div", {
                                        className: "flex flex-col px-[24px] relative gap-[8px]",
                                        children: [(0, a.jsx)("p", {
                                            className: "text-[12px]   ",
                                            children: S("pool_load")
                                        }), (0, a.jsxs)("p", {
                                            className: "text-[16px]  ",
                                            children: [(null == B || null == (i = B.poolLoad) ? void 0 : i.copyTrading) > 90 ? "90" : null == B || null == (o = B.poolLoad) || null == (d = o.copyTrading) ? void 0 : d.toFixed(4), "%"]
                                        }), (0, a.jsx)("div", {
                                            className: n()(l().progress, "max-w-[100%] w-full"),
                                            children: (0, a.jsx)(I.k, {
                                                value: (null == B || null == (x = B.poolLoad) ? void 0 : x.copyTrading) > 90 ? 90 : null == B || null == (u = B.poolLoad) || null == (p = u.copyTrading) ? void 0 : p.toFixed(4)
                                            })
                                        })]
                                    }), (0, a.jsxs)("div", {
                                        className: "flex flex-col px-[24px] relative gap-[8px] rounded-[6px]",
                                        children: [(0, a.jsx)("p", {
                                            className: "text-[12px] ",
                                            children: S("total_profit")
                                        }), (0, a.jsxs)("p", {
                                            className: "text-[16px]  ",
                                            children: [null == B || null == (v = B.totalProfit) || null == (h = v.copyTrading) ? void 0 : h.toFixed(2), "%"]
                                        })]
                                    })]
                                }), (0, a.jsx)("div", {
                                    className: "flex flex-col justify-between bg-[#F8F6FD] self-stretch  gap-[24px]",
                                    children: (0, a.jsxs)("div", {
                                        className: l().list,
                                        children: [(0, a.jsxs)("div", {
                                            className: "flex flex-col",
                                            children: [(0, a.jsxs)("div", {
                                                className: "flex flex-col justify-center gap-[8px] px-[12px] py-[16px] ",
                                                children: [(0, a.jsx)("p", {
                                                    className: "  text-[12px] text-nowrap ",
                                                    children: R("bots")
                                                }), (0, a.jsx)("p", {
                                                    className: "font-[500] text-[16px] ",
                                                    children: "36"
                                                })]
                                            }), (0, a.jsxs)("div", {
                                                className: "flex flex-col justify-center gap-[8px] px-[12px] py-[16px]",
                                                children: [(0, a.jsx)("p", {
                                                    className: "  text-[12px] text-nowrap ",
                                                    children: S("runtime")
                                                }), (0, a.jsxs)("p", {
                                                    className: "font-[500] text-[16px] ",
                                                    children: [$ <= 0 ? 0 : $.toFixed(0), " ", S("days")]
                                                })]
                                            })]
                                        }), (0, a.jsxs)("div", {
                                            className: "flex flex-col",
                                            children: [(0, a.jsxs)("div", {
                                                className: "flex flex-col justify-center gap-[8px] px-[12px] py-[16px] ",
                                                children: [(0, a.jsx)("p", {
                                                    className: "  text-[12px] text-nowrap ",
                                                    children: S("last_day_profit")
                                                }), (0, a.jsxs)("p", {
                                                    className: "font-[500] text-[16px] ",
                                                    children: [null == B || null == (g = B.lastPercent) ? void 0 : g.copyTrading, "%"]
                                                })]
                                            }), (0, a.jsxs)("div", {
                                                className: "flex flex-col justify-center gap-[8px] px-[12px] py-[16px]",
                                                children: [(0, a.jsx)("p", {
                                                    className: "  text-[12px] text-nowrap ",
                                                    children: S("w_l_ratio")
                                                }), (0, a.jsxs)("p", {
                                                    className: "font-[500] text-[16px] ",
                                                    children: [(0, q.A)(null == B || null == (b = B.ratio) || null == (j = b.w) ? void 0 : j.copyTrading), " / ", (0, q.A)(null == B || null == (y = B.ratio) || null == (_ = y.l) ? void 0 : _.copyTrading)]
                                                })]
                                            })]
                                        }), (0, a.jsxs)("div", {
                                            className: "flex flex-col",
                                            children: [(0, a.jsxs)("div", {
                                                className: "flex flex-col justify-center gap-[8px] px-[12px] py-[16px] ",
                                                children: [(0, a.jsx)("p", {
                                                    className: "  text-[12px] text-nowrap ",
                                                    children: S("total_trades")
                                                }), (0, a.jsx)("p", {
                                                    className: "font-[500] text-[16px] ",
                                                    children: (0, q.A)(null == B || null == (N = B.trades) ? void 0 : N.copyTrading)
                                                })]
                                            }), (0, a.jsxs)("div", {
                                                className: "flex flex-col justify-center gap-[8px] px-[12px] py-[16px]",
                                                children: [(0, a.jsx)("p", {
                                                    className: "  text-[12px] text-nowrap ",
                                                    children: S("total_users")
                                                }), (0, a.jsx)("p", {
                                                    className: "font-[500] text-[16px] ",
                                                    children: (null == B || null == (w = B.count) ? void 0 : w.cryptoYield12) + (null == B || null == (k = B.count) ? void 0 : k.cryptoYield24) + (null == B || null == (A = B.count) ? void 0 : A.cryptoYield36) || 0
                                                })]
                                            })]
                                        })]
                                    })
                                })]
                            })]
                        })]
                    }), K && !G && (0, a.jsxs)("div", {
                        className: "flex items-center justify-center flex-col gap-[24px]",
                        children: [(0, a.jsxs)("div", {
                            className: l().pagination_wrapper,
                            children: [(0, a.jsx)("p", {
                                className: "flex-grow-0 flex-shrink-0 text-[12px] font-[400]  uppercase text-[#828282]",
                                children: S("list_of_bots_used_for_copying")
                            }), (null == K ? void 0 : K.length) > 3 && (0, a.jsx)("div", {
                                className: "flex justify-center h-[10px] gap-[8px]",
                                children: Array.from({
                                    length: es ? X : er ? V : Z
                                }, (e, t) => (0, a.jsx)("button", {
                                    onClick: () => {
                                        J(t), et(t)
                                    },
                                    className: n()(l().pagination, {
                                        [l().active]: t === ee
                                    })
                                }, t))
                            })]
                        }), (0, a.jsx)(F.FN, {
                            opts: {
                                align: "center",
                                slidesToScroll: es ? 1 : er ? 2 : 3,
                                watchDrag: !1
                            },
                            pagination: Q,
                            className: l().carousel_container,
                            children: (0, a.jsx)(F.Wk, {
                                children: null == K ? void 0 : K.map((e, t) => (0, a.jsx)(F.A7, {
                                    className: l().carousel,
                                    children: (0, a.jsx)(T.Y, {
                                        item: e
                                    }, t)
                                }, t))
                            })
                        }), (0, a.jsx)("div", {
                            className: l().button,
                            children: (0, a.jsxs)(W.N_, {
                                target: "_blank",
                                href: "/copytrading/botlist",
                                children: [" ", (0, a.jsx)(m.h, {
                                    bgColor: "#7A73D1",
                                    bgHover: "linear-gradient(282.54deg, #9075DF 2%, #5F43B2 100%)",
                                    text: S("watch_full_list")
                                })]
                            })
                        })]
                    })]
                })
            }
            var $ = s(57062);

            function K(e) {
                var t, s;
                let {
                    plans: r
                } = e, i = (0, S.useTurnstile)(), F = (0, C.c3)("Errors"), T = (0, C.c3)("Dashboard"), [H, I] = (0, c.useState)(!1), [W, z] = (0, c.useState)(r[0]), [U, Y] = (0, c.useState)(!1), {
                    currency: q,
                    setCurrency: K
                } = (0, v.G)(), G = (0, g.A)(), Z = null == G ? void 0 : G.find(e => e.abr === q), [V, X] = (0, c.useState)(!1), [Q, J] = (0, c.useState)(!1), [ee, et] = (0, c.useState)(""), [es, ea] = (0, c.useState)(r[0].minsum), er = .2 * !!Q, el = (W.percentMin + W.percentMax) / 2, [ei, en] = (0, c.useState)("currency");
                async function ec() {
                    try {
                        if (I(!0), (0, k.A)({
                                currency: q,
                                amount: es,
                                balance: Z.usdt_sum || 0,
                                min: W.minsum,
                                max: W.maxsum,
                                t: F
                            })) {
                            let {
                                status: e,
                                err: t
                            } = await (0, w.A)({
                                paysys: q,
                                amount: Number(es) / ((null == Z ? void 0 : Z.price) || 1),
                                planId: W.id,
                                compounding: V,
                                reactivation: Q,
                                captcha: ee
                            });
                            if (200 !== e) return void(0, y.oR)({
                                description: t,
                                variant: "destructive"
                            });
                            (0, N.j)("/api/wallets"), (0, y.oR)({
                                title: T("success"),
                                description: T("the_plan_has_been_activated")
                            })
                        }
                    } catch (e) {
                        console.log(e), (0, y.oR)({
                            title: T("error"),
                            description: T("something_went_wrong"),
                            variant: "destructive"
                        })
                    } finally {
                        I(!1), i.reset(), et("")
                    }
                }
                return (0, c.useEffect)(() => {
                    if (es) {
                        let e = r.find(e => e.minsum <= Number(es) && e.maxsum >= Number(es));
                        e && z(e)
                    }
                }, [es]), (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsxs)("div", {
                        className: l().body,
                        children: [(0, a.jsx)(R.A, {
                            setCaptcha: et
                        }), (0, a.jsxs)("div", {
                            className: l().inner,
                            children: [(0, a.jsxs)("div", {
                                className: "hidden lg:block",
                                children: [" ", (0, a.jsxs)("div", {
                                    className: n()(l().list_strategy),
                                    children: [(0, a.jsxs)("div", {
                                        className: l().box,
                                        children: [(0, a.jsx)(f.default, {
                                            src: O.A,
                                            alt: "icon"
                                        }), (0, a.jsxs)("div", {
                                            children: [(0, a.jsx)("h6", {
                                                children: T("deposit_returning")
                                            }), (0, a.jsx)("p", {
                                                children: T("after_closing")
                                            })]
                                        })]
                                    }), (0, a.jsxs)("div", {
                                        className: l().box,
                                        children: [(0, a.jsx)(f.default, {
                                            src: M.A,
                                            alt: "icon"
                                        }), (0, a.jsxs)("div", {
                                            children: [(0, a.jsx)("h6", {
                                                children: T("lock_in_period")
                                            }), (0, a.jsxs)("p", {
                                                children: ["90 ", T("days")]
                                            })]
                                        })]
                                    }), (0, a.jsxs)("div", {
                                        className: l().box,
                                        children: [(0, a.jsx)(f.default, {
                                            src: P.A,
                                            alt: "icon"
                                        }), (0, a.jsxs)("div", {
                                            children: [(0, a.jsx)("h6", {
                                                children: T("investment_amount")
                                            }), (0, a.jsx)("p", {
                                                children: T("flexible")
                                            })]
                                        })]
                                    }), (0, a.jsxs)("div", {
                                        className: l().box,
                                        children: [(0, a.jsx)(f.default, {
                                            src: D.A,
                                            alt: "icon"
                                        }), (0, a.jsxs)("div", {
                                            children: [(0, a.jsx)("h6", {
                                                children: T("daily_returns")
                                            }), (0, a.jsx)("p", {
                                                children: T("flexible")
                                            })]
                                        })]
                                    }), (0, a.jsxs)("div", {
                                        className: l().box,
                                        children: [(0, a.jsx)(f.default, {
                                            src: E.A,
                                            alt: "icon"
                                        }), (0, a.jsxs)("div", {
                                            children: [(0, a.jsx)("h6", {
                                                children: T("accruals")
                                            }), (0, a.jsx)("p", {
                                                children: T("in_deposited_currency")
                                            })]
                                        })]
                                    }), (0, a.jsxs)("div", {
                                        className: l().box,
                                        children: [(0, a.jsx)(f.default, {
                                            src: L.A,
                                            alt: "icon"
                                        }), (0, a.jsxs)("div", {
                                            children: [(0, a.jsx)("h6", {
                                                children: T("profitability")
                                            }), (0, a.jsx)("p", {
                                                children: T("maximum")
                                            })]
                                        })]
                                    })]
                                })]
                            }), (0, a.jsxs)("div", {
                                className: l().main,
                                children: [(0, a.jsxs)("div", {
                                    className: l().plans,
                                    children: [(0, a.jsx)("div", {
                                        className: l().card_list,
                                        children: r.map(e => {
                                            let t = d.A;
                                            return 14 == e.id && (t = o.A), 15 == e.id && (t = x.A), (0, a.jsxs)("div", {
                                                onClick: () => {
                                                    z(e), ea(e.minsum)
                                                },
                                                className: n()(l().crypto, {
                                                    [l().active]: W.id === e.id
                                                }),
                                                children: [(0, a.jsxs)("div", {
                                                    className: "flex  items-center self-stretch    gap-[16px]",
                                                    children: [(0, a.jsx)(f.default, {
                                                        src: t,
                                                        width: 40,
                                                        height: 40,
                                                        alt: "icon"
                                                    }), (0, a.jsxs)("div", {
                                                        className: "flex flex-col justify-center    ",
                                                        children: [(0, a.jsx)("p", {
                                                            className: "  text-[18px] text-center text-nowrap",
                                                            children: e.name
                                                        }), (0, a.jsxs)("p", {
                                                            className: "  text-[14px] text-center uppercase ",
                                                            children: [(0, a.jsxs)("span", {
                                                                className: "  text-[14px] font-medium text-center uppercase ",
                                                                children: [e.percentMin, " - ", e.percentMax, "%"]
                                                            }), (0, a.jsx)("span", {
                                                                className: "  text-[14px] font-light text-center uppercase ml-[4px]",
                                                                children: T("daily")
                                                            })]
                                                        })]
                                                    })]
                                                }), (0, a.jsxs)("div", {
                                                    className: "flex flex-col   self-stretch    gap-[16px]",
                                                    children: [(0, a.jsxs)("p", {
                                                        className: "self-stretch    text-[12px]  ",
                                                        children: [(0, a.jsxs)("span", {
                                                            className: "self-stretch    text-[12px] font-medium  ",
                                                            children: [T("lock_in_period"), ":"]
                                                        }), (0, a.jsxs)("span", {
                                                            className: "self-stretch    text-[12px] font-light ml-[4px] ",
                                                            children: [e.days, " ", T("days")]
                                                        })]
                                                    }), (0, a.jsxs)("p", {
                                                        className: "self-stretch    text-[12px]  ",
                                                        children: [(0, a.jsxs)("span", {
                                                            className: "self-stretch    text-[12px] font-medium  ",
                                                            children: [T("deposit_returning"), ":"]
                                                        }), (0, a.jsx)("span", {
                                                            className: "self-stretch  relative  text-[12px] font-light ml-[4px] ",
                                                            children: T("after_closing")
                                                        })]
                                                    }), (0, a.jsxs)("p", {
                                                        className: "self-stretch    text-[12px]  ",
                                                        children: [(0, a.jsxs)("span", {
                                                            className: "self-stretch    text-[12px] font-medium  ",
                                                            children: [T("bots_in_work"), ":"]
                                                        }), (0, a.jsx)("span", {
                                                            className: "self-stretch    text-[12px] font-light ml-[4px] ",
                                                            children: e.name.split(" ")[1]
                                                        })]
                                                    }), (0, a.jsxs)("p", {
                                                        className: "self-stretch    text-[12px]  ",
                                                        children: [(0, a.jsxs)("span", {
                                                            className: "self-stretch    text-[12px] font-medium  ",
                                                            children: [T("amount"), ":"]
                                                        }), (0, a.jsxs)("span", {
                                                            className: "self-stretch    text-[12px] font-light ml-[4px] ",
                                                            children: ["$", e.minsum, " - $", e.maxsum]
                                                        })]
                                                    })]
                                                })]
                                            }, e.id)
                                        })
                                    }), (0, a.jsxs)("div", {
                                        className: l().currency,
                                        children: [(0, a.jsx)("h5", {
                                            className: "flex justify-between text-[16px] font-[400] translate-y-[10px]",
                                            children: T("currency_and_investment_amount")
                                        }), (0, a.jsxs)("div", {
                                            className: l().block,
                                            children: [(0, a.jsxs)("div", {
                                                className: "flex flex-col",
                                                children: [(0, a.jsxs)("div", {
                                                    className: "flex justify-between",
                                                    children: [(0, a.jsx)("p", {
                                                        className: "text-[10px] uppercase text-[rgb(96,94,94)]",
                                                        children: T("currency")
                                                    }), (0, a.jsxs)("p", {
                                                        className: "text-[10px] uppercase text-[rgb(96,94,94)]",
                                                        children: [(null == G || null == (t = G.find(e => (null == e ? void 0 : e.abr) === q)) ? void 0 : t.sum) || 0, " ", q.toLowerCase()]
                                                    })]
                                                }), (0, a.jsxs)(h.AM, {
                                                    open: U,
                                                    onOpenChange: Y,
                                                    children: [(0, a.jsx)(h.Wv, {
                                                        asChild: !0,
                                                        children: (0, a.jsxs)("div", {
                                                            onClick: () => Y(!U),
                                                            className: n()(l().counter, {
                                                                [l().active]: U
                                                            }),
                                                            children: [(0, a.jsx)("div", {
                                                                className: "flex flex-col justify-between gap-[16px] self-stretch",
                                                                children: (0, a.jsx)("div", {
                                                                    className: "flex flex-col justify-center",
                                                                    children: (0, a.jsxs)("div", {
                                                                        className: "flex  items-center    gap-[16px]",
                                                                        children: [q && (0, a.jsx)(f.default, {
                                                                            src: "/wallets/".concat(q.toLowerCase(), ".png"),
                                                                            width: 25,
                                                                            height: 25,
                                                                            alt: "icon"
                                                                        }), (0, a.jsx)("div", {
                                                                            className: "flex flex-col justify-center items-center",
                                                                            children: (0, a.jsxs)("p", {
                                                                                className: "   text-[14px] text-nowrap truncate whitespace-nowrap overflow-hidden text-ellipsis ",
                                                                                children: [G && q ? null == G || null == (s = G.find(e => (null == e ? void 0 : e.abr) === q)) ? void 0 : s.name : "", !q && T("select_currency")]
                                                                            })
                                                                        })]
                                                                    })
                                                                })
                                                            }), (0, a.jsx)("div", {
                                                                className: "flex flex-col justify-between items-end self-stretch",
                                                                children: (0, a.jsx)("div", {
                                                                    className: l().arrow,
                                                                    children: (0, a.jsx)(f.default, {
                                                                        src: p,
                                                                        width: 25,
                                                                        height: 25,
                                                                        alt: "icon"
                                                                    })
                                                                })
                                                            })]
                                                        })
                                                    }), G && (0, a.jsx)(h.hl, {
                                                        className: "w-[308px] rounded-md bg-white border-solid border-[0.5px] border-[#cecece]",
                                                        children: (0, a.jsxs)(u.uB, {
                                                            children: [(0, a.jsx)(u.G7, {
                                                                placeholder: T("search_coins")
                                                            }), (0, a.jsxs)(u.oI, {
                                                                children: [(0, a.jsx)(u.xL, {
                                                                    children: T("no_coins_found")
                                                                }), (0, a.jsx)(u.L$, {
                                                                    children: null == G ? void 0 : G.map(e => (0, a.jsx)(u.h_, {
                                                                        value: e.abr,
                                                                        onSelect: t => {
                                                                            K(e.abr), Y(!1)
                                                                        },
                                                                        children: (0, a.jsxs)("div", {
                                                                            className: "flex items-center gap-[16px]",
                                                                            children: [(0, a.jsx)(f.default, {
                                                                                src: "/wallets/".concat(e.abr.toLowerCase(), ".png"),
                                                                                width: 25,
                                                                                height: 25,
                                                                                alt: "icon"
                                                                            }), e.name]
                                                                        })
                                                                    }, e.abr))
                                                                })]
                                                            })]
                                                        })
                                                    })]
                                                })]
                                            }), (0, a.jsxs)("div", {
                                                className: "flex flex-col flex-grow  max-w-full",
                                                children: [(0, a.jsxs)("div", {
                                                    className: "flex justify-between",
                                                    children: [(0, a.jsxs)("p", {
                                                        className: "text-[10px] uppercase text-[#605e5e]",
                                                        children: [T("amount"), ": $", W.minsum, "-$", W.maxsum]
                                                    }), (0, a.jsx)("p", {
                                                        className: "text-[10px] uppercase  font-bold cursor-pointer text-[#7A73D1]",
                                                        onClick: () => {
                                                            ea(G[G.findIndex(e => e.abr === q)].sum * ((null == Z ? void 0 : Z.price) || 1) || "0")
                                                        },
                                                        children: T("use_max")
                                                    })]
                                                }), (0, a.jsxs)("div", {
                                                    className: "flex flex-row flex-grow border border-solid bg-neutral-50 rounded-[6px] border-[#cecece] overflow-hidden ",
                                                    children: [(0, a.jsxs)("div", {
                                                        className: "flex justify-center items-center flex-grow gap-[8px] px-[10px]  min-w-[50%]",
                                                        children: [(0, a.jsx)("input", {
                                                            value: es,
                                                            onChange: e => {
                                                                if (/^[^.]*[.,](?![.,])$/.test(e.target.value)) return void ea(e.target.value.replace(",", "."));
                                                                /^\d*(?:[.,]\d+)?$/.test(e.target.value) && ea(e.target.value)
                                                            },
                                                            className: "flex text-center text-[14px]   flex-auto items-center justify-center  bg-[#fafafa] "
                                                        }), (0, a.jsx)("div", {
                                                            className: "flex justify-end items-center gap-[10px]",
                                                            children: (0, a.jsx)("p", {
                                                                className: "text-[14px]",
                                                                children: "$"
                                                            })
                                                        })]
                                                    }), (0, a.jsxs)("div", {
                                                        className: "flex  justify-center items-center flex-grow gap-[8px] px-[10px] border-l-[1px] border-[#cecece] border-solid w-full sm:w-[170px] cursor-not-allowed",
                                                        children: [(0, a.jsx)("p", {
                                                            className: "truncate whitespace-nowrap overflow-hidden text-ellipsis text-[14px]",
                                                            children: es ? (Number(es) / ((null == Z ? void 0 : Z.price) || 1)).toFixed(8) : es
                                                        }), (0, a.jsx)("div", {
                                                            className: "flex justify-end items-center gap-[10px]",
                                                            children: (0, a.jsx)("p", {
                                                                className: "text-[14px]",
                                                                children: q
                                                            })
                                                        })]
                                                    })]
                                                })]
                                            })]
                                        }), (0, a.jsx)(j.X, {
                                            colorSheme: {
                                                from: "from-[#9075DF]",
                                                to: "to-[#5F43B2]",
                                                bg: "bg-[#5F43B2]"
                                            },
                                            sm: !0,
                                            type: "dynamic",
                                            amount: String(es),
                                            setAmount: ea,
                                            plan: W
                                        }), (0, a.jsx)(b.w, {
                                            reactivationDisabled: !1,
                                            compouding: V,
                                            setCompouding: X,
                                            reactivation: Q,
                                            setReactivation: J,
                                            colorSheme: {
                                                border: "border-[#9075DF]",
                                                bg: "bg-[#9075DF]",
                                                bgUnchecked: "data-[state=unchecked]:bg-[#7973d157]",
                                                bgChecked: "data-[state=checked]:bg-[#7973d157]"
                                            },
                                            blockStyle: l().switch
                                        })]
                                    })]
                                }), (0, a.jsxs)("div", {
                                    className: "flex flex-col gap-[30px]",
                                    children: [(0, a.jsxs)("div", {
                                        className: l().profit,
                                        children: [(0, a.jsxs)("h5", {
                                            className: l().h,
                                            children: [T("profit_calculation"), (0, a.jsxs)("div", {
                                                className: "overflow-hidden border-[1px] border-solid border-[#e6e6e6] rounded-[6px] flex items-center h-[40px] flex-shrink-0 flex-grow-0",
                                                children: [(0, a.jsx)("p", {
                                                    onClick: () => {
                                                        en("currency")
                                                    },
                                                    className: n()(l().tab, {
                                                        [l().active]: "currency" === ei
                                                    }, {
                                                        "bg-[#7A73D1]": "currency" === ei
                                                    }),
                                                    children: q
                                                }), (0, a.jsx)("p", {
                                                    onClick: () => {
                                                        en("usd")
                                                    },
                                                    className: n()(l().tab, {
                                                        [l().active]: "usd" === ei
                                                    }, {
                                                        "bg-[#7A73D1]": "usd" === ei
                                                    }),
                                                    children: "$ USD"
                                                }), (0, a.jsxs)("p", {
                                                    onClick: () => {
                                                        en("interest")
                                                    },
                                                    className: n()(l().tab, {
                                                        [l().active]: "interest" === ei
                                                    }, {
                                                        "bg-[#7A73D1]": "interest" === ei
                                                    }),
                                                    children: [(0, a.jsx)("span", {
                                                        className: "",
                                                        children: "% "
                                                    }), " ", T("interest").toUpperCase()]
                                                })]
                                            })]
                                        }), (0, a.jsx)(_.f, {
                                            dashboard: !0,
                                            blockStyle: "justify-around",
                                            profit: ei,
                                            type: "dynamic",
                                            amount: "currency" !== ei ? String(es) : es ? (Number(es) / ((null == Z ? void 0 : Z.price) || 1)).toFixed(8) : String(es),
                                            percent: el,
                                            compouding: V,
                                            reactivationValue: er,
                                            days: W.days,
                                            symbol: "usd" === ei ? "$" : ""
                                        })]
                                    }), (0, a.jsx)("div", {
                                        className: l().button,
                                        children: (0, a.jsx)(A.A, {
                                            title: T("confirm_your_investment_plan"),
                                            description: T("confirm_investment_plan", {
                                                name: W.name,
                                                days: W.days,
                                                percentMin: W.percentMin,
                                                percentMax: W.percentMax,
                                                amount: es || 0,
                                                currency: q
                                            }),
                                            cancelText: T("cancel"),
                                            actionText: T("confirm"),
                                            onConfirm: ec,
                                            children: (0, a.jsx)(m.h, {
                                                bgColor: "#7A73D1",
                                                bgHover: "linear-gradient(282.54deg, #9075DF 2%, #5F43B2 100%)",
                                                disabled: H || !ee,
                                                text: H || !ee ? T("loading") : T("activate")
                                            })
                                        })
                                    })]
                                })]
                            })]
                        })]
                    }), (0, a.jsx)($.Accordion, {
                        type: "single",
                        collapsible: !0,
                        children: (0, a.jsxs)($.AccordionItem, {
                            value: "features",
                            children: [(0, a.jsx)("div", {
                                className: l().trigger,
                                children: (0, a.jsx)($.AccordionTrigger, {
                                    className: "pb-0 pt-0 pl-0 pr-0",
                                    children: (0, a.jsx)("div", {
                                        className: l().button_blue,
                                        children: (0, a.jsx)("p", {
                                            children: T("detailed")
                                        })
                                    })
                                })
                            }), (0, a.jsx)($.AccordionContent, {
                                className: l().inner,
                                children: (0, a.jsx)(B, {})
                            })]
                        })
                    })]
                })
            }
        },
        75752: (e, t, s) => {
            "use strict";
            s.d(t, {
                FN: () => m,
                Wk: () => f,
                A7: () => v
            });
            var a = s(95155),
                r = s(12115),
                l = s(85005),
                i = s(35169),
                n = s(92138),
                c = s(29300),
                d = s.n(c),
                o = s(99708);
            let x = (0, s(74466).F)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", {
                    variants: {
                        variant: {
                            default: "bg-primary text-primary-foreground hover:bg-primary/90",
                            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
                            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                            ghost: "hover:bg-accent hover:text-accent-foreground",
                            link: "text-primary underline-offset-4 hover:underline"
                        },
                        size: {
                            default: "h-10 px-4 py-2",
                            sm: "h-9 rounded-md px-3",
                            lg: "h-11 rounded-md px-8",
                            icon: "h-10 w-10"
                        }
                    },
                    defaultVariants: {
                        variant: "default",
                        size: "default"
                    }
                }),
                p = r.forwardRef((e, t) => {
                    let {
                        className: s,
                        variant: r,
                        size: l,
                        asChild: i = !1,
                        ...n
                    } = e, c = i ? o.DX : "button";
                    return (0, a.jsx)(c, {
                        className: d()(x({
                            variant: r,
                            size: l,
                            className: s
                        })),
                        ref: t,
                        ...n
                    })
                });
            p.displayName = "Button";
            let u = r.createContext(null);

            function h() {
                let e = r.useContext(u);
                if (!e) throw Error("useCarousel must be used within a <Carousel />");
                return e
            }
            let m = r.forwardRef((e, t) => {
                let {
                    orientation: s = "horizontal",
                    opts: i,
                    setApi: n,
                    plugins: c,
                    pagination: o,
                    className: x,
                    children: p,
                    ...h
                } = e, [m, f] = (0, l.A)({ ...i,
                    axis: "horizontal" === s ? "x" : "y"
                }, c), [v, g] = r.useState(!1), [j, b] = r.useState(!1), _ = r.useCallback(e => {
                    e && (g(e.canScrollPrev()), b(e.canScrollNext()))
                }, []), y = r.useCallback(() => {
                    null == f || f.scrollPrev()
                }, [f]), N = r.useCallback(() => {
                    null == f || f.scrollNext()
                }, [f]), w = r.useCallback(e => {
                    "ArrowLeft" === e.key ? (e.preventDefault(), y()) : "ArrowRight" === e.key && (e.preventDefault(), N())
                }, [y, N]);
                return r.useEffect(() => {
                    f && n && n(f)
                }, [f, n]), r.useEffect(() => {
                    if (f) return _(f), f.on("reInit", _), f.on("select", _), () => {
                        null == f || f.off("select", _)
                    }
                }, [f, _]), f && void 0 !== o && f.scrollTo(o, !0), (0, a.jsx)(u.Provider, {
                    value: {
                        carouselRef: m,
                        api: f,
                        opts: i,
                        pagination: o,
                        orientation: s || ((null == i ? void 0 : i.axis) === "y" ? "vertical" : "horizontal"),
                        scrollPrev: y,
                        scrollNext: N,
                        canScrollPrev: v,
                        canScrollNext: j
                    },
                    children: (0, a.jsx)("div", {
                        ref: t,
                        onKeyDownCapture: w,
                        className: d()("relative", x),
                        role: "region",
                        "aria-roledescription": "carousel",
                        ...h,
                        children: p
                    })
                })
            });
            m.displayName = "Carousel";
            let f = r.forwardRef((e, t) => {
                let {
                    className: s,
                    ...r
                } = e, {
                    carouselRef: l,
                    orientation: i
                } = h();
                return (0, a.jsx)("div", {
                    ref: l,
                    className: "overflow-hidden",
                    children: (0, a.jsx)("div", {
                        ref: t,
                        className: d()("flex", "horizontal" === i ? "-ml-4" : "-mt-4 flex-col", s),
                        ...r
                    })
                })
            });
            f.displayName = "CarouselContent";
            let v = r.forwardRef((e, t) => {
                let {
                    className: s,
                    ...r
                } = e, {
                    orientation: l
                } = h();
                return (0, a.jsx)("div", {
                    ref: t,
                    role: "group",
                    "aria-roledescription": "slide",
                    className: d()("min-w-0 shrink-0 grow-0 basis-full", "horizontal" === l ? "pl-7" : "pt-0", s),
                    ...r
                })
            });
            v.displayName = "CarouselItem", r.forwardRef((e, t) => {
                let {
                    className: s,
                    variant: r = "outline",
                    size: l = "icon",
                    ...n
                } = e, {
                    orientation: c,
                    scrollPrev: o,
                    canScrollPrev: x
                } = h();
                return (0, a.jsxs)(p, {
                    ref: t,
                    variant: r,
                    size: l,
                    className: d()("absolute  h-8 w-8 rounded-full", "horizontal" === c ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90", s),
                    disabled: !x,
                    onClick: o,
                    ...n,
                    children: [(0, a.jsx)(i.A, {
                        className: "h-4 w-4"
                    }), (0, a.jsx)("span", {
                        className: "sr-only",
                        children: "Previous slide"
                    })]
                })
            }).displayName = "CarouselPrevious", r.forwardRef((e, t) => {
                let {
                    className: s,
                    variant: r = "outline",
                    size: l = "icon",
                    ...i
                } = e, {
                    orientation: c,
                    scrollNext: o,
                    canScrollNext: x
                } = h();
                return (0, a.jsxs)(p, {
                    ref: t,
                    variant: r,
                    size: l,
                    className: d()("absolute h-8 w-8 rounded-full", "horizontal" === c ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90", s),
                    disabled: !x,
                    onClick: o,
                    ...i,
                    children: [(0, a.jsx)(n.A, {
                        className: "h-4 w-4"
                    }), (0, a.jsx)("span", {
                        className: "sr-only",
                        children: "Next slide"
                    })]
                })
            }).displayName = "CarouselNext"
        },
        79399: (e, t, s) => {
            "use strict";
            var a = s(72948);

            function r() {}

            function l() {}
            l.resetWarningCache = r, e.exports = function() {
                function e(e, t, s, r, l, i) {
                    if (i !== a) {
                        var n = Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                        throw n.name = "Invariant Violation", n
                    }
                }

                function t() {
                    return e
                }
                e.isRequired = e;
                var s = {
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
                    checkPropTypes: l,
                    resetWarningCache: r
                };
                return s.PropTypes = s, s
            }
        },
        81260: (e, t, s) => {
            "use strict";
            s.d(t, {
                A: () => a
            });
            let a = {
                src: "/_next/static/media/exchange_arbitrage.313d5537.svg",
                height: 40,
                width: 40,
                blurWidth: 0,
                blurHeight: 0
            }
        },
        85015: (e, t, s) => {
            Promise.resolve().then(s.bind(s, 46096)), Promise.resolve().then(s.bind(s, 73817))
        },
        89397: (e, t, s) => {
            "use strict";
            s.d(t, {
                A: () => l
            });
            var a = s(94052),
                r = s(34953);
            let l = function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 6,
                    {
                        data: t,
                        isLoading: s
                    } = (0, r.Ay)("/api/bots?count=".concat(e), a.A, {
                        revalidateOnFocus: !1,
                        revalidateOnReconnect: !1
                    });
                return {
                    data: t,
                    isLoading: s
                }
            }
        },
        91429: (e, t, s) => {
            "use strict";
            s.d(t, {
                A: () => n
            });
            var a = s(94052),
                r = s(36612),
                l = s(12115),
                i = s(34953);
            let n = function() {
                let {
                    startLoading: e,
                    stopLoading: t
                } = (0, r.G)(), s = (0, l.useRef)(!0), {
                    data: n,
                    isLoading: c
                } = (0, i.Ay)("/api/stats", a.A, {
                    revalidateOnFocus: !1,
                    revalidateOnReconnect: !1,
                    onSuccess: () => {
                        s.current && (t(), s.current = !1)
                    },
                    onError: () => {
                        s.current && (t(), s.current = !1)
                    }
                });
                return (0, l.useEffect)(() => {
                    c && s.current && e()
                }, [c]), n
            }
        },
        96323: (e, t, s) => {
            "use strict";
            s.d(t, {
                A: () => a
            });
            let a = {
                src: "/_next/static/media/candle1.915cc502.svg",
                height: 43,
                width: 43,
                blurWidth: 0,
                blurHeight: 0
            }
        }
    },
    e => {
        var t = t => e(e.s = t);
        e.O(0, [2347, 9149, 6599, 6453, 3063, 6874, 4953, 1755, 5694, 7477, 4277, 8676, 1051, 5776, 5313, 2023, 230, 1486, 9645, 247, 7369, 8441, 1684, 7358], () => t(85015)), _N_E = e.O()
    }
]);