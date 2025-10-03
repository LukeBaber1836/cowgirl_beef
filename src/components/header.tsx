"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import ScrollVelocity from "@/components/ui/shadcn-io/scroll-velocity";
import { motion } from "framer-motion";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

// Icons
import { BsDash } from "react-icons/bs";
import Logo from "./ui/svg_components/logo";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  { name: "Beef", href: "/#products" },
  { name: "Contact", href: "/#contact" },
];

export default function Header() {
  return (
    <header className="border-b-2 bg-background border-primary sticky top-0 z-50">
      <nav className="container mx-auto grid grid-cols-3 px-2">
        {/*Left - Menu  */}
        <section className="flex justify-start items-center col-span-1">
          <Drawer direction="left">
            <DrawerTrigger asChild>
              <div className="flex flex-col items-center space-y-3 p-2 cursor-pointer group">
                <div className="w-15 h-1 bg-primary rounded-lg group-hover:-translate-x-2 duration-300 group-hover:shadow-xl shadow-black ease-in-out"></div>
                <div className="w-15 h-1 bg-primary rounded-lg group-hover:translate-x-2 duration-300 group-hover:shadow-xl ease-in-out"></div>
              </div>
            </DrawerTrigger>
            <DrawerContent>
              <div className="mx-auto w-full max-w-sm">
                <DrawerHeader>
                  <DrawerTitle className="flex justify-center">
                    <Image
                      src="/images/logo.png"
                      alt="Cowgirl Beef Logo"
                      width={150}
                      height={75}
                      className="size-18 object-contain"
                    />
                  </DrawerTitle>
                </DrawerHeader>
                <div className="p-4">
                  <nav className="space-y-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block text-lg hover:text-primary transition-colors"
                      >
                        {item.name}
                      </a>
                    ))}
                  </nav>
                </div>
                <DrawerFooter>
                  <DrawerClose asChild>
                    <Button>Close</Button>
                  </DrawerClose>
                </DrawerFooter>
              </div>
            </DrawerContent>
          </Drawer>
        </section>
        {/* Center - Logo */}
        <section className="flex justify-center items-center col-span-1">
          <motion.div
            initial={{ opacity: 0, x: -30, scale: 0.5 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{
              duration: 0.75,
              ease: "easeInOut",
              delay: 0.5,
            }}
            className="hidden xl:block h-[2px] lg:w-30 w-[30px] bg-secondary"
          />
          <Link href="/">
            <Logo fill="hsl(7, 68%, 26%, 100%)" className="size-18 mx-8" />
          </Link>
          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.5 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{
              duration: 0.75,
              ease: "easeInOut",
              delay: 0.5,
            }}
            className="hidden xl:block h-[2px] lg:w-30 w-[30px] bg-secondary"
          />
        </section>
        {/* Right - Contact and Scrolling text */}
        <section className="flex justify-end items-center col-span-1 space-x-4">
          <div className="hidden lg:flex flex-row space-x-2 items-center">
            <BsDash className="text-primary size-5" />
            <div className="w-50 overflow-hidden flex items-center justify-center font-serif">
              <ScrollVelocity
                texts={[
                  "Natural Beef - Pasture Raised - No Antibiotics - Local in Bullard, TX",
                ]}
                velocity={25}
                className="text-primary"
              />
            </div>
            <BsDash className="text-primary size-5" />
          </div>

          <Link href="#contact">
            <Button className="px-8">Contact</Button>
          </Link>
        </section>
      </nav>
    </header>
  );
}
