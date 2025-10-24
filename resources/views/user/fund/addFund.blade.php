<main>
    <div class="_container main_auth"
        style="max-width: 1200px;">
        <div class="breadcrumbAuth_breadcrumb__Log0f">
            <nav aria-label="breadcrumb">
                <ol
                    class="flex flex-wrap items-center gap-1.5 break-words text-sm sm:gap-2.5 justify-center">
                    <li
                        class="inline-flex items-center gap-1.5"><span
                            class="transition-colors hover:text-foreground"><a
                                href>Personal
                                account</a></span></li><span
                        class="flex gap-1.5 items-center">
                        <li role="presentation"
                            aria-hidden="true"
                            class="[&amp;&gt;svg]:size-3.5"><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24" height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="lucide lucide-chevron-right">
                                <path
                                    d="m9 18 6-6-6-6"></path>
                            </svg></li>
                        <li
                            class="inline-flex items-center gap-1.5"><span
                                class="transition-colors hover:text-foreground"><a
                                    class="capitalize"
                                    href="/en/wallets">Wallets</a></span></li>
                    </span><span
                        class="flex gap-1.5 items-center">
                        <li role="presentation"
                            aria-hidden="true"
                            class="[&amp;&gt;svg]:size-3.5"><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24" height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="lucide lucide-chevron-right">
                                <path
                                    d="m9 18 6-6-6-6"></path>
                            </svg></li>
                        <li
                            class="inline-flex items-center gap-1.5">
                            <div
                                class="font-[400] text-[#000]"><span
                                    role="link"
                                    aria-disabled="true"
                                    aria-current="page"
                                    class="flex gap-[4px] items-center capitalize">Replenishment</span>
                            </div>
                        </li>
                    </span>
                </ol>
            </nav>
        </div>
        <div class="wallets_body__a00ux">
            <div
                class="flex flex-col gap-[16px] w-full min-w-[300px] max-w-[384px]">
                <div
                    class="flex overflow-hidden border border-solid rounded-[6px] border-[#e6e6e6]  h-[56px]"><a
                        class="wallets_wallet__oI4tO wallets_active__APs97"
                        href="{{route('user.AddFund')}}">Replenishment</a><a
                        class="wallets_wallet__oI4tO"
                        href="{{ route('user.withdraw_request') }}">Withdrawal</a></div>
                <div class="flex flex-col relative">
                    <p
                        class="text-[10px] uppercase text-[#605e5e]">Currency</p>
                    <div
                        class="automatictrading_counter__hMRNn"
                        type="button" aria-haspopup="dialog"
                        aria-expanded="false"
                        aria-controls="radix-«rl»"
                        data-state="closed">
                        <div
                            class="flex flex-col justify-between gap-[16px] self-stretch">
                            <p
                                class="  text-[12px]">Balance:</p>
                            <div
                                class="flex flex-col justify-center    h-[25px]">
                                <div class="flex  items-center    gap-[16px]"><img alt="icon" loading="lazy" width="25" height="25" decoding="async" data-nimg="1" srcset="{{ asset('') }}upnl\_next\static\media\usdt.webp">
                                    <div class="flex flex-col justify-center items-center">
                                        <p class="  text-[14px] text-nowrap ">Tether</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            class="flex flex-col justify-between items-end self-stretch">
                            <p
                                class="  text-[12px] text-nowrap"><span
                                    class="ml-[4px]  text-[12px] font-medium  text-[#00b2c8]">0
                                    USDT</span></p>
                            <!-- <div
                                                    class="automatictrading_arrow__B_93d"><img
                                                        alt="icon"
                                                        loading="lazy"
                                                        width="25" height="25"
                                                        decoding="async"
                                                        data-nimg="1"
                                                        src="{{ asset('') }}upnl/_next/static/media/triangle_blue.6e88fabd.svg"
                                                        style="color: transparent;"></div> -->
                        </div>
                    </div>
                </div>
                <div class="flex flex-col relative">
                    <p
                        class="text-[10px] uppercase text-[#605e5e]">Network</p>
                    <style>
                        /* Arrow rotation animation */
                        .automatictrading_arrow__3w6eO img {
                            transition: transform 0.3s ease;
                            transform: rotate(180deg);
                            /* default pointing down */
                        }

                        .automatictrading_arrow__3w6eO img.open {
                            transform: rotate(0deg);
                            /* pointing up when dropdown open */
                        }

                        /* Dropdown styling */
                        .networkDropdown {
                            display: none;
                            position: absolute;
                            z-index: 10;
                            margin-top: 8px;
                            width: 100%;
                            background: white;
                            border: 1px solid #e6e6e6;
                            border-radius: 6px;
                            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                        }

                        .networkDropdown li {
                            padding: 8px 12px;
                            cursor: pointer;
                        }

                        .networkDropdown li:hover {
                            background: #f3fbfc;
                        }
                    </style>

                    <div class="automatictrading_counter__5l_bt relative" id="networkDropdownBtn" type="button">
                        <div class="flex flex-col justify-between gap-[16px] self-stretch">
                            <div class="flex flex-col justify-center">
                                <div class="flex items-center gap-[16px]">
                                    <div class="flex flex-col justify-center items-center">
