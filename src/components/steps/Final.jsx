import React from "react";
import { StepperContext } from "../../contexts/StepperContext";

export default function Final() {
  const { handleClick } = React.useContext(StepperContext);
  return (
    <div className="flex flex-col items-center">
      <div className="wrapper">
        <svg
          className="checkmark"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 52 52"
        >
          <circle
            className="checkmark__circle"
            cx="26"
            cy="26"
            r="25"
            fill="none"
          />
          <path
            className="checkmark__check"
            fill="none"
            d="M14.1 27.2l7.1 7.2 16.7-16.8"
          />
        </svg>
      </div>
      <div className="mt-3 text-xl font-semibold uppercase text-green-500 text-center">
        Запись на прием зарегистрирована
      </div>
      <div className="dark:text-slate-400 text-lg font-semibold text-gray-500 text-center">
        Она будет подтверждена после SMS или телефонного звонка из нашего
        call-центра.
      </div>
      <input
        onClick={() => handleClick("reload")}
        type="button"
        value="отправить заявку ещё"
        className="bg-green-500 mt-10 text-white uppercase py-2 
          px-8 rounded-xl font-semibold cursor-pointer
          hover:bg-green-600 active:bg-green-700 transition duration-200 ease-in-out"
      />
    </div>
  );
}
