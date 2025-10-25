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

            <form action="{{route('user.update-wallet')}}"  method="POST">
                @csrf
                <input type="hidden" name="currency" id="networkInput" value="{{ $selectedNetwork ?? 'BSC' }}">

                <div class="flex-grow self-stretch relative">
                    <div class="withdrawal_body__kspWM">
                        <div class="flex flex-col gap-[24px] w-full">
                            <p >Add new wallet
</p>
                            <div class="withdrawal_list__DCNgj">
                                
                             <p class="text-[14px]">  Carefully check your new wallet details before adding to your personal account</p>
                            </div>
                            <!-- <div class="withdrawal_list__DCNgj">
                                <div class="flex items-center gap-[16px] px-[16px] py-[8px]">
                                    <input type="radio" name="payment" value="1" class="custom-radio mb-[8px]">

                                    <p class="text-[14px] mt-[4px]">Swap USDT Wallet</p>
                                </div>
                                <div class="flex items-center gap-[16px] px-[16px] py-[8px]">
                                    <input type="radio" name="payment" value="2" class="custom-radio mb-[8px]">

                                    <p class="text-[14px] mt-[4px]">Swap Wallet</p>

                                </div>

                            </div> -->
                        </div>

                        <div class="flex self-stretch gap-[20px]">
                            <div class="flex flex-col flex-grow gap-[22px]">
                                <div class="flex flex-col self-stretch gap-[16px]">
                                    <div class="flex justify-between items-center self-stretch">
                                        <p class="text-[14px]">USDT BEP20 address</p>
                                    </div>
                                    <div class="flex flex-col justify-center min-h-[40px] items-center self-stretch gap-[8px] px-[16px] py-[8px] rounded-[6px] bg-neutral-50 border-[1px] border-solid border-[#cecece]">
                                        <input id="walletAddress"
                                            class="text-[14px] text-[#8a8181] bg-transparent w-full"
                                           name="usdtBep20" maxlength="255" value="{{ $profile_data ? $profile_data->usdtBep20 : '' }}"
                                            placeholder="Enter wallet address for withdrawal (only USDT)"
                                            type="text"
                                           >
                                    </div>
                                </div>

                                <!-- ✅ Wallet address -->
                                <!-- ✅ Wallet Address Input -->
                                <div class="flex flex-col self-stretch gap-[16px]">
                                    <div class="flex justify-between items-center self-stretch">
                                        <p class="text-[14px]">USDT TRC20 address</p>
                                    </div>
                                    <div class="flex flex-col justify-center min-h-[40px] items-center self-stretch gap-[8px] px-[16px] py-[8px] rounded-[6px] bg-neutral-50 border-[1px] border-solid border-[#cecece]">
                                        <input id="walletAddress"
                                            class="text-[14px] text-[#8a8181] bg-transparent w-full"
                                             name="usdtTrc20" maxlength="255"
                                                                value="{{ $profile_data ? $profile_data->usdtTrc20 : '' }}"
                                            placeholder="Enter wallet address for withdrawal (only USDT)"
                                            type="text"
                                            >
                                    </div>
                                </div>

                                <!-- Hidden data from backend -->

                            </div>
                        </div>

                        <p class="text-[#ff0000] text-center"></p>

                        <div class="withdrawal_buttons__vgBBe">
                            <button type="submit" class="button_blue_body__xatTr">
                                <p>Submit</p>
                            </button>
                        </div>
                    </div>
                </div>
            </form>

@if (session('WalletCode'))
    <div class="modal-backdrop fade fixed inset-0  bg-opacity-2 z-2"  style=" background: rgba(0,0,0,0.4);  transition: opacity 0.3s ease;"></div>
@endif

