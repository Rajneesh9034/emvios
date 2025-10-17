(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6546], {
        5367: (e, t, s) => {
            Promise.resolve().then(s.bind(s, 46096)), Promise.resolve().then(s.bind(s, 72282))
        },
        5770: (e, t, s) => {
            "use strict";
            s.d(t, {
                A: () => n
            });
            var r = s(95155),
                a = s(84567),
                l = s.n(a);
            let n = e => {
                let {
                    setCaptcha: t,
                    classname: s = " hidden",
                    theme: a = "dark"
                } = e;
                return (0, r.jsx)(l(), {
                    theme: a,
                    className: s,
                    sitekey: "0x4AAAAAABeIaF1iZ0v2kN6_",
                    onVerify: e => {
                        t(e)
                    }
                })
            }
        },
        7531: (e, t, s) => {
            "use strict";
            s.d(t, {
                dj: () => p,
                oR: () => o
            });
            var r = s(12115);
            let a = 0,
                l = new Map,
                n = e => {
                    if (l.has(e)) return;
                    let t = setTimeout(() => {
                        l.delete(e), x({
                            type: "REMOVE_TOAST",
                            toastId: e
                        })
                    }, 1e6);
                    l.set(e, t)
                },
                i = (e, t) => {
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
                                return s ? n(s) : e.toasts.forEach(e => {
                                    n(e.id)
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

            function x(e) {
                d = i(d, e), c.forEach(e => {
                    e(d)
                })
            }

            function o(e) {
                let { ...t
                } = e, s = (a = (a + 1) % Number.MAX_SAFE_INTEGER).toString(), r = () => x({
                    type: "DISMISS_TOAST",
                    toastId: s
                });
                return x({
                    type: "ADD_TOAST",
                    toast: { ...t,
                        id: s,
                        open: !0,
                        onOpenChange: e => {
                            e || r()
                        }
                    }
                }), {
                    id: s,
                    dismiss: r,
                    update: e => x({
                        type: "UPDATE_TOAST",
                        toast: { ...e,
                            id: s
                        }
                    })
                }
            }

            function p() {
                let [e, t] = r.useState(d);
                return r.useEffect(() => (c.push(t), () => {
                    let e = c.indexOf(t);
                    e > -1 && c.splice(e, 1)
                }), [e]), { ...e,
                    toast: o,
                    dismiss: e => x({
                        type: "DISMISS_TOAST",
                        toastId: e
                    })
                }
            }
        },
        11808: (e, t, s) => {
            "use strict";
            s.r(t), s.d(t, {
                default: () => r
            });
            let r = {
                src: "/_next/static/media/check_circle.2110335c.svg",
                height: 21,
                width: 21,
                blurWidth: 0,
                blurHeight: 0
            }
        },
        13555: (e, t, s) => {
            "use strict";
            s.d(t, {
                A: () => l
            });
            var r = s(12115),
                a = s(7531);
            let l = function(e) {
                let [t, s] = (0, r.useState)(e || "");
                return {
                    error: t,
                    setError: e => {
                        (0, a.oR)({
                            title: e,
                            variant: "destructive"
                        })
                    }
                }
            }
        },
        15739: (e, t, s) => {
            "use strict";
            s.d(t, {
                A: () => i
            });
            var r = s(94052),
                a = s(36612),
                l = s(12115),
                n = s(34953);
            let i = function() {
                let {
                    startLoading: e,
                    stopLoading: t
                } = (0, a.G)(), s = (0, l.useRef)(!0), {
                    data: i,
                    isLoading: c
                } = (0, n.Ay)("/api/wallets", r.A, {
                    revalidateOnMount: !0,
                    onSuccess: () => {
                        s.current && (t(), s.current = !1)
                    },
                    onError: () => {
                        s.current && (t(), s.current = !1)
                    }
                });
                return (0, l.useEffect)(() => {
                    c && s.current && e()
                }, [c]), i
            }
        },
        28808: (e, t, s) => {
            "use strict";
            s.d(t, {
                NV: () => x,
                UV: () => d,
                sF: () => o
            });
            var r = s(95155),
                a = s(12115),
                l = s(1184),
                n = s(88411),
                i = s(29300),
                c = s.n(i);
            let d = a.forwardRef((e, t) => {
                let {
                    className: s,
                    containerClassName: a,
                    ...n
                } = e;
                return (0, r.jsx)(l.wE, {
                    ref: t,
                    containerClassName: c()("flex items-center gap-2 has-[:disabled]:opacity-50", a),
                    className: c()("disabled:cursor-not-allowed", s),
                    ...n
                })
            });
            d.displayName = "InputOTP";
            let x = a.forwardRef((e, t) => {
                let {
                    className: s,
                    ...a
                } = e;
                return (0, r.jsx)("div", {
                    ref: t,
                    className: c()("flex items-center", s),
                    ...a
                })
            });
            x.displayName = "InputOTPGroup";
            let o = a.forwardRef((e, t) => {
                let {
                    index: s,
                    className: n,
                    ...i
                } = e, {
                    char: d,
                    hasFakeCaret: x,
                    isActive: o
                } = a.useContext(l.dK).slots[s];
                return (0, r.jsxs)("div", {
                    ref: t,
                    className: c()("relative flex mx-[8px] h-[30px] w-[30px] items-center justify-center border-solid border-[1px] border-[#cecece] text-[14px] transition-all first:ml-0 rounded-md last:mr-0", o && "z-10 ring-2 border-none ring-[#00b2c8] ring-offset-[#00b2c8]", n),
                    ...i,
                    children: [d ? "•" : "", x && (0, r.jsx)("div", {
                        className: "pointer-events-none absolute inset-0 flex items-center justify-center",
                        children: (0, r.jsx)("div", {
                            className: "h-4 w-px animate-caret-blink bg-foreground duration-1000"
                        })
                    })]
                })
            });
            o.displayName = "InputOTPSlot", a.forwardRef((e, t) => {
                let { ...s
                } = e;
                return (0, r.jsx)("div", {
                    ref: t,
                    role: "separator",
                    ...s,
                    children: (0, r.jsx)(n.A, {})
                })
            }).displayName = "InputOTPSeparator"
        },
        30020: e => {
            e.exports = {
                body: "processing_body__AJULi",
                list: "processing_list__oUUG1",
                title: "processing_title__E7_rX",
                circle: "processing_circle__eaNp4",
                blue: "processing_blue__35kL8",
                line: "processing_line__zvY8O",
                buttons: "processing_buttons__qR39K",
                ul: "processing_ul__1Gl5Q",
                ammount: "processing_ammount__gnely",
                setup: "processing_setup__UVxAx",
                input: "processing_input__Ff9Pa"
            }
        },
        33565: (e, t, s) => {
            "use strict";
            s.d(t, {
                h: () => n
            });
            var r = s(95155),
                a = s(80756),
                l = s.n(a);
            let n = e => {
                let {
                    text: t = "",
                    bgColor: s,
                    bgHover: a,
                    disabled: n,
                    onClick: i
                } = e;
                return (0, r.jsx)("button", {
                    onClick: i,
                    disabled: n,
                    type: "submit",
                    className: l().body,
                    style: {
                        "--bg-color": s,
                        "--bg-hover": a
                    },
                    children: (0, r.jsx)("p", {
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
                G: () => r
            });
            let r = (0, s(65453).v)(e => ({
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
        41046: e => {
            e.exports = {
                body: "confirmation_body__DZ1EL",
                list: "confirmation_list__ibIX4",
                title: "confirmation_title__B_z_h",
                circle: "confirmation_circle__4WcWT",
                blue: "confirmation_blue__RhVjc",
                line: "confirmation_line__7lFkH",
                buttons: "confirmation_buttons__L_5Q6",
                ul: "confirmation_ul__pJVOd",
                ammount: "confirmation_ammount__dUtkz",
                setup: "confirmation_setup__Pehwx",
                input: "confirmation_input__ijhsY"
            }
        },
        68119: (e, t, s) => {
            "use strict";
            s.d(t, {
                B: () => n
            });
            var r = s(95155),
                a = s(35552),
                l = s.n(a);
            let n = e => {
                let {
                    onClick: t,
                    text: s,
                    disabled: a,
                    ...n
                } = e;
                return (0, r.jsx)("button", {
                    disabled: a,
                    onClick: t,
                    ...n,
                    className: l().body,
                    children: s
                })
            }
        },
        69440: e => {
            e.exports = {
                body: "withdrawal_body__kspWM",
                list: "withdrawal_list__DCNgj",
                title: "withdrawal_title__0EcCq",
                circle: "withdrawal_circle__IXHVa",
                blue: "withdrawal_blue__uZwHD",
                line: "withdrawal_line____U3D",
                buttons: "withdrawal_buttons__vgBBe",
                ammount: "withdrawal_ammount__EIZjs"
            }
        },
        72282: (e, t, s) => {
            "use strict";
            s.d(t, {
                default: () => P
            });
            var r = s(95155),
                a = s(15739),
                l = s(12115),
                n = s(96780),
                i = s(33565),
                c = s(69440),
                d = s.n(c),
                x = s(29300),
                o = s.n(x),
                p = s(13555),
                u = s(17652),
                f = s(94794),
                h = s(34477);
            let m = (0, h.createServerReference)("7f33ec11c3eb68b0f7cb3ed1ec4ee46f347e70fa8a", h.callServer, void 0, h.findSourceMapURL, "default");
            var _ = s(98160),
                b = s.n(_);
            let v = (0, h.createServerReference)("7f6f813ae4bb070a7d4c955095176c7ccf679da9e9", h.callServer, void 0, h.findSourceMapURL, "default");
            var j = s(66766),
                w = s(36612);

            function g(e) {
                let {
                    amount: t,
                    amountConvert: s,
                    handleAmountChange: a,
                    handleConvertChange: n,
                    handleMax: c,
                    currency: x,
                    network: h,
                    wallet: _,
                    networks: g,
                    setStep: N,
                    setTransaction: y,
                    transaction: k
                } = e, S = (0, u.c3)("Errors"), A = (0, u.c3)("Dashboard"), {
                    error: C,
                    setError: T
                } = (0, p.A)(), [M, L] = (0, l.useState)(!1), {
                    setVisible: E
                } = (0, w.G)();
                async function R() {
                    try {
                        if (L(!0), !x) {
                            T(S("choose-currency")), L(!1);
                            return
                        }
                        if (!h) {
                            T(S("choose-network")), L(!1);
                            return
                        }
                        if (!t) {
                            T(S("enter_amount") + " " + _.abr), L(!1);
                            return
                        }
                        let e = g.find(e => e.network == h) || {
                                minSum: 0,
                                fee: 0
                            },
                            s = Number((0, f.A)(Number(e.minSum) + Number(e.fee), 8));
                        if (Number(t) < s) {
                            T(" ".concat(S("the_minimum_withdrawal_amount_is", {
                                minSum: String(s).length > 8 ? (0, f.A)(s, 8) : s
                            }), "  ").concat(_.abr)), L(!1);
                            return
                        }
                        if (Number(t) > Number(_.sum)) {
                            T("".concat(S("insufficient_funds-2", {
                                amount: _.sum,
                                abr: _.abr
                            }))), L(!1);
                            return
                        }
                        if (!k.userWallet) {
                            T(S("enter_wallet_address")), L(!1);
                            return
                        }
                        if (b().findCurrency(_.abr) && !b().validate(k.userWallet.trim(), _.abr)) {
                            T(S("the_entered_address_is_not_a_valid")), L(!1);
                            return
                        }
                        if (await v(k.userWallet)) return void T(S("the_entered_address_is_not_a_valid"));
                        E(!1), N(2)
                    } catch (e) {
                        console.log(e), T(S("something_went_wrong"))
                    } finally {
                        L(!1)
                    }
                }
                return (0, r.jsxs)("div", {
                    className: d().body,
                    children: [(0, r.jsxs)("div", {
                        className: "flex flex-col gap-[24px] w-full",
                        children: [(0, r.jsxs)("p", {
                            className: d().title,
                            children: [x, " ", A("withdrawal")]
                        }), (0, r.jsxs)("div", {
                            className: d().list,
                            children: [(0, r.jsxs)("div", {
                                className: "flex items-center gap-[16px] px-[16px] py-[8px]",
                                children: [(0, r.jsx)("div", {
                                    className: o()(d().circle, d().blue),
                                    children: "1"
                                }), (0, r.jsx)("p", {
                                    className: "min-w-[55px]  text-[14px] text-start ",
                                    children: A("place_an_order")
                                })]
                            }), (0, r.jsx)("div", {
                                className: o()(d().line, "bg-[#00b2c8]")
                            }), (0, r.jsxs)("div", {
                                className: "flex items-center gap-[16px] px-[16px] py-[8px]",
                                children: [(0, r.jsx)("div", {
                                    className: d().circle,
                                    children: "2"
                                }), (0, r.jsx)("p", {
                                    className: "  text-[14px] text-center ",
                                    children: A("confirmation")
                                })]
                            }), (0, r.jsx)("div", {
                                className: o()(d().line, "bg-[#a1aebe]")
                            }), (0, r.jsxs)("div", {
                                className: "flex items-center gap-[16px] px-[16px] py-[8px]",
                                children: [(0, r.jsx)("div", {
                                    className: d().circle,
                                    children: "3"
                                }), (0, r.jsx)("p", {
                                    className: "  text-[14px] text-center ",
                                    children: A("processing")
                                })]
                            })]
                        })]
                    }), (0, r.jsx)("div", {
                        className: "flex   self-stretch   gap-[20px]",
                        children: (0, r.jsxs)("div", {
                            className: "flex flex-col   flex-grow gap-[22px]",
                            children: [(0, r.jsxs)("div", {
                                className: d().ammount,
                                children: [(0, r.jsxs)("div", {
                                    className: "flex flex-col max-w-[319px] flex-grow flex-shrink gap-[16px]",
                                    children: [(0, r.jsx)("p", {
                                        className: "self-stretch    text-[14px]   ",
                                        children: A("withdrawal_amount_usd")
                                    }), (0, r.jsxs)("div", {
                                        className: "flex   self-stretch  ",
                                        children: [(0, r.jsxs)("div", {
                                            className: "flex justify-between items-center self-stretch flex-grow   px-[16px] py-[8px] rounded-tl-md rounded-bl-md bg-neutral-50 border-t-[1px] border-solid border-r-0 border-b-[1px] border-l-[1px] border-[#cecece]",
                                            children: [(0, r.jsx)("input", {
                                                className: "text-[14px] bg-transparent w-full",
                                                type: "text",
                                                value: s,
                                                onChange: e => n(e.target.value)
                                            }), (0, r.jsx)("p", {
                                                className: "text-[14px]  cursor-pointer",
                                                onClick: c,
                                                children: "MAX"
                                            })]
                                        }), (0, r.jsx)("div", {
                                            className: "flex flex-col  items-center self-stretch     gap-[8px] px-[16px] py-[8px] rounded-tr-md rounded-br-md bg-[#00b2c8]",
                                            children: (0, r.jsx)("p", {
                                                className: "  text-base  uppercase text-white",
                                                children: "$"
                                            })
                                        })]
                                    })]
                                }), (0, r.jsxs)("div", {
                                    className: "flex flex-col max-w-[319px] flex-grow flex-shrink  gap-[16px]",
                                    children: [(0, r.jsxs)("p", {
                                        className: "self-stretch text-[14px]",
                                        children: [A("withdrawal_amount"), " ", x]
                                    }), (0, r.jsxs)("div", {
                                        className: "flex   self-stretch  ",
                                        children: [(0, r.jsx)("div", {
                                            className: "flex flex-col justify-center  flex-grow   gap-[8px] px-[16px] py-[8px] rounded-tl-md rounded-bl-md bg-neutral-50 border-t-[1px] border-r-0 border-b-[1px] border-l-[1px] border-solid border-[#cecece]",
                                            children: (0, r.jsx)("input", {
                                                className: "text-[14px] bg-transparent w-full",
                                                type: "text",
                                                value: t,
                                                onChange: e => a(e.target.value)
                                            })
                                        }), (0, r.jsx)("div", {
                                            className: "flex justify-center items-center self-stretch gap-[8px] px-[12px] py-[8px] rounded-tr-md rounded-br-md bg-[#00b2c8]",
                                            children: (0, r.jsx)(j.default, {
                                                src: "/wallets/".concat(x.toLowerCase(), ".png"),
                                                width: 25,
                                                height: 25,
                                                alt: "icon",
                                                style: {
                                                    filter: "brightness(0) invert(1)"
                                                }
                                            })
                                        })]
                                    })]
                                })]
                            }), (0, r.jsxs)("div", {
                                className: "flex flex-col   self-stretch   gap-[16px]",
                                children: [(0, r.jsxs)("div", {
                                    className: "flex justify-between items-center self-stretch   ",
                                    children: [(0, r.jsx)("p", {
                                        className: "  text-[14px]   ",
                                        children: A("wallet_address")
                                    }), x && (0, r.jsx)("p", {
                                        onClick: async () => y({ ...k,
                                            userWallet: await m(_.abr, h || "")
                                        }),
                                        className: "  text-[14px] cursor-pointer underline text-[#00b2c8]",
                                        children: A("last_used_address")
                                    })]
                                }), (0, r.jsx)("div", {
                                    className: "flex flex-col justify-center min-h-[40px] items-center self-stretch  gap-[8px] px-[16px] py-[8px] rounded-[6px] bg-neutral-50 border-[1px] border-solid border-[#cecece]",
                                    children: (0, r.jsx)("input", {
                                        onChange: e => y({ ...k,
                                            userWallet: e.target.value
                                        }),
                                        value: k.userWallet,
                                        type: "text",
                                        className: "text-[14px]   text-[#8a8181] bg-transparent w-full",
                                        placeholder: x ? A("enter_wallet_address_for_withdrawal_only", {
                                            currency: x
                                        }) : A("enter_wallet_address_for_withdrawal")
                                    })
                                })]
                            })]
                        })
                    }), (0, r.jsx)("p", {
                        className: "text-[#ff0000] text-center ",
                        children: C
                    }), (0, r.jsx)("div", {
                        className: d().buttons,
                        children: (0, r.jsx)(i.h, {
                            disabled: M,
                            onClick: R,
                            text: A("next")
                        })
                    })]
                })
            }
            var N = s(41046),
                y = s.n(N),
                k = s(11808),
                S = s(68119),
                A = s(6874),
                C = s.n(A),
                T = s(28808),
                M = s(45567);
            let L = (0, h.createServerReference)("7ff0cbce37f970ce50ff13403b32b52ff880e02c7b", h.callServer, void 0, h.findSourceMapURL, "default"),
                E = (0, h.createServerReference)("7f03f5aec760fa849008402cfa518b98f00ecf29db", h.callServer, void 0, h.findSourceMapURL, "default");
            var R = s(5770),
                I = s(84567),
                O = s(7531);

            function D(e) {
                let {
                    currency: t,
                    network: s,
                    amount: a,
                    wallet: n,
                    fee: c,
                    currencyName: d,
                    setStep: x,
                    setTransaction: f
                } = e, h = (0, I.useTurnstile)(), [m, _] = (0, l.useState)(!1), [b, v] = (0, l.useState)(""), g = (0, u.c3)("Errors"), N = (0, u.c3)("Dashboard"), [A, D] = (0, l.useState)(""), {
                    setVisible: W
                } = (0, w.G)(), {
                    error: F,
                    setError: U
                } = (0, p.A)("");
                async function V() {
                    _(!0);
                    let e = await E(A);
                    if (void 0 === e) {
                        U(g("pin_code_is_not_set")), _(!1);
                        return
                    }
                    if (4 !== A.length) {
                        U(g("enter_pin_code-1")), _(!1);
                        return
                    }
                    if (!1 === e) {
                        U(g("incorrect_pin_code")), D(""), _(!1);
                        return
                    }
                    if (!b) {
                        (0, O.oR)({
                            description: g("pending_captcha"),
                            variant: "destructive"
                        }), _(!1);
                        return
                    }
                    try {
                        let {
                            id: e,
                            status: r,
                            error: l
                        } = await L({
                            paysys: t,
                            network: s,
                            amount: Number(a),
                            wallet: n.trim(),
                            pinCode: A,
                            captcha: b
                        });
                        201 == r ? (x(3), f({
                            userWallet: "",
                            id: e
                        }), (0, M.j)("/api/wallets")) : U(l)
                    } catch (e) {
                        U(g("something_went_wrong")), console.log("error", e)
                    } finally {
                        h.reset(), _(!1), v("")
                    }
                }
                return (0, r.jsxs)("div", {
                    className: y().body,
                    children: [(0, r.jsx)(R.A, {
                        setCaptcha: v
                    }), (0, r.jsxs)("div", {
                        className: "flex flex-col gap-[24px] w-full",
                        children: [(0, r.jsxs)("p", {
                            className: y().title,
                            children: [t, " ", N("withdrawal")]
                        }), (0, r.jsxs)("div", {
                            className: y().list,
                            children: [(0, r.jsxs)("div", {
                                className: "flex items-center gap-[16px] px-[16px] py-[8px]",
                                children: [(0, r.jsx)("div", {
                                    className: "flex-shrink-0 flex-grow-0 basis-[32px]",
                                    children: (0, r.jsx)(j.default, {
                                        src: k.default,
                                        width: 32,
                                        height: 32,
                                        alt: "icon"
                                    })
                                }), (0, r.jsx)("p", {
                                    className: "  text-[14px] text-nowrap text-center text-[#00b2c8]",
                                    children: N("place_an_order")
                                })]
                            }), (0, r.jsx)("div", {
                                className: o()(y().line, "bg-[#00b2c8]")
                            }), (0, r.jsxs)("div", {
                                className: "flex items-center gap-[16px] px-[16px] py-[8px]",
                                children: [(0, r.jsx)("div", {
                                    className: o()(y().circle, y().blue),
                                    children: "2"
                                }), (0, r.jsx)("p", {
                                    className: "  text-[14px] text-center ",
                                    children: N("confirmation")
                                })]
                            }), (0, r.jsx)("div", {
                                className: o()(y().line, "bg-[#a1aebe]")
                            }), (0, r.jsxs)("div", {
                                className: "flex items-center gap-[16px] px-[16px] py-[8px]",
                                children: [(0, r.jsx)("div", {
                                    className: y().circle,
                                    children: "3"
                                }), (0, r.jsx)("p", {
                                    className: "  text-[14px] text-center ",
                                    children: N("processing")
                                })]
                            })]
                        })]
                    }), (0, r.jsxs)("div", {
                        className: "flex flex-col self-stretch    gap-[16px] p-[16px] rounded-md  border border-solid border-[#e6e6e6]",
                        children: [(0, r.jsx)("p", {
                            className: "text-[16px] text-black font-[400]",
                            children: N("payment_information")
                        }), (0, r.jsxs)("ul", {
                            className: y().ul,
                            children: [(0, r.jsxs)("li", {
                                children: [(0, r.jsxs)("span", {
                                    className: "flex-grow  text-[14px]   ",
                                    children: [N("cryptocurrency"), ":"]
                                }), (0, r.jsx)("span", {
                                    className: "flex-grow  text-[14px]  mx-[4px] font-medium  ",
                                    children: d
                                })]
                            }), (0, r.jsxs)("li", {
                                children: [(0, r.jsxs)("span", {
                                    className: "flex-grow text-[14px]   ",
                                    children: [N("network"), ":"]
                                }), (0, r.jsx)("span", {
                                    className: "flex-grow  mx-[4px] text-[14px] font-medium  ",
                                    children: s
                                })]
                            }), (0, r.jsxs)("li", {
                                children: [(0, r.jsxs)("span", {
                                    className: "flex-grow  text-[14px]   ",
                                    children: [N("wallet_address_for_withdrawal"), ":"]
                                }), (0, r.jsx)("span", {
                                    className: "flex-grow  text-[14px]  mx-[4px] font-medium  break-all",
                                    children: n
                                })]
                            }), (0, r.jsxs)("li", {
                                children: [(0, r.jsxs)("span", {
                                    className: "flex-grow  text-[14px]   ",
                                    children: [N("fee"), ":"]
                                }), (0, r.jsxs)("span", {
                                    className: "flex-grow  text-[14px]  mx-[4px] font-medium  ",
                                    children: [c, " ", t]
                                })]
                            }), (0, r.jsxs)("li", {
                                children: [(0, r.jsxs)("span", {
                                    className: "flex-grow  text-[14px]   ",
                                    children: [N("you_receive"), ":"]
                                }), (0, r.jsxs)("span", {
                                    className: "flex-grow  text-[14px]  mx-[4px] font-medium  ",
                                    children: [a - c, " ", t]
                                })]
                            })]
                        })]
                    }), (0, r.jsx)("div", {
                        className: y().ammount,
                        children: (0, r.jsxs)("div", {
                            className: "flex flex-col max-w-[319px] flex-grow flex-shrink gap-[16px]",
                            children: [(0, r.jsxs)("p", {
                                className: "self-stretch text-[14px] relative",
                                children: [N("enter_pin_code"), (0, r.jsx)(C(), {
                                    target: "_blank",
                                    href: "/profile/pincode",
                                    className: y().setup,
                                    children: N("setup")
                                })]
                            }), (0, r.jsx)(T.UV, {
                                maxLength: 4,
                                inputMode: "numeric",
                                value: A,
                                onChange: D,
                                children: (0, r.jsxs)(T.NV, {
                                    children: [(0, r.jsx)(T.sF, {
                                        index: 0
                                    }), (0, r.jsx)(T.sF, {
                                        index: 1
                                    }), (0, r.jsx)(T.sF, {
                                        index: 2
                                    }), (0, r.jsx)(T.sF, {
                                        index: 3
                                    })]
                                })
                            })]
                        })
                    }), (0, r.jsxs)("div", {
                        className: y().buttons,
                        children: [(0, r.jsx)("span", {
                            children: (0, r.jsx)(S.B, {
                                onClick: () => {
                                    x(1), W(!0)
                                },
                                text: N("back")
                            })
                        }), F && (0, r.jsx)("div", {
                            className: "text-[#CD1F1F] w-full text-center",
                            dangerouslySetInnerHTML: {
                                __html: F
                            }
                        }), (0, r.jsx)("span", {
                            children: (0, r.jsx)(i.h, {
                                disabled: m || !b,
                                onClick: V,
                                text: N(m || !b ? "loading" : "confirm")
                            })
                        })]
                    })]
                })
            }
            var W = s(30020),
                F = s.n(W),
                U = s(94052),
                V = s(34953);
            let B = function(e) {
                let {
                    data: t
                } = (0, V.Ay)(e, U.A, {
                    refreshInterval: 1e4
                });
                return t
            };

            function G(e) {
                let {
                    id: t,
                    setStep: s,
                    currency: a
                } = e, {
                    setVisible: n
                } = (0, w.G)(), [c, d] = (0, l.useState)("/api/status?id=".concat(t)), x = (0, u.c3)("Dashboard"), p = B(c), [f, h] = (0, l.useState)({
                    explorer_url: "",
                    status: 1
                });
                return (0, l.useEffect)(() => {
                    p && 1 !== p.status && (h({ ...p
                    }), d(null))
                }, [p]), (0, r.jsxs)("div", {
                    className: F().body,
                    children: [(0, r.jsxs)("div", {
                        className: "flex flex-col gap-[24px] w-full",
                        children: [(0, r.jsxs)("p", {
                            className: F().title,
                            children: [a, " ", x("withdrawal")]
                        }), (0, r.jsxs)("div", {
                            className: F().list,
                            children: [(0, r.jsxs)("div", {
                                className: "flex items-center gap-[16px] px-[16px] py-[8px]",
                                children: [(0, r.jsx)("div", {
                                    className: "  basis-[32px]",
                                    children: (0, r.jsx)(j.default, {
                                        src: k.default,
                                        width: 32,
                                        height: 32,
                                        alt: "icon"
                                    })
                                }), (0, r.jsx)("p", {
                                    className: "  text-[14px] text-nowrap text-center text-[#00b2c8]",
                                    children: x("place_an_order")
                                })]
                            }), (0, r.jsx)("div", {
                                className: o()(F().line, "bg-[#00b2c8]")
                            }), (0, r.jsxs)("div", {
                                className: "flex items-center gap-[16px] px-[16px] py-[8px]",
                                children: [(0, r.jsx)("div", {
                                    className: "  basis-[32px]",
                                    children: (0, r.jsx)(j.default, {
                                        src: k.default,
                                        width: 32,
                                        height: 32,
                                        alt: "icon"
                                    })
                                }), (0, r.jsx)("p", {
                                    className: "  text-[14px] text-center ",
                                    children: x("confirmation")
                                })]
                            }), (0, r.jsx)("div", {
                                className: o()(F().line, "bg-[#00b2c8]")
                            }), (0, r.jsxs)("div", {
                                className: "flex items-center gap-[16px] px-[16px] py-[8px]",
                                children: [2 === f.status ? (0, r.jsx)("div", {
                                    className: "  basis-[32px]",
                                    children: (0, r.jsx)(j.default, {
                                        src: k.default,
                                        width: 32,
                                        height: 32,
                                        alt: "icon"
                                    })
                                }) : (0, r.jsx)("div", {
                                    className: F().circle,
                                    children: "2"
                                }), (0, r.jsx)("p", {
                                    className: "  text-[14px] text-center ",
                                    children: x("processing")
                                })]
                            })]
                        })]
                    }), (0, r.jsxs)("div", {
                        className: "flex flex-col justify-center  self-stretch   gap-[16px] p-[16px] rounded-[6px] border border-solid border-[#e6e6e6]",
                        children: [(0, r.jsxs)("div", {
                            className: "flex     relative gap-[16px]",
                            children: [(0, r.jsx)("svg", {
                                width: 24,
                                height: 25,
                                viewBox: "0 0 24 25",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "  w-[24px] h-[24px] relative flex-shrink-0 flex-grow-0 basis-[24px]",
                                preserveAspectRatio: "none",
                                children: (0, r.jsx)("path", {
                                    d: "M3 12.5333L8.68421 19.7333L21 5.33333",
                                    stroke: "#45C688",
                                    strokeWidth: "1.5",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round"
                                })
                            }), (0, r.jsx)("p", {
                                className: "text-[14px]",
                                children: x("waiting_for_payment_processor")
                            })]
                        }), (0, r.jsxs)("div", {
                            className: "flex items-center relative gap-[16px]",
                            children: [(0, r.jsx)("svg", {
                                width: 24,
                                height: 25,
                                viewBox: "0 0 24 25",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "  w-[24px] h-[24px] relative flex-shrink-0 flex-grow-0 basis-[24px]",
                                preserveAspectRatio: "none",
                                children: (0, r.jsx)("path", {
                                    d: "M3 12.5333L8.68421 19.7333L21 5.33333",
                                    stroke: "#45C688",
                                    strokeWidth: "1.5",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round"
                                })
                            }), (0, r.jsx)("p", {
                                className: "text-[14px]",
                                children: x("wallet_address_validation")
                            })]
                        }), (0, r.jsxs)("div", {
                            className: "flex  relative gap-[16px]",
                            children: [(null == f ? void 0 : f.status) !== 1 && (0, r.jsx)("svg", {
                                width: 24,
                                height: 25,
                                viewBox: "0 0 24 25",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "  w-[24px] h-[24px] relative flex-shrink-0 flex-grow-0 basis-[24px]",
                                preserveAspectRatio: "none",
                                children: (0, r.jsx)("path", {
                                    d: "M3 12.5333L8.68421 19.7333L21 5.33333",
                                    stroke: "#45C688",
                                    strokeWidth: "1.5",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round"
                                })
                            }), (null == f ? void 0 : f.status) === 1 && (0, r.jsx)("svg", {
                                width: 24,
                                height: 25,
                                viewBox: "0 0 24 25",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "w-[24px] h-[24px] relative flex-shrink-0 flex-grow-0 basis-[24px] animate-spin",
                                preserveAspectRatio: "none",
                                children: (0, r.jsx)("path", {
                                    d: "M19.0894 8.13332C20.1994 9.61332 20.8894 11.4433 20.8894 13.4433C20.8894 18.3533 16.9094 22.3333 11.9994 22.3333C7.08939 22.3333 3.10938 18.3533 3.10938 13.4433C3.10938 8.53331 7.08939 4.5533 11.9994 4.5533C12.6794 4.5533 13.3394 4.64335 13.9794 4.79335",
                                    stroke: "#00B2C8",
                                    strokeWidth: "1.5",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round"
                                })
                            }), (0, r.jsx)("p", {
                                className: "text-[14px]",
                                children: x("creating_a_transaction")
                            })]
                        })]
                    }), (null == f ? void 0 : f.status) !== 1 && (0, r.jsx)("div", {
                        className: "flex flex-col justify-center items-center self-stretch  relative gap-[16px] p-[16px] rounded-[6px] border border-solid border-[#e6e6e6]",
                        children: (0, r.jsxs)("p", {
                            className: "self-stretch flex-grow text-[10px] text-center",
                            children: [(0, r.jsxs)("span", {
                                className: "self-stretch mr-[4px] flex-grow  text-[10px] font-medium text-center ",
                                children: [x("transaction"), ":"]
                            }), (0, r.jsxs)("span", {
                                className: "self-stretch flex-grow  text-[10px] text-center text-[#00b2c8]",
                                children: [(null == f ? void 0 : f.status) === 2 && x("your_withdrawal_has_been_completed"), (null == f ? void 0 : f.status) === 3 && x("your_withdrawal_has_failed")]
                            })]
                        })
                    }), (0, r.jsx)("div", {
                        className: F().buttons,
                        children: (0, r.jsx)("span", {
                            children: (0, r.jsx)(i.h, {
                                onClick: () => {
                                    s(1), n(!0)
                                },
                                text: x("close")
                            })
                        })
                    })]
                })
            }

            function P() {
                let {
                    currency: e,
                    network: t
                } = (0, w.G)(), s = (0, a.A)(), i = null == s ? void 0 : s.find(t => t.abr == e), c = (0, n.A)(e ? {
                    currency: e
                } : {}), [d, x] = (0, l.useState)(1), [o, p] = (0, l.useState)({
                    userWallet: "",
                    id: ""
                }), {
                    amount: u,
                    amountConvert: f,
                    handleAmountChange: h,
                    handleConvertChange: m,
                    handleMax: _
                } = function(e, t) {
                    let [s, r] = (0, l.useState)(""), [a, n] = (0, l.useState)(""), i = e => /^\d*(?:[.,]\d+)?$/.test(e), c = e => e.replace(",", "."), d = (0, l.useCallback)(t => {
                        if (!(null == e ? void 0 : e.price)) return;
                        let s = c(t);
                        if (/^[^.]*[.,](?![.,])$/.test(t)) return void r(s);
                        i(t) && (r(s), n((Number(s) * e.price).toFixed(2)))
                    }, [e]);
                    return {
                        amount: s,
                        amountConvert: a,
                        handleAmountChange: d,
                        handleConvertChange: (0, l.useCallback)(t => {
                            if (!(null == e ? void 0 : e.price)) return;
                            let s = c(t);
                            if (/^[^.]*[.,](?![.,])$/.test(t)) return void n(s);
                            i(t) && (n(s), r((Number(s) / e.price).toFixed(8)))
                        }, [e]),
                        handleMax: (0, l.useCallback)(() => {
                            if (null == t || 0 === t) {
                                r("0"), n("0");
                                return
                            }
                            if (!(null == e ? void 0 : e.price) || !t) return;
                            let s = (t * e.price).toFixed(2);
                            r(String(t)), n(s)
                        }, [e, t])
                    }
                }(i, null == i ? void 0 : i.sum);
                switch (d) {
                    case 1:
                    default:
                        return (0, r.jsx)(g, {
                            amount: u,
                            amountConvert: f,
                            handleAmountChange: h,
                            handleConvertChange: m,
                            handleMax: _,
                            currency: e || "",
                            network: t || "",
                            wallet: i || {},
                            networks: c,
                            setStep: x,
                            setTransaction: p,
                            transaction: o
                        });
                    case 2:
                        return (0, r.jsx)(D, {
                            currency: e || "",
                            network: t || "",
                            amount: Number(u),
                            wallet: o.userWallet || "",
                            fee: Number(c.find(e => e.network == t).fee || 0),
                            currencyName: i.name,
                            setStep: x,
                            setTransaction: p
                        });
                    case 3:
                        return (0, r.jsx)(G, {
                            id: o.id,
                            setStep: x,
                            currency: e || ""
                        })
                }
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
                A: () => r
            });
            let r = function() {
                for (var e = arguments.length, t = Array(e), s = 0; s < e; s++) t[s] = arguments[s];
                return fetch(...t).then(e => e.json())
            }
        },
        94794: (e, t, s) => {
            "use strict";

            function r(e, t) {
                var s = Number((Math.floor(e * Math.pow(10, t)) / Math.pow(10, t)).toFixed(t));
                if (1 > Math.abs(s)) {
                    var r = parseInt(s.toString().split("e-")[1]);
                    r && (s *= Math.pow(10, r - 1), s = "0." + Array(r).join("0") + s.toString().substring(2))
                } else {
                    var r = parseInt(s.toString().split("+")[1]);
                    r > 20 && (r -= 20, s /= Math.pow(10, r), s += Array(r + 1).join("0"))
                }
                return s
            }
            s.d(t, {
                A: () => r
            })
        },
        96780: (e, t, s) => {
            "use strict";
            s.d(t, {
                A: () => l
            });
            var r = s(94052),
                a = s(34953);
            let l = function(e) {
                let {
                    currency: t
                } = e, {
                    data: s
                } = (0, a.Ay)(t ? "/api/networks/".concat(t) : "", r.A, {
                    revalidateOnMount: !0
                });
                return s
            }
        }
    },
    e => {
        var t = t => e(e.s = t);
        e.O(0, [9149, 3700, 6453, 3063, 6874, 4953, 3870, 9231, 6629, 8441, 1684, 7358], () => t(5367)), _N_E = e.O()
    }
]);