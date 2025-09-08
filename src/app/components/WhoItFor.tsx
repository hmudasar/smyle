import React from "react";

const WhoItFor = () => {
  const categories = [
    "Husband",
    "Father",
    "Wife",
    "Boyfriend",
    "Son",
    "Girlfriend",
    "Best Friend",
    "Mother",
    "Daughter",
    "Nephew",
    "Niece",
    "Uncle",
    "Brother in Law",
    "Sister In Law",
    "Sister In Law",
    "Mentor",
    "Manager",
    "Colleague",
    "Boss",
    "Friend",
    "Friend",
    "Roommate",
    "Close Friend",
  ];

  const getBackgroundColor = (index: number) => {
    const colors = ["#FFE566", "#FAF5E3", "#FFF2B3"];
    return colors[index % colors.length];
  };

  return (
    <section className="py-36">
      <div className="text-center mb-16">
        <h1 className="font-figtree font-bold text-[48px] tracking-[1.44px] text-[#151515] mb-4">
          Who it&apos;s For
        </h1>
      </div>
      <div className="flex flex-wrap justify-center gap-4 px-4">
        {categories.map((category, index) => (
          <div
            key={index}
            style={{
              padding: "16px 24px",
              borderRadius: "56px",
              color: "#151515",
              textAlign: "center",
              fontFamily: "Figtree",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: "500",
              lineHeight: "normal",
              letterSpacing: "0.48px",
              backgroundColor: getBackgroundColor(index),
            }}
          >
            {category}
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhoItFor;
