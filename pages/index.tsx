import { GeneralLayout } from "@/layouts/general-layout";
import boston from "@/assets/images/boston-logan.svg";
import chevrolet from "@/assets/images/chevrolet.svg";
import dune from "@/assets/images/dune-jewellery.svg";
import mit from "@/assets/images/mit-med-sch.svg";
import balance from "@/assets/images/new-balance.svg";
import strega from "@/assets/images/strega.svg";
import cameraMan1 from "@/assets/images/man-with-camera-1.png";
import cameraMan2 from "@/assets/images/man-with-camera-2.png";
import swiftStrike from "@/assets/images/swiftstrike.png";
import serenity from "@/assets/images/serenity.png";
import loveBloom from "@/assets/images/love-bloom.png";
import Image from "next/image";
import { useMemo, useState } from "react";

const collabCompanies = [chevrolet, balance, strega, dune, mit, boston];

const tags = ["all", "brands", "weddings", "music"];

const INNOVATIONS = [
  {
    name: "swiftstrike",
    imgUrl: swiftStrike,
    tag: "brands",
    date: "24 august 2024",
  },
  {
    name: "love in full bloom",
    imgUrl: loveBloom,
    tag: "weddings",
    date: "24 august 2024",
  },
  {
    name: "echoes of serenity",
    imgUrl: serenity,
    tag: "music",
    date: "22 january 2023",
  },
];

const values = [
  {
    title: "",
    paragraph: "",
  },
  {
    title: "adaptive",
    paragraph:
      "Our ability to quickly pivot during production inspires the heavily dynamic nature of our creative process.",
  },
  {
    title: "",
    paragraph: "",
  },
  {
    title: "rhythmic",
    paragraph:
      "Our lifelong background in music production strongly influences how we create the viewing experience.",
  },
  {
    title: "empower",
    paragraph:
      "Our films foster trust and authenticity, empowering brands and audiences through relatable, credible storytelling.",
  },
  {
    title: "immersive",
    paragraph:
      "We want our audience to become part of the film and deeply relate to the the hero’s journey.",
  },
  {
    title: "",
    paragraph: "",
  },
  {
    title: "visionaries",
    paragraph:
      "We enjoy collaborating with other forward-thinking minds who value innovative technique.",
  },
  {
    title: "",
    paragraph: "",
  },
];

