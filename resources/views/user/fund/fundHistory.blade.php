<main>
    <style>
        /* Pagination block alignment */
        .pagination-block {
            display: flex;
            justify-content: flex-end;
            margin-top: 16px;
        }

        /* Pagination container */
        .pagination {
            display: flex;
            gap: 6px;
            overflow-x: auto;
            padding: 4px;
        }

        /* Pagination link style */
        .pagination .page-link {
            display: inline-block;
            padding: 6px 12px;
            border-radius: 6px;
            border: 1px solid #e6e6e6;
            background-color: #f3fbfc;
            color: #333;
            font-size: 13px;
            text-decoration: none;
            transition: all 0.2s ease-in-out;
        }

        /* Hover effect */
        .pagination .page-link:hover {
            background-color: #d6f4f8;
            border-color: #bde8ee;
            color: #111;
        }

        /* Active page style */
        .pagination .active .page-link {
            background-color: rgb(0 178 200);
            border-color: rgb(0 178 200);
            color: white;
            font-weight: 600;
        }

        /* Disabled buttons */
        .pagination .disabled .page-link {
            opacity: 0.5;
            cursor: not-allowed;
        }

        /* Responsive scroll */
        .pagination::-webkit-scrollbar {
            height: 6px;
        }

        .pagination::-webkit-scrollbar-thumb {
            background: #ddd;
            border-radius: 3px;
        }
    </style>
    <div class="main_auth _container"
        style="max-width: 1200px;">
        <div class="breadcrumbAuth_breadcrumb__Log0f">
            <nav aria-label="breadcrumb">
                <ol
                    class="flex flex-wrap items-center gap-1.5 break-words text-sm sm:gap-2.5 justify-center">
                    <li
                        class="inline-flex items-center gap-1.5"><span
                            class="transition-colors hover:text-foreground"><a
                                href>Personal
                                account</a></span></li>
                    <span class="flex gap-1.5 items-center">
                        <li role="presentation"
                            aria-hidden="true"
                            class="[&amp;&gt;svg]:size-3.5">
                            <svg
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
                            </svg>
                        </li>
                        <li
                            class="inline-flex items-center gap-1.5"><span
                                class="transition-colors hover:text-foreground"><a
                                    class="capitalize"
                                    href="/en/statistics">Statistics</a></span></li>
                    </span>
                    <span class="flex gap-1.5 items-center">
                        <li role="presentation"
                            aria-hidden="true"
                            class="[&amp;&gt;svg]:size-3.5">
                            <svg
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
                            </svg>
                        </li>
                        <li
                            class="inline-flex items-center gap-1.5">
                            <div
                                class="font-[400] text-[#000]"><span
                                    role="link"
                                    aria-disabled="true"
                                    aria-current="page"
                                    class="flex gap-[4px] items-center capitalize">All</span></div>
                        </li>
                    </span>
                </ol>
            </nav>
        </div>


        <!-- 
        <div class="self-stretch">
            <div
                class="flex flex-col w-full rounded-[6px] border border-solid border-[#e6e6e6] ">
                <div
                    class="flex gap-[16px] items-center justify-between flex-wrap w-full rounded-[6px] bg-[#f3fbfc] px-[32px] py-[24px] border-solid border-b border-[#e6e6e6] text-[12px] ">
                    <p>Date</p>
                    <p>Type</p>
                    <p>Currency</p>
                    <p>Amount</p>
                    <p>TXid</p>
                    <p>Status</p>
                </div>

                @forelse ($level_income as $value)
                <div class="flex gap-[16px] items-center justify-between flex-wrap w-full rounded-[6px]  px-[32px] py-[24px] border-solid border-b border-[#e6e6e6] text-[12px] ">
                    <p>{{ $value->wdate ?? '-' }}</p>
                    <p>{{ $value->stat ?? '-' }}</p>
                    <p>{{ $value->payment_mode ?? '-' }}</p>
                    <p>{{ $value->amount ?? '-' }}</p>
                    <p>{{ $value->txn_id ?? '-' }}</p>
                    <p>{{ $value->status ?? '-' }}</p>
                </div>
                @empty
                <p class="statistics_available__Azr1A">No Available Data</p>
                @endforelse



            </div>
            <div class="pagination-block">

                <div class="pagination" style="    overflow-x: auto;">
                    {{ $level_income->withQueryString()->links() }}
                </div>
            </div>
        </div> -->


        <div class="self-stretch">
            <div class="flex justify-end border  h-[40px] ">
                <a class="statistics_plan__DBm_J statistics_active__Rws_8" id="filter-toggle">
                    Filter
                </a>
            </div>

            <div id="filter-dropdown"
                class="absolute right-0 mt-2  bg-white border border-gray-200 rounded-lg shadow-xl p-4 space-y-4 hidden z-50 transition-all duration-300">

                <!-- Input -->
                <form action="{{route('user.fundHistory')}}" method="GET">
                    <div>
                        <input type="text" style="border: 1px solid gray ;"
                            placeholder="Type to filter..."
                            class="border border-gray-300 rounded-md py-2 px-2   "
                            id="filter-input" />
                    </div>

                    <!-- Buttons: Apply & Reset -->
                    <div class="flex justify-between gap-3 " style="margin-top:10px;">
                        <!-- Apply Button -->
                        <button type="submit"
                            class="flex-1  text-black font-medium py-2 rounded-md hover:bg-blue-700 transition" style="background-color: rgb(0 178 200);">
                            Apply
                        </button>

                        <!-- Reset Button (styled like a button, but is a link) -->
                        <a href="{{ route('user.fundHistory') }}"
                            class="flex-1 text-center bg-gray-200 text-gray-800 font-medium py-2 rounded-md hover:bg-gray-300 transition">
                            Reset
                        </a>
                    </div>


                </form>
            </div>

            <script>
                const toggle = document.getElementById('filter-toggle');
                const dropdown = document.getElementById('filter-dropdown');

                toggle.addEventListener('click', () => {
                    dropdown.classList.toggle('hidden');
                });

                // Optional: close dropdown when clicked outside
                document.addEventListener('click', (e) => {
                    if (!toggle.contains(e.target) && !dropdown.contains(e.target)) {
                        dropdown.classList.add('hidden');
                    }
                });
            </script>

            <div class="w-full rounded-[6px] border border-solid border-[#e6e6e6] overflow-x-auto">

                <div
                    class="flex overflow-hidden border border-solid rounded-[6px] border-[#e6e6e6]  h-[40px]">
                    <!-- <a class="statistics_plan__DBm_J " href="javascript:void(0)">All</a> -->
                    <a class="statistics_plan__DBm_J statistics_active__Rws_8" href="{{route('user.fundHistory')}}">Fundings</a>
                    <a class="statistics_plan__DBm_J " href="{{route('user.DepositHistory')}}">Investment</a>
                    <a class="statistics_plan__DBm_J " href="{{route('user.Withdraw-History')}}">Withdraw</a>
                    <a class="statistics_plan__DBm_J " href="{{route('user.bonus')}}">Bonuses</a>
                </div>
                <table class="min-w-full border-collapse text-[12px]">
                    <thead>
                        <tr class="bg-[#f3fbfc] border-b border-[#e6e6e6] text-left">
                            <th class="px-[32px] py-[24px] bold">Date</th>
                            <th class="px-[32px] py-[24px] bold">Type</th>
                            <th class="px-[32px] py-[24px] bold">Order Id</th>
                            <th class="px-[32px] py-[24px] bold">Amount</th>
                            <th class="px-[32px] py-[24px] bold">Transaction Id </th>
                            <th class="px-[32px] py-[24px] bold">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        @forelse ($level_income as $value)
                        <tr class="border-b border-[#e6e6e6] hover:bg-[#f9f9f9]">
                            <td class="px-[32px] py-[24px]">{{ $value->bdate ?? '-' }}</td>
                            <td class="px-[32px] py-[24px]">{{ $value->type ?? '-' }}</td>
                            <td class="px-[32px] py-[24px]">{{ $value->orderId ?? '-' }}</td>
                            <td class="px-[32px] py-[24px]">{{ $value->amount ?? '-' }}</td>
                            <td class="px-[32px] py-[24px]">{{ $value->txn_no ?? '-' }}</td>
                            <td class="px-[32px] py-[24px]">{{ $value->status ?? '-' }}</td>
                        </tr>
                        @empty
                        <tr>
                            <td colspan="6" class="text-center py-[24px] text-gray-500">
                                No Available Data
                            </td>
                        </tr>
                        @endforelse
                    </tbody>


                </table>

            </div>

            <div class="pagination-block mt-[16px]">
                <div class="pagination" style="overflow-x: auto;">
                    {{ $level_income->withQueryString()->links() }}
                </div>
            </div>
        </div>


        <!-- <div class="statistics_statistics___13Ni">
            <div class="statistics_stats__5z4UM bg-white">
                <div class="flex  items-center  gap-[16px]">
                    <img alt="icon" loading="lazy"
                        width="24" height="25"
                        decoding="async" data-nimg="1"
                        src="{{ asset('') }}upnl/_next/static/media/invested.d3a751a8.svg"
                        style="color: transparent;">
                    <p
                        class="text-[14px] font-medium  uppercase text-[#828282]">Replenished</p>
                </div>
                <p class="font-medium  text-[18px]">$ 0</p>
            </div>
            <div class="statistics_stats__5z4UM bg-white">
                <div class="flex  items-center  gap-[8px]">
                    <img alt="icon" loading="lazy"
                        width="24" height="25"
                        decoding="async" data-nimg="1"
                        src="{{ asset('') }}upnl/_next/static/media/withdrawn.e239ce07.svg"
                        style="color: transparent;">
                    <p
                        class="text-[12px] font-medium  uppercase text-[#828282]">Withdrawn</p>
                </div>
                <p class="font-medium  text-[18px]">$ 0</p>
            </div>
            <div class="statistics_stats__5z4UM bg-white">
                <div class="flex  items-center  gap-[8px]">
                    <img alt="icon" loading="lazy"
                        width="25" height="25"
                        decoding="async" data-nimg="1"
                        src="{{ asset('') }}upnl/_next/static/media/briefcase.f642f1e3.svg"
                        style="color: transparent;">
                    <p
                        class="text-[12px] font-medium  uppercase text-[#828282]">Invested</p>
                </div>
                <p class="font-medium  text-[18px]">$ 0</p>
            </div>
            <div class="statistics_stats__5z4UM bg-white">
                <div class="flex  items-center  gap-[8px]">
                    <img alt="icon" loading="lazy"
                        width="24" height="25"
                        decoding="async" data-nimg="1"
                        src="{{ asset('') }}upnl/_next/static/media/earned.57067797.svg"
                        style="color: transparent;">
                    <p
                        class="text-[12px] font-medium  uppercase text-[#828282]">Earned</p>
                </div>
                <p class="font-medium  text-[18px]">$ 0</p>
            </div>
            <div class="statistics_stats__5z4UM bg-white">
                <div class="flex  items-center  gap-[8px]">
                    <img alt="icon" loading="lazy"
                        width="25" height="25"
                        decoding="async" data-nimg="1"
                        src="{{ asset('') }}upnl/_next/static/media/gift.44a055fe.svg"
                        style="color: transparent;">
                    <p
                        class="text-[12px] font-medium  uppercase text-[#828282]">Bonuses</p>
                </div>
                <p class="font-medium  text-[18px]">$ 0</p>
            </div>
        </div> -->
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

