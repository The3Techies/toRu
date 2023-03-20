import Navbar from "../../assets/Navbar"
import HomeHero from "./HomeHero"
import WhyUs from "./WhyUs"
import OurService from "./OurService"
import ContactUs from "./ContactUs"
import Footer from "../../assets/Footer"

export default function Home() {
    return(
        <div>
            <Navbar/>
            <HomeHero/>
            <WhyUs/>
            <OurService/>
            <ContactUs/>
            <Footer/>
        </div>
    )
}