import React from "react";
import Navbar from "./Navbar";
import shop from "../assets/shop.png";
import mrf from "../assets/mrf.png";
import jk from "../assets/jk.png";
import ceat from "../assets/ceat.png";
import apollo from "../assets/apollo.png";
import bridge from "../assets/bridge.png";
import goodyear from "../assets/goodyear.png";
import wheel1 from "../assets/wheel1.png";
import wheel2 from "../assets/wheel2.png";
import TyreDealer from "./TyreDeal";
import QuestionSection from "./QuestionSection";
import Footer from "./Footer";
import Payment from "./Payment";

const TyreShop = () => {
  return (
    <>
      <Navbar />
      {/* Parent Container */}
      <div className="pt-20 p-4 max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="bg-white shadow-md rounded-md p-4 max-w-6xl mx-auto">
      {/* Image and Info Section */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4">
        <img
          src={shop} 
          alt="Tyre Shop"
          className="w-full md:w-32 h-32 object-cover rounded-md mb-4 md:mb-0"
        />
        <div className="md:ml-4 flex-1">
          <h1 className="text-xl md:text-2xl font-bold">
            SHREE HEMKUNT TYRES AND SERVICES
          </h1>
          <div className="flex items-center my-2">
            <span className="flex text-yellow-500">
              {Array.from({ length: 5 }).map((_, index) => (
                <svg
                  key={index}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .587l3.668 7.431 8.2 1.192-5.932 5.779 1.4 8.165-7.336-3.857-7.336 3.857 1.4-8.165-5.932-5.779 8.2-1.192z" />
                </svg>
              ))}
            </span>
            <span className="text-gray-500 ml-2 text-sm md:text-base">
              4.9 (2278 Reviews)
            </span>
          </div>
          <p className="text-gray-700 text-sm md:text-base">
            PLOT NUMBER-09 GROUND FLOOR CISF CAMPUS ROAD, AHINSA KHAND-02
            INDIRAPURAM, Ghaziabad, Uttar Pradesh, 201014
          </p>
          <p className="text-gray-500 text-sm md:text-base">
            Open - Monday to Sunday - 10:00 AM to 8:00 PM
          </p>
        </div>
      </div>
      <div className="flex justify-end mt-4">
        <button className="bg-transparent border-2 border-red-500 text-red-500 px-4 py-2 rounded hover:bg-red-500 hover:text-white transition duration-200">
          Get Directions
        </button>
      </div>

      {/* Review Section */}
      <h2 className="text-xl font-bold mt-6">Google Reviews</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        <div className="bg-white shadow-md rounded-md p-4">
          <h3 className="font-semibold">Md Nasir</h3>
          <p className="text-sm">
            Excellent service from start to finish. 100% satisfaction with the
            job...
          </p>
        </div>
        <div className="bg-white shadow-md rounded-md p-4">
          <h3 className="font-semibold">Rohit Bhati</h3>
          <p className="text-sm">
            Went for Tyre change. Ultimate service by shoppe boys...
          </p>
        </div>
        <div className="bg-white shadow-md rounded-md p-4">
          <h3 className="font-semibold">Pradeep Kumar</h3>
          <p className="text-sm">
            Best tyre shop in Indirapuram. Good dealing with customer...
          </p>
        </div>
      </div>
    </div>

        {/* Deal In Section */}
        <div className="mt-6 bg-white shadow-md rounded-md p-4">
          <h2 className="text-lg font-bold">Deal In</h2>
          <div className="flex gap-4 mt-4 flex-wrap">
            <div className="bg-white shadow-md rounded-md p-4 w-40 text-center">
              <img
                src={mrf}
                alt="MRF"
                className="w-full h-24 object-contain mb-2"
              />
              <p className="text-lg">MRF</p>
            </div>

            <div className="bg-white shadow-md rounded-md p-4 w-40 text-center">
              <img
                src={jk}
                alt="JK"
                className="w-full h-24 object-contain mb-2"
              />
              <p className="text-lg">JK</p>
            </div>

            <div className="bg-white shadow-md rounded-md p-4 w-40 text-center">
              <img
                src={bridge}
                alt="BridgeStone"
                className="w-full h-24 object-contain mb-2"
              />
              <p className="text-lg">BridgeStone</p>
            </div>

            <div className="bg-white shadow-md rounded-md p-4 w-40 text-center">
              <img
                src={goodyear}
                alt="Goodyear"
                className="w-full h-24 object-contain mb-2"
              />
              <p className="text-lg">Goodyear</p>
            </div>

            <div className="bg-white shadow-md rounded-md p-4 w-40 text-center">
              <img
                src={ceat}
                alt="CEAT"
                className="w-full h-24 object-contain mb-2"
              />
              <p className="text-lg">CEAT</p>
            </div>

            <div className="bg-white shadow-md rounded-md p-4 w-40 text-center">
              <img
                src={apollo}
                alt="Apollo"
                className="w-full h-24 object-contain mb-2"
              />
              <p className="text-lg">Apollo</p>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="mt-6 bg-white shadow-md rounded-md p-4">
          <h2 className="text-xl font-bold">Services offered by this dealer</h2>
          <div className="flex gap-4 mt-4 flex-wrap">
            <div className="bg-white shadow-md rounded-md p-4 w-56 text-center">
              <img
                src={wheel1}
                alt="Apollo"
                className="w-full h-24 object-contain mb-2"
              />
              <p className="text-md font-semibold">Wheel Balancing</p>
              <button className="mt-2 bg-red-500 text-white px-4 py-2 rounded">
                Book Now
              </button>
            </div>
            <div className="bg-white shadow-md rounded-md p-4 w-56 text-center">
              <img
                src={wheel2}
                alt="Apollo"
                className="w-full h-24 object-contain mb-2"
              />
              <p className="text-md font-semibold">Wheel Alignment</p>
              <button className="mt-2 bg-red-500 text-white px-4 py-2 rounded">
                Book Now
              </button>
            </div>
          </div>
        </div>
        <TyreDealer />
        <Payment />
        <QuestionSection />
        <Footer />
      </div>
    </>
  );
};

export default TyreShop;
