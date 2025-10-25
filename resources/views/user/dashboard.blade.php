<main>
    <div class="relative min-h-screen">
        <div class="dashboard_inner__GbCWO _container">
            <div class="dashboard_main__hlNbm">
                <div class="flex justify-between items-center gap-[32px]">
                    <p class="  text-[14px] font-[400]  uppercase text-[#828282]">Wallets</p>
                </div>
                <div id="tour-example" class="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 ">
                    <div class="dashboard_counter__HAxjg">
                        <div class="diagram_auth_stats__ulx7W">
                            <div class="flex  items-center     gap-[16px]"><img alt="icon" loading="lazy" width="24" height="25" decoding="async" data-nimg="1" src="{{ asset('') }}upnl/_next/static/media/invested.d3a751a8.svg" style="color: transparent;">
                                <p class="  text-[14px] font-[400]  uppercase text-[#828282]">Working Wallet</p>
                            </div>
                            <p class="   font-[400]  ">{{ currency() }}{{ number_format(Auth::user()->workingIncome->sum('amount'), 2) }}</p>
                        </div>
                    </div>
                    <div class="dashboard_counter__HAxjg">
                        <div class="diagram_auth_stats__ulx7W">
                            <div class="flex  items-center     gap-[16px]"><img alt="icon" loading="lazy" width="24" height="25" decoding="async" data-nimg="1" src="{{ asset('') }}upnl/_next/static/media/invested.d3a751a8.svg" style="color: transparent;">
                                <p class="  text-[14px] font-[400]  uppercase text-[#828282]">Withdraw Wallet</p>
                            </div>
                            <p class="   font-[400]  ">{{ currency() }}{{ number_format(Auth::user()->stakingBalance(), 2) }}</p>
                        </div>
                    </div>
                    <div class="dashboard_counter__HAxjg">
                        <div class="diagram_auth_stats__ulx7W">
                            <div class="flex  items-center     gap-[16px]"><img alt="icon" loading="lazy" width="24" height="25" decoding="async" data-nimg="1" src="{{ asset('') }}upnl/_next/static/media/invested.d3a751a8.svg" style="color: transparent;">
                                <p class="  text-[14px] font-[400]  uppercase text-[#828282]">Cash Wallet</p>
                            </div>
                            <p class="   font-[400]  ">{{ currency() }}{{ number_format(Auth::user()->stakingBalance(), 2) }}</p>
                        </div>
                    </div>
                </div>

                <?php

                $quantifiable_count = 2;
                $vip = 0;
                if ($balance >= 10) {
                    
                    $vip = 1;
                }
                if ($balance >= 200  && $userDirect >= 5) {
                    
                    $vip = 2;
                }
                if ($balance >= 400 && $userDirect >= 10) {
                   
                    $vip = 3;
                }
                // dd($userDirect);
                ?>
                <div class="flex gap-[24px] flex-col md:flex-row">
                    <div class="flex flex-col gap-[24px] flex-1 relative">
                        <p class="text-[14px] font-[400] uppercase text-[#828282]">Balance Graph</p>
                        <div style="background:#ffffff; color:#000; width:100%; height:100%; padding:32px; border-radius:18px; border:1px solid #e6e6e6;  font-family:'Segoe UI', Tahoma, sans-serif;">

                            <!-- Header -->
                            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:24px;">
                                <p style="letter-spacing:1px; color:#333; font-size:20px; font-weight:600; margin:0;">Trade Center</p>
                                <!-- <img src="{{ asset('') }}upnl/_next/static/media/mark.72686f6e.svg" alt="icon" width="28" height="28" style="filter:brightness(0) saturate(100%);"> -->
                            </div>

                            <!-- Title -->
                            <p style="font-size:38px; font-weight:800; background:linear-gradient(90deg,#0cc0df,#DA70D6,#32CD32); -webkit-background-clip:text; -webkit-text-fill-color:transparent; margin:0 0 28px 0;">
                                HF-{{ $vip }}
                            </p>
                            @php
                            $progress = $quantifiable_count > 0 ? ($todaysRoi / $quantifiable_count) * 100 : 0;
                            @endphp
                            <!-- Progress Bar -->
                            <div style="width:100%; background:#f2f2f2; height:16px; border-radius:10px; overflow:hidden; margin-bottom:28px;">
                                <div style="width: {{ $progress }}%; height:100%; background:linear-gradient(90deg,#0cc0df,#9370DB); transition:width 0.4s ease;"></div>
                            </div>

                            <!-- Stats -->
                            <div style="margin-bottom:32px;">
                                <p style="font-size:16px; color:#555; margin:0 0 6px 0;">Daily Assigned Trades:</p>
                                <p style="font-size:26px; font-weight:700; color:#000; margin:0;">{{ $todaysRoi }}/{{ $quantifiable_count }}</p>
                            </div>

                            <!-- Button -->

                            @php
                            use Carbon\Carbon;

                            $lastTrade = Auth::user()->last_trade;

                            // Set timezone to Asia/Kolkata
                            $lastTradeDateTime = $lastTrade ? Carbon::parse($lastTrade)->timezone('Asia/Kolkata') : null;
                            $currentDateTime = now('Asia/Kolkata');

                            // Define 5:30 AM today in Asia/Kolkata timezone
                            $today530AM = Carbon::createFromTime(5, 30, 0, 'Asia/Kolkata');

                            // Check if current time is after or equal to 5:30 AM today
                            $canTradeTimeReached = $currentDateTime->greaterThanOrEqualTo($today530AM);

                            // Check if user has already traded today after 5:30 AM
                            $hasTradedToday = $lastTradeDateTime
                            && $lastTradeDateTime->isSameDay($currentDateTime)
                            && $lastTradeDateTime->greaterThanOrEqualTo($today530AM);
                            @endphp

                            @if (!$hasTradedToday && $canTradeTimeReached && Auth::user()->active_status == "Active")


                            <a href="{{ route('user.tradeOn') }}" style="width:100%; padding:16px; border:none; border-radius:35px; background: #0cc0df; color:#fff; font-size:17px; font-weight:600; border:1px solid #bbb; box-shadow:inset 0 0 8px rgba(0,0,0,0.08); transition:all 0.3s ease;">
                                Start Quantization
                            </a>
                            @elseif (!isset($_GET['trade']))
                            <a style="width:100%; padding:16px; border:none; border-radius:35px; background: #daeaedff; color:#fff; font-size:17px; font-weight:600; cursor:not-allowed; border:1px solid #bbb; box-shadow:inset 0 0 8px rgba(0,0,0,0.08); transition:all 0.3s ease;">
                                Start Quantization
                            </a>
                            @endif


                            <?php
                            $status = false;
                            $trade = false;

                            $u_id = Auth::user()->id;
                            if (isset($_GET['trade'])) {
                                $trade = true;
                                $trade_row = \DB::table('contract')->where('user_id', $u_id)->where('c_status', 1)->orderBy('created_at', 'DESC')->first();
                                if (!$trade_row) {
                                    $status = true;
                                }
                                if ($status == true) {
                                    header('Location: dashboard?notrade');
                                    exit();
                                }
                            }

                            ?>

                            @if ($trade === true)
                            <div id="zscooProcess" class="quantify-execute mt-4"
                                style="display: block; width: 100%; max-width: 500px;">
                                <div class="process-box">
                                    <h3 style="font-size: 16px;">@lang('Stakia Run Panel Process') <span
                                            class="spinner">⏳</span></h3>
                                    <div id="stepsLog"></div>
                                </div>
                            </div>

                            <style>
                                .spinner {
                                    animation: spin 1s linear infinite;
                                    display: inline-block;
                                    font-size: 18px;
                                    margin-left: 5px;
                                }

                                @keyframes spin {
                                    0% {
                                        transform: rotate(0deg);
                                    }

                                    100% {
                                        transform: rotate(360deg);
                                    }
                                }

                                .process-box {
                                    /* background: #fff; */
                                    padding: 20px 25px;
                                    border-radius: 10px;
                                    font-family: 'Segoe UI', sans-serif;
                                    max-width: 450px;
                                    /* box-shadow: 0 2px 12px rgba(0, 0, 0, 0.15); */
                                    margin: 30px auto;
                                }

                                #stepsLog p {
                                    margin: 8px 0;
                                    font-size: 14px;
                                    color: #000;
                                    line-height: 1.4;
                                }

                                .quantify-execute {
                                    margin-bottom: 80px;
                                }
                            </style>
                            <script>
                                document.addEventListener('DOMContentLoaded', async () => {
                                    const exchanges = ["BINANCE", "BITTREX", "KUCOIN", "HUOBI", "OKX"];
                                    const coin = "{{ $trade_row->c_name ?? 'SOL' }}";
                                    // Get random item from array
                                    function getRandomExchange() {
                                        return exchanges[Math.floor(Math.random() * exchanges.length)];
                                    }
                                    // Assign random exchanges
                                    const buyExchange = getRandomExchange();
                                    let sellExchange = getRandomExchange();

                                    // Ensure buy and sell are not the same
                                    while (sellExchange === buyExchange) {
                                        sellExchange = getRandomExchange();
                                    }

                                    const steps = [
                                        'Starting Stakia Fund quantification',
                                        'Start queuing...',
                                        'Start capturing various exchange market prices',
                                        `Start executing buy order ${coin} ${buyExchange}`,
                                        `Start executing sell order ${coin} ${sellExchange}`,
                                        'Start allocating commissions',
                                        'The execution is completed and the commission distribution is successful'
                                    ];

                                    const stepsLog = document.getElementById('stepsLog');

                                    for (let i = 0; i < steps.length; i++) {
                                        await new Promise(resolve => setTimeout(resolve, 2000));
                                        const p = document.createElement('p');
                                        p.textContent = steps[i];
                                        stepsLog.appendChild(p);
                                    }

                                    setTimeout(() => {
                                        document.getElementById('zscooProcess').style.display = 'none';


                                    }, 4000);

                                    function closetrade() {

                                        document.getElementById('zscooProcess').style.display = 'none';

                                        fetch("{{ route('user.close-trade') }}").then(response => response
                                                .json()) // Parse JSON response
                                            .then(data => {
                                                if (data.status) {
                                                    const profit = data.profit ?? "0.0000"; // fallback if no profit sent sent
                                                    console.log(data);
                                                    // Set the profit in the modal
                                                    document.getElementById("profitAmount").textContent =
                                                        `${profit} USDT`;

                                                    // Show modal and overlay

                                                    document.getElementById("resultModal").style.display = "block";




                                                    // Add the 'show' class to trigger transitions/animations (like Bootstrap modals)

                                                    // Show execute button again
                                                    $('.quantify-execute').css('display', 'block');

                                                    function hideModal() {
                                                        document.getElementById("resultModal").style.display = "none";
                                                    }


                                                } else {
                                                    // exit
                                                    $('.team-income').css('display', 'none')
                                                }
                                                // setTimeout(pollServer, 500000);
                                            })
                                            .catch((error) => {
                                                console.error("Error polling server:", {
                                                    message: error.message,
                                                    stack: error.stack,
                                                    response: error.response,
                                                });
                                                // Retry polling after a delay (e.g., every 5 seconds)
                                                // 
                                            });

                                    }
                                    setTimeout(closetrade, 4000);


                                });
                            </script>
                            @endif









                            {{-- loader --}}



                        </div>


                    </div>
                    <div class="diagram_auth_statistics__8JXhL">
                        <p class="text-[14px] font-[400]  uppercase text-[#828282]">Statistics</p>
                        <div class="diagram_auth_stats__ulx7W">
                            <div class="flex  items-center     gap-[16px]"><img alt="icon" loading="lazy" width="24" height="25" decoding="async" data-nimg="1" src="{{ asset('') }}upnl/_next/static/media/invested.d3a751a8.svg" style="color: transparent;">
                                <p class="  text-[14px] font-[400]  uppercase text-[#828282]">Invested</p>
                            </div>
                            <p class="   font-[400]  ">{{ currency() }}{{ number_format(Auth::user()->investment->sum('amount'), 2) }}</p>
                        </div>
                        <div class="diagram_auth_stats__ulx7W">
                            <div class="flex  items-center     gap-[8px]"><img alt="icon" loading="lazy" width="24" height="25" decoding="async" data-nimg="1" src="{{ asset('') }}upnl/_next/static/media/withdrawn.e239ce07.svg" style="color: transparent;">
                                <p class="text-[14px] font-[400]  uppercase text-[#828282]">Withdrawn</p>
                            </div>
                            <p class="   font-[400]  ">{{ currency() }}{{ number_format(Auth::user()->withdraw(), 2) }}</p>
                        </div>
                        <div class="diagram_auth_stats__ulx7W">
                            <div class="flex  items-center     gap-[8px]"><img alt="icon" loading="lazy" width="24" height="25" decoding="async" data-nimg="1" src="{{ asset('') }}upnl/_next/static/media/balance.4798a9c9.svg" style="color: transparent;">
                                <p class="text-[14px] font-[400]  uppercase text-[#828282]">Available Balance</p>
                            </div>
                            <p class="   font-[400]  "> {{ currency() }}{{ number_format(Auth::user()->available_balance(), 2) }}</p>
                        </div>
                        <div class="diagram_auth_stats__ulx7W">
                            <div class="flex  items-center     gap-[8px]"><img alt="icon" loading="lazy" width="24" height="25" decoding="async" data-nimg="1" src="{{ asset('') }}upnl/_next/static/media/earned.57067797.svg" style="color: transparent;">
                                <p class="text-[14px] font-[400]  uppercase text-[#828282]">Algorithmic Profit</p>
                            </div>
                            <p class="   font-[400]  ">{{ currency() }}{{ number_format(Auth::user()->stakingIncome->sum('amount'), 2) }}</p>
                        </div>
                    </div>
                </div>
                <p class="text-[14px] font-[400]  uppercase text-[#828282]"> Investment Activation </p>


                <div class="w-full bg-white rounded-xl shadow-md overflow-hidden">
    <div class="bg-[#00b2c8] text-white text-sm font-semibold uppercase px-6 py-4">
    </div>

    @if($income_data->isEmpty())
        <p class="text-center text-gray-500 py-6">No Available Data</p>
    @else
        <div class="overflow-x-auto">
            <table class="min-w-full border-collapse">
                <thead class="bg-[#f3fbfc] border-b border-gray-200">
                    <tr>
                        <th class="px-6 py-2 text-left text-[12px]  font-semibold text-gray-600 uppercase tracking-wider">S.No</th>
                        <th class="px-6 py-2 text-left text-[12px] font-semibold text-gray-600 uppercase tracking-wider">Amount</th>
                        <th class="px-6 py-2 text-left text-[12px] font-semibold text-gray-600 uppercase tracking-wider">Username</th>
                        <th class="px-6 py-2 text-left text-[12px] font-semibold text-gray-600 uppercase tracking-wider">Created At</th>
                        <th class="px-6 py-2 text-left text-[12px] font-semibold text-gray-600 uppercase tracking-wider">Remark</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-gray-200">
                    @foreach($income_data as $index => $report)
                        <tr class="hover:bg-[#f9f9f9] transition">
                            <td class="px-6 py-3 text-[14px] text-gray-700">{{ $index + 1 }}</td>
                            <td class="px-6 py-3 text-[14px] text-gray-700 font-medium">${{ number_format($report->comm, 2) }}</td>
                            <td class="px-6 py-3 text-[14px] text-gray-700">{{ ($report->user_id_fk ?? '--') }}</td>
                            <td class="px-6 py-3 text-[14px] text-gray-700">{{($report->ttime) }}</td>
                            <td class="px-6 py-3 text-[14px] text-gray-700">
                                {{ ucfirst($report->remarks) }}
                            </td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
        </div>
    @endif
