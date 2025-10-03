import React, { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { AnimatePresence, motion } from "motion/react";
import { Button } from "./ui/button";
import { toast } from "sonner";
import Image from "next/image";

const BEEF_PACKAGES = {
  quarter: {
    id: 1,
    name: "1/4 Cow",
    price: 900,
    groundBeef: "~25 lbs (packaged in 1 lb portions)",
    steaks: {
      ribeye: "3-4 steaks (~5-6 lbs)",
      tBonePorterhouse: "3-4 steaks (~5-6 lbs)",
      sirloin: "3-4 steaks (~6-7 lbs)",
      filetMignon: "2-3 steaks (~2-3 lbs)",
    },
    roasts: {
      chuckRoasts: "2-3 roasts (~10-18 lbs)",
      armShoulderRoasts: "1-2 roasts (~5-6 lbs)",
      rumpRoast: "1 roast (~3-4 lbs)",
    },
    brisket: "1 large brisket (~4-5 lbs)",
    shortRibs: "~3-4 lbs",
    flankSteak: "1 (~2 lbs)",
    skirtSteak: "1 (~2-3 lbs)",
  },
  half: {
    id: 2,
    name: "1/2 Cow",
    price: 1700,
    groundBeef: "~50 lbs (packaged in 1 lb portions)",
    steaks: {
      ribeye: "6-8 steaks (~10-12 lbs)",
      tBonePorterhouse: "6-8 steaks (~10-12 lbs)",
      sirloin: "6-8 steaks (~12-14 lbs)",
      filetMignon: "4-6 steaks (~4-6 lbs)",
    },
    roasts: {
      chuckRoasts: "4-6 roasts (~20-36 lbs)",
      armShoulderRoasts: "2-4 roasts (~10-12 lbs)",
      rumpRoast: "2 roasts (~6-8 lbs)",
    },
    brisket: "2 large briskets (~8-10 lbs)",
    shortRibs: "~6-8 lbs",
    flankSteak: "2 (~4 lbs)",
    skirtSteak: "2 (~4-6 lbs)",
  },
  whole: {
    id: 3,
    name: "Whole Cow",
    price: 3200,
    groundBeef: "~100 lbs (packaged in 1 lb portions)",
    steaks: {
      ribeye: "12-16 steaks (~20-24 lbs)",
      tBonePorterhouse: "12-16 steaks (~20-24 lbs)",
      sirloin: "12-16 steaks (~24-28 lbs)",
      filetMignon: "8-12 steaks (~8-12 lbs)",
    },
    roasts: {
      chuckRoasts: "8-12 roasts (~40-72 lbs)",
      armShoulderRoasts: "4-8 roasts (~20-24 lbs)",
      rumpRoast: "4 roasts (~12-16 lbs)",
    },
    brisket: "4 large briskets (~16-20 lbs)",
    shortRibs: "~12-16 lbs",
    flankSteak: "4 (~8 lbs)",
    skirtSteak: "4 (~8-12 lbs)",
  },
} as const;

export default function CowQuotingWidget() {
  const [selectedPackage, setSelectedPackage] = useState(0); // 0 = quarter, 1 = half, 2 = whole
  const packageKeys = ["quarter", "half", "whole"] as const;
  const currentPackage = BEEF_PACKAGES[packageKeys[selectedPackage]];

  return (
    <>
      <div className="col-span-2 lg:col-span-1 space-y-6 flex flex-col items-center justify-center px-5 py-5">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            duration: 1,
            type: "spring",
            damping: 25,
            delay: 0.3,
          }}
          className="w-full max-w-[600px] mx-auto py-5 px-5 xl:px-25 rounded-lg bg-background ring-background ring-2 ring-offset-2 ring-offset-primary shadow-xl shadow-black/30 flex flex-col items-center"
        >
          <div className="relative z-10 scale-70 sm:scale-100">
            <div className="relative w-fit flex items-center justify-center bg-transparent mask-substract mask-[url(/images/svg/cow_outline.svg)] mask-size-[400px] mask-no-repeat">
              <motion.div
                initial={{ opacity: 1, x: -300 }}
                animate={{
                  opacity: 1,
                  x: -300 + selectedPackage * 150,
                }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 1,
                  type: "spring",
                  stiffness: 200,
                  damping: 18,
                }}
                className="w-[600px] h-full bg-primary absolute top-0 right-0"
              ></motion.div>
              <Image
                src="/images/svg/cow_outline.svg"
                alt="Curved Line"
                width={1920}
                height={1080}
                className="max-w-[400px] mx-auto object-contain object-center fill-secondary -z-10"
              />
            </div>
          </div>

          {/* Slider Control */}
          <div className="px-6 w-full max-w-[600px] mx-auto">
            <h3 className="text-xl font-serif my-4 text-center text-primary">
              Select Package Size
            </h3>
            <Slider
              value={[selectedPackage]}
              onValueChange={(value) => setSelectedPackage(value[0])}
              max={2}
              min={0}
              step={1}
              className="w-full mb-4"
            />
            <div className="flex justify-between text-md text-primary font-medium">
              <span>1/4 Cow</span>
              <span>1/2 Cow</span>
              <span>Whole Cow</span>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="col-span-2 lg:col-span-1">
        {/* Display packages here */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            duration: 1,
            type: "spring",
            damping: 25,
            delay: 0.3,
          }}
          className="flex flex-col justify-center bg-primary text-background p-6 rounded-lg overflow-hidden"
        >
          <AnimatePresence mode="popLayout">
            <div key={currentPackage.id}>
              <div className="text-center mb-6">
                <motion.h2
                  className="text-4xl font-serif mb-2"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{
                    delay: 0.15,
                    type: "spring",
                    stiffness: 80,
                  }}
                >
                  {currentPackage.name}
                </motion.h2>
                <div className="w-full h-px bg-background mb-2" />
                <motion.p
                  className="text-3xl font-bold"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ delay: 0.3, type: "spring", stiffness: 80 }}
                >
                  ${currentPackage.price}
                </motion.p>
              </div>

              <div className="space-y-4">
                <p className="font-semibold mb-1 text-lg">Ground Beef:</p>
                <motion.p
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ delay: 0.1, type: "spring", stiffness: 80 }}
                  className="text-lg"
                >
                  {currentPackage.groundBeef}
                </motion.p>

                <p className="font-semibold mb-2 text-lg">Steaks:</p>
                <motion.ul
                  className="text-lg space-y-1 ml-4"
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.1,
                        delayChildren: 0.3,
                      },
                    },
                  }}
                >
                  <motion.li
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    transition={{ type: "spring", stiffness: 100 }}
                  >
                    • Ribeye: {currentPackage.steaks.ribeye}
                  </motion.li>
                  <motion.li
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    transition={{ type: "spring", stiffness: 100 }}
                  >
                    • T-Bone / Porterhouse:{" "}
                    {currentPackage.steaks.tBonePorterhouse}
                  </motion.li>
                  <motion.li
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    transition={{ type: "spring", stiffness: 100 }}
                  >
                    • Sirloin: {currentPackage.steaks.sirloin}
                  </motion.li>
                  <motion.li
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    transition={{ type: "spring", stiffness: 100 }}
                  >
                    • Filet Mignon (Tenderloin):{" "}
                    {currentPackage.steaks.filetMignon}
                  </motion.li>
                </motion.ul>

                <p className="font-semibold mb-2 text-lg">Roasts:</p>
                <motion.ul
                  className="text-lg space-y-1 ml-4"
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.1,
                        delayChildren: 0.5,
                      },
                    },
                  }}
                >
                  <motion.li
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    transition={{ type: "spring", stiffness: 100 }}
                  >
                    • Chuck Roasts: {currentPackage.roasts.chuckRoasts}
                  </motion.li>
                  <motion.li
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    transition={{ type: "spring", stiffness: 100 }}
                  >
                    • Arm / Shoulder Roasts:{" "}
                    {currentPackage.roasts.armShoulderRoasts}
                  </motion.li>
                  <motion.li
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    transition={{ type: "spring", stiffness: 100 }}
                  >
                    • Rump Roast: {currentPackage.roasts.rumpRoast}
                  </motion.li>
                </motion.ul>

                <div className="space-y-2">
                  <motion.p
                    className="text-lg"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition={{ delay: 0.1, type: "spring", stiffness: 80 }}
                  >
                    <span className="font-semibold">Brisket:</span>{" "}
                    {currentPackage.brisket}
                  </motion.p>
                  <motion.p
                    className="text-lg"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 80 }}
                  >
                    <span className="font-semibold">Short Ribs:</span>{" "}
                    {currentPackage.shortRibs}
                  </motion.p>
                  <motion.p
                    className="text-lg"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition={{ delay: 0.3, type: "spring", stiffness: 80 }}
                  >
                    <span className="font-semibold">Flank Steak:</span>{" "}
                    {currentPackage.flankSteak}
                  </motion.p>
                  <motion.p
                    className="text-lg"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition={{ delay: 0.4, type: "spring", stiffness: 80 }}
                  >
                    <span className="font-semibold">Skirt Steak:</span>{" "}
                    {currentPackage.skirtSteak}
                  </motion.p>
                </div>
              </div>
            </div>
          </AnimatePresence>

          <Button
            variant={"secondary"}
            className="mt-6 w-[300px] mx-auto"
            onClick={() =>
              toast.custom(() => (
                <a className="text-primary bg-background p-3 rounded-md ring-background ring-2 ring-offset-2 ring-offset-primary shadow-xl shadow-black">
                  Sorry, we are out of stock! 🐮
                </a>
              ))
            }
          >
            Buy Now
          </Button>
        </motion.div>
      </div>
    </>
  );
}
