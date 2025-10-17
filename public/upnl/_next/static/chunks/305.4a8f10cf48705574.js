"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [305], {
        30305: (e, t, s) => {
            s.r(t), s.d(t, {
                default: () => k
            });
            var i = s(95155),
                a = s(66766);
            let r = {
                src: "/_next/static/media/rocket.fb930c87.png",
                height: 100,
                width: 100,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAIVBMVEVMcY8wOmtOS3pLzNw2uMwctcsatsyzvc3FwdNmuMx4v9MHLETHAAAAC3RSTlMBDRzTmN/pTkfN0fwb/hAAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAtSURBVHicY2BAAiwsYIqRkZmZgRHMYGOFMNg5uTjADCYmJiYQg4GJkYEJSS8AC6UAU114wegAAAAASUVORK5CYII=",
                blurWidth: 8,
                blurHeight: 8
            };
            var l = s(48569),
                c = s(22259),
                n = s.n(c),
                o = s(29300),
                x = s.n(o),
                d = s(60388),
                p = s(12115),
                h = s(17652);

            function _(e) {
                let {
                    data: t
                } = e, s = (0, h.c3)("Dashboard"), {
                    secret: a,
                    pin: r,
                    withdraw_id: l,
                    deposit_id: c,
                    investment_id: o
                } = t, _ = 20, f = 1;
                [a && r, l, c, o].forEach(e => {
                    e && (_ += 20, f += 1)
                });
                let [j, u] = (0, p.useState)(!1);
                return (0, i.jsxs)(i.Fragment, {
                    children: [(!a || !r || !l || !c || !o) && (0, i.jsxs)("div", {
                        className: "p-[24px] flex flex-col gap-[16px] rounded-[6px] bg-white border border-[#e6e6e6] border-solid",
                        children: [(0, i.jsxs)("div", {
                            className: x()(n().accordion, {
                                [n().active]: j
                            }),
                            children: [(0, i.jsx)("p", {
                                className: "text-[14px] font-[400]  uppercase text-[#828282]",
                                children: s("getting_started")
                            }), (0, i.jsx)("div", {
                                className: "h-0 relative",
                                children: (0, i.jsxs)("div", {
                                    className: n().accordion_header,
                                    children: [(0, i.jsx)("p", {
                                        className: "self-stretch text-[14px]",
                                        children: s("complete_simple_tasks_that_will_help_you_get_started_with_emvios")
                                    }), (0, i.jsxs)("div", {
                                        className: "flex justify-between gap-[16px] self-stretch",
                                        children: [(0, i.jsxs)("p", {
                                            className: " text-[14px]",
                                            children: [s("progress"), ": ", _, "%"]
                                        }), (0, i.jsxs)("p", {
                                            className: " text-[14px]",
                                            children: [s("tasks"), ": ", f, " ", s("from"), " 5"]
                                        })]
                                    })]
                                })
                            }), (0, i.jsx)("div", {
                                className: n().accordion_content,
                                children: (0, i.jsxs)("div", {
                                    className: "flex flex-col justify-center relative gap-[8px]",
                                    children: [(0, i.jsxs)(d.N_, {
                                        href: "",
                                        className: n().accordion_item,
                                        children: [(0, i.jsx)(m, {}), (0, i.jsxs)("div", {
                                            className: "flex flex-col justify-center relative",
                                            children: [(0, i.jsx)("p", {
                                                className: n().item_title,
                                                children: s("activate_account")
                                            }), (0, i.jsx)("p", {
                                                className: n().item_text,
                                                children: s("follow_the_link_sent_to_the_email_specified_during_registration_to_activate_your_account")
                                            })]
                                        })]
                                    }), (0, i.jsx)("div", {
                                        className: " flex-shrink-0 w-[2px] h-[63px] relative bg-[#00b2c8]  left-[33px]"
                                    }), (0, i.jsxs)(d.N_, {
                                        href: "/profile",
                                        className: n().accordion_item,
                                        children: [a && r ? (0, i.jsx)(m, {}) : (0, i.jsx)("div", {
                                            className: n().number,
                                            children: (0, i.jsx)("p", {
                                                className: "text-[14px] text-center text-[#242e39]",
                                                children: "2"
                                            })
                                        }), (0, i.jsxs)("div", {
                                            className: "flex flex-col justify-center ",
                                            children: [(0, i.jsx)("p", {
                                                className: n().item_title,
                                                children: s("secure_your_account")
                                            }), (0, i.jsx)("p", {
                                                className: n().item_text,
                                                children: s("open_your_profile_settings_to_set_2fa_and_pin_code")
                                            })]
                                        })]
                                    }), (0, i.jsx)("div", {
                                        className: " flex-shrink-0 w-[2px] h-[63px] relative ".concat(a && r ? "bg-[#00b2c8]" : "bg-[#a1aebe]", "  left-[33px]")
                                    }), (0, i.jsxs)(d.N_, {
                                        href: "/wallets/replenishment",
                                        className: n().accordion_item,
                                        children: [c ? (0, i.jsx)(m, {}) : (0, i.jsx)("div", {
                                            className: n().number,
                                            children: (0, i.jsx)("p", {
                                                className: "text-[14px] text-center text-[#242e39]",
                                                children: "3"
                                            })
                                        }), (0, i.jsxs)("div", {
                                            className: "flex flex-col justify-center relative",
                                            children: [(0, i.jsx)("p", {
                                                className: n().item_title,
                                                children: s("top_up_your_balance")
                                            }), (0, i.jsx)("p", {
                                                className: n().item_text,
                                                children: s("open_the_wallets_page_and_top_up_any_available_cryptocurrency")
                                            })]
                                        })]
                                    }), (0, i.jsx)("div", {
                                        className: " flex-shrink-0 w-[2px] h-[63px] relative ".concat(c ? "bg-[#00b2c8]" : "bg-[#a1aebe]", "  left-[33px]")
                                    }), (0, i.jsxs)(d.N_, {
                                        href: "/investments/automatictrading",
                                        className: n().accordion_item,
                                        children: [o ? (0, i.jsx)(m, {}) : (0, i.jsx)("div", {
                                            className: n().number,
                                            children: (0, i.jsx)("p", {
                                                className: "text-[14px] text-center text-[#242e39]",
                                                children: "4"
                                            })
                                        }), (0, i.jsxs)("div", {
                                            className: "flex flex-col justify-center relative",
                                            children: [(0, i.jsx)("p", {
                                                className: n().item_title,
                                                children: s("activate_investment")
                                            }), (0, i.jsx)("p", {
                                                className: n().item_text,
                                                children: s("select_a_suitable_investment_offer_and_activate_your_investment")
                                            })]
                                        })]
                                    }), (0, i.jsx)("div", {
                                        className: " flex-shrink-0 w-[2px] h-[63px] relative ".concat(o ? "bg-[#00b2c8]" : "bg-[#a1aebe]", "  left-[33px]")
                                    }), (0, i.jsxs)(d.N_, {
                                        href: "/wallets/withdrawal",
                                        className: n().accordion_item,
                                        children: [l ? (0, i.jsx)(m, {}) : (0, i.jsx)("div", {
                                            className: n().number,
                                            children: (0, i.jsx)("p", {
                                                className: "text-[14px] text-center text-[#242e39]",
                                                children: "5"
                                            })
                                        }), (0, i.jsxs)("div", {
                                            className: "flex flex-col justify-center items-start  relative",
                                            children: [(0, i.jsx)("p", {
                                                className: n().item_title,
                                                children: s("withdraw_profit")
                                            }), (0, i.jsx)("p", {
                                                className: n().item_text,
                                                children: s("after_accrual_go_to_wallets_to_withdraw_profit")
                                            })]
                                        })]
                                    })]
                                })
                            })]
                        }), (0, i.jsxs)("div", {
                            onClick: () => u(!j),
                            className: x()(n().accordion_toggle, {
                                [n().active]: j
                            }),
                            children: [(0, i.jsx)("p", {
                                className: "text-[16px]   uppercase text-[#828282]"
                            }), (0, i.jsx)("div", {
                                children: (0, i.jsx)("svg", {
                                    width: 18,
                                    height: 15,
                                    viewBox: "0 0 18 15",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    preserveAspectRatio: "xMidYMid meet",
                                    children: (0, i.jsx)("path", {
                                        d: "M9 -1.74846e-06L17.6603 15L0.339748 15L9 -1.74846e-06Z",
                                        fill: "#919191"
                                    })
                                })
                            })]
                        })]
                    }), o && (0, i.jsxs)("div", {
                        className: "flex flex-col relative gap-[16px] p-[24px] rounded-[6px] border border-[#e6e6e6] ",
                        style: {
                            background: "linear-gradient(-48.33deg, #01b091 5.18%, #00b2c8 100%)"
                        },
                        children: [(0, i.jsx)("p", {
                            className: "text-[14px] font-medium  uppercase text-white",
                            children: s("trustpilot_review")
                        }), (0, i.jsxs)("div", {
                            className: "flex justify-center items-center gap-[16px]",
                            children: [(0, i.jsx)("p", {
                                className: "text-[12px] text-white",
                                children: s("already_using_emvios_tell_everyone_about_your_experience_and_get_1_usdt_to_your_wallet")
                            }), (0, i.jsxs)("div", {
                                className: "flex flex-col justify-between items-center gap-[16px]",
                                children: [(0, i.jsxs)("svg", {
                                    width: 81,
                                    height: 75,
                                    viewBox: "0 0 81 75",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    className: " flex-shrink-0 w-[81px] h-[75px] relative",
                                    preserveAspectRatio: "xMidYMid meet",
                                    children: [(0, i.jsxs)("g", {
                                        clipPath: "url(#clip0_241_2258)",
                                        children: [(0, i.jsx)("path", {
                                            d: "M80.9924 28.6626H50.0672L40.5148 0L30.933 28.6626L0.0078125 28.634L25.0527 46.366L15.4699 75L40.5148 57.2966L65.5293 75L55.9769 46.366L80.9924 28.6626Z",
                                            fill: "white"
                                        }), (0, i.jsx)("path", {
                                            d: "M58.1271 52.8489L55.9777 46.366L40.5156 57.2966L58.1271 52.8489Z",
                                            fill: "#005128"
                                        })]
                                    }), (0, i.jsx)("defs", {
                                        children: (0, i.jsx)("clipPath", {
                                            id: "clip0_241_2258",
                                            children: (0, i.jsx)("rect", {
                                                width: 81,
                                                height: 75,
                                                fill: "white"
                                            })
                                        })
                                    })]
                                }), (0, i.jsx)("div", {
                                    className: n().get_bonus,
                                    children: (0, i.jsx)(d.N_, {
                                        href: "/dashboard/trustpilot",
                                        className: "flex justify-center items-center  flex-shrink-0 relative gap-[4px]",
                                        children: (0, i.jsx)("p", {
                                            className: " flex-shrink-0 text-[12px] text-center text-white text-nowrap",
                                            children: s("get_bonus")
                                        })
                                    })
                                })]
                            })]
                        }), (0, i.jsxs)("svg", {
                            className: "flex-shrink-0 absolute bottom-0 right-0 z-[-1]",
                            width: "265",
                            height: "232",
                            viewBox: "0 0 265 232",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [(0, i.jsx)("path", {
                                opacity: "0.0788889",
                                d: "M538.894 -120.498L241.619 129.617L538.894 259.885L27.9531 770.537",
                                stroke: "#E4FAFC"
                            }), (0, i.jsx)("path", {
                                opacity: "0.157778",
                                d: "M508.788 -70.9961L245.199 151.328L508.788 267.122L55.7441 721.035",
                                stroke: "#E4FAFC"
                            }), (0, i.jsx)("path", {
                                opacity: "0.236667",
                                d: "M478.68 -21.4943L248.776 173.04L478.68 274.359L83.5332 671.533",
                                stroke: "#E4FAFC"
                            }), (0, i.jsx)("path", {
                                opacity: "0.315556",
                                d: "M448.574 28.0077L252.356 194.751L448.574 281.596L111.324 622.031",
                                stroke: "#E4FAFC"
                            }), (0, i.jsx)("path", {
                                opacity: "0.394444",
                                d: "M418.468 77.5096L255.936 216.462L418.468 288.834L139.115 572.529",
                                stroke: "#E4FAFC"
                            }), (0, i.jsx)("path", {
                                opacity: "0.473333",
                                d: "M388.362 127.011L259.515 238.174L388.362 296.071L166.906 523.027",
                                stroke: "#E4FAFC"
                            }), (0, i.jsx)("path", {
                                opacity: "0.552222",
                                d: "M358.254 176.513L263.093 259.885L358.254 303.308L194.695 473.525",
                                stroke: "#E4FAFC"
                            }), (0, i.jsx)("path", {
                                opacity: "0.631111",
                                d: "M328.148 226.015L266.672 281.596L328.148 310.545L222.486 424.023",
                                stroke: "#E4FAFC"
                            })]
                        })]
                    })]
                })
            }
            let m = () => (0, i.jsxs)("svg", {
                width: 32,
                height: 32,
                viewBox: "0 0 32 32",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                className: " flex-shrink-0 w-[32px] h-[32px] relative",
                preserveAspectRatio: "none",
                children: [(0, i.jsx)("g", {
                    clipPath: "url(#clip0_2183_2060)",
                    children: (0, i.jsx)("circle", {
                        cx: 16,
                        cy: 16,
                        r: 15,
                        fill: "#00B2C8",
                        stroke: "#00B2C8",
                        strokeWidth: 2
                    })
                }), (0, i.jsx)("path", {
                    d: "M12.5782 19.642L22.2202 10L23.5005 11.2802L12.5782 22.2025L7.5 17.1257L8.78025 15.8455L12.5782 19.642Z",
                    fill: "white"
                }), (0, i.jsx)("defs", {
                    children: (0, i.jsx)("clipPath", {
                        id: "clip0_2183_2060",
                        children: (0, i.jsx)("rect", {
                            width: 32,
                            height: 32,
                            fill: "white"
                        })
                    })
                })]
            });
            var f = s(32658);

            function j() {
                let e = (0, h.c3)("Dashboard"),
                    t = (0, f.B)({
                        animate: !0,
                        showProgress: !0,
                        showButtons: ["next", "previous", "close"],
                        steps: [{
                            element: "#tour-dashboard",
                            popover: {
                                title: e("dashboard_page"),
                                description: e("welcome_to_your_personal_account_on_the_dashboard_page_you_can_find_general_information_about_your_balance_transactions_active_investment_offers_as_well_as_emvios_trading_statistics")
                            }
                        }, {
                            element: "#tour-wallets",
                            popover: {
                                title: e("wallets_page"),
                                description: e("deposit_or_withdraw_cryptocurrency_to_emvios_choose_one_of_more_than_20_coins_available_for_use")
                            }
                        }, {
                            element: "#tour-investments",
                            popover: {
                                title: e("investments_page"),
                                description: e("page_for_activating_investment_offers_after_replenishing_the_balance")
                            }
                        }, {
                            element: "#tour-statistics",
                            popover: {
                                title: e("statistics_page"),
                                description: e("on_this_page_you_can_see_any_financial_movements_in_your_account_profit_accruals_withdrawals_deposits_referral_accruals_exchanges")
                            }
                        }, {
                            element: "#tour-referrals",
                            popover: {
                                title: e("affiliate_program_page"),
                                description: e("detailed_statistics_about_your_referrals_personal_referral_link_and_promotional_materials")
                            }
                        }, {
                            element: "#tour-settings",
                            popover: {
                                title: e("settings_page"),
                                description: e("account_setup_password_change_2fa_setup_notification_settings_language_change_personal_information")
                            }
                        }]
                    });
                return (0, i.jsxs)("div", {
                    className: "hidden lg:flex flex-col relative overflow-hidden p-[24px] rounded-[6px] border-2 border-solid border-[#e4fafc] gap-[16px] bg-white w-full md:w-[282px] ",
                    children: [(0, i.jsx)("div", {
                        className: "absolute top-0 right-0",
                        children: (0, i.jsxs)("svg", {
                            width: "282",
                            height: "219",
                            viewBox: "0 0 282 219",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [(0, i.jsx)("path", {
                                opacity: "0.0788889",
                                d: "M764.287 102.236L504.237 -79.1842L464.441 182.709L-46.1854 -112.02",
                                stroke: "#00B2C8"
                            }), (0, i.jsx)("path", {
                                opacity: "0.157778",
                                d: "M718.898 88.9758L487.881 -71.7701L452.368 160.507L-1.28403 -100.587",
                                stroke: "#00B2C8"
                            }), (0, i.jsx)("path", {
                                opacity: "0.236667",
                                d: "M673.508 75.7159L471.525 -64.356L440.295 138.306L43.6175 -89.1529",
                                stroke: "#00B2C8"
                            }), (0, i.jsx)("path", {
                                opacity: "0.315556",
                                d: "M628.115 62.4552L455.165 -56.9425L428.218 116.104L88.5151 -77.7198",
                                stroke: "#00B2C8"
                            }), (0, i.jsx)("path", {
                                opacity: "0.394444",
                                d: "M582.728 49.1983L438.81 -49.5253L416.147 93.9055L133.418 -66.2831",
                                stroke: "#00B2C8"
                            }), (0, i.jsx)("path", {
                                opacity: "0.473333",
                                d: "M537.335 35.9371L422.45 -42.1124L404.07 71.7029L178.316 -54.8507",
                                stroke: "#00B2C8"
                            }), (0, i.jsx)("path", {
                                opacity: "0.552222",
                                d: "M491.944 22.6747L406.092 -34.7008L391.995 49.499L223.216 -43.4195",
                                stroke: "#00B2C8"
                            }), (0, i.jsx)("path", {
                                opacity: "0.631111",
                                d: "M446.557 9.41626L389.738 -27.2851L379.924 27.2991L268.119 -31.9842",
                                stroke: "#00B2C8"
                            })]
                        })
                    }), (0, i.jsx)("p", {
                        className: "text-[14px] font-[400]  uppercase text-[#828282]",
                        children: e("need_help")
                    }), (0, i.jsx)("p", {
                        className: " text-[12px]   ",
                        children: e("visit_our_help_center_or_start_our_site_guide_to_get_started_with_emvios")
                    }), (0, i.jsxs)("div", {
                        className: "flex gap-[8px]",
                        children: [(0, i.jsxs)("div", {
                            className: n().help,
                            children: [(0, i.jsxs)("svg", {
                                width: 18,
                                height: 17,
                                viewBox: "0 0 18 17",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                className: " flex-shrink-0 w-4 h-4",
                                preserveAspectRatio: "xMidYMid meet",
                                children: [(0, i.jsx)("path", {
                                    d: "M17 1.60345V15.3966C17 16.0034 16.5034 16.5 15.8966 16.5H2.10345C1.49655 16.5 1 16.0034 1 15.3966V1.60345C1 0.996552 1.49655 0.5 2.10345 0.5H15.8966C16.5034 0.5 17 0.996552 17 1.60345Z",
                                    stroke: "#303030",
                                    strokeWidth: "0.8",
                                    strokeMiterlimit: 10
                                }), (0, i.jsx)("path", {
                                    d: "M8.99894 9.93421V8.94111C9.77135 8.94111 10.4334 8.27904 10.4334 7.50663C10.4334 6.73421 9.77135 6.07214 8.99894 6.07214C8.22652 6.07214 7.56445 6.73421 7.56445 7.50663",
                                    stroke: "#00B2C8",
                                    strokeWidth: "0.8",
                                    strokeMiterlimit: 10,
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round"
                                }), (0, i.jsx)("path", {
                                    d: "M9.00046 11.5345C9.27472 11.5345 9.49701 11.3122 9.49701 11.038C9.49701 10.7637 9.27472 10.5414 9.00046 10.5414C8.72625 10.5414 8.50391 10.7637 8.50391 11.038C8.50391 11.3122 8.72625 11.5345 9.00046 11.5345Z",
                                    fill: "#00B2C8"
                                }), (0, i.jsx)("path", {
                                    d: "M8.99919 13.7414C11.8939 13.7414 14.2406 11.3948 14.2406 8.50005C14.2406 5.60532 11.8939 3.25867 8.99919 3.25867C6.10446 3.25867 3.75781 5.60532 3.75781 8.50005C3.75781 11.3948 6.10446 13.7414 8.99919 13.7414Z",
                                    stroke: "#303030",
                                    strokeWidth: "0.8",
                                    strokeMiterlimit: 10
                                })]
                            }), (0, i.jsx)(d.N_, {
                                href: "/helpcenter/what-is-emvios",
                                className: "flex justify-center items-center gap-[4px]",
                                children: (0, i.jsx)("p", {
                                    className: " text-[12px] ",
                                    children: e("help-hub")
                                })
                            })]
                        }), (0, i.jsxs)("div", {
                            className: n().start,
                            children: [(0, i.jsxs)("svg", {
                                width: 21,
                                height: 21,
                                viewBox: "0 0 21 21",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                className: " flex-shrink-0 w-[20px] h-5 relative",
                                preserveAspectRatio: "xMidYMid meet",
                                children: [(0, i.jsx)("path", {
                                    d: "M15.4127 17.9976H9.05859V19.5861H15.4127V17.9976Z",
                                    stroke: "black",
                                    strokeWidth: "0.8",
                                    strokeMiterlimit: 10,
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round"
                                }), (0, i.jsx)("path", {
                                    d: "M9.74609 5.3042V2.18011",
                                    stroke: "#00B2C8",
                                    strokeWidth: "0.8",
                                    strokeMiterlimit: 10,
                                    strokeLinecap: "round"
                                }), (0, i.jsx)("path", {
                                    d: "M7.63497 1.41376C5.91511 2.21325 4.72266 3.95626 4.72266 5.97778C4.72266 8.48569 6.55797 10.565 8.95873 10.9458M11.871 1.41376C13.5909 2.21325 14.7834 3.95626 14.7834 5.97778C14.7834 7.89388 13.7121 9.55973 12.1358 10.4091",
                                    stroke: "#00B2C8",
                                    strokeWidth: "0.8",
                                    strokeMiterlimit: 10,
                                    strokeLinecap: "round"
                                }), (0, i.jsx)("path", {
                                    d: "M8.52589 3.58453C7.53018 4.02577 6.83984 4.98773 6.83984 6.10342C6.83984 7.37418 7.73551 8.44556 8.95789 8.77513M10.9784 3.58453C11.9741 4.02577 12.6645 4.98773 12.6645 6.10342C12.6645 7.32813 11.8326 8.36761 10.678 8.73637",
                                    stroke: "#00B2C8",
                                    strokeWidth: "0.8",
                                    strokeMiterlimit: 10,
                                    strokeLinecap: "round"
                                }), (0, i.jsx)("path", {
                                    d: "M9.05839 12.6498L8.84658 12.2261C8.63482 11.8555 8.15825 11.6967 7.78758 11.9614C7.41692 12.1732 7.25806 12.6498 7.46987 13.0204C7.46987 13.0204 9.11154 15.4785 9.11135 15.8268C9.11116 16.1752 9.05839 12.6498 9.05839 12.6498Z",
                                    stroke: "black",
                                    strokeWidth: "0.8",
                                    strokeMiterlimit: 10
                                }), (0, i.jsx)("path", {
                                    d: "M14.6185 11.1139C14.1949 11.1139 13.8242 11.4846 13.8242 11.9082V11.3787C13.8242 10.9551 13.4535 10.5844 13.0299 10.5844C12.6063 10.5844 12.2357 10.9551 12.2357 11.3787V10.8492C12.2357 10.6373 12.1827 10.4785 12.0239 10.3197C11.865 10.1608 11.6532 10.0549 11.4414 10.0549C11.0178 10.0549 10.6472 10.4256 10.6472 10.8492V7.67211C10.6472 7.24849 10.2765 6.87787 9.85288 6.87787C9.42926 6.87787 9.05859 7.24849 9.05859 7.67211V15.35C9.05859 15.8265 9.37631 16.1972 9.79993 16.3561C10.0117 16.462 10.1706 16.6738 10.1176 16.8856V17.9975H14.3537V16.8326C14.3537 16.6208 14.4596 16.409 14.6714 16.3031C15.095 16.1442 15.3598 15.7736 15.4127 15.35V11.9082C15.4127 11.4846 15.0421 11.1139 14.6185 11.1139Z",
                                    stroke: "black",
                                    strokeWidth: "0.8",
                                    strokeMiterlimit: 10
                                }), (0, i.jsx)("path", {
                                    d: "M10.6484 10.8492V12.4377",
                                    stroke: "black",
                                    strokeWidth: "0.8",
                                    strokeMiterlimit: 10
                                }), (0, i.jsx)("path", {
                                    d: "M12.2363 11.3789V12.4379",
                                    stroke: "black",
                                    strokeWidth: "0.8",
                                    strokeMiterlimit: 10
                                }), (0, i.jsx)("path", {
                                    d: "M13.8242 11.9081V12.4376",
                                    stroke: "black",
                                    strokeWidth: "0.8",
                                    strokeMiterlimit: 10
                                })]
                            }), (0, i.jsx)("p", {
                                className: " text-[12px]",
                                onClick: () => t.drive(),
                                children: e("start_guide")
                            })]
                        })]
                    })]
                })
            }
            s(56254);
            var u = s(94052),
                v = s(34953),
                g = s(36612);
            let w = function() {
                let {
                    startLoading: e,
                    stopLoading: t
                } = (0, g.G)(), s = (0, p.useRef)(!1), {
                    data: i,
                    isLoading: a
                } = (0, v.Ay)("/api/statistics/progress", u.A, {
                    revalidateOnFocus: !1,
                    revalidateOnReconnect: !1,
                    onSuccess: () => {
                        s.current || (t(), s.current = !0)
                    },
                    onError: () => {
                        s.current || (t(), s.current = !0)
                    }
                });
                return (0, p.useEffect)(() => {
                    a && !s.current && e()
                }, [a]), i
            };

            function k() {
                let e = (0, h.c3)("Dashboard"),
                    t = w();
                return (0, i.jsxs)("div", {
                    className: "flex flex-col gap-[24px] ",
                    children: [(0, i.jsx)(j, {}), t && (0, i.jsx)(_, {
                        data: t
                    }), (0, i.jsxs)("div", {
                        className: "flex flex-col border-solid gap-[24px] p-[24px] rounded-[6px] border border-[#e6e6e6] bg-white",
                        children: [(0, i.jsx)("p", {
                            className: "text-[14px] font-[400]  uppercase text-[#828282]",
                            children: e("affiliate_rewards")
                        }), (0, i.jsxs)("div", {
                            className: "flex justify-between items-center gap-[16px]",
                            children: [(0, i.jsx)("div", {
                                className: "flex flex-col gap-[24px]",
                                children: (0, i.jsx)("p", {
                                    className: "text-[12px]   ",
                                    children: e("earn_up_to_60_000_by_inviting_friends_achieve_turnover_and_receive_instant_bonuses")
                                })
                            }), (0, i.jsx)(a.default, {
                                className: " flex-shrink-0 w-[100px] h-[100px] object-cover",
                                src: r,
                                width: 100,
                                height: 100,
                                alt: "icon"
                            })]
                        }), (0, i.jsx)(d.N_, {
                            href: "/affiliate",
                            className: "text-[16px]",
                            children: (0, i.jsx)(l.z, {
                                text: e("invite_friends")
                            })
                        })]
                    })]
                })
            }
        }
    }
]);