import { useMyContext } from "../../State/MyContext"
import { useNavigate } from "react-router-dom"
import Moscow from '../../assets/imgCities/Moscow.jpg'
import StPetersburg from '../../assets/imgCities/SaintPetersburg.jpg'
import Ufa from '../../assets/imgCities/Ufa.jpg'
import Kazan from '../../assets/imgCities/Kazan.jpg'
import Rostov from '../../assets/imgCities/Rostov.jpg'
import Yekaterinburg from '../../assets/imgCities/Yekaterinburg.jpg'

const CitiesCards = () => {
    const { state } = useMyContext()
    let navigate = useNavigate()

    const arry = [
        {
            name: "Moscow",
            img: Moscow,
        },
        {
            name: "St Petersburg",
            img: StPetersburg,
        },
        {
            name: "Ufa",
            img: Ufa,
        },
        {
            name: "Kazan",
            img: Kazan,
        },
        {
            name: "Rostov",
            img: Rostov,
        },
        {
            name: "Yekaterinburg",
            img: Yekaterinburg,
        },
    ]

    const CitsCards: Array<JSX.Element> = arry.map(({ name, img }, i) => {
        return (
            <div key={i} className={"w-60 h-80 flex justify-center items-center rounded-2xl shadow-lg  " + state.bgApp + state.shadowColor} onClick={() => navigate(`/City/${name}`)} >
                <div className="flex flex-col  items-center justify-center w-48 h-full -mt-2 ">
                    <div className="select-none"><img src={img} className=" h-48 rounded-lg opacity-60 "></img></div>
                    <h1 className={"font-Cairo font-bold text-2xl self-start " + state.fontColor}>{name}</h1>
                    <p className="font-Cairo text-[#0921FF] text-lg self-start cursor-pointer " onClick={() => navigate(`/City/${name}`)}>اعرف المزيد</p>
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