import React from "react";

const Coindiv = ({ coin }) => {
  return (
    <div className="flex justify-between p-4 border-[2px] gap-4 border-black rounded-lg m-2 my-4 shadow-lg">
      <div className="flex justify-between gap-4  items-center mobile:w-7/12 tablet:w-1/2">
        <img
          src={coin?.image}
          className="w-[10%] mobile:w-1/4 small-device:w-[20%] tablet:w-[10%]   rounded-full border-[2px] border-black  aspect-square"
          alt=""
        />
        <div className=" text-lg w-1/3 mobile:hidden mobile:w-1/2 tablet:block tablet:w-1/3 large-device:text-3xl">
          {coin?.symbol.toUpperCase()}
        </div>
        <h1 className=" text-2xl w-1/3 font-bold font-mono text-left mobile:w-3/4 mobile:text-base small-device:text-lg tablet:w-1/3 tablet:text-xl large-device:text-3xl">
          {coin?.name}
        </h1>
      </div>
      <div className="flex justify-center  gap-4 items-center mobile:w-5/12 tablet:w-1/2 ">
        <div className="w-1/2 text-center text-lg font-bold mobile:text-base mobile:text-right mobile:w-full tablet:text-lg tablet:text-center tablet:w-1/2 desktop:text-xl large-device:text-2xl">
          ₹ {coin?.current_price}
        </div>
        <div className="w-1/2 text-center text-lg font-mono mobile:text-sm mobile:hidden tablet:text-lg tablet:block desktop:text-xl large-device:text-2xl">
          {coin?.total_volume}
        </div>
      </div>
    </div>
  );
};

export default Coindiv;