<!-- <script>
    const tabs = document.querySelectorAll('.statistics_plan__DBm_J');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('statistics_active__Rws_8'));
            tab.classList.add('statistics_active__Rws_8');
        });
    });
</script> -->

</body>

</html>












<!-- 
<section class="section-transactions">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="section-title-block">
                    <h2 class="section-title">Top Up Reports</h2>
                </div>
                <div class="section-descr">
                    Top Up Reports on your account. Track and monitor the movement of your crypto assets.
                </div>
                <div class="s-transactions-block">
                    <div class="row">
                        <div class="col-12 col-xl-2 d-none d-xl-block">
                            <div class="transactions-stats-block soleyTotalEarningsChart"
                                data-title="Total earnings">








                                <div class="earning-stats-chart-block">
                                    <canvas class="earning-stats-chart"
                                        id="soleyTotalEarningsChartCanvas"></canvas>
                                    <div class="earning-stats-chart-info">
                                        <div class="earning-stats-chart-info__deposit soleyDynamicAmount"
                                            data-active="0" data-value="0.175235" data-plus-minutely="0"
                                            data-balance-mask="$[amount]" data-round="2">
                                            {{ currency() }}
                                            {{ number_format(Auth::user()->totalIncome->sum('comm'), 2) }}
                                        </div>
                                        <div class="earning-stats-chart-info__title">
                                            Total earnings
                                        </div>
                                    </div>
                                </div>
                                <div class="earning-stats-chart-legend-block">
                                    <div class="earning-stats-chart-legend-items">
                                        <div class="earning-stats-chart-legend-item">
                                            <div class="earning-stats-chart-legend-item__line"
                                                style="background-color: rgba(129, 43, 224, 1);">
                                            </div>
                                            <div class="earning-stats-chart-legend-item__content">
                                                <div data-chart-value="0.175235"
                                                    class="soleyTotalEarningsChartDeposits earning-stats-chart-legend-item__deposit soleyDynamicAmount"
                                                    data-active="0" data-value="0.175235000000"
                                                    data-plus-minutely="0" data-balance-mask="$[amount]"
                                                    data-round="2">
                                                    {{ currency() }}
                                                    {{ number_format(Auth::user()->investment->sum('amount'), 2) }}
                                                </div>
                                                <div class="earning-stats-chart-legend-item__currency">
                                                    Deposits</div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>











                            </div>
                        </div>
                        <div class="col-12 col-lg-10 col-xl-8 offset-0 offset-lg-1 offset-xl-0">
                            <div class="transactions-block">

                                <div class="transactions-filter-block soleySearch">
                                    <div class="transactions-filter-heading">
                                        <div class="transactions-filter-heading-inner">
                                            <div class="transactions-filter-title-block">
                                                <div class="transactions-filter-title">
                                                    Transaction <span class="text--purple">Search</span>
                                                </div>
                                            </div>
                                            <div class="transactions-accepted-filters-block">
                                                <div class="transactions-accepted-filters">
                                                    <div class="transactions-accepted-filter-wrapper">
                                                        <div class="transactions-accepted-filter "
                                                            style="padding-right:12px;">
                                                            <div class="transactions-accepted-filter__title ">
                                                                All
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="transactions-filter-heading-arrow"></div>
                                    </div>
                                    <div class="transactions-filter-body">
                                        <div class="transactions-filter-form-block">
                                            <form action="{{route('user.roi-bonus')}}" method="GET"
                                                class="form transactions-filter-form">
                                                <div class="transactions-filter-form-cols">

                                                    <div class="transactions-filter-form-col">

                                                        <div class="field-block">
                                                            <div class="field-title-block">
                                                                <div class="field-title">
                                                                Transactions
                                                                </div>
                                                                
                                                            </div>

                                                            <div class="field field--iconed field--select">
                                                                <select name="type" onchange="location = this.value;"
                                                                    class="select select--status">
  <option
                                                                        data-content='<div class="select-item"><div class="select-item__text">Profit Summary</div></div>'
                                                                        value="">Profit Summary</option>
                                                                        
                                                                    <option
                                                                        data-content='<div class="select-item"><div class="select-item__text">Algorithmic Profit</div></div>'
                                                                        value="{{route('user.roi-bonus')}}" >Algorithmic Profit</option>
                                                                    <option
                                                                        data-content='<div class="select-item"><div class="select-item__text">Farming Profit</div></div>'
                                                                        value="{{route('user.level-income')}}">Farming Profit</option>
                                                                    <option
                                                                        data-content='<div class="select-item"><div class="select-item__text">Reward Profit</div></div>'
                                                                        value="{{route('user.reward-bonus')}}">Reward Profit</option>
                                                                    <option
                                                                        data-content='<div class="select-item"><div class="select-item__text">Deposits</div></div>'
                                                                        value="{{route('user.DepositHistory')}}">Deposits</option>

                                                                        <option
                                                                        data-content='<div class="select-item"><div class="select-item__text">Withdrawals</div></div>'
                                                                        value="{{route('user.Withdraw-History')}}">Withdrawals</option>
                                                                        <option
                                                                        data-content='<div class="select-item"><div class="select-item__text">Top Up Reports</div></div>'
                                                                        value="{{route('user.fundHistory')}}" selected>Top Up Reports</option>


                                                                </select>
                                                            </div>

                                                        </div>
                                                    </div>

                                                    <div class="transactions-filter-form-col">

                                                        <div class="field-block">
                                                            <div class="field-title-block">
                                                                <div class="field-title">
                                                                    Search
                                                                </div>
                                                                <div class="field-reset-link-block">
                                                                    <a href="javascript:void(0);"
                                                                        class="soleySearchReset field-reset-link">
                                                                        <div class="field-reset-link__icon">
                                                                        </div>
                                                                        <div class="field-reset-link__text">
                                                                            Reset</div>
                                                                    </a>
                                                                </div>
                                                            </div>

                                                            <div class="field field--iconed field--select">
                                                                <input type="text" style="padding-left: 24px" Placeholder="Search" name="search"  value='{{@$search}}'>  
                                                            </div>


                                                        </div>
                                                    </div>
                                                  
                                                    <div class="transactions-filter-form-col">

                                                        <div class="field-block">
                                                            <div class="field-title-block">
                                                                <div class="field-title">
                                                                    Limit
                                                                </div>
                                                                <div class="field-reset-link-block">
                                                                    <a href="javascript:void(0);"
                                                                        class="soleySearchReset field-reset-link">
                                                                        <div class="field-reset-link__icon">
                                                                        </div>
                                                                        <div class="field-reset-link__text">
                                                                            Reset</div>
                                                                    </a>
                                                                </div>
                                                            </div>

                                                            <div class="field field--iconed field--select">
                                                                <select name="limit"
                                                                    class="select select--status">

                                                                    <option
                                                                        data-content='<div class="select-item"><div class="select-item__text">10</div></div>'
                                                                        value="10">10</option>
                                                                    <option
                                                                        data-content='<div class="select-item"><div class="select-item__text">25</div></div>'
                                                                        value="25">25</option>
                                                                    <option
                                                                        data-content='<div class="select-item"><div class="select-item__text">50</div></div>'
                                                                        value="50">50</option>
                                                                    <option
                                                                        data-content='<div class="select-item"><div class="select-item__text">100</div></div>'
                                                                        value="100">100</option>


                                                                </select>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="transactions-filter-form-manage-panel-block">
                                                    <div class="transactions-filter-form-manage-panel">
                                                        <div
                                                            class="transactions-filter-form-manage-btn-wrapper">
                                                            <button type="submit"
                                                                class="purple-btn transactions-filter-submit-btn">Show</button>
                                                        </div>
                                                        <div
                                                            class="transactions-filter-form-manage-btn-wrapper">
                                                            <a href="{{route('user.roi-bonus')}}"
                                                                class="transactions-filter-reset-btn">Reset</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>







                                <div class="transaction-items-block">
                                    <div class="transaction-items">
                                   
                                        @foreach ($level_income as $value)
                                        <div class="transaction-item">
                                            <div class="transaction-item-left">
                                                <div class="transaction-item-id-block">
                                                    <div class="transaction-item-id">
                                                        <div class="transaction-item-id-content">
                                                            <div class="transaction-item-id-title">
                                                                #
                                                            </div>
                                                            <div class="transaction-item-id-value">
                                                                <strong>{{$value->orderId}}</strong>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="transaction-item-status-block">


                                                    @if($value->status=="Approved")
                                                    <div
                                                    class="transaction-item-status transaction-item-status--success">
                                                    Success
                                                </div>
                                                    @else
                                                    <div
                                                    class="transaction-item-status transaction-item-status--red">
                                                    {{$value->status}}
                                                </div>
                                                    @endif


                                                </div>
                                                <div class="transaction-item-type-block">
                                                    <div class="transaction-item-type">
                                                        <div class="transaction-item-type-title"
                                                            style="font-size:14px;">
                                                            {{"Top up "}}
                                                        </div>
                                                        <div style="font-size:12px;text-transform: none"
                                                            class="transaction-item-type-subtitle">
                                                            {{$value->txn_no}}
                                                        </div>
                                                    </div>
                                                </div>

                                                
                                            </div>
                                            <div class="transaction-item-right">
                                                <div class="transaction-item-info-block">
                                                    <div class="transaction-item-info">
                                                        <div class="transaction-item-info-currency">
                                                            <div
                                                                class="currency-item__icon currency-item__icon--tether">
                                                                <img class="image"
                                                                    src="{{ asset('') }}main/assets/eQPywYAlnPNuvenAX6Nb/images/svg/currency/tether.svg"
                                                                    alt="">
                                                            </div>
                                                        </div>
                                                        <div class="transaction-item-info-content">
                                                            <div class="transaction-item-info-amount"
                                                                style="font-size:14px;">
                                                                {{number_format($value->amount,2)}} USDT
                                                            </div>
                                                            <div class="transaction-item-info-date"
                                                                style="font-size:12px;">
                                                                {{date("D, d M Y", strtotime($value->created_at))}}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>


                                                <div class="transaction-item-manage-links-block">
                                                    <div class="transaction-item-manage-links">
                                                    </div>
                                                </div>
                                                <div class="transaction-item-more-info-link-block">
                                                    <div
                                                        class="transaction-item-more-info-link-wrapper dropend">
                                                        <button class="transaction-item-more-info-link"
                                                            type="button" data-bs-toggle="dropdown"
                                                            aria-expanded="false">More</button>
                                                        <div class="transaction-item-more-info-tooltip dropdown-menu"
                                                            style="">
                                                            <div
                                                                class="transaction-item-more-info-tooltip-inner">
                                                                <div
                                                                    class="transaction-item-more-info-tooltip__content">



                                                                    payment: <strong>{{$value->type}}
                                                                        </strong>



                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        @endforeach

                                    </div>
                                    <div class="pagination-block">

                                        <div class="pagination" style="    overflow-x: auto;">
                                        {{ $level_income->withQueryString()->links() }}
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                        <div class="col-12 col-lg-10 col-xl-2 offset-0 offset-lg-1 offset-xl-0">
                            <div class="deposits-help-block">
                                <div class="deposits-help">
                                    <div class="deposits-help-top">
                                        <div class="deposits-help-icon"></div>
                                        <div class="deposits-help-content">
                                            <div class="deposits-help-title">
                                                Any questions?
                                            </div>
                                            <div class="deposits-help-descr">
                                                Visit Soley Help center now, and you will find proper answers.
                                            </div>
                                        </div>
                                    </div>
                                    <div class="deposits-help-btn-block">
                                        <a href="/help-center/" class="deposits-help-btn purple-btn">
                                            Help center
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section> -->