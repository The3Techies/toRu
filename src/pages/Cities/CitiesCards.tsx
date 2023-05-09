import { useMyContext } from "../../State/MyContext"
import { useNavigate } from "react-router-dom"
import Moscow from '../../assets/imgCities/Moscow.webp'
import StPetersburg from '../../assets/imgCities/SaintPetersburg.webp'
import Ufa from '../../assets/imgCities/Ufa.webp'
import Kazan from '../../assets/imgCities/Kazan.webp'
import Rostov from '../../assets/imgCities/Rostov.webp'
import Yekaterinburg from '../../assets/imgCities/Yekaterinburg.webp'

const CitiesCards = () => {
    const { state } = useMyContext()
    let navigate = useNavigate()

    const arry = [
        {
            name: "موسكو",
            urlName: "Moscow",
            img: Moscow,
        },
        {
            name: "سانت بطرسبرغ",
            urlName: "St Petersburg",
            img: StPetersburg,
        },
        {
            name: "أوفا",
            urlName: "Ufa",
            img: Ufa,
        },
        {
            name: "كازان",
            urlName: "Kazan",
            img: Kazan,
        },
        {
            name: "روستوف",
            urlName: "Rostov",
            img: Rostov,
        },
        {
            name: "يكاترينبورغ",
            urlName: "Yekaterinburg",
            img: Yekaterinburg,
        },
    ]

    const CitsCards: Array<JSX.Element> = arry.map(({ name,urlName , img }, i) => {
        return (
            <div key={i} className={"w-60 h-80 flex justify-center items-center rounded-2xl shadow-lg cursor-pointer  " + state.bgApp + state.shadowColor} onClick={() => navigate(`/City/${urlName}`)} >
                <div className="flex flex-col  items-center justify-center w-48 h-full -mt-2 ">
                    <div className="select-none"><img src={img} alt="CityImg" className=" h-48  rounded-lg opacity-60 "></img></div>
                    <h1 className={"font-Cairo font-bold text-2xl self-start " + state.fontColor}>{name}</h1>
                    <p className="font-Cairo text-sky-400 hover:text-sky-800 text-lg self-start cursor-pointer " onClick={() => navigate(`/City/${urlName}`)}>اعرف المزيد</p>
                </div>
            </div>
        )
    })

    return (
        <div className="w-full mt-8 flex justify-center ">

            <div className={"w-full max-w-6xl flex justify-center gap-8 flex-wrap p-8 rounded-2xl shadow-lg mx-2 " + state.bgColor + state.shadowColor}>
                {CitsCards}
            </div>
        </div>
    )
} 

export default CitiesCards