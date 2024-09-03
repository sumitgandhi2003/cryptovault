import { useState } from "react";
import { Link } from "react-router-dom";
import Hamburger from "../Hamburger/Hamburger";
const Navbar = () => {
  // const [islogin, setIsLogin] = useState(false);
  const [isShow, setIsShow] = useState(false);
  // const handleLogin = () => {
  //   setIsLogin(!islogin);
  // };
  const handleMenuToggle = (e) => {
    setIsShow(!isShow);
  };
  return (
    <div className="navbar w-full flex justify-between items-center p-4 h-24 z-50 bg-blue-950 text-white sticky top-0">
      <div className="logo font-bold text-2xl">Crypto Vault</div>
      <div
        className={`links flex justify-between  items-center gap-4 mr-4  text-lg mobile:block mobile:top-24 mobile:left-0 mobile:absolute mobile:w-full mobile:p-4 mobile:bg-blue-950 mobile:${
          isShow ? "block" : "hidden"
        } tablet:relative tablet:flex tablet:top-0 tablet:w-max tablet:p-0`}
        onClick={() => setIsShow(false)}
      >
        <Link to={"/"}>
          <div className="cursor-pointer mobile:border-b-2  tablet:border-0 border-white p-2  tablet:hover:bg-blue-700">
            Home
          </div>
        </Link>
        {/* <div className="cursor-pointer mobile:border-b-2 tablet:border-0 border-white p-2  tablet:hover:bg-blue-700">
          About
        </div> */}
        <Link to={"/contact"}>
          <div className="cursor-pointer  p-2  tablet:hover:bg-blue-700">
            Contact
          </div>
        </Link>
        {/* <div
          className="cursor-pointer p-2 bg-blue-800 rounded-md"
          onClick={() => handleLogin()}
        >
          {islogin ? "Logout" : "Login"}
        </div> */}
      </div>
      <Hamburger onclick={handleMenuToggle} isshow={isShow} />
    </div>
  );
};

export default Navbar;
