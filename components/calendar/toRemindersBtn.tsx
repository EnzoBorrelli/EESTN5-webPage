import Link from "next/link";

export default function ToRemindersBtn() {
  return (
    <Link
      className="px-2 bg-bg-200 rounded-md ring-2 ring-opacity-60 ring-bg-300 dark:bg-bg-500 dark:ring-bg-400 dark:shadow-bg-400 hover:bg-blue-400 hover:ring-blue-600 dark:hover:bg-amber-600 dark:hover:ring-amber-400"
      href="/recordatorios"
    >
      mis recordatorios
    </Link>
  );
}
