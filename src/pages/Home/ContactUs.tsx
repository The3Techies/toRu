import { useState } from "react"

import whatsappIcon from '../../assets/imgHome/whatsappIcon.png'
import telegramIcon from '../../assets/imgHome/telegramIcon.png'
import emailIcon from '../../assets/imgHome/emailIcon.png'



export default function ContactUs() {

  const [name , SetName ] = useState<string>("")
  const [email , SetEmail ] = useState<string>("")
  const [message, SetMessage] = useState<string>("")

  function handleSubmit(){
    console.log("Submit")
  }

  return (
    <div>
      <div className="w-full flex justify-center md:mt-10 ">
        <div className="shadow-lg shadow-[#e0e0e0] rounded-2xl w-full max-w-6xl md:pb-10 my-4 md:my-0 flex flex-col justify-center items-center select-none bg-[#161616] mx-2" >

          <div className="my-6">
            <div className='flex justify-center mb-2'>
              <div className="h-px w-6 mt-4 mr-1 bg-[#FFFFFF] " ></div>
              <p className='font-Cairo text-[#FFFFFF] text-base'>تواصل معنا</p>
              <div className="h-px w-6 mt-4 ml-1 bg-[#FFFFFF]" ></div>
            </div>
            <h1 className='font-Cairo text-[#FFFFFF] md:text-2xl font-extrabold'>هل لديك اي اسئلة أو استفسار؟</h1>
          </div>

          <div className="flex flex-col-reverse md:flex-row justify-center w-full mt-10 ">

            <div className=" flex flex-col  md:mr-12 mx-3 mb-8 md:mb-0">
              <input placeholder="الإسم" type='text' value={name} onChange={(event)=> {SetName(event.target.value);}} className="bg-[#161616] font-Cairo border-white border-2 rounded-md h-10 md:w-96 text-[#FFFFFF] text-right px-5 text-sm" ></input>
              <input placeholder="ايميل" type='email'  value={email} onChange={(event)=> {SetEmail(event.target.value);}} className="bg-[#161616] font-Cairo border-white border-2 rounded-md h-10 md:w-96 text-[#FFFFFF] text-right px-5 mt-4 text-sm"></input>
              <textarea placeholder="اكتب رسالتك هنا" value={message} onChange={(event)=> {SetMessage(event.target.value);}} className="bg-[#161616] font-Cairo border-white border-2 rounded-md h-36 md:w-96 text-[#FFFFFF] text-right px-5 pt-5 mt-4 resize-none text-sm"></textarea>
              <button onClick={handleSubmit} className="bg-[#FFFFFF] font-Cairo font-bold mt-3 text-lg text-[#161616] rounded-md border-[#161616] border-2 hover:shadow-lg hover:shadow-[#e0e0e0]">ارسل</button>
            </div>

            <div className="flex flex-col justify-center items-end m-4 md:m-0">
              <div className="flex mb-10 cursor-pointer">
                <div>
                  <h1 className="font-Cairo text-[#FFFFFF] font-bold text-right">واتساب</h1>
                  <p className="font-Cairo text-[#FFFFFF] text-right mt-1 select-text">7900302193024</p>
                </div>
                <img src={whatsappIcon} className="w-12 h-12 ml-4" />
              </div>

              <div className="flex mb-10 cursor-pointer">
                <div>
                  <h1 className="font-Cairo text-[#FFFFFF] font-bold text-right">تيلقرام</h1>
                  <p className="font-Cairo text-[#FFFFFF] text-right mt-1 select-text">@hfjksdhfjdsa</p>
                </div>
                <img src={telegramIcon} className="w-12 h-12 ml-4"/>
              </div>

              <div className="flex mb-10 cursor-pointer">
                <div>
                  <h1 className="font-Cairo text-[#FFFFFF] font-bold text-right">ايميل</h1>
                  <p className="font-Cairo text-[#FFFFFF] text-right mt-1 select-text">torussiacampany@gmail.com</p>
                </div>
                <img src={emailIcon} className="w-12 h-12 ml-4"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}