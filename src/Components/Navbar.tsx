import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import logo from '../assets/imgNavbar/logo.png'
import menuIcon from '../assets/imgNavbar/menuIcon.png'
import closeIcon from '../assets/imgNavbar/closeIcon.png'

export default function Navbar() {
    let navigate = useNavigate()
    const [openMenu,setOpenMenu] = useState(false)

    return (
        <div className="sticky w-full h-14 bg-[#7BB6FB] flex justify-between items-center select-none ">
            <div className="hidden md:flex flex w-1/4 justify-between ml-7 "  >
                <h1 className={"font-Cairo cursor-pointer text-sm whitespace-nowrap ml-5  hover:text-white delay-150 " + (useLocation().pathname === "/Apply" ? 'font-bold' : '')} onClick={() => navigate("/Apply")} >قدم الان</h1>
                <h1 className={"font-Cairo cursor-pointer text-sm whitespace-nowrap ml-5  hover:text-white delay-150 " + (useLocation().pathname === "/Cities" ? 'font-bold' : '')} onClick={() => navigate("/Cities")}>المدن</h1>
                <h1 className={"font-Cairo cursor-pointer text-sm whitespace-nowrap ml-5  hover:text-white delay-150 " + (useLocation().pathname === "/WhyRussia" ? 'font-bold' : '')} onClick={() => navigate("/WhyRussia")}>لماذا روسيا</h1>
                <h1 className={"font-Cairo cursor-pointer text-sm whitespace-nowrap ml-5  hover:text-white delay-150 " + (useLocation().pathname === "/" ? 'font-bold' : '')} onClick={() => navigate("/")}>الرئيسية</h1>
            </div>
            <div className="md:hidden ">
                <img src={openMenu? closeIcon : menuIcon} alt="Menu icon" className={openMenu? "w-7 ml-2" : "w-10" } onClick={()=>setOpenMenu(!openMenu)} />
                <ul className={"mt-1  bg-[#7BB6FB] w-28 " +  (openMenu ? 'absolute ' : ' hidden ') }>
                    <li><h1 className={"font-Cairo cursor-pointer text-sm whitespace-nowrap hover:text-white delay-150 text-right mr-2 " + (useLocation().pathname === "/" ? 'font-bold' : '')} onClick={() => navigate("/")}>الرئيسية</h1></li>
                    <li><h1 className={"font-Cairo cursor-pointer text-sm whitespace-nowrap hover:text-white delay-150 mt-3 text-right mr-2 " + (useLocation().pathname === "/WhyRussia" ? 'font-bold' : '')} onClick={() => navigate("/WhyRussia")}>لماذا روسيا</h1></li>
                    <li><h1 className={"font-Cairo cursor-pointer text-sm whitespace-nowrap hover:text-white delay-150 mt-3 text-right mr-2 " + (useLocation().pathname === "/Cities" ? 'font-bold' : '')} onClick={() => navigate("/Cities")}>المدن</h1></li>
                    <li><h1 className={"font-Cairo cursor-pointer text-sm whitespace-nowrap hover:text-white delay-150 mt-3 mb-4 text-right mr-2 " + (useLocation().pathname === "/Apply" ? 'font-bold' : '')}  onClick={() => navigate("/Apply")}>قدم الان</h1></li>
                </ul>
            </div>
            <div className="flex md:w-1/4 ">
                <div className='ml-4 mr-4'>
                    <h1 className="font-Cairo text-2xl font-bold  whitespace-nowrap">الى روسيا</h1>
                    <p className="font-Cairo text-xs ml-1.5 font-thin">للخدمات الطلابية</p>
                </div>
                <div>
                    <img src={logo} alt="Our Logo" className='w-16 h-16 min-w-fit min-h-fit' />
                </div>
            </div>
        </div>
    )
}