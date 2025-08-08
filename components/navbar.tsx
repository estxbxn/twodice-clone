"use client";

import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  ChevronDownIcon,
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon
} from "lucide-react";
import Image from "next/image";
import { Avatar, AvatarImage } from "./ui/avatar";
import Link from "next/link";

export function Navbar() {
  return (
    <header className="w-full">
      <div className="rounded-xl md:rounded-2xl px-3 md:px-4 py-3 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 min-w-0">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <MenuIcon className="size-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <nav className="flex flex-col gap-2">
                <a className="hover:underline" href="#">Game</a>
                <a className="hover:underline" href="#">Cards</a>
                <a className="hover:underline" href="#">Direct Top-Up</a>
                <a className="hover:underline" href="#">Mobile Charge</a>
              </nav>
            </SheetContent>
          </Sheet>

          <div className="flex items-center gap-2 md:mr-4 lg:mr-10">
            <Link href="/">
              <Image src="/logo.svg" alt="twodice" width={100} height={100} />
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-4 text-sm text-muted-foreground">
            <a className="hover:text-foreground inline-flex items-center gap-1" href="#">Game <ChevronDownIcon className="size-3.5 opacity-70" /></a>
            <a className="hover:text-foreground inline-flex items-center gap-1" href="#">Cards <ChevronDownIcon className="size-3.5 opacity-70" /></a>
            <a className="hover:text-foreground" href="#">Direct Top-Up</a>
            <a className="hover:text-foreground" href="#">Mobile Charge</a>
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon">
            <SearchIcon className="size-4" />
          </Button>
          <Button variant="outline" size="icon">
            <ShoppingCartIcon className="size-4" />
          </Button>
          <div className="hidden sm:flex items-center gap-2">
            <Select>
              <SelectTrigger>
                <SelectValue className="flex items-center gap-2">
                  <Avatar className="size-4">
                    <AvatarImage src="https://flagcdn.com/w40/fr.png" />
                  </Avatar>
                  <span className="font-medium">FR</span>
                </SelectValue>
              </SelectTrigger>
            </Select>
          </div>
          <Button className="bg-[#6D6DCF] hover:bg-[#6D6DCF]/90 text-primary-foreground border border-b-3">
            Register/Sign In
          </Button>
        </div>
      </div>
    </header>
  );
}
