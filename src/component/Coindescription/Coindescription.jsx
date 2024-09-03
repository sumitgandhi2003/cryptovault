import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { cryptoCoindetail } from "../utility/constant";
import { apiKey } from "../utility/constant";
import "./Coindescription.css";

const Coindescription = () => {
  const [coinDetail, setCoinDetail] = useState();

  const { id } = useParams();
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": apiKey,
      },
    };

    fetch(cryptoCoindetail + id, options)
      .then((response) => response.json())
      .then((response) => setCoinDetail(response))
      .catch((err) => console.error(err));
  }, [id]);

  coinDetail && (document.title = "CryptoVault - " + coinDetail?.name);
  return coinDetail ? (
    <div className="coin-detail-container w-full p-[30px] ">
      <div className="top-container w-[80%] gap-[5%] flex justify-between items-center mobile:flex-col mobile:w-full tablet:flex-row tablet:w-[80%]">
        <img
          src={coinDetail?.image?.large}
          className="image-container w-1/3 border-[3px] border-black mobile:w-[80%] mobile:m-auto tablet:w-1/3 "
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/300x400";
          }}
          alt={coinDetail?.name}
        />

        <div className="coin-description w-2/3 text-2xl font-semibold font-mono mobile:w-full mobile:my-4 mobile:text-base tablet:m-0 tablet:2/3 tablet:text-lg desktop:text-2xl">
          <div className="w-full ">
            <div className="w-full flex p-1">
              <div className=" text-left mobile:w-[45%] tablet:w-1/3">Name</div>
              <div className=" text-left mobile:w-[55%] tablet:w-2/3 ">
                {coinDetail?.name}
              </div>
            </div>
            <div className="w-full flex p-1">
              <div className="text-left mobile:w-[45%] tablet:w-1/3 ">
                Symbol
              </div>
              <div className=" text-left mobile:w-[55%] tablet:w-2/3 ">
                {coinDetail?.symbol.toUpperCase()}
              </div>
            </div>
            <div className="w-full flex p-1">
              <div className=" text-left mobile:w-[45%] tablet:w-1/3 ">
                Price
              </div>
              <div className=" text-left mobile:w-[55%] tablet:w-2/3  ">
                ₹{coinDetail?.market_data?.current_price?.inr}/-
              </div>
            </div>
            <div className="w-full flex p-1">
              <div className=" text-left mobile:w-[45%] tablet:w-1/3 ">
                Total Volume
              </div>
              <div className=" text-left mobile:w-[55%] tablet:w-2/3">
                {coinDetail?.market_data?.total_volume?.inr}
              </div>
            </div>
            {coinDetail?.links?.homepage[0] && (
              <div className="w-full flex p-1">
                <div className=" text-left mobile:w-[45%] tablet:w-1/3 ">
                  Website
                </div>
                <div className=" text-left mobile:w-[55%] tablet:w-2/3">
                  <a
                    href={coinDetail?.links?.homepage[0]}
                    rel="noreferrer"
                    target="_blank"
                  >
                    Homepage
                  </a>
                </div>
              </div>
            )}
            <div className="w-full flex justify-between p-1 text-sm">
              <div className="w-1/2 flex gap-2 text-left text-[#ff524c] ">
                <div className="w-1/3">Low:</div>
                <div className="w-2/3">
                  {coinDetail?.market_data?.low_24h.inr}
                </div>
              </div>
              <div className="w-1/2 flex gap-2 text-left text-[#1fd895]">
                <div className="w-1/3">High:</div>
                <div className="w-2/3">
                  {coinDetail?.market_data?.high_24h?.inr}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {coinDetail?.description?.en && (
        <div className="middle-container font-mono m-auto">
          <h2 className="text-2xl my-4 font-semibold ">
            About {coinDetail?.name}
          </h2>
          <p
            className="description mobile:text-sm tablet:text-xl"
            dangerouslySetInnerHTML={{ __html: coinDetail?.description?.en }}
          >
            {}
          </p>
        </div>
      )}
      <div className="bottom-container font-mono mt-4 mobile:text-lg laptop:text-xl">
        <h2 className="text-2xl font-semibold my-4 ">
          Data Analysis of {coinDetail?.name}
        </h2>
        <div className=" ">
          <p className="coin-price-change  ">
            Price Changes in Day{" "}
            <span
              className={`${
                coinDetail?.market_data?.price_change_24h_in_currency?.inr < 0
                  ? "text-[#ff524c]"
                  : "text-[#1fd895]"
              } font-bold`}
            >
              ₹
              {coinDetail?.market_data?.price_change_24h_in_currency?.inr?.toFixed(
                5
              )}
              /-
            </span>
          </p>
          <p className="market-capital-change">
            Market Capital Changes in Day{" "}
            <span
              className={`${
                Math.floor(coinDetail?.market_data?.market_cap_change_24h) < 0
                  ? "text-[#ff524c]"
                  : "text-[#1fd895]"
              } font-bold`}
            >
              {coinDetail?.market_data?.market_cap_change_24h}
            </span>
          </p>
          <p>
            Market Rank:{" "}
            <span className="font-bold">{coinDetail?.market_cap_rank}</span>
          </p>
        </div>
      </div>
    </div>
  ) : (
    <div class="flex justify-center items-center h-screen">
      <div class="w-16 h-16  border-t-4 border-black rounded-full animate-spin"></div>
    </div>
  );
};

export default Coindescription;
