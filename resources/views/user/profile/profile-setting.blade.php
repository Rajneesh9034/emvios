<main>
    <div class="main_auth _container" style="max-width: 1200px;">
        <div class="breadcrumbAuth_breadcrumb__Log0f">
            <nav aria-label="breadcrumb">
                <ol
                    class="flex flex-wrap items-center gap-1.5 break-words text-sm sm:gap-2.5 justify-center">
                    <li class="inline-flex items-center gap-1.5"><span
                            class="transition-colors hover:text-foreground"><a href>Personal
                                account</a></span></li><span class="flex gap-1.5 items-center">
                        <li role="presentation" aria-hidden="true" class="[&amp;&gt;svg]:size-3.5"><svg
                                xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round"
                                class="lucide lucide-chevron-right">
                                <path d="m9 18 6-6-6-6"></path>
                            </svg></li>
                        <li class="inline-flex items-center gap-1.5">
                            <div class="font-[400] text-[#000]"><span role="link" aria-disabled="true"
                                    aria-current="page"
                                    class="flex gap-[4px] items-center capitalize">Profile</span></div>
                        </li>
                    </span>
                </ol>
            </nav>
        </div>
        <h2 class="text-[16px] uppercase text-[#828282] font-[400]">Personal
            information</h2>
        <div class="profile_personal__2Vxjh">
            <div
                class="flex flex-col  items-center self-stretch  overflow-hidden gap-[32px] px-[32px] py-[24px] rounded-[6px]  border border-solid border-[#e6e6e6] bg-white">
                <div class="w-full aspect-square max-w-[317px] "><img alt="icon" loading="lazy" id="profile-pic"
                        width="0" height="0" decoding="async" data-nimg="1" sizes="100vw"
                        src="{{asset('')}}main/assets/_next/logo/person.webp"
                        style="color: transparent; width: 100%; object-fit: cover; height: auto;"></div>
                <div class="flex justify-between gap-[24px] self-stretch  ">
                    <div
                        class="flex cursor-pointer  items-center flex-grow gap-[16px] px-[16px] h-[42px] rounded-[6px]  border border-solid border-[#e6e6e6] relative ">
                        <img alt="icon" loading="lazy" width="24" height="24" decoding="async"
                            data-nimg="1" class="cursor-pointer"
                            src="{{asset('')}}upnl/_next/static/media/upload.f509e404.svg"
                            style="color: transparent;">
                        <input accept="image/*" id="file-input"
                            class="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                            type="file">
                        <p class="text-[14px] cursor-pointer">Upload</p>
                    </div>
                    <div
                        class="flex cursor-pointer items-center flex-grow gap-[16px] px-[16px] h-[42px] rounded-[6px]  border border-solid border-[#e6e6e6]">
                        <img alt="icon" loading="lazy" width="24" height="24" decoding="async"
                            data-nimg="1" src="{{asset('')}}upnl/_next/static/media/trash.dd54dc69.svg"
                            style="color: transparent;">
                        <p class="text-[14px]" id="remove-btn">Remove</p>
                    </div>
                </div>
            </div>
            <form action="{{route('user.update-profile')}}" method="POST"
                class="flex flex-col justify-center items-center self-stretch flex-grow overflow-hidden gap-[40px] p-[32px] rounded-[6px]  border border-solid border-[#e6e6e6] relative bg-white">

                @csrf
                <div class="flex flex-col   self-stretch   gap-[24px] ">

                    <div class="flex  items-center self-stretch flex-wrap  gap-[24px]">
                        <div class="profile_input__6BeVZ">
                            <p class="text-[14px] font-[400]">
                                Username</p>
                            <div
                                class="w-full rounded-[6px] border-[1px] border-solid border-[#cecece]">
                                <input
                                    class="flex h-[40px] w-full border-none rounded-[6px] bg-background px-3 py-2 text-[14px] ring-offset-background file:border-0 file:bg-transparent file:text-[14px] file:font-medium placeholder:text-[#9c9c9c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00b2c8] disabled:cursor-not-allowed disabled:opacity-50"
                                    placeholder="Test Name" name="" maxlength="40" type="text" readonly value="{{ $profile_data->username ?? '' }}">
                            </div>
                        </div>
                        <div class="profile_input__6BeVZ">
                            <p class="text-[14px] font-[400]">
                                Full Name</p>
                            <div
                                class="w-full rounded-[6px] border-[1px] border-solid border-[#cecece]">
                                <input
                                    class="flex h-[40px] w-full border-none rounded-[6px] bg-background px-3 py-2 text-[14px] ring-offset-background file:border-0 file:bg-transparent file:text-[14px] file:font-medium placeholder:text-[#9c9c9c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00b2c8] disabled:cursor-not-allowed disabled:opacity-50"
                                    maxlength="40" name="name" type="text" value="{{ $profile_data->name ?? '' }}">
                            </div>
                        </div>
                    </div>
                    <div class="flex  items-center self-stretch flex-wrap  gap-[24px]">
                        <div class="profile_input__6BeVZ">
                            <p class="text-[14px] font-[400]">
                                Email</p>
                            <div
                                class="w-full rounded-[6px] border-[1px] border-solid border-[#cecece]">
                                <input
                                    class="flex h-[40px] w-full border-none rounded-[6px] bg-background px-3 py-2 text-[14px] ring-offset-background file:border-0 file:bg-transparent file:text-[14px] file:font-medium placeholder:text-[#9c9c9c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00b2c8] disabled:cursor-not-allowed disabled:opacity-50"
                                    placeholder="Test Name" name="email" maxlength="40" type="email" value="{{ $profile_data->email ?? '' }}">
                            </div>
                        </div>
                        <div class="profile_input__6BeVZ">
                            <p class="text-[14px] font-[400]">Phone
                                number</p>
                            <div
                                class="w-full rounded-[6px] border-[1px] border-solid border-[#cecece]">
                                <div
                                    class="flex h-[40px] w-full border-none rounded-[6px] bg-background px-3 py-2 text-[14px] ring-offset-background file:border-0 file:bg-transparent file:text-[14px] file:font-medium placeholder:text-[#9c9c9c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00b2c8] disabled:cursor-not-allowed disabled:opacity-50 PhoneInput">
                                    <div class="PhoneInputCountry">



                                    </div><input autocomplete="" type="number" class="PhoneInputInput" name="phone"
                                        value="{{ $profile_data->phone ?? '' }}">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex  items-center self-stretch   gap-[24px]">
                        <div class="profile_input__6BeVZ">
                            <p class="text-[14px] font-[400]">
                                City</p>
                            <div
                                class="w-full rounded-[6px] border-[1px] border-solid border-[#cecece]">
                                <input
                                    class="flex h-[40px] w-full border-none rounded-[6px] bg-background px-3 py-2 text-[14px] ring-offset-background file:border-0 file:bg-transparent file:text-[14px] file:font-medium placeholder:text-[#9c9c9c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00b2c8] disabled:cursor-not-allowed disabled:opacity-50"
                                    maxlength="40" name="city" type="text" value="{{ $profile_data->city ?? '' }}">
                            </div>
                        </div>

                        <div class="profile_input__6BeVZ">
                            <p class="text-[14px] font-[400]">Zip Code</p>
                            <div
                                class="w-full rounded-[6px] border-[1px] border-solid border-[#cecece]">
                                <input
                                    class="flex h-[40px] w-full border-none rounded-[6px] bg-background px-3 py-2 text-[14px] ring-offset-background file:border-0 file:bg-transparent file:text-[14px] file:font-medium placeholder:text-[#9c9c9c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00b2c8] disabled:cursor-not-allowed disabled:opacity-50"
                                    maxlength="30" placeholder="" type="text" value="{{ $profile_data->zipCode ?? '' }}" name="zipCode">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex gap-[24px] items-center justify-center flex-1 ">
                    <div class="profile_button_border__bfDtE">
                        <p>Cancel</p>
                    </div>
                    <div class="profile_button_personal__MCQ58"><button type="submit"
                            class="button_blue_body__xatTr">
                            <p>Save
                                changes</p>
                        </button></div>
                </div>
            </form>
        </div>
        <h2 class="text-[16px] uppercase text-[#828282] font-[400]">Security
            settings</h2>
        <div class="profile_cards__Cm_bm">
            <div
                class="flex flex-col justify-between items-center self-stretch flex-grow  overflow-hidden gap-[16px] p-[30px] rounded-[6px]  border border-solid border-[#e6e6e6] bg-white">
                <img alt="icon" loading="lazy" width="61" height="60" decoding="async" data-nimg="1"
                    src="{{asset('')}}upnl/_next/static/media/key.06c80884.svg" style="color: transparent;">
                <p class="  text-[16px] font-[400]  ">Change
                    password</p>
                <p class="self-stretch    text-[12px]  text-center ">Use
                    a unique password to protect your
                    account</p><a class="profile_button__ckMMu"
                    href="{{route('user.ChangePass')}}"><button type="submit"
                        class="button_blue_body__xatTr">
                        <p>Change</p>
                    </button></a>
            </div>
            <!-- <div
                class="flex flex-col justify-between items-center self-stretch flex-grow  overflow-hidden gap-[16px] p-[30px] rounded-[6px]  border border-solid border-[#e6e6e6] bg-white">
                <img alt="icon" loading="lazy" width="60" height="60" decoding="async" data-nimg="1"
                    src="{{asset('')}}upnl/_next/static/media/shield_security.4144277a.svg" style="color: transparent;">
                <p class="  text-[16px] font-[400]  ">2FA
                    Authentication</p>
                <p class="self-stretch    text-[12px]  text-center ">An
                    additional layer to protect your account
                    and funds</p><a class="profile_button__ckMMu"
                    href="/en/profile/authentication"><button type="submit"
                        class="button_blue_body__xatTr">
                        <p>Enable
                            2FA</p>
                    </button></a>
            </div> -->
            <!-- <div
                class="flex flex-col justify-between items-center self-stretch flex-grow  overflow-hidden gap-[16px] p-[30px] rounded-[6px]  border border-solid border-[#e6e6e6] bg-white">
                <img alt="icon" loading="lazy" width="61" height="60" decoding="async" data-nimg="1"
                    src="{{asset('')}}upnl/_next/static/media/lock.9671e0b7.svg" style="color: transparent;">
                <p class="  text-[16px] font-[400]  ">PIN
                    Code</p>
                <p class="self-stretch    text-[12px]  text-center ">Create
                    a four-digit PIN code that will be
                    requested when withdrawing funds</p><a class="profile_button__ckMMu"
                    href="/en/profile/pincode"><button type="submit" class="button_blue_body__xatTr">
                        <p>Enable
                            PIN
                            Code</p>
                    </button></a>
            </div> -->
        </div>
        <!-- <h2 class="text-[16px] uppercase text-[#828282] font-[400]">Notifications</h2>
        <div class="profile_cards__Cm_bm">
            <div
                class=" flex flex-col justify-between items-center self-stretch flex-grow  overflow-hidden gap-[16px] p-[30px] rounded-[6px]  border border-solid border-[#e6e6e6] bg-white">
                <img alt="icon" loading="lazy" width="60" height="60" decoding="async" data-nimg="1"
                    src="{{asset('')}}upnl/_next/static/media/notification_bing.729bb919.svg"
                    style="color: transparent;">
                <p class="  text-[16px] font-[400]  ">Notifications</p>
                <p class="self-stretch    text-[12px]  text-center ">Notifications
                    about the status of your investment
                    offers, replenishments, withdrawals, and
                    other important events</p><a class="profile_button__ckMMu"
                    href="/en/profile/notifications"><button type="submit"
                        class="button_blue_body__xatTr">
                        <p>Configure</p>
                    </button></a>
            </div>
        </div> -->
    </div>
