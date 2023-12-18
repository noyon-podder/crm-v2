import { useState } from "react";
import "./stepper.css";
import { TiTick } from "react-icons/ti";

const OpportunitiesSteper = () => {
    const steps = ["", "", "", "", ""];
    const [currentStep, setCurrentStep] = useState(1);
    const [complete, setComplete] = useState(false);

    const handleNext = () => {
        if (currentStep === steps.length) {
            setComplete(true);
        } else {
            setCurrentStep((prev) => prev + 1);
        }
    };

    const handlePrev = () => {
        if (currentStep > 1) {
            setCurrentStep((prev) => prev - 1);
            setComplete(false);
        }
    };

    return (
        <div className="m-4 mt-6">
            <div className="flex justify-between">
                {steps?.map((step, i) => (
                    <div
                        key={i}
                        className={`step-item ${currentStep === i + 1 && "active"} ${(i + 1 < currentStep || complete) && "complete"
                            }`}
                    >
                        <div className="step">
                            {i + 1 < currentStep || complete ? <TiTick size={24} /> : i + 1}
                        </div>
                        <p className="text-gray-500">{step}</p>
                    </div>
                ))}
            </div>
            <div className="m-5 flex items-center justify-between">
                <button
                    className="btn font-semibold border border-gray-200 px-3 rounded-lg"
                    onClick={handlePrev}
                    disabled={currentStep === 1}
                >
                    Previous
                </button>
                <button
                    className="btn font-semibold border border-gray-200 px-3 rounded-lg"
                    onClick={handleNext}
                    disabled={currentStep === steps.length && !complete}
                >
                    {currentStep === steps.length ? "Finish" : "Next"}
                </button>
            </div>


            <div className="m-4 mt-10">
                {
                    currentStep == 5 ?
                        <p>Step number 5</p>
                        :
                        currentStep == 4 ?
                            <p>Step Number 4</p>
                            :
                            currentStep == 3 ?
                                <p>Step Number 3</p>
                                :
                                currentStep == 2 ?
                                    <p>Step Number 2</p>
                                    :
                                    <div>
                                        <h3 className="font-semibold lg:text-[26px] text-[18px]">Key Fields</h3>
                                        <hr className="mt-1 mb-6" />
                                        <div>
                                            <div className="flex items-center justify-between">
                                                <p className="text-[#717171]">Amount</p>
                                                <p className="font-semibold">22,500.00</p>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <p className="text-[#717171]">Close Date</p>
                                                <p className="font-semibold">20-10-13</p>
                                            </div>
                                        </div>
                                        <h3 className="font-semibold lg:text-[26px] text-[18px] md:mt-8 mt-4">Guidance for Success</h3>
                                        <hr className="mt-1 mb-4" />

                                        <ol className="mt-8">
                                            <div className="flex items-start gap-2">
                                                <div className="p-1 bg-gray-200 rounded-full"></div>
                                                <li className="font-semibold text-[#717171]">Acquire agreements as necessary</li>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                <div className="p-1 bg-gray-200 rounded-full"></div>
                                                <li className="font-semibold text-[#717171]">Acquire agreements as necessary</li>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                <div className="p-1 bg-gray-200 rounded-full"></div>
                                                <li className="font-semibold text-[#717171]">Adhere to your own internal discount processes</li>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                <div className="p-1 bg-gray-200 rounded-full"></div>
                                                <li className="font-semibold text-[#717171]">Obtain a signed contract</li>
                                            </div>
                                        </ol>
                                        <button className="btn bg-[#00B7E9] hover:bg-[#00B7E9] w-full rounded-xl text-white py-3 mt-7">Mark Stage as Complete</button>
                                    </div>
                }
            </div>


        </div>
    );
};

export default OpportunitiesSteper;
