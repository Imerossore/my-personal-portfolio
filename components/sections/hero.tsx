import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex justify-center items-center h-[50dvh] sm:h-[60dvh] md:h-[75dvh]"
    >
      <Image
        src="/images/hero-bg.jpg"
        alt="hero background"
        fill
        sizes="100vw"
        className="object-cover object-center -z-10 dark:opacity-35"
        priority
      />
      <div className="text-center space-y-2.5 ">
        <h1 className="text-2xl md:text-5xl font-semibold">
          Designing clean interfaces.
        </h1>
        <h1 className="text-2xl font-semibold md:text-5xl">
          Building modern web experiences.
        </h1>
        <p className="text-lg md:text-xl max-w-2xl">
          Frontend developer specializing in creating beautiful, responsive, and
          accessible user interfaces.
        </p>
        <Button size={"lg"} className="rounded-sm">
          View Projects <ArrowRight />
        </Button>
      </div>
    </section>
  );
}
