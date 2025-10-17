(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9607], {
        28225: (e, t, i) => {
            "use strict";
            i.d(t, {
                Header: () => w
            });
            var s = i(95155),
                a = i(31353),
                n = i.n(a),
                r = i(94848),
                o = i(61186),
                l = i(51756),
                c = i(21060),
                d = i(12115);
            i(4629);
            var h = i(45358),
                _ = i(71166),
                u = i(52721),
                p = i(42117),
                m = i(66766),
                x = i(29300),
                g = i.n(x),
                f = i(21162);
            let v = {
                src: "/_next/static/media/polygon.8464c745.svg",
                height: 8,
                width: 10,
                blurWidth: 0,
                blurHeight: 0
            };
            var y = i(28124),
                b = i(65967),
                j = i(60388),
                N = i(17652);
            let k = "Products",
                w = e => {
                    let {
                        children: t
                    } = e, i = (0, N.c3)("Metadata"), a = [{
                        name: i("home"),
                        link: "/"
                    }, {
                        name: i("about-us"),
                        link: "/about"
                    }, {
                        name: i("copy-trading"),
                        link: "/copytrading"
                    }, {
                        name: i("automatic-trading"),
                        link: "/automatictrading"
                    }, {
                        name: i("referral"),
                        link: "/referral"
                    }, {
                        name: i("blog"),
                        link: "/blog"
                    }, {
                        name: i("help-hub"),
                        link: "/helpcenter/what-is-emvios"
                    }, {
                        name: i("security"),
                        link: "/security"
                    }, {
                        name: i("login"),
                        link: "/login"
                    }, {
                        name: i("registration"),
                        link: "/registration"
                    }], x = [{
                        name: i("automatic-trading"),
                        link: "/automatictrading/dynamic",
                        icon: o.A,
                        description: i("automated-trading-system")
                    }, {
                        name: i("copy-trading"),
                        link: "/copytrading",
                        icon: l.A,
                        description: i("long-term-strategies")
                    }, {
                        name: i("cross-chain-dex-trading"),
                        link: "/crosschain-dex",
                        icon: c.A,
                        description: i("coming-soon")
                    }], [w, A] = (0, d.useState)(!1), [C, W] = (0, d.useState)(""), [M, S] = (0, d.useState)(!1);

                    function R() {
                        C !== k ? S(!0) : S(!M)
                    }
                    return (0, d.useEffect)(() => {
                        "undefined" != typeof document && (w ? document.body.style.overflow = "hidden" : document.body.style.overflow = "unset")
                    }, [w]), (0, d.useEffect)(() => {
                        h.eF(_.A)
                    }, []), (0, s.jsx)("div", {
                        className: g()(n().body, {
                            [n().active]: w
                        }),
                        children: (0, s.jsxs)("div", {
                            className: n().container + " _container",
                            children: [(0, s.jsx)("div", {
                                className: n().burger,
                                onClick: () => A(!w),
                                children: w ? (0, s.jsx)(m.default, {
                                    src: u.A,
                                    alt: "icon",
                                    width: 24,
                                    height: 24
                                }) : (0, s.jsx)(m.default, {
                                    src: p.A,
                                    alt: "icon",
                                    width: 24,
                                    height: 24
                                })
                            }), (0, s.jsx)(r.g, {}), (0, s.jsxs)("ul", {
                                className: n().nav_desktop,
                                children: [(0, s.jsx)("li", {
                                    className: n().nav_desktop__item,
                                    children: (0, s.jsx)(j.N_, {
                                        href: "/about",
                                        children: i("about")
                                    })
                                }), (0, s.jsxs)("li", {
                                    className: g()(n().nav_desktop__item, n().popup_list),
                                    children: [(0, s.jsxs)("p", {
                                        className: g()(n().popup_list__title, {
                                            [n().active]: M
                                        }),
                                        children: [(0, s.jsx)("a", {
                                            children: i("products")
                                        }), (0, s.jsx)(m.default, {
                                            src: v,
                                            alt: "icon",
                                            width: 10,
                                            height: 8
                                        })]
                                    }), (0, s.jsx)("ul", {
                                        className: g()(n().popup_list__body, {
                                            [n().active]: M
                                        }),
                                        children: x.map((e, t) => 2 === t ? (0, s.jsx)("div", {
                                            children: (0, s.jsxs)("div", {
                                                className: "flex relative gap-[24px] px-[30px] py-[16px] rounded-[6px]",
                                                children: [(0, s.jsx)(m.default, {
                                                    src: e.icon,
                                                    alt: "icon",
                                                    width: 36,
                                                    height: 36,
                                                    style: {
                                                        width: "auto",
                                                        height: "auto"
                                                    }
                                                }), (0, s.jsxs)("div", {
                                                    className: "flex flex-col justify-center",
                                                    children: [(0, s.jsx)("p", {
                                                        className: " text-[16px]  text-black",
                                                        children: e.name
                                                    }), (0, s.jsx)("p", {
                                                        className: " text-[12px]  ",
                                                        children: e.description
                                                    })]
                                                })]
                                            })
                                        }, t) : (0, s.jsx)("div", {
                                            children: (0, s.jsxs)(j.N_, {
                                                href: e.link,
                                                className: "flex relative gap-[24px] px-[30px] py-[16px] rounded-[6px]",
                                                children: [(0, s.jsx)(m.default, {
                                                    src: e.icon,
                                                    alt: "icon",
                                                    width: 36,
                                                    height: 36,
                                                    style: {
                                                        width: "auto",
                                                        height: "auto"
                                                    }
                                                }), (0, s.jsxs)("div", {
                                                    className: "flex flex-col justify-center",
                                                    children: [(0, s.jsx)("p", {
                                                        className: " text-[16px]  text-black",
                                                        children: e.name
                                                    }), (0, s.jsx)("p", {
                                                        className: " text-[12px]  ",
                                                        children: e.description
                                                    })]
                                                })]
                                            })
                                        }, t))
                                    })]
                                }), (0, s.jsx)("li", {
                                    className: n().nav_desktop__item,
                                    children: (0, s.jsx)(j.N_, {
                                        href: "/referral",
                                        children: i("referral")
                                    })
                                }), (0, s.jsx)("li", {
                                    className: n().nav_desktop__item,
                                    children: (0, s.jsx)(j.N_, {
                                        href: "/security",
                                        children: i("security")
                                    })
                                }), (0, s.jsx)("li", {
                                    className: n().nav_desktop__item,
                                    children: (0, s.jsx)(j.N_, {
                                        href: "/blog",
                                        children: i("blog")
                                    })
                                }), (0, s.jsx)("li", {
                                    className: n().nav_desktop__item,
                                    children: (0, s.jsx)(j.N_, {
                                        href: "/helpcenter/what-is-emvios",
                                        children: i("help-hub")
                                    })
                                })]
                            }), (0, s.jsxs)("ul", {
                                className: g()(n().nav_mobile, {
                                    [n().active]: w
                                }),
                                children: [(0, s.jsx)("div", {
                                    children: a.map((e, t) => (0, s.jsx)("div", {
                                        onClick: () => {
                                            w && W(e.name), w && A(!w)
                                        },
                                        className: e.name === k ? n().nav__accordion : n().nav_mobile__item,
                                        children: e.name === k ? (0, s.jsxs)("div", {
                                            className: g()(n().nav_accordion__body, {
                                                [n().active]: C === e.name && M
                                            }),
                                            children: [(0, s.jsxs)("p", {
                                                onClick: () => R(),
                                                className: n().nav_accordion__title,
                                                children: [(0, s.jsx)(j.N_, {
                                                    href: e.link,
                                                    children: e.name
                                                }), (0, s.jsx)(m.default, {
                                                    src: f.A,
                                                    alt: "icon",
                                                    width: 14,
                                                    height: 8
                                                })]
                                            }), (0, s.jsx)("ul", {
                                                className: n().nav_accordion__list,
                                                children: x.map((e, t) => (0, s.jsx)(j.N_, {
                                                    href: e.link,
                                                    className: n().nav_accordion__item,
                                                    children: e.name
                                                }, t))
                                            })]
                                        }) : (0, s.jsx)("p", {
                                            onClick: () => R(),
                                            className: g()(n().nav_mobile__text, {
                                                [n().active]: C === e.name
                                            }),
                                            children: (0, s.jsx)(j.N_, {
                                                href: e.link,
                                                children: e.name
                                            })
                                        })
                                    }, t))
                                }), (0, s.jsxs)("div", {
                                    className: n().nav_mobile__icons,
                                    children: [(0, s.jsx)(y.A, {}), (0, s.jsx)(b.q, {})]
                                })]
                            }), (0, s.jsxs)("div", {
                                className: n().auth,
                                children: [t || null, (0, s.jsx)("div", {
                                    className: "hidden md:block",
                                    children: (0, s.jsx)(y.A, {})
                                })]
                            })]
                        })
                    })
                }
        },
        31353: e => {
            e.exports = {
                button: "header_button__xBGo0",
                body: "header_body__1P8gD",
                active: "header_active__PzFV3",
                container: "header_container__xofsz",
                auth: "header_auth__RU_Lh",
                login: "header_login__gEgYG",
                sign_up: "header_sign_up__oLoyn",
                nav_desktop: "header_nav_desktop__CCEW0",
                nav_desktop__item: "header_nav_desktop__item__weKIn",
                nav_mobile: "header_nav_mobile__JJE0W",
                burger: "header_burger__5M9TH",
                dashboard: "header_dashboard__vaSga",
                nav_accordion__body: "header_nav_accordion__body__xpRLN",
                nav_accordion__title: "header_nav_accordion__title__FOwWx",
                nav_accordion__list: "header_nav_accordion__list__i2WBc",
                nav_accordion__item: "header_nav_accordion__item___fQn1",
                nav_mobile__text: "header_nav_mobile__text__4JxDT",
                nav__title: "header_nav__title__uV67u",
                popup_list: "header_popup_list__t7rN3",
                popup_list__body: "header_popup_list__body__h0XII",
                popup_list__title: "header_popup_list__title__gaQ0L",
                nav_mobile__icons: "header_nav_mobile__icons__SP21O"
            }
        },
        36662: (e, t, i) => {
            "use strict";
            i.d(t, {
                A: () => s
            });
            let s = {
                src: "/_next/static/media/rectangle.46e38b08.svg",
                height: 105,
                width: 393,
                blurWidth: 0,
                blurHeight: 0
            }
        },
        46206: (e, t, i) => {
            "use strict";
            i.d(t, {
                Footer: () => j
            });
            var s = i(95155),
                a = i(82733),
                n = i.n(a),
                r = i(72369),
                o = i(66766),
                l = i(65967),
                c = i(29300),
                d = i.n(c),
                h = i(94848),
                _ = i(98575),
                u = i(49278);
            let p = {
                src: "/_next/static/media/chat.52d0d442.svg",
                height: 48,
                width: 48,
                blurWidth: 0,
                blurHeight: 0
            };
            var m = i(76881),
                x = i(60388),
                g = i(28124),
                f = i(36662),
                v = i(35695),
                y = i(17652),
                b = i(17012);
            let j = e => {
                let {
                    session: t
                } = e, i = (0, b.A)(), a = (0, y.c3)("Metadata"), c = (0, v.usePathname)();
                return c.includes("/registration") || c.includes("/login") ? null : (0, s.jsxs)("div", {
                    className: n().body,
                    children: [(0, s.jsx)("div", {
                        className: n().bg,
                        children: (0, s.jsx)(o.default, {
                            src: r.A,
                            alt: "img",
                            width: 0,
                            height: 0,
                            sizes: "100vw"
                        })
                    }), (0, s.jsxs)("div", {
                        className: d()(n().body__container, "_container"),
                        children: [(0, s.jsxs)("div", {
                            children: [(0, s.jsx)(l.q, {}), (0, s.jsx)("div", {
                                className: n().rectangle,
                                children: (0, s.jsx)(o.default, {
                                    src: f.A,
                                    alt: "img",
                                    width: 0,
                                    height: 0,
                                    sizes: "100vw"
                                })
                            })]
                        }), (0, s.jsx)(g.A, {}), (0, s.jsxs)("div", {
                            className: n().list__wrapper,
                            children: [(0, s.jsxs)("ul", {
                                className: n().list,
                                children: [(0, s.jsx)("h5", {
                                    className: n().title,
                                    children: "Emvios"
                                }), (0, s.jsx)(x.N_, {
                                    href: "/about",
                                    children: a("about")
                                }), (0, s.jsx)(x.N_, {
                                    href: "/referral",
                                    children: a("referral")
                                }), (0, s.jsx)(x.N_, {
                                    href: "/copytrading",
                                    children: a("copy-trading")
                                }), (0, s.jsx)(x.N_, {
                                    href: "/automatictrading/dynamic",
                                    children: a("automatic-trading")
                                }), (0, s.jsx)(x.N_, {
                                    href: "/security",
                                    children: a("security")
                                })]
                            }), (0, s.jsxs)("ul", {
                                className: n().list,
                                children: [(0, s.jsx)("h5", {
                                    className: n().title,
                                    children: a("other-links")
                                }), t ? (0, s.jsx)(x.N_, {
                                    href: "/dashboard",
                                    children: a("dashboard")
                                }) : null, (0, s.jsx)(x.N_, {
                                    href: "/helpcenter/what-is-emvios",
                                    children: a("help-hub")
                                }), (0, s.jsx)(x.N_, {
                                    href: "/blog",
                                    children: a("blog")
                                }), t ? null : (0, s.jsx)(x.N_, {
                                    href: "/login",
                                    children: a("login")
                                }), t ? null : (0, s.jsx)(x.N_, {
                                    href: "/registration",
                                    children: a("signup")
                                }), (0, s.jsx)(x.N_, {
                                    href: "/privacy-policy",
                                    children: a("privacy-policy")
                                }), (0, s.jsx)(x.N_, {
                                    href: "/user-agreement",
                                    children: a("user-agreement")
                                }), (0, s.jsx)(x.N_, {
                                    href: "/cookie-policy",
                                    children: a("cookie-policy")
                                })]
                            }), (0, s.jsxs)("ul", {
                                className: n().contacts,
                                children: [(0, s.jsx)(h.g, {}), (0, s.jsxs)(x.N_, {
                                    href: "mailto:support@emvios.net",
                                    children: [(0, s.jsx)("p", {
                                        children: "support@emvios.net"
                                    }), (0, s.jsx)(o.default, {
                                        src: _.A,
                                        alt: "img",
                                        width: 48,
                                        height: 48
                                    })]
                                }), i && i.find(e => 11 === e.id) && (0, s.jsxs)(x.N_, {
                                    href: i.find(e => 11 === e.id).count,
                                    children: [(0, s.jsx)("p", {
                                        children: i.find(e => 11 === e.id).count
                                    }), (0, s.jsx)(o.default, {
                                        src: u.A,
                                        alt: "img",
                                        width: 48,
                                        height: 48
                                    })]
                                }), (0, s.jsxs)("span", {
                                    children: [(0, s.jsx)("p", {
                                        children: a("live-chat")
                                    }), (0, s.jsx)(o.default, {
                                        src: p,
                                        alt: "img",
                                        width: 48,
                                        height: 48
                                    })]
                                }), (0, s.jsxs)(x.N_, {
                                    target: "_blank",
                                    href: "https://maps.app.goo.gl/KUXoSYp2XZNkdaaz9",
                                    children: [(0, s.jsx)("p", {
                                        children: "5 St Botolph St, London EC3A 7DH"
                                    }), (0, s.jsx)(o.default, {
                                        src: m.A,
                                        alt: "img",
                                        height: 40
                                    })]
                                })]
                            })]
                        }), (0, s.jsx)("p", {
                            className: n().bottom,
                            children: "\xa9 2025 Emvios Limited. All rights reserved"
                        })]
                    })]
                })
            }
        },
        49278: (e, t, i) => {
            "use strict";
            i.d(t, {
                A: () => s
            });
            let s = {
                src: "/_next/static/media/t_me.310b6e17.svg",
                height: 48,
                width: 48,
                blurWidth: 0,
                blurHeight: 0
            }
        },
        61791: e => {
            e.exports = {
                body: "logo_body__W044D",
                text: "logo_text__nxbjW"
            }
        },
        71166: (e, t, i) => {
            "use strict";
            i.d(t, {
                A: () => s
            });
            let s = {
                guiOptions: {
                    consentModal: {
                        layout: "box inline",
                        position: "bottom left",
                        equalWeightButtons: !0,
                        flipButtons: !0
                    },
                    preferencesModal: {
                        layout: "box",
                        position: "left",
                        equalWeightButtons: !0,
                        flipButtons: !0
                    }
                },
                onFirstConsent: function() {},
                onConsent: function(e) {
                    let {
                        cookie: t
                    } = e
                },
                onChange: function(e) {
                    let {
                        changedCategories: t,
                        cookie: i
                    } = e
                },
                categories: {
                    necessary: {
                        readOnly: !0
                    },
                    functionality: {},
                    analytics: {}
                },
                language: {
                    default: "en",
                    autoDetect: "browser",
                    translations: {
                        en: {
                            consentModal: {
                                title: "This website uses cookies",
                                description: "Our website uses tracking cookies to understand how you interact with it and to improve your overall experience. These cookies allow us to gather information on your browsing behavior, which helps us analyze usage patterns, enhance website performance, and tailor our content to better meet your needs. However, we value your privacy and are committed to ensuring that your data is handled with the utmost care.",
                                acceptAllBtn: "Accept all",
                                acceptNecessaryBtn: "Reject all",
                                showPreferencesBtn: "Manage preferences",
                                footer: '\n                    <a href="/cookie-policy">Cookie policy</a>\n                    <a href="/privacy-policy">Privacy Policy</a>\n                    <a href="/user-agreement">User Agreement</a>\n                  '
                            },
                            preferencesModal: {
                                title: "Manage cookie preferences",
                                acceptAllBtn: "Accept all",
                                acceptNecessaryBtn: "Reject all",
                                savePreferencesBtn: "Save preferences",
                                closeIconLabel: "Close modal",
                                serviceCounterLabel: "Service|Services",
                                sections: [{
                                    title: "Your Privacy Choices",
                                    description: "In this panel you can express some preferences related to the processing of your personal information. You may review and change expressed choices at any time by resurfacing this panel via the provided link. To deny your consent to the specific processing activities described below, switch the toggles to off or use the “Reject all” button and confirm you want to save your choices."
                                }, {
                                    title: 'Essential Cookies <span class="pm__badge">Always Enabled</span>',
                                    description: "These cookies are necessary for the Website to function properly. Without them, some features may not work.",
                                    linkedCategory: "necessary"
                                }, {
                                    title: "Performance and Analytics",
                                    description: "These cookies collect information about how visitors use our Website, such as which pages are most visited. The data is aggregated and anonymous.",
                                    linkedCategory: "functionality"
                                }, {
                                    title: "Functional Cookies",
                                    description: "These cookies allow us to remember your preferences and settings, such as language or region, to provide a more personalized experience.",
                                    linkedCategory: "functionality"
                                }, {
                                    title: "Advertising/Targeting Cookies",
                                    description: "These cookies may be used to deliver relevant ads and track the effectiveness of our marketing campaigns.",
                                    linkedCategory: "functionality"
                                }, {
                                    title: "Third-Party Cookies",
                                    description: "We may allow third-party service providers (e.g., Google Analytics, social media platforms, advertisers) to place cookies on your device. These third parties may collect information about your online activities across different websites.",
                                    linkedCategory: "functionality"
                                }]
                            }
                        }
                    }
                }
            }
        },
        72369: (e, t, i) => {
            "use strict";
            i.d(t, {
                A: () => s
            });
            let s = {
                src: "/_next/static/media/backgroud_footer.1a911748.svg",
                height: 587,
                width: 1440,
                blurWidth: 0,
                blurHeight: 0
            }
        },
        76881: (e, t, i) => {
            "use strict";
            i.d(t, {
                A: () => s
            });
            let s = {
                src: "/_next/static/media/map.6306c7c9.svg",
                height: 46,
                width: 34,
                blurWidth: 0,
                blurHeight: 0
            }
        },
        82284: (e, t, i) => {
            "use strict";
            i.d(t, {
                N: () => l
            });
            var s = i(12115),
                a = i(46081),
                n = i(6101),
                r = i(99708),
                o = i(95155);

            function l(e) {
                let t = e + "CollectionProvider",
                    [i, l] = (0, a.A)(t),
                    [c, d] = i(t, {
                        collectionRef: {
                            current: null
                        },
                        itemMap: new Map
                    }),
                    h = e => {
                        let {
                            scope: t,
                            children: i
                        } = e, a = s.useRef(null), n = s.useRef(new Map).current;
                        return (0, o.jsx)(c, {
                            scope: t,
                            itemMap: n,
                            collectionRef: a,
                            children: i
                        })
                    };
                h.displayName = t;
                let _ = e + "CollectionSlot",
                    u = s.forwardRef((e, t) => {
                        let {
                            scope: i,
                            children: s
                        } = e, a = d(_, i), l = (0, n.s)(t, a.collectionRef);
                        return (0, o.jsx)(r.DX, {
                            ref: l,
                            children: s
                        })
                    });
                u.displayName = _;
                let p = e + "CollectionItemSlot",
                    m = "data-radix-collection-item",
                    x = s.forwardRef((e, t) => {
                        let {
                            scope: i,
                            children: a,
                            ...l
                        } = e, c = s.useRef(null), h = (0, n.s)(t, c), _ = d(p, i);
                        return s.useEffect(() => (_.itemMap.set(c, {
                            ref: c,
                            ...l
                        }), () => void _.itemMap.delete(c))), (0, o.jsx)(r.DX, { ...{
                                [m]: ""
                            },
                            ref: h,
                            children: a
                        })
                    });
                return x.displayName = p, [{
                    Provider: h,
                    Slot: u,
                    ItemSlot: x
                }, function(t) {
                    let i = d(e + "CollectionConsumer", t);
                    return s.useCallback(() => {
                        let e = i.collectionRef.current;
                        if (!e) return [];
                        let t = Array.from(e.querySelectorAll("[".concat(m, "]")));
                        return Array.from(i.itemMap.values()).sort((e, i) => t.indexOf(e.ref.current) - t.indexOf(i.ref.current))
                    }, [i.collectionRef, i.itemMap])
                }, l]
            }
        },
        82733: e => {
            e.exports = {
                body: "footer_body__ZGyXy",
                bg: "footer_bg__Rw6Dh",
                rectangle: "footer_rectangle__1LHDy",
                body__container: "footer_body__container__q3f64",
                list__wrapper: "footer_list__wrapper__lna1n",
                list: "footer_list__toMnc",
                title: "footer_title__T0JgS",
                contacts: "footer_contacts__NXQvK",
                bottom: "footer_bottom__tQEWJ"
            }
        },
        94315: (e, t, i) => {
            "use strict";
            i.d(t, {
                jH: () => n
            });
            var s = i(12115);
            i(95155);
            var a = s.createContext(void 0);

            function n(e) {
                let t = s.useContext(a);
                return e || t || "ltr"
            }
        },
        94848: (e, t, i) => {
            "use strict";
            i.d(t, {
                g: () => c
            });
            var s = i(95155),
                a = i(61791),
                n = i.n(a),
                r = i(66766),
                o = i(6874),
                l = i.n(o);
            let c = () => (0, s.jsx)(l(), {
                href: "/",
                children: (0, s.jsx)("div", {
                    className: n().body,
                    children: (0, s.jsx)(r.default, {
                        unoptimized: !0,
                        className: n().image,
                        src: "/logo/svg/black.svg",
                        alt: "logo",
                        width: 2891 / 15,
                        height: 967 / 15
                    })
                })
            })
        },
        98575: (e, t, i) => {
            "use strict";
            i.d(t, {
                A: () => s
            });
            let s = {
                src: "/_next/static/media/email.7b21cacf.svg",
                height: 48,
                width: 48,
                blurWidth: 0,
                blurHeight: 0
            }
        }
    }
]);