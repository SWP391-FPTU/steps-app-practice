import { useState } from "react";
import Button from "./Button"; // Import the new Button component

const steps = [
    {
        index: 1,
        title: "Step 1",
        content: "Content of Step 1",
    },
    {
        index: 2,
        title: "Step 2",
        content: "Content of Step 2",
    },
    {
        index: 3,
        title: "Step 3",
        content: "Content of Step 3",
    },
];

function App() {
    const [currentStep, setCurrentStep] = useState(1);

    // Các hàm handler
    const goToNextStep = () => {
        setCurrentStep((prev) => (prev === steps.length ? 1 : prev + 1));
    };

    const goToPreviousStep = () => {
        setCurrentStep((prev) => (prev === 1 ? steps.length : prev - 1));
    };

    return (
        <div className="h-screen w-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-screen-sm bg-white rounded-md px-10 py-10 space-y-10">
                {/* Vòng lặp hiển thị các bước */}
                <div className="flex justify-between items-center rounded-t-md">
                    {steps.map((step, index) => (
                        <div
                            key={step.index}
                            className={`${
                                currentStep === index + 1
                                    ? "bg-green-500 text-white"
                                    : "bg-gray-200 text-gray-700"
                            } font-medium flex items-center justify-center aspect-square w-10 text-center rounded-full transition-all duration-300`}
                        >
                            {step.index}
                        </div>
                    ))}
                </div>

                {/* Hiển thị nội dung của bước hiện tại */}
                <div className="flex items-center justify-center">
                    <h1 className="text-2xl font-semibold mt-5">
                        {steps[currentStep - 1].title}: {steps[currentStep - 1].content}
                    </h1>
                </div>

                {/* Các nút điều khiển */}
                <div className="flex items-center justify-between">
                    <Button onClick={goToPreviousStep} label="Previous" />
                    <Button onClick={goToNextStep} label="Next" />
                </div>
            </div>
        </div>
    );
}

export default App;
