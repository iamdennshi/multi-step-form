import { useState } from "react";
import Stepper from "./components/Stepper";
import {StepperControl} from "./components/StepperControl";

import Account from "./components/steps/Account";
import Details from "./components/steps/Details";
import Final from "./components/steps/Final";
import Payment from "./components/steps/Payment";
import { StepperContext } from "./contexts/StepperContext";

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState('');
  const [finalData, setFinalData] = useState();

  const steps = [
    "Услуга и Врач",
    "Дата и Время",
    "О себе",
    "Подтверждение"
  ];
  
  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <Account />
      case 2:
        return <Details />
      case 3:
        return <Payment/>
      case 4:
        return <Final />                
    }
  };

  const handleClick = (direction) => {
    let newStep = currentStep;
    direction === "next" ? newStep++ : newStep--;
    // check if steps are within bounds
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="md:w-1/2 mx-auto shadow-xl rounded-2xl pb-2 bg-white">
        <div className="container horizontal mt-5">
          <Stepper 
            steps = {steps}
            currentStep = {currentStep}
          />
        </div>
        {/* Display Components */}
        <div className="my-10 p-10">
          <StepperContext.Provider value={{
            userData,
            setUserData,
            finalData,
            setFinalData
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
