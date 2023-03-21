import Navbar from "../../Components/Navbar"
import WhyRussiaHero from "./WhyRussiaHero"
import Benefits from "./Benefits"
import StudenJobs from "./StudenJobs"
import StudentLife from "./StudentLife"
import Footer from "../../Components/Footer"

export default function WhyRussia() {
    return(
        <div>
            <Navbar/>
            <WhyRussiaHero/>
            <Benefits/>
            <StudenJobs/>
            <StudentLife/>
            <Footer/>
        </div>
    )
}