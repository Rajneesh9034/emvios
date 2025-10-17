(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7369], {
        5770: (e, t, a) => {
            "use strict";
            a.d(t, {
                A: () => d
            });
            var r = a(95155),
                s = a(84567),
                o = a.n(s);
            let d = e => {
                let {
                    setCaptcha: t,
                    classname: a = " hidden",
                    theme: s = "dark"
                } = e;
                return (0, r.jsx)(o(), {
                    theme: s,
                    className: a,
                    sitekey: "0x4AAAAAABeIaF1iZ0v2kN6_",
                    onVerify: e => {
                        t(e)
                    }
                })
            }
        },
        7531: (e, t, a) => {
            "use strict";
            a.d(t, {
                dj: () => f,
                oR: () => c
            });
            var r = a(12115);
            let s = 0,
                o = new Map,
                d = e => {
                    if (o.has(e)) return;
                    let t = setTimeout(() => {
                        o.delete(e), u({
                            type: "REMOVE_TOAST",
                            toastId: e
                        })
                    }, 1e6);
                    o.set(e, t)
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
                                    toastId: a
                                } = t;
                                return a ? d(a) : e.toasts.forEach(e => {
                                    d(e.id)
                                }),
                                { ...e,
                                    toasts: e.toasts.map(e => e.id === a || void 0 === a ? { ...e,
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
                i = [],
                l = {
                    toasts: []
                };

            function u(e) {
                l = n(l, e), i.forEach(e => {
                    e(l)
                })
            }

            function c(e) {
                let { ...t
                } = e, a = (s = (s + 1) % Number.MAX_SAFE_INTEGER).toString(), r = () => u({
                    type: "DISMISS_TOAST",
                    toastId: a
                });
                return u({
                    type: "ADD_TOAST",
                    toast: { ...t,
                        id: a,
                        open: !0,
                        onOpenChange: e => {
                            e || r()
                        }
                    }
                }), {
                    id: a,
                    dismiss: r,
                    update: e => u({
                        type: "UPDATE_TOAST",
                        toast: { ...e,
                            id: a
                        }
                    })
                }
            }

            function f() {
                let [e, t] = r.useState(l);
                return r.useEffect(() => (i.push(t), () => {
                    let e = i.indexOf(t);
                    e > -1 && i.splice(e, 1)
                }), [e]), { ...e,
                    toast: c,
                    dismiss: e => u({
                        type: "DISMISS_TOAST",
                        toastId: e
                    })
                }
            }
        },
        10515: (e, t, a) => {
            "use strict";
            a.d(t, {
                G7: () => u,
                L$: () => p,
                h_: () => m,
                oI: () => c,
                uB: () => l,
                xL: () => f
            });
            var r = a(95155),
                s = a(12115),
                o = a(77740),
                d = a(47924),
                n = a(29300),
                i = a.n(n);
            a(46692);
            let l = s.forwardRef((e, t) => {
                let {
                    className: a,
                    ...s
                } = e;
                return (0, r.jsx)(o.uB, {
                    ref: t,
                    className: i()("flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground", a),
                    ...s
                })
            });
            l.displayName = o.uB.displayName;
            let u = s.forwardRef((e, t) => {
                let {
                    className: a,
                    ...s
                } = e;
                return (0, r.jsxs)("div", {
                    className: "flex items-center border-b px-3",
                    "cmdk-input-wrapper": "",
                    children: [(0, r.jsx)(d.A, {
                        className: "mr-2 h-4 w-4 shrink-0 opacity-50"
                    }), (0, r.jsx)(o.uB.Input, {
                        ref: t,
                        className: i()("flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50", a),
                        ...s
                    })]
                })
            });
            u.displayName = o.uB.Input.displayName;
            let c = s.forwardRef((e, t) => {
                let {
                    className: a,
                    ...s
                } = e;
                return (0, r.jsx)(o.uB.List, {
                    ref: t,
                    className: i()("max-h-[300px] overflow-y-auto overflow-x-hidden", a),
                    ...s
                })
            });
            c.displayName = o.uB.List.displayName;
            let f = s.forwardRef((e, t) => (0, r.jsx)(o.uB.Empty, {
                ref: t,
                className: "py-6 text-center text-sm",
                ...e
            }));
            f.displayName = o.uB.Empty.displayName;
            let p = s.forwardRef((e, t) => {
                let {
                    className: a,
                    ...s
                } = e;
                return (0, r.jsx)(o.uB.Group, {
                    ref: t,
                    className: i()("overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground", a),
                    ...s
                })
            });
            p.displayName = o.uB.Group.displayName, s.forwardRef((e, t) => {
                let {
                    className: a,
                    ...s
                } = e;
                return (0, r.jsx)(o.uB.Separator, {
                    ref: t,
                    className: i()("-mx-1 h-px bg-border", a),
                    ...s
                })
            }).displayName = o.uB.Separator.displayName;
            let m = s.forwardRef((e, t) => {
                let {
                    className: a,
                    ...s
                } = e;
                return (0, r.jsx)(o.uB.Item, {
                    ref: t,
                    className: i()("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected='true']:bg-[#f3fbfc] data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50", a),
                    ...s
                })
            });
            m.displayName = o.uB.Item.displayName
        },
        10947: (e, t, a) => {
            "use strict";
            a.d(t, {
                AM: () => i,
                Wv: () => l,
                hl: () => u
            });
            var r = a(95155),
                s = a(12115),
                o = a(20547),
                d = a(29300),
                n = a.n(d);
            let i = o.bL,
                l = o.l9,
                u = s.forwardRef((e, t) => {
                    let {
                        className: a,
                        align: s = "center",
                        sideOffset: d = 4,
                        ...i
                    } = e;
                    return (0, r.jsx)(o.ZL, {
                        children: (0, r.jsx)(o.UC, {
                            ref: t,
                            align: s,
                            sideOffset: d,
                            className: n()("z-[1000] relative w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", a),
                            ...i
                        })
                    })
                });
            u.displayName = o.UC.displayName
        },
        15739: (e, t, a) => {
            "use strict";
            a.d(t, {
                A: () => n
            });
            var r = a(94052),
                s = a(36612),
                o = a(12115),
                d = a(34953);
            let n = function() {
                let {
                    startLoading: e,
                    stopLoading: t
                } = (0, s.G)(), a = (0, o.useRef)(!0), {
                    data: n,
                    isLoading: i
                } = (0, d.Ay)("/api/wallets", r.A, {
                    revalidateOnMount: !0,
                    onSuccess: () => {
                        a.current && (t(), a.current = !1)
                    },
                    onError: () => {
                        a.current && (t(), a.current = !1)
                    }
                });
                return (0, o.useEffect)(() => {
                    i && a.current && e()
                }, [i]), n
            }
        },
        33565: (e, t, a) => {
            "use strict";
            a.d(t, {
                h: () => d
            });
            var r = a(95155),
                s = a(80756),
                o = a.n(s);
            let d = e => {
                let {
                    text: t = "",
                    bgColor: a,
                    bgHover: s,
                    disabled: d,
                    onClick: n
                } = e;
                return (0, r.jsx)("button", {
                    onClick: n,
                    disabled: d,
                    type: "submit",
                    className: o().body,
                    style: {
                        "--bg-color": a,
                        "--bg-hover": s
                    },
                    children: (0, r.jsx)("p", {
                        children: t
                    })
                })
            }
        },
        36612: (e, t, a) => {
            "use strict";
            a.d(t, {
                G: () => r
            });
            let r = (0, a(65453).v)(e => ({
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
        41564: (e, t, a) => {
            "use strict";
            a.d(t, {
                A: () => s
            });
            var r = a(7531);
            let s = e => {
                let {
                    currency: t,
                    amount: a,
                    balance: s,
                    min: o,
                    max: d,
                    t: n
                } = e;
                try {
                    if (!t) return (0, r.oR)({
                        description: n("select_currency"),
                        variant: "destructive"
                    }), !1;
                    if (!a) return (0, r.oR)({
                        description: n("enter_amount"),
                        variant: "destructive"
                    }), !1;
                    if (0 > Number(a)) return (0, r.oR)({
                        description: n("positive_amount"),
                        variant: "destructive"
                    }), !1;
                    if (Number(a) < o) return (0, r.oR)({
                        description: n("amount_greater_than") + " $" + o,
                        variant: "destructive"
                    }), !1;
                    if (Number(a) < o || Number(a) > d) return (0, r.oR)({
                        description: n("amount_between") + " $" + o + " -  $" + d,
                        variant: "destructive"
                    }), !1;
                    if (Number(a) > s) return (0, r.oR)({
                        description: n("insufficient_funds", {
                            balance: s
                        }),
                        variant: "destructive"
                    }), !1;
                    return !0
                } catch (e) {
                    console.log(e)
                }
            }
        },
        46692: (e, t, a) => {
            "use strict";
            a.d(t, {
                Cf: () => p,
                HM: () => c,
                lG: () => i,
                zM: () => l
            });
            var r = a(95155),
                s = a(12115),
                o = a(25776),
                d = a(29300),
                n = a.n(d);
            let i = o.bL,
                l = o.l9,
                u = o.ZL,
                c = o.bm,
                f = s.forwardRef((e, t) => {
                    let {
                        className: a,
                        ...s
                    } = e;
                    return (0, r.jsx)(o.hJ, {
                        ref: t,
                        className: n()("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", a),
                        ...s
                    })
                });
            f.displayName = o.hJ.displayName;
            let p = s.forwardRef((e, t) => {
                let {
                    className: a,
                    children: s,
                    ...d
                } = e;
                return (0, r.jsxs)(u, {
                    children: ["dash", (0, r.jsx)(f, {}), (0, r.jsx)(o.UC, {
                        ref: t,
                        className: n()("fixed left-[50%] mb-[24px] px-[24px] top-[50%] z-50 grid w-full translate-x-[-50%] translate-y-[-50%] gap-4  duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] ", a),
                        ...d,
                        children: s
                    })]
                })
            });
            p.displayName = o.UC.displayName, s.forwardRef((e, t) => {
                let {
                    className: a,
                    ...s
                } = e;
                return (0, r.jsx)(o.VY, {
                    ref: t,
                    className: n()("text-sm text-muted-foreground", a),
                    ...s
                })
            }).displayName = o.VY.displayName
        },
        80756: e => {
            e.exports = {
                body: "button_blue_body__xatTr"
            }
        },
        84084: (e, t, a) => {
            "use strict";
            a.d(t, {
                A: () => s
            });
            var r = a(34477);
            let s = (0, r.createServerReference)("7fdf7b6294e39ce44b1e7610fca1e8ca80f7708353", r.callServer, void 0, r.findSourceMapURL, "default")
        },
        94052: (e, t, a) => {
            "use strict";
            a.d(t, {
                A: () => r
            });
            let r = function() {
                for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                return fetch(...t).then(e => e.json())
            }
        },
        98648: (e, t, a) => {
            "use strict";
            a.d(t, {
                A: () => o
            });
            var r = a(95155),
                s = a(8963);

            function o(e) {
                let {
                    title: t,
                    description: a,
                    cancelText: o = "No",
                    actionText: d = "Yes",
                    onConfirm: n,
                    children: i
                } = e;
                return (0, r.jsxs)(s.bL, {
                    children: [(0, r.jsx)(s.l9, {
                        asChild: !0,
                        children: i
                    }), (0, r.jsxs)(s.ZL, {
                        children: [(0, r.jsx)(s.hJ, {
                            className: "fixed inset-0 bg-black/50 z-50",
                            style: {
                                position: "fixed",
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                zIndex: 9999
                            }
                        }), (0, r.jsxs)(s.UC, {
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
                            children: [(0, r.jsx)(s.hE, {
                                className: "text-lg font-bold mb-2",
                                children: t
                            }), (0, r.jsx)(s.VY, {
                                className: "mb-4 text-sm text-gray-600",
                                children: a
                            }), (0, r.jsxs)("div", {
                                className: "flex justify-end gap-2",
                                children: [(0, r.jsx)(s.ZD, {
                                    asChild: !0,
                                    children: (0, r.jsx)("button", {
                                        className: "px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 transition-colors",
                                        children: o
                                    })
                                }), (0, r.jsx)(s.rc, {
                                    asChild: !0,
                                    children: (0, r.jsx)("button", {
                                        className: "px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700 transition-colors",
                                        onClick: n,
                                        children: d
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