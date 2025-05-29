"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { SidebarNavItem } from "types"
import { cn } from "@/lib/utils"
import React from "react"

export interface DocsSidebarNavProps {
  items: SidebarNavItem[]
}

export function DocsSidebarNav({ items }: DocsSidebarNavProps) {
  const pathname = usePathname()

  return items.length ? (
    <div className="w-full">
      {items.map((item, index) => (
        <div key={index} className={cn("pb-8")}>
          <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-medium">
            {item.title}
          </h4>
          {item.items ? (
            <DocsSidebarNavItems items={item.items} pathname={pathname} />
          ) : null}
        </div>
      ))}
    </div>
  ) : null
}

interface DocsSidebarNavItemsProps {
  items: SidebarNavItem[]
  pathname: string | null
}

export function DocsSidebarNavItems({
  items,
  pathname,
}: DocsSidebarNavItemsProps) {
  return items?.length ? (
    <div className="grid grid-flow-row auto-rows-max text-sm">
      {items.map((item, index) =>
        !item.disabled && item.href ? (
          <React.Fragment key={index}>
            {!item.subLinks && (
            <Link
              href={item.href}
              className={cn(
                "flex w-full items-center rounded-md p-2 hover:underline",
                {
                  "bg-muted": pathname === item.href,
                }
              )}
              target={item.external ? "_blank" : ""}
              rel={item.external ? "noreferrer" : ""}
            >
              {item.title}
            </Link>)}
            {item?.subLinks && item.subLinks.length > 0 ? (
              <div className="ml-4">
                <details>
                  <summary>{item.title}</summary>
                  <ul>
                    {item.subLinks.map((subItem, subIndex) => (
                      <li key={subIndex} className="pl-4">
                        <Link
                          href={subItem.href}
                          className={cn(
                            "flex w-full items-center rounded-md p-2 hover:underline",
                            {
                              "bg-muted": pathname === subItem.href,
                            }
                          )}
                          target={subItem.external ? "_blank" : ""}
                          rel={subItem.external ? "noreferrer" : ""}
                        >
                          {subItem.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </details>
              </div>
            ) : null}
          </React.Fragment>
        ) : (
          <span
            key={index}
            className="flex w-full cursor-not-allowed items-center rounded-md p-2 opacity-60"
          >
            {item.title}
          </span>
        )
      )}
    </div>
  ) : null
}
