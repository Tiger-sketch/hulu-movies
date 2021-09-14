import React from "react";
function HeaderIcon({ title, Icon }) {
  return (
    <div className="flex flex-col items-center cursor-pointer w-12 group hover:text-white">
      <Icon className="h-8 mb-2 group-hover:animate-bounce" />
      <p className="tracking-widest opacity-0 group-hover:opacity-100">{title}</p>
    </div>
  );
}

export default HeaderIcon;
