import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { useMyContext } from "../State/MyContext";
import { BsToggleOff, BsToggleOn } from 'react-icons/bs';
import logo from '../assets/imgNavbar/logo.png'
import MenuIconDark from '../assets/imgNavbar/MenuIconDark.png'
import MenuIconLight from '../assets/imgNavbar/MenuIconLight.png'
import CloseIconDark from '../assets/imgNavbar/CloseIconDark.png'
import CloseIconLight from '../assets/imgNavbar/CloseIconLight.png'


export default function Navbar() {
    const { state, setState } = useMyContext();
    let navigate = useNavigate()
    const [openMenu, setOpenMenu] = useState<Boolean>(false)
    const btnfontStyle: string = "font-Cairo cursor-pointer text-sm whitespace-nowrap ml-5 " + state.fontColor

    function SetToDark(){
        setState({
            dark: true,
            fontColor : "text-[#FFFFFF] ",
            bgColor : "bg-[#161616] ",
            bgApp :"bg-[#262627] ",
            shadowColor : "shadow-[#e0e0e0] " ,
            borderColer : "border-[#FFFFFF] "
        })
        console.log(state)
    }
    
    function SetToLight(){
        setState({
            dark: false,
            fontColor : "text-[#214966] ",
            bgColor : "bg-[#FFFFFF] ",
            bgApp :"bg-[#ECECEC] ",
            shadowColor : "shadow-[#3b5d6c] " ,
            borderColer : "border-[#214966] "
        })
        console.log(state)

    }

    return (
        <div className={"fixed top-0 left-0 right-0 w-full flex justify-center " + state.bgColor}>
            <div className=" w-full max-w-6xl h-14  bg-opacity-50  flex justify-between items-center select-none ">
                <div className="hidden md:flex  justify-between ml-7"  >
                    {state.dark? <BsToggleOff className= {"text-[#FFFFFF] text-2xl cursor-pointer" + state.fontColor} onClick={SetToLight}  />:  <BsToggleOn className="text-[#214966] text-2xl cursor-pointer" onClick={SetToDark}  />}
                    <h1 className={btnfontStyle + (useLocation().pathname === "/Apply" ? ' font-extrabold' : '')} onClick={() => navigate("/Apply")} >قدم الان</h1>
                    <h1 className={btnfontStyle + (useLocation().pathname === "/Cities" ? ' font-extrabold' : '')} onClick={() => navigate("/Cities")}>المدن</h1>
                    <h1 className={btnfontStyle + (useLocation().pathname === "/WhyRussia" ? ' font-extrabold' : '')} onClick={() => navigate("/WhyRussia")}>لماذا روسيا</h1>
                    <h1 className={btnfontStyle + (useLocation().pathname === "/" ? ' font-extrabold' : '')} onClick={() => navigate("/")}>الرئيسية</h1>
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
                <div className="flex mt-3 cursor-pointer" onClick={() => navigate("/")}>
                    <div className='mr-4' >
                        <h1 className={"font-Cairo text-xl md:text-2xl font-bold whitespace-nowrap " + state.fontColor}>الى روسيا</h1>
                        <p className={"font-Cairo text-xs ml-1.5 font-thin " + state.fontColor}>للخدمات الطلابية</p>
                    </div>
                    <div>
                        <img src={logo} alt="Our Logo" className='w-16 h-16 min-w-fit min-h-fit ' />
                    </div>
                </div>
            </div>
        </div>
    )
}