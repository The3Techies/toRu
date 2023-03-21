import Navbar from "../../Components/Navbar"
import CitiesHero from "./CitiesHero"
import CitiesCards from "./CitiesCards"
import Footer from "../../Components/Footer"

export default function Cities() {
    return(
        <div>
            <Navbar/>
            <CitiesHero/>
            <CitiesCards/>
            <Footer/>
        </div>
    )
}