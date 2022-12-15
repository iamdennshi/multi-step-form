import React from 'react'

function Next({handleClick, currentStep, steps}) {
  return (
    <button 
    onClick={()=>handleClick("next")}
    className='bg-green-500 text-white uppercase py-2 
    px-8 rounded-xl font-semibold cursor-pointe
     hover:bg-green-600 active:bg-green-700 transition duration-200 ease-in-out'>
      {currentStep === steps.length - 1 ? "Отправить" : "Далее"}
    </button>
  );
}

function Back({handleClick}) {
  return (
    <button 
    onClick={()=>handleClick("back")}
    className='bg-white text-slate-400 uppercase py-2 
    px-8 rounded-xl font-semibold cursor-pointer border-2 border-slate-300
     hover:bg-slate-700 hover:text-whie transition duration-200 ease-in-out'>
        Назад
    </button>
  );
}

function Reload({handleClick}) {
  return (
    <button 
      onClick={()=>handleClick("reload")}
      className='bg-green-500 text-white uppercase py-2 
      px-8 rounded-xl font-semibold cursor-pointe
      hover:bg-green-600 active:bg-green-700 transition duration-200 ease-in-out'>
        отправить заявку ещё
    </button>
  );
}

export const StepperControl = ({handleClick, currentStep, steps}) => {
  return (
    <div className='flex justify-around mt-4 mb-8'>
        {currentStep !== steps.length ? (
          <>
            {currentStep !== 1 ? (<Back handleClick={handleClick}/>) : ""}
            <Next handleClick={handleClick} currentStep={currentStep} steps={steps}/>
          </>
        ) : (
          <Reload handleClick={handleClick}/>
        )}
    </div>);
};
