(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [272], {
        2492: (e, t, i) => {
            "use strict";
            i.d(t, {
                A: () => s
            });
            let s = {
                src: "/_next/static/media/statistics_aush.3b35cbc8.svg",
                height: 25,
                width: 24,
                blurWidth: 0,
                blurHeight: 0
            }
        },
        4061: (e, t, i) => {
            "use strict";
            i.d(t, {
                A: () => s
            });
            let s = {
                src: "/_next/static/media/wallets.00ebfa6e.svg",
                height: 25,
                width: 24,
                blurWidth: 0,
                blurHeight: 0
            }
        },
        5623: (e, t, i) => {
            "use strict";
            i.d(t, {
                A: () => s
            });
            let s = (0, i(19946).A)("Ellipsis", [
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
        7874: (e, t, i) => {
            "use strict";
            i.d(t, {
                A: () => s
            });
            let s = {
                src: "/_next/static/media/withdrawal.3aa2694c.svg",
                height: 24,
                width: 24,
                blurWidth: 0,
                blurHeight: 0
            }
        },
        9239: (e, t, i) => {
            "use strict";
            i.d(t, {
                A: () => s
            });
            let s = {
                src: "/_next/static/media/person.d19a309f.png",
                height: 313,
                width: 313,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAGFBMVEXT09PW1tb////l5eX////Y2Njw8PD29va+z+buAAAABHRSTlP+8+/+4Uv6vwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAC5JREFUeJwdiUEOADAIwmBW/P+PF+2BNFQ62jtJa2Vg9mmAS4GcFJSszqZYfoc/FzAArq6uiqkAAAAASUVORK5CYII=",
                blurWidth: 8,
                blurHeight: 8
            }
        },
        9898: (e, t, i) => {
            "use strict";
            i.d(t, {
                A: () => s
            });
            let s = {
                src: "/_next/static/media/affiliate.069e1aaf.svg",
                height: 25,
                width: 24,
                blurWidth: 0,
                blurHeight: 0
            }
        },
        22421: (e, t, i) => {
            "use strict";
            i.d(t, {
                A: () => s
            });
            let s = {
                src: "/_next/static/media/replenishment.54d6b95c.svg",
                height: 24,
                width: 24,
                blurWidth: 0,
                blurHeight: 0
            }
        },
        24444: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                default: () => s
            });
            let s = {
                src: "/_next/static/media/trading.47071606.svg",
                height: 36,
                width: 35,
                blurWidth: 0,
                blurHeight: 0
            }
        },
        25517: e => {
            e.exports = {
                content: "notifications_content__Yjykw",
                trigger: "notifications_trigger__1Ijuv",
                active: "notifications_active__wAQ97"
            }
        },
        26665: (e, t, i) => {
            "use strict";
            i.d(t, {
                A: () => s
            });
            let s = {
                src: "/_next/static/media/investments.39330b64.svg",
                height: 25,
                width: 24,
                blurWidth: 0,
                blurHeight: 0
            }
        },
        27005: (e, t, i) => {
            "use strict";
            i.d(t, {
                Sidebar: () => K
            });
            var s, r = i(95155),
                a = i(12115),
                n = i(85185),
                l = i(46081),
                c = i(5845),
                o = i(6101),
                d = i(25085),
                h = (i(34378), i(28905)),
                x = i(63655),
                p = i(19178),
                u = "HoverCard",
                [m, f] = (0, l.A)(u, [d.Bk]),
                _ = (0, d.Bk)(),
                [v, g] = m(u),
                w = e => {
                    let {
                        __scopeHoverCard: t,
                        children: i,
                        open: s,
                        defaultOpen: n,
                        onOpenChange: l,
                        openDelay: o = 700,
                        closeDelay: h = 300
                    } = e, x = _(t), p = a.useRef(0), u = a.useRef(0), m = a.useRef(!1), f = a.useRef(!1), [g = !1, w] = (0, c.i)({
                        prop: s,
                        defaultProp: n,
                        onChange: l
                    }), y = a.useCallback(() => {
                        clearTimeout(u.current), p.current = window.setTimeout(() => w(!0), o)
                    }, [o, w]), b = a.useCallback(() => {
                        clearTimeout(p.current), m.current || f.current || (u.current = window.setTimeout(() => w(!1), h))
                    }, [h, w]), j = a.useCallback(() => w(!1), [w]);
                    return a.useEffect(() => () => {
                        clearTimeout(p.current), clearTimeout(u.current)
                    }, []), (0, r.jsx)(v, {
                        scope: t,
                        open: g,
                        onOpenChange: w,
                        onOpen: y,
                        onClose: b,
                        onDismiss: j,
                        hasSelectionRef: m,
                        isPointerDownOnContentRef: f,
                        children: (0, r.jsx)(d.bL, { ...x,
                            children: i
                        })
                    })
                };
            w.displayName = u;
            var y = "HoverCardTrigger",
                b = a.forwardRef((e, t) => {
                    let {
                        __scopeHoverCard: i,
                        ...s
                    } = e, a = g(y, i), l = _(i);
                    return (0, r.jsx)(d.Mz, {
                        asChild: !0,
                        ...l,
                        children: (0, r.jsx)(x.sG.a, {
                            "data-state": a.open ? "open" : "closed",
                            ...s,
                            ref: t,
                            onPointerEnter: (0, n.m)(e.onPointerEnter, L(a.onOpen)),
                            onPointerLeave: (0, n.m)(e.onPointerLeave, L(a.onClose)),
                            onFocus: (0, n.m)(e.onFocus, a.onOpen),
                            onBlur: (0, n.m)(e.onBlur, a.onClose),
                            onTouchStart: (0, n.m)(e.onTouchStart, e => e.preventDefault())
                        })
                    })
                });
            b.displayName = y;
            var [j, k] = m("HoverCardPortal", {
                forceMount: void 0
            }), A = "HoverCardContent", C = a.forwardRef((e, t) => {
                let i = k(A, e.__scopeHoverCard),
                    {
                        forceMount: s = i.forceMount,
                        ...a
                    } = e,
                    l = g(A, e.__scopeHoverCard);
                return (0, r.jsx)(h.C, {
                    present: s || l.open,
                    children: (0, r.jsx)(N, {
                        "data-state": l.open ? "open" : "closed",
                        ...a,
                        onPointerEnter: (0, n.m)(e.onPointerEnter, L(l.onOpen)),
                        onPointerLeave: (0, n.m)(e.onPointerLeave, L(l.onClose)),
                        ref: t
                    })
                })
            });
            C.displayName = A;
            var N = a.forwardRef((e, t) => {
                let {
                    __scopeHoverCard: i,
                    onEscapeKeyDown: l,
                    onPointerDownOutside: c,
                    onFocusOutside: h,
                    onInteractOutside: x,
                    ...u
                } = e, m = g(A, i), f = _(i), v = a.useRef(null), w = (0, o.s)(t, v), [y, b] = a.useState(!1);
                return a.useEffect(() => {
                    if (y) {
                        let e = document.body;
                        return s = e.style.userSelect || e.style.webkitUserSelect, e.style.userSelect = "none", e.style.webkitUserSelect = "none", () => {
                            e.style.userSelect = s, e.style.webkitUserSelect = s
                        }
                    }
                }, [y]), a.useEffect(() => {
                    if (v.current) {
                        let e = () => {
                            b(!1), m.isPointerDownOnContentRef.current = !1, setTimeout(() => {
                                var e;
                                (null == (e = document.getSelection()) ? void 0 : e.toString()) !== "" && (m.hasSelectionRef.current = !0)
                            })
                        };
                        return document.addEventListener("pointerup", e), () => {
                            document.removeEventListener("pointerup", e), m.hasSelectionRef.current = !1, m.isPointerDownOnContentRef.current = !1
                        }
                    }
                }, [m.isPointerDownOnContentRef, m.hasSelectionRef]), a.useEffect(() => {
                    v.current && (function(e) {
                        let t = [],
                            i = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
                                acceptNode: e => e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
                            });
                        for (; i.nextNode();) t.push(i.currentNode);
                        return t
                    })(v.current).forEach(e => e.setAttribute("tabindex", "-1"))
                }), (0, r.jsx)(p.qW, {
                    asChild: !0,
                    disableOutsidePointerEvents: !1,
                    onInteractOutside: x,
                    onEscapeKeyDown: l,
                    onPointerDownOutside: c,
                    onFocusOutside: (0, n.m)(h, e => {
                        e.preventDefault()
                    }),
                    onDismiss: m.onDismiss,
                    children: (0, r.jsx)(d.UC, { ...f,
                        ...u,
                        onPointerDown: (0, n.m)(u.onPointerDown, e => {
                            e.currentTarget.contains(e.target) && b(!0), m.hasSelectionRef.current = !1, m.isPointerDownOnContentRef.current = !0
                        }),
                        ref: w,
                        style: { ...u.style,
                            userSelect: y ? "text" : void 0,
                            WebkitUserSelect: y ? "text" : void 0,
                            "--radix-hover-card-content-transform-origin": "var(--radix-popper-transform-origin)",
                            "--radix-hover-card-content-available-width": "var(--radix-popper-available-width)",
                            "--radix-hover-card-content-available-height": "var(--radix-popper-available-height)",
                            "--radix-hover-card-trigger-width": "var(--radix-popper-anchor-width)",
                            "--radix-hover-card-trigger-height": "var(--radix-popper-anchor-height)"
                        }
                    })
                })
            });

            function L(e) {
                return t => "touch" === t.pointerType ? void 0 : e()
            }
            a.forwardRef((e, t) => {
                let {
                    __scopeHoverCard: i,
                    ...s
                } = e, a = _(i);
                return (0, r.jsx)(d.i3, { ...a,
                    ...s,
                    ref: t
                })
            }).displayName = "HoverCardArrow";
            var E = i(29300),
                S = i.n(E);
            let R = a.forwardRef((e, t) => {
                let {
                    className: i,
                    align: s = "start",
                    sideOffset: a = 0,
                    ...n
                } = e;
                return (0, r.jsx)(C, {
                    ref: t,
                    align: s,
                    sideOffset: a,
                    className: S()("z-[500] w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", i),
                    ...n
                })
            });
            R.displayName = C.displayName;
            var M = i(66766),
                H = i(59429),
                P = i.n(H),
                T = i(60388),
                W = i(35695),
                D = i(36396),
                B = i(17652),
                O = i(34899),
                I = i(4061),
                Z = i(26665),
                z = i(2492),
                J = i(9898),
                U = i(32228),
                F = i(22421),
                q = i(7874),
                V = i(61186),
                G = i(51756),
                Y = i(21060),
                X = i(86082);
            let K = () => {
                let e = (0, B.c3)("Metadata"),
                    t = (0, W.usePathname)(),
                    [i, s] = (0, a.useState)(!1),
                    n = [{
                        key: "item-0",
                        path: "dashboard",
                        icon: O.A.src,
                        text: e("dashboard"),
                        id: "tour-dashboard"
                    }, {
                        key: "item-1",
                        path: "wallets/replenishment",
                        id: "tour-wallets",
                        icon: I.A.src,
                        text: e("wallets"),
                        childs: [{
                            key: "item-10",
                            path: "/wallets/replenishment",
                            icon: F.A,
                            text: e("replenishment"),
                            description: ""
                        }, {
                            key: "item-9",
                            path: "/wallets/withdrawal",
                            icon: q.A,
                            text: e("withdrawal"),
                            description: ""
                        }]
                    }, {
                        key: "item-2",
                        id: "tour-investments",
                        path: "investments/automatictrading/dynamic",
                        icon: Z.A.src,
                        text: e("investments"),
                        childs: [{
                            key: "item-14",
                            path: "/investments/activeplans",
                            icon: X.A,
                            text: e("active-plans"),
                            description: e("list_of_active_plans")
                        }, {
                            key: "item-11",
                            path: "/investments/automatictrading/dynamic",
                            icon: V.A,
                            text: e("automatic-trading"),
                            description: e("automated-trading-system")
                        }, {
                            key: "item-12",
                            path: "/investments/copytrading",
                            icon: G.A,
                            text: e("copy-trading"),
                            description: e("long-term-strategies")
                        }, {
                            key: "item-13",
                            path: "/investments/crosschain",
                            icon: Y.A,
                            text: e("cross-chain-dex-trading"),
                            description: e("coming-soon")
                        }]
                    }, {
                        key: "item-3",
                        path: "statistics/all",
                        icon: z.A.src,
                        text: e("statistics"),
                        id: "tour-statistics"
                    }, {
                        key: "item-4",
                        path: "affiliate",
                        icon: J.A.src,
                        text: e("affiliate-program"),
                        id: "tour-referrals"
                    }, {
                        key: "item-5",
                        path: "helpcenter/what-is-emvios",
                        icon: U.A.src,
                        text: e("help-hub")
                    }],
                    l = D.h.find(e => t.includes(e.path));
                return (0, r.jsx)("div", {
                    className: P().wrapper,
                    children: (0, r.jsxs)("div", {
                        className: P().body,
                        children: [(0, r.jsx)(T.N_, {
                            href: "/",
                            className: "mb-[10px]",
                            children: (0, r.jsx)(M.default, {
                                placeholder: "blur",
                                blurDataURL: "/logo/svg/solo.svg",
                                src: "/logo/svg/solo.svg",
                                height: 64,
                                width: 64,
                                alt: "logo"
                            })
                        }), n.map((t, s) => {
                            var a;
                            return (0, r.jsxs)(w, {
                                openDelay: 0,
                                closeDelay: 150,
                                children: [(0, r.jsx)(b, {
                                    asChild: !0,
                                    children: (0, r.jsxs)(T.N_, {
                                        href: "/" + t.path,
                                        id: t.id,
                                        target: (null == t ? void 0 : t.path) !== "helpcenter/what-is-emvios" ? "_self" : "_blank",
                                        className: S()(P().tab, {
                                            [P().active]: t.icon === (null == l ? void 0 : l.icon)
                                        }),
                                        children: [(0, r.jsx)(M.default, {
                                            src: t.icon,
                                            width: 24,
                                            height: 25,
                                            alt: "icon"
                                        }), (0, r.jsx)("div", {
                                            children: (0, r.jsx)("p", {
                                                className: "text-[13px] text-center uppercase",
                                                children: t.text
                                            })
                                        })]
                                    })
                                }), "item-1" === t.key || "item-2" === t.key ? (0, r.jsx)(R, {
                                    sideOffset: -91,
                                    alignOffset: 200,
                                    asChild: !0,
                                    className: S()(P().popup_list__body, {
                                        [P().active]: i
                                    }),
                                    children: (0, r.jsx)("div", {
                                        children: null == t || null == (a = t.childs) ? void 0 : a.map((t, i) => "item-13" === t.key ? (0, r.jsxs)("div", {
                                            className: S()("flex relative gap-[24px] px-[30px] py-[16px] rounded-[6px] cursor-pointer", "item-13" === t.key && "opacity-50"),
                                            children: [(0, r.jsx)(M.default, {
                                                className: "flex-shrink-0 flex-grow-0",
                                                src: t.icon,
                                                alt: "icon",
                                                style: {
                                                    width: "auto",
                                                    height: "40px"
                                                }
                                            }), (0, r.jsxs)("div", {
                                                className: "flex flex-col justify-center",
                                                children: [(0, r.jsx)("p", {
                                                    className: " text-[16px]  text-black",
                                                    children: t.text
                                                }), (0, r.jsx)("p", {
                                                    className: " text-[12px] text-[#303030]",
                                                    children: e("coming-soon")
                                                })]
                                            })]
                                        }, i) : (0, r.jsxs)(T.N_, {
                                            href: t.path,
                                            className: S()("flex relative gap-[24px] px-[30px] py-[16px] rounded-[6px]", "item-13" === t.key && "opacity-50"),
                                            children: [(0, r.jsx)(M.default, {
                                                className: "flex-shrink-0 flex-grow-0",
                                                src: t.icon,
                                                alt: "icon",
                                                style: {
                                                    width: "auto",
                                                    height: "40px"
                                                }
                                            }), (0, r.jsxs)("div", {
                                                className: "flex flex-col justify-center",
                                                children: [(0, r.jsx)("p", {
                                                    className: " text-[16px]  text-black",
                                                    children: t.text
                                                }), (0, r.jsx)("p", {
                                                    className: " text-[12px] text-[#303030]",
                                                    children: null == t ? void 0 : t.description
                                                })]
                                            })]
                                        }, i))
                                    })
                                }) : null]
                            }, s)
                        })]
                    })
                })
            }
        },
        32228: (e, t, i) => {
            "use strict";
            i.d(t, {
                A: () => s
            });
            let s = {
                src: "/_next/static/media/help_center.ba18b5e1.svg",
                height: 21,
                width: 20,
                blurWidth: 0,
                blurHeight: 0
            }
        },
        34322: (e, t, i) => {
            "use strict";
            i.d(t, {
                A: () => s
            });
            let s = {
                src: "/_next/static/media/arbitrage.178727cc.svg",
                height: 84,
                width: 84,
                blurWidth: 0,
                blurHeight: 0
            }
        },
        34477: (e, t, i) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), ! function(e, t) {
                for (var i in t) Object.defineProperty(e, i, {
                    enumerable: !0,
                    get: t[i]
                })
            }(t, {
                callServer: function() {
                    return s.callServer
                },
                createServerReference: function() {
                    return a
                },
                findSourceMapURL: function() {
                    return r.findSourceMapURL
                }
            });
            let s = i(53806),
                r = i(31818),
                a = i(34979).createServerReference
        },
        34899: (e, t, i) => {
            "use strict";
            i.d(t, {
                A: () => s
            });
            let s = {
                src: "/_next/static/media/dashboard.973257ea.svg",
                height: 25,
                width: 24,
                blurWidth: 0,
                blurHeight: 0
            }
        },
        36396: (e, t, i) => {
            "use strict";
            i.d(t, {
                v: () => m,
                h: () => f
            });
            var s = i(34899),
                r = i(4061),
                a = i(26665),
                n = i(2492),
                l = i(9898),
                c = i(32228),
                o = i(34322),
                d = i(22421),
                h = i(7874),
                x = i(24444);
            let p = {
                src: "/_next/static/media/copy_trading.82e41326.svg",
                height: 48,
                width: 35,
                blurWidth: 0,
                blurHeight: 0
            };
            var u = i(47329);
            let m = [{
                    key: "item-0",
                    path: "dashboard",
                    icon: s.A.src,
                    text: "Dashboard"
                }, {
                    key: "item-1",
                    path: "wallets/replenishment",
                    icon: r.A.src,
                    text: "Wallets",
                    childs: [{
                        key: "item-10",
                        path: "/wallets/replenishment",
                        icon: d.A,
                        text: "Replenishment"
                    }, {
                        key: "item-9",
                        path: "/wallets/withdrawal",
                        icon: h.A,
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
                        icon: x.default,
                        text: "Automatic Trading",
                        description: "Automated trading system"
                    }, {
                        key: "item-12",
                        path: "/investments/copytrading",
                        icon: p,
                        text: "Copy Trading",
                        description: "Long-term strategies from Emvios"
                    }, {
                        key: "item-13",
                        path: "/investments/crosschain",
                        icon: u.A,
                        text: "Cross-chain DEX Trading",
                        description: "Coming soon"
                    }]
                }, {
                    key: "item-3",
                    path: "statistics/all",
                    icon: n.A.src,
                    text: "Statistics"
                }, {
                    key: "item-4",
                    path: "affiliate",
                    icon: l.A.src,
                    text: "Affiliate Program"
                }, {
                    key: "item-5",
                    path: "helpcenter",
                    icon: c.A.src,
                    text: "Help Center"
                }],
                f = [{
                    key: "item-0",
                    path: "dashboard",
                    icon: s.A.src,
                    text: "Dashboard"
                }, {
                    key: "item-1",
                    path: "wallets",
                    icon: r.A.src,
                    text: "Wallets",
                    childs: [{
                        key: "item-10",
                        path: "",
                        icon: d.A.src,
                        text: "Replenishment"
                    }, {
                        key: "item-9",
                        path: "",
                        icon: h.A.src,
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
                        icon: x.default.src,
                        text: "Automatic Trading"
                    }, {
                        key: "item-12",
                        path: "",
                        icon: p.src,
                        text: "Copy Trading"
                    }, {
                        key: "item-13",
                        path: "",
                        icon: u.A.src,
                        text: "Cross-chain DEX Trading"
                    }]
                }, {
                    key: "item-3",
                    path: "statistics",
                    icon: n.A.src,
                    text: "Statistics"
                }, {
                    key: "item-4",
                    path: "affiliate",
                    icon: l.A.src,
                    text: "Affiliate Program"
                }, {
                    key: "item-4",
                    path: "profile",
                    icon: "",
                    text: "Profile"
                }, {
                    key: "item-5",
                    path: "help",
                    icon: c.A.src,
                    text: "Help Center"
                }]
        },
        46840: e => {
            e.exports = {
                auth: "profile_menu_auth__fjmZU",
                lang: "profile_menu_lang__Ry_L_",
                trigger: "profile_menu_trigger__lTRd5",
                active: "profile_menu_active__Ig3vd"
            }
        },
        47329: (e, t, i) => {
            "use strict";
            i.d(t, {
                A: () => s
            });
            let s = {
                src: "/_next/static/media/cross_chain.aedc3b26.svg",
                height: 36,
                width: 35,
                blurWidth: 0,
                blurHeight: 0
            }
        },
        54786: e => {
            e.exports = {
                button: "header_auth_button__b9DJn",
                login: "header_auth_login__HCZiW",
                sign_up: "header_auth_sign_up__Cjgvx",
                nav_desktop: "header_auth_nav_desktop__0s7ny",
                nav_desktop__item: "header_auth_nav_desktop__item__5Ie8s",
                nav_mobile: "header_auth_nav_mobile__P1JF0",
                burger: "header_auth_burger__QTGbH",
                dashboard: "header_auth_dashboard__jr6hi",
                active: "header_auth_active__qaeHq",
                nav_accordion__body: "header_auth_nav_accordion__body__GEx_z",
                nav_accordion__title: "header_auth_nav_accordion__title__MOzjA",
                nav_accordion__list: "header_auth_nav_accordion__list__GW2uo",
                nav_accordion__item: "header_auth_nav_accordion__item__1dKO_",
                nav_mobile__text: "header_auth_nav_mobile__text__I9y2O",
                nav__title: "header_auth_nav__title__Kz_gn",
                popup_list: "header_auth_popup_list__CwhTZ",
                popup_list__body: "header_auth_popup_list__body___pt_E",
                popup_list__title: "header_auth_popup_list__title__4Rasu",
                nav_mobile__icons: "header_auth_nav_mobile__icons__A_qcZ",
                content: "header_auth_content__8qok_",
                container: "header_auth_container__GNiJJ",
                body: "header_auth_body__HmHlx",
                nav_icons: "header_auth_nav_icons__WncfI",
                auth: "header_auth_auth__EVG1T",
                lang: "header_auth_lang__KDVcY",
                advantages: "header_auth_advantages__2bJOc",
                child: "header_auth_child__TqwXv",
                box: "header_auth_box__KuP7o",
                text: "header_auth_text__dCMGD",
                arrov: "header_auth_arrov__RW61X"
            }
        },
        57062: (e, t, i) => {
            "use strict";
            i.d(t, {
                Accordion: () => o,
                AccordionContent: () => x,
                AccordionItem: () => d,
                AccordionTrigger: () => h
            });
            var s = i(95155),
                r = i(12115),
                a = i(23478),
                n = i(66474),
                l = i(29300),
                c = i.n(l);
            let o = a.bL,
                d = r.forwardRef((e, t) => {
                    let {
                        className: i,
                        ...r
                    } = e;
                    return (0, s.jsx)(a.q7, {
                        ref: t,
                        className: c()("accordion_item", i),
                        ...r
                    })
                });
            d.displayName = "AccordionItem";
            let h = r.forwardRef((e, t) => {
                let {
                    className: i,
                    children: r,
                    ...l
                } = e;
                return (0, s.jsx)(a.Y9, {
                    className: "flex",
                    children: (0, s.jsxs)(a.l9, {
                        ref: t,
                        className: c()("flex gap-[12px] justify-between px-[14px] flex-1 items-center py-[16px] font-medium transition-all [&[data-state=open]>svg]:rotate-180 ", i),
                        ...l,
                        children: [r, (0, s.jsx)(n.A, {
                            className: "h-4 w-4 shrink-0 transition-transform duration-200"
                        })]
                    })
                })
            });
            h.displayName = a.l9.displayName;
            let x = r.forwardRef((e, t) => {
                let {
                    className: i,
                    children: r,
                    ...n
                } = e;
                return (0, s.jsx)(a.UC, {
                    ref: t,
                    className: "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
                    ...n,
                    children: (0, s.jsx)("div", {
                        className: c()("pb-[32px] pt-0 px-[14px]", i),
                        children: r
                    })
                })
            });
            x.displayName = a.UC.displayName
        },
        59429: e => {
            e.exports = {
                wrapper: "sidebar_wrapper__XEcoX",
                body: "sidebar_body__J1dsq",
                tab: "sidebar_tab__XxMVJ",
                active: "sidebar_active__WMqVb",
                popup_list__body: "sidebar_popup_list__body__zBSiE"
            }
        },
        64021: (e, t, i) => {
            Promise.resolve().then(i.bind(i, 69192)), Promise.resolve().then(i.bind(i, 27005))
        },
        69192: (e, t, i) => {
            "use strict";
            i.d(t, {
                HeaderAuth: () => $
            });
            var s = i(95155),
                r = i(54786),
                a = i.n(r),
                n = i(12115),
                l = i(52721),
                c = i(42117),
                o = i(66766),
                d = i(29300),
                h = i.n(d),
                x = i(28124),
                p = i(65967),
                u = i(35695),
                m = i(34899),
                f = i(4061),
                _ = i(26665),
                v = i(2492),
                g = i(9898),
                w = i(32228);
            i(34322);
            var y = i(22421),
                b = i(7874),
                j = i(61186),
                k = i(51756);
            i(21060);
            var A = i(86082),
                C = i(57062),
                N = i(21162),
                L = i(46840),
                E = i.n(L),
                S = i(12108),
                R = i(38769),
                M = i(9239),
                H = i(60388);
            let P = function() {
                let e = (0, H.rd)(),
                    {
                        data: t,
                        status: i,
                        update: s
                    } = (0, S.useSession)();
                return ((0, n.useEffect)(() => {
                    let t;
                    if ("loading" === i) return;
                    let r = async () => {
                            "authenticated" === i && (await s() || e.push("/login"))
                        },
                        a = () => {
                            clearTimeout(t), t = setTimeout(() => {
                                r()
                            }, 300)
                        };
                    return window.addEventListener("focus", a), () => {
                        window.removeEventListener("focus", a)
                    }
                }, [e, i, s]), "loading" === i) ? null : t
            };
            var T = i(71028),
                W = i(17652);
            let D = () => {
                let e = (0, W.c3)("Dashboard"),
                    t = (0, T.A)(),
                    [i, r] = (0, n.useState)(!1);
                return ! function() {
                    let {
                        data: e,
                        status: t
                    } = (0, S.useSession)(), i = (0, n.useRef)(0);
                    (0, n.useEffect)(() => {
                        var s, r;
                        if ("authenticated" !== t) return;
                        let a = window.Tawk_API;
                        if (!a || !(null == e || null == (s = e.user) ? void 0 : s.email)) return;
                        let n = Date.now();
                        if (n - i.current < 9e4) return;
                        i.current = n;
                        let {
                            login: l,
                            email: c
                        } = JSON.parse(null == e || null == (r = e.user) ? void 0 : r.name), o = {
                            name: l,
                            email: c
                        }, d = () => a.setAttributes(o, e => {
                            "RATE_LIMITED" === e ? (console.warn("Tawk rate-limited. Повтор через 90 с."), i.current = 0) : e && console.error("Tawk setAttributes error:", e)
                        });
                        if ("function" == typeof a.setAttributes) d();
                        else {
                            let e = a.onLoad;
                            a.onLoad = () => {
                                null == e || e(), d()
                            }
                        }
                    }, [t, e])
                }(), P(), (0, n.useEffect)(() => {
                    if ("undefined" != typeof document) {
                        let e = document.querySelector(".bg");
                        if (e)
                            if (i) {
                                e.style.zIndex = "500", e.style.opacity = "1", e.style.background = "rgba(0, 0, 0, 0.3)";
                                let t = e => e.preventDefault();
                                return window.addEventListener("wheel", t, {
                                    passive: !1
                                }), window.addEventListener("touchmove", t, {
                                    passive: !1
                                }), () => {
                                    window.removeEventListener("wheel", t), window.removeEventListener("touchmove", t)
                                }
                            } else e.style.zIndex = "-100", e.style.opacity = "0", e.style.background = "transparent"
                    }
                }, [i]), (0, s.jsxs)(R.rI, {
                    modal: !1,
                    open: i,
                    onOpenChange: r,
                    children: [(0, s.jsx)(R.ty, {
                        asChild: !0,
                        children: (0, s.jsx)("div", {
                            className: h()(E().trigger, {
                                [E().active]: i
                            }),
                            children: (0, s.jsx)(o.default, {
                                className: "w-full h-full",
                                src: (null == t ? void 0 : t.avatar) || M.A,
                                alt: "icon",
                                width: 36,
                                height: 36
                            })
                        })
                    }), (0, s.jsx)(R.SQ, {
                        className: "w-[268px] my-[8px] mr-[16px]",
                        children: (0, s.jsxs)("div", {
                            className: "flex flex-col  items-center relative overflow-hidden gap-[24px] px-[16px] pt-[16px] pb-[32px] rounded-[6px] bg-white border-solid border border-[#d9d9d9]",
                            children: [(0, s.jsxs)("div", {
                                className: "flex flex-col   self-stretch flex-grow-0 flex-shrink-0",
                                children: [(0, s.jsx)("div", {
                                    className: "flex justify-end  self-stretch flex-grow-0 flex-shrink-0 gap-[16px]",
                                    children: (0, s.jsx)(R._2, {
                                        children: (0, s.jsx)("div", {
                                            className: "flex cursor-pointer justify-end items-center flex-grow-0 flex-shrink-0 p-[4px] relative rounded-[6px]",
                                            children: (0, s.jsx)("svg", {
                                                width: 24,
                                                height: 24,
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                className: "flex-grow-0 flex-shrink-0 w-6 h-6 relative",
                                                preserveAspectRatio: "none",
                                                children: (0, s.jsx)("path", {
                                                    d: "M12 19.9998C7.59 19.9998 4 16.4098 4 11.9998C4 7.58979 7.59 3.99979 12 3.99979C16.41 3.99979 20 7.58979 20 11.9998C20 16.4098 16.41 19.9998 12 19.9998ZM12 1.99979C6.47 1.99979 2 6.46979 2 11.9998C2 17.5298 6.47 21.9998 12 21.9998C17.53 21.9998 22 17.5298 22 11.9998C22 6.46979 17.53 1.99979 12 1.99979ZM14.59 7.99979L12 10.5898L9.41 7.99979L8 9.40979L10.59 11.9998L8 14.5898L9.41 15.9998L12 13.4098L14.59 15.9998L16 14.5898L13.41 11.9998L16 9.40979L14.59 7.99979Z",
                                                    fill: "#717171"
                                                })
                                            })
                                        })
                                    })
                                }), (0, s.jsxs)("div", {
                                    className: "flex flex-col  items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden gap-4 rounded-[6px]",
                                    children: [(0, s.jsx)("div", {
                                        className: "flex-grow-0 flex-shrink-0 w-[100.8px] h-[100.8px] rounded-[6px] relative overflow-hidden",
                                        children: (0, s.jsx)(o.default, {
                                            src: (null == t ? void 0 : t.avatar) || M.A,
                                            width: 100,
                                            height: 100,
                                            alt: "icon",
                                            className: "flex-grow-0 flex-shrink-0"
                                        })
                                    }), (0, s.jsxs)("div", {
                                        className: "flex flex-col  items-center  relative",
                                        children: [(0, s.jsxs)("p", {
                                            className: "self-stretch  text-[18px] text-center text-[#303030]",
                                            children: [e("hello"), ", ", null == t ? void 0 : t.username]
                                        }), (0, s.jsx)("p", {
                                            className: "self-stretch  text-[12px] text-center text-[#717171]",
                                            children: null == t ? void 0 : t.email
                                        })]
                                    })]
                                })]
                            }), (0, s.jsx)("svg", {
                                width: 236,
                                height: 2,
                                viewBox: "0 0 236 2",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "self-stretch flex-grow-0 flex-shrink-0 opacity-60",
                                preserveAspectRatio: "none",
                                children: (0, s.jsx)("line", {
                                    opacity: "0.6",
                                    y1: "1.3",
                                    x2: 236,
                                    y2: "1.3",
                                    stroke: "#E6E6E6"
                                })
                            }), (0, s.jsx)(R._2, {
                                className: "self-stretch w-full",
                                children: (0, s.jsxs)(H.N_, {
                                    href: "/profile",
                                    className: "flex  items-center w-full self-stretch gap-[24px] px-[24px] py-[8px] rounded-[6px]",
                                    onClick: () => r(!1),
                                    children: [(0, s.jsxs)("svg", {
                                        width: 35,
                                        height: 36,
                                        viewBox: "0 0 35 36",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        className: "flex-grow-0 flex-shrink-0 w-[35px] h-[35px] relative",
                                        preserveAspectRatio: "xMidYMid meet",
                                        children: [(0, s.jsx)("path", {
                                            d: "M17.5007 17.8C21.5277 17.8 24.7923 14.5354 24.7923 10.5083C24.7923 6.48125 21.5277 3.21666 17.5007 3.21666C13.4736 3.21666 10.209 6.48125 10.209 10.5083C10.209 14.5354 13.4736 17.8 17.5007 17.8Z",
                                            stroke: "#292D32",
                                            strokeWidth: "1.5",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        }), (0, s.jsx)("path", {
                                            d: "M28.0154 23.2542L22.8529 28.4167C22.6487 28.6209 22.4592 29 22.4154 29.2771L22.1383 31.2458C22.0362 31.9604 22.5321 32.4563 23.2467 32.3542L25.2154 32.0771C25.4925 32.0333 25.8863 31.8438 26.0758 31.6396L31.2383 26.4771C32.1279 25.5875 32.5508 24.5521 31.2383 23.2396C29.9404 21.9417 28.905 22.3646 28.0154 23.2542Z",
                                            stroke: "#00B2C8",
                                            strokeWidth: "1.5",
                                            strokeMiterlimit: 10,
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        }), (0, s.jsx)("path", {
                                            d: "M27.2715 23.9979C27.709 25.5729 28.9339 26.7979 30.5089 27.2354",
                                            stroke: "#00B2C8",
                                            strokeWidth: "1.5",
                                            strokeMiterlimit: 10,
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        }), (0, s.jsx)("path", {
                                            d: "M4.97266 32.3833C4.97266 26.7396 10.5873 22.175 17.4998 22.175C19.0164 22.175 20.4747 22.3937 21.831 22.8021",
                                            stroke: "#292D32",
                                            strokeWidth: "1.5",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        })]
                                    }), (0, s.jsxs)("div", {
                                        className: "flex flex-col justify-center flex-grow",
                                        children: [(0, s.jsx)("p", {
                                            className: "text-[16px] text-black",
                                            children: e("profile")
                                        }), (0, s.jsx)("p", {
                                            className: "self-stretch text-[12px] ",
                                            children: e("set_up_your_profile")
                                        })]
                                    })]
                                })
                            }), (0, s.jsx)(R._2, {
                                className: "self-stretch w-full",
                                children: (0, s.jsxs)("div", {
                                    className: "flex  items-center w-full self-stretch gap-[24px] px-[24px] py-[8px] rounded-[6px]",
                                    children: [(0, s.jsxs)("svg", {
                                        width: 35,
                                        height: 36,
                                        viewBox: "0 0 35 36",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        className: "flex-grow-0 flex-shrink-0 w-[35px] h-[35px] relative",
                                        preserveAspectRatio: "xMidYMid meet",
                                        children: [(0, s.jsx)("path", {
                                            d: "M12.9785 11.325C13.4306 6.07499 16.1285 3.93124 22.0348 3.93124H22.2243C28.7431 3.93124 31.3535 6.54165 31.3535 13.0604V22.5687C31.3535 29.0875 28.7431 31.6979 22.2243 31.6979H22.0348C16.1723 31.6979 13.4743 29.5833 12.9931 24.4208",
                                            stroke: "#292D32",
                                            strokeWidth: "1.5",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        }), (0, s.jsx)("path", {
                                            d: "M21.8751 17.8H5.2793",
                                            stroke: "#00B2C8",
                                            strokeWidth: "1.5",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        }), (0, s.jsx)("path", {
                                            d: "M8.5319 12.9146L3.64648 17.8L8.5319 22.6854",
                                            stroke: "#00B2C8",
                                            strokeWidth: "1.5",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        })]
                                    }), (0, s.jsxs)("div", {
                                        className: "flex flex-col justify-center pointer",
                                        onClick: () => (0, S.signOut)(),
                                        children: [(0, s.jsx)("p", {
                                            className: "text-[16px] text-black",
                                            children: e("logout")
                                        }), (0, s.jsx)("p", {
                                            className: "text-[12px]",
                                            children: e("end_current_session")
                                        })]
                                    })]
                                })
                            })]
                        })
                    })]
                })
            };
            var B = i(25517),
                O = i.n(B);
            let I = {
                    src: "/_next/static/media/notify.707ca1c7.svg",
                    height: 24,
                    width: 24,
                    blurWidth: 0,
                    blurHeight: 0
                },
                Z = {
                    src: "/_next/static/media/bell.0496d9b6.svg",
                    height: 24,
                    width: 24,
                    blurWidth: 0,
                    blurHeight: 0
                };
            var z = i(94052),
                J = i(34953);
            let U = function() {
                    let {
                        data: e,
                        isLoading: t,
                        mutate: i
                    } = (0, J.Ay)("/api/msg/unread", z.A);
                    return {
                        data: e,
                        isLoading: t,
                        mutate: i
                    }
                },
                F = function(e) {
                    let {
                        open: t
                    } = e, {
                        data: i,
                        isLoading: s
                    } = (0, J.Ay)(t ? "/api/msg" : null, z.A);
                    return {
                        data: i,
                        isLoading: s
                    }
                };
            var q = i(34477);
            let V = (0, q.createServerReference)("7f89c9aef58ee5810c46dc0111ee8efc404769ad8e", q.callServer, void 0, q.findSourceMapURL, "default");
            var G = i(45567),
                Y = i(2296),
                X = i(90793);
            let K = () => {
                let e = (0, W.c3)("Dashboard"),
                    [t, i] = (0, n.useState)(!1),
                    {
                        data: r,
                        isLoading: a
                    } = U(),
                    [l, c] = (0, n.useState)(!1),
                    {
                        data: d,
                        isLoading: x
                    } = F({
                        open: t
                    }),
                    p = async function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "one";
                        "all" === t && i(!1), c(!0), await V(e, t), (0, G.j)("/api/msg/unread"), (0, G.j)("/api/msg"), c(!1)
                    };
                return (0, n.useEffect)(() => {
                    if ("undefined" != typeof document) {
                        let e = document.querySelector(".bg"),
                            s = window.scrollY;
                        if (e)
                            if (t) {
                                e.style.zIndex = "500", e.style.opacity = "1", e.style.background = "rgba(0, 0, 0, 0.3)";
                                let t = e => {
                                    !(e.target && e.target.closest(".popup_absolute")) && window.scrollY - s > 0 && i(!1)
                                };
                                return document.addEventListener("wheel", t, {
                                    passive: !0
                                }), document.addEventListener("touchmove", t, {
                                    passive: !0
                                }), () => {
                                    document.removeEventListener("wheel", t), document.removeEventListener("touchmove", t)
                                }
                            } else e.style.zIndex = "-100", e.style.opacity = "0", e.style.background = "transparent"
                    }
                }, [t]), (0, s.jsxs)(R.rI, {
                    modal: !1,
                    open: t,
                    onOpenChange: i,
                    children: [(0, s.jsx)(R.ty, {
                        asChild: !0,
                        children: (0, s.jsx)("div", {
                            className: h()(O().trigger, {
                                [O().active]: t
                            }),
                            children: !a && (0, s.jsx)(s.Fragment, {
                                children: r.count > 0 ? (0, s.jsx)(o.default, {
                                    src: Z,
                                    alt: "icon",
                                    width: 24,
                                    height: 24
                                }) : (0, s.jsx)(o.default, {
                                    src: I,
                                    alt: "icon",
                                    width: 24,
                                    height: 24
                                })
                            })
                        })
                    }), (0, s.jsx)(R.SQ, {
                        className: h()(O().content, "popup_absolute min-w-[337px]"),
                        children: (0, s.jsxs)("div", {
                            className: "flex flex-col relative gap-[32px] px-[32px] pt-[16px] flex-shrink pb-[32px]",
                            children: [(0, s.jsxs)("div", {
                                className: "flex justify-between items-center self-stretch   ",
                                children: [(0, s.jsx)("p", {
                                    className: "text-[24px] text-center ",
                                    children: e("notifications")
                                }), !a && r.count > 0 && (0, s.jsx)("p", {
                                    className: "text-[14px] cursor-pointer underline text-center ",
                                    onClick: async () => await p(0, "all"),
                                    children: e("read_all")
                                }), (0, s.jsx)(R._2, {
                                    children: (0, s.jsx)("div", {
                                        className: "  flex-shrink flex cursor-pointer justify-end items-center flex-grow-0  p-[4px] relative rounded-[6px]",
                                        children: (0, s.jsx)("svg", {
                                            width: 24,
                                            height: 24,
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            className: "flex-grow-0  w-6 h-6 relative",
                                            preserveAspectRatio: "none",
                                            children: (0, s.jsx)("path", {
                                                d: "M12 19.9998C7.59 19.9998 4 16.4098 4 11.9998C4 7.58979 7.59 3.99979 12 3.99979C16.41 3.99979 20 7.58979 20 11.9998C20 16.4098 16.41 19.9998 12 19.9998ZM12 1.99979C6.47 1.99979 2 6.46979 2 11.9998C2 17.5298 6.47 21.9998 12 21.9998C17.53 21.9998 22 17.5298 22 11.9998C22 6.46979 17.53 1.99979 12 1.99979ZM14.59 7.99979L12 10.5898L9.41 7.99979L8 9.40979L10.59 11.9998L8 14.5898L9.41 15.9998L12 13.4098L14.59 15.9998L16 14.5898L13.41 11.9998L16 9.40979L14.59 7.99979Z",
                                                fill: "#717171"
                                            })
                                        })
                                    })
                                })]
                            }), (0, s.jsx)("div", {
                                className: "h-[1px] w-full self-stretch bg-[#e6e6e6]"
                            }), !(null == d ? void 0 : d.length) && !x && (0, s.jsx)(R._2, {
                                children: (0, s.jsxs)("div", {
                                    className: "  flex-shrink flex flex-col  items-center w-full self-stretch    overflow-hidden gap[16px] px-[32px] py-[16px] rounded-[6px] border border-solid border-[#e6e6e6]",
                                    children: [(0, s.jsxs)("svg", {
                                        width: 102,
                                        height: 101,
                                        viewBox: "0 0 102 101",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        className: "  w-[100.8px] h-[100.8px] ",
                                        preserveAspectRatio: "none",
                                        children: [(0, s.jsx)("path", {
                                            d: "M77.2988 19.7H23.6988C21.7988 19.7 20.2988 21.2 20.2988 23.1V56.7C20.2988 58.6 21.7988 60.0999 23.6988 60.0999H39.3988C38.3988 62 37.8988 64.0999 37.8988 66.5C37.8988 74.2 44.1988 80.4 51.7988 80.4C59.4988 80.4 65.6988 74.0999 65.6988 66.5C65.6988 64.2999 65.1988 62.1999 64.1988 60.0999H77.3988C79.2988 60.0999 80.7988 58.6 80.7988 56.7V23.1C80.7988 21.2 79.1988 19.7 77.2988 19.7ZM40.9988 57.5H24.5988L40.8988 41.2L44.6988 44.9C47.8988 48 53.0988 48 56.2988 44.9L60.0988 41.2L76.2988 57.5H62.4988C56.9988 50.7 46.5988 50.7 40.9988 57.5ZM22.7988 23.9L38.9988 39.4L22.7988 55.7V23.9ZM54.4988 43.0999C52.2988 45.1999 48.6988 45.1999 46.3988 43.0999L24.5988 22.2H76.3988L54.4988 43.0999ZM61.9988 39.4L78.1988 23.9V55.7L61.9988 39.4ZM51.7988 77.5999C45.4988 77.5999 40.3988 72.5999 40.3988 66.1999C40.3988 63.6999 41.1988 61.4 42.5988 59.4C47.0988 53.4 56.1988 53.4 60.6988 59.4C62.1988 61.4 62.8988 63.6999 62.8988 66.1999C63.0988 72.5999 58.0988 77.5999 51.7988 77.5999Z",
                                            fill: "#717171"
                                        }), (0, s.jsx)("path", {
                                            d: "M57.5988 60.2999C56.9988 59.8999 56.2988 59.9999 55.7988 60.5999L49.0988 69.4999L47.5988 67.9999C47.0988 67.4999 46.2988 67.4999 45.7988 67.9999C45.2988 68.4999 45.2988 69.2999 45.7988 69.7999L48.2988 72.2999C48.7988 72.7999 49.6988 72.7999 50.1988 72.1999L57.7988 62.0999C58.2988 61.3999 58.1988 60.6999 57.5988 60.2999Z",
                                            fill: "#00B2C8"
                                        })]
                                    }), (0, s.jsx)("p", {
                                        className: "  text-[14px]  text-center ",
                                        children: e("you_have_no_unread_notifications")
                                    })]
                                })
                            }), x && (0, s.jsx)(R._2, {
                                children: (0, s.jsxs)("div", {
                                    className: "w-full h-16 flex justify-center items-center",
                                    children: [" ", (0, s.jsxs)("div", {
                                        role: "status",
                                        children: [(0, s.jsxs)("svg", {
                                            "aria-hidden": "true",
                                            className: "w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600",
                                            viewBox: "0 0 100 101",
                                            fill: "none",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            children: [(0, s.jsx)("path", {
                                                d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
                                                fill: "currentColor"
                                            }), (0, s.jsx)("path", {
                                                d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
                                                fill: "currentFill"
                                            })]
                                        }), (0, s.jsx)("span", {
                                            className: "sr-only",
                                            children: e("loading")
                                        })]
                                    })]
                                })
                            }), null == d ? void 0 : d.map(t => (0, s.jsx)(R._2, {
                                onClick: e => {
                                    e.preventDefault()
                                },
                                children: (0, s.jsxs)("div", {
                                    className: "  flex-shrink flex flex-col  items-end self-stretch w-full  overflow-hidden gap-[8px] p-[24px] rounded-[6px] border border-solid border-[#e6e6e6]",
                                    children: [(0, s.jsxs)("div", {
                                        className: "flex flex-col  items-end self-stretch    gap-[8px] ",
                                        children: [(0, s.jsx)("p", {
                                            className: "self-stretch   font-[400] text-[14px] text-left ",
                                            children: t.title
                                        }), (0, s.jsx)("p", {
                                            className: "self-stretch    text-[12px] text-left ",
                                            children: (0, s.jsx)("span", {
                                                dangerouslySetInnerHTML: {
                                                    __html: t.body
                                                },
                                                className: "self-stretch    text-[12px]  text-right "
                                            })
                                        })]
                                    }), (0, s.jsxs)("div", {
                                        className: "flex justify-between items-center self-stretch   ",
                                        children: [(0, s.jsx)("p", {
                                            onClick: () => l ? null : p(t.id),
                                            className: "  text-[12px] underline cursor-pointer text-center ",
                                            children: e("read")
                                        }), (0, s.jsx)("p", {
                                            className: "  text-[12px]  text-center ",
                                            children: (0, Y.GP)((0, X.S)(t.date), "yyyy.MM.dd")
                                        })]
                                    })]
                                })
                            }, t.id))]
                        })
                    })]
                })
            };
            var Q = i(95060);
            let $ = () => {
                let e = (0, W.c3)("Metadata"),
                    [t, i] = (0, n.useState)(""),
                    [r, d] = (0, n.useState)(!1),
                    L = (0, u.usePathname)().split("/").filter((e, t) => 0 !== t),
                    [E, R] = (0, n.useState)(L),
                    M = [{
                        key: "item-0",
                        path: "/dashboard",
                        icon: m.A.src,
                        text: e("dashboard")
                    }, {
                        key: "item-1",
                        path: "/wallets/replenishment",
                        icon: f.A.src,
                        text: e("wallets"),
                        childs: [{
                            key: "item-10",
                            path: "/wallets/replenishment",
                            icon: y.A,
                            text: e("replenishment"),
                            description: ""
                        }, {
                            key: "item-9",
                            path: "/wallets/withdrawal",
                            icon: b.A,
                            text: e("withdrawal"),
                            description: ""
                        }]
                    }, {
                        key: "item-2",
                        path: "/investments/automatictrading",
                        icon: _.A.src,
                        text: e("investments"),
                        childs: [{
                            key: "item-14",
                            path: "/investments/activeplans",
                            icon: A.A,
                            text: e("active-plans"),
                            description: e("list_of_active_plans")
                        }, {
                            key: "item-11",
                            path: "/investments/automatictrading/dynamic",
                            icon: j.A,
                            text: e("automatic-trading"),
                            description: e("automated-trading-system")
                        }, {
                            key: "item-12",
                            path: "/investments/copytrading",
                            icon: k.A,
                            text: e("copy-trading"),
                            description: e("long-term-strategies")
                        }]
                    }, {
                        key: "item-3",
                        path: "/statistics/all",
                        icon: v.A.src,
                        text: e("statistics")
                    }, {
                        key: "item-4",
                        path: "/affiliate",
                        icon: g.A.src,
                        text: e("affiliate-program")
                    }, {
                        key: "item-5",
                        path: "/helpcenter/what-is-emvios",
                        icon: w.A.src,
                        text: e("help-hub")
                    }];

                function P(e) {
                    R(e);
                    for (let t = 0; t < M.length; t++) {
                        M[t].key === e.key && i(M[t].key), E && e.key === E.key && M[t].key === e.key && (R(), i(""));
                        let s = M[t].childs;
                        if (s)
                            for (let r = 0; r < s.length; r++) s[r] === e && i(M[t].key), E && s[r].key === E.key && e.key === M[t].key && (R(), i(""))
                    }
                }
                return (0, n.useEffect)(() => {
                    "undefined" != typeof document && (r ? document.body.style.overflow = "hidden" : document.body.style.overflow = "unset")
                }, [r]), (0, s.jsx)("div", {
                    className: h()(a().body, {
                        [a().active]: r
                    }),
                    children: (0, s.jsxs)("div", {
                        className: a().container + " _container",
                        children: [(0, s.jsx)("div", {
                            className: a().burger,
                            onClick: () => d(!r),
                            children: r ? (0, s.jsx)(o.default, {
                                src: l.A,
                                alt: "icon",
                                width: 24,
                                height: 24
                            }) : (0, s.jsx)(o.default, {
                                src: c.A,
                                alt: "icon",
                                width: 24,
                                height: 24
                            })
                        }), (0, s.jsx)("ul", {
                            className: a().nav_icons,
                            children: (0, s.jsx)(p.q, {})
                        }), (0, s.jsx)(Q.BreadcrumbAuth, {
                            header: !0
                        }), (0, s.jsxs)("ul", {
                            className: h()(a().nav_mobile, {
                                [a().active]: r
                            }),
                            children: [(0, s.jsx)(C.Accordion, {
                                type: "single",
                                collapsible: !0,
                                value: t,
                                onValueChange: i,
                                children: (0, s.jsx)("div", {
                                    className: h()(a().advantages),
                                    children: M.map((e, t) => e.childs ? (0, s.jsxs)(C.AccordionItem, {
                                        className: a().item,
                                        value: e.key,
                                        children: [(0, s.jsx)("div", {
                                            onClick: () => P(e),
                                            children: (0, s.jsx)(C.AccordionTrigger, {
                                                className: "pb-0 pt-0 pl-0 pr-0",
                                                children: (0, s.jsxs)("div", {
                                                    className: a().box,
                                                    children: [(0, s.jsx)(o.default, {
                                                        src: e.icon,
                                                        alt: "icon",
                                                        width: 24,
                                                        height: 24
                                                    }), (0, s.jsx)("a", {
                                                        className: a().text,
                                                        children: e.text
                                                    }), (0, s.jsx)(o.default, {
                                                        className: a().arrov,
                                                        src: N.A,
                                                        alt: "icon",
                                                        width: 14,
                                                        height: 8
                                                    })]
                                                })
                                            })
                                        }), (0, s.jsx)(C.AccordionContent, {
                                            className: a().content,
                                            children: e.childs && e.childs.map((e, t) => (0, s.jsxs)(H.N_, {
                                                href: e.path,
                                                className: h()(a().child, {
                                                    [a().active]: e === E
                                                }),
                                                onClick: () => {
                                                    P(e), d(!1)
                                                },
                                                children: [(0, s.jsx)(o.default, {
                                                    src: e.icon,
                                                    alt: "icon",
                                                    width: 24,
                                                    height: 24
                                                }), (0, s.jsx)("p", {
                                                    className: "text-[14px]",
                                                    children: e.text
                                                })]
                                            }, t))
                                        })]
                                    }, e.key) : (0, s.jsxs)(H.N_, {
                                        href: e.path,
                                        onClick: () => {
                                            P(e), d(!1)
                                        },
                                        className: h()(a().box, {
                                            [a().active]: e === E
                                        }),
                                        children: [(0, s.jsx)(o.default, {
                                            src: e.icon,
                                            alt: "icon",
                                            width: 24,
                                            height: 24
                                        }), (0, s.jsx)("span", {
                                            className: a().text,
                                            children: e.text
                                        })]
                                    }, e.key))
                                })
                            }), (0, s.jsxs)("div", {
                                className: a().nav_mobile__icons,
                                children: [(0, s.jsx)(x.A, {}), (0, s.jsx)(p.q, {})]
                            })]
                        }), (0, s.jsxs)("div", {
                            className: a().auth,
                            id: "tour-settings",
                            children: [(0, s.jsx)(S.SessionProvider, {
                                children: (0, s.jsx)(D, {})
                            }), (0, s.jsx)(K, {}), (0, s.jsx)("div", {
                                className: a().lang,
                                children: (0, s.jsx)(x.A, {})
                            })]
                        })]
                    })
                })
            }
        },
        71028: (e, t, i) => {
            "use strict";
            i.d(t, {
                A: () => a
            });
            var s = i(94052),
                r = i(34953);
            let a = function() {
                let {
                    data: e
                } = (0, r.Ay)("/api/user", s.A);
                return e
            }
        },
        86082: (e, t, i) => {
            "use strict";
            i.d(t, {
                A: () => s
            });
            let s = {
                src: "/_next/static/media/active-plans.57584896.svg",
                height: 42,
                width: 42,
                blurWidth: 0,
                blurHeight: 0
            }
        },
        95060: (e, t, i) => {
            "use strict";
            i.d(t, {
                BreadcrumbAuth: () => x
            });
            var s = i(95155),
                r = i(98057),
                a = i.n(r),
                n = i(35695),
                l = i(95063),
                c = i(60388),
                o = i(36396),
                d = i(17652),
                h = i(46453);
            let x = e => {
                let {
                    header: t = !1
                } = e, i = (0, d.c3)("Dashboard"), r = (0, h.Ym)(), x = (0, n.usePathname)(), p = x.split("/").filter((e, t) => 0 !== t && e !== r);
                return (0, s.jsx)("div", {
                    className: t ? a().breadcrumbHeader : a().breadcrumb,
                    children: (0, s.jsx)(l.Qp, {
                        children: (0, s.jsxs)(l.AB, {
                            children: [(0, s.jsx)(l.J5, {
                                children: (0, s.jsx)(l.w1, {
                                    children: (0, s.jsx)(c.N_, {
                                        href: "",
                                        children: i("personal_account")
                                    })
                                })
                            }), p.map((e, t) => {
                                let r = o.v.find(t => x.includes(t.path) && t.path === e);
                                return (0, s.jsxs)("span", {
                                    className: "flex gap-1.5 items-center",
                                    children: [(0, s.jsx)(l.tH, {}), p.length - 1 === t ? (0, s.jsx)(l.J5, {
                                        children: (0, s.jsx)("div", {
                                            className: "font-[400] text-[#000]",
                                            children: (0, s.jsx)(l.tJ, {
                                                className: "flex gap-[4px] items-center capitalize",
                                                children: r ? i(r.text.toLowerCase()) : "changepassword" == e ? i("change_password") : i(e.toLowerCase())
                                            })
                                        })
                                    }) : (0, s.jsx)(l.J5, {
                                        children: (0, s.jsx)(l.w1, {
                                            children: (0, s.jsx)(c.N_, {
                                                className: "capitalize",
                                                href: r ? "/".concat(r.path) : "/".concat(e),
                                                children: r ? i(r.text.toLowerCase()) : "changepassword" == e ? i("change_password") : i(e.toLowerCase())
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
        95063: (e, t, i) => {
            "use strict";
            i.d(t, {
                AB: () => d,
                J5: () => h,
                Qp: () => o,
                tH: () => u,
                tJ: () => p,
                w1: () => x
            });
            var s = i(95155),
                r = i(12115),
                a = i(99708),
                n = i(13052),
                l = (i(5623), i(29300)),
                c = i.n(l);
            let o = r.forwardRef((e, t) => {
                let { ...i
                } = e;
                return (0, s.jsx)("nav", {
                    ref: t,
                    "aria-label": "breadcrumb",
                    ...i
                })
            });
            o.displayName = "Breadcrumb";
            let d = r.forwardRef((e, t) => {
                let {
                    className: i,
                    ...r
                } = e;
                return (0, s.jsx)("ol", {
                    ref: t,
                    className: c()("flex flex-wrap items-center gap-1.5 break-words text-sm sm:gap-2.5 justify-center", i),
                    ...r
                })
            });
            d.displayName = "BreadcrumbList";
            let h = r.forwardRef((e, t) => {
                let {
                    className: i,
                    ...r
                } = e;
                return (0, s.jsx)("li", {
                    ref: t,
                    className: c()("inline-flex items-center gap-1.5", i),
                    ...r
                })
            });
            h.displayName = "BreadcrumbItem";
            let x = r.forwardRef((e, t) => {
                let {
                    asChild: i,
                    className: r,
                    ...n
                } = e, l = i ? a.DX : "span";
                return (0, s.jsx)(l, {
                    ref: t,
                    className: c()("transition-colors hover:text-foreground", r),
                    ...n
                })
            });
            x.displayName = "BreadcrumbLink";
            let p = r.forwardRef((e, t) => {
                let {
                    className: i,
                    ...r
                } = e;
                return (0, s.jsx)("span", {
                    ref: t,
                    role: "link",
                    "aria-disabled": "true",
                    "aria-current": "page",
                    className: i,
                    ...r
                })
            });
            p.displayName = "BreadcrumbPage";
            let u = e => {
                let {
                    children: t,
                    className: i,
                    ...r
                } = e;
                return (0, s.jsx)("li", {
                    role: "presentation",
                    "aria-hidden": "true",
                    className: c()("[&>svg]:size-3.5", i),
                    ...r,
                    children: null != t ? t : (0, s.jsx)(n.A, {})
                })
            };
            u.displayName = "BreadcrumbSeparator"
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
        e.O(0, [9149, 3700, 6453, 3063, 6874, 4953, 1755, 5694, 7477, 1051, 2441, 5492, 2108, 3336, 8441, 1684, 7358], () => t(64021)), _N_E = e.O()
    }
]);