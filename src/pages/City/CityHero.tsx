import MyComponentProps from './MyComponentProps'
import MoscowVid from '../../assets/imgCity/CityVideos/vid.mp4'
import StPetersburgVid from '../../assets/imgCity/CityVideos/Saint Petersburg.mp4'
import UfaVid from '../../assets/imgCity/CityVideos/vid.mp4'
import KazanVid from '../../assets/imgCity/CityVideos/vid.mp4'
import RostovVid from '../../assets/imgCity/CityVideos/vid.mp4'
import YekaterinburgVid from '../../assets/imgCity/CityVideos/vid.mp4'

const CityHero: React.FC<MyComponentProps> = ({ Cityname }) => {

    let video 
    switch (Cityname) {
        case "موسكو":
            video = MoscowVid
            break
        case "سانت بطرسبرغ":
            video = StPetersburgVid
            break
        case "أوفا":
            video = UfaVid
            break
        case "كازان":
            video = KazanVid
            break
        case "روستوف":
            video = RostovVid
            break
        case "يكاترينبورغ":
            video = YekaterinburgVid
            break
    }

    return (
        <div className=" mt-[3.5rem] w-full h-fit flex justify-center items-center select-none ">
            <video width="100%" height="100vh" className="appearance-none controls-none poster-none object-cover relative transition-opacity  " loop muted autoPlay >
                <source src={video} type="video/mp4" />
            </video>
        </div>
    )
}

export default CityHero