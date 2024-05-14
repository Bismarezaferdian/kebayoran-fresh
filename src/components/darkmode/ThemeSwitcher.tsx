"use client"
import { MoonIcon, SunIcon } from '@heroicons/react/16/solid';
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react'

const ThemeSwitcher = () => {
    const [mounted, setMounted] = useState(false);
    const { systemTheme, theme, setTheme } = useTheme();
  
    // useEffect only runs on the client, so now we can safely show the UI
    useEffect(() => {
      setMounted(true);
    }, []);
  
    if (!mounted) {
      return null;
    }
  
    // console.log(theme)


    const themeChange= ()=>{
        if(!mounted) return null
        const currentTheme = theme === "system" ? systemTheme : theme;

        if (currentTheme === "dark") {
          return (
            <SunIcon
              className="w-6 h-6 text-yellow-500 "
              role="button"
              onClick={() => setTheme("light")}
            />
          );
        } else {
          return (
            <MoonIcon
              className="w-6 h-6 text-slate-950"
              role="button"
              onClick={() => setTheme("dark")}
            />
          );
        }
      };

        return <>{themeChange()}</>;
    }
    

export default ThemeSwitcher;