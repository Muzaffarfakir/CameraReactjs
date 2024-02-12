import React, { useContext } from "react";
import { cc } from "./Context";
import { useNavigate } from "react-router-dom/dist/umd/react-router-dom.development";
export default function SinglepageView() {
    let fetchadat = useContext(cc);
    let state = [fetchadat.state];
    let nav = useNavigate()
    function back() {
        nav("/")

    }
    console.log([state])
    return (
        <>
            <div style={{ backgroundColor: "black", width: "100vw", height: "100vh", border: "1px solid black", textAlign: "center", margin: "auto", marginTop: "0%" }}>
                <span onClick={back} style={{ position: "fixed", top: "10%", left: "10%" }} className="btn btn-primary ">Back</span>
                {state.map((el) => {
                    return <img style={{ width: "350px", height: "300px", margin: "auto" }} className="" src={el.s} />
                })}
            </div>

        </>
    )
}