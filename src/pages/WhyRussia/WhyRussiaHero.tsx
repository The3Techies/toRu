import { useMyContext } from "../../State/MyContext";


export default function WhyRussiaHero() {

    const { state } = useMyContext();

    return (
        <div className="w-full mt-14 md:mt-0 flex justify-center  ">
            <div className="w-full max-w-6xl h-screen flex justify-start items-center bg-WhyRussia-hero-pattern bg-no-repeat bg-right-bottom bg-[length:90rem_45rem] -mr-24">
                <div className="text-right md:w-1/3 mr-16 ">
                    <h1 className="font-Cairo text-base md:text-3xl font-extrabold mb-2 md:mb-8 leading-normal text-[#DE9F67] md:-mr-10 md:text-center ">الدراسة في روسيا: تجربة فريدة وبأسعار معقولة</h1>
                    <p className={"font-Cairo text-xs md:text-sm font-light md:-mr-10 text-right tracking-wide " + state.fontColor} >الدراسة في روسيا تجربة فريدة وثرية تتيح فرصًا لا مثيل لها للطلاب الذين يبحثون عن توسيع آفاقهم. تتميز الجامعات الروسية بتراث ثقافي غني ومدن حيوية وجامعات عالمية المستوى في مجالات مثل الهندسة والطب والرياضيات. بالإضافة إلى ذلك، فإن الرسوم الدراسية في روسيا معقولة وتكاليف المعيشة منخفضة، مما يجعل الدراسة في روسيا خيارًا ميسور التكلفة للعديد من الطلاب. يمكن لاختيار روسيا كوجهة للدراسة فتح عالمًا من الفرص وتوفير منظور عالمي ثمين سيفيد الطلاب طوال حياتهم الأكاديمية والمهنية.</p>
                </div>
                
            </div>
        </div>
    )
}