</div>


            </div>
            <div class="flex flex-col gap-[24px] ">
                <div class="hidden lg:flex flex-col relative overflow-hidden p-[24px] rounded-[6px] border-2 border-solid border-[#e4fafc] gap-[16px] bg-white w-full md:w-[282px] ">
                    <div class="diagram_auth_statistics__8JXhL">
                        <div class="diagram_auth_stats__ulx7W">
                            <div class="flex  items-center     gap-[16px]"><img alt="icon" loading="lazy" width="24" height="25" decoding="async" data-nimg="1" src="{{ asset('') }}upnl/_next/static/media/invested.d3a751a8.svg" style="color: transparent;">
                                <p class="  text-[14px] font-[400]  uppercase text-[#828282]">Farmin Profit</p>
                            </div>
                            <p class="   font-[400]  ">{{ currency() }}{{ number_format(Auth::user()->leadership_bonus->sum('amount'), 2) }}</p>
                        </div>
                        <div class="diagram_auth_stats__ulx7W">
                            <div class="flex  items-center     gap-[8px]"><img alt="icon" loading="lazy" width="24" height="25" decoding="async" data-nimg="1" src="{{ asset('') }}upnl/_next/static/media/withdrawn.e239ce07.svg" style="color: transparent;">
                                <p class="text-[14px] font-[400]  uppercase text-[#828282]">Reward Profit</p>
                            </div>
                            <p class="   font-[400]  ">{{ currency() }}{{ number_format(Auth::user()->reward_bonus->sum('amount'), 2) }}</p>
                        </div>
                        <div class="diagram_auth_stats__ulx7W">
                            <div class="flex  items-center     gap-[8px]"><img alt="icon" loading="lazy" width="24" height="25" decoding="async" data-nimg="1" src="{{ asset('') }}upnl/_next/static/media/balance.4798a9c9.svg" style="color: transparent;">
                                <p class="text-[14px] font-[400]  uppercase text-[#828282]">Partners</p>
                            </div>
                            <p class="   font-[400]  ">{{$total_teams}}</p>
                        </div>

                    </div>
                </div>
                <!-- <div class="p-[24px] flex flex-col gap-[16px] rounded-[6px] bg-white border border-[#e6e6e6] border-solid">
                    <div class="dashboard_accordion__zeeVh">
                        <p class="text-[14px] font-[400]  uppercase text-[#828282]">Getting started</p>
                        <div class="h-0 relative">
                            <div class="dashboard_accordion_header_qikf">
                                <p class="self-stretch text-[14px]">Complete simple tasks that will help you get started with Emvios</p>
                                <div class="flex justify-between gap-[16px] self-stretch">
                                    <p class=" text-[14px]">Progress: 20%</p>
                                    <p class=" text-[14px]">Tasks: 1 From 5</p>
                                </div>
                            </div>
                        </div>
                        <div class="dashboard_accordion_content__pmYEl">
                            <div class="flex flex-col justify-center relative gap-[8px]"><a class="dashboard_accordion_item__8yo5c" href=""><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" class=" flex-shrink-0 w-[32px] h-[32px] relative" preserveAspectRatio="none">
                                        <g clip-path="url(#clip0_2183_2060)">
                                            <circle cx="16" cy="16" r="15" fill="#00B2C8" stroke="#00B2C8" stroke-width="2"></circle>
                                        </g>
                                        <path d="M12.5782 19.642L22.2202 10L23.5005 11.2802L12.5782 22.2025L7.5 17.1257L8.78025 15.8455L12.5782 19.642Z" fill="white"></path>
                                        <defs>
                                            <clipPath id="clip0_2183_2060">
                                                <rect width="32" height="32" fill="white"></rect>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <div class="flex flex-col justify-center relative">
                                        <p class="dashboard_item_title__nOco0">Activate Account</p>
                                        <p class="dashboard_item_text__16ZmS">Follow the link sent to the email specified during registration to activate your account.</p>
                                    </div>
                                </a>
                                <div class=" flex-shrink-0 w-[2px] h-[63px] relative bg-[#00b2c8]  left-[33px]"></div><a class="dashboard_accordion_item__8yo5c" href="/en/profile">
                                    <div class="dashboard_number__c1fVd">
                                        <p class="text-[14px] text-center text-[#242e39]">2</p>
                                    </div>
                                    <div class="flex flex-col justify-center ">
                                        <p class="dashboard_item_title__nOco0">Secure your Account</p>
                                        <p class="dashboard_item_text__16ZmS">Open your profile settings to set 2FA and PIN Code</p>
                                    </div>
                                </a>
                                <div class=" flex-shrink-0 w-[2px] h-[63px] relative bg-[#a1aebe]  left-[33px]"></div><a class="dashboard_accordion_item__8yo5c" href="/en/wallets/replenishment">
                                    <div class="dashboard_number__c1fVd">
                                        <p class="text-[14px] text-center text-[#242e39]">3</p>
                                    </div>
                                    <div class="flex flex-col justify-center relative">
                                        <p class="dashboard_item_title__nOco0">Top up Your Balance</p>
                                        <p class="dashboard_item_text__16ZmS">Open the “Wallets” page and top up any available cryptocurrency.</p>
                                    </div>
                                </a>
                                <div class=" flex-shrink-0 w-[2px] h-[63px] relative bg-[#a1aebe]  left-[33px]"></div><a class="dashboard_accordion_item__8yo5c" href="/en/investments/automatictrading">
                                    <div class="dashboard_number__c1fVd">
                                        <p class="text-[14px] text-center text-[#242e39]">4</p>
                                    </div>
                                    <div class="flex flex-col justify-center relative">
                                        <p class="dashboard_item_title__nOco0">Activate Investment</p>
                                        <p class="dashboard_item_text__16ZmS">Select a suitable investment offer and activate your investment</p>
                                    </div>
                                </a>
                                <div class=" flex-shrink-0 w-[2px] h-[63px] relative bg-[#a1aebe]  left-[33px]"></div><a class="dashboard_accordion_item__8yo5c" href="/en/wallets/withdrawal">
                                    <div class="dashboard_number__c1fVd">
                                        <p class="text-[14px] text-center text-[#242e39]">5</p>
                                    </div>
                                    <div class="flex flex-col justify-center items-start  relative">
                                        <p class="dashboard_item_title__nOco0">Withdraw Profit</p>
                                        <p class="dashboard_item_text__16ZmS">After accrual, go to “Wallets” to withdraw profit</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="dashboard_accordion_toggle__X5tGY">
                        <p class="text-[16px]   uppercase text-[#828282]"></p>
                        <div><svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
                                <path d="M9 -1.74846e-06L17.6603 15L0.339748 15L9 -1.74846e-06Z" fill="#919191"></path>
                            </svg></div>
                    </div>
                </div> -->
                <div class="flex flex-col border-solid gap-[24px] p-[24px] rounded-[6px] border border-[#e6e6e6] bg-white">
                    <p class="text-[14px] font-[400]  uppercase text-[#828282]">Affiliate rewards</p>
                    <div class="flex justify-between items-center gap-[16px]">
                        <div class="flex flex-col gap-[24px]">
                            <p class="text-[12px]   ">Earn up to $ 60 000 by inviting friends. achieve turnover and receive instant bonuses</p>
                        </div><img alt="icon" loading="lazy" width="100" height="100" decoding="async" data-nimg="1" class=" flex-shrink-0 w-[100px] h-[100px] object-cover" src="{{ asset('') }}upnl/_next/static/media/rocket.webp" style="color: transparent;">
                    </div><a class="text-[16px]" href="{{ route('user.level-team') }}"><button class="underline-button_body__JNXIx">
                            <div class="underline-button_circle__hshhT"><img alt="icon" loading="lazy" width="12" height="8" decoding="async" data-nimg="1" src="{{ asset('') }}upnl/_next/static/media/arrow.62791f30.svg" style="color: transparent;"></div>
                            <p class="underline-button_text__mcUAC">Invite friends</p>
                        </button></a>
                </div>
            </div>
        </div>
    </div>
