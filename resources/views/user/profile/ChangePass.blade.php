<main>
	<div class="main_auth _container" style="max-width:1200px">
		<div class="breadcrumbAuth_breadcrumb__Log0f">
			<nav aria-label="breadcrumb">
				<ol class="flex flex-wrap items-center gap-1.5 break-words text-sm sm:gap-2.5 justify-center">
					<li class="inline-flex items-center gap-1.5"><span class="transition-colors hover:text-foreground"><a href="">Personal account</a></span></li><span class="flex gap-1.5 items-center">
						<li role="presentation" aria-hidden="true" class="[&amp;&gt;svg]:size-3.5"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right">
								<path d="m9 18 6-6-6-6"></path>
							</svg></li>
						<li class="inline-flex items-center gap-1.5"><span class="transition-colors hover:text-foreground"><a class="capitalize" href="/en/profile">Profile</a></span></li>
					</span><span class="flex gap-1.5 items-center">
						<li role="presentation" aria-hidden="true" class="[&amp;&gt;svg]:size-3.5"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right">
								<path d="m9 18 6-6-6-6"></path>
							</svg></li>
						<li class="inline-flex items-center gap-1.5">
							<div class="font-[400] text-[#000]"><span role="link" aria-disabled="true" aria-current="page" class="flex gap-[4px] items-center capitalize">Change password</span></div>
						</li>
					</span>
				</ol>
			</nav>
		</div>
		<form class="changepassword_top__52RrW" action="{{route('user.edit-password')}}"  method="POST">
			@csrf

			
			<div class="flex flex-col  items-center flex-grow  gap-[20px]"><img alt="icon" loading="lazy" width="61" height="60" decoding="async" data-nimg="1" src="{{asset('')}}upnl/_next/static/media/key.06c80884.svg" style="color: transparent;">
				<div class="flex flex-col  items-center self-stretch">
					<p class="self-stretch text-[16px] text-center">Change your password</p>
					<p class="self-stretch text-[14px]  text-center">Use a unique password to protect your account</p>
				</div>
				<div class="flex flex-col self-stretch   gap-[24px]">
					<div class="flex self-stretch gap-[24px]">
						<div class="changepassword_input__1DGjp">
							<p class="text-[14px] font-[400]">New password</p>
							<div class="w-full rounded-[6px] border-[1px] border-solid border-[#cecece]"><input class="flex h-[40px] w-full border-none rounded-[6px] bg-background px-3 py-2 text-[14px] ring-offset-background file:border-0 file:bg-transparent file:text-[14px] file:font-medium placeholder:text-[#9c9c9c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00b2c8] disabled:cursor-not-allowed disabled:opacity-50"
									 required="" name="password" type="password" value=""></div>
						</div>
						<div class="changepassword_input__1DGjp">
							<p class="text-[14px] font-[400]">Repeat new password</p>
							<div class="w-full rounded-[6px] border-[1px] border-solid border-[#cecece]"><input class="flex h-[40px] w-full border-none rounded-[6px] bg-background px-3 py-2 text-[14px] ring-offset-background file:border-0 file:bg-transparent file:text-[14px] file:font-medium placeholder:text-[#9c9c9c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00b2c8] disabled:cursor-not-allowed disabled:opacity-50"
									required="" type="password" name="password_confirmation" value=""></div>
						</div>
					</div>
					<input type="hidden" name="email" value="{{Auth::user()->email}}">
					<div class="changepassword_input__1DGjp relative pb-7">
						<p class="text-[14px] font-[400]">Current Password</p>
						<div class="w-full flex items-center rounded-[6px] border-[1px] border-solid border-[#cecece] overflow-hidden">
							<input
								class="flex-grow h-[40px] border-none bg-background px-3 py-2 text-[14px] ring-offset-background file:border-0 file:bg-transparent file:text-[14px] file:font-medium placeholder:text-[#9c9c9c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00b2c8] disabled:cursor-not-allowed disabled:opacity-50"
								required name="old_password"
								type="password"
								>
							<!-- <button
								type="submit" id="sendOtpBtn" 
								class="h-[40px] px-4 bg-[#00b2c8] text-white text-sm font-medium hover:bg-[#0096aa] transition-colors">
								Send
							</button> -->
						</div>

					</div>
				</div>
			<div class="changepassword_button_personal__wYIW9"><button type="submit" class="button_blue_body__xatTr"><p>Change</p></button></div>
			</div>
			<div class="flex flex-col justify-center  self-stretch flex-grow  gap-[16px] p-[16px] rounded-[6px]  border border-solid border-[#e6e6e6]">
				<h3 class="  text-[14px]  text-black">Additional information</h3>
				<p class="self-stretch text-[12px]">Creating a strong and secure password is crucial for protecting your account and funds. Here are some tips</p>
				<ul class="changepassword_ul__9HGoD">
					<li class="self-stretch text-[12px]">Use a Mix of Characters Include uppercase letters, lowercase letters, numbers, and special characters (e.g., !, @, #, $)</li>
					<li class="self-stretch text-[12px]">Avoid Common Words: Don't use easily guessable words or phrases like 'password' or '123456'.</li>
					<li class="self-stretch text-[12px]">Aim for at least 12-16 characters.</li>
					<li class="self-stretch text-[12px]">Don't use easily accessible information like your name, birthdate, or address.</li>
					<li class="self-stretch text-[12px]">Use a different password for each of your accounts.</li>
					<li class="self-stretch text-[12px]">Password Manager: Use a password manager to generate and store complex passwords.</li>
				</ul>
			</div>
		</form>

	</div>
</main>
</div>
</div>
</div>
<div role="region" aria-label="Notifications (F8)" tabindex="-1" style="pointer-events:none">
	<ol tabindex="-1" class="fixed top-0 left-1/2 transform -translate-x-1/2 z-[100] flex max-h-screen w-full flex-col p-4 md:max-w-[420px]"></ol>
</div>




</body>

</html>