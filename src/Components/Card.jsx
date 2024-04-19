import React from "react";

const Card = ({ imageUrl, name, oldPrice, newPrice, url }) => {
  return (
    <a
      className="max-w-[270px] rounded-xl overflow-hidden shadow-xl"
      href={url}
      target="_blank"
    >
      <img className=" w-full" src={imageUrl} alt={name} />
      <div className="px-6 py-4">
        <div className="font-bold text-sm">{name}</div>
        <div className="flex justify-between items-center">
          {oldPrice && (
            <span className="text-gray-700 text-lg line-through">
              ${oldPrice}
            </span>
          )}
          <span className="text-green-500 font-bold text-xl">${newPrice}</span>
        </div>
      </div>
    </a>
  );
};

export default Card;
