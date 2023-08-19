import { useEffect, useState, useRef } from "react";

export default function Stepper({ steps, currentStep, setCurrentStep }) {
  const [newStep, setNewStep] = useState([]);
  const stepRef = useRef();

  const updateStep = (stepNumber, steps) => {
    const newSteps = [...steps];
    let count = 0;

    while (count < newSteps.length) {
      if (count === stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: true,
          selected: true,
          completed: false,
        };
      } else if (count < stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: true,
          completed: true,
        };
      } else {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: false,
          completed: false,
        };
      }
      count++;
    }
    return newSteps;
  };

  useEffect(() => {
    const stepsState = steps.map((step, index) =>
      Object.assign(
        {},
        {
          decription: step,
          completed: false,
          highlighted: index === 0 ? true : false,
          selected: index === 0 ? true : false,
        }
      )
    );
    stepRef.current = stepsState;
    const current = updateStep(currentStep - 1, stepRef.current);
    setNewStep(current);
  }, [steps, currentStep]);

  const changeStep = (index) => {
    currentStep > index && setCurrentStep(index);
  };

  const displaySteps = newStep.map((step, index) => {
    return (
      <div
        key={index}
        className={`${
          index !== 0 ? "w-full flex items-center" : "flex items-center"
        } ${index === newStep.length - 1 ? "hidden" : ""}`}
      >
        <div
          className={`flex-auto border-t-2 transition duration-500 ease-in-out ${
            step.selected
              ? "border-green-500"
              : "border-gray-300 dark:border-slate-400"
          }`}
        >
          {/* Display line */}
        </div>
        <div className="relative flex flex-col items-center text-green-500">
          <button
            tabIndex={`${step.completed ? "1" : "-1"}`}
            onClick={() => changeStep(index + 1)}
            className={` rounded-full transition duration-500 ease-in-out border-2  h-12 w-12 flex items-center justify-center py-3 
                ${
                  step.completed
                    ? "bg-green-500 hover:bg-green-600 hover:border-green-600 active:bg-green-700"
                    : "bg-white  dark:bg-slate-800 cursor-default"
                }
                ${
                  step.selected
                    ? "font-bold border-green-500"
                    : "border-gray-300 dark:border-slate-400"
                }`}
          >
            {/* Display numbers */}
            {step.completed ? (
              <span className="text-xl text-white ">&#10003;</span>
            ) : (
              index + 1
            )}
          </button>
          <div
            className={`absolute top-0 text-center mt-16 sm:w-32 w-16 text-xs uppercase  ${
              step.highlighted
                ? "text-slate-800 dark:text-white font-medium"
                : "text-gray-400 dark:text-slate-400 font-thin"
            }`}
          >
            {/* Display description */}
            {step.decription}
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="mx-6 p-4 flex justify-between items-center">
      {displaySteps}
    </div>
  );
}
