import { Metadata } from "next";
import React, { Suspense } from "react";
import ClientBlogs from "./ClientBlogs";
export const metadata: Metadata = {
  title: "Blogs - Smile",
  description: "",
};
const Blogs = () => {
  return (
    <Suspense fallback={<p>Loading ...</p>}>
      <ClientBlogs />
    </Suspense>
  );
};

export default Blogs;
