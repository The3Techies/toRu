import { useMyContext } from "../../State/MyContext";
import whatsappIcon from '../../assets/imgHome/whatsappIcon.png'
import telegramIcon from '../../assets/imgHome/telegramIcon.png'
import emailIcon from '../../assets/imgHome/emailIcon.png'
import InstagramIcon from "../../assets/imgHome/InstagramIcon.png"

export default function ApplyHero() {
    const { state } = useMyContext()

    const Contacts = [
        {
            name: 'واتساب',
            info: '7900302193024',
            icon: whatsappIcon
        },
        {
            name: 'تيلقرام',
            info: '@hfjksdhfjdsa',
            icon: telegramIcon
        },
        {
            name: 'ايميل',
            info: 'ssiacam@gmail.com',
            icon: emailIcon
        },{
            name: "انستاقرام",
            info: "@fdsfdsfds",
            icon: InstagramIcon,
          },
    ]
    const ContactsHtml: Array<JSX.Element> = Contacts.map(({ name, info, icon }, i) => {
        return (
            <div key={i} className="flex mb-10 cursor-pointer" >
                <div>
                    <h1 className={'font-Cairo  font-bold text-right ' + state.fontColor}>{name}</h1>
                    <p className={'font-Cairo text-right mt-1 select-text ' + state.fontColor}>{info}</p>
                </div>
                <img src={icon} className="w-12 h-12 ml-4" />
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

                <h1 className={'font-Cairo md:text-2xl font-extrabold text-center ' + state.fontColor}>تواصل معنا مباشرتا</h1>

                <div className="flex flex-col md:flex-row-reverse justify-center md:gap-10 items-end mt-12 md:max-w-1/3">
                    {ContactsHtml}
                </div>

            </div>
        </div>
    )
}