import { Separator } from "../ui/separator";
import MonthSelector from "./monthSelector";
import MonthView from "./monthView";

export default function Calendar() {

  return (
    <div className="flex flex-col w-full gap-4 p-4 rounded-md shadow-md md:w-1/2 bg-bg-100 ring-2 ring-opacity-60 ring-bg-200 shadow-bg-200">
      <header className="flex flex-col items-center justify-between gap-4 md:flex-row md:gap-0">
        <MonthSelector/>
        <div className="flex items-center justify-between gap-2 text-lg font-semibold text-text-100">
          <button className="px-2 rounded-s-md bg-bg-200 ring-2 ring-opacity-60 ring-bg-300 hover:bg-accent-2 hover:ring-accent-1">
            mes
          </button>
          <button className="px-2 bg-bg-200 ring-2 ring-opacity-60 ring-bg-300 hover:bg-accent-2 hover:ring-accent-1">
            semana
          </button>
          <button className="px-2 rounded-e-md bg-bg-200 ring-2 ring-opacity-60 ring-bg-300 hover:bg-accent-2 hover:ring-accent-1">
            dia
          </button>
        </div>
      </header>
      <Separator />
      <MonthView/>
    </div>
  );
}
