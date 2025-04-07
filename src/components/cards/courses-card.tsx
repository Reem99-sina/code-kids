import React from "react";

interface CourseProps {
  image: string;
  title: string;
  rating: number;
  reviews: number;
  price: number;
  oldPrice?: number;
  ageRange: string;
  duration: string;
}

export const CoursesCard: React.FC<CourseProps> = ({
  image,
  title,
  rating,
  reviews,
  price,
  oldPrice,
  ageRange,
  duration,
}) => {
  return (
    <div className="max-w-[312px] min-w-[312px]  bg-white rounded-2xl shadow-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-2xl text-start font-bold text-gray-900">{title}</h3>
        <div className="flex items-center text-yellow-500 text-sm mt-1">
          ⭐ {rating} <span className="text-gray-500 ml-1">({reviews})</span>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <span className="text-pink-600 font-bold text-lg">EGP {price}</span>
          {oldPrice && (
            <span className="text-gray-400 line-through text-sm">
              EGP {oldPrice}
            </span>
          )}
        </div>
        <div className="flex gap-3 mt-3">
          <div className="bg-gray-100 text-gray-700 px-3 py-1 rounded-md text-sm">
            {ageRange} <span className="text-xs">Ages</span>
          </div>
          <div className="bg-gray-100 text-gray-700 px-3 py-1 rounded-md text-sm">
            {duration} <span className="text-xs">Min</span>
          </div>
        </div>
        <div className="flex justify-start">
          <button className="mt-4 w-full bg-yellow-400 text-white  rounded-full  max-w-[186px] font-semibold hover:bg-yellow-500 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
