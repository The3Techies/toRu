import Navbar from "../../Components/Navbar"
import HomeHero from "./HomeHero"
import WhyUs from "./WhyUs"
import OurService from "./OurService"
import ContactUs from "./ContactUs"
import Footer from "../../Components/Footer"

export default function Home() {
    return(
        <div className="bg-[#262627]">
            <Navbar/>
            <HomeHero/>
            <WhyUs/>
            <OurService/>
            <ContactUs/>
            <Footer/>
        </div>
    )
}