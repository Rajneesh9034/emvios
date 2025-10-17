<!-- <div class="container-fluid main-content px-2 px-lg-4">

    <div class="row my-2 g-3 g-lg-4 pb-3  ">
        <div class="col-12">
            <div class="mainchart px-3 px-md-4 py-3 py-lg-4">
                <div class="activity">
                    <div class="row g-3">
                        <div class="col-md-6">
                            <h5 class="mb-0">Activities Bonus</h5>
                        </div>

                        <div class="tab-content" id="pills-tabContent2">
                            
                            <div class="tab-pane fade show active" id="price" role="tabpanel" tabindex="0">
                                <div class="recent-contact pb-2 pt-3">
                                    
                                         <form action="" method="GET" style="    width: 100%;">
                                        <div class="row">
                                            <div class="col-xl-4">
                                                <div class="form-group mb-3">
                                                    <input type="text" style="" Placeholder="Search Users"
                                                        name="search" class="form-control" value="{{ @$search }}">
                                                </div>
                                            </div>
                
                
                                            <div class="col-xl-2">
                                                <div class="form-group mb-3">
                                                    <select name="limit" style="" class="form-control">
                                                        <option value="10">10</option>
                                                        <option value="25">25</option>
                                                        <option value="50">50</option>
                                                        <option value="100">100</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-3">
                                                <div class="form-group mb-3">
                                                    <input type="submit" style="font-size: 12px; padding-left: 18px;" name="submit"
                                                        class="btn btn-outline-theme btn-lg d-block w-100 btn-primary"
                                                        value="Search" />
                                                </div>
                                            </div>
                                            <div class="col-3">
                                                <div class="form-group mb-3">
                                                    <a href="" style="font-size: 12px; padding-left: 18px;"
                                                        name="reset"
                                                        class="btn btn-outline-theme btn-lg d-block w-100 btn-primary"
                                                        value="Reset">Reset</a>
                                                </div>
                                            </div>
                
                
                                        </div>
                                    </form>
                                    
                                    
                                    <table  id="example" class="display"  >
                                    <thead>
                                    <tr>
                                        <th>Sr No</th>
                                 
                                    
                                      <th>Amount</th>
                        
                                      <th>Date</th>


                                     
                              
                                      <th>Remarks </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <?php if(is_array($level_income) || is_object($level_income)){ ?>

                                        <?php $cnt = $level_income->perPage() * ($level_income->currentPage() - 1); ?>
                                        @foreach ($level_income as $value)
                                            <tr>
                                                <td><?= $cnt += 1 ?></td>
    
    
                                      
                              
                                           
                                                <td>{{currency()}} {{ $value->comm }}</td>
                                                <td>{{date("D, d M Y", strtotime($value->created_at)) }} </td>
                                                
    
                                                <td>{{ $value->remarks }}</td>
    
                                            </tr>
                                        @endforeach
    
                                        <?php }?>
    
                                </tbody>
                                    </table>
                                    <br>

                  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
 -->



 
 
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
            
            <div class="w-full rounded-[6px] border border-solid border-[#e6e6e6] overflow-x-auto">
                  <div
            class="flex overflow-hidden border border-solid rounded-[6px] border-[#e6e6e6]  h-[40px]">
            <!-- <a class="statistics_plan__DBm_J " href="javascript:void(0)">All</a> -->
            <a class="statistics_plan__DBm_J " href="{{route('user.fundHistory')}}">Fundings</a>
            <a class="statistics_plan__DBm_J " href="{{route('user.DepositHistory')}}">Investment</a>
            <a class="statistics_plan__DBm_J " href="{{route('user.Withdraw-History')}}">Withdraw</a>
            <a class="statistics_plan__DBm_J statistics_active__Rws_8" href="{{route('user.bonus')}}">Bonuses</a>
        </div>
                <table class="min-w-full border-collapse text-[12px]">
                    <thead>
                        <tr class="bg-[#f3fbfc] border-b border-[#e6e6e6] text-left">
                            <th class="px-[32px] py-[24px] bold">Date</th>
                            <th class="px-[32px] py-[24px] bold">Remark</th>
                            <th class="px-[32px] py-[24px] bold">Order Id</th>
                            <th class="px-[32px] py-[24px] bold">Amount</th>
                            <!-- <th class="px-[32px] py-[24px] bold">Transaction Id </th>
                            <th class="px-[32px] py-[24px] bold">Status</th> -->
                        </tr>
                    </thead>
                    <tbody>
                        @forelse ($level_income as $value)
                        <tr class="border-b border-[#e6e6e6] hover:bg-[#f9f9f9]">
                            <td class="px-[32px] py-[24px]">{{ $value->ttime ?? '-' }}</td>
                            <td class="px-[32px] py-[24px]">{{ $value->remarks ?? '-' }}</td>
                            <td class="px-[32px] py-[24px]">{{ $value->orderId ?? '-' }}</td>
                            <td class="px-[32px] py-[24px]">{{ $value->comm ?? '-' }}</td>
                            <!-- <td class="px-[32px] py-[24px]">{{ $value->txn_no ?? '-' }}</td>
                            <td class="px-[32px] py-[24px]">{{ $value->status ?? '-' }}</td> -->

                       
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

</html>