</main>

<!-- Popup Modal -->
<div id="resultModal" style="display:none; position: fixed; z-index: 9999; inset: 0; background-color: rgba(0, 0, 0, 0.7);">
    <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
                          background-color: #fff; color: #000; border-radius: 20px; padding: 30px; text-align: center; width: 90%; max-width: 400px;">

        <!-- <button onclick="hideModal()" style="position: absolute; top: 15px; right: 15px; background: none; border: none; color: white; font-size: 20px; cursor: pointer;">×</button> -->

        <div style="margin-bottom: 20px;">
            <div style="width: 80px; height: 80px; margin: 0 auto; background: #0cc0df; border-radius: 50%;
                              display: flex; align-items: center; justify-content: center;">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" viewBox="0 0 16 16">
                    <path d="M13.485 1.893a.75.75 0 0 1 1.06 1.06L6.56 11.939 1.453 6.828a.75.75 0 0 1 1.06-1.06l3.932 3.931L13.485 1.893z" />
                </svg>
            </div>
        </div>

        <h5 style="font-weight: bold; margin-bottom: 5px;">Strategy Complete</h5>
        <p style="margin-bottom: 10px;">Congratulations To Get</p>
        <h4 id="profitAmount" style="font-weight: bold; margin-bottom: 25px;">0.0000 USDT</h4>

        <div style="display: flex; justify-content: center; gap: 15px; cursor: pointer;">
            <!-- <a href="#" style="padding: 10px 20px; border: 2px solid #6e0daf; color: #6e0daf; text-decoration: none; border-radius: 5px;">View Order</a> -->
            <a onclick="hideModal()" style="padding: 10px 20px; background-color: #0cc0df; color: white; text-decoration: none; border-radius: 5px;">Confirm</a>
        </div>
    </div>