<!-- Verification Code Modal -->
<div class="modals">
    <div id="walletVerificationModal" class="fixed inset-0 z-50 flex items-center justify-center p-4 @if(!session('WalletCode')) hidden @endif">
        <div class="bg-white rounded-[6px] shadow-md w-full max-w-lg p-6 relative">
            <!-- Close button -->
            <button type="button" id="closeWalletModal" class="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl font-bold">&times;</button>

            <!-- Title -->
            <h2 class="text-[#00b2c8] font-semibold text-lg mb-4 text-center">Verification Required</h2>

            <p class="text-gray-600 text-sm mb-6 text-center">
                A verification code has been sent to your registered email address. <br>
                Please enter it below to confirm your wallet.
            </p>

            <!-- Verification Form -->
            <form action="{{ route('user.wallet_change') }}" method="POST" class="flex flex-col gap-4">
                @csrf
                <div class="flex flex-col gap-1">
                    <label for="code" class="text-sm text-gray-700">Verification Code <span class="text-purple-600">*</span></label>
                                                        <div class="flex flex-col justify-center min-h-[40px] items-center self-stretch gap-[8px] px-[16px] py-[8px] rounded-[6px] bg-neutral-50 border-[1px] border-solid border-[#cecece]">

                    <input type="text" name="code" id="code" placeholder="Enter code from email" required
      class="text-[14px] text-[#8a8181] bg-transparent w-full">

                </div>
                </div>

                <button type="submit"
                    class="bg-[#00b2c8] hover:bg-[#0091a3] text-white px-4 py-2 rounded-[6px] transition-all duration-200">
                    Confirm
                </button>
            </form>
        </div>
    </div>
</div>

<script>
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('walletVerificationModal');
  const closeBtn = document.getElementById('closeWalletModal');

  closeBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
    document.querySelector('.modal-backdrop')?.remove();
  });

  modal.addEventListener('click', (e) => {
    if (e.target.id === 'walletVerificationModal') {
      modal.classList.add('hidden');
      document.querySelector('.modal-backdrop')?.remove();
    }
  });
});
</script>



        </div>
    </div>
</main>


</div>
</div>
</div>
<div role="region" aria-label="Notifications (F8)" tabindex="-1" style="pointer-events:none">
    <ol tabindex="-1" class="fixed top-0 left-1/2 transform -translate-x-1/2 z-[100] flex max-h-screen w-full flex-col p-4 md:max-w-[420px]"></ol>
</div>

<style>
    /* Hide the default radio */
    .custom-radio {
        appearance: none;
        -webkit-appearance: none;
        width: 18px;
        height: 18px;
        border: 2px solid #00b2c8;
        /* sky blue border */
        border-radius: 50%;
        position: relative;
        cursor: pointer;
        transition: all 0.2s ease;
    }

    /* Inner filled circle (when checked) */
    .custom-radio:checked::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        width: 9px;
        height: 9px;
        background: #00b2c8;
        border-radius: 50%;
        transform: translate(-50%, -50%);
    }

    /* Optional hover effect */
    .custom-radio:hover {
        box-shadow: 0 0 0 3px rgba(0, 178, 200, 0.2);
    }
</style>
</body>
<script>
    document.addEventListener("DOMContentLoaded", function() {
        const btn = document.getElementById("networkDropdownBtn");
        const dropdown = document.getElementById("networkDropdown");
        const arrow = document.getElementById("dropdownArrow");
        const items = dropdown.querySelectorAll("li");
        const selected = document.getElementById("selectedNetwork");
        const walletInput = document.getElementById("walletAddress");

        // hidden input values
        const bscAddress = document.getElementById("bscAddress").value;
        const tronAddress = document.getElementById("tronAddress").value;

        // Default load BSC
        walletInput.value = bscAddress;

        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
            arrow.classList.toggle("open");
        });

        items.forEach(item => {
            item.addEventListener("click", () => {
                const selectedNetwork = item.getAttribute("data-value");
                selected.textContent = selectedNetwork;
                dropdown.style.display = "none";
                arrow.classList.remove("open");

                // ✅ Fetch address according to selected network
                if (selectedNetwork === "BSC") {
                    walletInput.value = bscAddress;
                } else if (selectedNetwork === "Tron") {
                    walletInput.value = tronAddress;
                }
            });
        });

        document.addEventListener("click", () => {
            dropdown.style.display = "none";
            arrow.classList.remove("open");
        });
    });
</script>

</html>