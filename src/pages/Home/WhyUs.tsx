import { useMyContext } from "../../State/MyContext";
import logoPath1 from '../../assets/imgHome/WhyUsLogo1.png'
import logoPath2 from '../../assets/imgHome/WhyUsLogo2.png'
import logoPath3 from '../../assets/imgHome/WhyUsLogo3.png'

const WhyUs = () => {
    const { state } = useMyContext();

    const arry = [
        {
            logo: logoPath1,
            title : "من نكون؟",
            par : "نحن مجموعة من الطلاب المقيمين في روسيا، نسعى لوضع حلول يواجهها الطلاب العرب الراغبين والمقبلين على الدراسة في روسيا."
        }, {
            logo: logoPath2,
            title : "ماذا نعمل؟",
            par :  "نقوم بتوفير كل ما يحتاجه الطالب العربي من خدمات لاكمال مرحلة تعليمه العالي في روسيا باحترافية ودوام كامل طيلة أيام الأسبوع 24/7"
        }, {
            logo: logoPath3,
            title : "لماذا؟",
            par : "بدأنا في العمل بعد ان لاحظنا العدد الكبير من ضحايا عمليات النصب لتسجيل الطلاب أو أخذ اموال مبالغ فيها من قبل البعض. فقررنا انشاء هذا الموقع لتسهيل كل شيء للطالب العربي الراغب بالدراسة في روسيا."
        },
    ];


    const WhyUs: Array<JSX.Element> = arry.map(({logo,title,par}, i) => {
        return (
            <div key={i}  className='flex flex-col items-center md:w-1/4 m-4 md:m-0 '>
                <img src={logo} alt="WhyUsLogo" className="select-none w-14 h-14 rounded-full " />
                <h1 className={'font-Cairo mt-4 text-xl text-center ' + state.fontColor}>{title}</h1>
                <p className={'font-Cairo text-14px leading-relaxed text-center font-light ' + state.fontColor}>{par}</p>
            </div>)
    })

    return (
        <div className="w-full  flex justify-center md:mt-4">
            <div className={"shadow-lg rounded-2xl w-full max-w-6xl py-6 my-4 md:my-0 flex flex-col justify-center items-center mx-2 " + state.bgColor + state.shadowColor} >
                <div >
                    <div className='flex justify-center mb-2 '>
                        <div className={'h-px w-6 mt-4 mr-1 select-none ' + (state.dark ? "bg-[#FFFFFF] " : "bg-[#214966] ")} ></div>
                        <p className={'font-Cairo text-base ' + state.fontColor}>من نحن؟</p>
                        <div className={'h-px w-6 mt-4 ml-1 select-none ' + (state.dark ? "bg-[#FFFFFF] " : "bg-[#214966] ")} ></div>
                    </div>
                    <h1 className={'font-Cairo md:text-2xl font-extrabold ' + state.fontColor}>حسنا, سوف نجيب على بعض الأسئلة</h1>
                </div>
                <div className='flex md:flex-row-reverse flex-col mt-10 justify-around items-center ' >
                    {WhyUs}
                </div>
            </div>
        </div>
    )
} 

export default WhyUs