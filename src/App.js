import { useState } from "react";
import Stepper from "./components/Stepper";
import {StepperControl} from "./components/StepperControl";

import ServiceAndDoctor from "./components/steps/ServiceAndDoctor";
import DateAndTime from "./components/steps/DateAndTime";
import Payment from "./components/steps/Payment";
import Check from "./components/steps/Check";
import Final from "./components/steps/Final";
import { StepperContext } from "./contexts/StepperContext";

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState({});

  const handleChange = (e) => {
    const {name, value} = e.target;
    setUserData({...userData, [name]: value});
  };

  const steps = [
    "Услуга и Врач",
    "Дата и Время",
    "О себе",
    "Проверка",
    ""
  ];
  
  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <ServiceAndDoctor />
      case 2:
        return <DateAndTime />
      case 3:
        return <Payment/>
      case 4:
        return <Check />  
      default: 
        return <Final />
    }
  };

  const handleClick = (direction) => {
    let newStep = currentStep;
    if (direction === "reload") 
      newStep = 1;
    else direction === "next" ? newStep++ : newStep--;

    if (newStep === steps.length) {
        console.log(userData);
    }
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  }



  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="w-full md:w-1/2 mx-auto shadow-xl rounded-2xl pb-2 bg-white">

        {/* Stepper Info */}      
        {steps.length !== currentStep ? (<div className="mt-5"> <Stepper steps = {steps} currentStep = {currentStep} setCurrentStep = {setCurrentStep} /></div>) : ""}
      
        {/* Display Components */}
        <div className="my-10 p-10">
          <StepperContext.Provider value={{
            handleChange,
            userData
          }} >

            {displayStep(currentStep)} 
            
          </StepperContext.Provider>
        </div>

        {/* Navigation controls */}
        <StepperControl
          handleClick={handleClick}
          currentStep={currentStep}
          steps={steps}
        />
      </div>
    </div>
  );
}

export default App;
