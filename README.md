# عمار حلب | یادمان شهید محمد خانی

وب‌سایت فارسی راست‌چین با صفحهٔ اصلی، بخش مهمان و پنل ادمین.

## فایل‌ها
- `index.html` صفحهٔ اصلی
- `guest.html` نمایش محتوا، نظر و قلب
- `admin.html` ورود ادمین، انتشار و حذف محتوا، اعلان‌های زنده
- `style.css` طراحی واکنش‌گرا
- `supabase-config.js` تنظیم اتصال سرور
- `supabase_setup.sql` ساخت جداول و سیاست‌های دسترسی

## راه‌اندازی سرور Supabase
1. یک پروژه در Supabase بساز.
2. محتوای `supabase_setup.sql` را در SQL Editor اجرا کن.
3. در Authentication > Users کاربر ادمین بساز.
4. UUID کاربر ادمین را در دستور کامنت‌شدهٔ انتهای SQL جایگزین کن و آن دستور را اجرا کن.
5. در تنظیمات Authentication، ورود Anonymous را فعال کن تا مهمان‌ها بتوانند نظر و قلب ثبت کنند.
6. در `supabase-config.js` مقادیر `YOUR_SUPABASE_URL` و `YOUR_SUPABASE_ANON_KEY` را با Project URL و anon/publishable key پروژه جایگزین کن. **هرگز service_role key را در فایل‌های سمت مرورگر قرار نده.**

## فعال‌سازی GitHub Pages
در مخزن GitHub به Settings → Pages برو، در بخش Build and deployment گزینهٔ **Deploy from a branch** را انتخاب کن، شاخهٔ `main` و پوشهٔ `/(root)` را انتخاب و Save کن. بعد از انتشار، نشانی سایت در همان صفحه نمایش داده می‌شود.

## وضعیت
صفحات و فایل‌های سایت در این مخزن بارگذاری شده‌اند. قابلیت‌های نظر، قلب، آپلود و ورود ادمین تا زمان تنظیم Supabase فعال نمی‌شوند.
