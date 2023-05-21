import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";

import { Heading_1, Heading_2, Heading_3 } from "@components/index";
import Container from "@layouts/Container";

const inter = Inter({ subsets: ["latin"] });

import HeaderRects from "@assets/Header-rects";

import HeaderIMG from "@assets/header.png";

// Icons
import { IoIosArrowForward, IoLogoCss3 } from "react-icons/io";
import { AiFillHtml5 } from "react-icons/ai";

import Technology from "@components/Technology";
import { REASONS } from "@contents/Data";

export default function Home() {
  const [navbarBg, setNavbarBg] = useState<boolean>(false);

  //
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.5], ["10%", "0%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.1], [0.8, 1]);
  const rotateX = useTransform(scrollYProgress, [0, 0.2], ["10deg", "0deg"]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      scrollY > 100 ? setNavbarBg(true) : setNavbarBg(false);
    });
  }, []);

  return (
    <main className={`${inter.className}`}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1500px] h-96 bg-center bg-cover -z-50 bg-header-image"></div>
      <header className="py-12">
        {/* Navbar */}
        <nav
          className={`fixed top-0 left-0 z-50 flex items-center w-full h-16 duration-200 ${
            navbarBg && "bg-background-clr"
          }`}
        >
          <Container className="flex items-center justify-between">
            <Link href={"#"} className="text-lg font-semibold text-white">
              AniLearn.dev
            </Link>
            <Link
              href={"#get-started"}
              scroll={false}
              className="flex items-center px-4 py-2 text-xs text-white rounded-full bg-button group"
            >
              Start Now
              <IoIosArrowForward className="duration-300 group-hover:translate-x-1" />
            </Link>
          </Container>
        </nav>
        {/* Section */}
        <Container className="flex flex-col items-center gap-4 mt-32 text-center">
          <Heading_1 className="text-4xl text-center text-white md:text-5xl lg:text-6xl">
            <span className="-z-10 relative p-2 isolate font-black before:content-[''] before:w-full before:h-full before:bg-white before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-l before:from-primary before:to-secondary before:-skew-y-2 before:rounded-md">
              Animation
            </span>{" "}
            eases learning process.
          </Heading_1>
          <Heading_2 className="text-2xl text-transparent md:text-4xl bg-clip-text bg-gradient-text-2">
            Learning something with animation doesn&apos;t get easier than this
          </Heading_2>
          <p className="md:text-lg font-medium w-full max-w-[400px]">
            We offer top-notch content for easy learning, with clear visual
            development principles.
          </p>
          <Link
            href={"#get-started"}
            scroll={false}
            className="px-5 py-2 mt-12 text-sm text-black duration-200 bg-white rounded-full shadow-main-button hover:shadow-main-button-hover"
          >
            Start Now
          </Link>
        </Container>
        {/* Image */}
        <Container className="relative flex items-center justify-center p-3 mt-12">
          <HeaderRects />
          <motion.div
            style={{
              perspective: "500px",
              transform: `rotate(10deg)`,
              rotateX,
              y,
              opacity,
            }}
          >
            <Image
              src={HeaderIMG}
              width={2000}
              height={1400}
              alt=""
              className={`w-full max-w-[1000px] rounded-xl`}
            />
          </motion.div>
        </Container>
      </header>

      <section id="get-started" className="py-12 overflow-hidden">
        <Container className="relative">
          <div className="absolute left-0 text-box opacity-[.2] text-3xl sm:text-5xl md:text-7xl lg:text-9xl pointer-events-none">
            Web development technologies
          </div>
          <small className="text-transparent uppercase bg-gradient-text bg-clip-text">
            technologies
          </small>
          <Heading_2 className="mt-2 text-4xl text-white">
            Web development technologies
          </Heading_2>
          <Heading_2 className="text-4xl">Practice Visually</Heading_2>
          {/* Gradient background */}
          <div className="absolute h-24 translate-y-24 w-96 bg-primary/20 -z-10 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-24 w-96 bg-primary/10 -z-10 blur-3xl" />
          {/* container */}
          <div className="relative grid gap-8 mt-8 md:grid-cols-2">
            {/* item-1 */}
            <Technology
              name="HTML"
              description="HTML stands for HyperText Markup Language. It is a standard markup language for web page creation. It allows the creation and structure of sections, paragraphs, and links using HTML elements (the building blocks of a web page) such as tags and attributes."
              Icon={AiFillHtml5}
              link="/html"
            />
            {/* item-2 */}
            <Technology
              name="CSS"
              description="CSS was developed by W3C (World Wide Web Consortium) in 1996 for a rather simple reason. HTML element was not designed to have tags that would help format the page. You were only supposed to write the markup for the web page."
              Icon={IoLogoCss3}
              link="/css"
            />
          </div>
        </Container>
      </section>

      <section className="py-12 overflow-hidden">
        <Container className="relative">
          <div className="absolute left-0 text-box opacity-[.2] text-3xl sm:text-5xl md:text-7xl lg:text-9xl pointer-events-none">
            Why this website?
          </div>
          <small className="text-transparent uppercase bg-gradient-text bg-clip-text">
            reasons
          </small>
          <Heading_2 className="mt-2 text-4xl text-white">
            Why this website?
          </Heading_2>
          <p>
            Using a website that allows users to visually work with CSS offers
            several advantages:
          </p>
          {/* container */}
          <div className="relative grid items-start gap-4 mt-8 md:grid-cols-2">
            {REASONS.map((reason) => (
              <motion.div
                key={reason.id}
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ ease: "circOut" }}
                className={`p-4 border rounded-lg bg-gradient-to-br from-box via-white/5 to-box border-white-low-opacity hover:!scale-95 duration-200 ${
                  reason.id % 2 == 0 && "md:mt-4"
                }`}
              >
                <h3 className="mb-2 text-xl text-white">{reason.title}</h3>
                <p>{reason.reason}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* ShoutOut */}
      <section className="flex items-center justify-center px-4 py-12 mt-24 bg-gradient-to-r from-primary to-secondary">
        <div className="relative w-full max-w-[1000px] bg-box/90 backdrop-blur-sm border border-white-low-opacity overflow-hidden rounded-xl flex flex-col gap-4 px-6 py-12 shadow-2xl">
          <h2 className="font-medium text-white text-2xl/8">
            I am making animated contents on Twitter, and I know they will be
            helpful when learning something.
          </h2>
          <div className="flex gap-2">
            <a
              href="https://www.alirezasamadi.com/twitter-activity/works"
              target="_blank"
              className="underline decoration-2 hover:text-white"
            >
              Website
            </a>
            <a
              href="https://twitter.com/Ali_Developer05"
              target="_blank"
              className="underline decoration-2 hover:text-white"
            >
              Twitter
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
