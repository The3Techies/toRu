import Navbar from "../../Components/Navbar"
import CityHero from "./CityHero"
import DescCity from "./DescCity"
import TopUnivers from "./TopUnivers"
import Footer from "../../Components/Footer"

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