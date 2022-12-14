import React from 'react'

export const StepperControl = ({handleClick, currentStep, steps}) => {
  return (
    <div className='container flex justify-around mt-4 mb-8'>
        {/* back button */}
        <button 
        onClick={()=>handleClick("back")}
        className={`${currentStep === 1 ? "hidden" : ""} bg-white text-slate-400 uppercase py-2 
        px-4 rounded-xl font-semibold cursor-pointer border-2 border-slate-300
         hover:bg-slate-700 hover:text-whie transition duration-200 ease-in-out `}>
            Назад
         </button>
        {/* next button */}
        <button 
        onClick={()=>handleClick("next")}
        className='bg-green-500 text-white uppercase py-2 
        px-4 rounded-xl font-semibold cursor-pointe
         hover:bg-green-600 transition duration-200 ease-in-out'>
          {currentStep == steps.length ? "Отправить" : "Далее"}
        </button>
    </div>);
};
