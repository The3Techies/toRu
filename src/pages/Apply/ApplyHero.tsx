import { useMyContext } from "../../State/MyContext";
import whatsappIcon from '../../assets/imgHome/whatsappIcon.webp'
import telegramIcon from '../../assets/imgHome/telegramIcon.webp'
import emailIcon from '../../assets/imgHome/emailIcon.webp'
import InstagramIcon from "../../assets/imgHome/InstagramIcon.webp"

export default function ApplyHero() {

  const { state } = useMyContext()

  const Contacts = [
    {
      name: "واتساب",
      info: "+79526680499",
      icon: whatsappIcon,
      link: "https://wa.me/+79526680499"
    },
    // {
    //   name: "تيلقرام",
    //   info: "@hfjksdhfjdsa",
    //   icon: telegramIcon,
    // link: "https://wa.me/+79526680499"
    // },
    {
      name: "ايميل",
      info: "torussiacampany@gmail.com",
      icon: emailIcon,
      link: "mailto:torussiacampany@gmail.com"
    },
    // {
    //   name: "انستاقرام",
    //   info: "@fdsfdsfds",
    //   icon: InstagramIcon,
    // link: "https://wa.me/+79526680499"
    // },
    
  
  ];
  const ContactsHtml: Array<JSX.Element> = Contacts.map(
    ({ name, info, icon, link }, i) => {
      return (
        <div key={i} className="flex mb-10 cursor-pointer flex-row-reverse self-start mr-5" >
          <div>
            <h1 className={'font-Cairo  font-bold text-right ' + state.fontColor}>{name}</h1>
            <p className={'font-Cairo text-right mt-1 select-text ' + state.fontColor}>{info}</p>
          </div>
          <a href={link} target="_blank"><img src={icon} className="w-12 h-12 ml-4" /></a>
        </div>
      )
    })

  return (
    <div className="w-full mt-[3.5rem] flex justify-center">
      <div className={'shadow-lg rounded-2xl w-full max-w-6xl py-10 my-4 flex flex-col justify-center items-center mx-2 ' + state.bgColor + state.shadowColor}>

        <div className='flex justify-center mb-2'>
          <div className={'h-px w-6 mt-4 mr-1 select-none ' + (state.dark ? "bg-[#FFFFFF] " : "bg-[#214966] ")} ></div>
          <p className={'font-Cairo text-base ' + state.fontColor}>تواصل معنا</p>
          <div className={'h-px w-6 mt-4 mr-1 select-none ' + (state.dark ? "bg-[#FFFFFF] " : "bg-[#214966] ")} ></div>
        </div>

        <h1 className={'font-Cairo md:text-2xl font-extrabold text-center ' + state.fontColor}>تواصل معنا مباشرة</h1>

        <div className="flex flex-col md:self-center md:flex-row-reverse self-start md:gap-10 items-end mt-12 md:max-w-1/3">
          {ContactsHtml}
        </div>

      </div>
    </div>
  )
}