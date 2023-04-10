import { useMyContext } from "../../State/MyContext"
import { useNavigate } from "react-router-dom"

const HomeHero = () => {
    const { state } = useMyContext()
    let navigate = useNavigate()


    return (
        <div className="w-full mt-14 flex justify-center ">
            <div className="w-full max-w-6xl h-screen flex flex-col-reverse  justify-center items-center ">
                <button className= {'font-Cairo mt-10 font-bold text-2xl md:text-4xl p-2 rounded-md border-2 hover:shadow-lg select-none ' + state.borderColer + (state.dark ? "text-[#161616] bg-[#FFFFFF] hover:shadow-[#e0e0e0] " : "text-[#FFFFFF] bg-[#214966] hover:shadow-[#94d3e0] ")}  onClick={() => navigate("/Apply")}>قدم الان</button>
                <div className="text-right mr-6 w-570px ">
                    <h1 className={"font-Cairo text-lg md:text-50px font-extrabold mb-2 md:mb-8 leading-relaxed " + state.fontColor}>ترغب بالدراسة في روسيا؟</h1>
                    <p className={"font-Cairo text-xs md:text-lg font-light " + state.fontColor} >معنا تستطيع تحقيق حلمك بالدراسة في افضل الجامعات الروسية وفي اي تخصص جامعي ترغب به</p>
                </div>

            </div>
        </div>
    )
}

export default HomeHero