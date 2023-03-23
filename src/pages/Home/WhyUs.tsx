import logo1 from '../../assets/imgHome/WhyUsLogo1.png'
import logo2 from '../../assets/imgHome/WhyUsLogo2.png'
import logo3 from '../../assets/imgHome/WhyUsLogo3.png'


export default function WhyUs() {

    const logo: Array<string> = [logo1,logo2,logo3]
    const titles: Array<string> = ["من نكون؟","ماذا نعمل؟","لماذا؟"]
    const pras: Array<string> = [
        "نحن مجموعة من الطلاب المقيمين في روسيا، نسعى لوضع حلول يواجهها الطلاب العرب الراغبين والمقبلين على الدراسة في روسيا.","نقوم بتوفير كل ما يحتاجه الطالب العربي من خدمات لاكمال مرحلة تعليمه العالي في روسيا باحترافية ودوام كامل طيلة أيام الأسبوع 24/7","بدأنا في العمل بعد ان لاحظنا العدد الكبير من ضحايا عمليات النصب لتسجيل الطلاب أو أخذ اموال مبالغ فيها من قبل البعض. فقررنا انشاء هذا الموقع لتسهيل كل شيء للطالب العربي الراغب بالدراسة في روسيا."]

    let i = -1;
    const WhyUS: Array<JSX.Element> = logo.map(() =>{
        i++
        return (
        <div className='flex flex-col items-center md:w-1/4 m-4 md:m-0 '>
            <img src={logo[i]} className="w-14 h-14 rounded-full " />
            <h1 className='font-Cairo text-[#FFFFFF] mt-4 text-xl text-center'>{titles[i]}</h1>
            <p className='font-Cairo text-[#FFFFFF] text-14px leading-relaxed text-center font-light'>{pras[i]}</p>
        </div>)
    })
    

    return (
        <div className="w-full  flex justify-center ">
            <div className="w-full max-w-6xl md:h-475px my-4 md:my-0 flex flex-col justify-center items-center select-none bg-[#161616] mx-2" >
                <div >
                    <div className='flex justify-center mb-2 '>
                        <div className="h-px w-6 mt-4 mr-1 bg-[#FFFFFF] " ></div>
                        <p className='font-Cairo text-[#FFFFFF] text-base'>من نحن؟</p>
                        <div className="h-px w-6 mt-4 ml-1 bg-[#FFFFFF]" ></div>
                    </div>
                    <h1 className='font-Cairo text-[#FFFFFF] md:text-2xl font-extrabold'>حسنا, سوف نجيب على بعض الأسئلة</h1>
                </div>
                <div className='flex md:flex-row-reverse flex-col mt-10 justify-around items-center ' >
                    {WhyUS}
                </div>
            </div>
        </div>
    )
}