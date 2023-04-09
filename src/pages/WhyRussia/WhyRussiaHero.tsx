import { useMyContext } from "../../State/MyContext"

const WhyRussiaHero = () => {
    const { state } = useMyContext();

    return (
        <div className="w-full h-screen mt-[3.5rem] flex justify-center ">
            <div className=" max-w-6xl h-screen flex items-center bg-WhyRussia-heroSS md:bg-WhyRussia-hero bg-[length:250%_100%] md:bg-[length:100%_100%] bg-right bg-no-repeat ">
                <div className="text-right md:w-1/2 md:ml-10 mx-4">
                    <h1 className="font-Cairo text-base md:text-3xl font-extrabold mb-2 leading-normal text-[#DE9F67] text-center ">الدراسة في روسيا: تجربة فريدة وبأسعار معقولة</h1>
                    <p className={"font-Cairo text-xs font-light tracking-wide text-center " + state.fontColor } >الدراسة في روسيا تجربة فريدة وثرية تتيح فرصًا لا مثيل لها للطلاب الذين يبحثون عن توسيع آفاقهم. تتميز الجامعات الروسية بتراث ثقافي غني ومدن حيوية وجامعات عالمية المستوى في مجالات مثل الهندسة والطب والرياضيات. بالإضافة إلى ذلك، فإن الرسوم الدراسية في روسيا معقولة وتكاليف المعيشة منخفضة، مما يجعل الدراسة في روسيا خيارًا ميسور التكلفة للعديد من الطلاب. يمكن لاختيار روسيا كوجهة للدراسة فتح عالمًا من الفرص وتوفير منظور عالمي ثمين سيفيد الطلاب طوال حياتهم الأكاديمية والمهنية.</p>
                </div>
            </div>
        </div>
    )
}

export default WhyRussiaHero