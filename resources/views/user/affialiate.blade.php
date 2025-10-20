<main>
    <div class="main_auth _container"
        style="max-width:1200px">
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
                            class="inline-flex items-center gap-1.5">
                            <div
                                class="font-[400] text-[#000]"><span
                                    role="link"
                                    aria-disabled="true"
                                    aria-current="page"
                                    class="flex gap-[4px] items-center capitalize">Affiliate
                                    Program</span></div>
                        </li>
                    </span>
                </ol>
            </nav>
        </div>
        <h2
            class="text-[16px] uppercase text-[#828282] font-[400]">Summary
            infrormation</h2>
        <div class="affiliate_statistics__QnXhv">
            <div class="affiliate_stats__0_vLi bg-white">
                <div
                    class="flex  items-center     gap-[16px]">
                    <img alt="icon" loading="lazy"
                        width="24" height="25"
                        decoding="async" data-nimg="1"
                        style="color:transparent"
                        src="{{ asset('') }}upnl/_next/static/media/invested.d3a751a8.svg">
                    <p
                        class="  text-[14px] font-medium  uppercase text-[#828282]">Network
                        Turnover</p>
                </div>
                <p class="   font-medium  text-[18px]">
                    {{$team_total_investment}}
                </p>
            </div>
            <div class="affiliate_stats__0_vLi bg-white">
                <div
                    class="flex  items-center     gap-[8px]">
                    <img alt="icon" loading="lazy"
                        width="25" height="25"
                        decoding="async" data-nimg="1"
                        style="color:transparent"
                        src="{{ asset('') }}upnl/_next/static/media/gift.44a055fe.svg">
                    <p
                        class=" text-[12px] font-medium  uppercase text-[#828282]">Referral
                        Income</p>
                </div>
                <p class="   font-medium  text-[18px]">
                    $<!-- --> <!-- --> {{ number_format($level_income_total, 2) }}


                </p>
            </div>
            <div class="affiliate_stats__0_vLi bg-white">
                <div
                    class="flex  items-center     gap-[8px]">
                    <img alt="icon" loading="lazy"
                        width="24" height="25"
                        decoding="async" data-nimg="1"
                        style="color:transparent"
                        src="{{ asset('') }}upnl/_next/static/media/people.c0717b4b.svg">
                    <p
                        class=" text-[12px] font-medium  uppercase text-[#828282]">Total
                        Partners</p>
                </div>
                <p class="   font-medium  text-[18px]">{{$total_teams}}</p>
            </div>
            <div class="affiliate_stats__0_vLi bg-white">
                <div
                    class="flex  items-center     gap-[8px]">
                    <img alt="icon" loading="lazy"
                        width="24" height="25"
                        decoding="async" data-nimg="1"
                        style="color:transparent"
                        src="{{ asset('') }}upnl/_next/static/media/user_tick.d0b5ab8a.svg">
                    <p
                        class=" text-[12px] font-medium  uppercase text-[#828282]">Active
                        Partners</p>
                </div>
                <p class="font-medium  text-[18px]">{{$total_team}}</p>
            </div>
        </div>
        <div class="affiliate_block__Pro3B">
            <div class="affiliate_card__tduYT bg-white">
                <div
                    class="flex flex-col font-[400] items-center self-stretch  ">
                    <p class="text-[14px]  ">Rewards for
                        turnover</p>
                    <div
                        class="flex justify-center gap-[8px]">
                        <p class="  text-[12px]   ">
                            Turnover<!-- -->:
                        </p>
                        <p
                            class=" ml-[4px] text-[12px] font-semibold  ">
                            ${{ number_format($team_total_investment, 2) }}
                        </p>
                    </div>
                    <div
                        class="flex justify-center gap-[8px]">
                        <p class="  text-[12px]   ">
                            Personal investment<!-- -->:
                        </p>
                        <p
                            class=" ml-[4px] text-[12px] font-semibold  ">
                            ${{ number_format($user_total_investment, 2) }}
                        </p>
                    </div>
                </div>
                <div class="affiliate_list__G_zC9">
                    @forelse($top10_level_income as $level => $income)
                    <div class="flex flex-col justify-center items-center gap-[4px]">
                        <img alt="icon" loading="lazy"
                            width="24" height="25"
                            decoding="async" data-nimg="1"
                            style="color:transparent"
                            src="{{ asset('') }}upnl/_next/static/media/cup.c63b524d.svg">
                        <p class="text-[10px] font-[400] text-black leading-[1.5]">
                            Level {{ $level }}
                        </p>
                        <p class="text-[12px] text-black">
                            {{ number_format($income, 2) }} $
                        </p>
                    </div>
                    @empty
                    <p class="text-center text-gray-500">No Level Income Data Found</p>
                    @endforelse

                </div>
                <div
                    class="flex justify-center items-center cursor-pointer gap-[8px] px-[8px] rounded border-solid border border-[#e6e6e6]"
                    type="button" aria-haspopup="dialog"
                    aria-expanded="false"
                    aria-controls="radix-«R3c7nepnb»"
                    data-state="closed">
                    <img alt="icon" loading="lazy"
                        width="16" height="17"
                        decoding="async" data-nimg="1"
                        style="color:transparent"
                        src="{{ asset('') }}upnl/_next/static/media/document_download.939ba72d.svg">
                    <p class="text-[10px]">Detail
                        information</p>
                </div>
            </div>
            <div
                class="flex flex-col justify-center items-center self-stretch  overflow-hidden gap-[32px] px-[24px] py-[32px] rounded-[6px] border-solid border border-[#cecece] min-w-[315px] bg-white">
                <div
                    class="flex flex-col  items-center self-stretch gap-[8px]">
                    <p
                        class="  text-[14px] font-[400] text-center">Your
                        referral link</p>
                    <p
                        class="text-[12px]  text-center ">Earn
                        lifetime commissions on every Emvios
                        product activated by your
                        referrals.</p>
                    <p
                        class="  text-[16px] font-[500] text-center "><b>LVL
                            1-4:</b> 7%, 3%, 2%, 1%</p>
                    <p
                        class="  text-[14px] text-center "><b>LVL
                            5-10:</b> 0.5%</p>
                </div>
                <div
                    class="popup_presentation_button_border__ZMbDt"
                    type="button" aria-haspopup="dialog"
                    aria-expanded="false"
                    aria-controls="radix-«R2k7nepnb»"
                    data-state="closed">
                    <span
                        class="popup_presentation_circle__tAcjA">i</span>
                    <p>Promo materials</p>
                </div>
                <div class="affiliate_copy__g3p7Q">
                    <div
                        class="flex justify-center items-center flex-grow flex-shrink py-[8px] px-[16px] w-full">
                        <p
                            class="  text-[10px] flex-grow flex-shrink  text-[#7b7b7b]">https://www.emvios.net/registration/rameshk036</p>
                    </div>
                    <div
                        class="flex justify-center cursor-pointer flex-grow-0 flex-shrink-0 items-center self-stretch px-[16px] border-l border-r border-solid border-[#cecece]"><img
                            alt="copy" loading="lazy"
                            width="24" height="24"
                            decoding="async" data-nimg="1"
                            class="flex-grow-0 basis-[24px] flex-shrink-0"
                            style="color:transparent"
                            src="{{ asset('') }}upnl/_next/static/media/copy.5437ca74.svg"></div>
                    <div
                        class="flex flex-grow-0 cursor-pointer flex-shrink-0 justify-center items-center self-stretch px-[16px]"
                        type="button" aria-haspopup="dialog"
                        aria-expanded="false"
                        aria-controls="radix-«r0»"
                        data-state="closed"><img alt="icon"
                            loading="lazy" width="24"
                            height="25" decoding="async"
                            data-nimg="1"
                            class="flex-grow-0 basis-[24px] flex-shrink-0"
                            src="{{ asset('') }}upnl/_next/static/media/scanner.20b02b84.svg"
                            style="color: transparent;"></div>
                </div>
            </div>
        </div>
        <h2 class="affiliate_title__rWL6F">Referral
            Statistics</h2>
        <div class="affiliate_table__lSTWG">
            <div class="flex flex-col flex-grow">
                <div class="overflow-x-auto min-h-[350px] bg-white">
                    <div class="relative w-full">
                        <table class="w-full caption-bottom text-sm">

                            <thead class="border-b border-solid border-[#d9d9d9] bg-[#f3fbfc]">
                                <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                    <th class="text-[12px] font-light text-center text-[#303030] h-[73px] px-[16px] align-middle">Name</th>
                                    <th class="text-[12px] font-light text-center text-[#303030] h-[73px] px-[16px] align-middle">User ID</th>
                                    <th class="text-[12px] font-light text-center text-[#303030] h-[73px] px-[16px] align-middle">Email</th>
                                    <th class="text-[12px] font-light text-center text-[#303030] h-[73px] px-[16px] align-middle">Level</th>
                                    <th class="text-[12px] font-light text-center text-[#303030] h-[73px] px-[16px] align-middle">Sponsor</th>

                                    <th class="text-[12px] font-light text-center text-[#303030] h-[73px] px-[16px] align-middle">
                                        <div class="flex justify-center items-center self-stretch gap-[16px]">
                                            <p>Status</p>
                                        </div>
                                    </th>
                                </tr>
                            </thead>

                            <tbody class="[&_tr:last-child]:border-0">
                                @if(count($direct_team) > 0)
                                @foreach ($direct_team as $value)
                                <tr class="border-b border-solid border-[#d9d9d9]">
                                    <td class="text-center text-[13px] py-[12px]">{{ $value->name }}</td>
                                    <td class="text-center text-[13px] py-[12px]">{{ $value->username }}</td>
                                    <td class="text-center text-[13px] py-[12px]">{{ $value->email }}</td>
                                    <td class="text-center text-[13px] py-[12px] text-[#00b2c8] font-semibold">
                                        {{ $value->level - Auth::user()->level }}
                                    </td>
                                    <td class="text-center text-[13px] py-[12px] font-bold text-[#303030]">
                                        {{ $value->sponsor_detail->username }}
                                    </td>
                                    <td class="text-center text-[13px] py-[12px] font-bold text-[#303030]">
                                        {{ $value->active_status }}
                                    </td>
                                </tr>
                                @endforeach
                                @else
                                <tr>
                                    <td colspan="6" class="text-center py-[20px] text-[#8a8a8a]">
                                        No Available Data
                                    </td>
                                </tr>
                                @endif
                            </tbody>


                        </table>

                        @php
                        $currentPage = $direct_team->currentPage();
                        $lastPage = $direct_team->lastPage();
                        @endphp
                    </div>
                </div>

                {{-- ✅ Pagination Section --}}
                <div class="affiliate_buttons_border__5Cqzo mt-auto flex justify-between">
                    {{-- Prev Button --}}
                    @if ($currentPage > 1)
                    <a href="{{ $direct_team->previousPageUrl() }}" class="button_border_body__yeuoF">Prev</a>
                    @else
                    <button disabled class="button_border_body__yeuoF opacity-50 cursor-not-allowed">Prev</button>
                    @endif

                    {{-- Page Info --}}
                    <span class="text-sm text-gray-700 font-medium">
                        Page {{ $currentPage }} of {{ $lastPage }}
                    </span>

                    {{-- Next Button --}}
                    @if ($currentPage < $lastPage)
                        <a href="{{ $direct_team->nextPageUrl() }}" class="button_border_body__yeuoF">Next</a>
                        @else
                        <button disabled class="button_border_body__yeuoF opacity-50 cursor-not-allowed">Next</button>
                        @endif
                </div>

            </div>

        </div>
    </div>
    <!--$--><!--/$--><!--$--><!--/$-->
