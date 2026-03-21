import { useState } from "react";

function Train() {
  const filters = ["Services", "Age", "Batch", "Coach Only", "Academy Only"];

  const trainers = [
    {
      id: 1,
      name: "Pooja Kumari",
      location: "Bhopal, Bhopal, Madhya Pradesh, India",
      ageGroup: "Adults & Kids",
      interest: "1 showed Interest",
      badges: ["+1 More"],
      isNew: true,
      images: ["pooja.avif", "poojakumari.avif"],
    },
    {
      id: 2,
      name: "Dipanshu Doshi",
      location: "Bhopal, Bhopal, Madhya Pradesh, India",
      ageGroup: "Adults",
      interest: "3 showed Interest",
      badges: ["+3 More"],
      isNew: true,
      images: ["deepanshu1.webp", "deepanshu2.webp"],
    },
    {
      id: 3,
      name: "Indrajeet Singh Bhadauriya",
      location: "Bhopal, Bhopal, Madhya Pradesh, India",
      ageGroup: "Adults",
      interest: "4 showed Interest",
      badges: [],
      isNew: true,
      images: ["indrajeet1.avif", "indrajeet2.webp"],
    },
  ];

  return (
    <div className="min-h-screen bg-[#f3f5f4] px-6 py-10">
      <div className="mx-auto max-w-7xl">
        {/* Filters */}
        <div className="mb-10 flex flex-wrap gap-3">
          {filters.map((item, index) => (
            <button
              key={index}
              className="flex items-center gap-3 rounded-[18px] border border-[#d9dfdc] bg-white px-7 py-4 text-[18px] font-medium text-[#273847] shadow-sm"
            >
              <span className="text-[18px] text-[#4b5a58]">
                {item === "Services" && "🎯"}
                {item === "Age" && "🧍"}
                {item === "Batch" && "🪟"}
                {item === "Coach Only" && "◻"}
                {item === "Academy Only" && "🗂"}
              </span>
              <span>{item}</span>
              {item !== "Coach Only" && item !== "Academy Only" && (
                <span className="text-[14px] text-[#4b5a58]">⌄</span>
              )}
            </button>
          ))}
        </div>

        {/* Trainer Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {trainers.map((trainer) => (
            <div
              key={trainer.id}
              className="rounded-[22px] border border-[#dbe1de] bg-white p-5 shadow-[0_10px_25px_rgba(0,0,0,0.06)]"
            >
              {/* Top Row */}
              <div className="mb-7 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d9dfdc] text-[18px] text-[#36454f]">
                    🏋
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d9dfdc] text-[18px] text-[#36454f]">
                    ⚽
                  </div>
                  {trainer.badges.length > 0 && (
                    <span className="text-[16px] font-medium text-[#263646]">
                      {trainer.badges[0]}
                    </span>
                  )}
                </div>

                {trainer.isNew && (
                  <span className="rounded-[12px] bg-[#3e4a44] px-4 py-2 text-[16px] font-semibold text-white">
                    ★ New
                  </span>
                )}
              </div>

              {/* Image Grid */}
              <div className="mb-7 grid grid-cols-2 gap-4">
                <div className="relative overflow-hidden rounded-[16px]">
                  <img
                    src={trainer.images[0]}
                    alt={trainer.name}
                    className="h-[165px] w-full object-cover"
                  />
                  <span className="absolute bottom-3 left-3 rounded-[10px] bg-white px-4 py-1 text-[14px] font-semibold text-[#263646] shadow-sm">
                    TRAINER
                  </span>
                </div>

                <div className="overflow-hidden rounded-[16px]">
                  <img
                    src={trainer.images[1]}
                    alt={trainer.name}
                    className="h-[165px] w-full object-cover"
                  />
                </div>
              </div>

              {/* Details */}
              <h2 className="text-[22px] font-bold text-[#263646]">
                {trainer.name}
              </h2>

              <p className="mt-3 text-[15px] text-[#334654]">
                {trainer.location}
              </p>

              <div className="mt-7 flex items-center gap-3 text-[16px] text-[#2f4351]">
                <span className="text-[#1dc46b]">👥</span>
                <span>{trainer.ageGroup}</span>
              </div>

              {/* Button */}
              <button className="mt-9 w-full rounded-[20px] border border-[#d5dbd8] bg-white py-4 text-[17px] font-semibold tracking-wide text-[#263646] shadow-[0_5px_0_0_#d6dcd9] transition hover:translate-y-[1px] hover:shadow-[0_3px_0_0_#d6dcd9]">
                INSTANT CONNECT 🚀
              </button>

              <p className="mt-4 text-center text-[15px] text-[#667583]">
                {trainer.interest}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Train;