import React from "react";

import Link from "next/link";
import Logo from "./ui/svg_components/logo";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  { name: "Beef", href: "/#products" },
  { name: "Contact", href: "/#contact" },
];

const socialLinks = [
  { name: "Facebook", href: "#" },
  { name: "Instagram", href: "#" },
];

const legalLinks = [
  { name: "Terms of Service", href: "/term-of-service" },
  { name: "Privacy", href: "/privacy" },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-background py-16 px-8">
      <div className="container mx-auto">
        <div className="flex justify-between max-w-[1300px] mx-auto">
          {/* Quick Links - Left Column */}
          <div className="space-y-6 w-fit">
            <h3 className="text-2xl font-serif text-background/80 mb-6">
              Quick Links
            </h3>
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-lg text-background hover:text-background/80 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Center Logo and Tagline */}
          <div className="flex flex-col items-center text-center px-10">
            {/* <div className="w-32 h-32 bg-black rounded-lg flex items-center justify-center"> */}
            <Logo className="size-30 md:size-50" />
            {/* </div> */}
            <p className="text-md md:text-2xl text-background">
              Beef raised by a Cowgirl.
            </p>
          </div>

          {/* Social and Legal - Right Column */}
          <div className="space-y-8 w-fit">
            {/* Social Section */}
            <div className="space-y-4">
              <h3 className="text-2xl font-serif text-background/80 mb-6">
                Social
              </h3>
              <nav className="flex flex-col space-y-4">
                {socialLinks.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-lg text-background hover:text-background/80 transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Legal Section */}
            <div className="space-y-4">
              <h3 className="text-2xl font-serif text-background/80 mb-6">
                Legal
              </h3>
              <nav className="flex flex-col space-y-4">
                {legalLinks.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-lg text-background hover:text-background/80 transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
