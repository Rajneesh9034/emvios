(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2656], {
        4638: (e, t, a) => {
            "use strict";
            a.d(t, {
                Wu: () => c,
                Zp: () => n
            });
            var s = a(95155),
                l = a(12115),
                r = a(29300),
                i = a.n(r);
            let n = l.forwardRef((e, t) => {
                let {
                    className: a,
                    ...l
                } = e;
                return (0, s.jsx)("div", {
                    ref: t,
                    className: i()("", a),
                    ...l
                })
            });
            n.displayName = "Card", l.forwardRef((e, t) => {
                let {
                    className: a,
                    ...l
                } = e;
                return (0, s.jsx)("div", {
                    ref: t,
                    className: i()("flex flex-col space-y-1.5 p-6", a),
                    ...l
                })
            }).displayName = "CardHeader", l.forwardRef((e, t) => {
                let {
                    className: a,
                    ...l
                } = e;
                return (0, s.jsx)("h3", {
                    ref: t,
                    className: i()("text-2xl font-semibold leading-none tracking-tight", a),
                    ...l
                })
            }).displayName = "CardTitle", l.forwardRef((e, t) => {
                let {
                    className: a,
                    ...l
                } = e;
                return (0, s.jsx)("p", {
                    ref: t,
                    className: i()("text-sm text-muted-foreground", a),
                    ...l
                })
            }).displayName = "CardDescription";
            let c = l.forwardRef((e, t) => {
                let {
                    className: a,
                    ...l
                } = e;
                return (0, s.jsx)("div", {
                    ref: t,
                    className: i()("pl-6 pr-6", a),
                    ...l
                })
            });
            c.displayName = "CardContent", l.forwardRef((e, t) => {
                let {
                    className: a,
                    ...l
                } = e;
                return (0, s.jsx)("div", {
                    ref: t,
                    className: i()("flex items-center p-6 pt-0", a),
                    ...l
                })
            }).displayName = "CardFooter"
        },
        9884: (e, t, a) => {
            "use strict";
            a.d(t, {
                A: () => n
            });
            var s = a(94052),
                l = a(34953),
                r = a(12115),
                i = a(36612);
            let n = function() {
                let {
                    startLoading: e,
                    stopLoading: t
                } = (0, i.G)(), a = (0, r.useRef)(!1), {
                    data: n,
                    isLoading: c
                } = (0, l.Ay)("/api/statistics", s.A, {
                    revalidateOnFocus: !1,
                    revalidateOnReconnect: !1,
                    onSuccess: () => {
                        a.current || (t(), a.current = !0)
                    },
                    onError: () => {
                        a.current || (t(), a.current = !0)
                    }
                });
                return (0, r.useEffect)(() => {
                    c && !a.current && e()
                }, [c]), n
            }
        },
        10255: (e, t, a) => {
            "use strict";

            function s(e) {
                let {
                    moduleIds: t
                } = e;
                return null
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "PreloadChunks", {
                enumerable: !0,
                get: function() {
                    return s
                }
            }), a(95155), a(47650), a(85744), a(20589)
        },
        10458: (e, t, a) => {
            "use strict";
            a.d(t, {
                f: () => l,
                k: () => s
            });
            let s = [{
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
                l = 0x68d62be0
        },
        15739: (e, t, a) => {
            "use strict";
            a.d(t, {
                A: () => n
            });
            var s = a(94052),
                l = a(36612),
                r = a(12115),
                i = a(34953);
            let n = function() {
                let {
                    startLoading: e,
                    stopLoading: t
                } = (0, l.G)(), a = (0, r.useRef)(!0), {
                    data: n,
                    isLoading: c
                } = (0, i.Ay)("/api/wallets", s.A, {
                    revalidateOnMount: !0,
                    onSuccess: () => {
                        a.current && (t(), a.current = !1)
                    },
                    onError: () => {
                        a.current && (t(), a.current = !1)
                    }
                });
                return (0, r.useEffect)(() => {
                    c && a.current && e()
                }, [c]), n
            }
        },
        15992: e => {
            e.exports = {
                span: "all_tooltip_span__PapjN",
                frame: "all_tooltip_frame__yo5US",
                arrow: "all_tooltip_arrow__uIQug",
                box: "all_tooltip_box__WoFo2",
                orange: "all_tooltip_orange___yANu",
                green: "all_tooltip_green__ytwsk",
                yellow: "all_tooltip_yellow__KQiBQ"
            }
        },
        17828: (e, t, a) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "workAsyncStorageInstance", {
                enumerable: !0,
                get: function() {
                    return s
                }
            });
            let s = (0, a(64054).createAsyncLocalStorage)()
        },
        22259: e => {
            e.exports = {
                inner: "dashboard_inner__GbCWO",
                main: "dashboard_main__hlNbm",
                progress: "dashboard_progress__UnksC",
                counters: "dashboard_counters__JboL2",
                add: "dashboard_add__acGfA",
                counter: "dashboard_counter__HAxjg",
                icon: "dashboard_icon__ZHZI9",
                sidebar: "dashboard_sidebar__0_JqG",
                number: "dashboard_number__c1fVd",
                pagination: "dashboard_pagination__UhIcB",
                active: "dashboard_active__cOUne",
                image: "dashboard_image__YQhHr",
                tab: "dashboard_tab__PKBJD",
                chart: "dashboard_chart__BrgrP",
                buttons: "dashboard_buttons__DOCaf",
                list: "dashboard_list__NQSnu",
                card_item: "dashboard_card_item__4dVf2",
                buttons_list: "dashboard_buttons_list__k_eR8",
                statistics: "dashboard_statistics__p2OzV",
                progress_activities: "dashboard_progress_activities__4yg1P",
                available: "dashboard_available__4fbXB",
                new_plan: "dashboard_new_plan__d14W1",
                trading: "dashboard_trading__pTe5o",
                get_bonus: "dashboard_get_bonus___FxpK",
                help: "dashboard_help__Pfe41",
                start: "dashboard_start__idFtL",
                p: "dashboard_p__shcs5",
                accordion: "dashboard_accordion__zeeVh",
                accordion_content: "dashboard_accordion_content__pmYEl",
                accordion_header: "dashboard_accordion_header__qikf_",
                accordion_inner: "dashboard_accordion_inner__feSLi",
                accordion_toggle: "dashboard_accordion_toggle__X5tGY",
                accordion_item: "dashboard_accordion_item__8yo5c",
                item_title: "dashboard_item_title__nOco0",
                item_text: "dashboard_item_text__16ZmS",
                trigger: "dashboard_trigger___bSYp",
                content: "dashboard_content__u6GDb",
                button_border: "dashboard_button_border__vIHXf",
                button_borders: "dashboard_button_borders__vhDtX",
                tablerow: "dashboard_tablerow__lbS4J",
                button_blue: "dashboard_button_blue__oCl2C",
                list_top: "dashboard_list_top__IZ3ta",
                list_bottom: "dashboard_list_bottom__Lrlf6",
                arrow: "dashboard_arrow__LywnV",
                cards: "dashboard_cards__oLL_T",
                card: "dashboard_card__BgOCf"
            }
        },
        27232: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => s
            });
            let s = {
                src: "/_next/static/media/arrow.62791f30.svg",
                height: 8,
                width: 12,
                blurWidth: 0,
                blurHeight: 0
            }
        },
        32860: e => {
            e.exports = {
                body: "underline-button_body__JNXIx",
                text: "underline-button_text__mcUAC",
                circle: "underline-button_circle__hshhT"
            }
        },
        34160: (e, t, a) => {
            "use strict";

            function s(e) {
                return e ? Math.abs(e) > 999999 ? "".concat(Math.sign(e) * parseFloat((Math.abs(e) / 1e6).toFixed(1)), " m") : Math.abs(e) > 999 ? "".concat(Math.sign(e) * parseFloat((Math.abs(e) / 1e3).toFixed(1)), " k") : "".concat(Math.sign(e) * parseFloat(Math.abs(e).toFixed(0))) : "0"
            }
            a.d(t, {
                A: () => s
            })
        },
        36645: (e, t, a) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return l
                }
            });
            let s = a(88229)._(a(67357));

            function l(e, t) {
                var a;
                let l = {};
                "function" == typeof e && (l.loader = e);
                let r = { ...l,
                    ...t
                };
                return (0, s.default)({ ...r,
                    modules: null == (a = r.loadableGenerated) ? void 0 : a.modules
                })
            }("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        38490: e => {
            e.exports = {
                rectangle: "diagram_auth_rectangle__tSgrv",
                active: "diagram_auth_active__GcDbS",
                chart_content: "diagram_auth_chart_content__3EJ49",
                main: "diagram_auth_main__bN9lp",
                buttons: "diagram_auth_buttons___cE2t",
                list_wrapper: "diagram_auth_list_wrapper__lZy6m",
                list: "diagram_auth_list__4eFxL",
                company: "diagram_auth_company__m1XMs",
                button: "diagram_auth_button__2hbFw",
                text: "diagram_auth_text__EIXRd",
                chart_container: "diagram_auth_chart_container__Rsl9U",
                statistics: "diagram_auth_statistics__8JXhL",
                stats: "diagram_auth_stats__ulx7W"
            }
        },
        48132: (e, t, a) => {
            Promise.resolve().then(a.bind(a, 46096)), Promise.resolve().then(a.bind(a, 61218))
        },
        48569: (e, t, a) => {
            "use strict";
            a.d(t, {
                z: () => c
            });
            var s = a(95155),
                l = a(32860),
                r = a.n(l),
                i = a(66766),
                n = a(27232);
            let c = e => {
                let {
                    text: t,
                    bgColor: a,
                    bgHover: l
                } = e;
                return (0, s.jsxs)("button", {
                    className: r().body,
                    children: [(0, s.jsx)("div", {
                        className: r().circle,
                        style: {
                            "--bg-color": a
                        },
                        children: (0, s.jsx)(i.default, {
                            src: n.default,
                            alt: "icon",
                            className: r().image
                        })
                    }), (0, s.jsx)("p", {
                        className: r().text,
                        style: {
                            "--bg-hover": l
                        },
                        children: t
                    })]
                })
            }
        },
        53507: (e, t, a) => {
            "use strict";
            a.d(t, {
                A: () => s
            });
            let s = {
                src: "/_next/static/media/withdrawn.e239ce07.svg",
                height: 25,
                width: 24,
                blurWidth: 0,
                blurHeight: 0
            }
        },
        55028: (e, t, a) => {
            "use strict";
            a.d(t, {
                default: () => l.a
            });
            var s = a(36645),
                l = a.n(s)
        },
        61218: (e, t, a) => {
            "use strict";
            a.d(t, {
                default: () => J
            });
            var s = a(95155),
                l = a(55028),
                r = a(22259),
                i = a.n(r),
                n = a(29300),
                c = a.n(n),
                d = a(4638),
                o = a(12115),
                x = a(38490),
                u = a.n(x),
                p = a(66766),
                h = a(67707),
                m = a(53507);
            let f = {
                src: "/_next/static/media/balance.4798a9c9.svg",
                height: 25,
                width: 24,
                blurWidth: 0,
                blurHeight: 0
            };
            var _ = a(90042),
                b = a(92338),
                g = a(9884),
                j = a(94052),
                v = a(34953);
            let N = function(e) {
                    let {
                        data: t,
                        isLoading: a,
                        error: s
                    } = (0, v.Ay)("/api/balance/".concat(e), j.A, {
                        revalidateOnFocus: !1,
                        revalidateOnReconnect: !1
                    });
                    return {
                        data: t,
                        isLoading: a,
                        error: s
                    }
                },
                w = (0, l.default)(() => Promise.all([a.e(7776), a.e(8699)]).then(a.bind(a, 78699)), {
                    loadableGenerated: {
                        webpack: () => [78699]
                    },
                    ssr: !1
                }),
                y = e => {
                    let {
                        options: t,
                        series: a,
                        height: l = 170,
                        width: r = "100%",
                        type: i = "line"
                    } = e;
                    return (0, s.jsx)(w, {
                        options: t,
                        series: a,
                        type: i,
                        height: l,
                        width: r
                    })
                };
            var C = a(17652);
            let k = ["week", "month", "all"],
                A = e => {
                    let {
                        wallets: t
                    } = e, a = (0, C.c3)("Dashboard"), l = (0, g.A)(), [r, i] = (0, o.useState)(k[0]), {
                        data: n,
                        isLoading: x
                    } = N(r), j = x || !n || n.length < 2 ? [2, 3, 1, 7, 8, 9] : (null == n ? void 0 : n.map(e => Number(e.sum))) || [], v = x ? [] : (null == n ? void 0 : n.map(e => e.date)) || [], w = {
                        week: a("week"),
                        month: a("month"),
                        all: a("all_time")
                    }, A = () => {
                        let e = 0,
                            a = 0,
                            s = 0,
                            r = 0,
                            i = 0,
                            n = 0;
                        try {
                            t && l && (l.forEach(l => {
                                let n = t[t.findIndex(e => e.abr === l.paysys)].price || 1;
                                e += l.withdrawals * n, a += l.replenishments * n, s += l.bonus * n, r += l.accural * n, i += l.deposits * n
                            }), n = t.reduce((e, t) => e + t.usdt_sum, 0))
                        } catch (e) {}
                        return 0 === e && 0 === a && 0 === s && 0 === r && 0 === i ? {
                            withdrawals: 0,
                            replenishments: 0,
                            bonuses: 0,
                            profits: 0,
                            invests: 0,
                            availableBalance: n.toFixed(0) || 0
                        } : {
                            withdrawals: e.toFixed(0) || 0,
                            replenishments: a.toFixed(0) || 0,
                            bonuses: s.toFixed(0) || 0,
                            profits: r.toFixed(0) || 0,
                            invests: i.toFixed(0) || 0,
                            availableBalance: n.toFixed(0) || 0
                        }
                    }, {
                        replenishments: F,
                        withdrawals: S,
                        bonuses: T,
                        profits: L,
                        invests: M,
                        availableBalance: P
                    } = (0, o.useMemo)(() => A(), [t, l]);
                    return t && l ? (0, s.jsxs)("div", {
                        className: "flex gap-[24px] flex-col md:flex-row",
                        children: [(0, s.jsxs)("div", {
                            className: "flex flex-col gap-[24px] flex-1 relative",
                            children: [(0, s.jsx)("p", {
                                className: "text-[14px] font-[400] uppercase text-[#828282]",
                                children: a("balance_graph")
                            }), (0, s.jsxs)("div", {
                                className: c()(u().main),
                                children: [(0, s.jsxs)("div", {
                                    className: "flex justify-between",
                                    children: [(0, s.jsx)("div", {
                                        className: "flex flex-col gap-[16px]",
                                        children: (0, s.jsxs)("p", {
                                            className: "text-[32px] font-[400]",
                                            children: ["$ ", function(e) {
                                                var t;
                                                return null == (t = Number(e).toFixed(0).split("").reverse().join("").match(/\d{0,3}/g)) ? void 0 : t.join(" ").split("").reverse().join("").trim()
                                            }(P.toString())]
                                        })
                                    }), (0, s.jsx)(b.r, {
                                        text: a("balance_chart_tooltip"),
                                        exclamatory: !0
                                    })]
                                }), (0, s.jsx)("div", {
                                    className: "bg-[#ECECEC] h-[1px] w-full"
                                }), (0, s.jsx)("div", {
                                    className: u().buttons,
                                    children: k.map((e, t) => (0, s.jsx)("button", {
                                        onClick: () => !n || n.length < 2 ? null : i(e),
                                        className: c()(u().button, {
                                            [u().active]: e === r
                                        }),
                                        children: w[e]
                                    }, t))
                                }), (0, s.jsx)(d.Zp, {
                                    children: (0, s.jsxs)(d.Wu, {
                                        className: u().chart_content,
                                        children: [!n || n.length < 2 && (0, s.jsxs)("p", {
                                            className: u().text,
                                            children: [" ", a("here_will_be_your_statistics"), " "]
                                        }), (0, s.jsxs)("div", {
                                            className: u().chart_container,
                                            style: {
                                                filter: "blur(".concat(n && n.length < 2 ? "4px" : "0px", ")"),
                                                pointerEvents: n && n.length < 2 ? "none" : "auto"
                                            },
                                            children: [" ", (0, s.jsx)(y, {
                                                height: 230,
                                                options: {
                                                    tooltip: {
                                                        marker: {
                                                            show: !1
                                                        },
                                                        cssClass: "custom-tooltip",
                                                        y: {
                                                            formatter: function(e, t) {
                                                                let {
                                                                    series: a,
                                                                    seriesIndex: s,
                                                                    dataPointIndex: l,
                                                                    w: r
                                                                } = t;
                                                                return e + "$"
                                                            }
                                                        }
                                                    },
                                                    fill: {
                                                        type: "gradient",
                                                        gradient: {
                                                            shadeIntensity: 1,
                                                            opacityFrom: .7,
                                                            opacityTo: .9,
                                                            colorStops: [{
                                                                offset: 0,
                                                                color: "#01b091",
                                                                opacity: 1
                                                            }, {
                                                                offset: 100,
                                                                color: "#00b2c8",
                                                                opacity: 1
                                                            }]
                                                        }
                                                    },
                                                    chart: {
                                                        toolbar: {
                                                            show: !1
                                                        },
                                                        height: 300,
                                                        type: "line",
                                                        zoom: {
                                                            enabled: !1
                                                        }
                                                    },
                                                    dataLabels: {
                                                        enabled: !1
                                                    },
                                                    stroke: {
                                                        curve: "smooth"
                                                    },
                                                    grid: {
                                                        show: !1,
                                                        row: {
                                                            colors: void 0,
                                                            opacity: .5
                                                        },
                                                        column: {
                                                            colors: void 0,
                                                            opacity: .5
                                                        }
                                                    },
                                                    xaxis: {
                                                        axisBorder: {
                                                            show: !1
                                                        },
                                                        axisTicks: {
                                                            show: !1
                                                        },
                                                        categories: v,
                                                        labels: {
                                                            show: "week" == r
                                                        }
                                                    }
                                                },
                                                series: [{
                                                    name: "Balance",
                                                    data: j
                                                }]
                                            })]
                                        })]
                                    })
                                })]
                            })]
                        }), (0, s.jsxs)("div", {
                            className: u().statistics,
                            children: [(0, s.jsx)("p", {
                                className: "text-[14px] font-[400]  uppercase text-[#828282]",
                                children: a("statistics")
                            }), (0, s.jsxs)("div", {
                                className: u().stats,
                                children: [(0, s.jsxs)("div", {
                                    className: "flex  items-center     gap-[16px]",
                                    children: [(0, s.jsx)(p.default, {
                                        src: h.A,
                                        alt: "icon"
                                    }), (0, s.jsx)("p", {
                                        className: "  text-[14px] font-[400]  uppercase text-[#828282]",
                                        children: a("invested")
                                    })]
                                }), (0, s.jsxs)("p", {
                                    className: "   font-[400]  ",
                                    children: ["$ ", M]
                                })]
                            }), (0, s.jsxs)("div", {
                                className: u().stats,
                                children: [(0, s.jsxs)("div", {
                                    className: "flex  items-center     gap-[8px]",
                                    children: [(0, s.jsx)(p.default, {
                                        src: m.A,
                                        alt: "icon"
                                    }), (0, s.jsx)("p", {
                                        className: "text-[14px] font-[400]  uppercase text-[#828282]",
                                        children: a("withdrawn")
                                    })]
                                }), (0, s.jsxs)("p", {
                                    className: "   font-[400]  ",
                                    children: ["$ ", S]
                                })]
                            }), (0, s.jsxs)("div", {
                                className: u().stats,
                                children: [(0, s.jsxs)("div", {
                                    className: "flex  items-center     gap-[8px]",
                                    children: [(0, s.jsx)(p.default, {
                                        src: f,
                                        alt: "icon"
                                    }), (0, s.jsx)("p", {
                                        className: "text-[14px] font-[400]  uppercase text-[#828282]",
                                        children: a("available_balance")
                                    })]
                                }), (0, s.jsxs)("p", {
                                    className: "   font-[400]  ",
                                    children: ["$ ", P]
                                })]
                            }), (0, s.jsxs)("div", {
                                className: u().stats,
                                children: [(0, s.jsxs)("div", {
                                    className: "flex  items-center     gap-[8px]",
                                    children: [(0, s.jsx)(p.default, {
                                        src: _.A,
                                        alt: "icon"
                                    }), (0, s.jsx)("p", {
                                        className: "text-[14px] font-[400]  uppercase text-[#828282]",
                                        children: a("earned")
                                    })]
                                }), (0, s.jsxs)("p", {
                                    className: "   font-[400]  ",
                                    children: ["$ ", L]
                                })]
                            })]
                        })]
                    }) : null
                };
            var F = a(73397),
                S = a(60388),
                T = a(36612),
                L = a(94794);

            function M(e) {
                let {
                    wallets: t
                } = e, a = t.filter(e => e.status), l = a.length;
                l < 3 && (a = [...a, ...t.filter(e => !e.status).slice(0, 3 - l)]);
                let r = (0, C.c3)("Dashboard"),
                    {
                        setCurrency: n
                    } = (0, T.G)();
                return (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsx)("div", {
                        className: "flex justify-between items-center gap-[32px]",
                        children: (0, s.jsx)("p", {
                            className: "  text-[14px] font-[400]  uppercase text-[#828282]",
                            children: r("wallets")
                        })
                    }), (0, s.jsx)("div", {
                        id: "tour-example",
                        className: "grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 ",
                        children: a.map(e => (0, s.jsx)("div", {
                            className: (0, F.cn)(i().counters, "bg-white p-1"),
                            children: (0, s.jsxs)("div", {
                                className: i().counter,
                                children: [(0, s.jsxs)("div", {
                                    className: "flex  items-center   gap-[16px] px-[16px] w-full bg-white",
                                    children: [(0, s.jsx)("div", {
                                        className: i().icon,
                                        children: (0, s.jsx)(p.default, {
                                            src: "/wallets/".concat(e.abr.toLowerCase(), ".png"),
                                            width: 45,
                                            height: 45,
                                            alt: "icon",
                                            priority: !0
                                        })
                                    }), (0, s.jsxs)("div", {
                                        className: "flex flex-col justify-center gap-[8px] w-full flex-1",
                                        children: [(0, s.jsx)("p", {
                                            className: "text-[14px] font-[400]",
                                            children: e.name
                                        }), (0, s.jsx)("p", {
                                            "data-content": "$ ".concat((0, L.A)(e.usdt_sum, 2)),
                                            className: (0, F.cn)(i().p),
                                            children: (0, s.jsxs)("a", {
                                                className: "text-[13px] font-[400]",
                                                children: [e.abr, " ", "USDT" === e.abr || "USDC" === e.abr ? (0, L.A)(e.sum, 2) : (0, L.A)(e.sum, 8)]
                                            })
                                        })]
                                    })]
                                }), (0, s.jsxs)("div", {
                                    className: "flex flex-col h-full",
                                    children: [(0, s.jsx)(S.N_, {
                                        onClick: () => n(e.abr),
                                        href: "/wallets/replenishment",
                                        className: "border-l-[1px]  border-b-[1px] border-solid border-[#d9d9d9] h-[50%] aspect-[1/1] flex items-center justify-center cursor-pointer ",
                                        children: (0, s.jsx)("p", {
                                            className: "text-[20px] transition",
                                            children: "+"
                                        })
                                    }), (0, s.jsx)(S.N_, {
                                        onClick: () => n(e.abr),
                                        href: "/wallets/withdrawal",
                                        className: "border-l-[1px] border-solid border-[#d9d9d9] h-[50%] aspect-[1/1] flex items-center justify-center cursor-pointer",
                                        children: (0, s.jsx)("p", {
                                            className: "text-[20px] transition",
                                            children: "-"
                                        })
                                    })]
                                })]
                            })
                        }, e.abr))
                    })]
                })
            }
            let P = {
                    src: "/_next/static/media/automatic_trading.e849972f.svg",
                    height: 86,
                    width: 92,
                    blurWidth: 0,
                    blurHeight: 0
                },
                O = {
                    src: "/_next/static/media/copy_trading_auth.61ffe05a.svg",
                    height: 91,
                    width: 90,
                    blurWidth: 0,
                    blurHeight: 0
                };
            var E = a(48569);
            let D = {
                "--bg-hover": "linear-gradient(282.54deg, #9075DF 2%, #5F43B2 100%)"
            };

            function R() {
                let e = (0, C.c3)("Dashboard");
                return (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsxs)("p", {
                        className: "text-[14px] font-[400]  uppercase text-[#828282]",
                        children: [" ", e("investment_activation"), " "]
                    }), (0, s.jsxs)("div", {
                        className: "flex justify-between flex-wrap gap-[24px]",
                        children: [(0, s.jsxs)("div", {
                            className: i().trading,
                            children: [(0, s.jsxs)("div", {
                                className: "flex flex-col justify-center    gap-[20px] flex-1",
                                children: [(0, s.jsx)("p", {
                                    className: "  text-[20px]  ",
                                    children: e("automatic_trading")
                                }), (0, s.jsx)("p", {
                                    className: "   max-w-[265px] text-[16px] font-[300] ",
                                    children: e("short_term_strategies_with_fixed_or_flexible_returns")
                                }), (0, s.jsx)(S.N_, {
                                    href: "/investments/automatictrading/dynamic",
                                    className: "text-[16px]",
                                    children: (0, s.jsx)(E.z, {
                                        text: e("choose")
                                    })
                                })]
                            }), (0, s.jsx)("div", {
                                children: (0, s.jsx)(p.default, {
                                    src: P,
                                    width: 83,
                                    height: 78,
                                    alt: "icon"
                                })
                            })]
                        }), (0, s.jsxs)("div", {
                            className: i().trading,
                            style: D,
                            children: [(0, s.jsxs)("div", {
                                className: "flex flex-col justify-center    gap-[20px] flex-1",
                                children: [(0, s.jsx)("p", {
                                    className: "  text-[20px]  ",
                                    children: e("copy_trading")
                                }), (0, s.jsx)("p", {
                                    className: "   max-w-[265px] text-[16px] font-[300] ",
                                    children: e("long_term_strategies_with_flexible_and_highest_returns")
                                }), (0, s.jsx)("div", {
                                    className: "  w-[156px] h-[27px] ",
                                    children: (0, s.jsx)(S.N_, {
                                        href: "/investments/copytrading",
                                        className: "text-[16px]",
                                        children: (0, s.jsx)(E.z, {
                                            text: e("choose"),
                                            bgHover: "linear-gradient(282.54deg, #9075DF 2%, #5F43B2 100%)",
                                            bgColor: "#7A73D1"
                                        })
                                    })
                                })]
                            }), (0, s.jsx)("div", {
                                children: (0, s.jsx)(p.default, {
                                    src: O,
                                    width: 83,
                                    alt: "icon"
                                })
                            })]
                        })]
                    })]
                })
            }
            var H = a(57793),
                B = a(10458),
                Z = a(91429),
                G = a(34160);
            let W = (0, l.default)(() => Promise.all([a.e(9149), a.e(1486), a.e(7290)]).then(a.bind(a, 7290)), {
                loadableGenerated: {
                    webpack: () => [7290]
                }
            });

            function Y() {
                var e, t, a, l, r, n, d, x, u, p, h, m, f, _, b, g, j, v, N, w, y, k, A, F, S, T, L, M, P, O, E, D, R, Y, V, I, z, U, $, X;
                let J = (0, C.c3)("CopyTrading"),
                    Q = (0, C.c3)("Dashboard"),
                    K = [{
                        name: Q("automatic_trading")
                    }, {
                        name: Q("copy_trading")
                    }],
                    q = (0, Z.A)(),
                    ee = (Math.round(new Date().getTime() / 1e3) - B.f) / 86400,
                    [et, ea] = (0, o.useState)(K[0]);
                return (0, s.jsxs)("div", {
                    className: i().statistics,
                    children: [(0, s.jsx)("div", {
                        className: i().buttons,
                        children: (0, s.jsx)("div", {
                            className: "flex items-center justify-center  flex-shrink-0 relative gap-[16px]",
                            children: K.map((e, t) => (0, s.jsx)("p", {
                                onClick: () => ea(e),
                                className: c()(i().tab, {
                                    [i().active]: e.name === et.name
                                }),
                                children: e.name
                            }, t))
                        })
                    }), (0, s.jsxs)("div", {
                        className: i().card_item,
                        children: [(0, s.jsxs)("div", {
                            className: "flex flex-col justify-between items-center min-h-[250px] flex-shrink-0 w-[188px] relative gap-[24px]",
                            children: [(0, s.jsx)("p", {
                                className: " flex-shrink-0 text-[12px]   ",
                                children: Q("assets_allocation")
                            }), "Automatic Trading" === et.name ? (0, s.jsx)(W, {
                                chartData: [{
                                    browser: "static",
                                    visitors: (null == q || null == (e = q.count) ? void 0 : e.static) || 50,
                                    fill: "#00b2c8"
                                }, {
                                    browser: "dinamic",
                                    visitors: (null == q || null == (t = q.count) ? void 0 : t.dynamic) || 50,
                                    fill: "#b7f2f8"
                                }]
                            }) : (0, s.jsx)(W, {
                                chartData: [{
                                    browser: "CryptoYield 12",
                                    visitors: (null == q || null == (a = q.count) ? void 0 : a.cryptoYield12) || 50,
                                    fill: "#5F43B2"
                                }, {
                                    browser: "CryptoPro 24",
                                    visitors: (null == q || null == (l = q.count) ? void 0 : l.cryptoYield24) || 50,
                                    fill: "#EEE9FD"
                                }, {
                                    browser: "CryptoMax 36",
                                    visitors: (null == q || null == (r = q.count) ? void 0 : r.cryptoYield36) || 50,
                                    fill: "#A58DEE"
                                }]
                            }), "Automatic Trading" === et.name ? (0, s.jsxs)("div", {
                                className: "flex flex-col justify-center items-center self-stretch  flex-shrink-0",
                                children: [(0, s.jsxs)("div", {
                                    className: "flex  items-center  flex-shrink-0 relative gap-[24px]",
                                    children: [(0, s.jsx)("div", {
                                        className: " flex-shrink-0 w-[20px] h-[8px] bg-[#00b2c8]"
                                    }), (0, s.jsx)("p", {
                                        className: " flex-shrink-0 text-[12px]   text-black",
                                        children: Q("static_strategy")
                                    })]
                                }), (0, s.jsxs)("div", {
                                    className: "flex  items-center  flex-shrink-0 relative gap-[24px]",
                                    children: [(0, s.jsx)("div", {
                                        className: " flex-shrink-0 w-[20px] h-[8px] bg-[#b7f2f8]"
                                    }), (0, s.jsx)("p", {
                                        className: " flex-shrink-0 text-[12px]   text-black",
                                        children: Q("dynamic_strategy")
                                    })]
                                })]
                            }) : (0, s.jsxs)("div", {
                                className: "flex flex-col justify-center items-center self-stretch  flex-shrink-0",
                                children: [(0, s.jsxs)("div", {
                                    className: "flex  items-center  flex-shrink-0 relative gap-[24px]",
                                    children: [(0, s.jsx)("div", {
                                        className: " flex-shrink-0 w-[20px] h-[8px] bg-[#5F43B2]"
                                    }), (0, s.jsx)("p", {
                                        className: " flex-shrink-0 text-[12px]   text-black",
                                        children: "CryptoYield 12"
                                    })]
                                }), (0, s.jsxs)("div", {
                                    className: "flex  items-center  flex-shrink-0 relative gap-[24px]",
                                    children: [(0, s.jsx)("div", {
                                        className: " flex-shrink-0 w-[20px] h-[8px] bg-[#EEE9FD]"
                                    }), (0, s.jsx)("p", {
                                        className: " flex-shrink-0 text-[12px]   text-black",
                                        children: "CryptoPro 24"
                                    })]
                                }), (0, s.jsxs)("div", {
                                    className: "flex  items-center  flex-shrink-0 relative gap-[24px]",
                                    children: [(0, s.jsx)("div", {
                                        className: " flex-shrink-0 w-[20px] h-[8px] bg-[#A58DEE]"
                                    }), (0, s.jsx)("p", {
                                        className: " flex-shrink-0 text-[12px]   text-black",
                                        children: "CryptoMax 36"
                                    })]
                                })]
                            })]
                        }), (0, s.jsxs)("div", {
                            className: "flex flex-col justify-between self-stretch gap-[40px]",
                            children: [(0, s.jsxs)("div", {
                                className: "flex flex-col px-[24px] relative gap-[8px] rounded-[6px]",
                                children: [(0, s.jsx)("p", {
                                    className: "text-[12px]   ",
                                    children: Q("invested")
                                }), "Automatic Trading" !== et.name ? (0, s.jsxs)("p", {
                                    className: "text-[16px]",
                                    children: ["$", (0, G.A)(null == q || null == (n = q.amount) ? void 0 : n.copyTrading)]
                                }) : (0, s.jsxs)("p", {
                                    className: "text-[16px]",
                                    children: ["$", (0, G.A)(null == q || null == (d = q.amount) ? void 0 : d.automaticTrading)]
                                })]
                            }), (0, s.jsxs)("div", {
                                className: "flex flex-col px-[24px] relative gap-[8px]",
                                children: [(0, s.jsx)("p", {
                                    className: "text-[12px]   ",
                                    children: Q("pool_load")
                                }), "Automatic Trading" === et.name ? (0, s.jsxs)("p", {
                                    className: "text-[16px]  ",
                                    children: [(null == q || null == (x = q.poolLoad) ? void 0 : x.automaticTrading) > 90 ? "90" : null == q || null == (p = q.poolLoad) || null == (u = p.automaticTrading) ? void 0 : u.toFixed(4), "%"]
                                }) : (0, s.jsxs)("p", {
                                    className: "text-[16px]  ",
                                    children: [(null == q || null == (h = q.poolLoad) ? void 0 : h.copyTrading) > 90 ? "90" : null == q || null == (f = q.poolLoad) || null == (m = f.copyTrading) ? void 0 : m.toFixed(4), "%"]
                                }), (0, s.jsx)("div", {
                                    className: c()(i().progress, "max-w-[100%] w-full"),
                                    children: "Automatic Trading" === et.name ? (0, s.jsx)(H.k, {
                                        value: (null == q || null == (_ = q.poolLoad) ? void 0 : _.automaticTrading) > 90 ? 90 : null == q || null == (g = q.poolLoad) || null == (b = g.automaticTrading) ? void 0 : b.toFixed(4)
                                    }) : (0, s.jsx)(H.k, {
                                        value: (null == q || null == (j = q.poolLoad) ? void 0 : j.copyTrading) > 90 ? 90 : null == q || null == (N = q.poolLoad) || null == (v = N.copyTrading) ? void 0 : v.toFixed(4)
                                    })
                                })]
                            }), (0, s.jsxs)("div", {
                                className: "flex flex-col px-[24px] relative gap-[8px] rounded-[6px]",
                                children: [(0, s.jsx)("p", {
                                    className: "text-[12px] ",
                                    children: Q("total_profit")
                                }), "Automatic Trading" === et.name ? (0, s.jsxs)("p", {
                                    className: "text-[16px]  ",
                                    children: [null == q || null == (y = q.totalProfit) || null == (w = y.automaticTrading) ? void 0 : w.toFixed(2), "%"]
                                }) : (0, s.jsxs)("p", {
                                    className: "text-[16px]  ",
                                    children: [null == q || null == (A = q.totalProfit) || null == (k = A.copyTrading) ? void 0 : k.toFixed(2), "%"]
                                })]
                            })]
                        }), (0, s.jsxs)("div", {
                            className: "flex flex-col justify-between  self-stretch  gap-[24px]",
                            children: [(0, s.jsx)("div", {
                                className: i().buttons_list,
                                children: (0, s.jsx)("div", {
                                    className: "flex items-center  flex-shrink-0 relative gap-[16px]",
                                    children: K.map((e, t) => (0, s.jsx)("p", {
                                        onClick: () => ea(e),
                                        className: c()(i().tab, {
                                            [i().active]: e.name === et.name
                                        }),
                                        children: e.name
                                    }, t))
                                })
                            }), (0, s.jsxs)("div", {
                                className: i().list,
                                children: [(0, s.jsxs)("div", {
                                    className: "flex flex-col",
                                    children: [(0, s.jsxs)("div", {
                                        className: "flex flex-col justify-center gap-[8px] px-[12px] py-[16px] ",
                                        children: ["Automatic Trading" === et.name ? (0, s.jsx)("p", {
                                            className: "  text-[12px] text-nowrap ",
                                            children: Q("strategies")
                                        }) : (0, s.jsx)("p", {
                                            className: "  text-[12px] text-nowrap ",
                                            children: J("bots")
                                        }), "Automatic Trading" === et.name ? (0, s.jsx)("p", {
                                            className: "font-[500] text-[16px] ",
                                            children: "6"
                                        }) : (0, s.jsx)("p", {
                                            className: "font-[500] text-[16px] ",
                                            children: "36"
                                        })]
                                    }), (0, s.jsxs)("div", {
                                        className: "flex flex-col justify-center gap-[8px] px-[12px] py-[16px]",
                                        children: [(0, s.jsx)("p", {
                                            className: "  text-[12px] text-nowrap ",
                                            children: Q("runtime")
                                        }), (0, s.jsxs)("p", {
                                            className: "font-[500] text-[16px] ",
                                            children: [ee <= 0 ? 0 : ee.toFixed(0), " ", Q("days")]
                                        })]
                                    })]
                                }), (0, s.jsxs)("div", {
                                    className: "flex flex-col",
                                    children: [(0, s.jsxs)("div", {
                                        className: "flex flex-col justify-center gap-[8px] px-[12px] py-[16px] ",
                                        children: [(0, s.jsx)("p", {
                                            className: "  text-[12px] text-nowrap ",
                                            children: Q("last_day_profit")
                                        }), "Automatic Trading" === et.name ? (0, s.jsxs)("p", {
                                            className: "font-[500] text-[16px] ",
                                            children: [null == q || null == (F = q.lastPercent) ? void 0 : F.automaticTrading, "%"]
                                        }) : (0, s.jsxs)("p", {
                                            className: "font-[500] text-[16px] ",
                                            children: [null == q || null == (S = q.lastPercent) ? void 0 : S.copyTrading, "%"]
                                        })]
                                    }), (0, s.jsxs)("div", {
                                        className: "flex flex-col justify-center gap-[8px] px-[12px] py-[16px]",
                                        children: [(0, s.jsx)("p", {
                                            className: "  text-[12px] text-nowrap ",
                                            children: Q("w_l_ratio")
                                        }), "Automatic Trading" === et.name ? (0, s.jsxs)("p", {
                                            className: "font-[500] text-[16px] ",
                                            children: [(0, G.A)(null == q || null == (L = q.ratio) || null == (T = L.w) ? void 0 : T.automaticTrading), " / ", (0, G.A)(null == q || null == (P = q.ratio) || null == (M = P.l) ? void 0 : M.automaticTrading)]
                                        }) : (0, s.jsxs)("p", {
                                            className: "font-[500] text-[16px] ",
                                            children: [(0, G.A)(null == q || null == (E = q.ratio) || null == (O = E.w) ? void 0 : O.copyTrading), " / ", (0, G.A)(null == q || null == (R = q.ratio) || null == (D = R.l) ? void 0 : D.copyTrading)]
                                        })]
                                    })]
                                }), (0, s.jsxs)("div", {
                                    className: "flex flex-col",
                                    children: [(0, s.jsxs)("div", {
                                        className: "flex flex-col justify-center gap-[8px] px-[12px] py-[16px] ",
                                        children: [(0, s.jsx)("p", {
                                            className: "  text-[12px] text-nowrap ",
                                            children: Q("total_trades")
                                        }), "Automatic Trading" === et.name ? (0, s.jsx)("p", {
                                            className: "font-[500] text-[16px] ",
                                            children: (0, G.A)(null == q || null == (Y = q.trades) ? void 0 : Y.automaticTrading)
                                        }) : (0, s.jsx)("p", {
                                            className: "font-[500] text-[16px] ",
                                            children: (0, G.A)(null == q || null == (V = q.trades) ? void 0 : V.copyTrading)
                                        })]
                                    }), (0, s.jsxs)("div", {
                                        className: "flex flex-col justify-center gap-[8px] px-[12px] py-[16px]",
                                        children: [(0, s.jsx)("p", {
                                            className: "  text-[12px] text-nowrap ",
                                            children: Q("total_users")
                                        }), "Automatic Trading" === et.name ? (0, s.jsx)("p", {
                                            className: "font-[500] text-[16px] ",
                                            children: (null == q || null == (I = q.count) ? void 0 : I.static) + (null == q || null == (z = q.count) ? void 0 : z.dynamic) || 0
                                        }) : (0, s.jsx)("p", {
                                            className: "font-[500] text-[16px] ",
                                            children: (null == q || null == (U = q.count) ? void 0 : U.cryptoYield12) + (null == q || null == ($ = q.count) ? void 0 : $.cryptoYield24) + (null == q || null == (X = q.count) ? void 0 : X.cryptoYield36) || 0
                                        })]
                                    })]
                                })]
                            })]
                        })]
                    })]
                })
            }
            var V = a(15739),
                I = a(235),
                z = a(23464),
                U = a(35695);
            let $ = (0, l.default)(() => Promise.all([a.e(3284), a.e(2169), a.e(305)]).then(a.bind(a, 30305)), {
                    loadableGenerated: {
                        webpack: () => [30305]
                    }
                }),
                X = (0, l.default)(() => a.e(5580).then(a.bind(a, 5580)), {
                    loadableGenerated: {
                        webpack: () => [5580]
                    }
                });

            function J() {
                let e = (0, U.useRouter)(),
                    t = (0, V.A)();
                return (0, o.useEffect)(() => {
                    e.prefetch("/affiliate"), e.prefetch("/profile"), e.prefetch("/statistics/all"), e.prefetch("/investments/automatictrading/dynamic"), e.prefetch("/investments/automatictrading/static"), e.prefetch("/investments/copytrading"), e.prefetch("/wallets/withdrawal"), e.prefetch("/wallets/replenishment"), e.prefetch("/wallets/withdrawal");
                    let t = setTimeout(() => {
                        z.A.get("/api/assets")
                    }, 1e3);
                    return () => {
                        clearTimeout(t)
                    }
                }, []), (0, s.jsxs)("div", {
                    className: c()(i().inner, "_container"),
                    children: [(0, s.jsxs)("div", {
                        className: i().main,
                        children: [t && 0 !== t.length && (0, s.jsxs)(s.Fragment, {
                            children: [(0, s.jsx)(M, {
                                wallets: t
                            }), (0, s.jsx)(A, {
                                wallets: t
                            })]
                        }), (0, s.jsx)(R, {}), (0, s.jsx)(I.default, {
                            dashboard: !0
                        }), (0, s.jsx)(Y, {}), (0, s.jsx)(X, {})]
                    }), (0, s.jsx)($, {})]
                })
            }
        },
        62146: (e, t, a) => {
            "use strict";

            function s(e) {
                let {
                    reason: t,
                    children: a
                } = e;
                return a
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "BailoutToCSR", {
                enumerable: !0,
                get: function() {
                    return s
                }
            }), a(45262)
        },
        64054: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), ! function(e, t) {
                for (var a in t) Object.defineProperty(e, a, {
                    enumerable: !0,
                    get: t[a]
                })
            }(t, {
                bindSnapshot: function() {
                    return i
                },
                createAsyncLocalStorage: function() {
                    return r
                },
                createSnapshot: function() {
                    return n
                }
            });
            let a = Object.defineProperty(Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available"), "__NEXT_ERROR_CODE", {
                value: "E504",
                enumerable: !1,
                configurable: !0
            });
            class s {
                disable() {
                    throw a
                }
                getStore() {}
                run() {
                    throw a
                }
                exit() {
                    throw a
                }
                enterWith() {
                    throw a
                }
                static bind(e) {
                    return e
                }
            }
            let l = "undefined" != typeof globalThis && globalThis.AsyncLocalStorage;

            function r() {
                return l ? new l : new s
            }

            function i(e) {
                return l ? l.bind(e) : s.bind(e)
            }

            function n() {
                return l ? l.snapshot() : function(e, ...t) {
                    return e(...t)
                }
            }
        },
        67357: (e, t, a) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return c
                }
            });
            let s = a(95155),
                l = a(12115),
                r = a(62146);

            function i(e) {
                return {
                    default: e && "default" in e ? e.default : e
                }
            }
            a(10255);
            let n = {
                    loader: () => Promise.resolve(i(() => null)),
                    loading: null,
                    ssr: !0
                },
                c = function(e) {
                    let t = { ...n,
                            ...e
                        },
                        a = (0, l.lazy)(() => t.loader().then(i)),
                        c = t.loading;

                    function d(e) {
                        let i = c ? (0, s.jsx)(c, {
                                isLoading: !0,
                                pastDelay: !0,
                                error: null
                            }) : null,
                            n = !t.ssr || !!t.loading,
                            d = n ? l.Suspense : l.Fragment,
                            o = t.ssr ? (0, s.jsxs)(s.Fragment, {
                                children: [null, (0, s.jsx)(a, { ...e
                                })]
                            }) : (0, s.jsx)(r.BailoutToCSR, {
                                reason: "next/dynamic",
                                children: (0, s.jsx)(a, { ...e
                                })
                            });
                        return (0, s.jsx)(d, { ...n ? {
                                fallback: i
                            } : {},
                            children: o
                        })
                    }
                    return d.displayName = "LoadableComponent", d
                }
        },
        67707: (e, t, a) => {
            "use strict";
            a.d(t, {
                A: () => s
            });
            let s = {
                src: "/_next/static/media/invested.d3a751a8.svg",
                height: 25,
                width: 24,
                blurWidth: 0,
                blurHeight: 0
            }
        },
        73397: (e, t, a) => {
            "use strict";
            a.d(t, {
                cn: () => r
            });
            var s = a(52596),
                l = a(39688);

            function r() {
                for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                return (0, l.QP)((0, s.$)(t))
            }
        },
        85744: (e, t, a) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "workAsyncStorage", {
                enumerable: !0,
                get: function() {
                    return s.workAsyncStorageInstance
                }
            });
            let s = a(17828)
        },
        91429: (e, t, a) => {
            "use strict";
            a.d(t, {
                A: () => n
            });
            var s = a(94052),
                l = a(36612),
                r = a(12115),
                i = a(34953);
            let n = function() {
                let {
                    startLoading: e,
                    stopLoading: t
                } = (0, l.G)(), a = (0, r.useRef)(!0), {
                    data: n,
                    isLoading: c
                } = (0, i.Ay)("/api/stats", s.A, {
                    revalidateOnFocus: !1,
                    revalidateOnReconnect: !1,
                    onSuccess: () => {
                        a.current && (t(), a.current = !1)
                    },
                    onError: () => {
                        a.current && (t(), a.current = !1)
                    }
                });
                return (0, r.useEffect)(() => {
                    c && a.current && e()
                }, [c]), n
            }
        },
        92338: (e, t, a) => {
            "use strict";
            a.d(t, {
                r: () => _
            });
            var s = a(95155),
                l = a(15992),
                r = a.n(l),
                i = a(29300),
                n = a.n(i);
            let c = {
                    src: "/_next/static/media/beak_bottom.5d2b8d4e.svg",
                    height: 9,
                    width: 16,
                    blurWidth: 0,
                    blurHeight: 0
                },
                d = {
                    src: "/_next/static/media/mark.72686f6e.svg",
                    height: 24,
                    width: 24,
                    blurWidth: 0,
                    blurHeight: 0
                };
            var o = a(12115),
                x = a(89613);
            let u = x.Kq,
                p = x.bL,
                h = x.l9,
                m = o.forwardRef((e, t) => {
                    let {
                        className: a,
                        sideOffset: l = 4,
                        ...r
                    } = e;
                    return (0, s.jsx)(x.UC, {
                        ref: t,
                        sideOffset: l,
                        className: n()("z-50 overflow-hidden  animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", a),
                        ...r
                    })
                });
            m.displayName = x.UC.displayName;
            var f = a(66766);
            let _ = e => {
                let {
                    type: t = "",
                    title: a = "",
                    text: l = "",
                    exclamatory: i = !1
                } = e;
                return (0, s.jsx)(u, {
                    children: (0, s.jsxs)(p, {
                        delayDuration: 0,
                        children: [(0, s.jsx)(h, {
                            asChild: !0,
                            children: i ? (0, s.jsx)("div", {
                                className: "cursor-pointer",
                                children: (0, s.jsx)(f.default, {
                                    src: d,
                                    width: 24,
                                    height: 24,
                                    alt: "icon"
                                })
                            }) : (0, s.jsx)("span", {
                                className: r().span,
                                children: "?"
                            })
                        }), (0, s.jsx)(m, {
                            asChild: !0,
                            align: "start",
                            alignOffset: -16,
                            children: "orange" === t ? (0, s.jsxs)("div", {
                                className: n()(r().box, r().orange),
                                children: [(0, s.jsx)("svg", {
                                    width: 40,
                                    height: 40,
                                    viewBox: "0 0 40 40",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    className: "  w-10 h-10 ",
                                    preserveAspectRatio: "xMidYMid meet",
                                    children: (0, s.jsxs)("g", {
                                        clipPath: "url(#clip0_402_4026)",
                                        children: [(0, s.jsx)("path", {
                                            d: "M35 2.5C35.663 2.5 36.2989 2.76339 36.7678 3.23223C37.2366 3.70107 37.5 4.33696 37.5 5V35C37.5 35.663 37.2366 36.2989 36.7678 36.7678C36.2989 37.2366 35.663 37.5 35 37.5H5C4.33696 37.5 3.70107 37.2366 3.23223 36.7678C2.76339 36.2989 2.5 35.663 2.5 35V5C2.5 4.33696 2.76339 3.70107 3.23223 3.23223C3.70107 2.76339 4.33696 2.5 5 2.5H35ZM5 0C3.67392 0 2.40215 0.526784 1.46447 1.46447C0.526784 2.40215 0 3.67392 0 5L0 35C0 36.3261 0.526784 37.5979 1.46447 38.5355C2.40215 39.4732 3.67392 40 5 40H35C36.3261 40 37.5979 39.4732 38.5355 38.5355C39.4732 37.5979 40 36.3261 40 35V5C40 3.67392 39.4732 2.40215 38.5355 1.46447C37.5979 0.526784 36.3261 0 35 0L5 0Z",
                                            fill: "#FF5F04"
                                        }), (0, s.jsx)("path", {
                                            d: "M17.505 27.5C17.505 27.1717 17.5697 26.8467 17.6953 26.5433C17.8209 26.24 18.0051 25.9644 18.2372 25.7323C18.4694 25.5001 18.745 25.316 19.0483 25.1903C19.3516 25.0647 19.6767 25 20.005 25C20.3333 25 20.6584 25.0647 20.9617 25.1903C21.265 25.316 21.5406 25.5001 21.7728 25.7323C22.0049 25.9644 22.1891 26.24 22.3147 26.5433C22.4403 26.8467 22.505 27.1717 22.505 27.5C22.505 28.1631 22.2416 28.799 21.7728 29.2678C21.3039 29.7367 20.668 30 20.005 30C19.342 30 18.7061 29.7367 18.2372 29.2678C17.7684 28.799 17.505 28.1631 17.505 27.5ZM17.75 12.4875C17.7167 12.1722 17.7501 11.8533 17.848 11.5516C17.9459 11.25 18.1061 10.9723 18.3183 10.7365C18.5305 10.5008 18.7898 10.3123 19.0795 10.1833C19.3692 10.0542 19.6829 9.98755 20 9.98755C20.3172 9.98755 20.6308 10.0542 20.9205 10.1833C21.2102 10.3123 21.4695 10.5008 21.6817 10.7365C21.8939 10.9723 22.0541 11.25 22.152 11.5516C22.2499 11.8533 22.2833 12.1722 22.25 12.4875L21.375 21.255C21.3456 21.5995 21.188 21.9203 20.9334 22.1541C20.6788 22.3879 20.3457 22.5177 20 22.5177C19.6543 22.5177 19.3212 22.3879 19.0666 22.1541C18.812 21.9203 18.6544 21.5995 18.625 21.255L17.75 12.4875Z",
                                            fill: "#FF5F04"
                                        })]
                                    })
                                }), (0, s.jsxs)("div", {
                                    className: "flex flex-col justify-center    ",
                                    children: [(0, s.jsx)("p", {
                                        className: "  text-[16px] text-start  ",
                                        children: a
                                    }), (0, s.jsx)("p", {
                                        className: "  text-[12px]  text-start ",
                                        children: l
                                    })]
                                })]
                            }) : "green" === t ? (0, s.jsxs)("div", {
                                className: n()(r().box, r().green),
                                children: [(0, s.jsx)("svg", {
                                    width: 40,
                                    height: 40,
                                    viewBox: "0 0 40 40",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    className: "  w-10 h-10 ",
                                    preserveAspectRatio: "xMidYMid meet",
                                    children: (0, s.jsxs)("g", {
                                        clipPath: "url(#clip0_402_4033)",
                                        children: [(0, s.jsx)("path", {
                                            d: "M35 2.5C35.663 2.5 36.2989 2.76339 36.7678 3.23223C37.2366 3.70107 37.5 4.33696 37.5 5V35C37.5 35.663 37.2366 36.2989 36.7678 36.7678C36.2989 37.2366 35.663 37.5 35 37.5H5C4.33696 37.5 3.70107 37.2366 3.23223 36.7678C2.76339 36.2989 2.5 35.663 2.5 35V5C2.5 4.33696 2.76339 3.70107 3.23223 3.23223C3.70107 2.76339 4.33696 2.5 5 2.5H35ZM5 0C3.67392 0 2.40215 0.526784 1.46447 1.46447C0.526784 2.40215 0 3.67392 0 5L0 35C0 36.3261 0.526784 37.5979 1.46447 38.5355C2.40215 39.4732 3.67392 40 5 40H35C36.3261 40 37.5979 39.4732 38.5355 38.5355C39.4732 37.5979 40 36.3261 40 35V5C40 3.67392 39.4732 2.40215 38.5355 1.46447C37.5979 0.526784 36.3261 0 35 0L5 0Z",
                                            fill: "#46C688"
                                        }), (0, s.jsx)("path", {
                                            d: "M27.425 12.425C27.7749 12.0781 28.2472 11.883 28.7399 11.8816C29.2325 11.8802 29.7059 12.0728 30.0577 12.4177C30.4094 12.7626 30.6114 13.2321 30.6198 13.7246C30.6282 14.2172 30.4424 14.6933 30.1025 15.05L20.1225 27.525C19.951 27.7097 19.744 27.858 19.5139 27.9609C19.2837 28.0638 19.0352 28.1192 18.7832 28.1239C18.5311 28.1286 18.2807 28.0824 18.0469 27.988C17.8131 27.8937 17.6008 27.7532 17.4225 27.575L10.81 20.96C10.6258 20.7883 10.4781 20.5813 10.3756 20.3513C10.2731 20.1213 10.218 19.873 10.2135 19.6213C10.2091 19.3695 10.2554 19.1194 10.3497 18.886C10.444 18.6525 10.5844 18.4404 10.7624 18.2624C10.9405 18.0843 11.1526 17.944 11.386 17.8497C11.6195 17.7554 11.8696 17.709 12.1213 17.7135C12.3731 17.7179 12.6214 17.773 12.8514 17.8755C13.0814 17.978 13.2884 18.1258 13.46 18.31L18.695 23.5425L27.3775 12.48L27.425 12.425Z",
                                            fill: "#46C688"
                                        })]
                                    })
                                }), (0, s.jsxs)("div", {
                                    className: "flex flex-col justify-center    ",
                                    children: [(0, s.jsx)("p", {
                                        className: "  text-[16px] text-start  ",
                                        children: a
                                    }), (0, s.jsx)("p", {
                                        className: "  text-[12px]  text-start ",
                                        children: l
                                    })]
                                })]
                            }) : "yellow" === t ? (0, s.jsxs)("div", {
                                className: n()(r().box, r().yellow),
                                children: [(0, s.jsx)("svg", {
                                    width: 40,
                                    height: 40,
                                    viewBox: "0 0 40 40",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    className: "  w-10 h-10 ",
                                    preserveAspectRatio: "xMidYMid meet",
                                    children: (0, s.jsxs)("g", {
                                        clipPath: "url(#clip0_402_4040)",
                                        children: [(0, s.jsx)("path", {
                                            d: "M35 2.5C35.663 2.5 36.2989 2.76339 36.7678 3.23223C37.2366 3.70107 37.5 4.33696 37.5 5V35C37.5 35.663 37.2366 36.2989 36.7678 36.7678C36.2989 37.2366 35.663 37.5 35 37.5H5C4.33696 37.5 3.70107 37.2366 3.23223 36.7678C2.76339 36.2989 2.5 35.663 2.5 35V5C2.5 4.33696 2.76339 3.70107 3.23223 3.23223C3.70107 2.76339 4.33696 2.5 5 2.5H35ZM5 0C3.67392 0 2.40215 0.526784 1.46447 1.46447C0.526784 2.40215 0 3.67392 0 5L0 35C0 36.3261 0.526784 37.5979 1.46447 38.5355C2.40215 39.4732 3.67392 40 5 40H35C36.3261 40 37.5979 39.4732 38.5355 38.5355C39.4732 37.5979 40 36.3261 40 35V5C40 3.67392 39.4732 2.40215 38.5355 1.46447C37.5979 0.526784 36.3261 0 35 0L5 0Z",
                                            fill: "#FFB800"
                                        }), (0, s.jsx)("path", {
                                            d: "M22.325 16.47L16.6 17.1875L16.395 18.1375L17.52 18.345C18.255 18.52 18.4 18.785 18.24 19.5175L16.395 28.1875C15.91 30.43 16.6575 31.485 18.415 31.485C19.7775 31.485 21.36 30.855 22.0775 29.99L22.2975 28.95C21.7975 29.39 21.0675 29.565 20.5825 29.565C19.895 29.565 19.645 29.0825 19.8225 28.2325L22.325 16.47ZM22.5 11.25C22.5 11.913 22.2366 12.5489 21.7678 13.0178C21.2989 13.4866 20.663 13.75 20 13.75C19.337 13.75 18.7011 13.4866 18.2322 13.0178C17.7634 12.5489 17.5 11.913 17.5 11.25C17.5 10.587 17.7634 9.95107 18.2322 9.48223C18.7011 9.01339 19.337 8.75 20 8.75C20.663 8.75 21.2989 9.01339 21.7678 9.48223C22.2366 9.95107 22.5 10.587 22.5 11.25Z",
                                            fill: "#FFB800"
                                        })]
                                    })
                                }), (0, s.jsxs)("div", {
                                    className: "flex flex-col justify-center    ",
                                    children: [(0, s.jsx)("p", {
                                        className: "  text-[16px] text-start  ",
                                        children: a
                                    }), (0, s.jsx)("p", {
                                        className: "  text-[12px]  text-start ",
                                        children: l
                                    })]
                                })]
                            }) : (0, s.jsxs)("div", {
                                children: [(0, s.jsx)("p", {
                                    className: r().frame,
                                    children: l
                                }), (0, s.jsx)("p", {
                                    className: r().arrow,
                                    children: (0, s.jsx)(f.default, {
                                        src: c,
                                        width: 16,
                                        height: 9,
                                        alt: ""
                                    })
                                })]
                            })
                        })]
                    })
                })
            }
        }
    },
    e => {
        var t = t => e(e.s = t);
        e.O(0, [4508, 6599, 9149, 3700, 6453, 3063, 6874, 4953, 1755, 5694, 7477, 4277, 8676, 1051, 5776, 3511, 5492, 3870, 3464, 9380, 235, 8441, 1684, 7358], () => t(48132)), _N_E = e.O()
    }
]);