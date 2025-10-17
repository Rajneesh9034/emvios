(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1806], {
        2492: (e, t, s) => {
            "use strict";
            s.d(t, {
                A: () => i
            });
            let i = {
                src: "/_next/static/media/statistics_aush.3b35cbc8.svg",
                height: 25,
                width: 24,
                blurWidth: 0,
                blurHeight: 0
            }
        },
        4061: (e, t, s) => {
            "use strict";
            s.d(t, {
                A: () => i
            });
            let i = {
                src: "/_next/static/media/wallets.00ebfa6e.svg",
                height: 25,
                width: 24,
                blurWidth: 0,
                blurHeight: 0
            }
        },
        7874: (e, t, s) => {
            "use strict";
            s.d(t, {
                A: () => i
            });
            let i = {
                src: "/_next/static/media/withdrawal.3aa2694c.svg",
                height: 24,
                width: 24,
                blurWidth: 0,
                blurHeight: 0
            }
        },
        9884: (e, t, s) => {
            "use strict";
            s.d(t, {
                A: () => n
            });
            var i = s(94052),
                a = s(34953),
                r = s(12115),
                c = s(36612);
            let n = function() {
                let {
                    startLoading: e,
                    stopLoading: t
                } = (0, c.G)(), s = (0, r.useRef)(!1), {
                    data: n,
                    isLoading: l
                } = (0, a.Ay)("/api/statistics", i.A, {
                    revalidateOnFocus: !1,
                    revalidateOnReconnect: !1,
                    onSuccess: () => {
                        s.current || (t(), s.current = !0)
                    },
                    onError: () => {
                        s.current || (t(), s.current = !0)
                    }
                });
                return (0, r.useEffect)(() => {
                    l && !s.current && e()
                }, [l]), n
            }
        },
        9898: (e, t, s) => {
            "use strict";
            s.d(t, {
                A: () => i
            });
            let i = {
                src: "/_next/static/media/affiliate.069e1aaf.svg",
                height: 25,
                width: 24,
                blurWidth: 0,
                blurHeight: 0
            }
        },
        15739: (e, t, s) => {
            "use strict";
            s.d(t, {
                A: () => n
            });
            var i = s(94052),
                a = s(36612),
                r = s(12115),
                c = s(34953);
            let n = function() {
                let {
                    startLoading: e,
                    stopLoading: t
                } = (0, a.G)(), s = (0, r.useRef)(!0), {
                    data: n,
                    isLoading: l
                } = (0, c.Ay)("/api/wallets", i.A, {
                    revalidateOnMount: !0,
                    onSuccess: () => {
                        s.current && (t(), s.current = !1)
                    },
                    onError: () => {
                        s.current && (t(), s.current = !1)
                    }
                });
                return (0, r.useEffect)(() => {
                    l && s.current && e()
                }, [l]), n
            }
        },
        22421: (e, t, s) => {
            "use strict";
            s.d(t, {
                A: () => i
            });
            let i = {
                src: "/_next/static/media/replenishment.54d6b95c.svg",
                height: 24,
                width: 24,
                blurWidth: 0,
                blurHeight: 0
            }
        },
        24444: (e, t, s) => {
            "use strict";
            s.r(t), s.d(t, {
                default: () => i
            });
            let i = {
                src: "/_next/static/media/trading.47071606.svg",
                height: 36,
                width: 35,
                blurWidth: 0,
                blurHeight: 0
            }
        },
        26665: (e, t, s) => {
            "use strict";
            s.d(t, {
                A: () => i
            });
            let i = {
                src: "/_next/static/media/investments.39330b64.svg",
                height: 25,
                width: 24,
                blurWidth: 0,
                blurHeight: 0
            }
        },
        31679: e => {
            e.exports = {
                available: "statistics_available__Azr1A",
                content: "statistics_content__99sss",
                plan: "statistics_plan__DBm_J",
                active: "statistics_active__Rws_8",
                button_border: "statistics_button_border__dZnvf",
                tablerow: "statistics_tablerow__zVned",
                statistics: "statistics_statistics___13Ni",
                stats: "statistics_stats__5z4UM"
            }
        },
        32228: (e, t, s) => {
            "use strict";
            s.d(t, {
                A: () => i
            });
            let i = {
                src: "/_next/static/media/help_center.ba18b5e1.svg",
                height: 21,
                width: 20,
                blurWidth: 0,
                blurHeight: 0
            }
        },
        34322: (e, t, s) => {
            "use strict";
            s.d(t, {
                A: () => i
            });
            let i = {
                src: "/_next/static/media/arbitrage.178727cc.svg",
                height: 84,
                width: 84,
                blurWidth: 0,
                blurHeight: 0
            }
        },
        34899: (e, t, s) => {
            "use strict";
            s.d(t, {
                A: () => i
            });
            let i = {
                src: "/_next/static/media/dashboard.973257ea.svg",
                height: 25,
                width: 24,
                blurWidth: 0,
                blurHeight: 0
            }
        },
        36396: (e, t, s) => {
            "use strict";
            s.d(t, {
                v: () => p,
                h: () => g
            });
            var i = s(34899),
                a = s(4061),
                r = s(26665),
                c = s(2492),
                n = s(9898),
                l = s(32228),
                d = s(34322),
                h = s(22421),
                o = s(7874),
                u = s(24444);
            let m = {
                src: "/_next/static/media/copy_trading.82e41326.svg",
                height: 48,
                width: 35,
                blurWidth: 0,
                blurHeight: 0
            };
            var x = s(47329);
            let p = [{
                    key: "item-0",
                    path: "dashboard",
                    icon: i.A.src,
                    text: "Dashboard"
                }, {
                    key: "item-1",
                    path: "wallets/replenishment",
                    icon: a.A.src,
                    text: "Wallets",
                    childs: [{
                        key: "item-10",
                        path: "/wallets/replenishment",
                        icon: h.A,
                        text: "Replenishment"
                    }, {
                        key: "item-9",
                        path: "/wallets/withdrawal",
                        icon: o.A,
                        text: "Withdrawal"
                    }, {
                        key: "item-8",
                        path: "/wallets/exchange",
                        icon: d.A,
                        text: "Exchange"
                    }]
                }, {
                    key: "item-2",
                    path: "/investments/automatictrading/dynamic",
                    icon: r.A.src,
                    text: "Investments",
                    childs: [{
                        key: "item-11",
                        path: "/investments/automatictrading/dynamic",
                        icon: u.default,
                        text: "Automatic Trading",
                        description: "Automated trading system"
                    }, {
                        key: "item-12",
                        path: "/investments/copytrading",
                        icon: m,
                        text: "Copy Trading",
                        description: "Long-term strategies from Emvios"
                    }, {
                        key: "item-13",
                        path: "/investments/crosschain",
                        icon: x.A,
                        text: "Cross-chain DEX Trading",
                        description: "Coming soon"
                    }]
                }, {
                    key: "item-3",
                    path: "statistics/all",
                    icon: c.A.src,
                    text: "Statistics"
                }, {
                    key: "item-4",
                    path: "affiliate",
                    icon: n.A.src,
                    text: "Affiliate Program"
                }, {
                    key: "item-5",
                    path: "helpcenter",
                    icon: l.A.src,
                    text: "Help Center"
                }],
                g = [{
                    key: "item-0",
                    path: "dashboard",
                    icon: i.A.src,
                    text: "Dashboard"
                }, {
                    key: "item-1",
                    path: "wallets",
                    icon: a.A.src,
                    text: "Wallets",
                    childs: [{
                        key: "item-10",
                        path: "",
                        icon: h.A.src,
                        text: "Replenishment"
                    }, {
                        key: "item-9",
                        path: "",
                        icon: o.A.src,
                        text: "Withdrawal"
                    }, {
                        key: "item-8",
                        path: "",
                        icon: d.A.src,
                        text: "Exchange"
                    }]
                }, {
                    key: "item-2",
                    path: "investments",
                    icon: r.A.src,
                    text: "Investments",
                    childs: [{
                        key: "item-11",
                        path: "",
                        icon: u.default.src,
                        text: "Automatic Trading"
                    }, {
                        key: "item-12",
                        path: "",
                        icon: m.src,
                        text: "Copy Trading"
                    }, {
                        key: "item-13",
                        path: "",
                        icon: x.A.src,
                        text: "Cross-chain DEX Trading"
                    }]
                }, {
                    key: "item-3",
                    path: "statistics",
                    icon: c.A.src,
                    text: "Statistics"
                }, {
                    key: "item-4",
                    path: "affiliate",
                    icon: n.A.src,
                    text: "Affiliate Program"
                }, {
                    key: "item-4",
                    path: "profile",
                    icon: "",
                    text: "Profile"
                }, {
                    key: "item-5",
                    path: "help",
                    icon: l.A.src,
                    text: "Help Center"
                }]
        },
        36612: (e, t, s) => {
            "use strict";
            s.d(t, {
                G: () => i
            });
            let i = (0, s(65453).v)(e => ({
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
        47329: (e, t, s) => {
            "use strict";
            s.d(t, {
                A: () => i
            });
            let i = {
                src: "/_next/static/media/cross_chain.aedc3b26.svg",
                height: 36,
                width: 35,
                blurWidth: 0,
                blurHeight: 0
            }
        },
        53507: (e, t, s) => {
            "use strict";
            s.d(t, {
                A: () => i
            });
            let i = {
                src: "/_next/static/media/withdrawn.e239ce07.svg",
                height: 25,
                width: 24,
                blurWidth: 0,
                blurHeight: 0
            }
        },
        60388: (e, t, s) => {
            "use strict";
            s.d(t, {
                N_: () => r,
                a8: () => n,
                rd: () => l
            });
            var i = s(30981);
            let a = (0, s(49984).A)({
                    locales: ["en", "fr", "es", "ph", "hi", "hu", "cn", "cz", "jp", "id", "nl", "de", "it", "pt", "ro", "pl", "ar", "tr", "sk"],
                    defaultLocale: "en"
                }),
                {
                    Link: r,
                    redirect: c,
                    usePathname: n,
                    useRouter: l,
                    getPathname: d
                } = (0, i.A)(a)
        },
        67707: (e, t, s) => {
            "use strict";
            s.d(t, {
                A: () => i
            });
            let i = {
                src: "/_next/static/media/invested.d3a751a8.svg",
                height: 25,
                width: 24,
                blurWidth: 0,
                blurHeight: 0
            }
        },
        73397: (e, t, s) => {
            "use strict";
            s.d(t, {
                cn: () => r
            });
            var i = s(52596),
                a = s(39688);

            function r() {
                for (var e = arguments.length, t = Array(e), s = 0; s < e; s++) t[s] = arguments[s];
                return (0, a.QP)((0, i.$)(t))
            }
        },
        86285: (e, t, s) => {
            "use strict";
            s.d(t, {
                A: () => i
            });
            let i = {
                src: "/_next/static/media/gift.44a055fe.svg",
                height: 25,
                width: 25,
                blurWidth: 0,
                blurHeight: 0
            }
        },
        86583: (e, t, s) => {
            "use strict";
            s.d(t, {
                default: () => b
            });
            var i = s(95155),
                a = s(31679),
                r = s.n(a),
                c = s(66766),
                n = s(67707),
                l = s(53507),
                d = s(90042);
            let h = {
                src: "/_next/static/media/briefcase.f642f1e3.svg",
                height: 25,
                width: 25,
                blurWidth: 0,
                blurHeight: 0
            };
            var o = s(86285),
                u = s(9884),
                m = s(15739),
                x = s(12115),
                p = s(17652),
                g = s(73397);

            function b() {
                let e = (0, p.c3)("Dashboard"),
                    t = (0, u.A)(),
                    s = (0, m.A)() || [],
                    a = () => {
                        let e = 0,
                            i = 0,
                            a = 0,
                            r = 0,
                            c = 0;
                        try {
                            s && t && t.forEach(t => {
                                let n = s[s.findIndex(e => e.abr === t.paysys)].price || 1;
                                e += t.withdrawals * n, i += t.replenishments * n, a += t.bonus * n, r += t.accural * n, c += t.deposits * n
                            })
                        } catch (e) {}
                        return 0 === e && 0 === i && 0 === a && 0 === r && 0 === c ? {
                            withdrawals: 0,
                            replenishments: 0,
                            bonuses: 0,
                            profits: 0,
                            invests: 0
                        } : {
                            withdrawals: e.toFixed(0) || 0,
                            replenishments: i.toFixed(0) || 0,
                            bonuses: a.toFixed(0) || 0,
                            profits: r.toFixed(0) || 0,
                            invests: c.toFixed(0) || 0
                        }
                    },
                    {
                        replenishments: b,
                        withdrawals: f,
                        bonuses: v,
                        profits: w,
                        invests: _
                    } = (0, x.useMemo)(() => a(), [s, t]);
                return s && t ? (0, i.jsxs)("div", {
                    className: r().statistics,
                    children: [(0, i.jsxs)("div", {
                        className: (0, g.cn)(r().stats, "bg-white"),
                        children: [(0, i.jsxs)("div", {
                            className: "flex  items-center  gap-[16px]",
                            children: [(0, i.jsx)(c.default, {
                                src: n.A,
                                alt: "icon"
                            }), (0, i.jsx)("p", {
                                className: "text-[14px] font-medium  uppercase text-[#828282]",
                                children: e("replenished")
                            })]
                        }), (0, i.jsxs)("p", {
                            className: "font-medium  text-[18px]",
                            children: ["$ ", b]
                        })]
                    }), (0, i.jsxs)("div", {
                        className: (0, g.cn)(r().stats, "bg-white"),
                        children: [(0, i.jsxs)("div", {
                            className: "flex  items-center  gap-[8px]",
                            children: [(0, i.jsx)(c.default, {
                                src: l.A,
                                alt: "icon"
                            }), (0, i.jsx)("p", {
                                className: "text-[12px] font-medium  uppercase text-[#828282]",
                                children: e("withdrawn")
                            })]
                        }), (0, i.jsxs)("p", {
                            className: "font-medium  text-[18px]",
                            children: ["$ ", f]
                        })]
                    }), (0, i.jsxs)("div", {
                        className: (0, g.cn)(r().stats, "bg-white"),
                        children: [(0, i.jsxs)("div", {
                            className: "flex  items-center  gap-[8px]",
                            children: [(0, i.jsx)(c.default, {
                                src: h,
                                alt: "icon"
                            }), (0, i.jsx)("p", {
                                className: "text-[12px] font-medium  uppercase text-[#828282]",
                                children: e("invested")
                            })]
                        }), (0, i.jsxs)("p", {
                            className: "font-medium  text-[18px]",
                            children: ["$ ", _]
                        })]
                    }), (0, i.jsxs)("div", {
                        className: (0, g.cn)(r().stats, "bg-white"),
                        children: [(0, i.jsxs)("div", {
                            className: "flex  items-center  gap-[8px]",
                            children: [(0, i.jsx)(c.default, {
                                src: d.A,
                                alt: "icon"
                            }), (0, i.jsx)("p", {
                                className: "text-[12px] font-medium  uppercase text-[#828282]",
                                children: e("earned")
                            })]
                        }), (0, i.jsxs)("p", {
                            className: "font-medium  text-[18px]",
                            children: ["$ ", w]
                        })]
                    }), (0, i.jsxs)("div", {
                        className: (0, g.cn)(r().stats, "bg-white"),
                        children: [(0, i.jsxs)("div", {
                            className: "flex  items-center  gap-[8px]",
                            children: [(0, i.jsx)(c.default, {
                                src: o.A,
                                alt: "icon"
                            }), (0, i.jsx)("p", {
                                className: "text-[12px] font-medium  uppercase text-[#828282]",
                                children: e("bonuses")
                            })]
                        }), (0, i.jsxs)("p", {
                            className: "font-medium  text-[18px]",
                            children: ["$ ", v]
                        })]
                    })]
                }) : null
            }
        },
        90042: (e, t, s) => {
            "use strict";
            s.d(t, {
                A: () => i
            });
            let i = {
                src: "/_next/static/media/earned.57067797.svg",
                height: 25,
                width: 24,
                blurWidth: 0,
                blurHeight: 0
            }
        },
        91593: (e, t, s) => {
            Promise.resolve().then(s.bind(s, 46160)), Promise.resolve().then(s.bind(s, 46096)), Promise.resolve().then(s.bind(s, 86583)), Promise.resolve().then(s.t.bind(s, 31679, 23)), Promise.resolve().then(s.bind(s, 95060))
        },
        94052: (e, t, s) => {
            "use strict";
            s.d(t, {
                A: () => i
            });
            let i = function() {
                for (var e = arguments.length, t = Array(e), s = 0; s < e; s++) t[s] = arguments[s];
                return fetch(...t).then(e => e.json())
            }
        },
        95060: (e, t, s) => {
            "use strict";
            s.d(t, {
                BreadcrumbAuth: () => u
            });
            var i = s(95155),
                a = s(98057),
                r = s.n(a),
                c = s(35695),
                n = s(95063),
                l = s(60388),
                d = s(36396),
                h = s(17652),
                o = s(46453);
            let u = e => {
                let {
                    header: t = !1
                } = e, s = (0, h.c3)("Dashboard"), a = (0, o.Ym)(), u = (0, c.usePathname)(), m = u.split("/").filter((e, t) => 0 !== t && e !== a);
                return (0, i.jsx)("div", {
                    className: t ? r().breadcrumbHeader : r().breadcrumb,
                    children: (0, i.jsx)(n.Qp, {
                        children: (0, i.jsxs)(n.AB, {
                            children: [(0, i.jsx)(n.J5, {
                                children: (0, i.jsx)(n.w1, {
                                    children: (0, i.jsx)(l.N_, {
                                        href: "",
                                        children: s("personal_account")
                                    })
                                })
                            }), m.map((e, t) => {
                                let a = d.v.find(t => u.includes(t.path) && t.path === e);
                                return (0, i.jsxs)("span", {
                                    className: "flex gap-1.5 items-center",
                                    children: [(0, i.jsx)(n.tH, {}), m.length - 1 === t ? (0, i.jsx)(n.J5, {
                                        children: (0, i.jsx)("div", {
                                            className: "font-[400] text-[#000]",
                                            children: (0, i.jsx)(n.tJ, {
                                                className: "flex gap-[4px] items-center capitalize",
                                                children: a ? s(a.text.toLowerCase()) : "changepassword" == e ? s("change_password") : s(e.toLowerCase())
                                            })
                                        })
                                    }) : (0, i.jsx)(n.J5, {
                                        children: (0, i.jsx)(n.w1, {
                                            children: (0, i.jsx)(l.N_, {
                                                className: "capitalize",
                                                href: a ? "/".concat(a.path) : "/".concat(e),
                                                children: a ? s(a.text.toLowerCase()) : "changepassword" == e ? s("change_password") : s(e.toLowerCase())
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
        95063: (e, t, s) => {
            "use strict";
            s.d(t, {
                AB: () => h,
                J5: () => o,
                Qp: () => d,
                tH: () => x,
                tJ: () => m,
                w1: () => u
            });
            var i = s(95155),
                a = s(12115),
                r = s(99708),
                c = s(13052),
                n = (s(5623), s(29300)),
                l = s.n(n);
            let d = a.forwardRef((e, t) => {
                let { ...s
                } = e;
                return (0, i.jsx)("nav", {
                    ref: t,
                    "aria-label": "breadcrumb",
                    ...s
                })
            });
            d.displayName = "Breadcrumb";
            let h = a.forwardRef((e, t) => {
                let {
                    className: s,
                    ...a
                } = e;
                return (0, i.jsx)("ol", {
                    ref: t,
                    className: l()("flex flex-wrap items-center gap-1.5 break-words text-sm sm:gap-2.5 justify-center", s),
                    ...a
                })
            });
            h.displayName = "BreadcrumbList";
            let o = a.forwardRef((e, t) => {
                let {
                    className: s,
                    ...a
                } = e;
                return (0, i.jsx)("li", {
                    ref: t,
                    className: l()("inline-flex items-center gap-1.5", s),
                    ...a
                })
            });
            o.displayName = "BreadcrumbItem";
            let u = a.forwardRef((e, t) => {
                let {
                    asChild: s,
                    className: a,
                    ...c
                } = e, n = s ? r.DX : "span";
                return (0, i.jsx)(n, {
                    ref: t,
                    className: l()("transition-colors hover:text-foreground", a),
                    ...c
                })
            });
            u.displayName = "BreadcrumbLink";
            let m = a.forwardRef((e, t) => {
                let {
                    className: s,
                    ...a
                } = e;
                return (0, i.jsx)("span", {
                    ref: t,
                    role: "link",
                    "aria-disabled": "true",
                    "aria-current": "page",
                    className: s,
                    ...a
                })
            });
            m.displayName = "BreadcrumbPage";
            let x = e => {
                let {
                    children: t,
                    className: s,
                    ...a
                } = e;
                return (0, i.jsx)("li", {
                    role: "presentation",
                    "aria-hidden": "true",
                    className: l()("[&>svg]:size-3.5", s),
                    ...a,
                    children: null != t ? t : (0, i.jsx)(c.A, {})
                })
            };
            x.displayName = "BreadcrumbSeparator"
        },
        98057: e => {
            e.exports = {
                breadcrumb: "breadcrumbAuth_breadcrumb__Log0f",
                breadcrumbHeader: "breadcrumbAuth_breadcrumbHeader__gJmD4"
            }
        }
    },
    e => {
        var t = t => e(e.s = t);
        e.O(0, [6867, 3700, 6453, 3063, 6874, 4953, 4277, 972, 8441, 1684, 7358], () => t(91593)), _N_E = e.O()
    }
]);