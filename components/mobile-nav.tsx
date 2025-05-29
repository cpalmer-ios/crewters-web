import React, { useEffect } from "react"
import Link from "next/link"

import { MainNavItem } from "types"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { useLockBody } from "@/hooks/use-lock-body"
import { Icons } from "@/components/icons"
import { useTheme } from "next-themes"

interface MobileNavProps {
  items: MainNavItem[]
  children?: React.ReactNode
  showMobileMenu: boolean
  setShowMobileMenu: (show: boolean) => void
}

export function MobileNav({ items, children, showMobileMenu, setShowMobileMenu }: MobileNavProps) {
  useLockBody()
    const { resolvedTheme } = useTheme()
    const dark = resolvedTheme === "dark"

    if(!showMobileMenu) return null

  return (
    <div
      className={cn(
        "fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md animate-in slide-in-from-bottom-80 md:hidden"
      )}
    >
      <div className="relative z-20 grid gap-6 rounded-md bg-popover p-4 text-popover-foreground shadow-md">
        <Link href="/" className="flex items-center space-x-2">
          <Icons.logo className={dark ? "crewters-logo h-7 w-12 rounded-full" : "filter invert crewters-logo h-7 w-12 rounded-full opacity-50"} />
          <span className="font-bold">{siteConfig.name}</span>
        </Link>
        <nav className="grid grid-flow-row auto-rows-max text-sm">
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.disabled ? "#" : item.href}
              className={cn(
                "flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline",
                item.disabled && "cursor-not-allowed opacity-60"
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
        {children}
      </div>
      {showMobileMenu && (
        <>
        <div className="fixed inset-0 z-10 bg-black/50 backdrop-blur-sm" onClick={() => showMobileMenu = false} />
        <div className="absolute top-4 right-4 z-20">
          <button
            className="rounded-md p-8 text-muted-foreground hover:bg-muted hover:text-foreground"
            onClick={() => setShowMobileMenu(false)}
          >
            <Icons.close className="h-5 w-5" />
          </button>
        </div>
        </>
      )}
    </div>
  )
}
