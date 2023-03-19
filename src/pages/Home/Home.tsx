import Navbar from "../../assets/Navbar"
import Hero from "./Hero"
import WhyUs from "./WhyUs"
import OurService from "./OurService"
import ContactUs from "./ContactUs"
import Footer from "../../assets/Footer"

export default function Home() {
    return(
        <div>
            <Navbar/>
            <Hero/>
            <WhyUs/>
            <OurService/>
            <ContactUs/>
            <Footer/>
        </div>
    )
}