</main>
</div>
</div>
</div>
<div role="region" aria-label="Notifications (F8)" tabindex="-1"
    style="pointer-events:none">
    <ol tabindex="-1"
        class="fixed top-0 left-1/2 transform -translate-x-1/2 z-[100] flex max-h-screen w-full flex-col p-4 md:max-w-[420px]"></ol>
</div>
<next-route-announcer
    style="position: absolute;"></next-route-announcer>
<div id="l09j5jagelro1759864378112" class="widget-visible">
    <iframe src="about:blank" frameborder="0" scrolling="no"
        width="64px" height="60px"
        style="outline:none !important; visibility:visible !important; resize:none !important; box-shadow:none !important; overflow:visible !important; background:none !important; opacity:1 !important; filter:alpha(opacity=100) !important; -ms-filter:progid:DXImageTransform.Microsoft.Alpha(Opacity 1}) !important; -mz-opacity:1 !important; -khtml-opacity:1 !important; top:auto !important; right:20px !important; bottom:20px !important; left:auto !important; position:fixed !important; border:0 !important; min-height:60px !important; min-width:64px !important; max-height:60px !important; max-width:64px !important; padding:0 !important; margin:0 !important; -moz-transition-property:none !important; -webkit-transition-property:none !important; -o-transition-property:none !important; transition-property:none !important; transform:none !important; -webkit-transform:none !important; -ms-transform:none !important; width:64px !important; height:60px !important; display:block !important; z-index:1000003 !important; background-color:transparent !important; cursor:none !important; float:none !important; border-radius:unset !important; pointer-events:auto !important; clip:auto !important; color-scheme:light !important;"
        id="whl7ouaq2q51759864378140" class
        title="chat widget"></iframe><iframe src="about:blank"
        frameborder="0" scrolling="no" width="350px" height="292px"
        style="outline:none !important; visibility:visible !important; resize:none !important; box-shadow:none !important; overflow:visible !important; background:none !important; opacity:1 !important; filter:alpha(opacity=100) !important; -ms-filter:progid:DXImageTransform.Microsoft.Alpha(Opacity 1}) !important; -mz-opacity:1 !important; -khtml-opacity:1 !important; top:auto !important; right:20px !important; bottom:98px !important; left:auto !important; position:fixed !important; border:0 !important; min-height:292px !important; min-width:350px !important; max-height:292px !important; max-width:350px !important; padding:0 !important; margin:0 !important; -moz-transition-property:none !important; -webkit-transition-property:none !important; -o-transition-property:none !important; transition-property:none !important; transform:none !important; -webkit-transform:none !important; -ms-transform:none !important; width:350px !important; height:292px !important; display:none !important; z-index:1000002 !important; background-color:transparent !important; cursor:none !important; float:none !important; border-radius:18px !important; pointer-events:auto !important; clip:auto !important; color-scheme:light !important;"
        id="luo1evs4aseg1759864378165" class
        title="chat widget"></iframe><!----><iframe src="about:blank"
        frameborder="0" scrolling="no" width="360px" height="145px"
        style="outline:none !important; visibility:visible !important; resize:none !important; box-shadow:none !important; overflow:visible !important; background:none !important; opacity:1 !important; filter:alpha(opacity=100) !important; -ms-filter:progid:DXImageTransform.Microsoft.Alpha(Opacity 1}) !important; -mz-opacity:1 !important; -khtml-opacity:1 !important; top:auto !important; right:20px !important; bottom:90px; left:auto !important; position:fixed !important; border:0 !important; min-height:145px !important; min-width:360px !important; max-height:145px !important; max-width:360px !important; padding:0 !important; margin:0 !important; -moz-transition-property:none !important; -webkit-transition-property:none !important; -o-transition-property:none !important; transition-property:none !important; transform:none !important; -webkit-transform:none !important; -ms-transform:none !important; width:360px !important; height:145px !important; display:none !important; z-index:auto !important; background-color:transparent !important; cursor:none !important; float:none !important; border-radius:unset !important; pointer-events:auto !important; clip:auto !important; color-scheme:light !important;"
        id="avt6pdpifge81759864378151" class
        title="chat widget"></iframe>
    <div id="chat-bubble"></div>
</div>
</body>

</html>