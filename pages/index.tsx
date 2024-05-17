import { GeneralLayout } from "@/layouts/general-layout";
import { useMemo, useState } from "react";
import medal from "@/assets/images/medal.svg";
import avatar from "@/assets/images/avatar.svg";
import grid from "@/assets/images/grid.svg";
import groove from "@/assets/images/groove.svg";
import grooveNoBg from "@/assets/images/groove-no-bg.svg";
import nav from "@/assets/images/nav.svg";
import navDark from "@/assets/images/nav-dark.svg";
import navBlue from "@/assets/images/nav-blue.svg";
import navYellow from "@/assets/images/nav-yellow.svg";
import devProfiles1 from "@/assets/images/dev-profiles-1.png";
import devProfiles2 from "@/assets/images/dev-profiles-2.png";
import devProfiles3 from "@/assets/images/dev-profiles-3.png";
import onboarding from "@/assets/images/onboarding1.png";
import play from "@/assets/images/play.svg";
import playLight from "@/assets/images/play-light.svg";
import devStack from "@/assets/images/dev-stack.gif";
import tileStack from "@/assets/images/tile-stack.svg";
import shopify from "@/assets/images/shopify.svg";
import dotNet from "@/assets/images/dot-net.svg";
import python from "@/assets/images/python.svg";
import figma from "@/assets/images/figma.svg";
import illustration from "@/assets/images/illustration.svg";
import magento from "@/assets/images/magento.svg";
import photoshop from "@/assets/images/photoshop.svg";
import unreal from "@/assets/images/unreal.svg";
import webflow from "@/assets/images/webflow.svg";
import cinema4d from "@/assets/images/cinema-4d.svg";
import jason from "@/assets/images/jason.png";
import Image from "next/image";

const JOB_CATEGORY = [
  {
    name: "IT & Development",
    category: "it",
    description: "Find Dev and IT professionals to scale your business.",
    jobs: [
      { icon: tileStack, name: "Data Scientist" },
      { icon: shopify, name: "Shopify Developer" },
      { icon: dotNet, name: "Dot Net Developer" },
      { icon: python, name: "Python Developer" },
      { icon: webflow, name: "Webflow Developer" },
      { icon: magento, name: "MERN Stack Developer" },
      { icon: tileStack, name: "Data Scientist" },
      { icon: magento, name: "Front End Developer" },
      { icon: magento, name: "Front End Developer" },
      { icon: magento, name: "Full Stack Developer" },
      { icon: magento, name: "Front End Developer" },
      { icon: magento, name: "Python Developer" },
    ],
  },
  {
    name: "Design and Creative",
    category: "design",
    description: "Explore Creative individuals with a keen eye for detail.",
    jobs: [
      { icon: figma, name: "UX Designer" },
      { icon: photoshop, name: "Graphics Designer" },
      { icon: illustration, name: "Illustration Artist" },
      { icon: unreal, name: "Unreal Engine" },
      { icon: cinema4d, name: "Cinema 4D" },
      { icon: figma, name: "UX Designer" },
      { icon: photoshop, name: "Graphics Designer" },
      { icon: illustration, name: "Illustration Artist" },
      { icon: unreal, name: "Unreal Engine" },
      { icon: cinema4d, name: "Cinema 4D" },
      { icon: figma, name: "UX Designer" },
      { icon: photoshop, name: "Graphics Designer" },
    ],
  },
];

const INTERVIEW_STEPS = [
  { header: "Resume Screening" },
  { header: "Video Interview" },
  { header: "Technical Evaluation" },
  { header: "Application Review" },
  { header: "Lets get to work" },
];

const PROCESS_STEPS = [
  {
    header: "Find your next star performer.",
    summary:
      "Explore the vast Zwilt marketplace to find the candidate that meets your needs.",
    navText: "Join Now",
    devProfileSrc: devProfiles1,
    color: "#C7BAE7",
  },
  {
    header: "Evaluate to your heart’s content.",
    summary:
      "Assess the candidate through work history, transparent tests and video interviews.",
    navText: "Browse More",
    devProfileSrc: devProfiles2,
    color: "#FFE19C",
  },
  {
    header: "Start building your team.",
    summary:
      "Onboard your candidate right away and start creating the next big thing.",
    navText: "Join Now",
    devProfileSrc: devProfiles3,
    color: "#C3C3C3",
  },
];