<p id="selectedNetwork" class="text-[14px] text-nowrap">
    {{ $selectedNetwork ?? 'BSC' }}
</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col justify-between items-end self-stretch">
                            <div class="automatictrading_arrow__3w6eO">
                                <img id="dropdownArrow"
                                    alt="icon"
                                    width="25" height="25"
                                    src="{{ asset('') }}upnl/_next/static/media/triangle_blue.6e88fabd.svg">
                            </div>
                        </div>
                    </div>

                    <ul id="networkDropdown" class="networkDropdown absolute rounded-[6px]">
                        <li data-value="BSC">BSC</li>
                        <li data-value="Tron">Tron</li>
                    </ul>

                   

                </div>
            </div>
            <div class="flex-grow self-stretch relative">
                <div class="replenishment_body__RMa9j">
                    <p
                        class="self-stretch text-[16px] text-center ">To
                        top up your USDT balance, send any
                        amount to the wallet below, or using
                        the QR code</p><img id="qrImage"
     src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data={{ urlencode($data['address_in'] ?? '') }}" 
     alt="QR Code" 
     style="max-width: 400px; margin-left: 34px;height: 266px;">




              <div class="replenishment_copy__IV88w">
    <div
        class="flex justify-center items-center flex-grow min-h-[45px] gap-[8px] px-[16px] py-[8px] rounded-tl-md rounded-bl-md bg-neutral-50 border-[1px] border-solid border-[#cecece] w-full">
        <p id="walletAddress">{{ $data['address_in'] ?? '' }}</p>
    </div>
    <div class="replenishment_button_blue__vFzO3">
        <button type="button" onclick="copyAddress()" class="button_blue_body__xatTr">
            <p>COPY</p>
        </button>
    </div>
</div>




                    <div
                        class="flex  items-center self-stretch gap-[32px] p-[16px] rounded-md  border border-solid border-[#e6e6e6]">
                        <ul class="replenishment_ul__AwbL9">
                            <li><span
                                    class="flex-grow  text-[14px]">Send
                                    only</span><span class="flex-grow text-[14px] mx-[4px] font-medium">
    USDT <span id="networkSymbol">BSC</span>
</span>
<span
                                    class="flex-grow  text-[14px]">to
                                    this
                                    address</span></li>
                            <li><span
                                    class="flex-grow  text-[14px]">Funds
                                    will be credited to the
                                    balance
                                    after</span><span
                                    class="flex-grow  text-[14px] mx-[4px] font-semibold  ">1
                                    confirmation</span><span
                                    class="flex-grow  text-[14px]">in
                                    the blockchain network
                                    automatically</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>
</div>
</div>
</div>
<div role="region" aria-label="Notifications (F8)" tabindex="-1"
    style="pointer-events:none">
    <ol tabindex="-1"
        class="fixed top-0 left-1/2 transform -translate-x-1/2 z-[100] flex max-h-screen w-full flex-col p-4 md:max-w-[420px]">
    </ol>
</div>
<script src="{{ asset('') }}upnl/_next/static/chunks/webpack-6907f3386b85a459.js"
    async></script>