</div>

<!-- Popup Modal -->
<div id="resultModal" style="display:none; position: fixed; z-index: 9999; inset: 0; background-color: rgba(0, 0, 0, 0.7);">
    <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
                          background-color: #fff; color: #000; border-radius: 20px; padding: 30px; text-align: center; width: 90%; max-width: 400px;">

        <!-- <button onclick="hideModal()" style="position: absolute; top: 15px; right: 15px; background: none; border: none; color: white; font-size: 20px; cursor: pointer;">×</button> -->

        <div style="margin-bottom: 20px;">
            <div style="width: 80px; height: 80px; margin: 0 auto; background: #0cc0df; border-radius: 50%;
                              display: flex; align-items: center; justify-content: center;">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" viewBox="0 0 16 16">
                    <path d="M13.485 1.893a.75.75 0 0 1 1.06 1.06L6.56 11.939 1.453 6.828a.75.75 0 0 1 1.06-1.06l3.932 3.931L13.485 1.893z" />
                </svg>
            </div>
        </div>

        <h5 style="font-weight: bold; margin-bottom: 5px;">Strategy Complete</h5>
        <p style="margin-bottom: 10px;">Congratulations To Get</p>
        <h4 id="profitAmount" style="font-weight: bold; margin-bottom: 25px;">0.0000 USDT</h4>

        <div style="display: flex; justify-content: center; gap: 15px; cursor: pointer;">
            <!-- <a href="#" style="padding: 10px 20px; border: 2px solid #6e0daf; color: #6e0daf; text-decoration: none; border-radius: 5px;">View Order</a> -->
            <a onclick="hideModal()" style="padding: 10px 20px; background-color: #0cc0df; color: white; text-decoration: none; border-radius: 5px;">Confirm</a>
        </div>
    </div>