</main>
</div>
</div>
</div>
<div role="region" aria-label="Notifications (F8)" tabindex="-1" style="pointer-events:none">
    <ol tabindex="-1"
        class="fixed top-0 left-1/2 transform -translate-x-1/2 z-[100] flex max-h-screen w-full flex-col p-4 md:max-w-[420px]">
    </ol>
</div>

</div>


<script>
    const fileInput = document.getElementById('file-input');
    const profilePic = document.getElementById('profile-pic');
    const removeBtn = document.getElementById('remove-btn');

    const defaultSrc = "{{ asset('') }}main/assets/_next/logo/person.webp";

    function loadSavedImage() {
        const savedImage = localStorage.getItem('profileImage');
        if (savedImage) {
            profilePic.src = savedImage;
            removeBtn.style.display = 'block';
        } else {
            profilePic.src = defaultSrc;
            removeBtn.style.display = 'none';
        }
    }

    loadSavedImage();

    fileInput.addEventListener('change', function() {
        const file = this.files[0];
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const base64Image = e.target.result;

                localStorage.removeItem('profileImage');

                localStorage.setItem('profileImage', base64Image);

                profilePic.src = base64Image;
                removeBtn.style.display = 'block';
            };
            reader.readAsDataURL(file);
        } else {
            alert('Please select a valid image file.');
        }
    });

    removeBtn.addEventListener('click', function() {
        localStorage.removeItem('profileImage');
        profilePic.src = defaultSrc;
        removeBtn.style.display = 'none';
        fileInput.value = '';
    });
</script>


</body>

</html>