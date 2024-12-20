import { useState } from "react";
import Button from "./Button";

const steps = [
    {
        stepNumber: 1,
        heading: "Step 1",
        description: "Content of Step 1",
    },
    {
        stepNumber: 2,
        heading: "Step 2",
        description: "Content of Step 2",
    },
    {
        stepNumber: 3,
        heading: "Step 3",
        description: "Content of Step 3",
    },
];

function App() {
    const [activeStep, setActiveStep] = useState(1);

    const handlePrevious = () => {
        setActiveStep((prev) => (prev === 1 ? steps.length : prev - 1));
    };

    const handleNext = () => {
        setActiveStep((prev) => (prev === steps.length ? 1 : prev + 1));
    };

    return (
        <div className="flex items-center justify-center h-screen w-screen bg-gray-200">
            <div className="bg-white rounded-lg w-full max-w-lg p-8 space-y-8 shadow-md">
                <div className="flex justify-between items-center">
                    {steps.map((item) => (
                        <div
                            key={item.stepNumber}
                            className={`flex items-center justify-center w-10 h-10 rounded-full text-center font-semibold ${
                                activeStep === item.stepNumber
                                    ? "bg-rose-400 text-white"
                                    : "bg-gray-300 text-gray-800"
                            } transition-all duration-300`}
                        >
                            {item.stepNumber}
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <h1 className="text-xl font-bold">
                        {steps[activeStep - 1].heading}: {steps[activeStep - 1].description}
                    </h1>
                </div>

                <div className="flex justify-between">
                    <Button label="Previous" onClick={handlePrevious} />
                    <Button label="Next" onClick={handleNext} />
                </div>
            </div>
        </div>
    );
}

export default App;
