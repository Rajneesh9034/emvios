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
                                <p class="  text-[14px] font-[400]  uppercase text-[#828282]">Level Bonus</p>
                            </div>
                            <p class="   font-[400]  ">{{ currency() }}{{ number_format($level_income_total, 2) }}</p>
                        </div>
                    </div>
                    <div class="dashboard_counter__HAxjg">
                        <div class="diagram_auth_stats__ulx7W">
                            <div class="flex  items-center     gap-[16px]"><img alt="icon" loading="lazy" width="24" height="25" decoding="async" data-nimg="1" src="{{ asset('') }}upnl/_next/static/media/invested.d3a751a8.svg" style="color: transparent;">
                                <p class="  text-[14px] font-[400]  uppercase text-[#828282]">Total Active Team</p>
                            </div>
                            <p class="   font-[400]  ">{{$total_team}}</p>
                        </div>
                    </div>
                    <div class="dashboard_counter__HAxjg">
                        <div class="diagram_auth_stats__ulx7W">
                            <div class="flex  items-center     gap-[16px]"><img alt="icon" loading="lazy" width="24" height="25" decoding="async" data-nimg="1" src="{{ asset('') }}upnl/_next/static/media/invested.d3a751a8.svg" style="color: transparent;">
                                <p class="  text-[14px] font-[400]  uppercase text-[#828282]">Inactive Team</p>
                            </div>
                            <p class="   font-[400]  ">{{$total_teams }}</p>
                        </div>
                    </div>
                </div>
                <div class="flex gap-[24px] flex-col md:flex-row">
                    <div class="flex flex-col gap-[24px] flex-1 relative">
                        <p class="text-[14px] font-[400] uppercase text-[#828282]">Balance Graph</p>
                        <div class="diagram_auth_main__bN9lp">
                            <div class="flex justify-between">
                                <div class="flex flex-col gap-[16px]">
                                    <p class="text-[32px] font-[400]">$ 0</p>
                                </div>
                                <div class="cursor-pointer" data-state="closed"><img alt="icon" loading="lazy" width="24" height="24" decoding="async" data-nimg="1" src="{{ asset('') }}upnl/_next/static/media/mark.72686f6e.svg" style="color: transparent;"></div>
                            </div>
                            <div class="bg-[#ECECEC] h-[1px] w-full"></div>
                            <div class="diagram_auth_buttons__cE2t"><button class="diagram_auth_button2hbFw diagram_auth_activeGcDbS">Week</button><button class="diagram_auth_button2hbFw">Month</button><button class="diagram_auth_button_2hbFw">All Time</button></div>
                            <div class="">
                             <div class="pl-6 pr-6 diagram_auth_chart_content__3EJ49">
    <p class="diagram_auth_text__EIXRd">Your Income Statistics</p>

    <div class="">
        <div id="incomeChart" style="min-height: 300px;"></div>
    </div>
</div>

                            </div>
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
                                <p class="text-[14px] font-[400]  uppercase text-[#828282]">Earned</p>
                            </div>
                            <p class="   font-[400]  ">$ 0</p>
                        </div>
                    </div>
                </div>
                <p class="text-[14px] font-[400]  uppercase text-[#828282]"> Investment Activation </p>
               
                
                <div class="flex flex-col w-full rounded-[6px] border border-solid border-[#e6e6e6]">
    <div class="flex gap-[16px] items-center justify-between flex-wrap w-full rounded-[6px] bg-[#f3fbfc] px-[32px] py-[24px] border-solid border-b border-[#e6e6e6] text-[12px]">
        <p>S.no</p>
        <p>Amount</p>
        <p>Payment Mode</p>
        <p>Created At</p>
        <p>Status</p>
    </div>

    @if($deposit_report->isEmpty())
        <p class="dashboard_available__4fbXB">No Available Data</p>
    @else
        @foreach($deposit_report as $index => $report)
            <div class="flex gap-[16px] items-center justify-between flex-wrap w-full px-[32px] py-[20px] border-b border-[#e6e6e6] text-[13px]">
                <p>{{ $index + 1 }}</p>
                <p>{{ $report->amount }}</p>
                <p>{{ ucfirst($report->payment_mode) }}</p>
                <p>{{ \Carbon\Carbon::parse($report->created_at)->format('d-M-Y h:i A') }}</p>
                <p>{{ $report->status }}</p>

            </div>
        @endforeach
    @endif
