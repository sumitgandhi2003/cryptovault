import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import Body from "./component/Body/Body";
import Coindescription from "./component/Coindescription/Coindescription";
import { createBrowserRouter, Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="w-full h-full">
      <Navbar />
      <Outlet />
    </div>
  );
};

export const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/coins/:id",
        element: <Coindescription />,
      },
    ],
  },
]);

export default App;
