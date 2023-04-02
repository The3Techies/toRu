import { useMyContext } from "../../State/MyContext";
import logoPath1 from '../../assets/imgHome/OurServiceLogo3.png'
import logoPath2 from '../../assets/imgHome/OurServiceLogo2.png'
import logoPath3 from '../../assets/imgHome/OurServiceLogo4.png'
import logoPath4 from '../../assets/imgHome/OurServiceLogo1.png'

export default function OurService() {
    const { state } = useMyContext();

   
const arry= [
    {
        logo: logoPath1,
        title : "مساعدة في اختيار الجامعات ",
        par :  "مساعدة في اختيار الجامعات والمدن المناسبة للطالب من حيث اسعار المعيشة والثقافات المناسبة والجامعات التي تتميز بالتخصصات المرغوبة."
    }, {
        logo: logoPath2,
        title : "ترجمة الوثائق",
        par :   "ترجمة الوثائق التي تطلبها الجامعات حين التسجيل الى اللغة الروسية او الإنجليزية."
    }, {
        logo: logoPath3,
        title : "إخراج قبولات وتأشيرات دراسية",
        par :  "إخراج قبولات جامعية وتأشيرات دراسية للطلاب ومساعدتهم بالتواصل مع الجامعات."
    }, {
        logo: logoPath4,
        title : "استقبال من المطار وحتى الجامعة والسكن",
        par :   "استقبال من المطار حتى الجامعة واكمال عملية التسجيل في الجامعة ثم التوصيل للسكن وانهاء الامور المتعلقة بالتسجيل في السكنات الطلابية."
    },
];


    const WhyUS: Array<JSX.Element> = arry.map(({logo ,title,par},i) => {
        return (
            <div key = {i} className='flex flex-col items-center md:w-1/5 m-4 md:m-0 '>
                <img src={logo} className="select-none w-14 h-14 rounded-full " />
                <h1 className={'font-Cairo mt-4 text-xl text-center ' + state.fontColor}>{title}</h1>
                <p className={'font-Cairo text-14px leading-relaxed mt-2 text-center font-light ' + state.fontColor}>{par}</p>
            </div>)
    })

    return (
        <div>
            <div className='w-full flex justify-center md:mt-10 '>
                <div className={'shadow-lg rounded-2xl w-full max-w-6xl my-4 md:my-0 py-6 flex flex-col justify-center items-center mx-2 ' + state.bgColor + state.shadowColor} >
                    <div >
                        <div className='flex justify-center mb-2 '>
                            <div className={'h-px w-6 mt-4 mr-1 ' + (state.dark ? "bg-[#FFFFFF] " : "bg-[#214966] ")} ></div>
                            <p className={'font-Cairo text-base ' + state.fontColor}>الخدمات</p>
                            <div className={'h-px w-6 mt-4 mr-1 ' + (state.dark ? "bg-[#FFFFFF] " : "bg-[#214966] ")} ></div>
                        </div>
                        <h1 className={'font-Cairo md:text-xl font-extrabold text-center ' + state.fontColor}>ماذا نستطيع أن نقدم لك</h1>
                        <h1 className={'font-Cairo md:text-2xl font-black text-center ' + state.fontColor}>500$</h1>

                    </div>
                    <div className='flex md:flex-row-reverse flex-col mt-10 justify-around  ' >
                        {WhyUS}
                    </div>
                </div>
            </div>
        </div>
    )
}