import React, {useEffect, useState, useRef} from "react";


const Stepper = ({steps, currentStep}) => {
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
                count++;
            }
            else if (count < stepNumber) {
                newSteps[count] = {
                    ...newSteps[count],
                    highlighted: false,
                    selected: true,
                    completed: true,
                };
                count++;
            }
            else {
                newSteps[count] = {
                    ...newSteps[count],
                    highlighted: false,
                    selected: false,
                    completed: false,
                };
                count++;
            }
        }
        return newSteps;
    };

    useEffect(() => {
        //create object
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
    }, [steps, currentStep ]);

    const displaySteps = newStep.map((step, index) => {
        return (
        <div key = {index} 
        className= {
            index !== 0 ? "w-full flex items-center" : "flex items-center"}>
            <div className={`flex-auto border-t-2 transition duration-500 ease-in-out ${step.selected ? "border-green-600" : "border-gray-300"}`}>
                {/* Display line */}
            </div>
            <div className="relative flex flex-col items-center text-teal-600">
                <div className={`rounded-full transition duration-500 ease-in-out border-2  h-12 w-12 flex items-center justify-center py-3 
                ${step.completed ? "bg-green-600" : ""}
                ${step.selected ? "font-bold border-green-600" : "border-gray-300"}`}>
                    {/* Display numbers */}
                    {step.completed ? (
                        <span className="text-xl text-white">&#10003;</span>
                    ) : (index + 1)}
                </div>
                <div className={`absolute top-0 text-center mt-16 w-32 text-xs font-medium uppercase ${step.highlighted ? "text-gray-900" : "text-gray-400"}`}>
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
};

export default Stepper;