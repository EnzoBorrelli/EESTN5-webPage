import React, { createContext, useState, useContext, ReactNode } from 'react';
import dayjs from 'dayjs';

// Define the context value type
interface CalendarContextType {
  displayMonth: number;
  displayYear: number;
  handleNextMonth: () => void;
  handlePreviousMonth: () => void;
  setDisplayMonth: React.Dispatch<React.SetStateAction<number>>;
  setDisplayYear: React.Dispatch<React.SetStateAction<number>>;
}

// Create the context
const CalendarContext = createContext<CalendarContextType | undefined>(undefined);

// Create a provider component
export const CalendarProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [displayMonth, setDisplayMonth] = useState<number>(dayjs().month());
  const [displayYear, setDisplayYear] = useState<number>(dayjs().year());

  const handleNextMonth = () => {
    const currentMonthIndex = displayMonth;
    
    if (currentMonthIndex === 11) { // December
      setDisplayMonth(0); // January
      setDisplayYear(displayYear + 1);
    } else {
      setDisplayMonth(currentMonthIndex + 1);
    }
  };

  const handlePreviousMonth = () => {
    const currentMonthIndex = displayMonth;

    if (currentMonthIndex === 0) { // January
      setDisplayMonth(11); // December
      setDisplayYear(displayYear - 1);
    } else {
      setDisplayMonth(currentMonthIndex - 1);
    }
  };

  return (
    <CalendarContext.Provider 
      value={{ 
        displayMonth, 
        displayYear, 
        handleNextMonth, 
        handlePreviousMonth, 
        setDisplayMonth, 
        setDisplayYear 
      }}
    >
      {children}
    </CalendarContext.Provider>
  );
};

// Custom hook to use the context
export const useCalendar = (): CalendarContextType => {
  const context = useContext(CalendarContext);
  if (context === undefined) {
    throw new Error('useCalendar must be used within a CalendarProvider');
  }
  return context;
};