<script id="tawk-to-script" data-nscript="afterInteractive">
    var Tawk_API = Tawk_API || {},
        Tawk_LoadStart = new Date();
    (function() {
        var s1 = document.createElement("script"),
            s0 = document.getElementsByTagName("script")[0];
        s1.async = true;
        s1.src = 'https://embed.tawk.to/68b98ea1971b36192093cd05/1j4ada9p8';
        s1.charset = 'UTF-8';
        s1.setAttribute('crossorigin', '*');
        s0.parentNode.insertBefore(s1, s0);
    })();
</script>
<script
    src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
    data-nscript="afterInteractive"></script>
<script src="https://www.googletagmanager.com/gtag/js?id=G-PXZD7FWSYW"
    data-nscript="afterInteractive"></script>
<script id="google-analytics" data-nscript="afterInteractive">
    window.dataLayer = window.dataLayer || [];

    function gtag() {
        window.dataLayer.push(arguments);
    }
    gtag('js', new Date());

    gtag('config', 'G-PXZD7FWSYW');
</script><next-route-announcer
    style="position: absolute;"></next-route-announcer>
<div id="inhb06okm6h81759838641776" class="widget-visible"><iframe
        src="about:blank" frameborder="0" scrolling="no"
        width="64px" height="60px"
        style="outline:none !important; visibility:visible !important; resize:none !important; box-shadow:none !important; overflow:visible !important; background:none !important; opacity:1 !important; filter:alpha(opacity=100) !important; -ms-filter:progid:DXImageTransform.Microsoft.Alpha(Opacity 1}) !important; -mz-opacity:1 !important; -khtml-opacity:1 !important; top:auto !important; right:20px !important; bottom:20px !important; left:auto !important; position:fixed !important; border:0 !important; min-height:60px !important; min-width:64px !important; max-height:60px !important; max-width:64px !important; padding:0 !important; margin:0 !important; -moz-transition-property:none !important; -webkit-transition-property:none !important; -o-transition-property:none !important; transition-property:none !important; transform:none !important; -webkit-transform:none !important; -ms-transform:none !important; width:64px !important; height:60px !important; display:block !important; z-index:1000003 !important; background-color:transparent !important; cursor:none !important; float:none !important; border-radius:unset !important; pointer-events:auto !important; clip:auto !important; color-scheme:light !important;"
        id="iccb55cna2pg1759838642734" class
        title="chat widget"></iframe><iframe src="about:blank"
        frameborder="0"
        scrolling="no" width="350px" height="292px"
        style="outline:none !important; visibility:visible !important; resize:none !important; box-shadow:none !important; overflow:visible !important; background:none !important; opacity:1 !important; filter:alpha(opacity=100) !important; -ms-filter:progid:DXImageTransform.Microsoft.Alpha(Opacity 1}) !important; -mz-opacity:1 !important; -khtml-opacity:1 !important; top:auto !important; right:20px !important; bottom:98px !important; left:auto !important; position:fixed !important; border:0 !important; min-height:292px !important; min-width:350px !important; max-height:292px !important; max-width:350px !important; padding:0 !important; margin:0 !important; -moz-transition-property:none !important; -webkit-transition-property:none !important; -o-transition-property:none !important; transition-property:none !important; transform:none !important; -webkit-transform:none !important; -ms-transform:none !important; width:350px !important; height:292px !important; display:none !important; z-index:1000002 !important; background-color:transparent !important; cursor:none !important; float:none !important; border-radius:18px !important; pointer-events:auto !important; clip:auto !important; color-scheme:light !important;"
        id="ai2h911o0gi1759838642826" class
        title="chat widget"></iframe><!----><iframe src="about:blank"
        frameborder="0" scrolling="no" width="360px" height="145px"
        style="outline:none !important; visibility:visible !important; resize:none !important; box-shadow:none !important; overflow:visible !important; background:none !important; opacity:1 !important; filter:alpha(opacity=100) !important; -ms-filter:progid:DXImageTransform.Microsoft.Alpha(Opacity 1}) !important; -mz-opacity:1 !important; -khtml-opacity:1 !important; top:auto !important; right:20px !important; bottom:90px; left:auto !important; position:fixed !important; border:0 !important; min-height:145px !important; min-width:360px !important; max-height:145px !important; max-width:360px !important; padding:0 !important; margin:0 !important; -moz-transition-property:none !important; -webkit-transition-property:none !important; -o-transition-property:none !important; transition-property:none !important; transform:none !important; -webkit-transform:none !important; -ms-transform:none !important; width:360px !important; height:145px !important; display:none !important; z-index:auto !important; background-color:transparent !important; cursor:none !important; float:none !important; border-radius:unset !important; pointer-events:auto !important; clip:auto !important; color-scheme:light !important;"
        id="ml0dsute0m141759838642773" class
        title="chat widget"></iframe>
    <div id="chat-bubble"></div>
