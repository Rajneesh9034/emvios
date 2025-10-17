(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7713], {
        7616: e => {
            e.exports = {
                body: "replenishment_body__RMa9j",
                button: "replenishment_button__n9RMv",
                ul: "replenishment_ul__AwbL9",
                copy: "replenishment_copy__IV88w",
                button_blue: "replenishment_button_blue__vFzO3"
            }
        },
        33565: (e, t, s) => {
            "use strict";
            s.d(t, {
                h: () => a
            });
            var l = s(95155),
                n = s(80756),
                r = s.n(n);
            let a = e => {
                let {
                    text: t = "",
                    bgColor: s,
                    bgHover: n,
                    disabled: a,
                    onClick: o
                } = e;
                return (0, l.jsx)("button", {
                    onClick: o,
                    disabled: a,
                    type: "submit",
                    className: r().body,
                    style: {
                        "--bg-color": s,
                        "--bg-hover": n
                    },
                    children: (0, l.jsx)("p", {
                        children: t
                    })
                })
            }
        },
        36612: (e, t, s) => {
            "use strict";
            s.d(t, {
                G: () => l
            });
            let l = (0, s(65453).v)(e => ({
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
        65453: (e, t, s) => {
            "use strict";
            s.d(t, {
                v: () => i
            });
            var l = s(12115);
            let n = e => {
                    let t, s = new Set,
                        l = (e, l) => {
                            let n = "function" == typeof e ? e(t) : e;
                            if (!Object.is(n, t)) {
                                let e = t;
                                t = (null != l ? l : "object" != typeof n || null === n) ? n : Object.assign({}, t, n), s.forEach(s => s(t, e))
                            }
                        },
                        n = () => t,
                        r = {
                            setState: l,
                            getState: n,
                            getInitialState: () => a,
                            subscribe: e => (s.add(e), () => s.delete(e))
                        },
                        a = t = e(l, n, r);
                    return r
                },
                r = e => e ? n(e) : n,
                a = e => e,
                o = e => {
                    let t = r(e),
                        s = e => (function(e, t = a) {
                            let s = l.useSyncExternalStore(e.subscribe, () => t(e.getState()), () => t(e.getInitialState()));
                            return l.useDebugValue(s), s
                        })(t, e);
                    return Object.assign(s, t), s
                },
                i = e => e ? o(e) : o
        },
        74158: (e, t, s) => {
            "use strict";
            s.d(t, {
                default: () => _
            });
            var l = s(95155),
                n = s(33565),
                r = s(7616),
                a = s.n(r),
                o = s(12115),
                i = s(94052),
                c = s(34953);
            let d = function(e, t) {
                let {
                    data: s,
                    isLoading: l
                } = (0, c.Ay)(t && e ? "/api/wallets/".concat(e, "/").concat(t) : null, i.A, {
                    revalidateOnFocus: !1,
                    revalidateOnReconnect: !1,
                    revalidateIfStale: !1
                });
                return {
                    data: s,
                    isLoading: l
                }
            };
            var u = s(78173);
            let x = e => {
                let {
                    value: t
                } = e, {
                    Image: s
                } = (0, u.i)();
                return (0, l.jsx)(s, {
                    text: t || "",
                    options: {
                        type: "image/jpeg",
                        quality: 1,
                        margin: 3,
                        scale: 2,
                        width: 250,
                        color: {
                            dark: "#202020",
                            light: "#ffffff"
                        }
                    }
                })
            };
            var p = s(36612),
                b = s(17652);

            function _() {
                let {
                    currency: e,
                    network: t
                } = (0, p.G)(), [s, r] = (0, o.useState)(!1), {
                    data: i,
                    isLoading: c
                } = d(e || "", t || ""), u = (0, b.c3)("Dashboard"), _ = e => {
                    navigator.clipboard.writeText(e), r(!0), setTimeout(() => {
                        r(!1)
                    }, 1e3)
                };
                return (0, l.jsxs)("div", {
                    className: a().body,
                    children: [(0, l.jsx)("p", {
                        className: "self-stretch text-[16px] text-center ",
                        children: u("to_top_up_your_balance", {
                            currency: e
                        })
                    }), (0, l.jsx)(x, {
                        value: t ? (null == i ? void 0 : i.purse) ? i.purse : u("loading") : u("select_network")
                    }), (0, l.jsxs)("div", {
                        className: a().copy,
                        children: [(0, l.jsx)("div", {
                            className: "flex justify-center items-center flex-grow min-h-[45px]  gap-[8px] px-[16px] py-[8px] rounded-tl-md rounded-bl-md bg-neutral-50 border-[1px] border-solid border-[#cecece] w-full",
                            children: (0, l.jsx)("p", {
                                className: "text-[14px] text-wrap break-words text-[#7b7b7b]",
                                children: t ? (null == i ? void 0 : i.purse) ? i.purse : u("loading") : u("select_network")
                            })
                        }), (0, l.jsx)("div", {
                            className: a().button_blue,
                            children: (0, l.jsx)(n.h, {
                                onClick: () => _(t ? (null == i ? void 0 : i.purse) ? i.purse : "" : u("select_network")),
                                text: s ? u("copied").toUpperCase() : u("copy").toUpperCase()
                            })
                        })]
                    }), (0, l.jsx)("div", {
                        className: "flex  items-center self-stretch gap-[32px] p-[16px] rounded-md  border border-solid border-[#e6e6e6]",
                        children: (0, l.jsxs)("ul", {
                            className: a().ul,
                            children: [(0, l.jsxs)("li", {
                                children: [(0, l.jsx)("span", {
                                    className: "flex-grow  text-[14px]",
                                    children: u("send_only")
                                }), (0, l.jsxs)("span", {
                                    className: "flex-grow  text-[14px] mx-[4px] font-medium  ",
                                    children: [e, " ", t]
                                }), (0, l.jsx)("span", {
                                    className: "flex-grow  text-[14px]",
                                    children: u("to_this_address")
                                })]
                            }), (0, l.jsxs)("li", {
                                children: [(0, l.jsx)("span", {
                                    className: "flex-grow  text-[14px]",
                                    children: u("funds_will_be_credited_to_the_balance_after")
                                }), (0, l.jsx)("span", {
                                    className: "flex-grow  text-[14px] mx-[4px] font-semibold  ",
                                    children: u("1_confirmation")
                                }), (0, l.jsx)("span", {
                                    className: "flex-grow  text-[14px]",
                                    children: u("in_the_blockchain_network_automatically")
                                })]
                            })]
                        })
                    })]
                })
            }
        },
        80756: e => {
            e.exports = {
                body: "button_blue_body__xatTr"
            }
        },
        94052: (e, t, s) => {
            "use strict";
            s.d(t, {
                A: () => l
            });
            let l = function() {
                for (var e = arguments.length, t = Array(e), s = 0; s < e; s++) t[s] = arguments[s];
                return fetch(...t).then(e => e.json())
            }
        },
        96431: (e, t, s) => {
            Promise.resolve().then(s.bind(s, 46096)), Promise.resolve().then(s.bind(s, 74158))
        }
    },
    e => {
        var t = t => e(e.s = t);
        e.O(0, [9149, 6453, 4953, 9817, 8441, 1684, 7358], () => t(96431)), _N_E = e.O()
    }
]);