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
    <style>
        .reset {
            display: inline-block;
            padding: 6px 12px;
            background: #a9abad;
            color: #fff;
            border: none;
            border-radius: 4px;
            text-decoration: none;
        }

        .my-accordion {
            width: 100%;
            margin: 5px 0px 5px 0px;
            background: #fff;
            border-radius: 6px;
            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
            overflow: hidden;
        }

        .my-accordion-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: rgb(0 178 200);
            color: #fff;
            padding: 12px 16px;
            font-size: 14px;
            cursor: pointer;
        }

        .my-accordion-arrow {
            transition: transform 0.5s ease;
        }

        .my-accordion-header.active .my-accordion-arrow {
            transform: rotate(180deg);
        }

        .my-accordion-content {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.4s ease, padding 0.4s ease;
            padding: 0 16px;
            background: #fff;
            border-top: 1px solid #ccc;
        }

        .my-accordion-content.show {
            max-height: 500px;
            padding: 16px;
        }

        .my-filter-form {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            align-items: center;
        }

        .my-filter-form input,
        .my-filter-form select {
            flex: 1;
            padding: 8px 10px;
            border-radius: 5px;
            border: 1px solid #ccc;
        }

        .my-filter-form button {
            padding: 6px 12px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }

        .my-apply-btn {
            background-color: rgb(0 178 200);
            color: #fff;
        }

        .my-reset-btn {
            background-color: #6c757d;
            color: #fff;
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

            <div class="my-accordion">
                <div class="my-accordion-header" onclick="toggleMyAccordion(this)">
                    <span class="my-accordion-title"
                        style="display: inline-flex; align-items: center; gap: 6px; font-size: 15px; font-weight: 500; color: #fff;">

                        <!-- Filter Icon -->
                        <svg xmlns="http://www.w3.org/2000/svg"
                            width="18" height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="1.6"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            aria-hidden="true"
                            style="margin-top: 1px;">
                            <path d="M22 3H2l7.5 9.5V21l5.5-3.5V12.5L22 3z" />
                        </svg>

                        <span>Filters</span>
                    </span>

                    <span class="my-accordion-arrow">▼</span>
                </div>

                <div class="my-accordion-content">
                    <form class="my-filter-form" method="GET" action="{{ route('user.fundHistory') }}">
                        <input type="text" name="search" value="{{ request('search') }}" placeholder="Search..."style="height: 40px; padding: 6px 8px; font-size: 14px; border: 1px solid #ccc; border-radius: 4px;" />


                        <input type="date" name="start_date" value="{{ request('start_date') }}" style="height: 40px; padding: 6px 8px; font-size: 14px; border: 1px solid #ccc; border-radius: 4px;">
                        <input type="date" name="end_date" value="{{ request('end_date') }}" style="height: 40px; padding: 6px 8px; font-size: 14px; border: 1px solid #ccc; border-radius: 4px;">


                        <select name="limit"style="height: 40px; padding: 6px 8px; font-size: 14px; border: 1px solid #ccc; border-radius: 4px;">
                            <option value="10" {{ request('limit') == 10 ? 'selected' : '' }}>10</option>
                            <option value="25" {{ request('limit') == 25 ? 'selected' : '' }}>25</option>
                            <option value="50" {{ request('limit') == 50 ? 'selected' : '' }}>50</option>
                            <option value="100" {{ request('limit') == 100 ? 'selected' : '' }}>100</option>
                        </select>

                        <button type="submit" class="my-apply-btn">Apply</button>
                        <a href="{{ route('user.fundHistory') }}" class="reset">Reset</a>

                    </form>
                </div>
            </div>


            <div class="w-full rounded-[6px] border border-solid border-[#e6e6e6] overflow-x-auto">

                <div
                    class="flex overflow-hidden border border-solid rounded-[6px] border-[#e6e6e6]  h-[40px]">
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

<script>
    function toggleMyAccordion(header) {
        header.classList.toggle("active");
        const content = header.nextElementSibling;
        content.classList.toggle("show");
    }
</script>

</html>