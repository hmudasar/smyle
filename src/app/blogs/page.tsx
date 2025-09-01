"use client";
import React, { useEffect, useMemo, useState } from "react";
import Breadcrumb from "../components/Breadcrumb";
import { data } from "../data";
import DummyBlog from "../components/DummyBlog";
import {
  ChevronDown,
  ChevronRight,
  DoubleChevronLeft,
  DoubleChevronRight,
  FilterIcon,
  SearchIcon,
} from "../SVG";

const Blogs = () => {
  const blogData = data.blogData;

  const [searchTerm, setSearchTerm] = useState("");

  const [isOpenFilter, setIsOpenFilter] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const [pendingSearch, setPendingSearch] = useState("");
  const [pendingCategory, setPendingCategory] = useState<string | null>(null);
  const [pendingTag, setPendingTag] = useState<string | null>(null);

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 4;

  const categories = useMemo(
    () => Array.from(new Set(blogData.map((item) => item.category))),
    [blogData]
  );

  const tags = useMemo(
    () => Array.from(new Set(blogData.flatMap((item) => item.tags))),
    [blogData]
  );

  const filteredBlogs = useMemo(() => {
    return blogData.filter((blog) => {
      const matchSearch =
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.tags.some((t) =>
          t.toLowerCase().includes(searchTerm.toLowerCase())
        );

      const matchCategory = selectedCategory
        ? blog.category === selectedCategory
        : true;

      const matchTag = selectedTag ? blog.tags.includes(selectedTag) : true;

      return matchSearch && matchCategory && matchTag;
    });
  }, [blogData, searchTerm, selectedCategory, selectedTag]);

  const totalPages = Math.ceil(filteredBlogs.length / postsPerPage);
  const paginatedBlogs = filteredBlogs.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategory, selectedTag]);

  const handleFilterNow = () => {
    setSearchTerm(pendingSearch);
    setSelectedCategory(pendingCategory);
    setSelectedTag(pendingTag);
  };

  const handleClearAll = () => {
    setPendingSearch("");
    setPendingCategory(null);
    setPendingTag(null);
    setSearchTerm("");
    setSelectedCategory(null);
    setSelectedTag(null);
  };

  return (
    <React.Fragment>
      <section className="blogs">
        <Breadcrumb heading="Blogs" pageName="Blogs" />
        <div className="py-12 xl:py-24">
          <div className="mx-auto px-4 md:px-12 relative">
            <div className="flex flex-col-reverse lg:grid lg:grid-cols-[2fr_1fr] gap-8 lg:gap-12 xl:gap-16">
              <div className="lg:grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16">
                {paginatedBlogs.length > 0 ? (
                  paginatedBlogs.map((data, i: number) => (
                    <DummyBlog data={data} key={i} />
                  ))
                ) : (
                  <p className="col-span-2 text-center text-gray-600">
                    No blogs found.
                  </p>
                )}

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="col-span-2 flex justify-center gap-2 mt-8">
                    {/* First Page */}
                    <button
                      onClick={() => setCurrentPage(1)}
                      disabled={currentPage === 1}
                      className="w-[37.561px] h-[37.561px] disabled:opacity-50 bg-[#FAF5E3] border border-[#CFC8AE] rounded-full flex items-center justify-center"
                    >
                      <DoubleChevronLeft />
                    </button>

                    {/* Previous Page */}
                    <button
                      onClick={() =>
                        setCurrentPage((prev) => Math.max(1, prev - 1))
                      }
                      disabled={currentPage === 1}
                      className="rotate-180 w-[37.561px] h-[37.561px] disabled:opacity-50 bg-[#FAF5E3] border border-[#CFC8AE] rounded-full flex items-center justify-center"
                    >
                      <ChevronRight />
                    </button>

                    {/* Page Numbers */}
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                      (page) => (
                        <button
                          key={page}
                          onClick={() => setCurrentPage(page)}
                          className={`w-[37.561px] h-[37.561px] text-[#434343] font-semibold bg-[#FAF5E3] border border-[#CFC8AE] rounded-full flex items-center justify-center ${
                            page === currentPage
                              ? "bg-[#FFE566] border-[#FFE566]"
                              : ""
                          }`}
                        >
                          {page}
                        </button>
                      )
                    )}

                    {/* Next Page */}
                    <button
                      onClick={() =>
                        setCurrentPage((prev) => Math.min(totalPages, prev + 1))
                      }
                      disabled={currentPage === totalPages}
                      className="w-[37.561px] h-[37.561px] disabled:opacity-50 bg-[#FAF5E3] border border-[#CFC8AE] rounded-full flex items-center justify-center"
                    >
                      <ChevronRight />
                    </button>

                    {/* Last Page */}
                    <button
                      onClick={() => setCurrentPage(totalPages)}
                      disabled={currentPage === totalPages}
                      className="w-[37.561px] h-[37.561px] disabled:opacity-50 bg-[#FAF5E3] border border-[#CFC8AE] rounded-full flex items-center justify-center"
                    >
                      <DoubleChevronRight />
                    </button>
                  </div>
                )}
              </div>

              <div className="-mt-24 lg:mt-0">
                <div className="bg-[#F4EFDA] border border-[#BBB7A9] rounded-[16px] p-4">
                  {/* Search */}
                  <div className="flex gap-4">
                    <form
                      onSubmit={(e) => e.preventDefault()}
                      className="flex justify-between items-center border-b border-black w-full"
                    >
                      <input
                        value={pendingSearch}
                        onChange={(e) => setPendingSearch(e.target.value)}
                        placeholder="Search"
                        className="border-0 bg-transparent focus:outline-none py-4 px-2 text-black placeholder-black tracking-[0.48px] w-full"
                      />
                      <button className="w-[20px] flex-none">
                        <SearchIcon />
                      </button>
                    </form>
                    <button
                      className="flex items-center gap-2  border-b border-black lg:hidden"
                      onClick={() => setIsOpenFilter(!isOpenFilter)}
                    >
                      <FilterIcon />
                      <ChevronDown />
                    </button>
                  </div>
                  <div
                    className={`transition-all duration-500 overflow-hidden 
    ${isOpenFilter ? "max-h-[672px] opacity-100" : "max-h-0 opacity-0"} 
    lg:max-h-none lg:opacity-100 lg:overflow-visible`}
                  >
                    {/* Categories */}
                    <div className="py-5 px-2 border-b border-black">
                      <h4 className="text-base text-black font-[400] mb-5">
                        Category
                      </h4>
                      <ul className="flex gap-4 flex-wrap">
                        {categories.map((cat) => (
                          <li
                            key={cat}
                            onClick={() =>
                              setPendingCategory(
                                pendingCategory === cat ? null : cat
                              )
                            }
                            className={`cursor-pointer px-4 py-[5px] rounded-[50px] text-lg font-medium ${
                              pendingCategory === cat
                                ? "bg-[#FFE566] border border-[#FFE566]"
                                : "bg-[#FFFDF5] border border-[#CFC8AE] text-[#585858]"
                            }`}
                          >
                            {cat}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tags */}
                    <div className="py-5 px-2 border-b border-black">
                      <h4 className="text-base text-black font-[400] mb-5">
                        Tags
                      </h4>
                      <ul className="flex gap-4 flex-wrap">
                        {tags.map((tag) => (
                          <li
                            key={tag}
                            onClick={() =>
                              setPendingTag(pendingTag === tag ? null : tag)
                            }
                            className={`cursor-pointer px-4 py-[5px] rounded-[50px] text-lg font-medium ${
                              pendingTag === tag
                                ? "bg-[#FFE566] border border-[#FFE566]"
                                : "bg-[#FFFDF5] border border-[#CFC8AE] text-[#585858]"
                            }`}
                          >
                            {tag}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Buttons */}
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 xl:gap-10 pt-6">
                      <button
                        onClick={handleFilterNow}
                        className="inline-flex justify-center bg-[#171717] border border-[#171717] text-white py-4 px-6 rounded-[50px] text-base font-medium overflow-hidden relative group transition-all duration-600 ease"
                      >
                        <div className="translate-y-0 transition group-hover:-translate-y-[150%]">
                          Filter Now
                        </div>
                        <div className="absolute translate-y-[150%] transition group-hover:translate-y-0">
                          Filter Now
                        </div>
                      </button>
                      <button
                        onClick={handleClearAll}
                        className="inline-flex justify-center bg-transparent border border-[#171717] text-[#171717] py-4 px-6 rounded-[50px] text-base font-medium overflow-hidden relative group transition-all duration-600 ease"
                      >
                        <div className="translate-y-0 transition group-hover:-translate-y-[150%]">
                          Clear All
                        </div>
                        <div className="absolute translate-y-[150%] transition group-hover:translate-y-0">
                          Clear All
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Blogs;
