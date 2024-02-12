import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";
import Context from "./Context";
import Navbar from "./Navbar";
let root = ReactDom.createRoot(document.getElementById("root"));
root.render(
    <>
        <Context>
            <Navbar />

        </Context>


    </>
)