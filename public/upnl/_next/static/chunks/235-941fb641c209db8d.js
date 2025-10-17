(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [235], {
        235: (e, t, s) => {
            "use strict";
            s.d(t, {
                default: () => Y
            });
            var a = s(95155),
                r = s(72740),
                l = s.n(r),
                i = s(33565),
                n = s(60388),
                c = s(29300),
                d = s.n(c),
                o = s(66766),
                x = s(15549),
                p = s(81260),
                h = s(18872),
                u = s(95472),
                m = s(5285),
                f = s(47329),
                b = s(12588),
                j = s(57793),
                _ = s(57062),
                v = s(90042),
                g = s(13328),
                y = s(68119),
                N = s(12115),
                w = s(94052),
                A = s(34953);
            let k = function(e) {
                let {
                    id: t,
                    page: s,
                    shouldFetch: a = !0
                } = e, {
                    data: r,
                    isLoading: l
                } = (0, A.Ay)(a ? "/api/transactions/plan?id=".concat(t, "&page=").concat(s) : null, w.A, {
                    revalidateOnFocus: !1,
                    revalidateOnReconnect: !1
                });
                return {
                    data: r,
                    isLoading: l
                }
            };
            var S = s(43511),
                T = s(2296),
                C = s(90793),
                M = s(17652);
            let R = {
                Income: v.A,
                Reinvest: v.A
            };

            function D(e) {
                let {
                    id: t
                } = e, s = (0, M.c3)("Dashboard"), [r, i] = (0, N.useState)(1), {
                    data: n,
                    isLoading: c
                } = k({
                    id: t.toString(),
                    page: r - 1
                }), d = e => {
                    i(e)
                }, x = {
                    Income: s("profits"),
                    Reinvest: s("reinvestment")
                };
                return n && 0 === n.length ? (0, a.jsxs)(g.XI, {
                    children: [(0, a.jsx)(g.r6, {
                        children: !c && 1 !== r && (0, a.jsxs)("div", {
                            className: l().button_border,
                            children: [(0, a.jsx)(y.B, {
                                onClick: () => d(r - 1),
                                disabled: 1 === r,
                                text: s("prev")
                            }), (0, a.jsx)(y.B, {
                                onClick: () => d(r + 1),
                                text: s("next")
                            })]
                        })
                    }), (0, a.jsx)(g.A0, {
                        children: (0, a.jsxs)(g.Hj, {
                            children: [(0, a.jsx)(g.nd, {
                                children: s("date")
                            }), (0, a.jsx)(g.nd, {
                                children: s("type")
                            }), (0, a.jsx)(g.nd, {
                                children: s("currency")
                            }), (0, a.jsx)(g.nd, {
                                children: s("percent")
                            }), (0, a.jsx)(g.nd, {
                                children: s("amount")
                            })]
                        })
                    }), (0, a.jsx)(g.BF, {
                        children: (0, a.jsx)(g.Hj, {
                            className: l().tablerow,
                            children: (0, a.jsxs)(g.nA, {
                                colSpan: 5,
                                children: [" ", s("no_available_data"), " "]
                            })
                        })
                    })]
                }) : (0, a.jsxs)(g.XI, {
                    children: [(0, a.jsx)(g.r6, {
                        children: !c && (0, a.jsxs)("div", {
                            className: l().button_border,
                            children: [(0, a.jsx)(y.B, {
                                onClick: () => d(r - 1),
                                disabled: 1 === r,
                                text: s("prev")
                            }), (0, a.jsx)(y.B, {
                                onClick: () => d(r + 1),
                                text: s("next")
                            })]
                        })
                    }), (0, a.jsx)(g.A0, {
                        children: (0, a.jsxs)(g.Hj, {
                            children: [(0, a.jsx)(g.nd, {
                                children: s("date")
                            }), (0, a.jsx)(g.nd, {
                                children: s("type")
                            }), (0, a.jsx)(g.nd, {
                                children: s("currency")
                            }), (0, a.jsx)(g.nd, {
                                children: s("percent")
                            }), (0, a.jsx)(g.nd, {
                                children: s("amount")
                            })]
                        })
                    }), (0, a.jsxs)(g.BF, {
                        children: [c && (0, a.jsx)("tr", {
                            children: (0, a.jsxs)("td", {
                                colSpan: 6,
                                children: [" ", (0, a.jsx)("div", {
                                    className: "w-full  flex justify-center items-center",
                                    children: (0, a.jsx)(S.cq, {
                                        color: ["#00B2C8", "#E4FAFC"],
                                        size: "large"
                                    })
                                })]
                            })
                        }), null == n ? void 0 : n.map((e, t) => (0, a.jsxs)(g.Hj, {
                            className: l().tablerow,
                            children: [(0, a.jsx)(g.nA, {
                                children: (0, T.GP)((0, C.S)(e.date), "yyyy-MM-dd HH:mm:ss")
                            }), (0, a.jsxs)(g.nA, {
                                children: [" ", (0, a.jsxs)("div", {
                                    className: "flex justify-center w-fit mx-auto flex-shrink-0 items-center gap-[8px] px-[8px] rounded-[4px] border-solid border border-[#e6e6e6]",
                                    children: [(0, a.jsx)(o.default, {
                                        src: R[e.type],
                                        width: 14,
                                        height: 14,
                                        style: {
                                            width: "14px",
                                            height: "14px"
                                        },
                                        alt: "icon"
                                    }), (0, a.jsx)("p", {
                                        className: "text-[10px]",
                                        children: x[e.type]
                                    })]
                                })]
                            }), (0, a.jsx)(g.nA, {
                                children: (0, a.jsx)("div", {
                                    className: "flex items-center justify-center",
                                    children: (0, a.jsx)(o.default, {
                                        src: "/wallets/".concat(e.paysys.toLowerCase(), ".png"),
                                        width: 20,
                                        height: 20,
                                        alt: "icon"
                                    })
                                })
                            }), (0, a.jsx)(g.nA, {
                                children: e.percent
                            }), (0, a.jsx)(g.nA, {
                                children: e.sum
                            })]
                        }, t))]
                    })]
                })
            }
            var I = s(47864),
                E = s(34477);
            let F = (0, E.createServerReference)("7f17f2ebb4552500dc6843a5d773c1eb6ccd930f98", E.callServer, void 0, E.findSourceMapURL, "default");
            var H = s(45567),
                O = s(7531),
                B = s(98648);
            let L = (0, E.createServerReference)("7f75762b2e46b93b2ef149b504e5cc28faf50d6955", E.callServer, void 0, E.findSourceMapURL, "default");
            var U = s(94794);

            function W(e) {
                let {
                    deposit: t
                } = e, [s, r] = (0, N.useState)(t.reinvest), [i, n] = (0, N.useState)(t.reinvest_deposit), [c, v] = (0, N.useState)(!1), g = (0, M.c3)("Dashboard"), y = async e => {
                    v(!0);
                    try {
                        if ("reinvest" == e) {
                            let s = !i;
                            s && (n(s), await F(e, t.id, Number(s)), (0, H.j)("/api/investments"))
                        } else {
                            let a = !s;
                            r(a), await F(e, t.id, Number(100 * !!a)), (0, H.j)("/api/investments")
                        }
                    } catch (e) {
                        (0, O.oR)({
                            title: "Error",
                            description: g("something_went_wrong"),
                            variant: "destructive"
                        }), console.log({
                            message: e
                        })
                    } finally {
                        v(!1)
                    }
                }, w = async () => {
                    v(!0);
                    try {
                        await L(t.id), (0, H.j)("/api/investments"), (0, O.oR)({
                            title: "Success",
                            description: "".concat(t.name, " ").concat(g("deactivated_successfully"))
                        })
                    } catch (e) {
                        (0, O.oR)({
                            title: "Error",
                            description: g("something_went_wrong"),
                            variant: "destructive"
                        }), console.log({
                            message: e
                        })
                    } finally {
                        v(!1)
                    }
                }, A = x.A, k = "copytrading";
                switch (t.plan) {
                    case 13:
                        A = x.A;
                        break;
                    case 14:
                        A = p.A;
                        break;
                    case 15:
                        A = h.A;
                        break;
                    default:
                        t.plan < 5 ? (A = u.A, k = "dynamic") : t.plan > 4 && t.plan < 9 ? (A = m.A, k = "static") : (A = f.A, k = "crosschain")
                }
                let S = (new Date(1e3 * t.nextdate).getUTCDay() + 0) % 7;
                return (0, a.jsx)(_.Accordion, {
                    type: "single",
                    collapsible: !0,
                    children: (0, a.jsx)("div", {
                        className: d()(l().cards, "bg-white"),
                        children: (0, a.jsxs)(_.AccordionItem, {
                            className: l().item,
                            value: "copytrading",
                            children: [(0, a.jsxs)("div", {
                                className: l().card,
                                children: [(0, a.jsxs)("div", {
                                    className: l().list_top,
                                    children: [(0, a.jsx)("div", {
                                        children: (0, a.jsx)("div", {
                                            className: "flex",
                                            children: (0, a.jsxs)("div", {
                                                className: "flex items-center gap-[5px]",
                                                children: [(0, a.jsx)(o.default, {
                                                    src: A,
                                                    width: 60,
                                                    height: 60,
                                                    alt: "icon"
                                                }), (0, a.jsxs)("div", {
                                                    className: "flex flex-col justify-between  self-stretch    ",
                                                    children: [(0, a.jsx)("p", {
                                                        className: "  text-[16px] font-medium",
                                                        children: t.name
                                                    }), (0, a.jsxs)("p", {
                                                        className: "  text-[14px] uppercase ",
                                                        children: [t.percentMin === t.percentMax ? (0, a.jsxs)("span", {
                                                            className: "  text-[14px] font-medium uppercase ",
                                                            children: [t.percentMin, "%"]
                                                        }) : (0, a.jsxs)("span", {
                                                            className: "  text-[14px] font-medium uppercase ",
                                                            children: [t.percentMin, " - ", t.percentMax, "%"]
                                                        }), (0, a.jsx)("span", {
                                                            className: " ml-[4px] text-[14px] uppercase ",
                                                            children: g("daily")
                                                        })]
                                                    })]
                                                })]
                                            })
                                        })
                                    }), (0, a.jsxs)("div", {
                                        className: "flex flex-col justify-between  self-stretch",
                                        children: [(0, a.jsx)("p", {
                                            className: "  text-[16px]",
                                            children: g("invested")
                                        }), (0, a.jsxs)("p", {
                                            className: "  text-[14px] uppercase ",
                                            children: [t.paysys, " ", (0, U.A)(t.sum, "USDT" == t.paysys || "USDC" == t.paysys ? 2 : 8)]
                                        })]
                                    }), (0, a.jsxs)("div", {
                                        className: "flex flex-col justify-between  self-stretch",
                                        children: [(0, a.jsx)("p", {
                                            className: "  text-[16px]",
                                            children: g("total_earned")
                                        }), (0, a.jsxs)("p", {
                                            className: "  text-[14px] uppercase ",
                                            children: [t.paysys, " ", (0, U.A)(t.total_profit, "USDT" == t.paysys || "USDC" == t.paysys ? 2 : 8)]
                                        })]
                                    }), (0, a.jsxs)("div", {
                                        className: "flex flex-col justify-between  self-stretch",
                                        children: [(0, a.jsx)("p", {
                                            className: "  text-[16px]",
                                            children: g("last_day_profit")
                                        }), (0, a.jsxs)("p", {
                                            className: "  text-[14px] uppercase ",
                                            children: [t.percent, "%"]
                                        })]
                                    }), "crosschain" !== k && (0, a.jsxs)(a.Fragment, {
                                        children: [" ", (0, a.jsxs)("div", {
                                            className: "flex flex-col justify-between  self-stretch   ",
                                            children: [(0, a.jsx)("p", {
                                                className: "  text-[16px]",
                                                children: g("compounding")
                                            }), (0, a.jsx)("p", {
                                                className: "  text-[14px] uppercase ",
                                                children: (0, a.jsx)(b.d, {
                                                    checked: s,
                                                    onClick: () => y("compouding"),
                                                    disabled: c
                                                })
                                            })]
                                        }), "static" !== k && !i && (0, a.jsx)(B.A, {
                                            title: g("activate_reactivation_function"),
                                            description: g("automatically_reactivates_the_plan_for_the_next_term_as_a_bonus_you_get_02_to_your_daily_profit_cannot_be_disabled_once_activated"),
                                            cancelText: g("cancel"),
                                            actionText: g("activate"),
                                            onConfirm: () => y("reinvest"),
                                            children: (0, a.jsxs)("div", {
                                                className: "flex flex-col justify-between  self-stretch   ",
                                                children: [(0, a.jsx)("p", {
                                                    className: d()("text-[16px]", {
                                                        "opacity-50": i
                                                    }),
                                                    children: g("reactivation")
                                                }), (0, a.jsx)("p", {
                                                    className: "  text-[14px] uppercase ",
                                                    children: (0, a.jsx)(b.d, {
                                                        checked: i,
                                                        disabled: c || i
                                                    })
                                                })]
                                            })
                                        }), "static" !== k && !!i && (0, a.jsxs)("div", {
                                            className: "flex flex-col justify-between  self-stretch   ",
                                            children: [(0, a.jsx)("p", {
                                                className: d()("text-[16px]", {
                                                    "opacity-50": i
                                                }),
                                                children: g("reactivation")
                                            }), (0, a.jsx)("p", {
                                                className: "  text-[14px] uppercase ",
                                                children: (0, a.jsx)(b.d, {
                                                    checked: i,
                                                    disabled: c || i
                                                })
                                            })]
                                        }), "static" == k && 1 == t.count && (0, a.jsx)("div", {
                                            className: "flex flex-col justify-center  self-stretch   ",
                                            children: (0, a.jsx)(B.A, {
                                                title: g("deactivate_plan", {
                                                    name: t.name
                                                }),
                                                description: g("the_investment_plan_can_be_deactivated_manually_after_the_end_of_the_lock_in_period_until_you_deactivate_it_daily_profit_will_continue_to_accrue"),
                                                cancelText: g("cancel"),
                                                actionText: g("deactivate"),
                                                onConfirm: () => w(),
                                                children: (0, a.jsx)("div", {
                                                    className: d()(l().button_blue, "cursor-pointer"),
                                                    children: (0, a.jsx)("p", {
                                                        children: g("deactivate")
                                                    })
                                                })
                                            })
                                        })]
                                    })]
                                }), (0, a.jsx)("div", {
                                    className: l().line
                                }), (0, a.jsxs)("div", {
                                    className: l().list_bottom,
                                    children: [(0, a.jsxs)("div", {
                                        className: "flex flex-col gap-[8px]",
                                        children: [(0, a.jsx)("p", {
                                            className: "  text-[14px] ",
                                            children: g("activation_date")
                                        }), (0, a.jsx)("p", {
                                            className: "  text-[12px]",
                                            children: (0, T.GP)((0, C.S)(t.date), "dd.MM.yy")
                                        })]
                                    }), (0, a.jsxs)("div", {
                                        className: "flex flex-col gap-[8px]",
                                        children: [(0, a.jsx)("p", {
                                            className: "  text-[14px] ",
                                            children: g("expiration_date")
                                        }), "static" == k && 1 == t.count && (0, a.jsx)("div", {
                                            className: "  flex justify-center ",
                                            children: (0, a.jsx)(G, {})
                                        }), "static" == k && 1 != t.count && (0, a.jsx)("p", {
                                            className: "  text-[12px] ",
                                            children: (0, T.GP)((0, C.S)(t.date + 86400 * t.period), "dd.MM.yy")
                                        }), "static" !== k && (0, a.jsx)("p", {
                                            className: "  text-[12px] ",
                                            children: (0, T.GP)((0, C.S)(t.date + 86400 * t.period), "dd.MM.yy")
                                        })]
                                    }), (0, a.jsxs)("div", {
                                        className: "flex flex-col gap-[8px]",
                                        children: [(0, a.jsx)("p", {
                                            className: "  text-[14px] ",
                                            children: g("next_accrual")
                                        }), (0, a.jsx)("p", {
                                            className: "  text-[12px]",
                                            children: (0, a.jsx)(I.Ay, {
                                                renderer: z,
                                                date: (t.nextdate + (6 === S ? 172800 : 86400 * (0 === S))) * 1e3
                                            })
                                        })]
                                    }), (0, a.jsxs)("div", {
                                        className: "flex flex-col gap-[8px]",
                                        children: [(0, a.jsxs)("p", {
                                            className: "  text-[14px] ",
                                            children: [g("progress"), ":", " ", (-(100 * (t.count - t.period)) / t.period).toFixed(0), "%"]
                                        }), (0, a.jsx)("div", {
                                            className: d()(l().progress, "max-w-[100%] w-full"),
                                            children: (0, a.jsx)(j.k, {
                                                value: Number((-(100 * (t.count - t.period)) / t.period).toFixed(0))
                                            })
                                        })]
                                    }), (0, a.jsx)("div", {
                                        className: l().trigger,
                                        children: (0, a.jsx)(_.AccordionTrigger, {
                                            className: "pb-0 pt-0 pl-0 pr-0",
                                            children: (0, a.jsx)("div", {
                                                className: l().button_blue,
                                                children: (0, a.jsx)("p", {
                                                    children: g("detailed")
                                                })
                                            })
                                        })
                                    })]
                                })]
                            }), (0, a.jsx)(_.AccordionContent, {
                                className: l().content,
                                children: (0, a.jsx)(D, {
                                    id: t.id
                                })
                            })]
                        })
                    })
                })
            }
            let z = e => {
                    let {
                        hours: t,
                        minutes: s,
                        seconds: r
                    } = e;
                    return (0, a.jsxs)("span", {
                        children: [t, ":", s, ":", r]
                    })
                },
                G = e => {
                    let {
                        className: t
                    } = e;
                    return (0, a.jsx)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        className: t || "w-6 h-6",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        children: (0, a.jsx)("path", {
                            d: "M18 9c-1.5-2-4.5-2-6 0l-4 6c-1.5 2-4.5 2-6 0s-1.5-4 0-6 4.5-2 6 0l4 6c1.5 2 4.5 2 6 0s1.5-4 0-6-4.5-2-6 0"
                        })
                    })
                };
            var P = s(36612);
            let X = function() {
                let {
                    startLoading: e,
                    stopLoading: t
                } = (0, P.G)(), s = (0, N.useRef)(!1), {
                    data: a,
                    isLoading: r,
                    error: l
                } = (0, A.Ay)("/api/investments", w.A, {
                    revalidateOnFocus: !1,
                    revalidateOnReconnect: !1,
                    onSuccess: () => {
                        s.current || (t(), s.current = !0)
                    },
                    onError: () => {
                        s.current || (t(), s.current = !0)
                    }
                });
                return (0, N.useEffect)(() => {
                    r && !s.current && e()
                }, [r]), {
                    data: a,
                    isLoading: r,
                    error: l
                }
            };

            function Y(e) {
                let {
                    dashboard: t = !1
                } = e, s = (0, M.c3)("Dashboard"), {
                    data: r,
                    isLoading: c
                } = X();
                return c ? (0, a.jsx)(a.Fragment, {
                    children: !t && (0, a.jsxs)("div", {
                        className: "flex flex-col items-center space-y-2",
                        children: [(0, a.jsx)(S.cq, {
                            color: ["#00B2C8", "#E4FAFC"],
                            size: "large"
                        }), (0, a.jsx)("span", {
                            className: "text-gray-700 text-lg font-semibold",
                            children: s("loading")
                        })]
                    })
                }) : (0, a.jsxs)(a.Fragment, {
                    children: [r && 0 !== r.length && (0, a.jsx)(a.Fragment, {
                        children: (0, a.jsx)("p", {
                            className: "  font-[400]  text-[14px] uppercase text-[#828282]",
                            children: s("active_plans")
                        })
                    }), r.map(e => (0, a.jsx)(W, {
                        deposit: e
                    }, e.id)), r && 0 === r.length && !t && (0, a.jsxs)("div", {
                        className: "flex flex-col justify-center items-center self-stretch    gap-[24px] px-[24px] h-[324px] rounded-[6px] border-solid border border-[#e6e6e6] bg-white",
                        children: [(0, a.jsx)("p", {
                            className: "  text-[20px] text-center text-black",
                            children: s("no_active_plans")
                        }), (0, a.jsx)(n.N_, {
                            href: "/investments/automatictrading/dynamic",
                            className: l().button,
                            children: (0, a.jsx)(i.h, {
                                text: s("activate_new")
                            })
                        })]
                    })]
                })
            }
        },
        5285: (e, t, s) => {
            "use strict";
            s.d(t, {
                A: () => a
            });
            let a = {
                src: "/_next/static/media/static.ddaf6dfe.svg",
                height: 90,
                width: 90,
                blurWidth: 0,
                blurHeight: 0
            }
        },
        7531: (e, t, s) => {
            "use strict";
            s.d(t, {
                dj: () => p,
                oR: () => x
            });
            var a = s(12115);
            let r = 0,
                l = new Map,
                i = e => {
                    if (l.has(e)) return;
                    let t = setTimeout(() => {
                        l.delete(e), o({
                            type: "REMOVE_TOAST",
                            toastId: e
                        })
                    }, 1e6);
                    l.set(e, t)
                },
                n = (e, t) => {
                    switch (t.type) {
                        case "ADD_TOAST":
                            return { ...e,
                                toasts: [t.toast, ...e.toasts].slice(0, 1)
                            };
                        case "UPDATE_TOAST":
                            return { ...e,
                                toasts: e.toasts.map(e => e.id === t.toast.id ? { ...e,
                                    ...t.toast
                                } : e)
                            };
                        case "DISMISS_TOAST":
                            {
                                let {
                                    toastId: s
                                } = t;
                                return s ? i(s) : e.toasts.forEach(e => {
                                    i(e.id)
                                }),
                                { ...e,
                                    toasts: e.toasts.map(e => e.id === s || void 0 === s ? { ...e,
                                        open: !1
                                    } : e)
                                }
                            }
                        case "REMOVE_TOAST":
                            if (void 0 === t.toastId) return { ...e,
                                toasts: []
                            };
                            return { ...e,
                                toasts: e.toasts.filter(e => e.id !== t.toastId)
                            }
                    }
                },
                c = [],
                d = {
                    toasts: []
                };

            function o(e) {
                d = n(d, e), c.forEach(e => {
                    e(d)
                })
            }

            function x(e) {
                let { ...t
                } = e, s = (r = (r + 1) % Number.MAX_SAFE_INTEGER).toString(), a = () => o({
                    type: "DISMISS_TOAST",
                    toastId: s
                });
                return o({
                    type: "ADD_TOAST",
                    toast: { ...t,
                        id: s,
                        open: !0,
                        onOpenChange: e => {
                            e || a()
                        }
                    }
                }), {
                    id: s,
                    dismiss: a,
                    update: e => o({
                        type: "UPDATE_TOAST",
                        toast: { ...e,
                            id: s
                        }
                    })
                }
            }

            function p() {
                let [e, t] = a.useState(d);
                return a.useEffect(() => (c.push(t), () => {
                    let e = c.indexOf(t);
                    e > -1 && c.splice(e, 1)
                }), [e]), { ...e,
                    toast: x,
                    dismiss: e => o({
                        type: "DISMISS_TOAST",
                        toastId: e
                    })
                }
            }
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
        13328: (e, t, s) => {
            "use strict";
            s.d(t, {
                A0: () => c,
                BF: () => d,
                Hj: () => o,
                XI: () => n,
                nA: () => p,
                nd: () => x,
                r6: () => h
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
                    className: "relative w-full",
                    children: (0, a.jsx)("table", {
                        ref: t,
                        className: i()("w-full caption-bottom text-sm", s),
                        ...r
                    })
                })
            });
            n.displayName = "Table";
            let c = r.forwardRef((e, t) => {
                let {
                    className: s,
                    ...r
                } = e;
                return (0, a.jsx)("thead", {
                    ref: t,
                    className: i()("border-b border-solid border-[#d9d9d9] bg-[#f3fbfc]", s),
                    ...r
                })
            });
            c.displayName = "TableHeader";
            let d = r.forwardRef((e, t) => {
                let {
                    className: s,
                    ...r
                } = e;
                return (0, a.jsx)("tbody", {
                    ref: t,
                    className: i()("[&_tr:last-child]:border-0", s),
                    ...r
                })
            });
            d.displayName = "TableBody", r.forwardRef((e, t) => {
                let {
                    className: s,
                    ...r
                } = e;
                return (0, a.jsx)("tfoot", {
                    ref: t,
                    className: i()("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", s),
                    ...r
                })
            }).displayName = "TableFooter";
            let o = r.forwardRef((e, t) => {
                let {
                    className: s,
                    ...r
                } = e;
                return (0, a.jsx)("tr", {
                    ref: t,
                    className: i()("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted", s),
                    ...r
                })
            });
            o.displayName = "TableRow";
            let x = r.forwardRef((e, t) => {
                let {
                    className: s,
                    ...r
                } = e;
                return (0, a.jsx)("th", {
                    ref: t,
                    className: i()("text-[12px] font-light text-center text-[#303030] h-[73px] px-[16px] align-middle [&:has([role=checkbox])]:pr-0", s),
                    ...r
                })
            });
            x.displayName = "TableHead";
            let p = r.forwardRef((e, t) => {
                let {
                    className: s,
                    ...r
                } = e;
                return (0, a.jsx)("td", {
                    ref: t,
                    className: i()("p-[16px] align-middle [&:has([role=checkbox])]:pr-0 text-[12px] font-light text-[#303030] border-t-[1px] border-b-[1px] border-solid border-[#d9d9d9] text-center", s),
                    ...r
                })
            });
            p.displayName = "TableCell";
            let h = r.forwardRef((e, t) => {
                let {
                    className: s,
                    ...r
                } = e;
                return (0, a.jsx)("caption", {
                    ref: t,
                    className: i()("text-sm text-muted-foreground", s),
                    ...r
                })
            });
            h.displayName = "TableCaption"
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
        33565: (e, t, s) => {
            "use strict";
            s.d(t, {
                h: () => i
            });
            var a = s(95155),
                r = s(80756),
                l = s.n(r);
            let i = e => {
                let {
                    text: t = "",
                    bgColor: s,
                    bgHover: r,
                    disabled: i,
                    onClick: n
                } = e;
                return (0, a.jsx)("button", {
                    onClick: n,
                    disabled: i,
                    type: "submit",
                    className: l().body,
                    style: {
                        "--bg-color": s,
                        "--bg-hover": r
                    },
                    children: (0, a.jsx)("p", {
                        children: t
                    })
                })
            }
        },
        35552: e => {
            e.exports = {
                body: "button_border_body__yeuoF"
            }
        },
        36612: (e, t, s) => {
            "use strict";
            s.d(t, {
                G: () => a
            });
            let a = (0, s(65453).v)(e => ({
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
                A: () => a
            });
            let a = {
                src: "/_next/static/media/cross_chain.aedc3b26.svg",
                height: 36,
                width: 35,
                blurWidth: 0,
                blurHeight: 0
            }
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
        68119: (e, t, s) => {
            "use strict";
            s.d(t, {
                B: () => i
            });
            var a = s(95155),
                r = s(35552),
                l = s.n(r);
            let i = e => {
                let {
                    onClick: t,
                    text: s,
                    disabled: r,
                    ...i
                } = e;
                return (0, a.jsx)("button", {
                    disabled: r,
                    onClick: t,
                    ...i,
                    className: l().body,
                    children: s
                })
            }
        },
        72740: e => {
            e.exports = {
                breadcrumb: "activeplans_breadcrumb__BhrZI",
                cards: "activeplans_cards__JZgaZ",
                card: "activeplans_card__cOfBd",
                plan: "activeplans_plan__06Upg",
                active: "activeplans_active__c2kx8",
                list_top: "activeplans_list_top__AWPp6",
                button: "activeplans_button__9DMbW",
                progress: "activeplans_progress__AB9O1",
                list_bottom: "activeplans_list_bottom__Mp2Y_",
                arrow: "activeplans_arrow___MRk2",
                trigger: "activeplans_trigger__z8vKT",
                button_blue: "activeplans_button_blue__HM9m4",
                content: "activeplans_content__u93na",
                button_border: "activeplans_button_border__AWiWz",
                tablerow: "activeplans_tablerow__zplBA",
                line: "activeplans_line__60T7w",
                new_plan: "activeplans_new_plan__6tEUH"
            }
        },
        80756: e => {
            e.exports = {
                body: "button_blue_body__xatTr"
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
        90042: (e, t, s) => {
            "use strict";
            s.d(t, {
                A: () => a
            });
            let a = {
                src: "/_next/static/media/earned.57067797.svg",
                height: 25,
                width: 24,
                blurWidth: 0,
                blurHeight: 0
            }
        },
        94052: (e, t, s) => {
            "use strict";
            s.d(t, {
                A: () => a
            });
            let a = function() {
                for (var e = arguments.length, t = Array(e), s = 0; s < e; s++) t[s] = arguments[s];
                return fetch(...t).then(e => e.json())
            }
        },
        94794: (e, t, s) => {
            "use strict";

            function a(e, t) {
                var s = Number((Math.floor(e * Math.pow(10, t)) / Math.pow(10, t)).toFixed(t));
                if (1 > Math.abs(s)) {
                    var a = parseInt(s.toString().split("e-")[1]);
                    a && (s *= Math.pow(10, a - 1), s = "0." + Array(a).join("0") + s.toString().substring(2))
                } else {
                    var a = parseInt(s.toString().split("+")[1]);
                    a > 20 && (a -= 20, s /= Math.pow(10, a), s += Array(a + 1).join("0"))
                }
                return s
            }
            s.d(t, {
                A: () => a
            })
        },
        95472: (e, t, s) => {
            "use strict";
            s.d(t, {
                A: () => a
            });
            let a = {
                src: "/_next/static/media/dynamic.fb76dd74.svg",
                height: 90,
                width: 90,
                blurWidth: 0,
                blurHeight: 0
            }
        },
        98648: (e, t, s) => {
            "use strict";
            s.d(t, {
                A: () => l
            });
            var a = s(95155),
                r = s(8963);

            function l(e) {
                let {
                    title: t,
                    description: s,
                    cancelText: l = "No",
                    actionText: i = "Yes",
                    onConfirm: n,
                    children: c
                } = e;
                return (0, a.jsxs)(r.bL, {
                    children: [(0, a.jsx)(r.l9, {
                        asChild: !0,
                        children: c
                    }), (0, a.jsxs)(r.ZL, {
                        children: [(0, a.jsx)(r.hJ, {
                            className: "fixed inset-0 bg-black/50 z-50",
                            style: {
                                position: "fixed",
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                zIndex: 9999
                            }
                        }), (0, a.jsxs)(r.UC, {
                            className: "fixed top-1/2 left-1/2 bg-white rounded p-6 w-80 -translate-x-1/2 -translate-y-1/2 shadow-lg z-50 max-h-[90vh] overflow-y-auto",
                            style: {
                                position: "fixed",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%)",
                                zIndex: 1e4,
                                maxHeight: "90vh",
                                overflowY: "auto"
                            },
                            children: [(0, a.jsx)(r.hE, {
                                className: "text-lg font-bold mb-2",
                                children: t
                            }), (0, a.jsx)(r.VY, {
                                className: "mb-4 text-sm text-gray-600",
                                children: s
                            }), (0, a.jsxs)("div", {
                                className: "flex justify-end gap-2",
                                children: [(0, a.jsx)(r.ZD, {
                                    asChild: !0,
                                    children: (0, a.jsx)("button", {
                                        className: "px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 transition-colors",
                                        children: l
                                    })
                                }), (0, a.jsx)(r.rc, {
                                    asChild: !0,
                                    children: (0, a.jsx)("button", {
                                        className: "px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700 transition-colors",
                                        onClick: n,
                                        children: i
                                    })
                                })]
                            })]
                        })]
                    })]
                })
            }
        }
    }
]);