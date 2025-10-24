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
                            <p class="   font-[400]  ">{{currency()}}{{$total_teams }}</p>
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
                                <p class="text-[14px] font-[400]  uppercase text-[#828282]">Algorithmic Profit</p>
                            </div>
                            <p class="   font-[400]  ">{{ currency() }}{{ number_format(Auth::user()->stakingIncome->sum('amount'), 2) }}</p>
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
                    </div><a class="text-[16px]" href="{{ route('user.level-team') }}"><button class="underline-button_body__JNXIx">
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