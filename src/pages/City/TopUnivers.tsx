import MyComponentProps from './MyComponentProps'
import { useMyContext } from "../../State/MyContext"
import imgs from './img'

const TopUnivers: React.FC<MyComponentProps> = ({ Cityname }) => {
  const { state } = useMyContext()

  const MoscowUniversities = [
    {
      name: "جامعة موسكو الحكومية",
      img: imgs.Moscow[0],
      infos : ['جامعة موسكو الحكومية هي مؤسسة تعليمية تقليدية رئيسية في روسيا تقدم التدريب في جميع فروع العلوم والعلوم الإنسانية الحديثة تقريبا. يمكن للطلاب الجامعيين اختيار واحد من 128 مؤهلات في 39 كليات ، في حين أن طلاب الدراسات العليا قد تتخصص في 18 فرعا للعلوم والعلوم الإنسانية وفي 168 مجالات مختلفة','أسست الجامعة في عام 1755 من قبل اللغوي إم في لومونوسوف وتم تصميمها على غرار الجامعات الألمانية ، حيث كانت هيئة التدريس الأصلية في الغالب ألمانية 2. في النصف الثاني من القرن ال19, أصبحت جامعة موسكو الحكومية أهم مركز للبحث العلمي والمنح الدراسية في روسيا 2','تحتل جامعة موسكو الحكومية المرتبة 1 في روسيا والمرتبة 169 في التصنيف العالمي لعام 2023'],
      link: "https://www.msu.ru/en/",
    },
    {
      name: "الجامعة الوطنيه للبحوث المدرسه العليا للاقتصاد",
      img: imgs.Moscow[1],
      infos: ['المدرسة العليا للاقتصاد بجامعة الأبحاث الوطنية هي جامعة بحثية وطنية تقع في موسكو ولها فروع في سانت بطرسبرغ وبيرم ونيجني نوفغورود','تقدم الجامعة مجموعة واسعة من البرامج التعليمية من برامج البكالوريوس والماجستير','الجامعة الوطنية للبحوث المدرسة العليا للاقتصاد في المرتبة #561 في أفضل الجامعات العالمية والمرتبة 3 في روسيا'],
      link: "https://www.hse.ru/en/",
    },
    {
      name: "معهد موسكو للفيزياء والتكنولوجيا",
      img: imgs.Moscow[2],
      infos: [],
      link: "https://mipt.ru/",
    },
    {
      name: "الجامعة الوطنية للبحوث النووية",
      img: imgs.Moscow[3],
      infos: [],
      link: "https://eng.mephi.ru/",
    },
    {
      name: "الجامعة الروسية لصداقة الشعوب",
      img: '',
      infos: [],
      link: "https://eng.rudn.ru/",
    },
    
  ]
  const StPetersburgUniversities = [  
    {
      name: "جامعة سانت بطرسبرغ الحكومية",
      infos: [],
      link: "https://english.spbu.ru/",
    },
    {
      name: "جامعة آي تي إم أو",
      infos: [],
      link: "https://en.itmo.ru/",
    },
    {
      name: "جامعة سانت بطرسبرج الحكوميه للفنون التطبيقيه ",
      infos: [],
      link: "https://english.spbstu.ru/",
    },
    {
      name: "جامعة سانت بطرسبرغ الحكومية الكهروتقنية",
      infos: [],
      link: "https://etu.ru/",
    },
    {
      name: "جامعة هيرزن",
      infos: [],
      link: "https://en.hspu.org/",
    },
  ]
  const UfaUniversities = [
    {
      name: "",
      img: "",
      infos: [],
      link: "",
    },
  ]
  const KazanUniversities = [
    {
      name: "",
      img: "",
      infos: [],
      link: "",
    },
  ]
  const RostovUniversities = [
    {
      name: "",
      img: "",
      infos: [],
      link: "",
    },
  ]
  const YekaterinburgUniversities = [
    {
      name: "",
      img: "",
      infos: [],
      link: "",
    },
  ]

  let Cityimgs:Array<string> = []
  let CityUniversities: Array<any> = []
  switch (Cityname) {
    case "Moscow":
      CityUniversities = MoscowUniversities
      Cityimgs = imgs.Moscow
      break
    case "St Petersburg":
      CityUniversities = StPetersburgUniversities
      Cityimgs = imgs.StPetersburg
      break
    case "Ufa":
      CityUniversities = UfaUniversities
      Cityimgs = imgs.Ufa
      break
    case "Kazan":
      CityUniversities = KazanUniversities
      Cityimgs = imgs.Kazan
      break
    case "Rostov":
      CityUniversities = RostovUniversities
      Cityimgs = imgs.Rostov
      break
    case "Yekaterinburg":
      CityUniversities = YekaterinburgUniversities
      Cityimgs = imgs.Yekaterinburg
      break
  }
  const CityUniversitiesHtml: Array<JSX.Element> = CityUniversities.map(({ name, infos, link }, i) => {
    return (
      <div key={i} className={'w-full max-w-6xl md:h-96 rounded-br-3xl shadow-lg py-8 text-right flex-col-reverse justify-end flex mt-10 md:mt-28  ' + state.bgApp + state.shadowColor + (i === 0 || i % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row")}>
        <div className='md:w-2/3'>
          {infos.map((info:string , i:number )=>{
            return <p key={i} className={'font-Cairo text-xs md:text-base text-right mx-8 my-2 ' + state.fontColor}>{info}</p>
          })}
          <a className='font-Cairo text-sm md:text-base text-center mx-8 text-[#48cae4] font-bold underline ' target="_blank" href={link}>موقح الجامعة</a>
        </div>
        <div >
          <div className='select-none'><img src={Cityimgs[i]} className={"hidden md:block -mt-24 h-96 w-96 rounded-lg shadow-lg  " + state.shadowColor}></img></div>
          <h1 className={'font-Cairo text-sm md:text-xl font-extrabold text-center mt-1 ' +state.fontColor} >{name}</h1>
        </div>
      </div>
    )
  })

  return (
    <div>
      <div className={'w-full mt-8 flex justify-center '}>
        <div className={"w-full max-w-6xl p-8 rounded-2xl shadow-lg flex flex-col justify-center items-center mx-2  " + state.bgColor + state.shadowColor}>

          <div className='flex justify-center mb-2'>
            <div className={'h-px w-6 mt-3 md:mt-4 mr-1 ' + (state.dark ? "bg-[#FFFFFF] " : "bg-[#214966] ")} ></div>
            <h1 className={'font-Cairo md:text-xl text-sm font-extrabold text-center ' + state.fontColor}>اشهر الجامعات في المدينة</h1>
            <div className={'h-px w-6 mt-3 md:mt-4 mr-1 ' + (state.dark ? "bg-[#FFFFFF] " : "bg-[#214966] ")} ></div>
          </div>

          {CityUniversitiesHtml}
        </div>
      </div>
    </div>
  );
}

export default TopUnivers