import HeroImg from '../../assets/imgHome/HeroImg.png'
import { useMyContext } from "../../State/MyContext";

const HomeHero = () => {
    const { state } = useMyContext();

    return (
        <div className="w-full mt-14 flex justify-center ">
            <div className="w-full max-w-6xl h-screen flex justify-around items-center ">
                <div className="ml-2 md:ml-10 ">
                    <img src={HeroImg} className="select-none h-46 w-46 md:h-96 md:w-96 object-contain hidden md:block" alt="" />
                </div>
                <div className="text-right mr-6 w-570px ">
                    <h1 className={"font-Cairo text-lg md:text-50px font-extrabold mb-2 md:mb-8 leading-relaxed " + state.fontColor}>ترغب بالدراسة في روسيا؟</h1>
                    <p className={"font-Cairo text-xs md:text-lg font-light " + state.fontColor} >معنا تستطيع تحقيق حلمك بالدراسة في افضل الجامعات الروسية وفي اي تخصص جامعي ترغب به</p>
                </div>
            </div>
        </div>
    )
}

export default HomeHero