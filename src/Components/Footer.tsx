import { useMyContext } from "../State/MyContext";

export default function Footer() {
  const { state } = useMyContext()

    return (
        <div className={"w-full h-14 flex justify-around items-center select-none mt-10 " + state.bgColor}>
            <h1 className={"font-Cairo font-bold "+ state.fontColor}>جميع الحقوق محفوظة.</h1>
        </div>
    )
}