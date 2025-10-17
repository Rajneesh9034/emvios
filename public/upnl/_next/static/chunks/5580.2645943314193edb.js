"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5580], {
        5580: (e, s, t) => {
            t.r(s), t.d(s, {
                default: () => N
            });
            var n = t(95155),
                l = t(22259),
                r = t.n(l),
                a = t(29300),
                i = t.n(a),
                c = t(66766),
                d = t(13328),
                x = t(68119),
                h = t(69582),
                o = t(6874),
                u = t.n(o),
                p = t(75577),
                j = t(67707),
                f = t(53507),
                m = t(90042),
                b = t(86285),
                y = t(11614),
                g = t(2296),
                v = t(90793),
                w = t(71311),
                C = t(17652);
            let A = {
                Replenishment: j.A,
                Income: m.A,
                Reinvest: m.A,
                Withdrawal: f.A,
                Bonus: b.A,
                Exchange: y.A,
                "Turnover-bonus": b.A
            };

            function N() {
                let e = (0, C.c3)("Dashboard"),
                    s = {
                        Replenishment: e("replenishment"),
                        Income: e("profits"),
                        Reinvest: e("reinvestment"),
                        Withdrawal: e("withdrawal"),
                        Bonus: e("bonuses"),
                        Exchange: e("exchange"),
                        "Turnover-bonus": e("bonuses_for_turnover")
                    },
                    t = {
                        1: e("pending"),
                        2: e("completed"),
                        3: e("canceled")
                    },
                    {
                        data: l,
                        isLoading: a
                    } = (0, h.A)({
                        from: "all",
                        page: 0
                    });
                return l && 0 === l.length ? (0, n.jsxs)("div", {
                    className: "flex flex-col w-full rounded-[6px] border border-solid border-[#e6e6e6]",
                    children: [(0, n.jsxs)("div", {
                        className: "flex gap-[16px] items-center justify-between flex-wrap w-full rounded-[6px] bg-[#f3fbfc] px-[32px] py-[24px] border-solid border-b border-[#e6e6e6] text-[12px]",
                        children: [(0, n.jsx)("p", {
                            children: e("date")
                        }), (0, n.jsx)("p", {
                            children: e("type")
                        }), (0, n.jsx)("p", {
                            children: e("currency")
                        }), (0, n.jsx)("p", {
                            children: e("$_amount")
                        }), (0, n.jsx)("p", {
                            children: e("txid")
                        }), (0, n.jsx)("p", {
                            children: e("status")
                        })]
                    }), (0, n.jsx)("p", {
                        className: r().available,
                        children: e("no_available_data")
                    })]
                }) : (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)("p", {
                        className: "  font-[400] text-[14px]  uppercase text-[#828282]",
                        children: e("last_activities")
                    }), (0, n.jsxs)("div", {
                        className: i()(r().content, "bg-white"),
                        children: [(0, n.jsx)("div", {
                            className: "overflow-x-auto",
                            children: (0, n.jsxs)(d.XI, {
                                children: [(0, n.jsx)(d.A0, {
                                    children: (0, n.jsxs)(d.Hj, {
                                        children: [(0, n.jsx)(d.nd, {
                                            children: e("date")
                                        }), (0, n.jsx)(d.nd, {
                                            children: e("type")
                                        }), (0, n.jsx)(d.nd, {
                                            children: e("currency")
                                        }), (0, n.jsx)(d.nd, {
                                            children: e("$_amount")
                                        }), (0, n.jsx)(d.nd, {
                                            children: e("txid")
                                        }), (0, n.jsx)(d.nd, {
                                            children: e("status")
                                        })]
                                    })
                                }), (0, n.jsxs)(d.BF, {
                                    children: [a && (0, n.jsx)("tr", {
                                        children: (0, n.jsxs)("td", {
                                            colSpan: 6,
                                            children: [" ", (0, n.jsxs)("div", {
                                                className: "w-full h-16 flex justify-center items-center",
                                                children: [" ", (0, n.jsxs)("div", {
                                                    role: "status",
                                                    children: [(0, n.jsxs)("svg", {
                                                        "aria-hidden": "true",
                                                        className: "w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600",
                                                        viewBox: "0 0 100 101",
                                                        fill: "none",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        children: [(0, n.jsx)("path", {
                                                            d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
                                                            fill: "currentColor"
                                                        }), (0, n.jsx)("path", {
                                                            d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
                                                            fill: "currentFill"
                                                        })]
                                                    }), (0, n.jsx)("span", {
                                                        className: "sr-only",
                                                        children: e("loading")
                                                    })]
                                                })]
                                            })]
                                        })
                                    }), null == l ? void 0 : l.map(e => {
                                        let l = !0;
                                        return ("Income" == e.type || "Reinvest" == e.type) && (l = !1), ("Bonus" == e.type || "Exchange" == e.type || "Turnover-bonus" == e.type) && (String(e.hash), l = !1), (0, n.jsxs)(d.Hj, {
                                            className: r().tablerow,
                                            children: [(0, n.jsx)(d.nA, {
                                                children: (0, g.GP)((0, v.S)(e.date), "yyyy-MM-dd HH:mm:ss")
                                            }), (0, n.jsx)(d.nA, {
                                                children: (0, n.jsxs)("div", {
                                                    className: "flex justify-center w-fit mx-auto flex-shrink-0 items-center gap-[8px] px-[8px] rounded-[4px] border-solid border border-[#e6e6e6]",
                                                    children: [(0, n.jsx)(c.default, {
                                                        src: A[e.type],
                                                        width: 14,
                                                        height: 14,
                                                        style: {
                                                            width: "14px",
                                                            height: "14px"
                                                        },
                                                        alt: "icon"
                                                    }), (0, n.jsx)("p", {
                                                        className: "text-[10px]",
                                                        children: s[e.type]
                                                    })]
                                                })
                                            }), (0, n.jsx)(d.nA, {
                                                children: (0, n.jsx)("div", {
                                                    className: "flex items-center justify-center",
                                                    children: (0, n.jsx)(c.default, {
                                                        src: "/wallets/".concat(e.paysys.toLowerCase(), ".png"),
                                                        width: 20,
                                                        height: 20,
                                                        alt: "icon"
                                                    })
                                                })
                                            }), (0, n.jsxs)(d.nA, {
                                                children: [e.sum, " ", e.paysys]
                                            }), (0, n.jsx)(d.nA, {
                                                children: l ? (0, n.jsx)("div", {
                                                    style: {
                                                        opacity: 1
                                                    },
                                                    className: "flex items-center justify-center",
                                                    children: (0, n.jsx)(u(), {
                                                        target: "_blank",
                                                        href: "https://blockchair.com/search?q=".concat(e.hash),
                                                        children: (0, n.jsx)(c.default, {
                                                            src: p.A,
                                                            alt: "icon"
                                                        })
                                                    })
                                                }) : (0, n.jsx)("div", {
                                                    style: {
                                                        opacity: .3
                                                    },
                                                    className: "flex items-center justify-center",
                                                    children: (0, n.jsx)(c.default, {
                                                        src: p.A,
                                                        alt: "icon"
                                                    })
                                                })
                                            }), (0, n.jsx)(d.nA, {
                                                children: (0, n.jsxs)("div", {
                                                    className: "flex w-fit mx-auto justify-center items-center gap-[8px] px-[8px] rounded-[4px] border border-solid border-[#e6e6e6]",
                                                    children: [(0, n.jsx)("div", {
                                                        style: {
                                                            backgroundColor: 1 === e.status ? "#FDE400" : 2 === e.status ? "#00B2C8" : "red",
                                                            opacity: 1
                                                        },
                                                        className: "h-[6px] w-[6px] rounded-full bg-black"
                                                    }), (0, n.jsxs)("p", {
                                                        className: "text-[10px]",
                                                        children: [t[e.status], " "]
                                                    })]
                                                })
                                            })]
                                        }, (0, w.Ak)())
                                    })]
                                })]
                            })
                        }), (0, n.jsx)(u(), {
                            href: "/statistics/all",
                            className: r().button_border,
                            children: (0, n.jsx)(x.B, {
                                className: r().button_blue,
                                text: e("full_list")
                            })
                        })]
                    })]
                })
            }
        },
        11614: (e, s, t) => {
            t.d(s, {
                A: () => n
            });
            let n = {
                src: "/_next/static/media/refresh_square.508c1f19.svg",
                height: 14,
                width: 14,
                blurWidth: 0,
                blurHeight: 0
            }
        },
        69582: (e, s, t) => {
            t.d(s, {
                A: () => r
            });
            var n = t(94052),
                l = t(34953);
            let r = function(e) {
                let {
                    from: s,
                    page: t,
                    paysys: r = "",
                    shouldFetch: a = !0,
                    dates: i = ""
                } = e, {
                    data: c,
                    isLoading: d
                } = (0, l.Ay)(a ? "/api/transactions?from=".concat(s, "&page=").concat(t, "&paysys=").concat(r).concat(i ? "".concat(i) : "") : null, n.A, {
                    revalidateOnFocus: !1,
                    revalidateOnReconnect: !1
                });
                return c ? {
                    data: c.transactions,
                    total: c.count,
                    isLoading: d
                } : {
                    data: null,
                    total: 0,
                    isLoading: d
                }
            }
        },
        71311: (e, s, t) => {
            t.d(s, {
                Ak: () => n
            });
            let n = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((e, s) => ((s &= 63) < 36 ? e += s.toString(36) : s < 62 ? e += (s - 26).toString(36).toUpperCase() : s > 62 ? e += "-" : e += "_", e), "")
        },
        75577: (e, s, t) => {
            t.d(s, {
                A: () => n
            });
            let n = {
                src: "/_next/static/media/clip.0c706fa6.svg",
                height: 16,
                width: 16,
                blurWidth: 0,
                blurHeight: 0
            }
        },
        86285: (e, s, t) => {
            t.d(s, {
                A: () => n
            });
            let n = {
                src: "/_next/static/media/gift.44a055fe.svg",
                height: 25,
                width: 25,
                blurWidth: 0,
                blurHeight: 0
            }
        }
    }
]);