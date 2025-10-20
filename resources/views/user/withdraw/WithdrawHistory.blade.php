

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
      


        <div class="self-stretch">
             <div class="flex justify-end border  h-[40px] ">
                <a class="statistics_plan__DBm_J statistics_active__Rws_8" id="filter-toggle">
                    Filter
                </a>
            </div>

            <div id="filter-dropdown"
                class="absolute right-0 mt-2  bg-white border border-gray-200 rounded-lg shadow-xl p-4 space-y-4 hidden z-50 transition-all duration-300">

                <!-- Input -->
                <form action="{{route('user.Withdraw-History')}}" method="GET">
                    <div>
                        <input type="text" name="search"  value="{{ @$search }}"   style="border: 1px solid gray ;"
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
                        <a href="{{ route('user.Withdraw-History') }}"
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
            <a class="statistics_plan__DBm_J " href="{{route('user.fundHistory')}}">Fundings</a>
            <a class="statistics_plan__DBm_J " href="{{route('user.DepositHistory')}}">Investment</a>
            <a class="statistics_plan__DBm_J statistics_active__Rws_8" href="{{route('user.Withdraw-History')}}">Withdraw</a>
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
                        @forelse ($withdraw_report as $value)
                        <tr class="border-b border-[#e6e6e6] hover:bg-[#f9f9f9]">
                            <td class="px-[32px] py-[24px]">{{ $value->wdate ?? '-' }}</td>
                            <td class="px-[32px] py-[24px]">{{ $value->payment_mode ?? '-' }}</td>
                            <td class="px-[32px] py-[24px]">{{ $value->orderId ?? '-' }}</td>
                            <td class="px-[32px] py-[24px]">{{ $value->amount ?? '-' }}</td>
                            <td class="px-[32px] py-[24px]">{{ $value->txn_id ?? '-' }}</td>
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
                            {{ $withdraw_report->withQueryString()->links() }}
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

</html>

