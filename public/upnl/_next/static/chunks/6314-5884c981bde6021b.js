(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6314], {
        4884: (e, t, a) => {
            "use strict";
            a.d(t, {
                bL: () => y,
                zi: () => w
            });
            var s = a(12115),
                i = a(85185),
                c = a(6101),
                r = a(46081),
                n = a(5845),
                l = a(45503),
                d = a(11275),
                o = a(63655),
                u = a(95155),
                x = "Switch",
                [m, p] = (0, r.A)(x),
                [_, f] = m(x),
                h = s.forwardRef((e, t) => {
                    let {
                        __scopeSwitch: a,
                        name: r,
                        checked: l,
                        defaultChecked: d,
                        required: x,
                        disabled: m,
                        value: p = "on",
                        onCheckedChange: f,
                        form: h,
                        ...b
                    } = e, [g, y] = s.useState(null), w = (0, c.s)(t, e => y(e)), N = s.useRef(!1), k = !g || h || !!g.closest("form"), [C = !1, S] = (0, n.i)({
                        prop: l,
                        defaultProp: d,
                        onChange: f
                    });
                    return (0, u.jsxs)(_, {
                        scope: a,
                        checked: C,
                        disabled: m,
                        children: [(0, u.jsx)(o.sG.button, {
                            type: "button",
                            role: "switch",
                            "aria-checked": C,
                            "aria-required": x,
                            "data-state": j(C),
                            "data-disabled": m ? "" : void 0,
                            disabled: m,
                            value: p,
                            ...b,
                            ref: w,
                            onClick: (0, i.m)(e.onClick, e => {
                                S(e => !e), k && (N.current = e.isPropagationStopped(), N.current || e.stopPropagation())
                            })
                        }), k && (0, u.jsx)(v, {
                            control: g,
                            bubbles: !N.current,
                            name: r,
                            value: p,
                            checked: C,
                            required: x,
                            disabled: m,
                            form: h,
                            style: {
                                transform: "translateX(-100%)"
                            }
                        })]
                    })
                });
            h.displayName = x;
            var b = "SwitchThumb",
                g = s.forwardRef((e, t) => {
                    let {
                        __scopeSwitch: a,
                        ...s
                    } = e, i = f(b, a);
                    return (0, u.jsx)(o.sG.span, {
                        "data-state": j(i.checked),
                        "data-disabled": i.disabled ? "" : void 0,
                        ...s,
                        ref: t
                    })
                });
            g.displayName = b;
            var v = e => {
                let {
                    control: t,
                    checked: a,
                    bubbles: i = !0,
                    ...c
                } = e, r = s.useRef(null), n = (0, l.Z)(a), o = (0, d.X)(t);
                return s.useEffect(() => {
                    let e = r.current,
                        t = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "checked").set;
                    if (n !== a && t) {
                        let s = new Event("click", {
                            bubbles: i
                        });
                        t.call(e, a), e.dispatchEvent(s)
                    }
                }, [n, a, i]), (0, u.jsx)("input", {
                    type: "checkbox",
                    "aria-hidden": !0,
                    defaultChecked: a,
                    ...c,
                    tabIndex: -1,
                    ref: r,
                    style: { ...e.style,
                        ...o,
                        position: "absolute",
                        pointerEvents: "none",
                        opacity: 0,
                        margin: 0
                    }
                })
            };

            function j(e) {
                return e ? "checked" : "unchecked"
            }
            var y = h,
                w = g
        },
        12588: (e, t, a) => {
            "use strict";
            a.d(t, {
                d: () => l
            });
            var s = a(95155),
                i = a(12115),
                c = a(4884),
                r = a(29300),
                n = a.n(r);
            let l = i.forwardRef((e, t) => {
                let {
                    border: a = "border-[#00b2c8]",
                    bg: i = "data-[state=checked]:bg-[#00b2c8]",
                    bgUnchecked: r = "data-[state=unchecked]:bg-[#e4fafc]",
                    bgChecked: l = "data-[state=checked]:bg-[#e4fafc]",
                    className: d,
                    ...o
                } = e;
                return (0, s.jsx)(c.bL, {
                    className: n()("peer inline-flex h-[20px] w-[40px] shrink-0 cursor-pointer items-center rounded-[3px] border-[1px] border-[#cbcbcb] border-solid transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=unchecked]:bg-[#fff] ".concat(l), d),
                    ...o,
                    ref: t,
                    children: (0, s.jsx)(c.zi, {
                        className: n()("pointer-events-none block h-[20px] w-[20px] rounded-[3px] bg-[background] shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0   border-solid border-[1px] ".concat(a, " ").concat(i, " ").concat(r, " "))
                    })
                })
            });
            l.displayName = c.bL.displayName
        },
        16301: (e, t, a) => {
            Promise.resolve().then(a.bind(a, 46096)), Promise.resolve().then(a.bind(a, 80740))
        },
        17128: (e, t, a) => {
            "use strict";
            a.d(t, {
                w: () => d
            });
            var s = a(95155),
                i = a(89953),
                c = a.n(i),
                r = a(12588),
                n = a(92338),
                l = a(17652);
            let d = e => {
                let {
                    compouding: t,
                    setCompouding: a,
                    reactivation: i,
                    setReactivation: d,
                    reactivationDisabled: o,
                    colorSheme: u,
                    blockStyle: x
                } = e, m = (0, l.c3)("Dashboard");
                return (0, s.jsxs)("div", {
                    className: x || c().switch,
                    children: [(0, s.jsxs)("div", {
                        className: "flex items-center gap-[10px] relative",
                        children: [(0, s.jsx)("p", {
                            className: "text-[16px] text-center",
                            children: m("compounding")
                        }), (0, s.jsx)(r.d, {
                            border: u && u.border,
                            bg: u && u.bg,
                            bgUnchecked: u && u.bgUnchecked,
                            bgChecked: u && u.bgChecked,
                            checked: t,
                            onCheckedChange: () => a(!t)
                        }), (0, s.jsx)(n.r, {
                            text: m("adds_profit_to_the_invested_amount_increasing_profits_for_subsequent_days_can_be_changed_at_any_time")
                        })]
                    }), !o && (0, s.jsxs)("div", {
                        className: "flex items-center gap-[10px] relative mr-[20px]",
                        children: [(0, s.jsx)("p", {
                            className: "text-[16px] text-center",
                            children: m("reactivation")
                        }), (0, s.jsx)(r.d, {
                            border: u && u.border,
                            bg: u && u.bg,
                            bgUnchecked: u && u.bgUnchecked,
                            bgChecked: u && u.bgChecked,
                            checked: i,
                            onCheckedChange: () => d(!i)
                        }), (0, s.jsx)(n.r, {
                            text: m("automatically_reactivates_the_plan_for_the_next_term_as_a_bonus_you_get_02_to_your_daily_profit_cannot_be_disabled_once_activated")
                        })]
                    }), o && (0, s.jsxs)("div", {
                        className: "flex items-center gap-[10px] relative mr-[20px]",
                        children: [(0, s.jsx)("p", {
                            className: "text-[16px] text-center",
                            children: m("manual_deactivation")
                        }), (0, s.jsx)(n.r, {
                            text: m("the_investment_plan_can_be_deactivated_manually_after_the_end_of_the_lock_in_period_until_deactivation_profit_continues_to_accrue_daily")
                        })]
                    })]
                })
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
        22258: (e, t, a) => {
            "use strict";
            a.d(t, {
                m: () => d
            });
            var s = a(95155),
                i = a(89953),
                c = a.n(i),
                r = a(29300),
                n = a.n(r),
                l = a(17652);
            let d = e => {
                let {
                    plans: t,
                    type: a,
                    setAmount: i,
                    setPlan: r,
                    days: d,
                    cross: o
                } = e, u = (0, l.c3)("Dashboard");
                return (0, s.jsx)("div", {
                    className: c().plan__list,
                    children: null == t ? void 0 : t.map((e, t) => (0, s.jsxs)("div", {
                        onClick: () => {
                            r(e), i(e.minsum)
                        },
                        className: n()(c().plan__box, {
                            [c().active]: e.days === d
                        }),
                        children: [(0, s.jsxs)("div", {
                            className: "flex justify-center flex-col ",
                            children: [(0, s.jsxs)("p", {
                                className: " text-[#000] text-[20px] font-[400]",
                                children: ["static" === a || o ? e.percentMin : "".concat(e.percentMin, "-").concat(e.percentMax), "%"]
                            }), (0, s.jsxs)("p", {
                                className: "text-[#303030] pl-[2px] font-[300] text-[16px]",
                                children: [" ", u("daily").toUpperCase()]
                            })]
                        }), (0, s.jsxs)("div", {
                            className: "flex flex-col justify-center items-end",
                            children: [(0, s.jsxs)("p", {
                                className: "text-[14px]",
                                children: [e.days, " ", u("days")]
                            }), (0, s.jsxs)("p", {
                                className: "text-[12px]",
                                children: ["$", "static" === a ? e.minsum : "".concat(e.minsum, "-").concat(e.maxsum)]
                            })]
                        })]
                    }, t))
                })
            }
        },
        71068: (e, t, a) => {
            "use strict";
            a.d(t, {
                A: () => s
            });
            let s = {
                src: "/_next/static/media/triangle_blue.6e88fabd.svg",
                height: 25,
                width: 25,
                blurWidth: 0,
                blurHeight: 0
            }
        },
        80740: (e, t, a) => {
            "use strict";
            a.d(t, {
                default: () => M
            });
            var s = a(95155),
                i = a(21930),
                c = a.n(i),
                r = a(29300),
                n = a.n(r),
                l = a(66766),
                d = a(12115),
                o = a(71068),
                u = a(10515),
                x = a(10947),
                m = a(33565),
                p = a(22258),
                _ = a(21518),
                f = a(15739),
                h = a(36612),
                b = a(17128),
                g = a(28756),
                v = a(41564),
                j = a(17652),
                y = a(84084),
                w = a(45567),
                N = a(7531),
                k = a(98648),
                C = a(84567),
                S = a(5770);

            function M(e) {
                var t, a;
                let {
                    plans: i,
                    type: r
                } = e, M = (0, C.useTurnstile)(), R = (0, j.c3)("Errors"), A = (0, j.c3)("Dashboard"), {
                    currency: E,
                    setCurrency: L
                } = (0, h.G)(), P = (0, f.A)(), D = null == P ? void 0 : P.find(e => e.abr === E), [I, U] = (0, d.useState)(!1), [O, G] = (0, d.useState)(!1), [$, T] = (0, d.useState)(i[0]), [X, Z] = (0, d.useState)("currency"), [q, H] = (0, d.useState)(i[0].minsum), [J, B] = (0, d.useState)(""), [F, V] = (0, d.useState)(!1), [z, Q] = (0, d.useState)(!1), W = .2 * !!z, K = ($.percentMin + $.percentMax) / 2;
                async function Y() {
                    try {
                        if (G(!0), (0, v.A)({
                                currency: E,
                                amount: q,
                                balance: D.usdt_sum || 0,
                                min: $.minsum,
                                max: $.maxsum,
                                t: R
                            })) {
                            let {
                                status: e,
                                err: t
                            } = await (0, y.A)({
                                paysys: E,
                                amount: Number(q) / ((null == D ? void 0 : D.price) || 1),
                                planId: $.id,
                                compounding: F,
                                reactivation: z,
                                captcha: J
                            });
                            if (200 !== e) return void(0, N.oR)({
                                description: t,
                                variant: "destructive"
                            });
                            (0, w.j)("/api/wallets"), (0, N.oR)({
                                title: A("success"),
                                description: A("the_plan_has_been_activated")
                            })
                        }
                    } catch (e) {
                        console.log(e), (0, N.oR)({
                            title: A("error"),
                            description: A("something_went_wrong"),
                            variant: "destructive"
                        })
                    } finally {
                        G(!1), M.reset(), B("")
                    }
                }
                return (0, d.useEffect)(() => {
                    if (q) {
                        let e = i.find(e => e.minsum <= Number(q) && e.maxsum >= Number(q));
                        e && T(e)
                    }
                }, [q]), (0, d.useEffect)(() => {
                    "static" === r && "USDT" !== E && L("USDT")
                }, [r]), (0, s.jsxs)("div", {
                    className: c().main,
                    children: [(0, s.jsxs)("div", {
                        className: c().plans,
                        children: [(0, s.jsx)(p.m, {
                            plans: i,
                            type: r,
                            setAmount: e => {
                                H(e)
                            },
                            days: $.days,
                            setPlan: T
                        }), (0, s.jsxs)("div", {
                            className: c().currency,
                            children: [(0, s.jsx)("h5", {
                                className: "flex justify-between text-[16px] font-[400] translate-y-[10px]",
                                children: A("currency_and_investment_amount")
                            }), (0, s.jsxs)("div", {
                                className: c().block,
                                children: [(0, s.jsxs)("div", {
                                    className: "flex flex-col md:max-w-[200px] w-full",
                                    children: [(0, s.jsxs)("div", {
                                        className: "flex justify-between",
                                        children: [(0, s.jsx)("p", {
                                            className: "text-[10px] uppercase text-[rgb(96,94,94)]",
                                            children: A("currency")
                                        }), (0, s.jsxs)("p", {
                                            className: "text-[10px] uppercase text-[rgb(96,94,94)]",
                                            children: [" ", (null == P || null == (t = P.find(e => (null == e ? void 0 : e.abr) === E)) ? void 0 : t.sum) || 0, " ", E.toLowerCase()]
                                        })]
                                    }), (0, s.jsxs)(x.AM, {
                                        open: I,
                                        onOpenChange: U,
                                        children: [(0, s.jsx)(x.Wv, {
                                            asChild: !0,
                                            children: (0, s.jsxs)("div", {
                                                onClick: () => U(!I),
                                                className: n()(c().counter, {
                                                    [c().active]: "dynamic" === r && I
                                                }),
                                                children: [(0, s.jsx)("div", {
                                                    className: "flex flex-col justify-between gap-[16px] self-stretch",
                                                    children: (0, s.jsx)("div", {
                                                        className: "flex flex-col justify-center",
                                                        children: (0, s.jsxs)("div", {
                                                            className: "flex  items-center    gap-[16px]",
                                                            children: [E && (0, s.jsx)(l.default, {
                                                                src: "/wallets/".concat(E.toLowerCase(), ".png"),
                                                                width: 25,
                                                                height: 25,
                                                                alt: "icon"
                                                            }), (0, s.jsx)("div", {
                                                                className: "flex flex-col justify-center items-center",
                                                                children: (0, s.jsxs)("p", {
                                                                    className: "md:max-w-[100px]   max-w-[200px]  text-[14px] text-nowrap truncate whitespace-nowrap overflow-hidden text-ellipsis",
                                                                    children: [P && E ? null == P || null == (a = P.find(e => (null == e ? void 0 : e.abr) === E)) ? void 0 : a.name : "", !E && A("select_currency")]
                                                                })
                                                            })]
                                                        })
                                                    })
                                                }), "dynamic" === r && (0, s.jsx)("div", {
                                                    className: "flex flex-col justify-between items-end self-stretch",
                                                    children: (0, s.jsx)("div", {
                                                        className: c().arrow,
                                                        children: (0, s.jsx)(l.default, {
                                                            src: o.A,
                                                            width: 25,
                                                            height: 25,
                                                            alt: "icon",
                                                            className: "w-[25px] h-[25px] flex-shrink-0"
                                                        })
                                                    })
                                                })]
                                            })
                                        }), P && "dynamic" === r && (0, s.jsx)(x.hl, {
                                            className: "w-[308px] rounded-md bg-white border-solid border-[0.5px] border-[#cecece]",
                                            children: (0, s.jsxs)(u.uB, {
                                                children: [(0, s.jsx)(u.G7, {
                                                    placeholder: A("search_coins")
                                                }), (0, s.jsxs)(u.oI, {
                                                    children: [(0, s.jsx)(u.xL, {
                                                        children: A("no_coins_found")
                                                    }), (0, s.jsx)(u.L$, {
                                                        children: null == P ? void 0 : P.map(e => (0, s.jsx)(u.h_, {
                                                            value: e.abr,
                                                            onSelect: t => {
                                                                L(e.abr), U(!1)
                                                            },
                                                            children: (0, s.jsxs)("div", {
                                                                className: "flex items-center gap-[16px]",
                                                                children: [(0, s.jsx)(l.default, {
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
                                }), (0, s.jsxs)("div", {
                                    className: "flex flex-col flex-grow  max-w-full",
                                    children: [(0, s.jsxs)("div", {
                                        className: "flex justify-between",
                                        children: [(0, s.jsxs)("p", {
                                            className: "text-[10px] uppercase text-[#605e5e]",
                                            children: [A("amount"), ": $", "static" === r ? $.minsum : "".concat($.minsum, "-").concat($.maxsum)]
                                        }), "static" !== r && (0, s.jsx)("p", {
                                            className: "text-[10px] uppercase text-[#00b2c8] font-bold cursor-pointer",
                                            onClick: () => {
                                                H(P[P.findIndex(e => e.abr === E)].sum * ((null == D ? void 0 : D.price) || 1) || "0")
                                            },
                                            children: A("use_max")
                                        })]
                                    }), (0, s.jsxs)("div", {
                                        className: "flex flex-row flex-grow border border-solid bg-neutral-50 rounded-[6px] border-[#cecece] overflow-hidden ",
                                        children: [(0, s.jsxs)("div", {
                                            className: n()("flex justify-center items-center flex-grow gap-[8px] px-[10px]  min-w-[50%]", {
                                                "cursor-not-allowed": "static" === r
                                            }),
                                            children: [(0, s.jsx)("input", {
                                                disabled: "static" === r,
                                                value: q,
                                                onChange: e => {
                                                    if (/^[^.]*[.,](?![.,])$/.test(e.target.value)) return void H(e.target.value.replace(",", "."));
                                                    /^\d*(?:[.,]\d+)?$/.test(e.target.value) && H(e.target.value)
                                                },
                                                className: n()("flex text-center text-[14px] w-full max-w-[120px] items-center justify-center bg-[#fafafa] ", {
                                                    "cursor-not-allowed": "static" === r
                                                })
                                            }), "dynamic" == r && (0, s.jsx)("div", {
                                                className: "flex justify-end items-center gap-[10px]",
                                                children: (0, s.jsx)("p", {
                                                    className: "text-[14px]",
                                                    children: "$"
                                                })
                                            })]
                                        }), "dynamic" == r && (0, s.jsxs)("div", {
                                            className: "flex  justify-center items-center flex-grow gap-[8px] px-[10px] border-l-[1px] border-[#cecece] border-solid w-full sm:w-[170px] cursor-not-allowed",
                                            children: [(0, s.jsx)("p", {
                                                className: "truncate whitespace-nowrap overflow-hidden text-ellipsis text-[14px]",
                                                children: q ? (Number(q) / ((null == D ? void 0 : D.price) || 1)).toFixed(8) : q
                                            }), (0, s.jsx)("div", {
                                                className: "flex justify-end items-center gap-[10px]",
                                                children: (0, s.jsx)("p", {
                                                    className: "text-[14px]",
                                                    children: E
                                                })
                                            })]
                                        })]
                                    })]
                                })]
                            }), (0, s.jsx)(_.X, {
                                sm: !0,
                                type: r,
                                amount: String(q),
                                setAmount: H,
                                plan: $
                            }), (0, s.jsx)(b.w, {
                                reactivationDisabled: "static" === r,
                                compouding: F,
                                setCompouding: V,
                                reactivation: z,
                                setReactivation: Q
                            })]
                        })]
                    }), (0, s.jsxs)("div", {
                        className: "flex flex-col gap-[24px] flex-grow",
                        children: [(0, s.jsxs)("div", {
                            className: c().profit,
                            children: [(0, s.jsxs)("h5", {
                                className: c().h,
                                children: [A("profit_calculation"), (0, s.jsxs)("div", {
                                    className: "overflow-hidden border-[1px] border-solid border-[#e6e6e6] rounded-[6px] flex items-center h-[40px] flex-shrink-0 flex-grow-0",
                                    children: [(0, s.jsx)("p", {
                                        onClick: () => {
                                            Z("currency")
                                        },
                                        className: n()(c().tab, {
                                            [c().active]: "currency" === X
                                        }),
                                        children: E
                                    }), "dynamic" === r && (0, s.jsx)("p", {
                                        onClick: () => {
                                            Z("usd")
                                        },
                                        className: n()(c().tab, {
                                            [c().active]: "usd" === X
                                        }),
                                        children: "$ USD"
                                    }), (0, s.jsxs)("p", {
                                        onClick: () => {
                                            Z("interest")
                                        },
                                        className: n()(c().tab, {
                                            [c().active]: "interest" === X
                                        }),
                                        children: [(0, s.jsx)("span", {
                                            className: "",
                                            children: "% "
                                        }), " ", A("interest").toUpperCase()]
                                    })]
                                })]
                            }), (0, s.jsx)(g.f, {
                                profit: X,
                                type: r,
                                amount: "currency" !== X ? String(q) : q ? (Number(q) / ((null == D ? void 0 : D.price) || 1)).toFixed(8) : String(q),
                                percent: K,
                                compouding: F,
                                reactivationValue: W,
                                days: $.days,
                                symbol: "usd" === X ? "$" : ""
                            })]
                        }), (0, s.jsx)(S.A, {
                            setCaptcha: B
                        }), (0, s.jsx)("div", {
                            className: c().button,
                            children: (0, s.jsx)(k.A, {
                                title: A("confirm_your_investment_plan"),
                                description: A("confirm_investment_plan_1", {
                                    name: $.name,
                                    days: $.days,
                                    type: "static" === r ? $.percentMin : "".concat($.percentMin, "-").concat($.percentMax),
                                    amount: q || 0,
                                    currency: E
                                }),
                                cancelText: A("cancel"),
                                actionText: A("confirm"),
                                onConfirm: Y,
                                children: (0, s.jsx)(m.h, {
                                    disabled: O || !J,
                                    text: O || !J ? A("loading") : A("activate")
                                })
                            })
                        })]
                    })]
                })
            }
        },
        82284: (e, t, a) => {
            "use strict";
            a.d(t, {
                N: () => l
            });
            var s = a(12115),
                i = a(46081),
                c = a(6101),
                r = a(99708),
                n = a(95155);

            function l(e) {
                let t = e + "CollectionProvider",
                    [a, l] = (0, i.A)(t),
                    [d, o] = a(t, {
                        collectionRef: {
                            current: null
                        },
                        itemMap: new Map
                    }),
                    u = e => {
                        let {
                            scope: t,
                            children: a
                        } = e, i = s.useRef(null), c = s.useRef(new Map).current;
                        return (0, n.jsx)(d, {
                            scope: t,
                            itemMap: c,
                            collectionRef: i,
                            children: a
                        })
                    };
                u.displayName = t;
                let x = e + "CollectionSlot",
                    m = s.forwardRef((e, t) => {
                        let {
                            scope: a,
                            children: s
                        } = e, i = o(x, a), l = (0, c.s)(t, i.collectionRef);
                        return (0, n.jsx)(r.DX, {
                            ref: l,
                            children: s
                        })
                    });
                m.displayName = x;
                let p = e + "CollectionItemSlot",
                    _ = "data-radix-collection-item",
                    f = s.forwardRef((e, t) => {
                        let {
                            scope: a,
                            children: i,
                            ...l
                        } = e, d = s.useRef(null), u = (0, c.s)(t, d), x = o(p, a);
                        return s.useEffect(() => (x.itemMap.set(d, {
                            ref: d,
                            ...l
                        }), () => void x.itemMap.delete(d))), (0, n.jsx)(r.DX, { ...{
                                [_]: ""
                            },
                            ref: u,
                            children: i
                        })
                    });
                return f.displayName = p, [{
                    Provider: u,
                    Slot: m,
                    ItemSlot: f
                }, function(t) {
                    let a = o(e + "CollectionConsumer", t);
                    return s.useCallback(() => {
                        let e = a.collectionRef.current;
                        if (!e) return [];
                        let t = Array.from(e.querySelectorAll("[".concat(_, "]")));
                        return Array.from(a.itemMap.values()).sort((e, a) => t.indexOf(e.ref.current) - t.indexOf(a.ref.current))
                    }, [a.collectionRef, a.itemMap])
                }, l]
            }
        },
        94315: (e, t, a) => {
            "use strict";
            a.d(t, {
                jH: () => c
            });
            var s = a(12115);
            a(95155);
            var i = s.createContext(void 0);

            function c(e) {
                let t = s.useContext(i);
                return e || t || "ltr"
            }
        }
    }
]);