</div>

</div>
</div>
</div>
<div role="region" aria-label="Notifications (F8)" tabindex="-1"
    style="pointer-events:none">
    <ol tabindex="-1"
        class="fixed top-0 left-1/2 transform -translate-x-1/2 z-[100] flex max-h-screen w-full flex-col p-4 md:max-w-[420px]"></ol>
</div>

</body>
<script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>

<script>
    document.addEventListener("DOMContentLoaded", function() {
        var options = {
            chart: {
                type: 'line',
                height: 300,
                toolbar: {
                    show: false
                }
            },
            series: [{
                name: 'Income',
                data: @json($chartTotals)
            }],
            xaxis: {
                categories: @json($chartDates),
                title: {
                    text: 'Date'
                }
            },
            yaxis: {
                title: {
                    text: 'Income (₹)'
                }
            },
            stroke: {
                curve: 'smooth',
                width: 3
            },
            colors: ['#00b2c8'],
            fill: {
                type: 'gradient',
                gradient: {
                    shadeIntensity: 1,
                    gradientToColors: ['#01b091'],
                    opacityFrom: 0.7,
                    opacityTo: 0.9,
                    stops: [0, 100]
                }
            },
            tooltip: {
                theme: 'dark',
                y: {
                    formatter: function(val) {
                        return "₹ " + val;
                    }
                }
            }
        };

        var chart = new ApexCharts(document.querySelector("#incomeChart"), options);
        chart.render();
    });