export default function Home() {
  const [activeTag, setActiveTag] = useState("all");

  const handleTag = (tag: string) => {
    setActiveTag(tag);
  };

  const brands = useMemo(() => {
    if (activeTag === "all") {
      return INNOVATIONS;
    } else {
      return INNOVATIONS.filter((item) => item.tag === activeTag);
    }
  }, [activeTag]);

  return (
    <GeneralLayout>
      <div className="w-4/5 mx-auto py-32 flex flex-col items-center justify-center gap-4 border-x-[1px] border-brandy-punch text-center">
        <h1 className="uppercase text-4xl">
          elevate your storytelling with{" "}
          <span className="text-brandy-punch">golde cinematics</span>
        </h1>
        <p>
          From captivating visuals to immersive narratives, we specialize in
          bringing your ideas to life on the silver screen. Let us elevate your
          vision with our passion, creativity, and dedication to excellence.
        </p>
      </div>

      <div className="w-4/5 mx-auto grid place-items-center border-x-[1px] border-brandy-punch">
        <video controls className="">
          <source src="https://youtu.be/fn_m9FDPuuw" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="grid grid-cols-7 gap-4 border-[1px] items-center border-brandy-punch p-4">
        {collabCompanies.map((item, index, self) => {
          return (
            <div
              key={`item-${index}`}
              className={`${index === self.length - 1 ? "col-span-2" : "col-span-1"}`}
            >
              <Image src={item} alt="company logo" />
            </div>
          );
        })}
      </div>

      <div className="mt-16 flex flex-col items-center gap-4">
        <p className="p-2 border-[1px] border-brandy-punch uppercase">
          our story
        </p>

        <h2 className="uppercase text-4xl">
          meet <span className="text-brandy-punch">John</span>
        </h2>

        <div className="self-stretch p-8 relative grid grid-cols-1 md:grid-cols-3 justify-center">
          <div className="relative z-10 translate-y-2/3 md:translate-y-0 md:translate-x-2/3">
            <Image src={cameraMan1} alt="camera man" className="object-cover" />
          </div>
          <div className="relative z-30 py-4 px-2 grid place-items-center text-center text-xs border-[1px] border-brandy-punch bg-onyx">
            <p>
              From a media arts enthusiast at Westfield State to an acclaimed
              director at Surefire Creative Studios, John, nicknamed
              &quot;Golde&quot; by his team, has led a 15-year journey in
              filmmaking marked by creative innovation and a deep passion for
              visual storytelling. Under the mentorship of the late Jared
              Hancock, John mastered the craft of cinematic expression and led a
              team of creatives to new heights.
              <br />
              Today, John channels resilience and authenticity into every
              project, partnering with leading brands to create content that
              resonates and inspires. His mission? To honor a legacy of
              excellence and ignite the screen with stories that matter.
              <br />
              Join John on this transformative journey, where vision meets
              purpose, and every frame tells a story.
            </p>
          </div>
          <div className="relative z-20 -translate-y-2/3 md:translate-y-0 md:-translate-x-2/3">
            <Image src={cameraMan2} alt="camera man" className="object-cover" />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-4">
        <p className="p-2 border-[1px] border-brandy-punch uppercase">
          our work
        </p>

        <h2 className="uppercase text-4xl">
          cool <span className="text-brandy-punch">innovations</span>
        </h2>

        <div className="flex flex-col items-stretch gap-4">
          <div className="p-px grid grid-cols-4 gap-px bg-brandy-punch">
            {tags.map((item, index) => (
              <button
                key={`item-${index}`}
                className={`uppercase ${item === activeTag ? "bg-brandy-punch text-onyx" : "bg-gray-300 text-white"}`}
                onClick={() => handleTag(item)}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="p-px grid grid-cols-1 sm:grid-cols-3 gap-px">
            {brands.map((item, index) => {
              return (
                <div
                  key={`item-${index}`}
                  className="grid-rows-5 uppercase bg-onyx border-brandy-punch border-[1px]"
                >
                  <Image src={item.imgUrl} alt="" className="row-span-3" />
                  <div className="row-span-3 p-2">
                    <div className="flex flex-row justify-between">
                      <span>{item.tag}</span>
                      <span>{item.date}</span>
                    </div>
                    <p className="text-brandy-punch">{item.name}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mt-16 flex flex-col items-center gap-4">
        <p className="p-2 border-[1px] border-brandy-punch uppercase">
          our values
        </p>

        <div className="self-stretch grid grid-cols-3 gap-px bg-brandy-punch">
          {values.map((item, index) => (
            <div
              key={`item-${index}`}
              className="py-4 px-2 flex flex-col items-center gap-2 text-center bg-onyx"
            >
              <p className="uppercase text-brandy-punch">{item.title}</p>
              <p className="text-xs">{item.paragraph}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 flex flex-col items-center gap-4">
        <p className="p-2 border-[1px] border-brandy-punch uppercase">
          our process
        </p>

        <h2 className="uppercase text-4xl">
          crafting your <span className="text-brandy-punch">narrative</span>
        </h2>

        <p>
          Embarking on a storytelling journey with us is a kin to producing a
          captivating movie that resonates deeply with your audience. Here’s how
          our cinematic process unfolds, designed to spotlight the essence of
          your work through the lens of storytelling.
        </p>

        <div className="py-8 px-4 grid grid-cols-2 border-t-[1px] border-x-[1px] border-brandy-punch">
          <div className="self-center text-brandy-punch uppercase">
            <p>01.</p>
            <p>setting the scene.</p>
          </div>

          <p>
            We start by listening, setting the stage by delving into the heart
            of what you do. This discovery meeting helps lay the groundwork for
            us to understand and select the best narratives we will unfold.
          </p>
        </div>

        <div className="self-stretch p-px flex flex-col gap-px items-stretch uppercase bg-brandy-punch">
          <p className="px-4 py-2 bg-onyx">unlocking the narrative</p>
          <p className="px-4 py-2 bg-onyx">finding our stars</p>
          <p className="px-4 py-2 bg-onyx">the plot thickens</p>
          <p className="px-4 py-2 bg-onyx">beyond the screen</p>
        </div>
      </div>

      <div></div>
    </GeneralLayout>
  );
}
