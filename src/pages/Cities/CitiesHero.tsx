import { useMyContext } from "../../State/MyContext";
import { useState, useEffect } from 'react';
import { RxDot, RxDotFilled } from 'react-icons/rx';
import Moscow from '../../assets/imgCities/Moscow.jpg'
import StPetersburg from '../../assets/imgCities/SaintPetersburg.jpg'
import Ufa from '../../assets/imgCities/Ufa.jpg'
import Kazan from '../../assets/imgCities/Kazan.jpg'
import Rostov from '../../assets/imgCities/Rostov.jpg'
import Yekaterinburg from '../../assets/imgCities/Yekaterinburg.jpg'

const CitiesHero = () => {
    const { state } = useMyContext()
    let index: number = 0
    const names: Array<string> = ["موسكو", "سانت بطرسبرغ", "أوفا", "كازان", "روستوف", "يكاترينبورغ"]
    const imgs: Array<string> = [Moscow, StPetersburg, Ufa, Kazan, Rostov, Yekaterinburg]
    const [img, setImg] = useState<string>(imgs[index])
    const [name, setName] = useState<string>(names[index])
    const [active, setActive] = useState<number>(index)
    const [intervalId, setIntervalId] = useState<number | null>(null);
    const [shouldRunEffect, setShouldRunEffect] = useState(false);

    useEffect(() => {
        index = active
        setShouldRunEffect(false)
        const id: any = setInterval(() => {
            if (index < names.length - 1) index++
            else index = 0
            setImg(imgs[index])
            setName(names[index])
            setActive(index)

        }, 3000);
        setIntervalId(id)
        return () => clearInterval(id);
    }, [shouldRunEffect]);

    function changeActive(i: number) {
        if (intervalId) {
            
            clearInterval(intervalId);
            setIntervalId(null)
            setShouldRunEffect(true)
        }
        index = i
        setImg(imgs[index])
        setName(names[index])
        setActive(index)
    }

    return (
        <div>
            <div className="w-full mt-[3.5rem] flex justify-center">
                <div className=" w-full max-w-6xl">
                    <div className="select-none "><img src={img} className="w-full  h-[27rem] opacity-25" /></div>
                    <div className="flex justify-center">
                        <p className={"font-Cairo absolute top-[10rem] md:w-[35rem] text-center md:text-lg text-sm p-4  " + state.fontColor}>نحن نقدم خدمات الدعوة للطلاب المهتمين بالدراسة في أي مدينة في روسيا. ومع ذلك ، فإن المدن الأكثر شعبية بين الطلاب الدوليين هي <span className="font-extrabold" >موسكو ، وسانت بطرسبرغ ، وأوفا ، وروستوف ، وكازان. </span>يمكننا مساعدتك في العثور على الخيار المثالي للمدينة والجامعة التي ترغب في الدراسة فيها. دعنا نجعل أحلامك الدراسية في الخارج تتحقق! 🎓</p>
                    </div>
                    <div className="flex justify-start">
                        <h1 className={"font-Cairo absolute top-[24rem] font-bold md:font-extrabold mr-2 md:mr-20 text-lg md:text-xl text-[#48cae4] "}>{name}</h1>
                    </div>
                    <div className="flex justify-center ">
                        <div className={"absolute top-[26rem] flex justify-center text-4xl cursor-pointer " + state.fontColor}>
                            {active === 0 ? <RxDotFilled /> : <RxDot onClick={() => changeActive(0)} />}
                            {active === 1 ? <RxDotFilled /> : <RxDot onClick={() => changeActive(1)} />}
                            {active === 2 ? <RxDotFilled /> : <RxDot onClick={() => changeActive(2)} />}
                            {active === 3 ? <RxDotFilled /> : <RxDot onClick={() => changeActive(3)} />}
                            {active === 4 ? <RxDotFilled /> : <RxDot onClick={() => changeActive(4)} />}
                            {active === 5 ? <RxDotFilled /> : <RxDot onClick={() => changeActive(5)} />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CitiesHero