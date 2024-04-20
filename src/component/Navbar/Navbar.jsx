import { useState } from "react";
// import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import Hamburger from "../Hamburger/Hamburger";
const Navbar = () => {
  const [islogin, setIsLogin] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const handleLogin = () => {
    setIsLogin(!islogin);
  };
  const handleMenuToggle = (e) => {
    setIsShow(!isShow);
  };
  return (
    <div className="navbar w-full flex justify-between items-center p-4 h-24 bg-blue-950 text-white sticky top-0">
      <div className="logo font-bold text-2xl">Crypto Vault</div>
      <div
        className={`links flex justify-between  items-center gap-4 mr-4  text-lg mobile:block mobile:top-24 mobile:left-0 mobile:absolute mobile:w-full mobile:p-4 mobile:bg-blue-950 mobile:${
          isShow ? "block" : "hidden"
        } tablet:relative tablet:flex tablet:top-0 tablet:w-max tablet:p-0`}
      >
        <div className="cursor-pointer mobile:border-b-2  tablet:border-0 border-white p-2 hover:bg-blue-700">
          Home
        </div>
        <div className="cursor-pointer mobile:border-b-2 tablet:border-0 border-white p-2 hover:bg-blue-700">
          About
        </div>
        <div className="cursor-pointer  p-2 hover:bg-blue-700">Contact</div>
        <div
          className="cursor-pointer p-2 bg-blue-800 rounded-md"
          onClick={() => handleLogin()}
        >
          {islogin ? "Logout" : "Login"}
        </div>
      </div>
      <Hamburger onclick={handleMenuToggle} isshow={isShow} />
      {/* <IoMenu
          fill="white"
          className="cursor-pointer w-full h-full fill-current"
          onClick={() => handleMenuToggle()}
        /> */}
    </div>
  );
};

export default Navbar;
