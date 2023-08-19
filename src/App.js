import { useState } from "react";
import { StepperContext } from "./contexts/StepperContext";

import Stepper from "./components/Stepper";
import ServiceAndDoctor from "./components/steps/ServiceAndDoctor";
import DateAndTime from "./components/steps/DateAndTime";
import AboutSelf from "./components/steps/AboutSelf";
import Check from "./components/steps/Check";
import Final from "./components/steps/Final";

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState({});

  const handleChange = (data, direction) => {
    if (data !== null) {
      if (currentStep === 3)
        data.phone =
          data.phone[0] === "+" ? data.phone : "+7 " + data.phone.toString();

      setUserData(() => ({ ...userData, ...data }));
    }
    console.log(data);
    handleClick(direction);
  };

  const handleClick = (direction) => {
    let newStep = currentStep;
    if (direction === "reload") {
      setUserData(() => ({}));
      newStep = 1;
    } else if (direction === "next") newStep++;
    else newStep--;

    if (newStep === steps.length) {
      console.log(userData);
      // console.log(JSON.stringify(userData));
      // fetch(`http://localhost:4444`, {
      //   method: "POST",
      //   headers: {
      //     'Content-Type': 'application/json;charset=utf-8'
      //   },
      //   body: JSON.stringify(userData),
      // });
    }
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };

  const steps = ["Услуга и Врач", "Дата и Время", "О себе", "Проверка", ""];

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <ServiceAndDoctor />;
      case 2:
        return <DateAndTime />;
      case 3:
        return <AboutSelf />;
      case 4:
        return <Check />;
      default:
        return <Final />;
    }
  };

  return (
    <div className="relative flex flex-col justify-center items-center min-h-screen bg-slate-100 dark:bg-slate-900">
      <div className="lg:w-1/2 md:w-10/12 w-full min-h-screen md:min-h-fit shadow-2xl rounded-none md:rounded-2xl bg-white dark:bg-slate-800">
        {/* Stepper Info */}
        {steps.length !== currentStep ? (
          <div className="mt-5">
            {" "}
            <Stepper
              steps={steps}
              currentStep={currentStep}
              setCurrentStep={setCurrentStep}
            />
          </div>
        ) : (
          ""
        )}
        {/* Display Components and Buttons */}
        <div className="mt-10 p-10">
          <StepperContext.Provider
            value={{ handleChange, userData, handleClick }}
          >
            {displayStep(currentStep)}
          </StepperContext.Provider>
        </div>
      </div>
    </div>
  );
}

export default App;
