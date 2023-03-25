import { useMyContext } from "../../State/MyContext";
import logo1 from '../../assets/imgHome/OurServiceLogo1.png'
import logo2 from '../../assets/imgHome/OurServiceLogo2.png'
import logo3 from '../../assets/imgHome/OurServiceLogo3.png'
import logo4 from '../../assets/imgHome/OurServiceLogo4.png'

export default function OurService() {
    const { state, setState } = useMyContext();

    const logo: Array<string> = [logo1, logo2, logo3, logo4]
    const titles: Array<string> = ["استقبال من المطار وحتى الجامعة والسكن", "ترجمة الوثائق", "مساعدة في اختيار الجامعات والمدن", "إخراج قبولات وتأشيرات دراسية"]
    const pras: Array<string> = ["استقبال من المطار حتى الجامعة واكمال عملية التسجيل في الجامعة ثم التوصيل للسكن وانهاء الامور المتعلقة بالتسجيل في السكنات الطلابية.", "ترجمة الوثائق التي تطلبها الجامعات حين التسجيل الى اللغة الروسية او الإنجليزية.", "مساعدة في اختيار الجامعات والمدن المناسبة للطالب من حيث اسعار المعيشة والثقافات المناسبة والجامعات التي تتميز بالتخصصات المرغوبة.", "إخراج قبولات جامعية وتأشيرات دراسية للطلاب ومساعدتهم بالتواصل مع الجامعات."]

    let i = -1;
    const WhyUS: Array<JSX.Element> = logo.map(() => {
        i++
        return (
            <div className='flex flex-col items-center md:w-1/5 m-4 md:m-0 '>
                <img src={logo[i]} className="w-14 h-14 rounded-full " />
                <h1 className={'font-Cairo mt-4 text-xl text-center ' + state.fontColor}>{titles[i]}</h1>
                <p className={'font-Cairo text-14px leading-relaxed text-center font-light ' + state.fontColor}>{pras[i]}</p>
            </div>)
    })

    return (
        <div>
            <div className='w-full  flex justify-center md:mt-10 '>
                <div className={'shadow-lg rounded-2xl w-full max-w-6xl md:h-475px my-4 md:my-0 flex flex-col justify-center items-center select-none mx-2 ' + state.bgColor + state.shadowColor} >
                    <div >
                        <div className='flex justify-center mb-2 '>
                            <div className={'h-px w-6 mt-4 mr-1 ' + (state.dark ? "bg-[#FFFFFF] " : "bg-[#214966] ")} ></div>
                            <p className={'font-Cairo text-base ' + state.fontColor}>الخدمات</p>
                            <div className={'h-px w-6 mt-4 mr-1 ' + (state.dark ? "bg-[#FFFFFF] " : "bg-[#214966] ")} ></div>
                        </div>
                        <h1 className={'font-Cairo md:text-2xl font-extrabold ' + state.fontColor}>ماذا نستطيع أن نقدم لك</h1>
                    </div>
                    <div className='flex md:flex-row-reverse flex-col mt-10 justify-around items-center ' >
                        {WhyUS}
                    </div>
                </div>
            </div>
        </div>
    )
}