import Navbar from "../../Components/Navbar"
import CityHero from "./CityHero"
import DescCity from "./DescCity"
import TopUnivers from "./TopUnivers"
import Footer from "../../Components/Footer"
import {useParams} from "react-router-dom"

const City:React.FC = () => {
    const { name } = useParams()
    return (
        <div>
            <Navbar />
            <CityHero name={name || ""}/>
            <DescCity name={name || ""}/>
            <TopUnivers name={name || ""} />
            <Footer />
        </div>
    )
}

export default City