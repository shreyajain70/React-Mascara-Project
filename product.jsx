import React from "react";
import { createRoot } from "react-dom/client";
import { Header } from "./components/Header";
import { Body } from "./components/Body";
import { Footer } from "./components/Footer";
import { AboutUs } from "./components/AboutUs";
import { Contact } from "./components/Contact";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import { ProductInfo } from "./components/ProductInfo";

const BeautyPage = () => {
    return (
        <>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    )


}

const appRouter = createBrowserRouter([
    {
        path: "/", element: <BeautyPage></BeautyPage>,
        children: [

            {

                path: "/", element: <Body></Body>
            },
            {

                path: "/AboutUs", element: <AboutUs></AboutUs>
            },
            {
                path: "/Contact", element: <Contact></Contact>
            },
            {
                path:'/products/:productId', element: <ProductInfo></ProductInfo>
            }
        ]
    }
])


let Root = createRoot(document.getElementById("root"));
Root.render(<RouterProvider router={appRouter}></RouterProvider>);