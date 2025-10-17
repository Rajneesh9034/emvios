<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>{{ siteName() }} | Maintenance</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background: linear-gradient(to right, #0f2027, #203a43, #2c5364); color: #fff; height: 100vh; display: flex; align-items: center; justify-content: center; text-align: center;">

  <div style="max-width: 600px; background:#fff; border-radius: 16px; border: 1px solid rgba(255, 255, 255, 0.1); padding: 40px 30px; box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2); backdrop-filter: blur(10px);">
    

    <h1 style="font-size: 36px; margin-bottom: 10px; color: #ffce00;">Dear  {{ $view_message['name'] }},</h1>

    <p style="font-size: 16px; line-height: 1.6; margin-bottom: 20px; color: #000;">
      We hope this message finds you well.<br>
    We would like to inform you that your account has been **temporarily deactivated** due to a settlement issue.
    <br>
    To reactivate your account and continue accessing your income and withdrawals, please **top up your account** at your earliest convenience.
<br>
Kindly note that until reactivation is completed, **all earnings and withdrawal requests will remain on hold**.
<br>
If you have already made a payment or need assistance, feel free to contact our support team.

    </p>
    Thank you for your attention.
<br>

Best regards,  
{{ siteName() }}

    <p style="font-size: 16px; line-height: 1.6; margin-bottom: 20px; color: #000;">
      We appreciate your patience and understanding. <br>
      Please check back shortly or contact our support team at: <br>
      <strong style="color: #ffffff;">info@sparkglobal.ai</strong>
    </p>

    <div style="font-size: 12px; color: #000; margin-top: 30px;">
      &copy; {{ date('Y') }} {{ siteName() }}. All rights reserved.
    </div>
  </div>

</body>
</html>