import MyComponentProps from './MyComponentProps'
import { useMyContext } from "../../State/MyContext"

const TopUnivers: React.FC<MyComponentProps> = ({ name }) => {
  const { state } = useMyContext()

  const MoscowUniversities = [
    {
      name: "",
      img: "",
      info: "",
      link: "",
    }
  ]
  const StPetersburgUniversities = [
    {
      name: "",
      img: "",
      info: "",
      link: "",
    },
  ]
  const UfaUniversities = [
    {
      name: "",
      img: "",
      info: "",
      link: "",
    },
  ]
  const KazanUniversities = [
    {
      name: "",
      img: "",
      info: "",
      link: "",
    },
  ]
  const RostovUniversities = [
    {
      name: "",
      img: "",
      info: "",
      link: "",
    },
  ]
  const YekaterinburgUniversities = [
    {
      name: "",
      img: "",
      info: "",
      link: "",
    },
  ]


  let CityUniversities: Array<any> = []
  switch (name) {
    case "Moscow":
      CityUniversities = MoscowUniversities
      break
    case "St Petersburg":
      CityUniversities = StPetersburgUniversities
      break
    case "Ufa":
      CityUniversities = UfaUniversities
      break
    case "Kazan":
      CityUniversities = KazanUniversities
      break
    case "Rostov":
      CityUniversities = RostovUniversities
      break
    case "Yekaterinburg":
      CityUniversities = YekaterinburgUniversities
      break
  }
  const CityUniversitiesHtml: Array<JSX.Element> = CityUniversities.map(({ name, img, info, link }, i) => {
    return (
      <div key={i} className={'w-full max-w-6xl h-96 rounded-br-3xl shadow-lg py-8 text-right flex mt-28  ' + state.bgApp + state.shadowColor + (i === 0 || i % 2 === 0 ? "flex-row-reverse" : " ")}>
        <div className='w-2/3'>
          <p className={'font-Cairo text-sm md:text-base text-right mx-8 ' + state.fontColor}>{info}</p>
          <a className='font-Cairo text-sm md:text-base text-center mx-8 text-[#48cae4] font-bold underline ' target="_blank" href={link}>موقح الجامعة</a>
        </div>
        <div >
          <img src={img} className={"pointer-events-none -mt-24 h-96 w-96 rounded-lg shadow-lg  " + state.shadowColor}></img>
          <h1 className='font-Cairo text-sm md:text-2xl font-extrabold -mt-12 mx-8 text-[#48cae4]'>{name}</h1>
        </div>
      </div>
    )
  })


  return (
    <div>
      <div className={'w-full mt-8 flex justify-center '}>
        <div className={"w-full max-w-6xl p-8 rounded-2xl shadow-lg flex flex-col justify-center items-center mx-2  " + state.bgColor + state.shadowColor}>

          <div className='flex justify-center mb-2'>
            <div className={'h-px w-6 mt-4 mr-1 ' + (state.dark ? "bg-[#FFFFFF] " : "bg-[#214966] ")} ></div>
            <h1 className={'font-Cairo md:text-xl font-extrabold text-center ' + state.fontColor}>اشهر الجامعات في المدينة</h1>
            <div className={'h-px w-6 mt-4 mr-1 ' + (state.dark ? "bg-[#FFFFFF] " : "bg-[#214966] ")} ></div>
          </div>

          {CityUniversitiesHtml}
        </div>
      </div>
    </div>
  );
}

export default TopUnivers