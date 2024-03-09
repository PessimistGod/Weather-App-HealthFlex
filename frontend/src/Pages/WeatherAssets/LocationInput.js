import React from "react";
import { FiSearch } from "react-icons/fi";
import { MdMyLocation } from "react-icons/md";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const LocationInput = ({
  searchLocation,
  setSearchLocation,
  handleSearch,
  setLocation,
}) => {
  const handleLocationClick = () => {
    setSearchLocation("");
    setLocation(null);
    setTimeout(handleSearch, 100);
  };

  const navigate = useNavigate()
  return (
    <div className="mt-4 items-center justify-around w-[98%] flex p-2 mb-5 sticky top-[5px]">
      <div className="flex justify-center items-center mr-1 mt-1 hover:cursor-pointer" onClick={()=>navigate(-1)}>
      <IoMdArrowRoundBack size={25}/>
      </div>
      <input
        className="font-bold rounded-full w-[80%] py-4 pl-6 text-gray-700 bg-gray-100 leading-tight focus:outline-none focus:shadow-outline lg:text-sm text-xs shadow-lg"
        type="text"
        placeholder="Enter Your Location"
        value={searchLocation}
        onChange={(e) => setSearchLocation(e.target.value)}
      />
      <div onClick={handleSearch}>
        <div className="md:p-3 p-2 mr-1 flex items-center md:gap-2 bg-gray-100 rounded-full hover:bg-gray-900 cursor-pointer hover:text-white text-black">
          <FiSearch size={18} /> <span className="hidden md:block">Search</span>
        </div>
      </div>
      <div onClick={handleLocationClick}>
        <div className="hover:bg-gray-900 md:p-3 p-2 bg-gray-100 hover:text-white text-black cursor-pointer mx-2 rounded-full flex items-center md:gap-2">
          <MdMyLocation size={18} /> <span className="hidden md:block">Location</span> 
        </div>
      </div>
    </div>
  );
};

export default LocationInput;
