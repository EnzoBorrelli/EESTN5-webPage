import Link from "next/link";
import { Separator } from "../ui/separator";
import MonthSelector from "./monthSelector";
import MonthView from "./monthView";
import ToRemindersBtn from "./toRemindersBtn";

export default function Calendar() {
  return (
    <div className="flex flex-col w-full gap-4 p-4 rounded-md shadow-md md:w-1/2 bg-bg-100 dark:bg-bg-600 dark:ring-bg-500 dark:shadow-bg-500 ring-2 ring-opacity-60 ring-bg-200 shadow-bg-200">
      <header className="flex flex-col items-center justify-between gap-4 md:flex-row md:gap-0">
        <MonthSelector />
        <div className="flex items-center justify-between gap-2 text-lg font-semibold text-text-600 dark:text-text-100">
          <ToRemindersBtn/>
        </div>
      </header>
      <Separator />
      <MonthView />
    </div>
  );
}
