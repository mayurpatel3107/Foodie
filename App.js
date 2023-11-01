import React from "react";
import  ReactDOM  from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import Footer from "./src/components/Footer";
import About from "./src/components/About";
import Error from "./src/components/Error";
import Profile from "./src/components/Profile";
import Contact from "./src/components/Contact";
import RestaurantMenu from "./src/components/RestaurantMenu";
import { createBrowserRouter ,RouterProvider,Outlet} from "react-router-dom";
import { lazy,Suspense } from "react";
import Shimmer from "./src/components/Shimmer";
import { Provider } from "react-redux";
import store from "./src/utils/store";
import Cart from "./src/components/Cart";


const Instamart = lazy(()=> import("./src/components/Instamart"))

const AppLayout = () =>{
    return (
        <Provider store={store}>
        <Header />
        <Outlet />
        <Footer />
      </Provider>
    );
}

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout />,
        errorElement:<Error />,
        children:[
            {
                path:"/about",
                element:<About />,
                children:[{
                    path:"profile",
                    element:<Profile />
                }]
            },
            {
                path:"/",
                element:<Body />,
            },
           
            {
                path:"/contact",
                element:<Contact />,
            }, 
            {
                path:"/cart",
                element:<Cart />,
            },
            {
                path:"/instamart",
                element:<Suspense fallback=<Shimmer />><Instamart /></Suspense>,
            },
            {
                path: "restaurant/:resId",
                element: <RestaurantMenu />,
              },
           
        ],
    },
   
])


const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);