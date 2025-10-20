<main>
    <div class="_container main_auth" style="max-width: 1200px;">
        <div class="breadcrumbAuth_breadcrumb__Log0f">
            <nav aria-label="breadcrumb">
                <ol class="flex flex-wrap items-center gap-1.5 break-words text-sm sm:gap-2.5 justify-center">
                    <li class="inline-flex items-center gap-1.5"><span class="transition-colors hover:text-foreground"><a href="">Personal account</a></span></li><span class="flex gap-1.5 items-center">
                        <li role="presentation" aria-hidden="true" class="[&amp;&gt;svg]:size-3.5"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right">
                                <path d="m9 18 6-6-6-6"></path>
                            </svg></li>
                        <li class="inline-flex items-center gap-1.5"><span class="transition-colors hover:text-foreground"><a class="capitalize" href="/en/wallets">Wallets</a></span></li>
                    </span><span class="flex gap-1.5 items-center">
                        <li role="presentation" aria-hidden="true" class="[&amp;&gt;svg]:size-3.5"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right">
                                <path d="m9 18 6-6-6-6"></path>
                            </svg></li>
                        <li class="inline-flex items-center gap-1.5">
                            <div class="font-[400] text-[#000]"><span role="link" aria-disabled="true" aria-current="page" class="flex gap-[4px] items-center capitalize">Withdrawal</span></div>
                        </li>
                    </span>
                </ol>
            </nav>
        </div>
        <div class="wallets_body__a00ux">
            <div class="flex flex-col gap-[16px] w-full min-w-[300px] max-w-[384px]">
                <div class="flex overflow-hidden border border-solid rounded-[6px] border-[#e6e6e6]  h-[56px]"><a class="wallets_wallet__oI4tO" href="{{route('user.AddFund')}}">Replenishment</a><a class="wallets_wallet__oI4tO wallets_active__APs97" href="{{ route('user.withdraw_request') }}">Withdrawal</a></div>
                <div class="flex flex-col relative">
                    <p class="text-[10px] uppercase text-[#605e5e]">Currency</p>
                    <div class="automatictrading_counter__hMRNn" type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-«rap»" data-state="closed">
                        <div class="flex flex-col justify-between gap-[16px] self-stretch">
                            <p class="  text-[12px]">Balance:</p>
                            <div class="flex flex-col justify-center    h-[25px]">
                                <div class="flex  items-center    gap-[16px]"><img alt="icon" loading="lazy" width="25" height="25" decoding="async" data-nimg="1" srcset="{{ asset('') }}upnl\_next\static\media\usdt.webp">
                                    <div class="flex flex-col justify-center items-center">
                                        <p class="  text-[14px] text-nowrap ">Tether</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col justify-between items-end self-stretch">
                            <p class="  text-[12px] text-nowrap"><span class="ml-[4px]  text-[12px] font-medium  text-[#00b2c8]">0 USDT</span></p>
                            <!-- <div class="automatictrading_arrow__B_93d"><img alt="icon" loading="lazy" width="25" height="25" decoding="async" data-nimg="1" src="/_next/static/media/triangle_blue.6e88fabd.svg" style="color: transparent;"></div> -->
                        </div>
                    </div>
                </div>
                <div class="flex flex-col relative">
                    <p class="text-[10px] uppercase text-[#605e5e]">Network</p>
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
            <form action="{{ route('user.Withdraw-Request') }}" method="POST">
                @csrf
                                    <input type="hidden" name="currency" id="networkInput" value="{{ $selectedNetwork ?? 'BSC' }}">

                <div class="flex-grow self-stretch relative">
                    <div class="withdrawal_body__kspWM">
                        <div class="flex flex-col gap-[24px] w-full">
                            <p class="withdrawal_title__0EcCq">USDT Withdrawal</p>
                            <div class="withdrawal_list__DCNgj">
                                <div class="flex items-center gap-[16px] px-[16px] py-[8px]">
                                      <input type="radio" name="payment" value="1" class="mb-[8px]">
        
        <p class="text-[14px] mt-[4px]">Swap USDT Wallet</p>
                                </div>
                                <div class="flex items-center gap-[16px] px-[16px] py-[8px]">
                                            <input type="radio" name="payment" value="2" class="mb-[8px]">
        
        <p class="text-[14px] mt-[4px]">Sweep Wallet</p>

                                </div>
                               
                            </div>
                        </div>

                        <div class="flex self-stretch gap-[20px]">
                            <div class="flex flex-col flex-grow gap-[22px]">
                                <div class="withdrawal_ammount__EIZjs">
                                    <!-- ✅ Only USD input (now wider) -->
                                    <div class="flex flex-col max-w-[650px] flex-grow flex-shrink gap-[16px]">
                                        <p class="self-stretch text-[14px]">Withdrawal amount USD</p>
                                        <div class="flex self-stretch">
                                            <div class="flex justify-between items-center self-stretch flex-grow px-[16px] py-[8px] rounded-tl-md rounded-bl-md bg-neutral-50 border-t-[1px] border-solid border-r-0 border-b-[1px] border-l-[1px] border-[#cecece]">
                                                <input class="text-[14px] bg-transparent w-full" type="text" name="amount" placeholder="Enter amount in USD">
                                                <p class="text-[14px] cursor-pointer">MAX</p>
                                            </div>
                                            <div class="flex flex-col items-center self-stretch gap-[8px] px-[16px] py-[8px] rounded-tr-md rounded-br-md bg-[#00b2c8]">
                                                <p class="text-base uppercase text-white">$</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- ✅ Wallet address -->
                                <div class="flex flex-col self-stretch gap-[16px]">
                                    <div class="flex justify-between items-center self-stretch">
                                        <p class="text-[14px]">Wallet Address</p>
                                        <!-- <p class="text-[14px] cursor-pointer underline text-[#00b2c8]">Last used address</p> -->
                                    </div>
                                    <div class="flex flex-col justify-center min-h-[40px] items-center self-stretch gap-[8px] px-[16px] py-[8px] rounded-[6px] bg-neutral-50 border-[1px] border-solid border-[#cecece]">
                                        <input class="text-[14px] text-[#8a8181] bg-transparent w-full" name="wallet" placeholder="Enter wallet address for withdrawal (only USDT)" type="text">
                                    </div>
                                </div>
                            </div>
                        </div>

                        <p class="text-[#ff0000] text-center"></p>

                        <div class="withdrawal_buttons__vgBBe">
                            <button type="submit" class="button_blue_body__xatTr">
                                <p>Next</p>
                            </button>
                        </div>
                    </div>
                </div>
            </form>

        </div>
    </div>
</main>
</div>
</div>
</div>
<div role="region" aria-label="Notifications (F8)" tabindex="-1" style="pointer-events:none">
    <ol tabindex="-1" class="fixed top-0 left-1/2 transform -translate-x-1/2 z-[100] flex max-h-screen w-full flex-col p-4 md:max-w-[420px]"></ol>
</div>


</body>
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
</html>