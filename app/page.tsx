export default function Page() {
  return (
    <main
      dir="rtl"
      className="flex min-h-screen items-center justify-center bg-slate-100 p-4 sm:p-6 lg:p-8"
    >
      <section className="w-full max-w-2xl rounded-2xl border border-blue-200 bg-blue-50 p-6 shadow-lg sm:p-8 lg:p-10">
        <h1 className="mb-4 text-center text-3xl font-bold italic text-blue-900 sm:text-4xl lg:text-5xl">
          متن منتخب :
        </h1>

        <p className="text-justify text-base leading-8 text-slate-700 sm:text-lg sm:leading-9">
          این یک متن نمونه برای پاراگراف است. می‌توانید متن دلخواه خود را
          جایگزین کنید. این بخش در مرکز صفحه نمایش داده می‌شود و اندازه و
          فاصله‌های آن با صفحه‌نمایش موبایل، تبلت و دسکتاپ هماهنگ می‌شود.
        </p>
      </section>
    </main>
  );
}