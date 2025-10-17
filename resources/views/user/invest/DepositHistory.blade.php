<main>
    <!--$--><!--/$--><!--$--><!--/$-->
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
        <div
            class="flex overflow-hidden border border-solid rounded-[6px] border-[#e6e6e6]  h-[40px]">
            <!-- <a class="statistics_plan__DBm_J " href="javascript:void(0)">All</a> -->
            <a class="statistics_plan__DBm_J" href="{{route('user.fundHistory')}}">Fundings</a>
            <a class="statistics_plan_DBm_J statistics_active_Rws_8" href="{{route('user.DepositHistory')}}">Investment</a>
            <a class="statistics_plan__DBm_J " href="{{route('user.Withdraw-History')}}">Withdraw</a>
            <a class="statistics_plan__DBm_J" href="{{route('user.all-income')}}">Bonuses</a>
        </div>


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

                @forelse ($deposit_list as $value)
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
                    {{ $deposit_list->withQueryString()->links() }}
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