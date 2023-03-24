import { useNavigate, useLocation } from "react-router-dom";
import {useState } from "react";
// import { useMyContext } from "../State/MyContext";
import logo from '../assets/imgNavbar/logo.png'
import MenuIconDark from '../assets/imgNavbar/MenuIconDark.png'
import MenuIconLight from '../assets/imgNavbar/MenuIconLight.png'
import CloseIconDark from '../assets/imgNavbar/CloseIconDark.png'
import CloseIconLight from '../assets/imgNavbar/CloseIconLight.png'


export default function Navbar() {
    let navigate = useNavigate()
    const [openMenu, setOpenMenu] = useState(false)
    const btnfontStyle: string = "font-Cairo text-[#FFFFFF] cursor-pointer text-sm whitespace-nowrap hover:text- delay-150 ml-5 "

    // const { state, setState } = useMyContext();
    
    // setState(prevState => ({
    //     dark: !prevState.dark
    //   }));

    return (
        <div className="fixed top-0 left-0 right-0 w-full bg-[#161616] flex justify-center">
            <div className=" w-full max-w-6xl h-14  bg-opacity-50  flex justify-between items-center select-none ">
                <div className="hidden md:flex  w-1/4 justify-between ml-7"  >
                    <h1 className={btnfontStyle  + (useLocation().pathname === "/Apply" ? 'font-extrabold' : '')} onClick={() => navigate("/Apply")} >قدم الان</h1>
                    <h1 className={btnfontStyle  + (useLocation().pathname === "/Cities" ? 'font-extrabold' : '')} onClick={() => navigate("/Cities")}>المدن</h1>
                    <h1 className={btnfontStyle  + (useLocation().pathname === "/WhyRussia" ? 'font-extrabold' : '')} onClick={() => navigate("/WhyRussia")}>لماذا روسيا</h1>
                    <h1 className={btnfontStyle  + (useLocation().pathname === "/" ? 'font-extrabold' : '')} onClick={() => navigate("/")}>الرئيسية</h1>
                </div>
                <div className="md:hidden ">
                    <img src={openMenu ? CloseIconDark : MenuIconDark} alt="Menu icon" className="ml-3 " onClick={() => setOpenMenu(!openMenu)} />
                    <ul className={"mt-1  bg-[#161616] w-28 " + (openMenu ? 'absolute ' : ' hidden ')}>
                        <li><h1 className={btnfontStyle + "mr-2 text-right " + (useLocation().pathname === "/" ? 'font-extrabold' : '')} onClick={() => navigate("/")}>الرئيسية</h1></li>
                        <li><h1 className={btnfontStyle + " mt-3 text-right mr-2 " + (useLocation().pathname === "/WhyRussia" ? 'font-extrabold' : '')} onClick={() => navigate("/WhyRussia")}>لماذا روسيا</h1></li>
                        <li><h1 className={btnfontStyle + "mt-3 text-right mr-2 " + (useLocation().pathname === "/Cities" ? 'font-extrabold' : '')} onClick={() => navigate("/Cities")}>المدن</h1></li>
                        <li><h1 className={btnfontStyle + "mt-3 mb-4 text-right mr-2 " + (useLocation().pathname === "/Apply" ? 'font-extrabold' : '')} onClick={() => navigate("/Apply")}>قدم الان</h1></li>
                    </ul>
                </div>
                <div className="flex md:w-1/4 mt-3 cursor-pointer" onClick={() => navigate("/")}>
                    <div className='ml-4 mr-4' >
                        <h1 className="font-Cairo text-xl md:text-2xl font-bold whitespace-nowrap text-[#FFFFFF]">الى روسيا</h1>
                        <p className="font-Cairo text-xs ml-1.5 font-thin text-[#FFFFFF]">للخدمات الطلابية</p>
                    </div>
                    <div>
                        <img src={logo} alt="Our Logo" className='w-16 h-16 min-w-fit min-h-fit ' />
                    </div>
                </div>
            </div>
        </div>
    )
}