const WHY_CHOOSE_ZWILT = [
  {
    header: "Onboard without the risk.",
    points: [
      "We pick the best for you to select.",
      "Thousands of vetted candidates in dozens of categories.",
      "Risk-free resource swapping for the best fit.",
    ],
    image: onboarding,
    color: "#50589F",
  },
  {
    header: "An open book.",
    points: [
      "Easy and transparent one-to-one chat with candidates.",
      "Simple and convenient payment methods.",
      "Review past ratings.",
    ],
    image: onboarding,
    color: "#FFBE2E",
  },
  {
    header: "Stay in the loop.",
    points: [
      "Track your staff activity down to every minute with screenshots.",
      "Comprehensive timesheet data to process payments.",
      "Create projects to organize and assign tasks more effectively.",
    ],
    image: onboarding,
    color: "#C7F4C2",
  },
];

const FAQS = [
  "I want to work part-time, is that possible",
  "How long are the average projects?",
  "How does the payment works?",
  "How much can I earn?",
];

const QUICK_LINKS = [
  { header: "platform", links: ["Find work", "Find talent", "Categories"] },
  {
    header: "categories",
    links: ["Data Science", "IT & Networking", "Web & Mobile"],
  },
  { header: "help", links: ["FAQs", "Contact Us"] },
  { header: "get in touch", links: ["Instagram", "LinkedIn", "Twitter"] },
];

