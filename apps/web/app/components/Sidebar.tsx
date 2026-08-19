"use client";
import { cn } from "@repo/ui/lib/cn";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import AskIcon from "../assets/icons/ask.svg";
import EyeIcon from "../assets/icons/eye.svg";
import HomeIcon from "../assets/icons/home.svg";
import JobsIcon from "../assets/icons/jobs.svg";

const links = [
  {
    href: "/",
    label: "New",
    icon: HomeIcon,
  },
  {
    href: "/ask",
    label: "Ask",
    icon: AskIcon,
  },
  {
    href: "/show",
    label: "Show",
    icon: EyeIcon,
  },
  {
    href: "/jobs",
    label: "Jobs",
    icon: JobsIcon,
  },
];
export default function Sidebar() {
  const pathname = usePathname();
  return (
    <div className="w-60 space-y-4 border-r border-neutral-200 px-4 pt-6">
      <div className="flex items-center gap-2">
        <Link href="/">
          <Image src="/icons/logo.svg" alt="Logo" width={32} height={32} />
        </Link>
        <h1 className="text-xl font-bold">Hacker News</h1>
      </div>
      <ul className="flex flex-col gap-1">
        {links.map(({ href, icon: Icon, label }) => {
          const isActive = pathname === href;
          const classes = isActive
            ? "bg-orange-50 font-medium text-orange-600"
            : "hover:bg-neutral-100 hover:text-neutral-700";
          return (
            <Link
              className={cn(
                "flex items-center gap-3 rounded-sm p-1.5 text-sm text-neutral-500",
                classes,
              )}
              key={href}
              href={href}
            >
              <Icon aria-hidden className="size-5" />
              {label}
            </Link>
          );
        })}
      </ul>
    </div>
  );
}
