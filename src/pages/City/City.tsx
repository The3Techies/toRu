import Navbar from "../../assets/Navbar"
import CityHero from "./CityHero"
import DescCity from "./DescCity"
import TopUnivers from "./TopUnivers"
import Footer from "../../assets/Footer"

export default function City() {
    return (
        <div>
            <Navbar />
            <CityHero />
            <DescCity/>
            <TopUnivers/>
            <Footer />
        </div>
    )
}