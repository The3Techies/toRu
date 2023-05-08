import { useMyContext } from "../../State/MyContext";
import whatsappIcon from "../../assets/imgHome/whatsappIcon.png";
import telegramIcon from "../../assets/imgHome/telegramIcon.png";
import emailIcon from "../../assets/imgHome/emailIcon.png";
import InstagramIcon from "../../assets/imgHome/InstagramIcon.png";



const ContactUs = () => {
  const { state } = useMyContext();
 
  const Contacts = [
    {
      name: "واتساب",
      info: "7900302193024",
      icon: whatsappIcon,
    },
    {
      name: "تيلقرام",
      info: "@hfjksdhfjdsa",
      icon: telegramIcon,
    },
    {
      name: "ايميل",
      info: "torussiacampany@gmail.com",
      icon: emailIcon,
    },
    {
      name: "انستاقرام",
      info: "@fdsfdsfds",
      icon: InstagramIcon,
    },
    
  ];


  const ContactsHtml: Array<JSX.Element> = Contacts.map(
    ({ name, info, icon }, i) => {
      return (
        <div key={i} className="flex mb-10 cursor-pointer flex-row-reverse self-start mr-5">
          <div className="mr-2">
            <h1
              className={"font-Cairo  font-bold text-right " + state.fontColor}
            >
              {name}
            </h1>
            <p
              className={
                "font-Cairo text-right mt-1 select-text " + state.fontColor
              }
            >
              {info}
            </p>
          </div>
          <img src={icon} className="w-12 h-12 ml-2 " />
        </div>
      );
    }
  );

  return (
    <div>
      <div className="w-full flex justify-center md:mt-10 ">
        <div
          className={
            "shadow-lg rounded-2xl w-full max-w-6xl pb-10 my-4 md:my-0 flex flex-col justify-center items-center mx-2 " +
            state.bgColor +
            state.shadowColor
          }
        >
          <div className="my-6">
            <div className="flex justify-center mb-2">
              <div
                className={
                  "h-px w-6 mt-4 mr-1 select-none " +
                  (state.dark ? "bg-[#FFFFFF] " : "bg-[#214966] ")
                }
              ></div>
              <p className={"font-Cairo text-base " + state.fontColor}>
                تواصل معنا
              </p>
              <div
                className={
                  "h-px w-6 mt-4 mr-1 select-none " +
                  (state.dark ? "bg-[#FFFFFF] " : "bg-[#214966] ")
                }
              ></div>
            </div>
            <h1
              className={
                "font-Cairo md:text-2xl font-extrabold " + state.fontColor
              }
            >
              هل لديك اي اسئلة أو استفسار؟
            </h1>
          </div>


          <div className="flex flex-col-reverse md:flex-row justify-center w-full ">
            <div className="flex flex-col md:flex-row-reverse justify-center md:gap-10 items-end mt-12 md:max-w-1/3 flex-wrap">
              {ContactsHtml}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
