"use client";
import { ThemeProvider } from "next-themes";
import React, { useEffect, useState } from "react";
import { type ThemeProviderProps } from "next-themes/dist/types"

const Provider: React.FC<ThemeProviderProps> = ({ children }: { children: React.ReactNode }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <ThemeProvider enableSystem={true} attribute="class">
      {children}
    </ThemeProvider>
  );
};

export default Provider;