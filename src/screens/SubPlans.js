import React from "react";

function SubPlans({ title, subtitle }) {
  return (
    <div className="flex py-2 px-2">
      <div className="flex w-full justify-between my-1 text-xs md:text-sm lg:opacity-80 hover:opacity-100">
        <div className="">
          <p>{title}</p>
          <span>{subtitle} </span>
        </div>

        <button className="bg-main px-3 py-2 rounded">Subscribe</button>
      </div>
    </div>
  );
}

export default SubPlans;
