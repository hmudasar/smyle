"use client";

import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { apiURL } from "../utils/constent";
import SingleBlog from "./SingleBlog";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Mousewheel, Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper/types";

import "swiper/css";
import "swiper/css/mousewheel";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import DummyBlog from "./DummyBlog";
import Link from "next/link";

const blogData = [
  {
    image: "/images/new/blog.png",
    title: "How people are managing their current relation with spark",
    slug: "/blog-1",
    date: "12-05-2023",
  },
  {
    image: "/images/new/blog.png",
    title: "How people are managing their current relation with spark",
    slug: "/blog-2",
    date: "12-05-2023",
  },
  {
    image: "/images/new/blog.png",
    title: "How people are managing their current relation with spark",
    slug: "/blog-3",
    date: "12-05-2023",
  },
  {
    image: "/images/new/blog.png",
    title: "How people are managing their current relation with spark",
    slug: "/blog-4",
    date: "12-05-2023",
  },
  {
    image: "/images/new/blog.png",
    title: "How people are managing their current relation with spark",
    slug: "/blog-5",
    date: "12-05-2023",
  },
  {
    image: "/images/new/blog.png",
    title: "How people are managing their current relation with spark",
    slug: "/blog-6",
    date: "12-05-2023",
  },
];

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(`${apiURL}/articles?populate=*`);
        setBlogs(response.data.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);
  if (loading) {
    return <p>Loading ...</p>;
  }
  return (
    <section
      id="blog"
      className="py-14"
      aria-label="Expert Insights & Growth Strategies"
    >
      <div className="mx-auto px-4 md:px-12 relative">
        <header className="lg:flex max-w-full mb-0 mx-auto items-center lg:text-left text-center">
          <div className="lg:w-1/3">
            <h1 className="font-figtree text-primary text-[32px] lg:text-[36px] xl:text-[40px] 2xl:text-[44px] font-bold leading-normal tracking-[0.94px] lg:tracking-[1.44px] mb-3 xl:mb-5">
              Amazing Research
              <br /> News and Blogs
            </h1>
          </div>
          <div className="lg:w-1/3">
            <p className="text-[#747474] text-[16px] leading-normal font-[400]">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form.
            </p>
          </div>
        </header>

        <div className="my-12">
          <Swiper
            modules={[Autoplay, Mousewheel, Navigation]}
            freeMode={true}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            scrollbar={{ draggable: true }}
            breakpoints={{
              640: { slidesPerView: 1, spaceBetween: 0 },
              768: { slidesPerView: 2, spaceBetween: 16 },
              1024: { slidesPerView: 3, spaceBetween: 20 },
              1400: { slidesPerView: 3, spaceBetween: 32 },
              1600: { slidesPerView: 4, spaceBetween: 48 },
            }}
            onInit={(swiper) => {
              if (typeof swiper.params.navigation !== "boolean") {
                swiper.params.navigation!.prevEl = prevRef.current;
                swiper.params.navigation!.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }
            }}
            className="testimonial-slider"
          >
            {blogs.length > 1
              ? blogs?.slice(0, 6)?.map((data, i: number) => (
                  <SwiperSlide key={i}>
                    <SingleBlog data={data} />
                  </SwiperSlide>
                ))
              : blogData.map((data, i: number) => (
                  <SwiperSlide key={i}>
                    <DummyBlog data={data} />
                  </SwiperSlide>
                ))}
          </Swiper>
          <div className="absolute right-0 top-8 translate-x-[-50%] hidden lg:flex items-center p-2 justify-center gap-8 z-10">
            {/* Prev Button */}
            <button
              ref={prevRef}
              onClick={() => swiperRef.current?.slidePrev()}
              className="relative border border-dashed border-[#151515] group w-[48px] h-[48px] flex items-center justify-center rounded-full"
              aria-label="Previous"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="43"
                height="38"
                viewBox="0 0 43 38"
                fill="none"
                className="-me-6"
              >
                <path
                  d="M15.0031 9.7373L5.74072 18.9997L15.0031 28.262"
                  stroke="#151515"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M41.6 19L6.50366 19"
                  stroke="#151515"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Next Button */}
            <button
              ref={nextRef}
              onClick={() => swiperRef.current?.slideNext()}
              className="relative border border-dashed border-[#151515] group w-[48px] h-[48px] flex items-center justify-center rounded-full"
              aria-label="Next"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="43"
                height="38"
                viewBox="0 0 43 38"
                fill="none"
                className="-ms-6"
              >
                <path
                  d="M27.9969 9.7373L37.2593 18.9997L27.9969 28.262"
                  stroke="#151515"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1.40005 19L36.4963 19"
                  stroke="#151515"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          <Link
            href="/blogs"
            className="bg-button text-white px-5 py-4 text-base rounded-[50px] font-medium tracking-[0.48px]"
          >
            View All Blogs
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
