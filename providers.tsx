"use client";

import { ThemeProvider } from "next-themes";
import { SessionProvider } from "next-auth/react";
import { CalendarProvider } from "./providers/calendarProvider";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <ThemeProvider attribute="class" defaultTheme="dark">
        <CalendarProvider>
          {children}
          </CalendarProvider>
      </ThemeProvider>
    </SessionProvider>
  );
}