</div>

            </div>
            <div class="flex flex-col gap-[24px] ">
                <div class="hidden lg:flex flex-col relative overflow-hidden p-[24px] rounded-[6px] border-2 border-solid border-[#e4fafc] gap-[16px] bg-white w-full md:w-[282px] ">
                    <div class="absolute top-0 right-0"><svg width="282" height="219" viewBox="0 0 282 219" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.0788889" d="M764.287 102.236L504.237 -79.1842L464.441 182.709L-46.1854 -112.02" stroke="#00B2C8"></path>
                            <path opacity="0.157778" d="M718.898 88.9758L487.881 -71.7701L452.368 160.507L-1.28403 -100.587" stroke="#00B2C8"></path>
                            <path opacity="0.236667" d="M673.508 75.7159L471.525 -64.356L440.295 138.306L43.6175 -89.1529" stroke="#00B2C8"></path>
                            <path opacity="0.315556" d="M628.115 62.4552L455.165 -56.9425L428.218 116.104L88.5151 -77.7198" stroke="#00B2C8"></path>
                            <path opacity="0.394444" d="M582.728 49.1983L438.81 -49.5253L416.147 93.9055L133.418 -66.2831" stroke="#00B2C8"></path>
                            <path opacity="0.473333" d="M537.335 35.9371L422.45 -42.1124L404.07 71.7029L178.316 -54.8507" stroke="#00B2C8"></path>
                            <path opacity="0.552222" d="M491.944 22.6747L406.092 -34.7008L391.995 49.499L223.216 -43.4195" stroke="#00B2C8"></path>
                            <path opacity="0.631111" d="M446.557 9.41626L389.738 -27.2851L379.924 27.2991L268.119 -31.9842" stroke="#00B2C8"></path>
                        </svg></div>
                    <p class="text-[14px] font-[400]  uppercase text-[#828282]">Need help?</p>
                    <p class=" text-[12px]   ">Visit our Help Center or start our Site Guide to get started with Emvios.</p>
                    <div class="flex gap-[8px]">
                        <div class="dashboard_help__Pfe41"><svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg" class=" flex-shrink-0 w-4 h-4" preserveAspectRatio="xMidYMid meet">
                                <path d="M17 1.60345V15.3966C17 16.0034 16.5034 16.5 15.8966 16.5H2.10345C1.49655 16.5 1 16.0034 1 15.3966V1.60345C1 0.996552 1.49655 0.5 2.10345 0.5H15.8966C16.5034 0.5 17 0.996552 17 1.60345Z" stroke="#303030" stroke-width="0.8" stroke-miterlimit="10"></path>
                                <path d="M8.99894 9.93421V8.94111C9.77135 8.94111 10.4334 8.27904 10.4334 7.50663C10.4334 6.73421 9.77135 6.07214 8.99894 6.07214C8.22652 6.07214 7.56445 6.73421 7.56445 7.50663" stroke="#00B2C8" stroke-width="0.8" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M9.00046 11.5345C9.27472 11.5345 9.49701 11.3122 9.49701 11.038C9.49701 10.7637 9.27472 10.5414 9.00046 10.5414C8.72625 10.5414 8.50391 10.7637 8.50391 11.038C8.50391 11.3122 8.72625 11.5345 9.00046 11.5345Z" fill="#00B2C8"></path>
                                <path d="M8.99919 13.7414C11.8939 13.7414 14.2406 11.3948 14.2406 8.50005C14.2406 5.60532 11.8939 3.25867 8.99919 3.25867C6.10446 3.25867 3.75781 5.60532 3.75781 8.50005C3.75781 11.3948 6.10446 13.7414 8.99919 13.7414Z" stroke="#303030" stroke-width="0.8" stroke-miterlimit="10"></path>
                            </svg><a class="flex justify-center items-center gap-[4px]" href="/en/helpcenter/what-is-emvios">
                                <p class=" text-[12px] ">Help Hub</p>
                            </a></div>
                        <div class="dashboard_start__idFtL"><svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" class=" flex-shrink-0 w-[20px] h-5 relative" preserveAspectRatio="xMidYMid meet">
                                <path d="M15.4127 17.9976H9.05859V19.5861H15.4127V17.9976Z" stroke="black" stroke-width="0.8" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M9.74609 5.3042V2.18011" stroke="#00B2C8" stroke-width="0.8" stroke-miterlimit="10" stroke-linecap="round"></path>
                                <path d="M7.63497 1.41376C5.91511 2.21325 4.72266 3.95626 4.72266 5.97778C4.72266 8.48569 6.55797 10.565 8.95873 10.9458M11.871 1.41376C13.5909 2.21325 14.7834 3.95626 14.7834 5.97778C14.7834 7.89388 13.7121 9.55973 12.1358 10.4091" stroke="#00B2C8" stroke-width="0.8" stroke-miterlimit="10" stroke-linecap="round"></path>
                                <path d="M8.52589 3.58453C7.53018 4.02577 6.83984 4.98773 6.83984 6.10342C6.83984 7.37418 7.73551 8.44556 8.95789 8.77513M10.9784 3.58453C11.9741 4.02577 12.6645 4.98773 12.6645 6.10342C12.6645 7.32813 11.8326 8.36761 10.678 8.73637" stroke="#00B2C8" stroke-width="0.8" stroke-miterlimit="10" stroke-linecap="round"></path>
                                <path d="M9.05839 12.6498L8.84658 12.2261C8.63482 11.8555 8.15825 11.6967 7.78758 11.9614C7.41692 12.1732 7.25806 12.6498 7.46987 13.0204C7.46987 13.0204 9.11154 15.4785 9.11135 15.8268C9.11116 16.1752 9.05839 12.6498 9.05839 12.6498Z" stroke="black" stroke-width="0.8" stroke-miterlimit="10"></path>
                                <path d="M14.6185 11.1139C14.1949 11.1139 13.8242 11.4846 13.8242 11.9082V11.3787C13.8242 10.9551 13.4535 10.5844 13.0299 10.5844C12.6063 10.5844 12.2357 10.9551 12.2357 11.3787V10.8492C12.2357 10.6373 12.1827 10.4785 12.0239 10.3197C11.865 10.1608 11.6532 10.0549 11.4414 10.0549C11.0178 10.0549 10.6472 10.4256 10.6472 10.8492V7.67211C10.6472 7.24849 10.2765 6.87787 9.85288 6.87787C9.42926 6.87787 9.05859 7.24849 9.05859 7.67211V15.35C9.05859 15.8265 9.37631 16.1972 9.79993 16.3561C10.0117 16.462 10.1706 16.6738 10.1176 16.8856V17.9975H14.3537V16.8326C14.3537 16.6208 14.4596 16.409 14.6714 16.3031C15.095 16.1442 15.3598 15.7736 15.4127 15.35V11.9082C15.4127 11.4846 15.0421 11.1139 14.6185 11.1139Z" stroke="black" stroke-width="0.8" stroke-miterlimit="10"></path>
                                <path d="M10.6484 10.8492V12.4377" stroke="black" stroke-width="0.8" stroke-miterlimit="10"></path>
                                <path d="M12.2363 11.3789V12.4379" stroke="black" stroke-width="0.8" stroke-miterlimit="10"></path>
                                <path d="M13.8242 11.9081V12.4376" stroke="black" stroke-width="0.8" stroke-miterlimit="10"></path>
                            </svg>
                            <p class=" text-[12px]">Start Guide</p>
                        </div>
                    </div>
                </div>
                <div class="p-[24px] flex flex-col gap-[16px] rounded-[6px] bg-white border border-[#e6e6e6] border-solid">
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
                </div>
                <div class="flex flex-col border-solid gap-[24px] p-[24px] rounded-[6px] border border-[#e6e6e6] bg-white">
                    <p class="text-[14px] font-[400]  uppercase text-[#828282]">Affiliate rewards</p>
                    <div class="flex justify-between items-center gap-[16px]">
                        <div class="flex flex-col gap-[24px]">
                            <p class="text-[12px]   ">Earn up to $ 60 000 by inviting friends. achieve turnover and receive instant bonuses</p>
                        </div><img alt="icon" loading="lazy" width="100" height="100" decoding="async" data-nimg="1" class=" flex-shrink-0 w-[100px] h-[100px] object-cover" src="{{ asset('') }}upnl/_next/static/media/rocket.webp" style="color: transparent;">
                    </div><a class="text-[16px]" href="/en/affiliate"><button class="underline-button_body__JNXIx">
                            <div class="underline-button_circle__hshhT"><img alt="icon" loading="lazy" width="12" height="8" decoding="async" data-nimg="1" src="{{ asset('') }}upnl/_next/static/media/arrow.62791f30.svg" style="color: transparent;"></div>
                            <p class="underline-button_text__mcUAC">Invite friends</p>
                        </button></a>
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
                toolbar: { show: false }
            },
            series: [{
                name: 'Income',
                data: @json($chartTotals)
            }],
            xaxis: {
                categories: @json($chartDates),
                title: { text: 'Date' }
            },
            yaxis: {
                title: { text: 'Income (₹)' }
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
                    formatter: function (val) {
                        return "₹ " + val;
                    }
                }
            }
        };

        var chart = new ApexCharts(document.querySelector("#incomeChart"), options);
        chart.render();
    });
</script>
</html>