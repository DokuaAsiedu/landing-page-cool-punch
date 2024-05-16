import { DefaultLayout } from "@/layouts/default-layout";
import { useMemo, useState } from "react";
import medal from "@/assets/images/medal.svg";
import avatar from "@/assets/images/avatar.svg";
import grid from "@/assets/images/grid.svg";
import groove from "@/assets/images/groove.svg";
import nav from "@/assets/images/nav.svg";
import navDark from "@/assets/images/nav-dark.svg";
import navYellow from "@/assets/images/nav-yellow.svg";
import devProfiles from "@/assets/images/dev-profiles.png";
import onboarding from "@/assets/images/onboarding.svg";
import Image from "next/image";

const JOB_CATEGORY = [
  {
    name: "IT & Development",
    category: "it",
    description: "Find Dev and IT professionals to scale your business.",
    jobs: [
      { icon: "", name: "Python Developer" },
      { icon: "", name: "MERN Stack Developer" },
      { icon: "", name: "Front End Developer" },
      { icon: "", name: "Data Scientist" },
      { icon: "", name: "Shopify Developer" },
      { icon: "", name: "Front End Developer" },
      { icon: "", name: "MERN Stack Developer" },
      { icon: "", name: "Front End Developer" },
      { icon: "", name: "Full Stack Developer" },
      { icon: "", name: "Front End Developer" },
      { icon: "", name: "Data Scientist" },
      { icon: "", name: "Python Developer" },
    ],
  },
  {
    name: "Design and Creative",
    category: "design",
    description: "Explore Creative individuals with a keen eye for detail.",
    jobs: [
      { icon: "", name: "UX Designer" },
      { icon: "", name: "Graphics Designer" },
      { icon: "", name: "Illustration Artist" },
      { icon: "", name: "Unreal Engine" },
      { icon: "", name: "Cinema 4D" },
      { icon: "", name: "UX Designer" },
      { icon: "", name: "Graphics Designer" },
      { icon: "", name: "Illustration Artist" },
      { icon: "", name: "Unreal Engine" },
      { icon: "", name: "Cinema 4D" },
      { icon: "", name: "UX Designer" },
      { icon: "", name: "Graphics Designer" },
    ],
  },
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
    <DefaultLayout>
      <div className="container py-32 flex flex-col items-center justify-center gap-4 text-center">
        <h2 className="text-4xl">
          Finding the right fit has never been easier
        </h2>

        <p>
          With our rigorous pre-vetting process, youll never have to worry about
          finding the ideal candidate ever again.
        </p>

        <div className="min-w-0 flex flex-col sm:flex-row items-stretch max-sm:gap-2 sm:border-[1px] sm:border-gray rounded-lg">
          <div className="flex items-stretch max-sm:border-[1px] max-sm:border-gray rounded-md">
            <span className="self-center px-1 text-start">Looking for</span>
            <input className="flex-1 min-w-0 p-2" placeholder="design |" />
          </div>
          <button className="min-w-0 grid place-items-center p-3 rounded-md bg-amber-400 text-black">
            <Image src={navDark} alt="search for talent button" />
          </button>
        </div>

        <div className="min-w-0 py-4 px-2 flex flex-col items-stretch gap-2 bg-gray-100 rounded-lg *:min-w-0">
          <div className="self-center flex gap-2 bg-gray-200 rounded-xl">
            {JOB_CATEGORY.map((item, index) => (
              <button
                key={`item-${index}`}
                className={`p-1 rounded-xl ${item.category === jobCat ? "bg-tea-green" : "bg-gray-200"}`}
                onClick={() => setJobCat(item.category)}
              >
                {item.name}
              </button>
            ))}
          </div>

          <div className="overflow-x-auto">
            <div className="box-border grid grid-cols-3 gap-x-28 text-start">
              {jobRoles.map((item, index) => (
                <p key={`item-${index}`}>{item}</p>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="py-32 bg-purple-100 -skew-y-3">
        <div className="container flex flex-col items-stretch justify-center gap-8 skew-y-3">
          <h2 className="self-stretch text-4xl">
            Your one-stop marketplace for finding the talent your business
            needs.
          </h2>

          {JOB_CATEGORY.map((item, index) => (
            <div key={`item-${index}`} className="grid lg:grid-cols-2 gap-4">
              <div className="self-center flex flex-col gap-4 text-start">
                <h3 className="text-2xl">{item.description}</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 justify-items-start">
                  <div className="flex gap-2">
                    <Image src={medal} alt="medal icon" height={16} />
                    <span>989 Skills</span>
                  </div>

                  <div className="flex gap-2">
                    <Image src={grid} alt="grid icon" height={16} />
                    <span>45 Subcategories</span>
                  </div>

                  <div className="flex gap-2">
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
                          className="p-2 flex flex-col items-center"
                        >
                          <div className="w-4/5 bg-gray-200 rounded-full aspect-square"></div>
                          <p className="text-center">{elem.name}</p>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="grid grid-cols-2 justify-items-start">
            <p>Explore More</p>
            <p>
              <span className="font-bold">30 More</span> to explore
            </p>
          </div>
        </div>
      </div>

      <div className="py-32 bg-baltic-sea -skew-y-3 text-white">
        <div className="container grid sm:grid-cols-2 gap-4 skew-y-3">
          <div className="grid gap-2">
            <h2 className="text-3xl">How it worked for Jason at groove</h2>

            <p>
              Zwilt enabled us to deliver on time and they’ve been heavy hitters
              in our corner since.
            </p>

            <div className="flex gap-2">
              <button className="p-2 bg-white text-black rounded-lg">
                Next
              </button>
              <button className="p-2 bg-white text-black rounded-lg">
                Previous
              </button>
            </div>
          </div>

          <div>
            <div className="flex items-stretch gap-2">
              <Image src={groove} alt="groove logo" height={72} />

              <div>
                <h5>Jason Makki</h5>
                <p>Engineer at GROOVE</p>
                <p>San Francisco</p>
              </div>
            </div>

            <p>
              Zwilt enabled us to deliver on time and they’ve been heavy hitters
              in our corner since. Zwilt enabled us to deliver on time and
              they’ve been heavy hitters in our corner since.Zwilt enabled us to
              deliver on time and they’ve been heavy hitters.
            </p>
          </div>
        </div>
      </div>

      <div className="py-32">
        <div className="container grid md:grid-cols-2">
          <div className="grid gap-4">
            <h2 className="text-4xl">How we ensure youre in good hands.</h2>
            <p>
              With our comprehensive screening process, we hand-pick highly
              skilled candidates so you can onboard them in a matter of days.
            </p>

            <div className="grid gap-2">
              {[1, 2, 3, 4, 5].map((item, index) => (
                <details
                  key={`item-${index}`}
                  className="p-2 border-[1px] border-gray-100 rounded-md"
                >
                  <summary>{`Step ${index + 1}: Resume Screening`}</summary>
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
          <h2 className="text-4xl text-center">Start your journey.</h2>

          <div className="grid gap-2">
            {[1, 2, 3].map((item, index) => (
              <div
                key={`item-${index}`}
                className="-skew-y-3 bg-purple-50 rounded-lg overflow-hidden"
              >
                <div className="flex items-center justify-between skew-y-3">
                  <div className="px-4 py-12 sm:py-16 box-content flex gap-2">
                    <span>{index + 1}</span>

                    <div className="grid gap-2">
                      <h5 className="text-xl">
                        Find your next star performer.
                      </h5>

                      <p>
                        Explore the vast Zwilt marketplace to find the candidate
                        that meets your needs.
                      </p>

                      <button className="flex gap-2">
                        <div className="p-2 bg-black text-white rounded-lg">
                          <Image src={nav} alt="navigate button" height={12} />
                        </div>
                        <span>Join Now</span>
                      </button>
                    </div>
                  </div>

                  <Image
                    src={devProfiles}
                    alt="grid of sample dev profiles"
                    className="max-md:hidden -mt-8"
                  />
                </div>
              </div>
            ))}
          </div>
          {/* </div> */}
        </div>
      </div>

      <div className="py-32 bg-gradient-to-t from-purple-50 -skew-y-3">
        <div className="container flex gap-8 skew-y-3 overflow-x-auto">
          <div className="flex-[0_0_50%] py-16 flex flex-col gap-4 text-start">
            <h2 className="text-4xl">Why choose Zwilt?</h2>
            <p>
              We take complex hiring processes - and simplify them. Connecting
              you to the world’s highly qualified talent pool.
            </p>
          </div>

          {[1, 2, 3].map((item, index) => (
            <div
              key={`item-${index}`}
              className="flex-[0_0_80%] container grid md:grid-cols-2 bg-white rounded-lg"
            >
              <div className="flex flex-col justify-center gap-4 text-start">
                <h2 className="text-4xl">Onboard without the risk</h2>
                <p>
                  We take complex hiring processes - and simplify them.
                  Connecting you to the world’s highly qualified talent pool.
                </p>
              </div>

              <Image
                src={onboarding}
                alt="random image"
                className="max-md:hidden"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="py-32 text-center bg-aqua-haze -skew-y-3">
        <div className="flex flex-col gap-4 skew-y-3">
          <h2 className="text-4xl">Frequently asked questions</h2>

          <div className="grid">
            {[1, 2, 3, 4, 5, 6].map((item, index) => (
              <button
                key={`item-${index}`}
                className="py-4 border-t-[1px] last:border-b-[1px] border-gray-100"
              >
                How does payment work?
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="relative pt-16 bg-black text-white -skew-y-3 origin-top-left">
        <div className="absolute top-0 left-0 w-full h-full z-10 skew-y-3 origin-top-left bg-black" />

        <div className="relative z-20 container py-8 skew-y-3 grid gap-16">
          <div className="container py-32 flex flex-col items-center bg-dusky-blue -skew-y-3">
            <div className="grid gap-4 skew-y-3">
              <h2 className="text-4xl">
                Need a job done, and done well? Get started
              </h2>

              <form className="flex flex-col gap-8">
                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="flex gap-2 border-b-[1px] border-gray">
                    <span className="self-center">Enter your</span>
                    <input
                      className="flex-1 p-2 min-w-0 bg-transparent"
                      placeholder="name |"
                    />
                  </div>

                  <div className="flex gap-2 border-b-[1px] border-gray">
                    <span className="self-center">Enter your</span>
                    <input
                      className="flex-1 p-2 min-w-0 bg-transparent"
                      placeholder="email |"
                    />
                  </div>

                  <div className="sm:col-span-2 flex gap-2 border-b-[1px] border-gray">
                    <input
                      className="flex-1 p-2 bg-transparent placeholder-shown:text-center"
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

          <div className="grid gap-4">
            <div className="grid gap-8">
              <div>
                <div className="flex gap-2">
                  <h5 className="text-2xl">zwilt</h5>
                  <Image src={navYellow} alt="nav" />
                </div>

                <p>
                  We take complex hiring processes - and simplify them.
                  Connecting you to the world’s highly qualified talent pool.
                </p>
              </div>

              <div>
                <div className="grid">
                  <p className="uppercase">Links and redirects</p>
                  <div className="flex gap-4">
                    <button className="py-2 px-8 bg-gray-200/20 rounded-full">
                      Hire now
                    </button>
                    <button className="py-2 px-8 bg-gray-200/20 rounded-full">
                      Apply now
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-4xl">
                Connecting the right people to the right businesses.
              </h4>

              <div className="grid grid-cols-4">
                {[1, 2, 3, 4].map((item, index) => (
                  <div key={`item-${index}`} className="grid gap-4">
                    <h6 className="uppercase text-gray-300">platform</h6>

                    <div className="grid gap-4">
                      {[1, 2, 3].map((elem, pos) => (
                        <span key={`pos-${elem}`}>Find work</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-20 py-2 skew-y-3 flex gap-2 border-t-[1px] border-gray-500">
          <span>All rights reserved by zwilt</span>
          <span className="ms-auto underline">Privacy Policy</span>
          <span className="underline">Terms and conditions</span>
        </div>
      </div>
    </DefaultLayout>
  );
}