</script>
<script>
    document.addEventListener("DOMContentLoaded", function() {
        const countdownEl = document.getElementById("countdown");
        if (!countdownEl) return;

        const startTime = new Date(countdownEl.dataset.start);
        const endTime = new Date(startTime.getTime() + 7 * 24 * 60 * 60 * 1000);

        function updateCountdown() {
            const now = new Date();
            const distance = endTime - now;

            if (distance <= 0) {
                countdownEl.innerText = "Expired";
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            countdownEl.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        }

        updateCountdown(); // initial call
        setInterval(updateCountdown, 1000); // update every second
    });
</script>

<script>
    function hideModal() {
        document.getElementById("resultModal").style.display = "none";
        location.reload();
    }

    function handlePopupCloseAndUpdate() {
        // 1. Close the popup (adjust selector based on your popup structure)
        document.getElementById("activationModel").style.display = "none";

        // 2. Make AJAX call to update popup_check
        // Send AJAX POST to update popup_check
        fetch('/user/update-popup-check', {
                method: 'POST', // <-- Ensure this is POST
                headers: {
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'), // Laravel CSRF
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    popup_check: true
                }) // This causes error only if method is GET
            })
            .then(response => response.json())
            .then(data => {
                // console.log('Popup check updated:', data);
                // window.location.href = '/dashboard';
            })
            .catch(error => {
                console.error('Error updating popup check:', error);
            });
    }
</script>

</html>