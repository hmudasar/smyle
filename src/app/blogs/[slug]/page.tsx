// app/blogs/[slug]/page.tsx

"use client";
import {
  ChevronRight,
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
} from "@/app/SVG";
import Link from "next/link";
import { useParams } from "next/navigation";
import { data } from "../../data"; // adjust path to your data file
import React from "react";
import DummyBlog from "@/app/components/DummyBlog";
import ProgressiveImage from "@/app/components/ProgressiveImage";

const BlogDetail = () => {
  const { slug } = useParams(); // get slug from URL
  const blog = data.blogData.find((item) => item.slug === `/${slug}`);

  console.log(slug, "slug");
  console.log(data.blogData, "blog");
  console.log(blog, "single blog");
  if (!blog) {
    return (
      <section className="py-20 text-center">
        <h2 className="text-3xl font-semibold">Blog not found</h2>
      </section>
    );
  }

  return (
    <section className="blog-detail">
      {/* Breadcrumb */}
      <div className="banner bg-gradient pt-48 pb-24 pb-36 xl:pt-52 xl:pb-52 relative">
        <div className="mx-auto px-4 md:px-12 relative">
          <div className="mx-auto max-w-[1000px]">
            <ul className="flex justify-center items-center gap-2 mb-6">
              <li className="text-base text-[#151515] font-normal tracking-[0.48px]">
                <Link href="/">Home</Link>
              </li>
              <li>
                <ChevronRight />
              </li>
              <li className="text-base text-[#151515] font-normal tracking-[0.48px]">
                <Link href={`/blogs`}>Blogs</Link>
              </li>
              <li>
                <ChevronRight />
              </li>
              <li className="text-base text-[#151515] font-normal tracking-[0.48px]">
                Blog Detail
              </li>
            </ul>

            <div className="flex items-center justify-center">
              <p className="font-figtree inline-block text-[18px] font-medium bg-[#FAF5E3] border border-[#CFC8AE] rounded-[40px] px-4 py-[5px] mb-3">
                {blog.date}
              </p>
            </div>

            <div className="text-center">
              <h1 className="font-figtree text-[32px] sm:text-[40px] lg:text-[56px] xl:text-[62px] text-[#151515] tracking-[1.92px] lg:tracking-[0.62px] font-bold mb-4">
                {blog.title}
              </h1>
              <p className="text-[14px] lg:text-base">{blog.shortDesc}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="pb-24 lg:pt-24">
        <div className="mx-auto px-4 md:px-12 relative">
          <div className="overflow-hidden rounded-[24px] lg:rounded-[40px] h-[374px] lg:xl:h-[593px] xl:h-[630px] 2xl:h-[670px] bg-gray-200 mb-8">
            <ProgressiveImage
              src={blog.image}
              height={600}
              width={1400}
              className="w-full h-full object-center object-cover"
              alt={`Image for ${blog.title || "default"}`}
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  "/images/related-blog-1.jpg";
              }}
            />
          </div>
          <div className="blog-content">
            <h2>Why relationships stall (and how Smylo helps)</h2>
            <ul>
              <li>
                <b>Invisible expectations</b> → Smylo surfaces them as clear,
                doable actions.
              </li>
              <li>
                <b>Inconsistent effort</b> → Daily missions and streaks build
                rhythm.
              </li>
              <li>
                <b>Talking past each other</b> → Quick prompts and reflection
                questions nudge better conversations.
              </li>
              <li>
                <b>No feedback loop</b> → A smiley mood shows how your effort
                lands—day by day.
              </li>
            </ul>
            <hr />
            <h2>What is Smylo?</h2>
            <p>
              Smylo is a friendly AI bot that guides any partnership—romantic,
              family, or even professional—toward healthier habits. It suggests
              tasks, streaks, and tips, runs short daily missions, and tracks
              how your actions affect the relationship’s “smile.”
            </p>
            <h3>Core ideas</h3>
            <ul>
              <li>
                <b>Coach:</b> chat-based guidance that adapts to you.
              </li>
              <li>
                <b>Doable actions:</b> tiny tasks & streaks, not lectures.
              </li>
              <li>
                <b>Visible progress:</b> a daily mood smiley.
              </li>
              <li>
                <b>Playful rewards:</b> unlock new Smylo faces as you grow.
              </li>
            </ul>
            <h3>How Smylo works (in 3 steps)</h3>
            <ol>
              <li>Add your partner (or start solo)</li>
              <li>Answer quick questions so Smylo understands your styles</li>
              <li>Follow the daily loop</li>
              <li>
                Morning/evening: a few-minute mission (Question, Game, or Quiz)
              </li>
              <li>Needs (tasks): suggested or assigned between partners</li>
              <li>Streaks: keep it going with small rewards you choose</li>
              <li>Mood: see how effort shifts the smile</li>
            </ol>
            <hr />
          </div>
          <div className="flex md:justify-between items-center flex-wrap lg:flex-nowrap gap-8 py-8 border-b border-[#2B2B2B]">
            <div className="lg:flex items-center gap-6">
              <h3 className="text-[20px] text-[#151515] font-semibold tracking-[0.6px] leading-normal lg:mb-0 mb-5">
                Post Tags:
              </h3>
              <ul className="flex flex-wrap gap-2 md:gap-4 xl:gap-6">
                {blog.tags.map((tag, i) => (
                  <li
                    className="cursor-pointer px-4 py-[5px] rounded-[50px] text-lg font-medium bg-[#FAF5E3] border border-[#CFC8AE] text-[#585858]"
                    key={i}
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:flex items-center gap-6">
              <h3 className="text-[20px] text-[#151515] font-semibold tracking-[0.6px] leading-normal lg:mb-0 mb-5">
                Share this Blog
              </h3>
              <ul className="flex gap-6">
                <a href="#">
                  <Facebook />
                </a>
                <a href="#">
                  <Twitter />
                </a>
                <a href="#">
                  <LinkedIn />
                </a>
                <a href="#">
                  <Instagram />
                </a>
              </ul>
            </div>
          </div>
          <div className="py-8 text-center mb-12 mt-24">
            <h2 className="text-[24px] lg:text-[32px] font-bold mb-6">
              Ready to try tiny daily nudges that actually stick?
            </h2>
            <button className="bg-[#171717] border border-[#171717] text-white py-4 px-6 rounded-[50px] text-base font-medium">
              Get Started With Smylo
            </button>
          </div>
          <div className="lg:mb-24">
            <h2 className="text-[24px] lg:text-[32px] font-bold mb-12 lg:mb-6">
              Other blogs you may like
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-20 lg:gap-24 xl:gap-32 2xl:gap-36 3xl:gap-42 mb-24">
              {data.blogData
                .filter((item) => item.slug !== blog.slug) // remove current blog
                .slice(0, 3) // take only 3
                .map((item, i) => (
                  <DummyBlog data={item} key={i} />
                ))}
            </div>
            <div className="text-center">
              <Link
                href="/blogs"
                className="bg-[#171717] border border-[#171717] text-white py-4 px-6 rounded-[50px] text-base font-medium"
              >
                Explore More Blogs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetail;
