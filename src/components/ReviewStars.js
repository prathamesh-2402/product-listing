import React, { useState } from "react";
import { UisStar } from "@iconscout/react-unicons-solid";
import { UilStar } from "@iconscout/react-unicons";

const ReviewStars = ({stars, size}) => {
  // const [stars, setStars] = useState(5);
  const totalStars = [];
  const finalStar = () => {
    for (let i = 1; i <= stars; i++) {
      totalStars.push(<UisStar color="#FFCB45" size={size} />);
    }
    for (let i = 1; i <= 5 - stars; i++) {
      totalStars.push(<UilStar color="#FFCB45" size={size} />);
    }
  };
  finalStar();

  return (
    <div className="flex">
      {totalStars.map((each) => {
        return each;
      })}
    </div>
  );
};

export default ReviewStars;
