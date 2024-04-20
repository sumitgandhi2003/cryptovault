import React, { useEffect, useState } from "react";
import { cryptoListApi, apiKey } from "../utility/constant";
import Coindiv from "../Coindiv/Coindiv";
import { Link } from "react-router-dom";
const Coincard = () => {
  const [coinList, setCoinList] = useState();
  const handleChange = (e) => {
    const filter = e.target.value;
    if (filter === "high-low") {
      setCoinList((coin) =>
        coin.slice().sort((a, b) => b.current_price - a.current_price)
      );
    } else {
      setCoinList((coin) =>
        coin.slice().sort((a, b) => a.current_price - b.current_price)
      );
    }
  };

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": apiKey,
      },
    };
    fetch(cryptoListApi, options)
      .then((response) => response.json())
      .then((response) =>
        response.sort((a, b) => b.current_price - a.current_price)
      )
      .then((response) => setCoinList(response));
  }, []);

  return coinList ? (
    <div>
      <div className="flex justify-between gap-4 p-4 m-2">
        <div className="w-1/2 flex justify-start gap-4 items-center mobile:w-full tablet:w-1/2">
          <div className="text-2xl w-1/2 font-bold mobile:text-xl  small-device:text-2xl tablet:text-3xl desktop:text-4xl large-device:text-5xl">
            All Coins
          </div>
          <div className=" text-white w-1/2 mobile:text-sm  mobile:text-right tablet:text-left">
            <select
              name=""
              id=""
              className="bg-black text-white p-2 rounded-md text-xl  mobile:text-xs small-device:text-base tablet:text-lg desktop:text-xl large-device:text-2xl"
              onChange={(e) => handleChange(e)}
            >
              <option value="high-low">High-to-Low</option>
              <option value="low-high">Low-to-High</option>
            </select>
          </div>
        </div>
        <div className="flex justify-center w-[50%] gap-4 items-center mobile:hidden tablet:flex">
          <div className="w-1/2 text-center font-bold text-xl mobile:text-lg tablet:text-xl desktop:text-2xl large-device:text-3xl">
            Price
          </div>
          <div className="w-1/2 text-center font-bold text-xl mobile:text-lg tablet:text-xl desktop:text-2xl large-device:text-3xl">
            Volume
          </div>
        </div>
      </div>
      <div className="Coin-section">
        {coinList &&
          coinList?.map((coin) => {
            return (
              <Link to={"/coins/" + coin?.id} key={coin?.id}>
                <Coindiv coin={coin} />
              </Link>
            );
          })}
      </div>
    </div>
  ) : (
    <div class="flex justify-center items-center h-screen">
      <div class="w-16 h-16  border-t-4 border-black rounded-full animate-spin"></div>
    </div>
  );
};

export default Coincard;
