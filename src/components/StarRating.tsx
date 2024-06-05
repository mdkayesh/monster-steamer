import React from "react";
import { IoMdStar } from "react-icons/io";
import { IoMdStarOutline } from "react-icons/io";

const StarRating = ({ num }: { num: number }) => {
  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, i) => (
        <div className="text-primary-blue" key={i}>
          {num <= i ? <IoMdStarOutline /> : <IoMdStar />}
        </div>
      ))}
    </div>
  );
};

export default StarRating;
