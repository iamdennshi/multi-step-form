import { useState } from "react";
import Stepper from "./components/Stepper";

import ServiceAndDoctor from "./components/steps/ServiceAndDoctor";
import DateAndTime from "./components/steps/DateAndTime";
import AboutSelf from "./components/steps/AboutSelf";
import Check from "./components/steps/Check";
import Final from "./components/steps/Final";
import { StepperContext } from "./contexts/StepperContext";

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState({});

  function getNowDate() {
    let d = new Date();
    return `${d.getFullYear()}-${("0" + (d.getMonth() + 1)).slice(-2)}-${("0" + d.getDate()).slice(-2)}`;
  }

  const handleChange = (data) => {
    setUserData({...userData, ...data});
    console.log(data);
    handleClick("next");
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
        return <AboutSelf/>
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
    else if (direction === "next") {

      newStep++;
    }  
    else {
      newStep--;
    } 


    if (newStep === steps.length) {
      
      console.log(userData);
        // console.log(JSON.stringify(userData));
        // fetch("http://localhost:4444", {
        //   method: "POST",
        //   headers: {
        //     'Content-Type': 'application/json;charset=utf-8'
        //   },
        //   body: JSON.stringify(userData),
        // });
    }

    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  }



  return (
    <div className="flex flex-col justify-center items-center min-h-full p-0 sm:px-6 sm:py-12">
      <div className="w-full lg:w-1/2 min-h-screen sm:min-h-fit shadow-xl rounded-2xl bg-white t">

        {/* Stepper Info */}      
        {steps.length !== currentStep ? (<div className="mt-5"> <Stepper steps = {steps} currentStep = {currentStep} setCurrentStep = {setCurrentStep} /></div>) : ""}
      
        {/* Display Components */}
        <div className="mt-10 p-10">
          <StepperContext.Provider value={{handleChange, userData, setUserData}} >
            {displayStep(currentStep)} 
          </StepperContext.Provider>
        </div>
      </div>
    </div>
  );
}

export default App;
