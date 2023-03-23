export default function ContactUs() {

  return (
    <div>
      <div className="w-full  flex justify-center md:mt-10 ">
        <div className="w-full max-w-6xl md:h-475px my-4 md:my-0 flex flex-col justify-center items-center select-none bg-[#161616] mx-2" >

          <div>
            <div className='flex justify-center mb-2 '>
              <div className="h-px w-6 mt-4 mr-1 bg-[#FFFFFF] " ></div>
              <p className='font-Cairo text-[#FFFFFF] text-base'>تواصل معنا</p>
              <div className="h-px w-6 mt-4 ml-1 bg-[#FFFFFF]" ></div>
            </div>
            <h1 className='font-Cairo text-[#FFFFFF] md:text-2xl font-extrabold'>هل لديك اي اسئلة أو استفسار؟</h1>
          </div>

          <div className="flex justify-between ">

            <div>
              <div className="flex">
                <div>
                  <h1 className="font-Cairo text-[#FFFFFF] text-right">العنوان</h1>
                  <p className="font-Cairo text-[#FFFFFF] text-right ">روسيا - جمهورية باشكورتوستان(أوفا)</p>
                </div>
                <img className="w-12 h-12 bg-[red] border-x-rose-700 ml-4"/>
              </div>
              
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}