import { useRouter } from "next/dist/client/router";
import React, { useEffect } from "react";
function NavBar({ data }) {
  const router = useRouter();
  return (
    <div className="relative">
      <div
        className="
    flex px-10 sm:px-20 text-2xl whitespace-nowrap 
    space-x-10 sm:space-x-20 overflow-x-scroll 
    scrollbar-hide"
      >
        {data.map((e) => {
          return (
            <h3
              key={e.id}
              onClick={() => {
                router.push(`/?genre=${e.name}&page=1`);
              }}
              className="
            last:pr-24
            cursor-pointer 
            transition duration-100
            hover:scale-125 hover:text-white
            active:text-red-500
            "
            >
              {e.name}
            </h3>
          );
        })}
      </div>
      <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12" />
    </div>
  );
}

export default NavBar;
