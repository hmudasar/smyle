// ContactUs.tsx
import React from "react";
import { EmailIcon, LocationIcon, PhoneIcon } from "../SVG";
import Breadcrumb from "../components/Breadcrumb";

const contactUsData = [
  {
    name: "Call us",
    link: "(406) 555-0120",
    icon: <PhoneIcon />,
  },
  {
    name: "Make a quote",
    link: "info@smyl.com",
    icon: <EmailIcon />,
  },
  {
    name: "Location",
    link: "6391 Elgin St. Celina",
    icon: <LocationIcon />,
  },
];

const ContactUs = async () => {
  return (
    <section>
      <Breadcrumb heading="Contact Us" pageName="Contact Us" />
      <div className="py-16 md:py-18 lg:py-20 mb-0">
        <div className="mx-auto px-4 md:px-12 relative">
          <div className="grid lg:grid-cols-2 md:gap-24 lg:gap-36 xl:gap-44 3xl:gap-48">
            <div className="hidden md:block">
              <div className="">
                <h2 className="font-semibold text-[24px] lg:text-[28px] leading-[1.4] text-[#151515] mb-3">
                  Feel Free To Get in Touch!
                </h2>

                <div className="py-6 max-w-[337px]">
                  {contactUsData.map((data, i) => (
                    <div
                      className="flex gap-2 items-center [&:not(:last-child)]:mb-8 lg:[&:not(:last-child)]:mb-10"
                      key={i}
                    >
                      <div className="flex-none">{data.icon}</div>
                      <div>
                        <a
                          href={
                            data.name === "Call us"
                              ? `tel:4065550120`
                              : data.name === "Make a quote"
                              ? `mailto:${data.link}`
                              : ""
                          }
                          className="block text-[18px] font-[400] leading-[1.4] text-[#151515]"
                        >
                          {data.link}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-[#F4EFDA] py-8 px-4 rounded-[16px] border border-[#BBB7A9] -mt-40 md:mt-0">
              <div className="">
                <form>
                  <div className="grid md:grid-cols-2 gap-12 mb-6">
                    <div className="border-b border-black relative">
                      <input
                        type="text"
                        placeholder="Name"
                        className="w-full relative z-1 py-4 text-base bg-transparent focus:outline-none placeholder-black text-black"
                      />
                    </div>
                    <div className="border-b border-black relative">
                      <input
                        type="email"
                        placeholder="Email"
                        className="w-full relative z-1 py-4 text-base bg-transparent focus:outline-none placeholder-black text-black"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-12 mb-6">
                    <div className="border-b border-black relative">
                      <input
                        type="text"
                        placeholder="Phone No."
                        className="w-full relative z-1 py-4 text-base bg-transparent focus:outline-none placeholder-black text-black"
                      />
                    </div>
                    <div className="border-b border-black relative">
                      <input
                        type="text"
                        placeholder="Subject"
                        className="w-full relative z-1 py-4 text-base bg-transparent focus:outline-none placeholder-black text-black"
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="border-b border-black relative">
                      <textarea
                        className="w-full relative z-1 py-4 text-base bg-transparent focus:outline-none placeholder-black text-black"
                        rows={4}
                        placeholder="Your Message*"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 md:gap-6 xl:gap-10 pt-6">
                    <button className="bg-[#171717] border border-[#171717] text-white py-4 px-6 rounded-[50px] text-base font-medium">
                      Send Message
                    </button>
                    <button className="bg-transparent border border-[#171717] text-[#171717] py-4 px-6 rounded-[50px] text-base font-medium">
                      Clear All
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="py-32">
            <div className="rounded-[24px] overflow-hidden h-[323px] md:h-[460px] lg:h-[520px] xl:h-[580px] 2xl:h-[690px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3407.0139793348244!2d74.1835347761502!3d31.35859345511599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391855f87cbefb61%3A0xe1065f5d5dde321d!2sThe%20Cube!5e0!3m2!1sen!2s!4v1756577490294!5m2!1sen!2s"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
