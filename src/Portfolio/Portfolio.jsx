import React from "react"
import '../Portfolio/Portfolio.css'
import imgpath1 from '../assets/cabin.png'
import imgpath2 from '../assets/cake.png'
import imgpath3 from '../assets/circus.png'
import imgpath4 from '../assets/game.png'
import imgpath5 from '../assets/safe.png'
import imgpath6 from '../assets/submarine.png'
export default function Portfolio(){
    return (
        <>
        <h1 className="text-center text-dark fs-1 fw-bold py-4 my-5">PORTFOLIO</h1>
        
        <div className="container">
            <div className="row g-2">
                <div className="col-md-4">
                    <div className="item position-relative">
                    <div className="layer w-100 h-100 bg-info position-absolute">
                    <i class="icon fa-solid fa-plus text-white"></i>
                    </div>
                        <img src={imgpath1} className="w-100" alt="" />
                        
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="item position-relative">
                    <div className="layer w-100 h-100 bg-info position-absolute d-flex align-items-center justify-content-center">
                    <i class="icon fa-solid fa-plus text-white"></i>
                    </div>
                    <img src={imgpath2} className="w-100" alt="" />

                    </div>
                </div>
                <div className="col-md-4">
                    <div className="item position-relative">
                    <div className="layer w-100 h-100 bg-info position-absolute d-flex align-items-center justify-content-center">
                    <i class="icon fa-solid fa-plus text-white"></i>
                    </div>
                    <img src={imgpath3} className="w-100" alt="" />

                    </div>
                </div>
                <div className="col-md-4">
                    <div className="item position-relative">
                    <div className="layer w-100 h-100 bg-info position-absolute d-flex align-items-center justify-content-center">
                    <i class="icon fa-solid fa-plus text-white"></i>
                    </div>
                    <img src={imgpath4} className="w-100" alt="" />

                    </div>
                </div>
                <div className="col-md-4">
                    <div className="item position-relative">
                    <div className="layer w-100 h-100 bg-info position-absolute d-flex align-items-center justify-content-center">
                    <i class="icon fa-solid fa-plus text-white"></i>
                    </div>
                    <img src={imgpath5} className="w-100" alt="" />

                    </div>
                </div>
                <div className="col-md-4">
                    <div className="item position-relative">
                        <div className="layer w-100 h-100 bg-info position-absolute d-flex align-items-center justify-content-center">
                        <i class="icon fa-solid fa-plus text-white"></i>
                        </div>
                    <img src={imgpath6} className="w-100" alt="" />

                    </div>
                </div>
            </div>
        </div>
        
        
        </>
    )
}