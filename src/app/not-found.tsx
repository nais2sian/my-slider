import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <span className="mb-2 text-[72px] font-bold text-accent">404</span>
      <h1 className="mb-2 text-2xl font-pp">Страница не найдена</h1>
      <p className="mb-4">
        К сожалению, такой страницы не существует или она ещё в разработке.
      </p>
      <Link href="/" className="underline text-accent">
        Вернуться на главную
      </Link>
    </div>
  );
}
