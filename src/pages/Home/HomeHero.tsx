import img from '../../assets/imgHome/image1.png'
export default function HomeHero() {

    return(
        <div className="w-full mt-14 flex justify-center bg-[] ">
            <div className="w-full max-w-6xl h-60 md:h-500px  flex justify-around items-center select-none">
                <div className="ml-2 md:ml-10 ">
                    <img src={""} className="h-46 w-46 md:h-96 md:w-96 " alt="" />
                </div>
                <div className="text-right mr-2 w-570px ">
                    <h1 className="font-Cairo text-[#FFFFFF] text-lg md:text-50px font-extrabold mb-2 md:mb-8 leading-relaxed">ترغب بالدراسة في روسيا؟</h1>
                    <p className="font-Cairo text-[#FFFFFF] text-xs md:text-lg font-light">معنا تستطيع تحقيق حلمك بالدراسة في افضل الجامعات الروسية وفي اي تخصص جامعي ترغب به</p>
                </div>
            </div>
        </div>
    )
}