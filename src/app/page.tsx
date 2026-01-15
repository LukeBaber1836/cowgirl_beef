"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { BsDash } from "react-icons/bs";
import { CowImageCluster } from "@/components/cow-image-cluster";
import CowQuotingWidget from "@/components/cow-quoting-widget";

// SVG components
import LeftRibbon from "@/components/ui/svg_components/left-ribbon";
import CurveSeparator1 from "@/components/ui/svg_components/curve-separator-1";
import CurveSeparator2 from "@/components/ui/svg_components/curve-separator-2";
import CurveSeparator3 from "@/components/ui/svg_components/curve-separator-3";
import CurveSeparator4 from "@/components/ui/svg_components/curve-separator-4";

// Social icons
import { BsInstagram } from "react-icons/bs";

export default function Home() {
  // Used for trackign the movement of the hero text
  const { scrollYProgress } = useScroll();

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 500]);
  const heroSecondaryY = useTransform(scrollYProgress, [0, 1], [0, 1000]);

  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://cowgirlbeefetx.com/#business",
        name: "Cowgirl Beef ETX",
        description:
          "Premium grass-fed beef raised by a cowgirl in Bullard, Texas. Pasture-raised, grain-finished cattle with no hormones or antibiotics.",
        url: "https://cowgirlbeefetx.com",
        telephone: "(903) 363-8303",
        email: "rachel@cowgirlbeefetx.com",
        foundingDate: "2020",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Bullard",
          addressRegion: "TX",
          addressCountry: "US",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "32.1451",
          longitude: "-95.3244",
        },
        sameAs: [
          "https://www.instagram.com/cowgirlbeef/?igsh=MXNoNHk3cDFzY2JzYw%3D%3D&utm_source=qr#",
          "https://www.facebook.com/cowgirlbeefetx",
        ],
        priceRange: "$$",
        paymentAccepted: "Cash, Check",
        currenciesAccepted: "USD",
      },
      {
        "@type": "Product",
        "@id": "https://cowgirlbeefetx.com/#beef-products",
        name: "Premium Grass-Fed Beef",
        description:
          "Pasture-raised, grain-finished beef with no hormones or antibiotics. Available in quarter cow, half cow, and whole cow packages.",
        brand: {
          "@type": "Brand",
          name: "Cowgirl Beef ETX",
        },
        offers: [
          {
            "@type": "Offer",
            name: "Quarter Cow Package",
            price: "900",
            priceCurrency: "USD",
            availability: "https://schema.org/OutOfStock",
          },
          {
            "@type": "Offer",
            name: "Half Cow Package",
            price: "1700",
            priceCurrency: "USD",
            availability: "https://schema.org/OutOfStock",
          },
          {
            "@type": "Offer",
            name: "Whole Cow Package",
            price: "3200",
            priceCurrency: "USD",
            availability: "https://schema.org/OutOfStock",
          },
        ],
      },
    ],
  };

  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {/* Hero Section */}
      <section className="relative h-fit w-full overflow-hidden flex flex-col justify-center items-center">
        <div className="relative h-full w-full flex flex-col justify-center items-center overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/images/hero_poster.png"
            className="w-full min-h-[700px] sm:h-screen object-cover -z-10"
          >
            <source src="videos/hero_video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <section className="absolute w-full top-[30%] grid grid-cols-3">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              style={{ y: heroSecondaryY }}
              transition={{
                duration: 1.5,
                ease: "easeInOut",
                delay: 1,
              }}
              className="col-span-1 flex justify-center items-end"
            >
              <h2 className="text-md lg:text-xl text-shadow-black/70 text-shadow-lg font-bold text-background border-y-1 border-background py-3 lg:py-5">
                Est. 2020
              </h2>
            </motion.div>
            <div className="col-span-1 flex flex-col justify-center items-center font-serif font-light text-shadow-black text-shadow-lg">
              <motion.div
                initial={{ y: -30 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 1.25,
                  ease: "easeInOut",
                  delay: 0,
                }}
              >
                <motion.h1
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  style={{ y: heroY }}
                  transition={{
                    duration: 1.25,
                    ease: "easeInOut",
                    delay: 0.1,
                  }}
                  className="text-[50px] min-w-[500px] pb-10 md:pb-0 lg:text-[100px] text-center font-light text-background"
                >
                  Cowgirl Beef
                </motion.h1>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                style={{ y: heroY }}
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                  delay: 0.25,
                }}
                className="flex items-center justify-center space-x-3"
              >
                <motion.div
                  initial={{ opacity: 0, x: 20, scale: 0.5 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 1,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                >
                  <BsDash className="inline size-8 text-background" />
                </motion.div>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 1,
                    ease: "easeInOut",
                    delay: 0.25,
                  }}
                  className="font-light text-2xl text-background"
                >
                  ETX
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, x: -20, scale: 0.5 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 1,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                >
                  <BsDash className="inline size-8 text-background" />
                </motion.div>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              style={{ y: heroSecondaryY }}
              transition={{
                duration: 1.5,
                ease: "easeInOut",
                delay: 1,
              }}
              className="col-span-1 flex justify-center items-end"
            >
              <h2 className="text-md lg:text-xl text-shadow-black/70 text-shadow-lg font-bold text-background border-y-1 border-background py-3 lg:py-5">
                Bullard, TX
              </h2>
            </motion.div>
          </section>

          {/* Divider for next section */}
          <div className="absolute bottom-0 w-full overflow-hidden z-0">
            <CurveSeparator1 className="w-full h-full object-scale-down object-center z-50" />
          </div>
        </div>
      </section>

      {/* Our Cows Section */}
      <section id="about" className="relative w-full pb-20 bg-background">
        <div className="curved-top w-full items-center pb-20">
          <div className="flex flex-col justify-start">
            {/* Welcome Ribbon */}
            <motion.div
              initial={{ opacity: 0, x: -300, scale: 0.8 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.75,
                ease: "easeInOut",
                delay: 0.3,
              }}
              className="mt-0 md:mt-20"
            >
              <div className="flex mb-0 lg:mb-20 relative w-fit z-0">
                <LeftRibbon className="w-full -translate-x-1 -z-10 drop-shadow-black/40 drop-shadow-xl" />
                <section className="flex flex-col justify-center items-center z-10">
                  <div className="absolute right-15 sm:right-25">
                    <h2 className="text-3xl sm:text-5xl font-serif font-light text-background w-full text-right">
                      Welcome to Cowgirl Beef
                    </h2>
                    <p className="text-md sm:text-xl font-sans text-background text-right w-full">
                      Beef raised by a cowgirl.
                    </p>
                  </div>
                </section>
              </div>
            </motion.div>

            <div className="container grid grid-cols-2 mx-auto z-10">
              {/* Cows pictures */}
              <div className="relative col-span-2 lg:col-span-1 flex justify-center items-center">
                <CowImageCluster />
              </div>
              {/* Meet our cows text */}
              <div className="col-span-2 lg:col-span-1 flex flex-col justify-center items-center">
                <div className="max-w-[600px] mx-auto px-10">
                  <motion.h1
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{
                      duration: 0.5,
                      ease: "easeInOut",
                      delay: 0.3,
                    }}
                    className="text-5xl md:text-6xl text-primary py-5 font-serif"
                  >
                    Meet Our Cows
                  </motion.h1>
                  <motion.section
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{
                      duration: 0.5,
                      ease: "easeInOut",
                      delay: 0.3,
                    }}
                    className="text-2xl border-y-1 border-primary py-5 space-y-6"
                  >
                    <p>
                      Our cows spend their lives grazing freely on East
                      Texas pastures, where they enjoy plenty of grass and open
                      space to roam.
                    </p>
                    <p>
                      They are pasture raised and grain finished to ensure the
                      perfect balance of flavor and tenderness in every cut.
                    </p>
                    <p>
                      We never use hormones or antibiotics. Just honest, healthy
                      ranching the way it&apos;s meant to be. Raised with care
                      by a cowgirl, our cattle produce beef you can feel good
                      about feeding your family.
                    </p>
                  </motion.section>
                </div>
              </div>
            </div>

            {/* Divider for next section */}
            <div className="absolute bottom-0 w-full overflow-hidden z-0">
              <CurveSeparator2 className="w-full h-full object-scale-down object-center z-50 translate-y-1" />
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="relative w-full">
        <div className="w-full bg-primary pb-16 md:pb-32">
          <div className="container mx-auto relative">
            <div className="flex flex-row">
              <div className="flex flex-row w-full justify-center items-center space-x-5 pt-10 sm:pt-0">
                <motion.div
                  initial={{ opacity: 0, x: 30, scale: 0.5 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.75,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                  className="hidden md:block h-[2px] lg:w-30 w-[30px] bg-background"
                />
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.75,
                    ease: "easeInOut",
                  }}
                  className="text-5xl md:text-6xl w-fit text-background font-serif text-center"
                >
                  Our Beef Cuts
                </motion.h1>
                <motion.div
                  initial={{ opacity: 0, x: -30, scale: 0.5 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.75,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                  className="hidden md:block h-[2px] lg:w-30 w-[30px] bg-background"
                />
              </div>
            </div>

            {/* Cow cuts section */}
            <div className="py-10 grid grid-cols-2 overflow-clip">
              <CowQuotingWidget />
            </div>
          </div>

          {/* Divider for next section */}
          <div className="absolute bottom-0 w-full overflow-hidden z-0">
            <CurveSeparator3 className="w-full h-full object-scale-down object-center z-50 translate-y-1" />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="relative w-full bg-background pb-0 sm:pb-30"
      >
        <div className="container mx-auto px-5">
          <div className="flex flex-row w-full justify-center items-center space-x-5">
            <motion.div
              initial={{ opacity: 0, x: 30, scale: 0.5 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.75,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="hidden md:block h-[2px] lg:w-30 w-[30px] bg-primary"
            />
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
                delay: 0.3,
              }}
              className="text-5xl md:text-6xl text-primary py-5 font-serif"
            >
              Contact the Cowgirl
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, x: -30, scale: 0.5 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.75,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="hidden md:block h-[2px] lg:w-30 w-[30px] bg-primary"
            />
          </div>
          <div className="flex flex-col-reverse lg:flex-row py-10 space-x-10 w-full">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.75,
                ease: "easeInOut",
                delay: 0.3,
              }}
              className="flex flex-col justify-center items-center w-full lg:w-1/2 my-10"
            >
              <h2 className="text-3xl text-primary pb-5">Contact Info</h2>
              <div className="flex flex-col justify-center items-center border-y-1 border-primary py-10 text-center px-20 w-full max-w-[500px]">
                <p className="text-xl md:text-2xl text-primary pb-3">
                  Email:
                  <Link
                    href="mailto:rachel@cowgirlbeefetx.com"
                    className="underline hover:text-secondary pl-2"
                  >
                    rachel@cowgirlbeefetx.com
                  </Link>
                </p>
                <p className="text-xl md:text-2xl text-primary pb-3">
                  Phone: (903) 363-8303
                </p>
              </div>
              <div className="flex justify-center space-x-6 pt-5">
                <Link
                  href="https://www.instagram.com/cowgirlbeef/?igsh=MXNoNHk3cDFzY2JzYw%3D%3D&utm_source=qr#"
                  className="text-primary hover:text-secondary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsInstagram className="size-10 hover:scale-105 duration-300 ease-in-out" />
                </Link>
                {/* <Link
                  href="https://www.facebook.com/cowgirlbeefetx"
                  className="text-primary hover:text-secondary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsFacebook className="size-10 hover:scale-105 duration-300 ease-in-out" />
                </Link> */}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.9,
                ease: "easeInOut",
                delay: 0.3,
              }}
              className="flex flex-col justify-center items-center w-full lg:w-1/2"
            >
              <Image
                src="/images/rachel_jack.png"
                alt="Rachel and Jack Image"
                width={400}
                height={400}
                className="rounded-xl max-w-[500px] w-full object-cover drop-shadow-xl drop-shadow-black/50"
              />
            </motion.div>
          </div>
        </div>

        {/* Divider for next section */}
        <div className="absolute bottom-0 w-full overflow-hidden z-0">
          <CurveSeparator4 className="w-full h-full object-scale-down object-center z-50 translate-y-1" />
        </div>
      </section>
    </>
  );
}