</div>
</body>
<script>
document.addEventListener("DOMContentLoaded", function() {
    const btn = document.getElementById("networkDropdownBtn");
    const dropdown = document.getElementById("networkDropdown");
    const arrow = document.getElementById("dropdownArrow");
    const items = dropdown.querySelectorAll("li");
    const selected = document.getElementById("selectedNetwork");

    // ✅ Default selected BSC on page load
    selected.textContent = "BSC";

    items.forEach(item => {
        item.addEventListener("click", () => {
            selected.textContent = item.textContent;
            dropdown.style.display = "none";
            arrow.classList.remove("open");

            // 🔹 Fetch QR & Address dynamically
            fetch(`{{ route('user.AddFund') }}?network=${item.dataset.value}`, {
                headers: { "X-Requested-With": "XMLHttpRequest" }
            })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    document.getElementById('qrImage').src = data.data.qr_code;
                    document.getElementById('walletAddress').textContent = data.data.address;
                     if (item.dataset.value === "BSC") {
                        networkSymbol.textContent = "BSC";
                    } else if (item.dataset.value === "Tron") {
                        networkSymbol.textContent = "TRX";
                    }
                }
            })
            .catch(err => console.error("Fetch error:", err));
        });
    });
});

</script>
 <script>
                        document.addEventListener("DOMContentLoaded", function() {
                            const btn = document.getElementById("networkDropdownBtn");
                            const dropdown = document.getElementById("networkDropdown");
                            const arrow = document.getElementById("dropdownArrow");
                            const items = dropdown.querySelectorAll("li");
                            const selected = document.getElementById("selectedNetwork");

                            btn.addEventListener("click", (e) => {
                                e.stopPropagation(); // prevent closing immediately
                                dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
                                arrow.classList.toggle("open");
                            });

                            items.forEach(item => {
                                item.addEventListener("click", () => {
                                    selected.textContent = item.textContent;
                                    dropdown.style.display = "none";
                                    arrow.classList.remove("open");
                                });
                            });

                            document.addEventListener("click", () => {
                                dropdown.style.display = "none";
                                arrow.classList.remove("open");
                            });
                        });
                    </script>
          <script>
function copyAddress() {
    const address = document.getElementById("walletAddress").innerText.trim();

    if (!address) return;

    navigator.clipboard.writeText(address).then(() => {
        // ✅ Laravel notify style message dikhane ke liye ek temporary div banate hain
        showNotifyMessage("Address copied successfully!");
    }).catch(() => {
        showNotifyMessage("Failed to copy address!", "error");
    });
}

// ✅ Ye function aapke partials.notify ke design ke according message show karega
function showNotifyMessage(message, type = "success") {
    // Agar pehle koi notify div hai to usse hata do
    const oldMsg = document.getElementById("notify-message");
    if (oldMsg) oldMsg.remove();

    // Naya div banao
    const notifyDiv = document.createElement("div");
    notifyDiv.id = "notify-message";
    notifyDiv.className = `alert alert-${type} fixed top-5 right-5 z-50 px-4 py-2 rounded-md shadow-md`;
    notifyDiv.innerText = message;

    // Page me add karo
    document.body.appendChild(notifyDiv);

    // 3 second me remove kar do
    setTimeout(() => {
        notifyDiv.remove();
    }, 3000);
}
</script>

</html>