import React from "react";
import Image from "next/image";
import Link from "next/link";
import { capitalizeFirst } from "../utils/constent";
import ProgressiveImage from "./ProgressiveImage";

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};
interface Blog {
  title: string;
  cover?: {
    url: string;
    alternativeText: string;
  };
  description: string;
  author?: {
    name: string;
    updatedAt: string;
  };
  slug: string;
}

interface Props {
  data: Blog;
}

const SingleBlog = ({ data }: Props) => {
  return (
    <Link
      href={`/blogs/${data?.slug}`}
      className="block transition-all duration-300 w-full hover:-translate-y-2"
      prefetch
    >
      <div className="rounded-[15px] overflow-hidden mb-6">
        {data?.cover?.url ? (
          <ProgressiveImage
            src={
              data?.cover?.url.startsWith("http")
                ? data?.cover?.url
                : `https://admin.iillestfindsagency.com${data.cover.url}`
            }
            height={250}
            width={276}
            className="w-full h-full object-center object-cover"
            alt={`Image for ${data?.cover?.alternativeText || "default"}`}
            onError={(e) => {
              (e.target as HTMLImageElement).src = "/images/related-blog-1.jpg";
            }}
          />
        ) : (
          <Image
            src="/images/related-blog-1.jpg"
            height={175}
            width={276}
            className="w-full h-full object-center object-cover"
            alt={`Image for ${data?.cover?.alternativeText || "default"}`}
          />
        )}
      </div>
      <p className="inline-block text-[18px] font-medium bg-[#FAF5E3] border border-[#CFC8AE] rounded-[40px] px-4 py-[5px] mb-3">
        {data?.author?.updatedAt
          ? formatDate(data.author.updatedAt)
          : "12-05-2023"}
      </p>
      <h2 className="text-[20px] font-semibold text-[#222222] text-truncate-2">
        {capitalizeFirst(data?.title)}
      </h2>
    </Link>
  );
};

export default SingleBlog;
