import { useState } from "react"
import { useMyContext } from "../../State/MyContext";
import whatsappIcon from '../../assets/imgHome/whatsappIcon.png'
import telegramIcon from '../../assets/imgHome/telegramIcon.png'
import emailIcon from '../../assets/imgHome/emailIcon.png'

const ContactUs =() => {
  const { state } = useMyContext();

  const [name, SetName] = useState<string>("")
  const [email, SetEmail] = useState<string>("")
  const [message, SetMessage] = useState<string>("")

  function handleSubmit() {
    console.log("Submit")
  }

  return (
    <div>
      <div className='w-full flex justify-center md:mt-10 '>
        <div className={'shadow-lg rounded-2xl w-full max-w-6xl pb-10 my-4 md:my-0 flex flex-col justify-center items-center mx-2 ' + state.bgColor + state.shadowColor}>

          <div className="my-6">
            <div className='flex justify-center mb-2'>
              <div className={'h-px w-6 mt-4 mr-1 ' + (state.dark ? "bg-[#FFFFFF] " : "bg-[#214966] ")} ></div>
              <p className={'font-Cairo text-base ' +  state.fontColor}>تواصل معنا</p>
              <div className={'h-px w-6 mt-4 mr-1 ' + (state.dark ? "bg-[#FFFFFF] " : "bg-[#214966] ")} ></div>
            </div>
            <h1 className={'font-Cairo md:text-2xl font-extrabold ' + state.fontColor }>هل لديك اي اسئلة أو استفسار؟</h1>
          </div>

          <div className="flex flex-col-reverse md:flex-row justify-center  w-full mt-10 ">

            <div className=" flex flex-col md:mr-12 mx-3 mb-8 md:mb-0 md:w-1/3">
              <input placeholder="الإسم" type='text' value={name} onChange={(event) => { SetName(event.target.value); }} className={'font-Cairo border-2 rounded-md h-10  text-right px-5 text-sm ' + state.bgColor + state.fontColor + state.borderColer} ></input>
              <input placeholder="ايميل" type='email' value={email} onChange={(event) => { SetEmail(event.target.value); }} className={'font-Cair border-2 rounded-md h-10  text-right px-5 mt-4 text-sm '  + state.bgColor + state.fontColor + state.borderColer}></input>
              <textarea placeholder="اكتب رسالتك هنا" value={message} onChange={(event) => { SetMessage(event.target.value); }} className={'font-Cairo border-2 rounded-md h-36  text-right px-5 pt-5 mt-4 resize-none text-sm ' + state.bgColor + state.fontColor + state.borderColer}></textarea>
              <button onClick={handleSubmit} className= {'font-Cairo font-bold mt-3 text-lg rounded-md border-2 hover:shadow-lg ' + state.borderColer + (state.dark ? "text-[#161616] bg-[#FFFFFF] hover:shadow-[#e0e0e0] " : "text-[#FFFFFF] bg-[#214966] hover:shadow-[#94d3e0] ")}>ارسل</button>
            </div>

            <div className="flex flex-col justify-center items-end m-4 md:m-0 md:max-w-1/3">
              <div className="flex mb-10 cursor-pointer">
                <div>
                  <h1 className={'font-Cairo  font-bold text-right '  + state.fontColor}>واتساب</h1>
                  <p className={'font-Cairo text-right mt-1 select-text '  + state.fontColor}>7900302193024</p>
                </div>
                <img src={whatsappIcon} className="w-12 h-12 ml-4" />
              </div>

              <div className="flex mb-10 cursor-pointer">
                <div>
                  <h1 className={'font-Cairo  font-bold text-right '  + state.fontColor}>تيلقرام</h1>
                  <p className={'font-Cairo text-right mt-1 select-text '  + state.fontColor}>@hfjksdhfjdsa</p>
                </div>
                <img src={telegramIcon} className="w-12 h-12 ml-4" />
              </div>

              <div className="flex mb-10 cursor-pointer">
                <div>
                  <h1 className={'font-Cairo  font-bold text-right '  + state.fontColor}>ايميل</h1>
                  <p className={'font-Cairo text-right mt-1 select-text '  + state.fontColor}>ssiacam@gmail.com</p>
                </div>
                <img src={emailIcon} className="w-12 h-12 ml-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs