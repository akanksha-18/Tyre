import React, { useState } from "react";
import Tyre from "../assets/tyre.jpg";

const TyreDealer = () => {
  // State to keep track of how many cards to show
  const [visibleItems, setVisibleItems] = useState(4);

  // Array of tyre data
  const tyres = [
    { size: "145/80 R12", price: "₹3,000", reviews: 320 },
    { size: "145/80 R13", price: "₹3,000", reviews: 320 },
    { size: "155/65 R13", price: "₹3,000", reviews: 320 },
    { size: "155/70 R13", price: "₹3,000", reviews: 320 },
    { size: "165/80 R14", price: "₹3,500", reviews: 250 },
    { size: "175/65 R15", price: "₹3,500", reviews: 250 },
    { size: "185/70 R14", price: "₹3,800", reviews: 150 },
    { size: "195/60 R15", price: "₹4,000", reviews: 100 },
   
  ];

  // Function to load more items
  const loadMoreItems = () => {
    setVisibleItems((prevItems) => prevItems + 4);
  };

  // Function to show fewer items
  const showLessItems = () => {
    setVisibleItems(4);
  };

  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold">Tyres sold by this Dealer</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
        {tyres.slice(0, visibleItems).map((tyre, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-md p-4 text-center flex justify-between items-center"
          >
            <div className="text-left">
              <h3 className="font-bold">Apollo</h3>
              <p className="text-gray-500">{tyre.size}</p>
              <p className="text-green-500">{tyre.price}</p>
              <p className="text-gray-500">Tubeless</p>
              <span className="text-yellow-500">4.0</span>{" "}
              <span>({tyre.reviews} Reviews)</span>
            </div>
            <img
              src={Tyre}
              alt="Tyre"
              className="w-24 h-40 object-contain ml-4"
            />
          </div>
        ))}
      </div>
      <div className="mt-4 text-center">
        {visibleItems < tyres.length ? (
          <button
            onClick={loadMoreItems}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Load More
          </button>
        ) : (
          <button
            onClick={showLessItems}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Show Less
          </button>
        )}
      </div>
    </div>
  );
};

export default TyreDealer;
