import { useMyContext } from "../../State/MyContext";

export default function Form() {
  const { state } = useMyContext();

  return (
    <div className="w-full mt-4 flex justify-center">
      <div
        className={
          "shadow-lg rounded-2xl w-full max-w-6xl py-10 my-4 flex flex-col justify-center items-center mx-2 " +
          state.bgColor +
          state.shadowColor
        }
      >
        <iframe
          title="google form"
          className="w-full h-96 "
          src="https://docs.google.com/forms/d/e/1FAIpQLScj3IW8SyBukdyogKKmkaxNpTz826E81hpxxkmzANKXI5dW3g/viewform?embedded=true"
        ></iframe>
      </div>
    </div>
  );
}
