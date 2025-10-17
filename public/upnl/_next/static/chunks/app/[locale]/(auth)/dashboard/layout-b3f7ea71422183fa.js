(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2627], {
        17652: (e, t, n) => {
            "use strict";
            n.d(t, {
                c3: () => i
            });
            var r = n(46453);

            function s(e, t) {
                return (...e) => {
                    try {
                        return t(...e)
                    } catch {
                        throw Error(void 0)
                    }
                }
            }
            let i = s(0, r.c3);
            s(0, r.kc)
        },
        36612: (e, t, n) => {
            "use strict";
            n.d(t, {
                G: () => r
            });
            let r = (0, n(65453).v)(e => ({
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
        65453: (e, t, n) => {
            "use strict";
            n.d(t, {
                v: () => c
            });
            var r = n(12115);
            let s = e => {
                    let t, n = new Set,
                        r = (e, r) => {
                            let s = "function" == typeof e ? e(t) : e;
                            if (!Object.is(s, t)) {
                                let e = t;
                                t = (null != r ? r : "object" != typeof s || null === s) ? s : Object.assign({}, t, s), n.forEach(n => n(t, e))
                            }
                        },
                        s = () => t,
                        i = {
                            setState: r,
                            getState: s,
                            getInitialState: () => l,
                            subscribe: e => (n.add(e), () => n.delete(e))
                        },
                        l = t = e(r, s, i);
                    return i
                },
                i = e => e ? s(e) : s,
                l = e => e,
                a = e => {
                    let t = i(e),
                        n = e => (function(e, t = l) {
                            let n = r.useSyncExternalStore(e.subscribe, () => t(e.getState()), () => t(e.getInitialState()));
                            return r.useDebugValue(n), n
                        })(t, e);
                    return Object.assign(n, t), n
                },
                c = e => e ? a(e) : a
        },
        67609: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => c
            });
            var r = n(95155),
                s = n(36612);
            n(12115);
            var i = n(43511),
                l = n(17652);

            function a() {
                let e = (0, l.c3)("Dashboard");
                return (0, r.jsx)("div", {
                    className: "fixed inset-0 flex items-center justify-center  z-50",
                    children: (0, r.jsxs)("div", {
                        className: "flex flex-col items-center space-y-2",
                        children: [(0, r.jsx)(i.cq, {
                            color: ["#00B2C8", "#E4FAFC"],
                            size: "large"
                        }), (0, r.jsx)("span", {
                            className: "text-gray-700 text-lg font-semibold",
                            children: e("loading")
                        })]
                    })
                })
            }

            function c(e) {
                let {
                    children: t
                } = e, n = (0, s.G)(e => e.loadingCount);
                return (0, r.jsx)("div", {
                    className: "relative min-h-screen",
                    children: n > 0 ? (0, r.jsx)(a, {}) : (0, r.jsx)(r.Fragment, {
                        children: t
                    })
                })
            }
        },
        98375: (e, t, n) => {
            Promise.resolve().then(n.bind(n, 67609))
        }
    },
    e => {
        var t = t => e(e.s = t);
        e.O(0, [6453, 3511, 8441, 1684, 7358], () => t(98375)), _N_E = e.O()
    }
]);