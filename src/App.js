import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestroMenu from "./components/Restromenu";
import Profile from "./components/Profile";
import Shimmer from "./components/Shimmer";
import userContext from "./utils/userContext";
const Instamart = lazy(() => import("./components/Instamart"));

// redux imports

import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";

//redux imports ended
const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Arpit",
    email: "arpit@gmail.com",
  });
  return (
    <Provider store={store}>
      <userContext.Provider
        value={{
          user: user,
          setUser: setUser,
        }}
      >
        <Header />
        <Outlet />
        <Footer />
      </userContext.Provider>
    </Provider>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restro/:id",
        element: <RestroMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />);