export default function Zwilt() {
  const [jobCat, setJobCat] = useState("it");

  const jobRoles = useMemo(() => {
    const match = JOB_CATEGORY.find((item) => item.category === jobCat);

    if (match) {
      return match.jobs.map((item) => item.name);
    }
    return [];
  }, [jobCat]);

  return (
    <GeneralLayout>
      <div className="container pt-32 pb-16 flex flex-col items-center justify-center gap-4 text-center">
        <h2 className="text-5xl font-bold">
          <span>Finding the right fit </span>
          <div className="inline align-text-top">
            <Image
              src={devStack}
              alt="gif of developer pics"
              unoptimized={true}
              width={48}
              className="inline"
            />
          </div>
          <span>
            has <br />
            never been easier.
          </span>
        </h2>

        <p className="text-vampire-grey">
          With our rigorous pre-vetting process, youll never have to worry about
          finding the ideal candidate ever again.
        </p>

        <div className="min-w-0 flex flex-col sm:flex-row items-stretch max-sm:gap-2 sm:border-[1px] sm:border-gray rounded-lg">
          <div className="flex items-stretch max-sm:border-[1px] max-sm:border-gray rounded-md">
            <span className="self-center px-1 text-start">Looking for</span>
            <input className="flex-1 min-w-0 p-2" placeholder="design |" />
          </div>
          <button className="min-w-0 grid place-items-center p-3 rounded-md bg-lightning-yellow text-black">
            <Image src={navDark} alt="search for talent button" />
          </button>
        </div>

        <div className="container min-w-0 py-4 px-2 flex flex-col items-stretch gap-2 bg-desert-storm rounded-lg">
          <div className="self-center flex gap-2 bg-aqua-haze rounded-xl">
            {JOB_CATEGORY.map((item, index) => (
              <button
                key={`item-${index}`}
                className={`p-1 sm:p-3 rounded-xl box-border ${item.category === jobCat ? "bg-tea-green font-bold" : ""}`}
                onClick={() => setJobCat(item.category)}
              >
                {item.name}
              </button>
            ))}
          </div>

          <div className="px-2 overflow-x-auto grid place-items-center">
            <div className="grid grid-cols-[repeat(3,_max-content)] gap-x-16 gap-y-2 text-start ">
              {jobRoles.map((item, index) => (
                <p
                  key={`item-${index}`}
                  className="whitespace-nowrap text-mountain-mist"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="relative flex flex-col -skew-y-3">
        <div className="absolute -top-1 left-0 z-20 h-full w-full bg-gradient-to-r from-white from-[2%] via-transparent to-[98%] to-white" />

        {[1, 2, 3, 4].map((item, index, self) => {
          const calcHeight = 2 * (self.length - index);
          const calcMarginBottom = 2 * (index + 1);
          return (
            <div
              key={`item-${index}`}
              className={`relative z-10 bg-dusky-blue`}
              style={{ height: calcHeight, marginBottom: calcMarginBottom }}
            ></div>
          );
        })}
      </div>

      <div className="py-32 bg-titan-white -skew-y-3">
        <div className="container flex flex-col items-stretch justify-center gap-8 skew-y-3">
          <h2 className="self-stretch text-4xl font-bold text-center">
            Your one-stop marketplace for finding the talent your business
            needs.
          </h2>

          {JOB_CATEGORY.map((item, index) => (
            <div
              key={`item-${index}`}
              className="grid lg:grid-cols-[4fr_6fr] gap-y-4 gap-x-8"
            >
              <div className="self-center flex flex-col gap-4 text-start">
                <h3 className="text-xl">{item.description}</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 justify-items-start text-vampire-grey">
                  <div className="flex items-center gap-2">
                    <Image src={medal} alt="medal icon" height={16} />
                    <span>989 Skills</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Image src={grid} alt="grid icon" height={16} />
                    <span>45 Subcategories</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Image src={avatar} alt="avatar icon" height={16} />
                    <span>1011 Profiles</span>
                  </div>
                </div>
              </div>

              <div className="p-2 flex flex-col gap-4 bg-white rounded-md">
                <div>
                  <h4>{item.name}</h4>

                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 text-xs">
                    {item.jobs
                      .filter((elem, index) => index < 6)
                      .map((elem, pos) => (
                        <div
                          key={`elem-${pos}`}
                          className="p-2 flex flex-col items-center gap-2"
                        >
                          <div className="w-4/5 grid place-items-center bg-gray-200 rounded-full aspect-square">
                            <Image
                              src={elem.icon}
                              alt="icon"
                              className="h-3/5 object-contain"
                            />
                          </div>
                          <p className="text-center font-bold">{elem.name}</p>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="grid lg:grid-cols-[4fr_6fr] gap-x-8 items-center justify-items-start">
            <div className="flex items-center gap-2">
              <button className="p-4 bg-black rounded-xl">
                <Image src={nav} alt="explore more button" />
              </button>

              <p>Explore More</p>
            </div>
            <p>
              <span className="font-bold">30 More</span> to explore
            </p>
          </div>
        </div>
      </div>

      <div className="py-56 bg-baltic-sea -skew-y-3 text-white">
        <div className="container grid sm:grid-cols-2 gap-y-4 skew-y-3">
          <div className="sm:w-3/5 grid gap-2">
            <h2 className="text-5xl font-bold">
              <div>
                <span>How it worked for Jason </span>

                <div className="inline-block rounded-full overflow-hidden">
                  <Image
                    src={jason}
                    alt="groove logo"
                    height={48}
                    className="h-full w-full "
                  />
                </div>

                <span> at </span>
              </div>

              <div className="inline">
                <Image
                  src={grooveNoBg}
                  alt="groove logo"
                  height={32}
                  className="inline"
                />
              </div>
            </h2>

            <p className="text-grey-goose">
              Zwilt enabled us to deliver on time and they’ve been heavy hitters
              in our corner since.
            </p>

            <div className="flex gap-3">
              <button className="py-4 px-3 bg-white text-black rounded-xl">
                <Image
                  src={navBlue}
                  alt="groove logo"
                  width={20}
                  className=" rotate-180"
                />
              </button>
              <button className="py-4 px-3 bg-white text-black rounded-xl">
                <Image src={navBlue} alt="groove logo" width={20} />
              </button>
            </div>
          </div>

          <div className="sm:w-4/5 flex flex-col justify-between">
            <div className="flex items-stretch gap-2">
              <Image src={groove} alt="groove logo" height={84} />

              <div>
                <h5 className="text-3xl">Jason Makki</h5>

                <p className="text-storm-dust">
                  <span>Engineer at </span>
                  <span className="text-friar-grey">GROOVE</span>
                </p>

                <p className="text-friar-grey">San Francisco</p>
              </div>
            </div>

            <p className="text-grey-goose">
              Zwilt enabled us to deliver on time and they’ve been heavy hitters
              in our corner since. Zwilt enabled us to deliver on time and
              they’ve been heavy hitters in our corner since.Zwilt enabled us to
              deliver on time and they’ve been heavy hitters.
            </p>
          </div>
        </div>
      </div>

      <div className="py-32">
        <div className="container grid lg:grid-cols-2">
          <div className="grid gap-4">
            <h2 className="text-5xl">How we ensure you’re in good hands.</h2>
            <p>
              With our comprehensive screening process, we hand-pick highly
              skilled candidates so you can onboard them in a matter of days.
            </p>

            <div className="grid gap-2">
              {INTERVIEW_STEPS.map((item, index) => (
                <details
                  key={`item-${index}`}
                  className="p-2 group marker:hidden border-[1px] border-gray-100 rounded-md"
                >
                  <summary className="p-4 flex items-center gap-4">
                    <div className="p-4 aspect-square inline-grid place-items-center rounded-full bg-dawn-pink group-open:bg-lavendar-blue">
                      <Image
                        src={play}
                        alt="groove logo"
                        height={12}
                        className="group-open:hidden"
                      />
                      <Image
                        src={playLight}
                        alt="groove logo"
                        height={12}
                        className="group-[&:not([open])]:hidden"
                      />
                    </div>
                    <p>
                      <span className="font-bold">Step {`${index + 1}`}:</span>
                      <span> {item.header}</span>
                    </p>
                  </summary>
                  Candidates are assessed through skill based questions in a
                  virtual setting. Allowing you to gauge personality and
                  cultural fit.
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="py-32">
        <div className="container grid gap-12">
          {/* <div className="grid gap-4"> */}
          <h2 className="text-5xl text-center font-bold">
            Start your journey.
          </h2>

          <div className="grid gap-8">
            {PROCESS_STEPS.map((item, index) => (
              <div
                key={`item-${index}`}
                style={{ backgroundColor: `${item.color}50` }}
                className="-skew-y-3 rounded-lg overflow-hidden"
              >
                <div className="flex items-center justify-between skew-y-3">
                  <div className="px-4 py-12 box-content flex gap-2">
                    <div className="self-start min-w-max">
                      <h3
                        style={{
                          backgroundImage: `linear-gradient(to bottom, ${item.color}, transparent 99%)`,
                        }}
                        className="text-5xl bg-clip-text text-transparent"
                      >
                        {index + 1}
                      </h3>
                    </div>

                    <div className="grid gap-2">
                      <h3 className="text-3xl font-bold">{item.header}</h3>

                      <p>{item.summary}</p>

                      <button className="flex gap-2">
                        <div className="p-2 bg-black text-white rounded-lg">
                          <Image src={nav} alt="navigate button" height={12} />
                        </div>
                        <span>{item.navText}</span>
                      </button>
                    </div>
                  </div>

                  <Image
                    src={item.devProfileSrc}
                    width={500}
                    alt="grid of sample dev profiles"
                    className="max-md:hidden -mt-8"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="pb-32 bg-gradient-to-t from-catskill-white -skew-y-3">
        <div className="container grid grid-flow-col auto-cols-max gap-4 skew-y-3 overflow-x-auto">
          <div className="self-center w-3/5 py-32 flex flex-col gap-4 text-start">
            <h2 className="text-4xl font-bold">Why choose Zwilt?</h2>
            <p className="text-storm-grey">
              We take complex hiring processes - and simplify them. Connecting
              you to the world’s highly qualified talent pool.
            </p>
          </div>

          {WHY_CHOOSE_ZWILT.map((item, index) => (
            <div
              key={`item-${index}`}
              className="container grid md:grid-cols-[repeat(2,max-content)] bg-white rounded-lg"
            >
              <div className="pt-32 flex flex-col gap-4 text-start">
                <h2 className="text-4xl font-bold">{item.header}</h2>
                <div className="grid gap-2">
                  {item.points.map((elem, pos) => (
                    <div
                      key={`item-${pos}`}
                      className="flex gap-3 text-vampire-grey"
                    >
                      <span
                        style={{ color: `${item.color}` }}
                        className="font-bold"
                      >
                        &#x2014;
                      </span>
                      <span>{elem}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Image
                src={item.image}
                alt="random image"
                className="max-md:hidden"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="py-32 text-center bg-aqua-haze -skew-y-3">
        <div className="flex flex-col gap-4 skew-y-3">
          <h2 className="text-5xl font-bold">Frequently asked questions</h2>

          <div className="grid">
            {FAQS.map((item, index) => (
              <button
                key={`item-${index}`}
                className="py-4 border-t-[1px] last:border-b-[1px] text-vampire-grey border-gray-100 hover:font-bold hover:bg-lavendar-mist"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="relative pt-16 bg-racing-green text-white -skew-y-3 origin-top-left">
        <div className="absolute top-0 left-0 w-full h-full z-10 skew-y-3 origin-top-left bg-racing-green" />

        <div className="relative z-20 container py-8 skew-y-3 grid gap-16">
          <div className="container py-32 flex flex-col items-center bg-dusky-blue -skew-y-3">
            <div className="grid gap-4 skew-y-3">
              <h2 className="text-4xl font-bold">
                Need a job done, and done well? Get started
              </h2>

              <form className="flex flex-col gap-8">
                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="flex gap-2 border-b-[1px] border-gray">
                    <span className="self-center">Enter your</span>
                    <input
                      className="flex-1 p-2 min-w-0 bg-transparent placeholder-shown:text-dull-lavendar"
                      placeholder="name |"
                    />
                  </div>

                  <div className="flex gap-2 border-b-[1px] border-gray">
                    <span className="self-center">Enter your</span>
                    <input
                      className="flex-1 p-2 min-w-0 bg-transparent placeholder-shown:text-dull-lavendar"
                      placeholder="email |"
                    />
                  </div>

                  <div className="sm:col-span-2 flex gap-2 border-b-[1px] border-gray">
                    <input
                      className="flex-1 p-2 bg-transparent placeholder-shown:text-dull-lavendar placeholder-shown:text-center"
                      placeholder="Enter your message |"
                    />
                  </div>
                </div>

                <button className="self-center p-4 bg-black text-white rounded-xl">
                  <Image src={nav} alt="submit form button" />
                </button>
              </form>
            </div>
          </div>

          <div className="grid lg:grid-cols-[4fr,6fr] gap-4">
            <div className="grid gap-8">
              <div className="grid gap-4">
                <div className="flex gap-2">
                  <h5 className="text-2xl font-bold">zwilt</h5>
                  <Image src={navYellow} alt="nav" />
                </div>

                <p className="text-sm text-santa-grey">
                  We take complex hiring processes - and simplify them.
                  Connecting you to the world’s highly qualified talent pool.
                </p>
              </div>

              <div>
                <div className="grid gap-3">
                  <p className="uppercase text-storm-grey text-sm">
                    Links and redirects
                  </p>
                  <div className="flex gap-4">
                    <button className="py-2 px-4 sm:px-8 bg-gray-200/20 rounded-full text-sm">
                      Hire now
                    </button>
                    <button className="py-2 px-4 sm:px-8 bg-gray-200/20 rounded-full text-sm">
                      Apply now
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-8">
              <h4 className="text-4xl font-bold">
                Connecting the right people to the right businesses.
              </h4>

              <div className="grid grid-cols-[repeat(4,max-content)] justify-between gap-6 overflow-x-auto">
                {QUICK_LINKS.map((item, index) => (
                  <div key={`item-${index}`} className="flex flex-col gap-4">
                    <h6 className="uppercase text-storm-grey text-sm">
                      {item.header}
                    </h6>

                    <div className="grid gap-4 whitespace-nowrap">
                      {item.links.map((elem, pos) => (
                        <span key={`pos-${pos}`}>{elem}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="container relative z-20 py-2 skew-y-3 flex max-sm:flex-col gap-2 border-t-[1px] border-gray-500 text-xs">
          <span>All rights reserved by zwilt</span>
          <span className="sm:ms-auto underline text-mountain-mist">
            Privacy Policy
          </span>
          <span className="underline text-mountain-mist">
            Terms and conditions
          </span>
        </div>
      </div>
    </GeneralLayout>
  );
}
