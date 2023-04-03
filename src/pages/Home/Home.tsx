import Navbar from "../../Components/Navbar"
import HomeHero from "./HomeHero"
import WhyUs from "./WhyUs"
import OurService from "./OurService"
import ContactUs from "./ContactUs"
import Footer from "../../Components/Footer"

const Home = () => {
    return(
        <div >
            <Navbar/>
            <HomeHero/>
            <WhyUs/>
            <OurService/>
            <ContactUs/>
            <Footer/>
        </div>
    )
}

export default Home