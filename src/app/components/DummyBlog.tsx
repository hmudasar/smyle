import React from "react";
import Image from "next/image";
import Link from "next/link";
import { capitalizeFirst } from "../utils/constent";
import ProgressiveImage from "./ProgressiveImage";

interface Blog {
  title: string;
  image: string;
  slug: string;
  date: string;
}

interface Props {
  data: Blog;
}

const DummyBlog = ({ data }: Props) => {
  return (
    <Link
      href={`/blogs${data?.slug}`}
      className="block transition-all duration-300 w-full group"
    >
      <div className="rounded-[15px] overflow-hidden mb-8">
        {data.image ? (
          <ProgressiveImage
            src={data.image}
            height={250}
            width={276}
            className="w-full h-full object-center object-cover"
            alt={`Image for ${data.title || "default"}`}
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
            alt={`Image for ${data.title || "default"}`}
          />
        )}
      </div>
      {data.date && (
        <p className="font-figtree inline-block text-[18px] font-medium bg-[#FAF5E3] border border-[#CFC8AE] rounded-[40px] px-4 py-[5px] mb-3">
          {data.date}
        </p>
      )}
      {data.title && (
        <h2 className="font-figtree text-[20px] font-semibold text-[#222222] text-truncate-2">
          {capitalizeFirst(data.title)}
        </h2>
      )}
    </Link>
  );
};

export default DummyBlog;
