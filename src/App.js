import React, { createContext, useContext, useEffect, useRef, useState } from "react";
import { useNavigate, BrowserRouter, Routes, Route, } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.css";
import SinglepageView from "./SinglePageView";
import { cc } from "./Context"
import { Link } from "react-router-dom/dist/umd/react-router-dom.development";
import "./Navbar.css"
export default function App() {
    let fetchadat = useContext(cc);
    let vref = useRef(null);
    let canvref = useRef(null);
    let divref = useRef(null);
    let imgref = useRef(null);
    let [img, setimg] = useState([]);
    let dispatch = fetchadat.dispatch;
    let state = fetchadat.state;



    let constriats = {
        audio: false,
        video: true
    }
    useEffect(() => {
        navigator.mediaDevices.getUserMedia(constriats).then((stream) => {
            vref.current.srcObject = stream;
            vref.current.autoplay = true;
            console.log(vref.current.src)

        }).catch((er) => {
            console.log(er)
        });
    }, [])



    function c() {
        let ctx = canvref.current.getContext("2d");
        ctx.drawImage(vref.current, 10, 10, 200, 200);
        let h = canvref.current.toDataURL("image/png")
        setimg((imgel) => [...imgel, h]);

    }
    function l(el, e) {
        dispatch({ type: 'view', s: el })


    }

    return (

        <>
          
                  

                <h1 className="text-center">
                    Camera
                </h1>
                <hr />
                <video className="text-center m-auto d-flex w-auto h-auto" style={{ border: "2px solid black" }} ref={vref}></video>
                <button className="btn btn-primary text-center my-3 m-auto d-flex " onClick={c}>Take Photo</button>
                <div id="d" className="card d-flex flex-wrap mx-3 my-3">
                    <div className="w-100 h-100 d-flex flex-wrap" ref={divref}>
                        {img.map((el) => {

                            return <Link to={"/singleView"}><img onClick={(e) => { l(el, e) }} className="mx-3 my-3  h-auto w-auto"  src={el} />
                            </Link>


                        })}


                        <canvas id="can" className="my-3" style={{ width: "0vw", height: "0vh" }} ref={canvref}></canvas>

                    </div>

                </div>



        </>
    )
}
