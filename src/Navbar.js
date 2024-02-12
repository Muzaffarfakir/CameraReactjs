import React from "react";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import App from "./App";
import SinglepageView from "./SinglePageView";
function Navbar() {
    return (
        <>
            <BrowserRouter>
                <nav>

                    <ul>

                        <li>

                            <Link to={"/"}>Home</Link>
                        </li>
                        
                        <li>

                            <Link to={"/singleView"}>Images</Link>
                        </li>

                    </ul>

                </nav>
                <Routes>
                    <Route path={"/singleView"} element={<SinglepageView />} />
                    <Route path={"/"} element={<App />} />

                </Routes>
            </BrowserRouter>



        </>
    )
}
export default Navbar;